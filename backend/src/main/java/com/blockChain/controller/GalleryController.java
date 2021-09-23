package com.blockChain.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockChain.service.GallerySvcInter;

@RestController
@RequestMapping("/api/gallery")
public class GalleryController {
	@Autowired
	GallerySvcInter gSvc;
	
	@GetMapping("/main")
	public Map<String,Object> galleryMain(){
		return gSvc.galleryMain();
	}
}
