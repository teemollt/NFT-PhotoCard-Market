package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Product_Grade_Percent;

public interface Product_Grade_PercentRepo extends JpaRepository<Product_Grade_Percent,Long>,Product_Grade_PercentRepoCustom{

}
