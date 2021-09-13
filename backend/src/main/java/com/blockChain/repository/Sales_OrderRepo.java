package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Sales_Order;

public interface Sales_OrderRepo extends JpaRepository<Sales_Order,Long>,Sales_OrderRepoCustom{

}
