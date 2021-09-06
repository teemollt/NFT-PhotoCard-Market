// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {
    address public owner = msg.sender;
    uint256 public last_completed_migration;

    modifier restricted() {
        require(
            msg.sender == owner,
            "This function is restricted to the contract's owner"
        );
        _;
    }

    // completed에 migrations 폴더 내부의 js 파일 중 디플로이된 마지막 파일 인덱스 인젝션됨.
    // 실제로 플젝할때도 이 파일은 걍 냅두는게 좋음 migrations에서 2번부터 만들자.
    function setCompleted(uint256 completed) public restricted {
        last_completed_migration = completed;
    }
}
//
