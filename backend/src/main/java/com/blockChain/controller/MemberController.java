package com.blockChain.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockChain.domain.Member;
import com.blockChain.dto.TokenDto;
import com.blockChain.service.MemberSvcInter;

@RestController
@RequestMapping("/api/member")
public class MemberController {
	@Autowired
	private MemberSvcInter ms;
	@PostMapping("/signup")
	public Map<String,Object> signup(@RequestBody Map<String, Object> req){
		System.out.println(req);
		return ms.signup(req);
	}
	@PostMapping("/login")
	public Map<String, Object> login(@RequestBody Member member) {
		Map<String, Object> ret = new HashMap<>();
		TokenDto token;
		try {
			token = ms.login(member);
		} catch (IllegalStateException e) {
			ret.put("success", "False");
			ret.put("msg", e.getMessage());
			return ret;
		}

		ret.put("success", "True");
		ret.put("msg", "로그인 성공");
		ret.put("token", token);

		return ret;
	}
	
	@PostMapping("/checkId")
	public Map<String, Object>checkId(@RequestBody  Map<String, Object> req){
		return ms.checkId(req);
		
	}
	
	@PostMapping("/checkNick")
	public Map<String, Object>checkNick(@RequestBody  Map<String, Object> req){
		return ms.checkNick(req);
		
	}
	
	@PostMapping("/checkEmail")
	public Map<String, Object>checkEmail(@RequestBody  Map<String, Object> req){
		return ms.checkEmail(req);
		
	}
}
