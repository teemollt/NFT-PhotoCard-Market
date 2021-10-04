pragma solidity ^0.5.0;

// contract SafeMath {
//     function safeAdd(uint a, uint b) public pure returns (uint c) {
//         c = a + b;
//         require(c >= a);
//     }
//     function safeSub(uint a, uint b) public pure returns (uint c) {
//         require(b <= a); c = a - b; }

//     function safeMul(uint a, uint b) public pure returns (uint c) { c = a * b; require(a == 0 || c / a == b); }

//     function safeDiv(uint a, uint b) public pure returns (uint c) { require(b > 0);
//         c = a / b;
//     }
// }

contract Escrow {
    address agent;
    mapping(address => uint256) public deposits;

    modifier onlyAgent() {
        require(msg.sender == agent);
        _;
    }

    constructor() public {
        // agent를 디플로이어로 설정
        agent = msg.sender;
    }

    function deposit(address payee) public payable onlyAgent {
        uint256 amount = msg.value;
        deposits[payee] = deposits[payee] + amount;
    }

    function withdraw(address payable payee) public onlyAgent {
        // payment에 디파짓 담고
        uint256 payment = deposits[payee];
        // 담았으니 해당 디파짓은 다시 초기화
        deposits[payee] = 0;
        /* balance 속성을 이용하여 address의 잔고를 조회하고 transfer 함수를 이용하여 다른 address에 Ether를 (wei 단위로) 보낼 수 있습니다:
      address x = 0x123;
      address myAddress = this;
      if (x.balance < 10 && myAddress.balance >= 10) x.transfer(10);
      */
        // transfer 함수는 위에 주석 참고
        // 위에서 담았던 payment 만큼 보내준다.
        payee.transfer(payment);
    }
}
