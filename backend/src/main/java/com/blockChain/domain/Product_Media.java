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
public class Product_Media {
	
	// 제품미디어번호 
	@Id
	@GeneratedValue
	@Column(name="PRODUCT_MEDIA_NO")
    private Long productMediaNo;

    // 제품번호
    @ManyToOne
	@JoinColumn(name = "PRODUCT_NO")
    private Product product;

    // 제품미디어주소
    @Column(name="PRODUCT_MEDIA_ADRES",length=450)
    private String productMediaAdres;
}
