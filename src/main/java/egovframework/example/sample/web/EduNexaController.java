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
package egovframework.example.sample.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;

import egovframework.example.sample.service.EduNexaService;

/**
 * @Class Name : EduNexaController.java
 * @Description : EduNexaController  Class
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

@Controller
public class EduNexaController {

	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@Resource
	private EduNexaService eduNexaService;
	
	// 목록을 조회한다.
	@RequestMapping(value = "/edu/getData.do")
	public NexacroResult getData(@ParamDataSet(name="dsSearch") Map<String, Object> searchMap,
			 					 @ParamVariable(name="userId") String userId){
				
		List<Map<String, Object>> resultData = eduNexaService.getData();
				
		NexacroResult result = new NexacroResult();
		
		result.addDataSet("dsData", resultData);
		
		return result;
	}
	
	// 목록을 저장한다.
	@RequestMapping(value = "/edu/saveData.do")
	public NexacroResult saveData(@ParamDataSet(name="dsData") List<Map<String, Object>> dataList) throws Exception{
				
		eduNexaService.saveData(dataList);
				
		NexacroResult result = new NexacroResult();
		
//		result.addDataSet("dsData", resultData);
		
		return result;
	}

	// login 한다.
	@RequestMapping(value = "/edu/getLogin.do")
	public NexacroResult getLogin(@ParamDataSet(name="dsLogin") Map<String, Object> loginData
								  , HttpSession session){
		
		Map<String, Object> resultMap = eduNexaService.getLogin(loginData);
		
		NexacroResult result = new NexacroResult();

		if(resultMap != null && !resultMap.isEmpty()) {
			// login 성공 여부 체크

	        // 세션 저장
	        session.setAttribute("LOGIN_USER", resultMap);

	        // Dataset은 List<Map>
	        List<Map<String, Object>> userList = new ArrayList<>();
	        userList.add(resultMap);
	        result.addDataSet("dsUser", userList);
	        
			result.addVariable("result", 1);
		} else {
			result.addVariable("result", 0);
		}
		
		return result;
	}
	
	// 로그아웃
	@RequestMapping("/edu/setLogout.do")
	public NexacroResult logout(HttpSession session) {

	    // 세션 완전 종료
	    session.invalidate();

	    NexacroResult result = new NexacroResult();
	    result.addVariable("result", 1);
	    return result;
	}
	
	// 새로고침 후 세션 확인해서 로그아웃 방지
	@RequestMapping("/edu/sessionCheck.do")
	public NexacroResult sessionCheck(HttpSession session) {
		
		
	    NexacroResult result = new NexacroResult();

	    Map<String, Object> user =
	        (Map<String, Object>) session.getAttribute("LOGIN_USER");

	    
	    if (user != null && !user.isEmpty()) {
	        List<Map<String, Object>> list = new ArrayList<>();
	        list.add(user);

	        result.addDataSet("dsUser", list);
	        result.addVariable("isLogin", 1);
	    } else {
	        result.addVariable("isLogin", 0);
	    }
	    return result;
	}

}
