package com.blockChain.repository;

import java.util.List;
import java.util.Optional;

import com.blockChain.dto.AuctionDTO;
import com.blockChain.dto.AuctionGroupListDTO;

public interface AuctionRepoCustom {

	Optional<List<AuctionGroupListDTO>> sltAuctionByGroup(Long groupNo);

	Optional<List<AuctionGroupListDTO>> searchAuction(String word);

	Optional<AuctionGroupListDTO> sltOneByNo(Long auctionNo);

}
