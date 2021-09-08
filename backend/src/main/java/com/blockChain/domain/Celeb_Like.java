package com.blockChain.domain;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter
@IdClass(Celeb_LikePK.class)
@ToString
public class Celeb_Like {
	
    // 샐럽번호
	@Id
	@ManyToOne
    @JoinColumn(name = "CELEB_NO")
    private Celeb celeb;

    // 회원번호
	@Id
	@ManyToOne
    @JoinColumn(name = "MEMBER_NO")
    private Member member;
}
