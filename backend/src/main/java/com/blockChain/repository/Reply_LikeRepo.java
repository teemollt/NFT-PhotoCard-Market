package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.blockChain.domain.Reply_Like;

public interface Reply_LikeRepo extends JpaRepository<Reply_Like,Long>,Reply_LikeRepoCustom{

}
