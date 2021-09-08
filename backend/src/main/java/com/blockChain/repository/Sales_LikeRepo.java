package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Sales_Like;

public interface Sales_LikeRepo extends JpaRepository<Sales_Like,Long>,Sales_LikeRepoCustom{

}
