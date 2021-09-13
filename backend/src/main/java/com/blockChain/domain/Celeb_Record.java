package com.blockChain.domain;

import java.time.LocalDateTime;

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
public class Celeb_Record {
    // 이력번호 
	@Id
	@GeneratedValue
	@Column(name="RECORD_NO")
    private Long recordNo;

    // 발매시기 
	@Column(name="RECORD_DATE")

    private LocalDateTime recordDate;

    // 샐럽번호 
	@ManyToOne
	@JoinColumn(name="CELEB_NO")
    private Celeb celeb;

    // 음반명 
	@Column(name="RECORD_NM")
    private String recordNm;
}
