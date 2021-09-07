package com.blockChain.repository;

import java.util.Optional;

import com.blockChain.domain.Member_Grade;

public interface Member_GradeRepoCustom {

	Optional<Member_Grade> sltByNM(String NM);

}
