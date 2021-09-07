package com.blockChain.repository.Impl;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Member;
import com.blockChain.domain.QMember;
import com.blockChain.repository.MemberRepoCustom;
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
}
