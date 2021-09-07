package com.blockChain.domain;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Bid {
	
    // 호가번호 
	@Id
	@GeneratedValue
	@Column(name="BID_NO")
    private Long bidNo;

    // 경매번호 
	@ManyToOne
	@JoinColumn(name="AUCTION_NO")
    private Auction auction;

    // 경매회원
	@ManyToOne
	@JoinColumn(name="MEMBER_NO")
    private Member member;

    // 경매호가 
	@Column(name="BID_PRICE")
    private Long bidPrice;
	
	//호가날짜
//	@Column(name="BID_DATE",updatable = false,
//			  columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
//	@CreationTimestamp
	@Column(name="BID_DATE")
	private LocalDateTime bidDate;
}
