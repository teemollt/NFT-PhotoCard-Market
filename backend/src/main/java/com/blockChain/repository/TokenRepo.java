package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Token;

public interface TokenRepo extends JpaRepository<Token,Long>,TokenRepoCustom{

}
