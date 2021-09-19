package com.blockChain.repository.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Celeb_Group;
import com.blockChain.domain.QAuction;
import com.blockChain.domain.QCeleb_Group;
import com.blockChain.domain.QMember;
import com.blockChain.domain.QProduct;
import com.blockChain.domain.QProduct_Token;
import com.blockChain.domain.QSales;
import com.blockChain.domain.Sales;
import com.blockChain.dto.AuctionDTO;
import com.blockChain.dto.CardDTO;
import com.blockChain.dto.MemberDTO;
import com.blockChain.repository.AuctionRepoCustom;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AuctionRepoImpl implements AuctionRepoCustom{
	private final JPAQueryFactory queryFactory;
	
	@Override
	public Optional<List<AuctionDTO>> sltAuctionByGroup(Long groupNo){
//		QAuction qa = QAuction.auction;
//		QMember qm = QMember.member;
//		QProduct_Token qpt = QProduct_Token.product_Token;
//		QProduct qp = QProduct.product;
//		QSales qs = QSales.sales;
//		List<AuctionDTO> res = queryFactory.select(Projections.constructor(
//				AuctionDTO.class
//				,	Projections.constructor(
//						MemberDTO.class
//						, qa.member.memberNo
//						, qa.member.memberNick)
//				, Projections.constructor(CardDTO.class
//						, 
//						ExpressionUtils.as(
//		                        JPAExpressions.select()
//		                        .from(qp)
//		                        .where(qpt.token.eq(qa.token)),
//		                "likeState")
//						)
//				, Projections.constructor(AuctionDTO.class
//						, qa.auctionNo
//						, qa.auctionName
//						, qa.auctionDetail
//						, qa.auctionImmeprice
//						, qa.auctionStart
//						, qa.auctionDeadline))
//				)
		return null;
	}
}
