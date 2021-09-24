package com.blockChain.service;

import java.util.HashMap;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.blockChain.config.SecurityUtil;
import com.blockChain.domain.GalleryArticle;
import com.blockChain.domain.Member;
import com.blockChain.repository.GalleryArticleRepo;
import com.blockChain.repository.MemberRepo;

@Service
@Transactional
public class GallerySvcImpl implements GallerySvcInter{
	@Autowired
	private MemberRepo memberRepo;
	@Autowired
	private GalleryArticleRepo gaRepo;
	@Override
	public Map<String,Object>galleryMain(){
		Map<String, Object> res = new HashMap<String,Object>();
		res.put("res", gaRepo.galleryArticleMain().get());
		return res;
	}
	@Override
	public Map<String,Object>galleryList(Long memberNo,Long arraydiv1, Long celebPk,Long arraydiv2){
		Map<String, Object> res = new HashMap<String,Object>();
		res.put("res",memberRepo.galleryList(memberNo, arraydiv1, celebPk, arraydiv2));
		return res;
	}
	@Override
	public Map<String,Object>galleryInsert(Map<String,Object>req){
		Map<String, Object> res = new HashMap<String,Object>();
		try {
			Member member = memberRepo.findById(SecurityUtil.getCurrentMemberId()).orElseThrow(() -> new IllegalStateException("로그인 유저정보가 없습니다"));
			String galleryArticleContent = (String) req.get("galleryArticleContent");
			GalleryArticle ga = new GalleryArticle();
			ga.setMember(member);
			ga.setGalleryArticleContent(galleryArticleContent);
			gaRepo.save(ga);
			res.put("success", true);
			res.put("msg", "입력성공");
			
		}catch(IllegalStateException e){
			res.put("success", false);
			res.put("msg", e.getMessage());
			return res;
		}
		return res;
	}
	
	
}
