package com.blockChain.repository;

import java.util.List;
import java.util.Optional;

import com.blockChain.domain.Sales;
import com.blockChain.dto.SalesDTO;

public interface SalesRepoCustom {

	Optional<Sales> sltBySalesNM(String NM);

	Optional<List<SalesDTO>> slyBySalesDiv(String Div);

}
