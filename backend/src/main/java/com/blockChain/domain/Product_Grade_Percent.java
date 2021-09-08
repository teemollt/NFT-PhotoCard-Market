package com.blockChain.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Product_Grade_Percent {
	@Id
	@GeneratedValue
	@Column(name="PRODUCT_GRADE_PERCENT_NO")
    private Long productGradePercentNo;
	
	@ManyToOne
	@JoinColumn(name="PRODUCT_GRADE_NO")
	private Product_Grade productGrade;
	
//	@Column(name="PRODUCT_PERCENT")
//	private Long productPercent;
}
