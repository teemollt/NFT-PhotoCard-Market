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
@IdClass(Auction_LikePK.class)
public class Auction_Like {
	
	@Id
	@ManyToOne
    @JoinColumn(name = "AUCTION_NO")
    private Auction auction;
	
	@Id
	@ManyToOne
    @JoinColumn(name = "MEMBER_NO")
    private Member member;
}
