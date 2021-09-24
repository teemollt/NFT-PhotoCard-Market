package com.blockChain.service;

import java.util.Map;

public interface GallerySvcInter {

	Map<String, Object> galleryMain();

	Map<String, Object> galleryList(Long memberNo, Long arraydiv1, Long celebPk, Long arraydiv2);

}
