package com.blockChain.domain;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Member_Grade {
	
    // 회원등급번호 
	@Id
	@GeneratedValue
	@Column(name="MEMBER_GRADE_NO")
    private Long memberGradeNo;

    // 회원등급명
	@Column(name="MEMBER_GRADE_NM",length=45)
    private String memberGradeNm;
}
