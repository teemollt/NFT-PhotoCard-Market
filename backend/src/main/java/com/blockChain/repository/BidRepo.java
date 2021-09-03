package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Bid;

public interface BidRepo extends JpaRepository<Bid,Long>,BidRepoCustom{

}
