package com.blockChain.repository.Impl;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Celeb_Group;
import com.blockChain.domain.QCeleb_Group;
import com.blockChain.repository.Celeb_GroupRepoCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class Celeb_GroupRepoImpl implements Celeb_GroupRepoCustom{
	
	private final JPAQueryFactory queryFactory;

	@Override
	public Optional<Celeb_Group> sltByCelebGroupNM(String NM){
		QCeleb_Group Qcg = QCeleb_Group.celeb_Group;
		Celeb_Group res = queryFactory.selectFrom(Qcg).where(Qcg.groupNm.eq(NM)).fetchOne();
//		return Optional.of(res);
		return Optional.ofNullable(res);
	}
}
