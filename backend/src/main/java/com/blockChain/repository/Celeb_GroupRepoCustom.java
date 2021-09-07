package com.blockChain.repository;

import java.util.Optional;

import com.blockChain.domain.Celeb_Group;

public interface Celeb_GroupRepoCustom {

	Optional<Celeb_Group> sltByCelebGroupNM(String NM);

}
