package com.blockChain.repository;

import java.util.List;
import java.util.Optional;

import com.blockChain.dto.AuctionDTO;

public interface AuctionRepoCustom {

	Optional<List<AuctionDTO>> sltAuctionByGroup(Long groupNo);

}
