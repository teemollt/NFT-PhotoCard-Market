// SPDX-License-Identifier: GPL-3.0

// solidity version
pragma solidity ^0.5.6;

// contract X {...} defines contract called X
contract Coin {
    // "minter"is declared address type; address type is 160 bit address in ethereum
    // "public" keyword allows its state to be read by another contract.
    address public minter;

    // "balances" which is mapping type is key-value mapping;it has address type key, uint type data value
    // mapping is like hashtable data structure
    // all of uint values initialized 0
    mapping(address => uint256) public balances;

    // the type that is defined "event" is data can be "listening" to client. it can transfer information to client as making object of that type as "emit" keyword.
    // usage:
    // " in solidity "
    // emit Sent(an_address, another_address, 10);
    // " in Web3.js "
    // Coin.Sent().watch({}, '', function(err, result) {...});
    event Sent(address from, address to, uint256 amout);

    // contract function can recieve information of TX that executed the function. and you can access it as msg (valuable)
    // constructor function executes just once when contract is created.
    // the function below this line put the value of msg.sender into minter(state variable) (address of executing account)
    constructor() public {
        minter = msg.sender;
    }
}
