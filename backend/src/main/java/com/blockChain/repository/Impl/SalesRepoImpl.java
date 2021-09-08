package com.blockChain.repository.Impl;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.QSales;
import com.blockChain.domain.Sales;
import com.blockChain.repository.SalesRepoCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class SalesRepoImpl implements SalesRepoCustom{
	private final JPAQueryFactory queryFactory;
	@Override
	public Optional<Sales> sltBySalesNM(String NM){
		QSales Qsl = QSales.sales;
		Sales res = queryFactory.selectFrom(Qsl).where(Qsl.salesNm.eq(NM)).fetchOne();
		return Optional.ofNullable(res);
	}
}
