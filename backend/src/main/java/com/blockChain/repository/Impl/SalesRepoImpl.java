package com.blockChain.repository.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.QSales;
import com.blockChain.domain.Sales;
import com.blockChain.dto.SalesDTO;
import com.blockChain.repository.SalesRepoCustom;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class SalesRepoImpl implements SalesRepoCustom{
	private final JPAQueryFactory queryFactory;
	@Override
	public Optional<Sales> sltBySalesNM(String NM){
		QSales qsl = QSales.sales;
		Sales res = queryFactory.selectFrom(qsl).where(qsl.salesNm.eq(NM)).fetchOne();
		return Optional.ofNullable(res);
	}
	
	@Override
	public Optional<List<SalesDTO>> slyBySalesDiv(String div){
		QSales qsl = QSales.sales;
		
		return  Optional.ofNullable(queryFactory.select(Projections.constructor(SalesDTO.class
				,qsl.salesNo
				,qsl.salesNm
				,qsl.salesDetail
				,qsl.salesPrice
				,qsl.salesDiv
				))
				.from(qsl)
				.where(qsl.salesDiv.eq(div))
				.fetch());
	}
}
