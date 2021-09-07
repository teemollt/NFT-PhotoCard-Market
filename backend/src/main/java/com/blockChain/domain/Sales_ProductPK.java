package com.blockChain.domain;

import java.io.Serializable;

import lombok.Data;

@Data
public class Sales_ProductPK implements Serializable{
	private Long sales;
	private Long product;

}
