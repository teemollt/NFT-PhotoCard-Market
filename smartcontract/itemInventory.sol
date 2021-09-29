pragma solidity ^0.5.0;

contract card {


  struct Owner {
    address ownerAddress;
    bytes32 userId;
  }
  // 카드id =>  카드주인struct 매핑 
  mapping (uint => Owner) public ownerInfo;
  
  // 컨트랙 소유자
  address public admin;

  // buyers[상품id] = 구매자 address => 이렇게 말고 매핑으로 owner 설정하는방향으로 변경
  // address[10] public buyers;

  // event LogBuyItem(
  //   address _buyer,
  //   uint _id
  // );
  // 컨트랙 소유자 설정
  constructor() public {
    admin = msg.sender;
  }

  // params: id- 토큰번호, name- 구매자 이름
  // 카드팩 구매
  function buyCardPack() public payable {
    // 매물 id 유효성 판단
    // require(_id >= 14 && _id <= 1224);
    // buyers[_id] = msg.sender;
    // buyerInfo[_id] = Buyer(msg.sender, _name);
    // transfer로 이더를 계정to 계정 이동 msg.value 함수로 넘어온 이더(프론트에서 이더를 wei로 변경시켜 넘겨야함)
    admin.transfer(msg.value);
    // msg sender가 buyer address, 상품id 넘겨서 이벤트 발생시키기 필요하려나
    // emit LogBuyItem(msg.sender, _id);
    
  }
  // 유저간 카드
  function buyCard(uint _tokenId) public payable {
    //
    ownerInfo[_tokenId].ownerAddress.transfer(msg.value);
  }

  // 소유권 변경
  function changeOwner(uint _tokenId, bytes32 _userId) public {
    ownerInfo[_tokenId].ownerAddress = msg.sender
    ownerInfo[_tokenId].userId = _userId
  }


  function getBuyerInfo(uint _id) public view returns (address, bytes32) {
    Buyer memory buyer = buyerInfo[_id];
    return (buyer.buyerAddress, buyer.name);
  }

  function getAllBuyers() public view returns (address[10]) {
    return buyers;
  }
}