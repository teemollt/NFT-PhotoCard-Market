package com.blockChain.repository.Impl;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Member_Grade;
import com.blockChain.domain.QMember_Grade;
import com.blockChain.repository.Member_GradeRepoCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class Member_GradeRepoImpl implements Member_GradeRepoCustom{
	private final JPAQueryFactory queryFactory;
	
	@Override
	public Optional<Member_Grade> sltByNM(String NM){
		QMember_Grade qmg = QMember_Grade.member_Grade;
		return Optional.ofNullable(queryFactory.selectFrom(qmg).where(qmg.memberGradeNm.eq(NM)).fetchFirst());
	}
}
