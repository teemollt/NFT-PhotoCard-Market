package com.blockChain.service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockChain.config.SecurityUtil;
import com.blockChain.domain.Member;
import com.blockChain.domain.Wallets;
import com.blockChain.repository.MemberRepo;
import com.blockChain.repository.WalletRepo;

@Service
@Transactional
public class WalletSvcImpl implements WalletSvcInter {

	@Autowired
	private WalletRepo walletRepo;
	@Autowired
	private MemberRepo memberRepo;
	
	@Override
	public Map<String, Object> register(Map<String, Object> req) {
		Map<String, Object> res = new HashMap<String,Object>();
			
		try {
			Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
			String walletAdd = (String)req.get("walletAdd");
			
			Wallets wallet = new Wallets();
			wallet.setWalletAdd(walletAdd);
			wallet.setWalletBal(new BigDecimal(0));
			wallet.setMember(member);
			wallet.setWalletCash(0L);
			wallet.setWalletRC(0L);
			walletRepo.save(wallet);
			
			res.put("success", true);
			res.put("msg", "지갑등록 성공");
		}catch(Exception e) {
			res.put("msg", e.getMessage());
		}
		return res;
	}

}
