package com.blockChain.repository.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Product;
import com.blockChain.domain.QProduct;
import com.blockChain.repository.ProductRepoCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ProductRepoImpl implements ProductRepoCustom{
	private final JPAQueryFactory queryFactory;

	@Override
	public Optional<Product> sltByNM(String NM){
		QProduct qp = QProduct.product;
		return Optional.ofNullable(queryFactory.selectFrom(qp).where(qp.productNm.eq(NM)).fetchOne());
	}
	
	//성별따라 조회
	@Override
	public Optional<List<Product>> sltByWM(String WM){
		QProduct qp = QProduct.product;
		return Optional.ofNullable(queryFactory.selectFrom(qp).where(qp.celeb.celebMw.eq(WM)).fetch());
	}
	//샐럽번호따라 조회
	@Override
	public Optional<List<Product>> sltByCelebNo(Long No){
		QProduct qp = QProduct.product;
		return Optional.ofNullable(queryFactory.selectFrom(qp).where(qp.celeb.celebNo.eq(No)).fetch());
	}
	@Override
	public Optional<List<Product>> sltByCelebNM(String NM){
		QProduct qp = QProduct.product;
		return Optional.ofNullable(queryFactory.selectFrom(qp).where(qp.celeb.celebNm.eq(NM)).fetch());
	}
}
