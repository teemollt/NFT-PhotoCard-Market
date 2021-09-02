package com.blockChain.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
@IdClass(Product_TokenPK.class)
public class Product_Token {
	
	@Id
	@ManyToOne
    @JoinColumn(name = "PRODUCT_NO")
	private Product product;
	
	@Id
	@ManyToOne
    @JoinColumn(name = "TOKEN_NO")
    private Token token;

}
