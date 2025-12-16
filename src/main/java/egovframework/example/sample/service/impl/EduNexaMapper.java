/*
 * Copyright 2011 MOPAS(Ministry of Public Administration and Security).
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

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

/**
 * @Interfave Name : EduNexaMapper.java
 * @Description : EduNexa Mapper Interface
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
 * Copyright (C) by MOPAS All right reserved.
 */
@Mapper
public interface EduNexaMapper {
	
	// 목록을 조회한다.
	List<Map<String, Object>> getData();

	Map<String, Object> getLogin(Map<String, Object> loginData);

	void saveData(List<Map<String, Object>> dataList);
	

}
