package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Celeb_Group;

public interface Celeb_GroupRepo extends JpaRepository<Celeb_Group,Long>,Celeb_GroupRepoCustom{

}
