package com.blockChain.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blockChain.domain.Celeb;
import com.blockChain.domain.Celeb_Group;
import com.blockChain.dto.CelebGroupDTO;
import com.blockChain.dto.GroupDTO;
import com.blockChain.repository.CelebRepo;
import com.blockChain.repository.Celeb_GroupRepo;

@Service
@Transactional
public class CelebSvcImpl implements CelebSvcInter{
	@Autowired
	private CelebRepo celebRepo;
	@Autowired
	private Celeb_GroupRepo cgRepo;
	@Override
	public Map<String,Object> sltCelebDTObyGroup(){
		Map<String, Object> res = new HashMap<String,Object>();
		 ModelMapper mm = new ModelMapper(); 
		List<Celeb_Group> groupList = cgRepo.findAll();
		for (int i = 0; i< groupList.size();i++) {
			
			CelebGroupDTO cgDTO = new CelebGroupDTO();
			GroupDTO groupDTO = mm.map(groupList.get(i), GroupDTO.class);
			System.out.println(groupDTO.toString());
			Optional<List<Celeb>> celebList= celebRepo.sltCelebDTObyGroup(groupDTO.getGroupNo());
//			CelebGroupDTO celebGroupDTO = mm.map(celebList, destinationType)
//			groupDTO.setGroupNo(groupList.get(i).getGroupNo());
		}
		return res;
	}

}
