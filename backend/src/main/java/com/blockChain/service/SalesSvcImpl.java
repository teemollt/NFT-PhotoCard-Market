package com.blockChain.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockChain.config.SecurityUtil;
import com.blockChain.domain.Member;
import com.blockChain.domain.Reply;
import com.blockChain.domain.Sales;
import com.blockChain.dto.SalesDTO;
import com.blockChain.repository.MemberRepo;
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
	@Autowired
	private MemberRepo memberRepo;
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
	
	@Override
	public Map<String,Object>insertReview(long cardpackPK,Map<String, Object> req){
		Map<String, Object> res = new HashMap<String,Object>();
//		Optional<Sales> sales = salesRepo.findById(cardpackPK);
		
		try {
			Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
			Optional<Sales> sales = Optional.ofNullable(salesRepo.findById(cardpackPK).orElseThrow(()->new IllegalStateException("존재하지 않는 카드번호입니다.")));
			Reply reply = new Reply();
			reply.setMember(member);
			reply.setReplyContent((String)req.get("reviewContent"));
			reply.setSales(sales.get());
			reply.setReplyDate(LocalDateTime.now());
			Reply saved = replyRepo.save(reply);
			res.put("success", true);
			res.put("msg", "정상적으로 입력되었습니다.");
		}catch(IllegalStateException e){
			res.put("success", false);
			res.put("msg", e.getMessage());
			return res;
			
		}
		return res;
	}
}
