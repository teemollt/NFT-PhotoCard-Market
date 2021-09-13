package com.blockChain.repository.Impl;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Product_Grade;
import com.blockChain.domain.QProduct_Grade;
import com.blockChain.repository.Product_GradeRepoCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class Product_GradeRepoImpl implements Product_GradeRepoCustom{
	private final JPAQueryFactory queryFactory;
	QProduct_Grade qpg = QProduct_Grade.product_Grade;
	
	@Override
	public Optional<Product_Grade>sltbyGrade(String NM){
		return Optional.ofNullable(queryFactory.selectFrom(qpg).where(qpg.productGrade.eq(NM)).fetchFirst());
	}
}
