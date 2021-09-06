pragma solidity >=0.4.22 <0.9.0;

contract Lottery {
    address public owner;

    // 가장 처음 실행되는 함수
    constructor() public {
        owner = msg.sender;
    }

    function getSomeValue() public pure returns (uint256 value) {
        return 5;
    }
}
