pragma solidity ^0.5.0;

import "./ERC721.sol";

contract ERC721Impl is ERC721 {
    function _mint(address to, uint256 tokenId) internal {
        require(to != address(0), "ERC721: mint to the zero address");
        require(!_exists(tokenId), "ERC721: token already minted");

        _tokenOwner[tokenId] = to;
        _ownedTokensCount[to].increment();

        emit Transfer(address(0), to, tokenId);
    }
}

contract PhotoCardByERC721 is ERC721Impl {
    struct PhotoCard {
        string imgPath; // image path
        string imgName; // image name
    }

    PhotoCard[] public photocards; // default: []
    address public owner; // 컨트랙트 소유자

    constructor() public {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(owner == msg.sender);
        _;
    }

    function buyCard(uint256 tokenId) public payable {
        address payable to = address(uint160(ownerOf(tokenId)));
        to.transfer(msg.value);
    }

    // 포토카드생성
    function mint(
        string memory imgPath,
        string memory imgName,
        address account
    ) public isOwner {
        uint256 cardId = photocards.length; // 유일한 캐릭터 ID
        photocards.push(PhotoCard(imgPath, imgName));
        _mint(account, cardId); // ERC721 소유권 등록
    }
}
