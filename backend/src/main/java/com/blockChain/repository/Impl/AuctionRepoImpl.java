package com.blockChain.repository.Impl;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.Celeb_Group;
import com.blockChain.domain.QCeleb_Group;
import com.blockChain.domain.Sales;
import com.blockChain.repository.AuctionRepoCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class AuctionRepoImpl implements AuctionRepoCustom{
	private final JPAQueryFactory queryFactory;
	
}
