package com.blockChain.repository.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.QProduct;
import com.blockChain.domain.QProduct_Media;
import com.blockChain.domain.QSales;
import com.blockChain.domain.QSales_Product;
import com.blockChain.domain.Sales;
import com.blockChain.dto.CardDTO;
import com.blockChain.dto.CardForSalesDTO;
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
	
	@Override
	public Optional<List<CardForSalesDTO>>gainCardList(Long salesPK){
		QSales qs = QSales.sales;
		QProduct qp = QProduct.product;
		QProduct_Media qpm= QProduct_Media.product_Media;
		QSales_Product qsp = QSales_Product.sales_Product;
		return Optional.ofNullable(queryFactory.select(Projections.constructor(
				CardForSalesDTO.class
				, qp.productNo
				, qp.productNm
				, qpm.productMediaAdres
				, qp.productGrade.productGradeNo
				, qp.productGrade.productGrade
				))
				.from(qsp)
				.join(qp).on(qsp.product.productNo.eq(qp.productNo))
				.join(qpm).on(qp.productNo.eq(qpm.product.productNo))
				.orderBy(qp.productGrade.productGradeNo.asc())
				.where(qsp.sales.salesNo.eq(salesPK)).fetch());
	}
	@Override
	public Optional<Sales> sltByContainSalesNM(String NM){
		QSales qsl = QSales.sales;
		Sales res = queryFactory.selectFrom(qsl).where(qsl.salesNm.contains(NM)).fetchOne();
		return Optional.ofNullable(res);
	}
	@Override
	public Optional<List<SalesDTO>> searchSales(String NM){
		QSales qsl = QSales.sales;
//		List<SalesDTO> res = queryFactory.selectFrom(qsl).where(qsl.salesNm.contains(NM)).fetch();
//		return Optional.ofNullable(res);
		return  Optional.ofNullable(queryFactory.select(Projections.constructor(SalesDTO.class
				,qsl.salesNo
				,qsl.salesNm
				,qsl.salesDetail
				,qsl.salesPrice
				,qsl.salesDiv
				))
				.from(qsl)
				.where(qsl.salesNm.contains(NM))
				.fetch());
	}
}
