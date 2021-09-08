package com.blockChain.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockChain.service.MemberSvcInter;

@RestController
@RequestMapping("/member")
public class MemberController {
	@Autowired
	private MemberSvcInter ms;
	@PostMapping("/signup")
	public Map<String,Object> signup(@RequestBody Map<String, Object> req){
		System.out.println(req);
		return ms.signup(req);
	}
}
