package com.blockChain.repository;

import java.util.List;
import java.util.Optional;

import com.blockChain.domain.Celeb_Group;
import com.blockChain.dto.CelebDTO;

public interface Celeb_GroupRepoCustom {

	Optional<Celeb_Group> sltByCelebGroupNM(String NM);


}
