package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Product;

public interface ProductRepo extends JpaRepository<Product,Long>,ProductRepoCustom{

}
