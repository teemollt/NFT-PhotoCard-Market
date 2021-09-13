package com.blockChain.dto;


import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//main/celebGroup 
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CelebGroupDTO {
	private GroupDTO group;
	private List<CelebDTO>celebList;

}
