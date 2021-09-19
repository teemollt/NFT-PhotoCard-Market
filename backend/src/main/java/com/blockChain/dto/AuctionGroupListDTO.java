package com.blockChain.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuctionGroupListDTO {
	private MemberDTO memberDTO;
	private CardDTO cardDTO;
	private AuctionDTO auctionDTO;
	private BidDTO bid;
}
