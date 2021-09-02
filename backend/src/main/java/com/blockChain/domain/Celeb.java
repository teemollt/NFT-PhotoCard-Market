package com.blockChain.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import lombok.Getter;
import lombok.Setter;

//CELEB
@Entity
@Getter @Setter
public class Celeb {

  // 샐럽번호
  @Id
  @GeneratedValue
  @JoinColumn(name="CELEB_NO")
  private Long celebNo;

  // 샐럽명 
  @Column(name="CELEB_NM",length=45)
  private String celebNm;

}