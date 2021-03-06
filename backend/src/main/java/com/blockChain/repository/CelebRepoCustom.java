package com.blockChain.repository;

import java.util.List;
import java.util.Optional;

import com.blockChain.domain.Celeb;
import com.blockChain.dto.CelebDTO;

public interface CelebRepoCustom {

	Optional<Celeb> sltCeleb(String NM);


	Optional<List<Celeb>> sltCelebDTObyGroup(Long GroupNo);

}
