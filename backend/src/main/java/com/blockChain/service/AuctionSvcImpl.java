package com.blockChain.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockChain.dto.AuctionGroupListDTO;
import com.blockChain.repository.AuctionRepo;

@Service
@Transactional
public class AuctionSvcImpl implements AuctionSvcInter{
	@Autowired
	private AuctionRepo auctionRepo;
	
	@Override
	public Map<String,Object> sltAuctionByGroup(Long groupNo){
		Map<String, Object> res = new HashMap<String,Object>();
		Optional<List<AuctionGroupListDTO>> auctiongroupList = auctionRepo.sltAuctionByGroup(groupNo);
		res.put("res", auctiongroupList);
		return res;
	}
}
