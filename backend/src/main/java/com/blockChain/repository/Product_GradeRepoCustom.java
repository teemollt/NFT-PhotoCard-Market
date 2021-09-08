package com.blockChain.repository;

import java.util.Optional;

import com.blockChain.domain.Product_Grade;

public interface Product_GradeRepoCustom {

	Optional<Product_Grade> sltbyGrade(String NM);

}
