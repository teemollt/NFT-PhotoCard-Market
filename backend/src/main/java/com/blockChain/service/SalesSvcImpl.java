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
import com.blockChain.domain.Sales_Like;
import com.blockChain.dto.CardForSalesDTO;
import com.blockChain.dto.SalesDTO;
import com.blockChain.repository.MemberRepo;
import com.blockChain.repository.ReplyRepo;
import com.blockChain.repository.SalesRepo;
import com.blockChain.repository.Sales_LikeRepo;
import com.querydsl.core.types.dsl.BooleanExpression;

@Service
@Transactional
public class SalesSvcImpl implements SalesSvcInter{
	private final String MW = "MW";
	private final String group = "GR";
	private final String year = "YR";
	private final String celeb = "CL";
	@Autowired
	private SalesRepo salesRepo;
	@Autowired
	private ReplyRepo replyRepo;
	@Autowired
	private MemberRepo memberRepo;
	@Autowired
	private Sales_LikeRepo slRepo;
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
	@Override
	public Map<String,Object>sltLikeCount(long cardpackPK){
		Map<String, Object> res = new HashMap<String,Object>();
			Long nowLoginMemberNo=0L;

			try {
				nowLoginMemberNo=SecurityUtil.getCurrentMemberId();
			}catch (RuntimeException e) {
				nowLoginMemberNo=0L;
			}
			
			
			Optional<Member> member = memberRepo.findById(nowLoginMemberNo);
			if(member.isEmpty()) {
				res.put("islike", false);
			}else {
				Optional<Sales_Like> checkLike = slRepo.checkLike(cardpackPK, member.get().getMemberNo());
				if(checkLike.isEmpty()) {
					res.put("islike", false);
				}else {
					res.put("islike", true);
				}
			}
			res.put("peoplelike", slRepo.likeCount(cardpackPK));
			
		return res;
	}
	@Override
	public Map<String,Object>insertLike(Map<String,Object> req){
		Map<String, Object> res = new HashMap<String,Object>();
		Long nowLoginMemberNo=0L;// 샘플 0 
		try {
			nowLoginMemberNo=SecurityUtil.getCurrentMemberId();
		}catch (RuntimeException e) {
			nowLoginMemberNo=0L;
		}
		
		try {
			Member member = memberRepo.findById(nowLoginMemberNo).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
			Long cardpackPK = Long.valueOf((Integer)req.get("cardpackPK"));
			Sales sales = salesRepo.findById(cardpackPK).orElseThrow(() -> new IllegalStateException("해당 카드팩이 존재하지 않습니다"));;
			Optional<Sales_Like> checkLike = slRepo.checkLike(cardpackPK, member.getMemberNo());
			Sales_Like sl = new Sales_Like();
			sl.setMember(member);
			sl.setSales(sales);
			if (checkLike.isEmpty()){
				res.put("success", true);
				res.put("msg", "좋아요 성공");
				slRepo.save(sl);
			}else {
				res.put("success", true);
				res.put("msg", "좋아요취소 성공");
				slRepo.delete(sl);
			}
		}catch(IllegalStateException e){
			res.put("success", false);
			res.put("msg", e.getMessage());
			return res;
		}
		return res;
	}
	@Override
	public Map<String,Object>gainCardList(Long cardpackPK){
		Map<String, Object> res = new HashMap<String,Object>();
		Optional<List<CardForSalesDTO>> cardList = salesRepo.gainCardList(cardpackPK);
		res.put("res", cardList);
		return res;
	}
}
