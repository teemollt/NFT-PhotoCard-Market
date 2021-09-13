package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Sales_Product;

public interface Sales_ProductRepo extends JpaRepository<Sales_Product,Long>,Sales_ProductRepoCustom{

}
