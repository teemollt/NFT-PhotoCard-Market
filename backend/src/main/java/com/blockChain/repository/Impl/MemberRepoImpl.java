package com.blockChain.repository.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Member;
import com.blockChain.domain.QCeleb_Like;
import com.blockChain.domain.QMember;
import com.blockChain.domain.QMember_Gall_Like;
import com.blockChain.domain.QMember_Grade;
import com.blockChain.dto.GalleryMainDTO;
import com.blockChain.dto.MemberDTO;
import com.blockChain.dto.MypageDTO;
import com.blockChain.repository.MemberRepoCustom;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MemberRepoImpl implements MemberRepoCustom{
	private final JPAQueryFactory queryFactory;
	
	//아이디로 조회
	@Override
	public Optional<Member> checkId(String id){
		QMember qm = QMember.member;
		return Optional.ofNullable(queryFactory.selectFrom(qm).where(qm.memberId.eq(id)).fetchFirst());
	}
	//이메일로 조회
	@Override
	public Optional<Member> checkEmail(String email){
		QMember qm = QMember.member;
		return Optional.ofNullable(queryFactory.selectFrom(qm).where(qm.memberEmail.eq(email)).fetchFirst());
	}
	//닉네임으로 조회
	@Override
	public Optional<Member> checkNick(String nick){
		QMember qm = QMember.member;
		return Optional.ofNullable(queryFactory.selectFrom(qm).where(qm.memberNick.eq(nick)).fetchFirst());
	}
	
	@Override
	public MypageDTO myPage(Long memberNo){
		QCeleb_Like qcl = QCeleb_Like.celeb_Like;
		QMember qm = QMember.member;
		QMember_Grade qmg = QMember_Grade.member_Grade;
		return queryFactory.select(Projections.constructor(MypageDTO.class
				, qm.memberNo
				, qm.memberId
				, qm.memberEmail
				, qm.memberNick
				, ExpressionUtils.as(
						JPAExpressions
						.select(qcl.celeb.celebNo)
						.from(qcl)
						.where(qcl.member.memberNo.eq(memberNo))
				, "celebNo")
				, qm.memberGrade.memberGradeNo
				, qm.memberGrade.memberGradeNm
				))
				.from(qm)
				.where(qm.memberNo.eq(memberNo))
				.fetchOne();
				
				
	}
	@Override
	public Optional<List<GalleryMainDTO>> galleryMain(){
		QMember qm = QMember.member;
		QMember_Gall_Like pql = QMember_Gall_Like.member_Gall_Like;
		QMember_Gall_Like qglFrom = new QMember_Gall_Like("qglFrom");
		QMember_Gall_Like qglTo = new QMember_Gall_Like("qglTo");
		return Optional.ofNullable(queryFactory.select(Projections.constructor(GalleryMainDTO.class
				,Projections.constructor(
						MemberDTO.class
						, qm.memberNo
						, qm.memberNick)
//				, pql.toMember.count()
				,qm.memberNo
				
				))
				.from(qm)
//				.join(pql).on(pql.toMember.memberNo.eq(qm.memberNo))
//				.join(pql).on(qm.memberNo.eq(pql.toMember.memberNo)).groupBy(qm.memberNo)
				.orderBy(qm.memberNo.asc())
				.fetch());
	}
	
	
}
