package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Token_Owner;

public interface Token_OwnerRepo extends JpaRepository<Token_Owner,Long>,Token_OwnerRepoCustom{

}
