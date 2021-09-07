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
@IdClass(Sales_ProductPK.class)
public class Sales_Product {
	
	//판매
	@Id
	@ManyToOne
    @JoinColumn(name = "SALES_NO")
    private Sales sales;
    //제품
	@Id
	@ManyToOne
    @JoinColumn(name = "PRODUCT_NO")
    private Product product;
}
