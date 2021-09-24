package com.blockChain.service;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.web3j.crypto.Wallet;

import com.blockChain.domain.Member;
import com.blockChain.domain.Wallets;
import com.blockChain.repository.WalletRepo;

@Service
@Transactional
public class WalletSvcImpl implements WalletSvcInter {

	@Autowired
	private WalletRepo walletRepo;
	
	@Override
	public Map<String, Object> register(Map<String, Object> req) {
		Map<String, Object> res = new HashMap<String,Object>();
		Member walletMember = (Member)req.get("walletMemeber");
		String walletAdd = (String)req.get("walletAdd");
		
		try {
			Wallets wallet = new Wallets();
			wallet.setWalletAdd(walletAdd);
			wallet.setWalletBal(new BigDecimal(0));
			wallet.setWalletCash(0L);
			wallet.setWalletRC(0L);
			walletRepo.save(wallet);
			
			res.put("msg", "지갑등록 성공");
		}catch(Exception e) {
			
		}
		return null;
	}

}
