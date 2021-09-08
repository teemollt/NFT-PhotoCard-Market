package com.blockChain.repository;

import java.util.Optional;

import com.blockChain.domain.Celeb;

public interface CelebRepoCustom {

	Optional<Celeb> sltCeleb(String NM);

}
