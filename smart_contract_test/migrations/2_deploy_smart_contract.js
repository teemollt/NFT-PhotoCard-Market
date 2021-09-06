// artifacts가 build 폴더 안에 있는 Lottery.json 파일의 바이트 코드를 가져옴
const Migrations = artifacts.require("Lottery")

module.exports = function (deployer) {
  // deployer가 Lottery의 바이트코드를 가져와서 deploy를 해줌. 
  // deployer는 truffle-donfig.js에서 사용할 주소를 세팅하고 이 주소가 deployer라는 변수에 맵핑/인젝션이 됨.
  // deployer가 해당 주소로 스마트 컨트랙트를 배포하는 구조.
  deployer.deploy(Migrations)
}
