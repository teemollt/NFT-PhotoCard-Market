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

    address payable public owner;
    bool private mode = false; // false : use answer for test , true : use real block hash
    bytes32 public answerForTest;

    uint256 internal constant BLOCK_LIMIT = 256; // 최근 256개밖에 확인못한다?
    uint256 internal constant BET_BLOCK_INTERVAL = 3;
    uint256 internal constant BET_AMOUNT = 5 * 10**15; // internal 내부에서만 씀 1*10**18이 1이더임
    uint256 private _pot;

    enum BlockStatus {
        checkable,
        NotRevealed,
        BlockLimitPassed
    }
    enum BettingResult {
        Fail,
        Win,
        Draw
    }
    event BET(
        uint256 index,
        address bettor,
        uint256 amount,
        bytes1 challenges,
        uint256 answerBlockNumber
    );
    event WIN(
        uint256 index,
        address bettor,
        uint256 amount,
        bytes1 challenges,
        bytes1 answer,
        uint256 answerBlockNumber
    );
    event FAIL(
        uint256 index,
        address bettor,
        uint256 amount,
        bytes1 challenges,
        bytes1 answer,
        uint256 answerBlockNumber
    );
    event DRAW(
        uint256 index,
        address bettor,
        uint256 amount,
        bytes1 challenges,
        bytes1 answer,
        uint256 answerBlockNumber
    );
    event REFUND(
        uint256 index,
        address bettor,
        uint256 amount,
        bytes1 challenges,
        uint256 answerBlockNumber
    );

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

    /**
     * @dev 베팅과 정답 체크를 한다. 유저는 0.005 ETH를 보내야 하고, 베팅용 1 byte 글자를 보낸다.
     * 큐에 저장된 베팅 정보는 이후 distribute 함수에서 해결된다.
     * @param challenges 유저가 베팅하는 글자
     * @return 함수가 잘 수행되었는지 확인해는 bool 값
     */
    function betAndDistribute(bytes1 challenges)
        public
        payable
        returns (bool result)
    {
        bet(challenges);

        distribute();

        return true;
    }

    // Bet 베팅
    /**
     * @dev  베팅을 한다. 유저는 0.005이더를 보내야하고, 베팅용 1 byte 글자를 보낸다.
     * 큐에 저장된 베팅 정보는 이후 distribute 함수에서 해결된다.
     * @param challenges 유저가 베팅하는 글자
     * @return 함수가 잘 수행되었는지 확인하는 bool 값
     */
    function bet(bytes1 challenges) public payable returns (bool result) {
        // check the proper ether is sent
        require(msg.value == BET_AMOUNT, "Not enogh ETH");
        // push bet to the queue
        require(pushBet(challenges), "Fail to add a new Bet Info");

        // emit event 위에 event참고 각각 index, bettor, amount, challenges, answerBlockNumber 값들
        emit BET(
            _tail - 1,
            msg.sender,
            msg.value,
            challenges,
            block.number + BET_BLOCK_INTERVAL
        );
        return true;
    }

    // save the bet to the queue
    // distribute 베팅 검증
    function distribute() public {
        // 3 4 5 6 7 8 9 10 tail 헤드부터 테일까지 도는 루프 만들기
        uint256 cur; // 루프 시작 current
        uint256 transferAmount;
        BetInfo memory b;
        BlockStatus currentBlockStatus;
        BettingResult currentBettingResult;

        for (cur = _head; cur < _tail; cur++) {
            b = _bets[cur];
            currentBlockStatus = getBlockStatus(b.answerBlockNumber);
            // 체크 가능한 상태 : 현재 블락넘버가 정답블락보다 커야됨, 블락넘버가 블락리밋 + 정답블락 넘버보 보다 작아야됨
            // block.number > anserBlockNumber && block.number < BLOCK_LIMIT + answerBlockNumber 이 상황이면 enum의 checkable을 리턴
            if (currentBlockStatus == BlockStatus.checkable) {
                // 맞췄을때, 베터가 팟머니 겟
                bytes32 answerBlockHash = getAnswerBlockHash(
                    b.answerBlockNumber
                );
                currentBettingResult = isMatch(b.challenges, answerBlockHash);
                // if win, bettor gets pot
                if (currentBettingResult == BettingResult.Win) {
                    // transfer pot
                    transferAmount = transferAfterPayingFee(
                        b.bettor,
                        _pot + BET_AMOUNT
                    );

                    // pot = 0
                    _pot = 0;

                    // emit WIN
                    emit WIN(
                        cur,
                        b.bettor,
                        transferAmount,
                        b.challenges,
                        answerBlockHash[0],
                        b.answerBlockNumber
                    );
                }
                // 못 맞췄을때, 베터 돈이 팟으로
                if (currentBettingResult == BettingResult.Fail) {
                    // pot = pot + BET_AMOUNT
                    _pot += BET_AMOUNT;
                    // emit FAIL
                    emit FAIL(
                        cur,
                        b.bettor,
                        0,
                        b.challenges,
                        answerBlockHash[0],
                        b.answerBlockNumber
                    );
                }
                // 한개만 맞췄을때, 베터돈 환불
                if (currentBettingResult == BettingResult.Draw) {
                    // transfer only BET_AMOUNT
                    transferAmount = transferAfterPayingFee(
                        b.bettor,
                        BET_AMOUNT
                    );

                    // emit DRAW
                    emit DRAW(
                        cur,
                        b.bettor,
                        transferAmount,
                        b.challenges,
                        answerBlockHash[0],
                        b.answerBlockNumber
                    );
                }
            }
            // 아직 마이닝 되지 않아서 블록 체크 못하는 상태 : block.number <= answerBlockNumber    ~리턴
            if (currentBlockStatus == BlockStatus.NotRevealed) {
                break; // 이후의 것들은 앞으로도 검증 불가하므로 반복문 끝냄
            }
            // block.number >= answerBlockNumber + BLOCK_LIMIT 현재블록이 정답 블록에 비해 256개이상 커져서 확인이 불가능한 상태  ~리턴
            if (currentBlockStatus == BlockStatus.BlockLimitPassed) {
                // 환불
                transferAmount = transferAfterPayingFee(b.bettor, BET_AMOUNT);
                // 환불 이벤트
                emit REFUND(
                    cur,
                    b.bettor,
                    transferAmount,
                    b.challenges,
                    b.answerBlockNumber
                );
            }
            popBet(cur); // 반복문을 한번 돌았다면
        }
        _head = cur;
    }

    function transferAfterPayingFee(address payable addr, uint256 amount)
        internal
        returns (uint256)
    {
        // uint256 fee = amount / 100;
        uint256 fee = 0;
        uint256 amountWithoutFee = amount - fee;

        // transfer to addr
        addr.transfer(amountWithoutFee);

        // transfer to owner
        owner.transfer(fee);

        return amountWithoutFee;
    }

    function setAnswerForTest(bytes32 answer) public returns (bool result) {
        require(
            msg.sender == owner,
            "Only owner can set the answer for test mode"
        );
        answerForTest = answer;
        return true;
    }

    function getAnswerBlockHash(uint256 answerBlockNumber)
        internal
        view
        returns (bytes32 answer)
    {
        return mode ? blockhash(answerBlockNumber) : answerForTest;
    }

    function isMatch(bytes1 challenges, bytes32 answer)
        public
        pure
        returns (BettingResult)
    {
        // challeges 0xab 1byte 들어옴
        // answer 0xab.......ff 32 bytes 들어옴
        // 위 두개 모두 첫번째 글자 0xa를 뽑아서 비교하기/ 두번째 글자 뽑아서 비교하기
        bytes1 c1 = challenges;
        bytes1 c2 = challenges;

        bytes1 a1 = answer[0];
        bytes1 a2 = answer[0];

        // Get first number
        c1 = c1 >> 4; // 0xab -> 0x0a
        c1 = c1 << 4; // 0x0a -> 0xa0

        a1 = a1 >> 4;
        a1 = a1 << 4;

        // Get Second number
        c2 = c2 << 4; // 0xab -> 0xb0
        c2 = c2 >> 4; // 0xb0 -> 0x0b

        a2 = a2 << 4;
        a2 = a2 >> 4;

        if (a1 == c1 && a2 == c2) {
            return BettingResult.Win;
        }

        if (a1 == c1 || a2 == c2) {
            return BettingResult.Draw;
        }

        return BettingResult.Fail;
    }

    function getBlockStatus(uint256 answerBlockNumber)
        internal
        view
        returns (BlockStatus)
    {
        if (
            block.number > answerBlockNumber &&
            block.number < BLOCK_LIMIT + answerBlockNumber
        ) {
            return BlockStatus.checkable;
        }
        if (block.number <= answerBlockNumber) {
            return BlockStatus.NotRevealed;
        }
        if (block.number >= answerBlockNumber + BLOCK_LIMIT) {
            return BlockStatus.BlockLimitPassed;
        }

        return BlockStatus.BlockLimitPassed;
    }

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

    function pushBet(bytes1 challenges) internal returns (bool) {
        // storage는 블록체인 상에 영구적으로 저장되며, memory는 임시적으로 저장되는 변수로 함수의 외부 호출이 일어날 때마다 초기화
        BetInfo memory b;
        b.bettor = msg.sender;
        b.answerBlockNumber = block.number + BET_BLOCK_INTERVAL; // 현재 이 tx가 들어가는 블록의 넘버 + 인터벌
        b.challenges = challenges;

        _bets[_tail] = b;
        _tail++;

        return true;
    }

    function popBet(uint256 index) internal returns (bool) {
        delete _bets[index];
        return true;
    }
}

/** 
    GAS 계산
    - 32 bytes 새로 저장 == 20000 gas
    - 32 bytes 기존 변수에 있는 값 바꿀때 == 5000 gas
*/
