(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Default");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Default.xfdl", function() {
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
        	if(errCd < 0) {
        		alert("서버 통신 실패: " + errMsg);
        	} else {
        		switch(svcId) {
        			case "":

        				break;

        		}
        	}
        };

        /****************************************************************************
         * Transaction
        ****************************************************************************/
        this.fnTransaction = function(svcId, dataSet) {

        	if(svcId == "") {
        		this.transaction(""
        						, "http://localhost:8080/edu-egov/edu/.do"
        						, ""	// Parameter DataSet
        						, ""		// Callback DataSet
        						, ""		// Parameter Value
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

        };
        this.loadIncludeScript("Default.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
