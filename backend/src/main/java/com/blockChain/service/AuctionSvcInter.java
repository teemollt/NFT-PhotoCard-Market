package com.blockChain.service;

import java.util.Map;

public interface AuctionSvcInter {

	Map<String, Object> sltAuctionByGroup(Long groupNo);

	Map<String, Object> insertAuction(Map<String, Object> req);

	Map<String, Object> sltLikeCount(Long auctionPk);

	Map<String, Object> insertLike(Map<String, Object> req);

}
