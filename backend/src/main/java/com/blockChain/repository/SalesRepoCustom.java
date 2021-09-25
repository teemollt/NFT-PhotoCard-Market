package com.blockChain.repository;

import java.util.List;
import java.util.Optional;

import com.blockChain.domain.Sales;
import com.blockChain.dto.SalesDTO;
import com.blockChain.dto.CardDTO;
import com.blockChain.dto.CardForSalesDTO;

public interface SalesRepoCustom {

	Optional<Sales> sltBySalesNM(String NM);

	Optional<List<SalesDTO>> slyBySalesDiv(String Div);

	Optional<List<CardForSalesDTO>> gainCardList(Long salesPK);

	Optional<Sales> sltByContainSalesNM(String NM);

	Optional<List<SalesDTO>> searchSales(String NM);

}
