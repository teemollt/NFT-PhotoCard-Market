package com.blockChain.repository;

import java.util.List;

import com.blockChain.domain.Sales;
import com.blockChain.domain.Token;

public interface TokenRepoCustom {

	List<Token> sltMultiBySales(Sales sales);

}
