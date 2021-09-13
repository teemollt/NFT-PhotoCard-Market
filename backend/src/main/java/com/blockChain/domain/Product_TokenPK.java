package com.blockChain.domain;

import java.io.Serializable;

import lombok.Data;
@Data
public class Product_TokenPK implements Serializable{
	private Long product;
	private Long token;
}
