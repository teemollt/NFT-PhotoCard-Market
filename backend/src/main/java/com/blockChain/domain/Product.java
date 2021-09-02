package com.blockChain.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Product {
    // 제품번호
	@Id
	@GeneratedValue
	@Column(name="PRODUCT_NO")
    private Long productNo;

    // 제품명 
	@Column(name="PRODUCT_NM")
    private String productNm;

    // 제품등급
	@ManyToOne
	@JoinColumn(name="PRODUCT_GRADE_NO")
    private Product_Grade productGrade;
	
    // 제품설명
	@Column(name="PRODUCT_DETAIL",length=3000)
    private String productDetail;
	
	@ManyToOne
	@JoinColumn(name="CELEB_NO")
	private Celeb celeb;
	
	@Column(name="PRODUCT_QUANTY")
	private Long productQuanty;
}
