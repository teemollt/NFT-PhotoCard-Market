package com.blockChain.service;

import java.util.Map;

public interface SalesSvcInter {

	Map<String, Object> sltSalesByMW();

	Map<String, Object> sltReviewList(long cardpackPK);

	Map<String, Object> insertReview(long cardpackPK, Map<String, Object> req);

}
