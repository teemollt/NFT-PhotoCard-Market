package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Celeb_Like;

public interface CelebRepo extends JpaRepository<Celeb_Like,Long>,Celeb_LikeRepoCustom{

}
