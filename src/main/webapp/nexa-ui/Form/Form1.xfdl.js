(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("List");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BRT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","62","1080","408",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","23","0","1037","400",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsData");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NO\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"BRT_DT\"/><Cell col=\"4\" text=\"HP_NO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NO\" textAlign=\"center\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:EMP_ID\" textAlign=\"center\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:NAME\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:BRT_DT\" textAlign=\"center\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:HP_NO\" textAlign=\"center\" edittype=\"normal\" displaytype=\"mask\" maskeditformat=\"expr:dataset.getColumn(currow, &quot;HP_NO&quot;).length &gt;= 10 ? (dataset.getColumn(currow, &quot;HP_NO&quot;).substring(0,2) == &apos;02&apos; ? &apos;@@-@@@@-@@@@&apos; : (dataset.getColumn(currow, &quot;HP_NO&quot;).length == 11?&apos;@@@-@@@@-@@@@&apos;:&apos;@@@-@@@-@@@@&apos; )) : &apos;@@-@@@-@@@@&apos;\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("divSearch","0","9","1080","53",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","941","13","119","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearch","33","13","125","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboSearch_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSearch_innerdataset", obj);
            divSearch_form_cboSearch_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">ID</Col><Col id=\"datacolumn\">ID</Col></Row><Row><Col id=\"codecolumn\">NAME</Col><Col id=\"datacolumn\">NAME</Col></Row><Row><Col id=\"codecolumn\">DESCRIPTION</Col><Col id=\"datacolumn\">DESCRIPTION</Col></Row><Row><Col id=\"codecolumn\">USE_YN</Col><Col id=\"datacolumn\">USE_YN</Col></Row><Row><Col id=\"codecolumn\">REG_USER</Col><Col id=\"datacolumn\">REG_USER</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSearch_innerdataset);
            obj.set_text("ID");
            obj.set_value("ID");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearch","186","13","160","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divBtn","23","469","1037","69",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","777","14","77","25",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnUpdate","862","14","77","25",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDelete","947","14","77","25",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.divBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,function(p){});
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form1.xfdl", function() {
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
        this.resultCount = "";

        /****************************************************************************
         * Form Onload
        ****************************************************************************/
        this.Form_onload = function(obj,e)
        {
        	// form onload 시 최초 조회
        	this.fnTransaction("svcGetData");
        };

        /****************************************************************************
         * Call Back
        ****************************************************************************/
        this.fn_callback = function(svcId, errCd, errMsg) {
        	if(errCd < 0) {
        		alert("서버 통신 실패: " + errMsg);
        	} else {
        		switch(svcId) {
        			case "svcGetData":
        				fnSearchSuccess();
        				break;

        			case "svcSaveData":
        				fnSaveSuccess();
        				break;
        		}
        	}
        };

        /****************************************************************************
         * Transaction
        ****************************************************************************/
        this.fnTransaction = function(svcId, dataSet) {

        	if(svcId == "svcGetData") {
        		this.dsData.clearData();
        		this.dsData.addRow(0);
        		this.transaction("svcGetData"
        						, "strURL::/edu/getData.do"
        						, "dsSearch=dsSearch"	// Parameter DataSet
        						, "dsData=dsData"		// Callback DataSet
        						, "userId='admin'"		// Parameter Value
        						, "fn_callback"   		// Callback
        						);
        	}

        	if(svcId == "svcSaveData") {
        		this.transaction("svcSaveData"
        						, "strURL::/edu/saveData.do"
        						, "dsData=dsData:u"		// Parameter DataSet
        						, "cnt=resultCount"
        						, ""
        						, "fn_callback"   		// Callback
        						);
        	}
        }

        /****************************************************************************
         * User Function
        ****************************************************************************/
        function fnSearchSuccess() {
        	trace("조회 성공!");
        }

        function fnSaveSuccess() {
        	trace("저장 성공!");
        }

        /****************************************************************************
         * Component
        ****************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnTransaction("svcGetData");
        };

        this.divBtn_btnSave_onclick = function(obj,e)
        {
        	this.dsData.insertRow(0);
        };

        this.divBtn_btnUpdate_onclick = function(obj,e)
        {
        	this.fnTransaction("svcSaveData");
        };

        this.divBtn_btnDelete_onclick = function(obj,e)
        {
        	this.dsData.deleteRow(this.dsData.rowposition);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divBtn.form.btnSave.addEventHandler("onclick",this.divBtn_btnSave_onclick,this);
            this.divBtn.form.btnUpdate.addEventHandler("onclick",this.divBtn_btnUpdate_onclick,this);
            this.divBtn.form.btnDelete.addEventHandler("onclick",this.divBtn_btnDelete_onclick,this);
        };
        this.loadIncludeScript("Form1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
