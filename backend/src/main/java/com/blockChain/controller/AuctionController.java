package com.blockChain.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockChain.service.AuctionSvcInter;

@RestController
@RequestMapping("/api/auction")
public class AuctionController {
	@Autowired
	AuctionSvcInter auctionSvc;
	@GetMapping("/{groupNo}/list")
	public Map<String, Object> firstData(
			@PathVariable(name="groupNo")
			Long groupNo){
		return auctionSvc.sltAuctionByGroup(groupNo);
		
	}
}
