package com.blockChain.repository;

import java.util.Optional;

import com.blockChain.domain.Member;
import com.blockChain.dto.MypageDTO;

public interface MemberRepoCustom {

	Optional<Member> checkId(String id);

	Optional<Member> checkEmail(String email);

	Optional<Member> checkNick(String email);

	MypageDTO myPage(Long memberNo);

}
