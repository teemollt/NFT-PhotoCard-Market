package com.blockChain.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockChain.domain.Celeb;
import com.blockChain.domain.Celeb_Like;
import com.blockChain.domain.Member;
import com.blockChain.domain.Member_Grade;
import com.blockChain.repository.CelebRepo;
import com.blockChain.repository.Celeb_LikeRepo;
import com.blockChain.repository.MemberRepo;
import com.blockChain.repository.Member_GradeRepo;

@Service
@Transactional
public class MemberSvcImpl implements MemberSvcInter{
	@Autowired
	private MemberRepo memberRepo;
	@Autowired
	private Member_GradeRepo mgRepo;
	@Autowired
	private CelebRepo celebRepo;
	@Autowired
	private Celeb_LikeRepo clRepo;
	@Override
	public Map<String,Object> signup(Map<String, Object> req){
		 Map<String, Object> res = new HashMap<String,Object>();
		 String memberId = (String)req.get("memberId");
		 String memberEmail = (String)req.get("memberEmail");
		 String memberNick = (String)req.get("memberNick");
		 try {
		 memberRepo.checkId(memberId).ifPresent(m ->{throw new IllegalStateException("이미 존재하는 아이디입니다.");});
		 memberRepo.checkEmail(memberEmail).ifPresent(m ->{throw new IllegalStateException("이미 존재하는 이메일입니다.");});
		 memberRepo.checkNick(memberNick).ifPresent(m->{throw new IllegalStateException("이미 존재하는 별명입니다.");});
		 
		 Member member = new Member();
		 Optional<Member_Grade> mg = mgRepo.sltByNM("팬");
		 member.setMemberEmail(memberEmail);
		 member.setMemberGrade(mg.get());
		 member.setMemberId(memberId);
		 member.setMemberNick(memberNick);
		 member.setMemberPw((String)req.get("memberPw"));
		 member.setMemberPhone((String)req.get("memberPhone"));
		 Member savedMember = memberRepo.save(member);
		 res.put("msg", "회원가입 성공");
		 List<?> celebNo = (List<?>) req.get("likeCeleb");
		 System.out.println(celebNo);
		 int cnt = 0;
		 for(int i =0;i<celebNo.size();i++) {
			 cnt++;
			 Optional<Celeb> celebOne =celebRepo.findById(Long.valueOf(celebNo.get(i).toString()));
			 Celeb_Like cl = new Celeb_Like();
			 cl.setCeleb(celebOne.get());
			 cl.setMember(savedMember);
			 Celeb_Like savedCL = clRepo.save(cl);
			 res.put("celebLike"+cnt,"샐럽 좋아요 성공 : "+savedCL.getCeleb().getCelebNo());
		 }
		 } catch(IllegalStateException e) {
				res.put("success", false);
				res.put("msg", e.getMessage());
				return res;
		 }
		 return res;
	}
}
