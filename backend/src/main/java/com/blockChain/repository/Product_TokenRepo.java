package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Product_Token;

public interface Product_TokenRepo extends JpaRepository<Product_Token,Long>,Product_TokenRepoCustom{

}
