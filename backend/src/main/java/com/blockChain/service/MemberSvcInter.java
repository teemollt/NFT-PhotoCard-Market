package com.blockChain.service;

import java.util.Map;

import com.blockChain.domain.Member;
import com.blockChain.dto.TokenDto;

public interface MemberSvcInter {


	Map<String, Object> signup(Map<String, Object> req);
	public TokenDto login(Member member);
	Map<String, Object> checkId(Map<String, Object> req);
	Map<String, Object> checkNick(Map<String, Object> req);
	Map<String, Object> checkEmail(Map<String, Object> req);

}
