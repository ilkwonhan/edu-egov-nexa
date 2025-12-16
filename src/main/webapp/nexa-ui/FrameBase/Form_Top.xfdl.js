(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","14","2","175","46",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::champit_logo.png\')");
            obj.set_border("0px dotted");
            this.addChild(obj.name, obj);

            obj = new Div("divMenu","210","2","450","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnForm1","40","4","188","40",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_text("Form1");
            obj.set_background("#dddddd");
            obj.set_border("0px none");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("btnForm2","238","4","188","40",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("1");
            obj.set_text("Form2");
            obj.set_background("#dddddd");
            obj.set_border("0px none");
            this.divMenu.addChild(obj.name, obj);

            obj = new Div("divMenu00","666","3","184","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogout","40","4","114","40",null,null,null,null,null,null,this.divMenu00.form);
            obj.set_taborder("0");
            obj.set_text("logout");
            obj.set_background("#dddddd");
            obj.set_border("0px none");
            this.divMenu00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMenu00.form
            obj = new Layout("default","",0,0,this.divMenu00.form,function(p){});
            this.divMenu00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        /****************************************************************************
         * 화면번호: []
         * 화면내용: []
         *
         * =============================================================================
         * 회원번호	회원이름	작성일자					작성내용
         * =============================================================================
         * 1230004		한일권		2025.12.10					최초작성
         * =============================================================================
        ****************************************************************************/

        /****************************************************************************
         * Import Library
        ****************************************************************************/

        /****************************************************************************
         * Global Variable
        ****************************************************************************/
        var gvalWorkFrame = nexacro.getApplication().mainframe.AllFrameSet.MidFrameSet.WorkFrame;

        /****************************************************************************
         * Form Onload
        ****************************************************************************/
        this.Form_onload = function(obj,e)
        {
        	// form onload 시 최초 조회
        };

        /****************************************************************************
         * Call Back
        ****************************************************************************/
        this.fn_callback = function(svcId, errCd, errMsg) {
            if(errCd < 0){
                alert("서버 통신 실패: " + errMsg);
                return;
            }

            var app = nexacro.getApplication();

            switch(svcId){
                case "svcLogout":
                    app.gIsLogin = false;

                    if(!app.gdsUser) app.gdsUser = new Dataset();
                    app.gdsUser.clearData();

                    // 로그아웃 후 로그인 화면으로 이동
                    gvalWorkFrame.set_formurl("login::login.xfdl");
                    break;
            }
        };

        /****************************************************************************
         * Transaction
        ****************************************************************************/
        this.fnTransaction = function(svcId, dataSet) {

        	if(svcId == "svcLogout") {
        		this.transaction("svcLogout"
        						, "http://localhost:8080/edu-egov/edu/setLogout.do"
        						, ""					// Parameter DataSet
        						, ""					// Callback DataSet
        						, ""					// Parameter Value
        						, "fn_callback"   		// Callback
        						);
        	}
        }

        /****************************************************************************
         * User Function
        ****************************************************************************/


        /****************************************************************************
         * Component
        ****************************************************************************/

        this.divMenu_btnForm1_onclick = function(obj,e)
        {
            var sURL = "Form::Form1.xfdl";      // 열고 싶은 화면 경로

            gvalWorkFrame.set_formurl(sURL);

        };

        this.divMenu_btnForm2_onclick = function(obj,e)
        {
            var sURL = "Form::Form2.xfdl";      // 열고 싶은 화면 경로

            gvalWorkFrame.set_formurl(sURL);
        };

        this.divMenu00_btnLogout_onclick = function(obj,e)
        {
        	this.fnTransaction("svcLogout");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
            this.divMenu.form.btnForm1.addEventHandler("onclick",this.divMenu_btnForm1_onclick,this);
            this.divMenu.form.btnForm2.addEventHandler("onclick",this.divMenu_btnForm2_onclick,this);
            this.divMenu00.form.btnLogout.addEventHandler("onclick",this.divMenu00_btnLogout_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
