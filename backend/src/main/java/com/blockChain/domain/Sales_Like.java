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
@IdClass(Sales_LikePK.class)
public class Sales_Like {

    // 판매번호 
	@Id
	@ManyToOne
    @JoinColumn(name = "SALES_NO")
    private Sales sales;

    // 회원번호 
	@Id
	@ManyToOne
    @JoinColumn(name = "MEMBER_NO")
    private Member member;
}
