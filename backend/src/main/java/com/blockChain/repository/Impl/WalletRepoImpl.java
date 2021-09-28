package com.blockChain.repository.Impl;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.blockChain.domain.QMember;
import com.blockChain.domain.QWallets;
import com.blockChain.domain.Wallets;
import com.blockChain.repository.WalletRepoCustom;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class WalletRepoImpl implements WalletRepoCustom{
	
	private final JPAQueryFactory queryFactory;
	
	@Override
	public Optional<Wallets> findByWallet(Long memberNo) {
		QWallets qw = QWallets.wallets;
		return Optional.ofNullable(queryFactory.selectFrom(qw).where(qw.member.memberNo.eq(memberNo)).fetchFirst());
	}

}
