package com.blockChain.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter
@ToString
public class Token {
    // 토큰번호
    @Id
    @GeneratedValue
	@Column(name="TOKEN_NO")
    private Long tokenNo;

    // 토큰시리얼
	@Column(name="TOKEN_SERIARLIZE_NO",length=300)
    private String tokenSeriarlizeNo;
}
