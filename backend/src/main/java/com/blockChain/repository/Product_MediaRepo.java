package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Product_Media;


public interface Product_MediaRepo extends JpaRepository<Product_Media,Long>,Product_MediaRepoCustom{

}
