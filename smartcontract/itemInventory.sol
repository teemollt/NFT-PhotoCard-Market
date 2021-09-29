pragma solidity ^0.5.0;

contract card {
    struct Owner {
        address payable ownerAddress;
        // bytes32 userId;
    }
    // 카드id =>  카드주인struct 매핑
    mapping(uint256 => Owner) public ownerInfo;

    // 컨트랙 소유자
    address payable public admin;

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
        // buyers[_id] = msg.sender;
        // buyerInfo[_id] = Buyer(msg.sender, _name);
        // transfer로 이더를 계정to 계정 이동 msg.value 함수로 넘어온 이더(프론트에서 이더를 wei로 변경시켜 넘겨야함)
        admin.transfer(msg.value);
        // msg sender가 buyer address, 상품id 넘겨서 이벤트 발생시키기 필요하려나
        // emit LogBuyItem(msg.sender, _id);
    }

    // 유저간 카드
    function buyCard(uint256 _tokenId) public payable {
        //
        ownerInfo[_tokenId].ownerAddress.transfer(msg.value);
    }

    // 소유권 변경
    function changeOwner(uint256 _tokenId) public {
        require(_tokenId >= 14 && _tokenId <= 1224);
        ownerInfo[_tokenId].ownerAddress = msg.sender;
    }

    //   function getBuyerInfo(uint _id) public view returns (address, bytes32) {
    //     Buyer memory buyer = buyerInfo[_id];
    //     return (buyer.buyerAddress, buyer.name);
    //   }

    //   function getAllBuyers() public view returns (address[10]) {
    //     return buyers;
    //   }
}
