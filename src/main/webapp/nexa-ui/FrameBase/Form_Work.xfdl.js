(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1080,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
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

        /****************************************************************************
         * Global Variable
        ****************************************************************************/
        this.isLogin = 0;

        /****************************************************************************
         * Form Onload
        ****************************************************************************/
        this.Form_onload = function(obj,e)
        {
        	// form onload 시 최초 조회
        	var app = nexacro.getApplication(); // Application 객체 얻기

        	if (!app.gIsLogin)
        	{
        		this.fnTransaction("svcSessionCheck");

        	}
        };

        /****************************************************************************
         * Call Back
        ****************************************************************************/
        this.fn_callback = function(svcId, errCd, errMsg) {
        	if(errCd < 0) {
        		alert("서버 통신 실패: " + errMsg);
        	} else {
        		switch(svcId) {
        			case "svcSessionCheck":

        				var app = nexacro.getApplication();
        				var workFrame = app.mainframe.AllFrameSet.MidFrameSet.WorkFrame;

        				if(this.isLogin == 1){
        					app.gIsLogin = true;

        					if(!app.gdsUser) app.gdsUser = new Dataset();
        					app.gdsUser.copyData(this.dsUser);


        					workFrame.set_formurl("FrameBase::Form_Work.xfdl");
        				} else {
        					workFrame.set_formurl("login::login.xfdl");
        				}
        				break;
        		}
        	}
        };

        /****************************************************************************
         * Transaction
        ****************************************************************************/
        this.fnTransaction = function(svcId, dataSet) {
        	if(svcId == "svcSessionCheck") {
        		this.transaction("svcSessionCheck"
        						, "strURL::/edu/sessionCheck.do"
        						, ""					// Parameter DataSet
        						, "dsUser=dsUser"		// Callback DataSet
        						, ""
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
