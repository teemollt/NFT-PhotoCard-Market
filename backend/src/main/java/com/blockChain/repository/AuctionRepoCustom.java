package com.blockChain.repository;

import java.util.List;
import java.util.Optional;

import com.blockChain.dto.AuctionDTO;
import com.blockChain.dto.AuctionGroupListDTO;
import com.blockChain.dto.AuctionRegistedByMemberDTO;

public interface AuctionRepoCustom {

	Optional<List<AuctionGroupListDTO>> sltAuctionByGroup(Long groupNo);

	Optional<List<AuctionGroupListDTO>> searchAuction(String word);

	Optional<AuctionGroupListDTO> sltOneByNo(Long auctionNo);

	Optional<List<AuctionRegistedByMemberDTO>> auctionRegistedByMember(Long memberNo);

	Long countAuctionRegistedByMember(Long memberNo);

}
