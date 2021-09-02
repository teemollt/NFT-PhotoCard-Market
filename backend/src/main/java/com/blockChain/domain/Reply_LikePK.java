package com.blockChain.domain;

import java.io.Serializable;

import lombok.Data;
@Data
public class Reply_LikePK implements Serializable{
	private Long reply;
	private Long member;
}
