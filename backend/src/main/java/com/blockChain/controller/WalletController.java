package com.blockChain.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blockChain.service.WalletSvcInter;

@RestController
@RequestMapping("/wallet")
public class WalletController {

	@Autowired
	private WalletSvcInter ws;
	@PostMapping
	public Map<String, Object> register(@RequestBody Map<String, Object> req) {
		return ws.register(req);
	}
	
	
}
