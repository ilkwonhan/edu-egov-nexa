(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("login");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","166","114","170","89",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Login");
            obj.set_textAlign("center");
            obj.set_font("bold 28px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","126","210","76","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","126","250","76","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("PW");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","202","208","196","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_pwd","202","248","196","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","109","327","137","47",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Login");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","263","327","137","47",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnHide","336","102","80","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("숨기기");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("login.xfdl","common::common.xjs");
        this.registerScript("login.xfdl", function() {
        /****************************************************************************
         * 화면번호: []
         * 화면내용: []
         *
         * =============================================================================
         * 회원번호	회원이름	작성일자					작성내용
         * =============================================================================
         * 1230004		한일권		2025.12.11					최초작성
         * =============================================================================
        ****************************************************************************/

        /****************************************************************************
         * Import Library
        ****************************************************************************/
        this.executeIncludeScript("common::common.xjs"); /*include "common::common.xjs"*/;

        /****************************************************************************
         * Global Variable
        ****************************************************************************/
        var gvalWorkFrame = nexacro.getApplication().mainframe.AllFrameSet.MidFrameSet.WorkFrame;
        this.result = 0;
        var app = nexacro.getApplication();
        /****************************************************************************
         * Form Onload
        ****************************************************************************/
        this.Form_onload = function(obj,e)
        {
        	// form onload 시 최초 조회
        	this.fnHide("숨기기"); // 프레임 숨기기
        };

        /****************************************************************************
         * Call Back
        ****************************************************************************/
        this.fn_callback = function(svcId, errCd, errMsg) {
        	if(errCd < 0) {
        		alert("서버 통신 실패: " + errMsg);
        	} else {
        		switch(svcId) {
        			case "svcLogin":
        				if(this.result == 1) {
        					// 로그인 성공
        					trace("Login Success");

        					   // Application 객체
        					app.gIsLogin = true;
        					app.gUserId = this.dsLogin.getColumn(0, "ID");

        					// ★ 4) WorkFrame에 메인 화면 로드
        					this.fnHide("보이기");

        					app.mainframe.AllFrameSet.MidFrameSet.WorkFrame;
        					var sURL = "FrameBase::Form_Work.xfdl";      // 열고 싶은 화면 경로

        					gvalWorkFrame.set_formurl(sURL);
        				} else {
        					alert("Login Failed");
        				}
        				break;

        		}
        	}
        };

        /****************************************************************************
         * Transaction
        ****************************************************************************/
        this.fnTransaction = function(svcId, dataSet) {

        	if(svcId == "svcLogin") {
        		this.dsUser.clearData();
        		this.dsUser.addRow();
        		this.transaction("svcLogin"
        						, "strURL::/edu/getLogin.do"
        						, "dsLogin=dsLogin"	// Parameter DataSet
        						, "dsUser=dsUser"	// Callback DataSet
        						, ""				// Parameter Value
        						, "fn_callback"   	// Callback
        						);
        	}
        }

        /****************************************************************************
         * User Function
        ****************************************************************************/

        // 비로그인 시 로그인창만 보이도록 frameset을 모두 숨긴다.
        this.fnHide = function(sText)
        {
        	var cf = nexacro.getApplication().mainframe.AllFrameSet.TopFrame;

        	var afrSet = nexacro.getApplication().mainframe.AllFrameSet;
        	var mfrSet = afrSet.MidFrameSet;

        	if(sText == "숨기기") {
        		afrSet.set_separatesize("0, *, 0");
        		mfrSet.set_separatesize("0, *");

        	} else {
        		cf.set_openstatus("hide");
        		afrSet.set_separatesize("50, *, 100");
        		mfrSet.set_separatesize("200, *");
        	}

        };

        // 사이즈 변경 시 위치 이동
        this.on_size = function(obj, e)
        {
            this.fnCenter();
        };

        this.fnCenter = function() {
            var frm = this;

            // 부모가 없으면 실행하지 않음
            if (!frm.parent) return;

            // 부모가 ChildFrame이 아닐 때도 실행하지 않음
            if (frm.parent._type_name != "ChildFrame") return;

        	this.set_width(500);
        	this.set_height(500);

            var pw = frm.parent.width;
            var ph = frm.parent.height;

            var fw = frm.width;
            var fh = frm.height;

            var left = (pw - fw) / 2;
            var top  = (ph - fh) / 2;

            frm.move(left, top, fw, fh);
        };

        /****************************************************************************
         * Component
        ****************************************************************************/


        this.btn_cancel_onclick = function(obj,e)
        {
            // 로그인 취소 → 앱 종료
            nexacro.getApplication().exit();
        };

        // 엔터키 처리
        this.edt_pwd_onkeyup = function(obj,e)
        {
            if (e.keycode === 13) {
                this.btn_login_onclick();
        };

        }

        this.btn_login_onclick = function(obj,e)
        {
        	// ★ 1) 아이디/비밀번호 가져오기
            var id = this.gfnIsUndefined(this.edt_id.value) ? "" : this.edt_id.value;
            var pwd = this.gfnIsUndefined(this.edt_pwd.value) ? "" : this.edt_pwd.value;

            // ★ 2) 간단한 빈값 체크
            if (!id || !pwd)
            {
                alert("아이디와 비밀번호를 입력하세요.");
                return;
            }

        	this.dsLogin.clearData();
        	this.dsLogin.addRow(0);

        	this.dsLogin.setColumn(0, "ID", id);
        	this.dsLogin.setColumn(0, "PWD", pwd);

        	/*=========== this.dsLogin.saveXML() ===========
        	<Dataset id="dsLogin">
        		<ColumnInfo>
        			<Column id="ID" type="STRING" size="256" />
        			<Column id="PWD" type="STRING" size="256" />
        		</ColumnInfo>
        		<Rows>
        			<Row>
        				<Col id="ID">admin</Col>
        				<Col id="PWD">1234</Col>
        			</Row>
        		</Rows>
        	</Dataset>
        	*/
        	/*console.log(this.dsLogin.saveXML());*/
        	this.fnTransaction("svcLogin");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.on_size,this);
            this.addEventHandler("onload",this.Form_onload,this);
            this.edt_pwd.addEventHandler("onkeyup",this.edt_pwd_onkeyup,this);
            this.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btnHide.addEventHandler("onclick",this.btnHide_onclick,this);
        };
        this.loadIncludeScript("login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
