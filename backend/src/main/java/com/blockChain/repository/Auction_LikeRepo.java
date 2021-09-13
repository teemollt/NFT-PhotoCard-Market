package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Auction_Like;

public interface Auction_LikeRepo extends JpaRepository<Auction_Like,Long>,Auction_LikeRepoCustom{

}
