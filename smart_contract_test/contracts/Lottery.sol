pragma solidity >=0.4.22 <0.9.0;

contract Lottery {
    struct BetInfo {
        uint256 answerBlockNumber;
        address payable bettor;
        bytes1 challenges; // 0xab같은
    }
    // private 변수 쓸때는 변수명 앞에 _ 붙이는듯..
    // 유저가 보낸 베팅값들을 저장하려면 큐가 필요
    // 맵핑을 이용한 선형큐를 이용하자
    uint256 private _tail;
    uint256 private _head;
    mapping(uint256 => BetInfo) private _bets; // bets라는 큐로 값이 들어오게 되면, tail이 증가하면서 값을 넣어주고 결과를 검증할때는 0번 head값부터 뽑아내자

    address public owner;

    uint256 internal constant BLOCK_LIMIT = 256;
    uint256 internal constant BET_BLOCK_INTERVAL = 3;
    uint256 internal constant BET_AMOUNT = 5 * 10**15; // internal 내부에서만 씀 1*10**18이 1이더임
    uint256 private _pot;

    // 가장 처음 실행되는 함수
    constructor() public {
        owner = msg.sender;
    }

    // function getSomeValue() public pure returns (uint256 value) {
    //     return 5;
    // }

    // smart contract에 있는 변수 조회 view
    function getPot() public view returns (uint256 pot) {
        return _pot;
    }

    // Bet 베팅
    /**  
    * @dev  베팅을 한다. 유저는 0.005이더를 보내야하고, 베팅용 1 byte 글자를 보낸다.
    * 큐에 저장된 베팅 정보는 이후 distribute 함수에서 해결된다.
    * @param challenges 유저가 베팅하는 글자
    * @return 함수가 잘 수행되었는지 확인하는 bool 값
    **/
    function bet (bytes1 challenges) public payable returns (bool result) {
        // check the proper ether is sent
        // push bet to the queue

        // emit event
        return true;
    }
    // save the bet to the queue
    // distribute 베팅 검증
    // check the answer

    function getBetInfo(uint256 index)
        public
        view
        returns (
            uint256 answerBlockNumber,
            address bettor,
            bytes1 challenges
        )
    {
        BetInfo memory b = _bets[index];
        answerBlockNumber = b.answerBlockNumber;
        bettor = b.bettor;
        challenges = b.challenges;
    }

    function pushBet(bytes1 challenges) public returns (bool) {
        BetInfo memory b;
        b.bettor = msg.sender;
        b.answerBlockNumber = block.number + BET_BLOCK_INTERVAL; // 현재 이 tx가 들어가는 블록의 넘버 + 인터벌
        b.challenges = challenges

        _bets[_tail] = b;
        _tail++;

        return true;
    }

    function popBet(uint256 index) public returns (bool) {
        delete _bets[index];
        return true;
    }
}
