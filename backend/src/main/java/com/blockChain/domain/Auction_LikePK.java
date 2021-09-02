package com.blockChain.domain;

import java.io.Serializable;

import lombok.Data;
@Data
public class Auction_LikePK implements Serializable{
	private Long auction;
	private Long member;
}
