package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Member;

public interface MemberRepo extends JpaRepository<Member,Long>,MemberRepoCustom{

}
