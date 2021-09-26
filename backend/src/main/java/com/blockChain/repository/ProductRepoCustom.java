package com.blockChain.repository;

import java.util.List;
import java.util.Optional;

import com.blockChain.domain.Product;
import com.blockChain.dto.CardForSalesDTO;

public interface ProductRepoCustom {

	Optional<Product> sltByNM(String NM);

	Optional<List<Product>> sltByWM(String WM);

	Optional<List<Product>> sltByCelebNo(Long NO);

	Optional<List<Product>> sltByCelebNM(String NM);

	Optional<List<CardForSalesDTO>> searchCard(String NM);

}
