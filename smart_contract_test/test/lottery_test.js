// artifacts가 build 폴더 안에 있는 Lottery.json 파일의 바이트 코드를 가져옴 (json 파일은 sol을 컴파일 해서 나온거였나..) 즉 로터리 컨트랙트 전체를 가져옴
const Lottery = artifacts.require("Lottery")

contract('Lottery', function ([deployer, user1, user2]) {
    let lottery
    let betAmount = 5 * 10 ** 15
    let bet_block_interval = 3
    // beforeEach는 매 it이 실행되기 전에 실행 아래서 it 1번밖에 없으므로 1번 실행
    beforeEach(async () => {
        console.log('Before each')
        // test할때는 아래라인처럼 새로 배포해서 사용해야함. 왼쪽 마이그레이션 파일이 사용이 안됨..?
        lottery = await Lottery.new()
    })

    // it('Basic test', async () => {
    //     console.log('Basic test')
    //     let owner = await lottery.owner()
    //     // Lottery.sol에서 getSomeValue의 리턴값을 5로 설정해줬으므로 value에는 5가 담김
    //     let value = await lottery.getSomeValue()

    //     console.log(`owner : ${owner}`)
    //     console.log(`value : ${value}`)
    //     // value가 5이므로 뒤의 값과 같으므로 test 실행해보면 passing뜬다
    //     assert.equal(value, 5)
    // })
    it('getPot should return current pot', async () => {
        let pot = await lottery.getPot()
        assert.equal(pot, 0)
    })

    describe('Bet', function () {
        // it('should fail when the bet money is not 0.005eth', async () => {
        //     // fail tx
        // })
        it.only('should put the bet to the bet queue with 1 bet', async () => {
            //bet
            let receipt = await lottery.bet('0xab', { from: user1, value: betAmount })
            // console.log(receipt)
            let pot = await lottery.getPot()
            assert.equal(pot, 0)
            // check contractBalance == 0.005
            let contractBalance = await web3.eth.getBalance(lottery.address) //트러플 안에서는 web3가 주입되어 있으므로 그냥 쓰면됨.
            assert.equal(contractBalance, betAmount)

            // check bet info
            let currentBlockNumber = await web3.eth.getBlockNumber()
            let bet = await lottery.getBetInfo(0)
            assert.equal(bet.answerBlockNumber, currentBlockNumber + bet_block_interval)
            assert.equal(bet.bettor, user1)
            assert.equal(bet.challenges, '0xab')

            // check log(BET event)

        })

    })
})