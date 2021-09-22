package com.blockChain.repository.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Celeb_Group;
import com.blockChain.domain.QAuction;
import com.blockChain.domain.QBid;
import com.blockChain.domain.QCeleb_Group;
import com.blockChain.domain.QMember;
import com.blockChain.domain.QProduct;
import com.blockChain.domain.QProduct_Grade;
import com.blockChain.domain.QProduct_Media;
import com.blockChain.domain.QProduct_Token;
import com.blockChain.domain.QSales;
import com.blockChain.domain.Sales;
import com.blockChain.dto.AuctionDTO;
import com.blockChain.dto.AuctionGroupListDTO;
import com.blockChain.dto.BidDTO;
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
	public Optional<List<AuctionGroupListDTO>> sltAuctionByGroup(Long groupNo){
		QAuction qa = QAuction.auction;
		QMember qm = QMember.member;
		QProduct_Token qpt = QProduct_Token.product_Token;
		QProduct qp = QProduct.product;
		QSales qs = QSales.sales;
		QProduct_Media qpm= QProduct_Media.product_Media;
		QProduct_Grade qpg = QProduct_Grade.product_Grade;
		QBid qb = QBid.bid;
		System.out.println(groupNo);
		List<AuctionGroupListDTO> res = queryFactory.select(Projections.constructor(
				AuctionGroupListDTO.class
				, Projections.constructor(
						MemberDTO.class
						, qa.member.memberNo
						, qa.member.memberNick)
				, Projections.constructor(CardDTO.class
						, qpt.product.productNo
						, qpt.product.productNm
						, qpm.productMediaAdres
						, qa.token.tokenNo
						, qa.token.tokenSeriarlizeNo
						, qp.productGrade.productGradeNo
						, qp.productGrade.productGrade
						)
				, Projections.constructor(AuctionDTO.class
						, qa.auctionNo
						, qa.auctionName
						, qa.auctionDetail
						, qa.auctionImmeprice
						, qa.auctionStart
						, qa.auctionDeadline)
				, Projections.constructor(BidDTO.class
//						, qb.bidNo
						, qb.bidPrice.max()
						)
				)).from(qa)
				.join(qb).on(qa.auctionNo.eq(qb.auction.auctionNo)).groupBy(qa.auctionNo)
				.join(qpt).on(qa.token.tokenNo.eq(qpt.token.tokenNo))
				.join(qp).on(qpt.product.productNo.eq(qp.productNo))
				.join(qpm).on(qp.productNo.eq(qpm.product.productNo))
				.where(qp.celeb.group.groupNo.eq(groupNo))
				.orderBy(qa.auctionStart.asc())
				.fetch();
		return Optional.ofNullable(res);
	}
}
