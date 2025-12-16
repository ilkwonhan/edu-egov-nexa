/*
 * Copyright 2008-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package egovframework.example.sample.service.impl;

import java.util.List;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.example.sample.service.EduNexaService;

/**
 * @Class Name : EduNexaServiceImpl.java
 * @Description : EduNexa Service Implement Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2025.12.12           	 최초생성
 *
 * @author (주)챔프정보 실행환경 개발팀
 * @since 2025. 12. 12
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */

@Service
public class EduNexaServiceImpl implements EduNexaService {

	@Resource
	private EduNexaMapper eduNexaMapper;
	
	// 목록을 조회한다.
	@Override
	public List<Map<String, Object>> getData() {
		// TODO Auto-generated method stub
		return eduNexaMapper.getData();
	}

	@Override
	public Map<String, Object> getLogin(Map<String, Object> loginData) {
		// TODO Auto-generated method stub
		return eduNexaMapper.getLogin(loginData);
	}

	@Override
	public void saveData(List<Map<String, Object>> dataList) {
		// TODO Auto-generated method stub
		for(Map<String, Object> m : dataList) {
			System.out.println(m);
		}
		
//		eduNexaMapper.saveData(dataList);
//		return eduNexaMapper.saveData(savehMap);
	}



}
