package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Product_Grade;

public interface Product_GradeRepo extends JpaRepository<Product_Grade,Long>,Product_GradeRepoCustom{

}
