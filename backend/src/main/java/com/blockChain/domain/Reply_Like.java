package com.blockChain.domain;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
@IdClass(Reply_LikePK.class)
public class Reply_Like {
	
    // 댓글번호
	@Id
	@ManyToOne
    @JoinColumn(name = "REPLY_NO")
    private Reply reply;

    // 회원번호
	@Id
	@ManyToOne
    @JoinColumn(name = "MEMBER_NO")
    private Member member;
}
