package com.blockChain.service;

import java.util.HashMap;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

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
	
}
