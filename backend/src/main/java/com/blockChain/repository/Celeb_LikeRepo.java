package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Celeb;

public interface Celeb_LikeRepo extends JpaRepository<Celeb,Long>,CelebRepoCustom{

}
