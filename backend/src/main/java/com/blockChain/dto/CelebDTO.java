package com.blockChain.dto;


import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CelebDTO {
	private Long celebNo;
	private String celebbNm;
	private String celebMw;
	private GroupDTO group;
	private LocalDateTime celebDebut;
	private LocalDateTime celebRetire;

}
