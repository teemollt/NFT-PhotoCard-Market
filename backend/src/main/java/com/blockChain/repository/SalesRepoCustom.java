package com.blockChain.repository;

import java.util.Optional;

import com.blockChain.domain.Sales;

public interface SalesRepoCustom {

	Optional<Sales> sltBySalesNM(String NM);

}
