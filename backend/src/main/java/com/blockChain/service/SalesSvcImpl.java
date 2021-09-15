package com.blockChain.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockChain.dto.SalesDTO;
import com.blockChain.repository.ReplyRepo;
import com.blockChain.repository.SalesRepo;

@Service
@Transactional
public class SalesSvcImpl implements SalesSvcInter{
	private final String MW = "MW";
	private final String group = "GR";
	private final String year = "YR";
	private final String celeb = "CL";
	@Autowired
	SalesRepo salesRepo;
	@Autowired
	ReplyRepo replyRepo;
	@Override
	public Map<String,Object>sltSalesByMW(){
		Map<String, Object> res = new HashMap<String,Object>();
		String[] order = {MW,group,celeb,year};
		List<SalesDTO> dto = new ArrayList<SalesDTO>();
		for (int i = 0 ; i < order.length;i++){
			Optional<List<SalesDTO>>salesDTOList = salesRepo.slyBySalesDiv(order[i]);
			for (SalesDTO g:salesDTOList.get()) {
				dto.add(g);
				}
		}
		res.put("res", dto);
		return res;
	}
	
	@Override
	public Map<String,Object>sltReviewList(long cardpackPK){
		Map<String, Object> res = new HashMap<String,Object>();
		System.out.println("here2");
		res.put("res", replyRepo.sltReviewList(cardpackPK));
		return res;
	}
}
