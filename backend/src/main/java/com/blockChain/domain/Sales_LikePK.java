package com.blockChain.domain;

import java.io.Serializable;

import lombok.Data;
@Data
public class Sales_LikePK implements Serializable{
	private Long sales;
	private Long member;
}
