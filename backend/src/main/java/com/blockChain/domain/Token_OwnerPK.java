package com.blockChain.domain;

import java.io.Serializable;

import lombok.Data;

@Data
public class Token_OwnerPK implements Serializable{
	private Long token;
	private Long member;

}
