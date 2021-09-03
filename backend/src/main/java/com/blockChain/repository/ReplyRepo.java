package com.blockChain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.blockChain.domain.Reply;

public interface ReplyRepo extends JpaRepository<Reply,Long>,ReplyRepoCustom{

}
