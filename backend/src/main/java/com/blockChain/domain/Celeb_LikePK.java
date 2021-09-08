package com.blockChain.domain;

import java.io.Serializable;

import lombok.Data;
@Data
public class Celeb_LikePK implements Serializable{
	private Long celeb;
	private Long member;
}
