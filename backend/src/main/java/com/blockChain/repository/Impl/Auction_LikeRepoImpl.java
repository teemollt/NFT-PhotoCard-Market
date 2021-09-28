package com.blockChain.repository.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Auction_Like;
import com.blockChain.domain.QAuction;
import com.blockChain.domain.QAuction_Like;
import com.blockChain.domain.QSales_Like;
import com.blockChain.domain.Sales_Like;
import com.blockChain.dto.AuctionDTO;
import com.blockChain.repository.Auction_LikeRepoCustom;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class Auction_LikeRepoImpl implements Auction_LikeRepoCustom{
	private final JPAQueryFactory queryFactory;
	@Override
	public Optional<List<AuctionDTO>> sltByMember(Long memberNo){
		QAuction_Like qal = QAuction_Like.auction_Like;
		QAuction qa = QAuction.auction;
		return Optional.ofNullable(queryFactory.select(Projections.constructor(AuctionDTO.class
				, qa.auctionNo
				, qa.auctionName
				, qa.auctionDetail
				, qa.auctionImmeprice
				, qa.auctionStart
				, qa.auctionDeadline))
				.from(qal)
				.join(qa).on(qal.auction.eq(qa))
				.where(qa.member.memberNo.eq(memberNo))
				.fetch());
	}
	@Override
	public Optional<Auction_Like> checkLike(Long auctionPk, Long memberPk) {
		QAuction_Like qal = QAuction_Like.auction_Like;
		return Optional.ofNullable(queryFactory
				.selectFrom(qal)
				.where(qal.member.memberNo.eq(memberPk)
						.and(qal.auction.auctionNo.eq(auctionPk)))
				.fetchFirst());
	}
	@Override
	public Long likeCount(Long auctionPk) {
		QAuction_Like qal = QAuction_Like.auction_Like;
		return queryFactory
				.selectFrom(qal)
				.where(qal.auction.auctionNo.eq(auctionPk)).fetchCount();
	}
}
