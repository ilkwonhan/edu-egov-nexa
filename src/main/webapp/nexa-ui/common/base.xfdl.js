(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Util");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,2180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static84","20","2223","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_text("18. gfnGetSequenceId");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","20","2145","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("17. gfnGetUniqueId");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","20","2067","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("16. gfnDecode");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","20","1989","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_text("15. gfnIif");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","20","1911","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("14. gfnIsSpace");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","20","1794","980","118",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("13. gfnIsXComponent");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","20","1209","980","586",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("12. gfnIsEmpty");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","20","936","980","274",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("11. gfnIsPrimitive");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","20","858","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("10. gfnIsRegExp");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","20","780","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("9. gfnIsFunction");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","20","702","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("8. gfnIsDate");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","20","624","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("7. gfnIsArray");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","20","429","980","196",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("6. gfnIsObject");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","351","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("5. gfnIsUndefined");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","273","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("4. gfnIsNull");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","195","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("3. gfnIsBoolean");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","117","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("2. gfnIsNumber");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","39","980","79",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("1. gfnIsString");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","245","429","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("(object) ⇒ (new Object)");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","245","468","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("(object) ⇒ ({})");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","245","117","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("(number) ⇒ (1234)");
            this.addChild(obj.name, obj);

            obj = new Static("Static99","245","156","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("(string) ⇒ (\"1234\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","245","195","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("(boolean) ⇒ (true)");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","245","234","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(string) ⇒ (\"true\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","245","351","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("(undefined) ⇒ ()");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","245","273","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("(null) ⇒ (null)");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","245","390","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("(string) ⇒ (\"\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","245","0","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Arguments:  ( Type ) ⇒ ( Value )");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","23","0","206","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Method");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","584","0","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Result: (Type) Vaule");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","519","126","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","519","165","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","519","204","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","519","243","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_2_result01","584","117","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("st_2_result02","584","156","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","519","282","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_3_result01","584","195","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("st_3_result02","584","234","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("st_5_result01","584","351","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("st_5_result02","584","390","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("st_6_result01","584","429","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("st_6_result02","584","468","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("st_4_result01","584","273","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","245","39","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("(string) ⇒ (\"test string!!!\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","245","78","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("(number) ⇒ (1234)");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","519","48","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","519","87","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_1_result01","584","39","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("st_1_result02","584","78","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","245","507","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("(array) ⇒ ([])");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","245","546","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("(XComp) ⇒ (new Button)");
            this.addChild(obj.name, obj);

            obj = new Static("st_6_result03","584","507","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("st_6_result04","584","546","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","245","312","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("(string) ⇒ (\"\")");
            this.addChild(obj.name, obj);

            obj = new Static("st_4_result02","584","312","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","519","359","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","519","398","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","519","437","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","519","476","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","519","515","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","519","554","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","519","321","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","245","585","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("(XObject) ⇒ (new Dataset)");
            this.addChild(obj.name, obj);

            obj = new Static("st_6_result05","584","585","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","519","594","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","245","1014","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("(string) ⇒ (\"abc\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","245","1053","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("(number) ⇒ (123)");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","245","702","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("(date) ⇒ (new Date())");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","245","741","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("(string) ⇒ (\"20130501\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","245","780","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("(function) ⇒ (this.isFunction)");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","245","819","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("(function) ⇒ (this.testFunction)");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","245","936","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("(undefined) ⇒ ()");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","245","858","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("(regexp) ⇒ (new RegExp())");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","245","975","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("(null) ⇒ (null)");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","519","711","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","519","750","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button19","519","789","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button20","519","828","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_8_result01","584","702","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Static("st_8_result02","584","741","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Button("Button21","519","867","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_9_result01","584","780","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new Static("st_9_result02","584","819","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Static("st_11_result01","584","936","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Static("st_11_result02","584","975","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            this.addChild(obj.name, obj);

            obj = new Static("st_11_result03","584","1014","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            this.addChild(obj.name, obj);

            obj = new Static("st_11_result04","584","1053","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            this.addChild(obj.name, obj);

            obj = new Static("st_10_result01","584","858","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","245","624","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("(array) ⇒ (new Array())");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","245","663","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("(array) ⇒ ([1,2,3])");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","519","633","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","519","672","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_7_result01","584","624","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Static("st_7_result02","584","663","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","245","1092","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("(boolean) ⇒ (true)");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","245","1131","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("(array) ⇒ ([1,2,3])");
            this.addChild(obj.name, obj);

            obj = new Static("st_11_result05","584","1092","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            this.addChild(obj.name, obj);

            obj = new Static("st_11_result06","584","1131","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","245","897","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("(regexp) ⇒ (/[a-z]/g)");
            this.addChild(obj.name, obj);

            obj = new Static("st_10_result02","584","897","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            this.addChild(obj.name, obj);

            obj = new Button("Button23","519","944","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button24","519","983","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button25","519","1022","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button26","519","1061","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button27","519","1100","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button28","519","1139","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button22","519","906","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","245","1170","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("(object) ⇒ ({a:\'1\', b:\'2\'})");
            this.addChild(obj.name, obj);

            obj = new Static("st_11_result07","584","1170","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            this.addChild(obj.name, obj);

            obj = new Button("Button29","519","1179","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","245","1599","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("(object) ⇒ (new Object())");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","245","1638","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("(object) ⇒ (a)\r\nvar a = new Object(); a.test = \"abc\";");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","245","1287","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("(string) ⇒ (\"\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","245","1326","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("(string) ⇒ (\"abc\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","245","1365","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("(array) ⇒ ([])");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","245","1404","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("(array) ⇒ ([1,2,3])");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","245","1521","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("(object) ⇒ ({})");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","245","1443","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("(array) ⇒ (new Array())");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","245","1560","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("(object) ⇒ ({a:\'1\', b:\'2\'})");
            this.addChild(obj.name, obj);

            obj = new Button("Button32","519","1296","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button33","519","1335","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button34","519","1374","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button35","519","1413","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result03","584","1287","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result04","584","1326","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            this.addChild(obj.name, obj);

            obj = new Button("Button36","519","1452","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result05","584","1365","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result06","584","1404","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result09","584","1521","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result10","584","1560","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result11","584","1599","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result12","584","1638","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result07","584","1443","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","245","1209","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("(undifined) ⇒ ()");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","245","1248","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("(null) ⇒ (null)");
            this.addChild(obj.name, obj);

            obj = new Button("Button30","519","1218","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button31","519","1257","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result01","584","1209","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result02","584","1248","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","245","1677","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("(boolean) ⇒ (true)");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","245","1716","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("(number) ⇒ (0)");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result13","584","1677","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result14","584","1716","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","245","1482","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("(array) ⇒ (new Array(3))");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result08","584","1482","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            this.addChild(obj.name, obj);

            obj = new Button("Button38","519","1529","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button39","519","1568","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button40","519","1607","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button41","519","1646","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button42","519","1685","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button43","519","1724","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button37","519","1491","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("실행");
            obj.set_wordWrap("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","245","1755","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("(date) ⇒ (new Date())");
            this.addChild(obj.name, obj);

            obj = new Static("st_12_result15","584","1755","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            this.addChild(obj.name, obj);

            obj = new Button("Button44","519","1764","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","245","1989","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("(expression, string, string) \r\n⇒ (2-1=1, \"True\", \"False\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","245","1872","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("(object) ⇒ (Dataset)");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","245","1911","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("(string) ⇒ (\" \")");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","245","1950","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("(string) ⇒ (\"\\\\t\")");
            this.addChild(obj.name, obj);

            obj = new Button("Button47","519","1881","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button48","519","1920","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button49","519","1959","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_13_result03","584","1872","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            this.addChild(obj.name, obj);

            obj = new Static("st_14_result01","584","1911","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            this.addChild(obj.name, obj);

            obj = new Static("st_14_result02","584","1950","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            this.addChild(obj.name, obj);

            obj = new Static("st_16_result01","584","1989","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","245","1794","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("(xpComp) ⇒ (Button)");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","245","1833","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("(object) ⇒ (new String)");
            this.addChild(obj.name, obj);

            obj = new Button("Button45","519","1803","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button46","519","1842","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_13_result01","584","1794","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            this.addChild(obj.name, obj);

            obj = new Static("st_13_result02","584","1833","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","245","2028","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("(expression, number, variable) \r\n⇒ (a > 100, 100, a)");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","245","2067","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_text("(string, string, string, ...) \r\n⇒ (\"1\", \"1\", \"One\", \"2\", \"Two\", \"Default\")");
            this.addChild(obj.name, obj);

            obj = new Static("st_16_result02","584","2028","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            this.addChild(obj.name, obj);

            obj = new Static("st_17_result01","584","2067","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            this.addChild(obj.name, obj);

            obj = new Button("Button56","519","1997","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button57","519","2036","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button58","519","2075","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","245","2106","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("(number, number, string, ...) \r\n⇒ (100, 1, \"일\", 10, \"십\", 100, \"백\")");
            this.addChild(obj.name, obj);

            obj = new Static("st_17_result02","584","2106","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            this.addChild(obj.name, obj);

            obj = new Button("Button59","519","2115","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","245","2223","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_text("(Form, string) ⇒ (this, \"Button\")");
            this.addChild(obj.name, obj);

            obj = new Static("Static80","245","2262","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("(Form, string) ⇒ (this, \"chk_\")");
            this.addChild(obj.name, obj);

            obj = new Button("Button62","519","2232","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button63","519","2271","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_19_result01","584","2223","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            this.addChild(obj.name, obj);

            obj = new Static("st_19_result02","584","2262","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","245","2145","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_text("(string) ⇒ ()");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","245","2184","340","40",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_text("(string) ⇒ (\"Button_\")");
            this.addChild(obj.name, obj);

            obj = new Button("Button60","519","2154","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Button("Button61","519","2193","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_18_result01","584","2145","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            this.addChild(obj.name, obj);

            obj = new Static("st_18_result02","584","2184","420","40",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","20","2301","980","76",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_text("19. gfnFormat");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","243","2316","260","40",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_text("(string, string, string, string) ⇒\r\n (\"I {0} a {1} {2}.\", \"am\", \"cool\", \"guy\")");
            this.addChild(obj.name, obj);

            obj = new Static("st_6_result00","590","2316","392","40",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            this.addChild(obj.name, obj);

            obj = new Static("st_6_result06","612","2385","372","132",null,null,null,null,null,null,this);
            obj.set_taborder("198");
            this.addChild(obj.name, obj);

            obj = new Button("Button50","520","2325","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_text("실행");
            this.addChild(obj.name, obj);

            obj = new Static("st_5_result03","592","2313","392","46",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,2180,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("base.xfdl","lib::lib_base.xjs");
        this.registerScript("base.xfdl", function() {
        this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;

        // 1.1 gfnIsString 사용 예제
        this.Button00_onclick = function (obj, e)
        {
        	var check = this.gfnIsString("test string!!!");
        	this.st_1_result01.set_text("(boolean) " + check);
        	trace(check);
        };

        // 1.2 gfnIsString 사용 예제
        this.Button01_onclick = function (obj, e)
        {
        	var check = this.gfnIsString(1234);
        	this.st_1_result02.set_text("(boolean) " + check);
        	trace(check);
        };

        // 2.1 gfnIsNumber 사용 예제
        this.Button02_onclick = function (obj, e)
        {
        	var check = this.gfnIsNumber(1234);
        	this.st_2_result01.set_text("(boolean) " + check);
        	trace(check);
        };

        // 2.2 gfnIsNumber 사용 예제
        this.Button03_onclick = function (obj, e)
        {
        	var check = this.gfnIsNumber("1234");
        	this.st_2_result02.set_text("(boolean) " + check);
        	trace(check);
        };

        // 3.1 isBoolean api 사용 예제
        this.Button04_onclick = function (obj, e)
        {
        	var check = this.gfnIsBoolean(true);
        	this.st_3_result01.set_text("(boolean) " + check);
        	trace(check);
        };

        // 3.2 gfnIsBoolean 사용 예제
        this.Button05_onclick = function (obj, e)
        {
        	var check = this.gfnIsBoolean("true");
        	this.st_3_result02.set_text("(boolean) " + check);
        	trace(check);
        };

        // 4.1 gfnIsNull 사용 예제
        this.Button06_onclick = function (obj, e)
        {
        	var check = this.gfnIsNull(null);
        	this.st_4_result01.set_text("(boolean) " + check);
        	trace(check);
        };

        // 4.2 gfnIsNull 사용 예제
        this.Button07_onclick = function (obj, e)
        {
        	var check = this.gfnIsNull("");
        	this.st_4_result02.set_text("(boolean) " + check);
        	trace(check);
        };

        // 5.1 gfnIsUndefined 사용 예제
        this.Button08_onclick = function (obj, e)
        {
        	var a;
        	var check = this.gfnIsUndefined(a);
        	this.st_5_result01.set_text("(boolean) " + check);
        	trace(check);
        };

        // 5.2 gfnIsUndefined 사용 예제
        this.Button09_onclick = function (obj, e)
        {
        	var a = "";
        	var check = this.gfnIsUndefined(a);
        	this.st_5_result02.set_text("(boolean) " + check);
        	trace(check);
        };

        // 6.1 gfnIsObject 사용 예제
        this.Button10_onclick = function (obj, e)
        {
        	var o = new Object();
        	var check = this.gfnIsObject(o);
        	this.st_6_result01.set_text("(boolean) " + check);
        	trace(o + " : " + check);
        };

        // 6.2 gfnIsObject 사용 예제
        this.Button11_onclick = function (obj, e)
        {
        	var o = {
        	};
        	var check = this.gfnIsObject(o);
        	this.st_6_result02.set_text("(boolean) " + check);
        	trace(o + " : " + check);
        };

        // 6.3 gfnIsObject 사용 예제
        this.Button12_onclick = function (obj, e)
        {
        	var o = [1, 2, 3];
        	var check = this.gfnIsObject(o);
        	this.st_6_result03.set_text("(boolean) " + check);
        	trace(o + " : " + check);
        };

        // 6.4 gfnIsObject 사용 예제
        this.Button13_onclick = function (obj, e)
        {
        	var o = new Button();
        	var check = this.gfnIsObject(o);
        	this.st_6_result04.set_text("(boolean) " + check);
        	trace(o + " : " + check);
        };

        // 6.5 gfnIsObject 사용 예제
        this.Button14_onclick = function (obj, e)
        {
        	var o = new Dataset();
        	var check = this.gfnIsObject(o);
        	this.st_6_result05.set_text("(boolean) " + check);
        	trace(o + " : " + check);
        };

        // 7.1 gfnIsArray 사용 예제
        this.Button15_onclick = function (obj, e)
        {
        	var a = new Array();
        	var check = this.gfnIsArray(a);
        	this.st_7_result01.set_text("(boolean) " + check);
        	trace(check);
        };

        // 1.2 gfnIsArray 사용 예제
        this.Button16_onclick = function (obj, e)
        {
        	var a = [1, 2, 3];
        	var check = this.gfnIsArray(a);
        	this.st_7_result02.set_text("(boolean) " + check);
        	trace(check);
        };

        // 8.1 gfnIsDate 사용 예제
        this.Button17_onclick = function (obj, e)
        {
        	var a = new Date();
        	var check = this.gfnIsDate(a);
        	this.st_8_result01.set_text("(boolean) " + check);
        	trace(check);
        };

        // 8.2 gfnIsDate 사용 예제
        this.Button18_onclick = function (obj, e)
        {
        	var a = "20140501";
        	var check = this.gfnIsDate(a);
        	this.st_8_result02.set_text("(boolean) " + check);
        	trace(check);
        };

        // 9.1 gfnIsFunction 사용 예제
        this.Button19_onclick = function (obj, e)
        {
        	var check = this.gfnIsFunction(this.isFunction);
        	this.st_9_result01.set_text("(boolean) " + check);
        	trace(check);
        };

        this.testFunction = function ()
        {
        };

        // 9.2 gfnIsFunction 사용 예제
        this.Button20_onclick = function (obj, e)
        {
        	var check = this.gfnIsFunction(this.testFunction);
        	this.st_9_result02.set_text("(boolean) " + check);
        	trace(check);
        };

        // 10.1 gfnIsRegExp 사용 예제
        this.Button21_onclick = function (obj, e)
        {
        	var a = new RegExp();
        	var check = this.gfnIsRegExp(a);
        	this.st_10_result01.set_text("(boolean) " + check);
        	trace(check);
        };

        // 10.1 gfnIsRegExp 사용 예제
        this.Button22_onclick = function (obj, e)
        {
        	var a = /[a-z]/g;
        	var check = this.gfnIsRegExp(a);
        	this.st_10_result02.set_text("(boolean) " + check);
        	trace(check);
        };

        // 11.1 gfnIsPrimitive 사용 예제
        this.Button23_onclick = function (obj, e)
        {
        	var a;
        	var check = this.gfnIsPrimitive(a);
        	this.st_11_result01.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 11.2 gfnIsPrimitive 사용 예제
        this.Button24_onclick = function (obj, e)
        {
        	var a = null;
        	var check = this.gfnIsPrimitive(a);
        	this.st_11_result02.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 11.3 gfnIsPrimitive 사용 예제
        this.Button25_onclick = function (obj, e)
        {
        	var a = "abc";
        	var check = this.gfnIsPrimitive(a);
        	this.st_11_result03.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 11.4 gfnIsPrimitive 사용 예제
        this.Button26_onclick = function (obj, e)
        {
        	var a = 123;
        	var check = this.gfnIsPrimitive(a);
        	this.st_11_result04.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 11.5 gfnIsPrimitive 사용 예제
        this.Button27_onclick = function (obj, e)
        {
        	var a = true;
        	var check = this.gfnIsPrimitive(a);
        	this.st_11_result05.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 11.6 gfnIsPrimitive 사용 예제
        this.Button28_onclick = function (obj, e)
        {
        	var a = [1, 2, 3];
        	var check = this.gfnIsPrimitive(a);
        	this.st_11_result06.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 11.7 gfnIsPrimitive 사용 예제
        this.Button29_onclick = function (obj, e)
        {
        	var a = {
        		a : '1',
        		b : '2'
        	};
        	var check = this.gfnIsPrimitive(a);
        	this.st_11_result07.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.1 gfnIsEmpty 사용 예제
        this.Button30_onclick = function (obj, e)
        {
        	var a;
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result01.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.2 gfnIsEmpty 사용 예제
        this.Button31_onclick = function (obj, e)
        {
        	var a = null;
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result02.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.3 gfnIsEmpty 사용 예제
        this.Button32_onclick = function (obj, e)
        {
        	var a = "";
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result03.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.4 gfnIsEmpty 사용 예제
        this.Button33_onclick = function (obj, e)
        {
        	var a = "abc";
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result04.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.5 gfnIsEmpty 사용 예제
        this.Button34_onclick = function (obj, e)
        {
        	var a = [];
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result05.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.6 gfnIsEmpty 사용 예제
        this.Button35_onclick = function (obj, e)
        {
        	var a = [1, 2, 3];
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result06.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.7 gfnIsEmpty 사용 예제
        this.Button36_onclick = function (obj, e)
        {
        	var a = new Array();
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result07.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.8 gfnIsEmpty 사용 예제
        this.Button37_onclick = function (obj, e)
        {
        	var a = new Array(3);
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result08.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.9 gfnIsEmpty 사용 예제
        this.Button38_onclick = function (obj, e)
        {
        	var a = {
        	};
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result09.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.10 gfnIsEmpty 사용 예제
        this.Button39_onclick = function (obj, e)
        {
        	var a = {
        		a : '1',
        		b : '2'
        	};
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result10.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.11 gfnIsEmpty 사용 예제
        this.Button40_onclick = function (obj, e)
        {
        	var a = new Object();
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result11.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.12 gfnIsEmpty 사용 예제
        this.Button41_onclick = function (obj, e)
        {
        	var a = new Object();
        	a.test = "abc";

        	var check = this.gfnIsEmpty(a);
        	this.st_12_result12.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.13 gfnIsEmpty 사용 예제
        this.Button42_onclick = function (obj, e)
        {
        	var a = true;
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result13.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.14 gfnIsEmpty 사용 예제
        this.Button43_onclick = function (obj, e)
        {
        	var a = 0;
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result14.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 12.15 gfnIsEmpty 사용 예제
        this.Button44_onclick = function (obj, e)
        {
        	var a = new Date();
        	var check = this.gfnIsEmpty(a);
        	this.st_12_result15.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 13.1 gfnIsXComponent 사용 예제
        this.Button45_onclick = function (obj, e)
        {
        	var a = new Button();
        	var check = this.gfnIsXComponent(a);
        	this.st_13_result01.set_text("(boolean) " + check);
        	trace(a + " : " + check);

        	a.destroy();
        };

        // 13.2 gfnIsXComponent 사용 예제
        this.Button46_onclick = function (obj, e)
        {
        	var a = new String();
        	var check = this.gfnIsXComponent(a);
        	this.st_13_result02.set_text("(boolean) " + check);
        	trace(a + " : " + check);

        	a = null;
        };

        // 13.3 gfnIsXComponent 사용 예제
        this.Button47_onclick = function (obj, e)
        {
        	var a = new Dataset();
        	var check = this.gfnIsXComponent(a);
        	this.st_13_result03.set_text("(boolean) " + check);
        	trace(a + " : " + check);

        	a = null;
        };

        // 14.1 gfnIsSpace 사용 예제
        this.Button48_onclick = function (obj, e)
        {
        	var a = " ";
        	var check = this.gfnIsSpace(a);
        	this.st_14_result01.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };

        // 14.2 gfnIsSpace 사용 예제
        this.Button49_onclick = function (obj, e)
        {
        	var a = "\t";
        	var check = this.gfnIsSpace(a);
        	this.st_14_result02.set_text("(boolean) " + check);
        	trace(a + " : " + check);
        };



        // 15.1 gfnIif 사용 예제
        this.Button56_onclick = function (obj, e)
        {
        	var a = this.gfnIif(2 - 1 == 1, "True", "False");

        	this.st_16_result01.set_text("(string) " + a);

        	trace(a);
        };

        // 15.2 gfnIif 사용 예제
        this.Button57_onclick = function (obj, e)
        {
        	var a = 98;
        	var b = this.gfnIif(a > 100, 100, a);

        	this.st_16_result02.set_text("(number) " + b);

        	trace(b);
        };

        // 16.1 gfnDecode 사용 예제
        this.Button58_onclick = function (obj, e)
        {
        	var a = this.gfnDecode("1", "1", "One", "2", "Two", "Default");

        	this.st_17_result01.set_text("(string) " + a);

        	trace(a);
        };

        // 16.2 gfnDecode 사용 예제
        this.Button59_onclick = function (obj, e)
        {
        	var a = this.gfnDecode(100, 1, "일", 10, "십", 100, "백");

        	this.st_17_result02.set_text("(string) " + a);

        	trace(a);
        };

        // 17.1 gfnGetUniqueId api 사용 예제
        this.Button60_onclick = function (obj, e)
        {
        	var id = this.gfnGetUniqueId();
        	this.st_18_result01.set_text("(string) " + id);
        	trace(id);
        };

        // 17.2 gfnGetUniqueId api 사용 예제
        this.Button61_onclick = function (obj, e)
        {
        	var id = this.gfnGetUniqueId("Button_");
        	this.st_18_result02.set_text("(string) " + id);
        	trace(id);
        };

        // 18.1 gfnGetSequenceId api 사용 예제
        this.Button62_onclick = function (obj, e)
        {
        	var id = this.gfnGetSequenceId(this, "Button");
        	this.st_19_result01.set_text("(string) " + id);
        	trace(id);
        };

        // 18.2 getSequenceId api 사용 예제
        this.Button63_onclick = function (obj, e)
        {
        	var id = this.gfnGetSequenceId(this, "chk_");
        	this.st_19_result02.set_text("(string) " + id);
        	trace(id);
        };


        // 19.1 gfnFormat api 사용 예제
        this.Button50_onclick = function(obj,e)
        {
        	var str = "I {0} a {1} {2}.";
        	var result = this.gfnFormat(str, "am", "cool", "guy");
        	this.st_5_result03.set_text("(string) " + result);
        	trace(result);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button08.addEventHandler("onclick",this.Button08_onclick,this);
            this.Button09.addEventHandler("onclick",this.Button09_onclick,this);
            this.Button10.addEventHandler("onclick",this.Button10_onclick,this);
            this.Button11.addEventHandler("onclick",this.Button11_onclick,this);
            this.Button12.addEventHandler("onclick",this.Button12_onclick,this);
            this.Button13.addEventHandler("onclick",this.Button13_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button07_onclick,this);
            this.Button14.addEventHandler("onclick",this.Button14_onclick,this);
            this.Button17.addEventHandler("onclick",this.Button17_onclick,this);
            this.Button18.addEventHandler("onclick",this.Button18_onclick,this);
            this.Button19.addEventHandler("onclick",this.Button19_onclick,this);
            this.Button20.addEventHandler("onclick",this.Button20_onclick,this);
            this.Button21.addEventHandler("onclick",this.Button21_onclick,this);
            this.Button15.addEventHandler("onclick",this.Button15_onclick,this);
            this.Button16.addEventHandler("onclick",this.Button16_onclick,this);
            this.Button23.addEventHandler("onclick",this.Button23_onclick,this);
            this.Button24.addEventHandler("onclick",this.Button24_onclick,this);
            this.Button25.addEventHandler("onclick",this.Button25_onclick,this);
            this.Button26.addEventHandler("onclick",this.Button26_onclick,this);
            this.Button27.addEventHandler("onclick",this.Button27_onclick,this);
            this.Button28.addEventHandler("onclick",this.Button28_onclick,this);
            this.Button22.addEventHandler("onclick",this.Button22_onclick,this);
            this.Button29.addEventHandler("onclick",this.Button29_onclick,this);
            this.Button32.addEventHandler("onclick",this.Button32_onclick,this);
            this.Button33.addEventHandler("onclick",this.Button33_onclick,this);
            this.Button34.addEventHandler("onclick",this.Button34_onclick,this);
            this.Button35.addEventHandler("onclick",this.Button35_onclick,this);
            this.Button36.addEventHandler("onclick",this.Button36_onclick,this);
            this.Button30.addEventHandler("onclick",this.Button30_onclick,this);
            this.Button31.addEventHandler("onclick",this.Button31_onclick,this);
            this.Button38.addEventHandler("onclick",this.Button38_onclick,this);
            this.Button39.addEventHandler("onclick",this.Button39_onclick,this);
            this.Button40.addEventHandler("onclick",this.Button40_onclick,this);
            this.Button41.addEventHandler("onclick",this.Button41_onclick,this);
            this.Button42.addEventHandler("onclick",this.Button42_onclick,this);
            this.Button43.addEventHandler("onclick",this.Button43_onclick,this);
            this.Button37.addEventHandler("onclick",this.Button37_onclick,this);
            this.Button44.addEventHandler("onclick",this.Button44_onclick,this);
            this.Button47.addEventHandler("onclick",this.Button47_onclick,this);
            this.Button48.addEventHandler("onclick",this.Button48_onclick,this);
            this.Button49.addEventHandler("onclick",this.Button49_onclick,this);
            this.Button45.addEventHandler("onclick",this.Button45_onclick,this);
            this.Button46.addEventHandler("onclick",this.Button46_onclick,this);
            this.Button56.addEventHandler("onclick",this.Button56_onclick,this);
            this.Button57.addEventHandler("onclick",this.Button57_onclick,this);
            this.Button58.addEventHandler("onclick",this.Button58_onclick,this);
            this.Button59.addEventHandler("onclick",this.Button59_onclick,this);
            this.Button62.addEventHandler("onclick",this.Button62_onclick,this);
            this.Button63.addEventHandler("onclick",this.Button63_onclick,this);
            this.Button60.addEventHandler("onclick",this.Button60_onclick,this);
            this.Button61.addEventHandler("onclick",this.Button61_onclick,this);
            this.Button50.addEventHandler("onclick",this.Button50_onclick,this);
        };
        this.loadIncludeScript("base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
