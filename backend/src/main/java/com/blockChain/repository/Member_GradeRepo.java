package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Member_Grade;

public interface Member_GradeRepo extends JpaRepository<Member_Grade,Long>,Member_GradeRepoCustom{

}
