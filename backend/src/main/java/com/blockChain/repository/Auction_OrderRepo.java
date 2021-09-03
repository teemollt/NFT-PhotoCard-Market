package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.blockChain.domain.Auction_Order;

public interface Auction_OrderRepo extends JpaRepository<Auction_Order,Long>,Auction_OrderRepoCustom{

}
