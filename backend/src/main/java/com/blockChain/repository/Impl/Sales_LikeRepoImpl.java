package com.blockChain.repository.Impl;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.QSales_Like;
import com.blockChain.domain.Sales_Like;
import com.blockChain.repository.Sales_LikeRepoCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class Sales_LikeRepoImpl implements Sales_LikeRepoCustom{
	private final JPAQueryFactory queryFactory;
	@Override
	public Optional<Sales_Like> checkLike(Long salesPk, Long memberPk) {
		QSales_Like qsl = QSales_Like.sales_Like;
		return Optional.ofNullable(queryFactory
				.selectFrom(qsl)
				.where(qsl.member.memberNo.eq(memberPk)
						.and(qsl.sales.salesNo.eq(salesPk)))
				.fetchFirst());
	}
	@Override
	public Long likeCount(Long salesPk) {
		QSales_Like qsl = QSales_Like.sales_Like;
		
		return queryFactory.selectFrom(qsl).where(qsl.sales.salesNo.eq(salesPk)).fetchCount();
	}
}
