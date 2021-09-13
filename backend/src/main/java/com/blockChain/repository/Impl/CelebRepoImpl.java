package com.blockChain.repository.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Celeb;
import com.blockChain.domain.QCeleb;
import com.blockChain.dto.CelebDTO;
import com.blockChain.repository.CelebRepoCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class CelebRepoImpl implements CelebRepoCustom{
	private final JPAQueryFactory queryFactory;
	QCeleb qcg = QCeleb.celeb;
	@Override
	public Optional<Celeb> sltCeleb(String NM){
		
		return Optional.ofNullable(queryFactory.selectFrom(qcg).where(qcg.celebNm.eq(NM)).fetchFirst());
		
	}
	@Override
	public Optional<List<Celeb>> sltCelebDTObyGroup(Long GroupNo){
		return Optional.ofNullable(queryFactory.selectFrom(qcg).where(qcg.group.groupNo.eq(GroupNo)).fetch());
	}

}
