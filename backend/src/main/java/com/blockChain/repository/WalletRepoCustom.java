package com.blockChain.repository;

import java.util.Optional;

import com.blockChain.domain.Wallets;

public interface WalletRepoCustom {

	Optional<Wallets> findByWallet(Long memberNo);

//	Optional<Member> checkEmail(String email);
//
//	Optional<Member> checkNick(String email);
}
