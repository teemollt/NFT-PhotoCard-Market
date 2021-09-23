package com.blockChain.repository;

import java.util.List;
import java.util.Optional;

import com.blockChain.domain.Member;
import com.blockChain.dto.GalleryMainDTO;
import com.blockChain.dto.MypageDTO;

public interface MemberRepoCustom {

	Optional<Member> checkId(String id);

	Optional<Member> checkEmail(String email);

	Optional<Member> checkNick(String email);

	MypageDTO myPage(Long memberNo);

	Optional<List<GalleryMainDTO>> galleryMain();

}
