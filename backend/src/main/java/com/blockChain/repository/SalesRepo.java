package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Sales;

public interface SalesRepo extends JpaRepository<Sales,Long>,SalesRepoCustom{

}
