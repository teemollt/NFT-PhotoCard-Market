package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blockChain.domain.Celeb_Record;

public interface Celeb_RecordRepo extends JpaRepository<Celeb_Record,Long>,Celeb_RecordRepoCustom{

}
