package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Auction;

public interface AuctionRepo extends JpaRepository<Auction,Long>,AuctionRepoCustom{

}
