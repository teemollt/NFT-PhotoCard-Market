package com.blockChain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockChain.service.SalesSvcInter;

@RestController
@RequestMapping("/api/search")
public class SearchController {
	@Autowired
	SalesSvcInter salesSvc;
}
