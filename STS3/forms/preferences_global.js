



/**
 * @properties={typeid:35,uuid:"EF13FBFA-C4EA-42C2-8625-09C5121337D9",variableType:-4}
* @type abcPrinterList {Array} Array containing units of measure
 */
var abcPrinterList = new Array;
abcPrinterList.push("Allegro");
abcPrinterList.push("DataMax");
abcPrinterList.push("LabeLase 1000");
abcPrinterList.push("Pinnacle");
abcPrinterList.push("Prodigy Plus");
abcPrinterList.push("TEC B-400");
abcPrinterList.push("Zebra");

/**
 * @properties={typeid:35,uuid:"8587CE77-93D0-4A12-AAE1-E3AB85CB6CE9",variableType:-4}
 * @type aLabelType {Array} aLabelType Array containing units of measure
*/
var aLabelType = new Array;
aLabelType.push("Raw Matl");
aLabelType.push("Serial #");
aLabelType.push("Serial01");
aLabelType.push("Standard");

/**
 * @properties={typeid:35,uuid:"EAE37CDD-26F7-4CF8-9312-55774F700588",variableType:-4}
 * @type lanUsers {Array} lanUsers Array containing units of measure
 */
var lanUsers = new Array;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"893F0151-5ADB-4357-8D78-30D771DC4C56"}
 */
var shipTranCode = "FABSH";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3310B039-1166-4776-937D-28F214B4690A"}
 */
var recvTranCode = "FABRC";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8DA04489-BEF3-4371-A499-914DD92A7CFA"}
 */
var dlApp = "LDTDNLD.APP";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DC0EB6A1-A7E2-4968-B2AB-8D9CB1177FD7"}
 */
var portApp = "LDTPROG.APP";
/**
 * @properties={typeid:35,uuid:"BC17DE04-6401-4487-891E-16A966535D66",variableType:-4}
 */
var rfPort = false;
/**
 * @properties={typeid:35,uuid:"DB055334-17E1-4813-BEB4-2A26B34E1706",variableType:-4}
 */
var lRfNetLoadWt =false;
/**
 * @properties={typeid:35,uuid:"8FF9F181-932E-48F2-A39B-68412BDAF2EB",variableType:-4}
 */
var lbPort = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"14319FF4-2F5A-42C1-B02B-F26BE3033739"}
 */
var rfUlApp = "RFSYM38X.APP";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7EBE09A8-529F-476A-82D2-93845B301C06"}
 */
var rfDlApp = "RFSYM38X.APP";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A6C7752A-CF6C-4BC7-BE69-F5315BF1CF20"}
 */
var rfPortApp = "RFSYM38X.APP";
/**
 * @properties={typeid:35,uuid:"02A9BE96-BD53-4D80-9A2A-C519712F05B4",variableType:-4}
 */
var enableDebug = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"61EC124C-30DD-49CF-BFF1-C976A720E557"}
 */
var rfShipStatus = "WELD";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"79F392DB-7703-4476-A9AA-24778D4931A7"}
 */
var defaultRfPrinter = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FD4A4AEA-73B9-46A9-A0DB-0577E60523C3"}
 */
var aRfShipStatus = "";
/**
 * @properties={typeid:35,uuid:"2DC4D608-C379-4099-B42B-9CC837C0BCE8",variableType:-4}
 */
var lMainMenuLoad = false;
/**
 * @properties={typeid:35,uuid:"080581AB-BC87-442A-BBB0-E827F50CEAFE",variableType:-4}
 */
var lRecvLoaded = false;
/**
 * @properties={typeid:35,uuid:"69A508E8-0FC6-4313-95A5-D072D4399416",variableType:-4}
 */
var lShipLoaded = false;
/**
 * @properties={typeid:35,uuid:"2A0B0AFE-30C6-4790-B6B7-9212744DFDE8",variableType:-4}
 */
var lMoveLoaded = false;
/**
 * @properties={typeid:35,uuid:"23FBDC17-2DEE-4152-97F8-DC634E153672",variableType:-4}
 */
var lStatLoaded = false;
/**
 * @properties={typeid:35,uuid:"38096C6A-90D3-4B8E-A077-68EEBB5B3AAE",variableType:-4}
 */
var stspath = false;

//RF Settings preferences -----------------------------------------------------------------


/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3719393-AA8C-4A20-A8B2-DDC84D633A2E"}
 */
var rfPortableType = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D315BE9B-3282-4141-ACA2-027764CFC60E"}
 */
var yourFcCallSign = "TEST CALL SIGN";
/**
 * @properties={typeid:35,uuid:"A3330E84-6C48-45F5-990C-E20C37502EF6",variableType:-4}
 */
var lShowRs = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"795802EE-4E88-4563-97C5-69F564286F0F",variableType:8}
 */
var xmitDelay = 0.010000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1A8C6092-099A-4B58-A8A4-DC2D605F2330",variableType:8}
 */
var powerUpDelay = 20.000000;
/**
 * @properties={typeid:35,uuid:"701C9677-1FDF-40BC-9609-6F69CC615393",variableType:-4}
 */
var lForceReload = true;
/**
 * @properties={typeid:35,uuid:"56490300-AF19-4B81-9247-22FCFECBBC9A",variableType:-4}
 */
var lUseSeq = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0C091770-F95A-40A6-88DC-50AC962D0D1E",variableType:-4}
 */
var printIdQty = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"839CF1D3-A844-437F-A936-468D68A4E0EC",variableType:-4}
 */
var rfRefresh = false;
/**
 * @properties={typeid:35,uuid:"DAD96B44-9408-46CC-BCDB-23DC914986BB",variableType:-4}
 */
var rfStamperConnected = false;
/**
 * @properties={typeid:35,uuid:"BF4A0BC8-C5F9-46E8-8AF7-0A82F0F85322",variableType:-4}
 */
var reqdShipStatusCode = true;

/**
 * @properties={typeid:35,uuid:"3CD3CC7E-5CFF-4741-8039-B3B4A0D18716",variableType:-4}
 */
var lSaveRfTrans = true;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0B50AB0D-C576-4C01-9F99-CFFCC0FCF20F",variableType:8}
 */
var welderGroupQty = 0.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BA641444-9C03-4FDA-AB97-F36AAC385D1F",variableType:8}
 */
var welderGroupRange = 0.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"48F62126-5080-4814-8ECE-BAC7D9BB6F39",variableType:8}
 */
var rfPromptDuration = 0.000000;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1F8231C8-FC45-438A-BCE6-560E6E6F5AA5"}
 */
var rfLoadWt = "";
/**
 * @properties={typeid:35,uuid:"B9FD6921-DF52-48EF-AA4B-CF1458FE5FD9",variableType:-4}
 */
var chngRecvLoad = true;
/**
 * @properties={typeid:35,uuid:"A6F26379-ED77-4507-8C8C-117E3DCA7FA4",variableType:-4}
 */
var chngShipLoad = true;
/**
 * @properties={typeid:35,uuid:"2F36151A-22B5-43F2-B4EF-FFD7C0264422",variableType:-4}
 */
var lNewRecvId = false;
/**
 * @properties={typeid:35,uuid:"D5E9FA7E-5D10-4720-BEEB-D19E4874807C",variableType:-4}
 */
var autoCreateLoad = true;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9804B5CD-59D6-4619-9C6D-55601AAC8070"}
 */
var rfPlRpType = "Summary Report";
/**
 * @properties={typeid:35,uuid:"38F3DAC9-B028-4574-A982-486E9F2D17F6",variableType:-4}
 */
var rfDuplStatusScans = false;
/**
 * @properties={typeid:35,uuid:"8D444690-59A8-4469-B6FC-B229BAB86274",variableType:-4}
 */
var lAllowInterimShipments = false;
/**
 * @properties={typeid:35,uuid:"C51A7D1A-B782-426E-9F12-524123BADCEF",variableType:-4}
 */
var globalF8Off = false;
/**
 * @properties={typeid:35,uuid:"5B9524AF-62A2-4E69-90ED-46AFC72B605D",variableType:-4}
 */
var shipF8Off = true;
/**
 * @properties={typeid:35,uuid:"20A17489-EAE6-4FB4-9426-C290EF93A85D",variableType:-4}
 */
var lAddLocationWtPcs = false;

//Sounds preferences -----------------------------------------------------------------

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"57A9C5B8-9BC2-4848-99A0-2B87FADF3112"}
 */
var stsStart = "C:\WINDOWS\THE MICROSOFT SOUND.WAV";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F4BA8260-6F64-493A-AE4B-107614A5BE49"}
 */
var stsExit = "C:\WINDOWS\CHIMES.WAV";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"11D886D5-6B41-4B76-A794-DDFE1DF10AE7"}
 */
var stsBell = "C:\WINDOWS\DING.WAV";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B19ED9B8-1BA8-4927-A144-83B13BD34287"}
 */
var stsInfo = "C:\WINDOWS\TADA.WAV";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D7CB2364-50A8-44E7-8D7C-72E686722C23"}
 */
var stsStop = "C:\WINDOWS\CHORD.WAV";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F09B7BE9-9FFE-4826-B851-01C0E738CE37"}
 */
var stsQues = "C:\WINDOWS\CHORD.WAV";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8E01B8E5-29C0-4DBF-B2A1-273727BB2B55"}
 */
var stsAster = "C:\WINDOWS\CHORD.WAV";

//Misc Info Settings preferences -----------------------------------------------------------------

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"228A2C74-4196-432E-AF98-C42DFC5EB557",variableType:8}
 */
var maxwt = 42000.000000;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B841A433-CC9D-4B4B-B6B6-8263E8256C2C"}
 */
var markZip = "MARKUNIQ";
/**
 * @properties={typeid:35,uuid:"18464B0F-E917-4470-B345-AD2E57B51D0E",variableType:-4}
 */
var lMuJobName = true;
/**
 * @properties={typeid:35,uuid:"F3164517-0032-4A72-A312-3E0BFF520DB3",variableType:-4}
 */
var lRecJobName = true;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C6019523-2915-4067-98EF-B0826F430632",variableType:8}
 */
var paralPort = 1.000000;
/**
 * @properties={typeid:35,uuid:"AF111640-E4A4-4EA6-A6A0-A8F25FFD1A3B",variableType:-4}
 */
var lCowCustSpc = true;
/**
 * @properties={typeid:35,uuid:"7C5253A2-A665-4DB2-97D3-228D80EAC2B7",variableType:-4}
 */
var lCowPosPC = true;
/**
 * @properties={typeid:35,uuid:"FC788F6D-F6F5-47D3-AEE9-43C8765E8C70",variableType:-4}
 */
var lFabShip = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"25546FC2-8845-4102-8A6E-F8971E4BC62F",variableType:8}
 */
var wtPrompt = 0.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B595138D-C857-425F-8B75-5D79449F6B39",variableType:8}
 */
var qtyPrompt = 9.000000;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A9682ED5-B331-455B-91AD-B946FAEC754F"}
 */
var recvrZip = "RECEIVER";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"077F5BC3-558E-425A-AF26-BD5FFC34806A",variableType:8}
 */
var paintDelay = 0.000000;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"14FE2873-7ECE-4116-A677-B3AB2D259615"}
 */
var dflRouteCode = "NORMAL";
/**
 * @properties={typeid:35,uuid:"C4727821-F7C2-46A3-9DD6-7354434FFF6A",variableType:-4}
 */
var validStatusCodes = true;
/**
 * @properties={typeid:35,uuid:"74419785-D23B-4524-AB99-1D62D1BBCD67",variableType:-4}
 */
var lKeepMinorPcMarks = true;
/**
 * @properties={typeid:35,uuid:"A465D2FA-32C0-44CF-8328-E0000BACB3C1",variableType:-4}
 */
var lOnlyOneCustPerJob = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C74E2575-1DF1-498E-A151-2DBCDC765700"}
 */
var madeIn = "Made in USA";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8F7761A4-D78A-4C0E-A87E-57E53251332B"}
 */
var stsInstalled = "Fabricator";
/**
 * @properties={typeid:35,uuid:"E3642D3F-4D61-49B1-81B7-A7210779DF5D",variableType:-4}
 */
var smallMadeInFont = true;

//PO Info preferences -----------------------------------------------------------------

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3B1EB578-2D37-434C-A9BA-A6A2A914EF0D"}
 */
var poSetting = "Use the Job P.O. Number";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A91320B-AD2F-4F7F-939F-2F1B593DAF35"}
 */
var relSetting = "Use the Load Release #";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"119371A6-CEF2-4440-A117-7F4521257115"}
 */
var poCostSetting = "Use the Job P.O. Number";


//Display Settings preferences -----------------------------------------------------------------

/**
 * @properties={typeid:35,uuid:"F5F736D4-27D1-4C6E-AF0D-E0AA386A951E",variableType:-4}
 */
var lLogoDisplay = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FCEAED07-F6CF-4187-86CD-7C3306872008"}
 */
var bmpFile = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3B150F4D-E359-4CA4-8609-008AF07F51D6"}
 */
var iconFile = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CD3A7B83-4DE9-4B9A-8F6F-1036BEEF2EB8"}
 */
var winTitle = "";

//Hardware Settings preferences -----------------------------------------------------------------

/**
 * @properties={typeid:35,uuid:"E5A798F7-22A4-4AD9-9283-11D2BFCAA890",variableType:-4}
 */
var lTranTrak = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1953C899-F570-438D-A4AE-A6B45222162B"}
 */
var dflIdFmt = "FORMAT 2";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"45352643-7D77-439A-967B-D3AA2B19315F"}
 */
var idBLine1 = "Bar Code Form #";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3BB720FF-58C5-483A-8D94-94409D2A8402"}
 */
var idBLine2 = "Customer Number";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"19B26512-C9DE-43C4-8467-6A9083F0F1E8"}
 */
var idLblTxt1 = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E9B33A52-52A5-479F-9ED3-49697EA01F74"}
 */
var idLblTxt2 = "";
/**
 * @properties={typeid:35,uuid:"D3632667-F098-41C4-A849-2F7F771AD93A",variableType:-4}
 */
var lRecvLoad = true;
/**
 * @properties={typeid:35,uuid:"6E6CC894-E62A-4F9A-B0B7-97CC3714007E",variableType:-4}
 */
var lShipLoad = true;
/**
 * @properties={typeid:35,uuid:"DBA9D57E-D5E9-4B1B-88CA-86876BD075D4",variableType:-4}
 */
var lLoadCopy = true;
/**
 * @properties={typeid:35,uuid:"896BB7AF-96A7-4413-A6D9-511AF6171979",variableType:-4}
 */
var ignoreBatchJobLoadQty = true;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8990867E-B020-4179-B86F-79B74A299B46"}
 */
var portableType = "Symbol 38xx - Status Job";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EE15D7F6-44BE-4DF9-A34B-05249C3FC46A"}
 */
var mcLinkPath = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1B3913B0-6E1E-4FB2-A98D-CBE9A942D2DF"}
 */
var loadCreate = "Job Number Specific";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"45C375CA-0C0B-4B31-9428-1ADA5637021E"}
 */
var startLoadNum = "0";

//Data Path Settings preferences -----------------------------------------------------------------

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"22957E37-9D18-48DF-A48E-A962508CE1F5"}
 */
var localpath = "C:\STSSOURCE\DATA";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7B12A37A-0F27-42EC-B04F-90CAD980B8FE"}
 */
var datapath = "C:\STSSOURCE\DATA";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"511BC3AF-E77E-4F9E-A55A-78A49BE7DC9A"}
 */
var temppath = "C:\STSSOURCE\TEMP";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3BADACA9-0F8B-4390-B5A7-C091D9B0B875"}
 */
var importpath = "C:\STSSOURCE\IMPORT";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E4F91DC6-ABA7-4C40-9FFE-5CECCB5C4EE2"}
 */
var foxfirepath = "C:\STSSOURCE\FOXFIRE";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B03FDC04-1190-4570-8D14-B2B4F1E36506"}
 */
var reportpath = "C:\STSSOURCE\REPORTS";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2CC2F55B-E4FF-4835-A9A5-9B510C7C9D28"}
 */
var xportpath = "I:\LBA\STS_MARKOFF";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9E858FE3-0ED3-4F68-B899-2D8EA35F6179"}
 */
var localFiles = "#";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82D083C0-958A-4EFE-8C30-F4D82841F009"}
 */
var mtrpath ="";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E52E95F-AA21-4F97-9D7E-28370173DB5B"}
 */
var wh32datapath = "";

//Material Type Settings preferences -----------------------------------------------------------------

/**
 * @properties={typeid:35,uuid:"CB5B039A-7B5C-4D16-9228-D695A69B1252",variableType:-4}
 */
var lPcMarkEntryValidate = false;
/**
 * @properties={typeid:35,uuid:"8A49E93A-FA55-4514-BCCE-B04D46869730",variableType:-4}
 */
var lPartMasterModule = false;
/**
 * @properties={typeid:35,uuid:"5BFA66E2-532C-4B71-A0DA-8DDD7925B4F5",variableType:-4}
 */
var partNumLength = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A9D891A0-664E-4563-BF0A-680196EB36CA"}
 */
var pnPadCharacter = "";
/**
 * @properties={typeid:35,uuid:"E1B03581-3A31-4B7E-A680-6A1B4799C9B4",variableType:-4}
 */
var lAutoPartNum = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CA06665D-32A5-47A4-93D0-D3E9307372C1"}
 */
var validatePartNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"628408B5-46FD-4525-99D2-4A8C3FA3B578"}
 */
var eachWtUom = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"74411955-46C6-4943-AACC-A9AE827D7BFA",variableType:8}
 */
var maxDropLength = 0.000000;
/**
 * @properties={typeid:35,uuid:"0C7683C6-82FF-46AB-B657-332DA5CC279E",variableType:-4}
 */

//RF Screen Settings preferences -----------------------------------------------------------------


//FabTrol preferences -----------------------------------------------------------------

/**
 * @properties={typeid:35,uuid:"750720F3-E822-478F-88C1-6C24B1B21FF9",variableType:-4}
 */
var lFabtrolInstalled = true;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"41C8CD6C-19AA-46B2-AADF-CC824AB49A95"}
 */
var fabtrolRootPath = "C:\FABTROLMRP\\";
/**
 * @properties={typeid:35,uuid:"02124DDB-97A7-4B6E-A4C4-C7A1940F1AAD",variableType:-4}
 */
var lFabtrolShip = true;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A924676D-B9C2-4610-976F-FC8209A45FAA"}
 */
var ftMatchType = "LOAD";
/**
 * @properties={typeid:35,uuid:"81EAB07D-CBA8-4848-9B6E-E98DA869AD2F",variableType:-4}
 */
var lFabtrolSeqTesting = false;
/**
 * @properties={typeid:35,uuid:"68F1D08F-A623-4B0F-B3F3-430469E49D04",variableType:-4}
 */
var lFabtrolSqlVersion = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"092ABB02-C6A8-461D-8D0D-DCA5FBDB8996"}
 */
var fabtrolServerName = "BSCFAB";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1AAA6F50-E574-4167-9FA3-204BBF06F9DE"}
 */
var fabtrolDatabase = "FABTROLMRP";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3388531B-42E3-4ED2-B60E-C850F5856012"}
 */
var fabtrolUserid = "FTAPP";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EA85C89A-C2FE-44B0-B779-F90BEB5422B2"}
 */
var fabtrolPassword = "FT-SQL-DB";
/**
 * @properties={typeid:35,uuid:"6EBBE16F-E80E-4964-855D-528E6EE5E75D",variableType:-4}
 */
var lFabtrolMrp = true;
/**
 * @properties={typeid:35,uuid:"43785112-6CDA-4619-9779-240E37359C5F",variableType:-4}
 */
var lFabtrolImportOnly = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3A7D21D-11CA-4036-B58B-45B7644888E4"}
 */
var fabtrolAdcPath = "LOAD";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D30DDB77-8EC1-4613-B82F-B13B03DA8FCD"}
 */
var ftFabtrolOdbc = "FTMRP38FABTROL";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"50F4AB55-D6D1-453E-8AEB-62B98A616BA4"}
 */
var ftProjectOdbc = "FTMRP38PROJECTS";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"116B0BBB-A95B-4784-A3CC-DF2F8E539FB3"}
 */
var ftSystemOdbc = "FTMRP38SYSTEM";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6DECE61B-F7D0-4B4A-8DDD-59BD4A828F92"}
 */
var ftUnitOdbc = "FTMRP38UNIT";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D0EF2C69-B09B-4989-8415-9A4297FCB3C6"}
 */
var ftSimpleJobs = "OLD";
/**
 * @properties={typeid:35,uuid:"E6203B9B-37CC-4EDC-8D63-2FB04567ACC6",variableType:-4}
 */
var ftDoNotMuliplyMinors = true;
/**
 * @properties={typeid:35,uuid:"0AC3E727-925C-4F19-B6E5-5963643F88F4",variableType:-4}
 */
var ftVer2x = false;
/**
 * @properties={typeid:35,uuid:"22D18A08-E3DB-45DD-A95C-167500B54018",variableType:-4}
 */

//FabSuite preferences -----------------------------------------------------------------

/**
 * @properties={typeid:35,uuid:"EE1EE8BE-1C20-4164-915C-2DADC04058A4",variableType:-4}
 */
var lFabsuiteInstalled = false;
/**
 * @properties={typeid:35,uuid:"B209B61F-F7DE-4F5A-969C-DB7176D44E37",variableType:-4}
 */
var lFabsuiteSqlVersion = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E29E8A4B-21A8-4796-974C-5F61C4FFFF77"}
 */
var fabsuiteRootPath = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F18B8625-B894-4D2C-8AF4-AD56EC5FFF03"}
 */
var fabsuiteServerName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AE4DC2B3-E893-4021-A36C-5F1E36C3BAAA"}
 */
var fabsuiteDatabase = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31068863-7159-4FCA-9E74-A4BAE041CD20"}
 */
var fabsuiteUserid = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"74D0B875-72D1-41E0-80F9-04EA4979640A"}
 */
var fabsuitepassword = "";
/**
 * @properties={typeid:35,uuid:"7F9D10C7-F66C-4347-8628-108C6B487376",variableType:-4}
 */
var lFabsuiteImportOnly = false;
/**
 * @properties={typeid:35,uuid:"A47C8F52-E881-43F1-8F7E-2619608111D1",variableType:-4}
 */
var lFabsuitePassWorker = false;
/**
 * @properties={typeid:35,uuid:"0D1A8040-6532-4F5A-BD28-B291A462F6F7",variableType:-4}
 */
var lFsAllowNonSerial = false;
/**
 * @properties={typeid:35,uuid:"C9F28FF8-8049-465D-87B0-D1797465B0D1",variableType:-4}
 */
var lFsLocnBatch = false;
/**
 * @properties={typeid:35,uuid:"EC7EBB55-643E-4D9A-9668-A7C2BBB6B4BD",variableType:-4}
 */

// Romac preferences -----------------------------------------------------------------
/**
 * @properties={typeid:35,uuid:"493F3E37-DDAE-41A7-8EB4-60C1F39266D3",variableType:-4}
 */
var lRomacInstalled = false;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DE68E54C-9DBE-45C0-A0D4-9A7544EECB58"}
 */
var romacRootPath = "";
/**
 * @properties={typeid:35,uuid:"431DA4E7-8504-4E1F-9D80-4B302C5E15AF",variableType:-4}
 */
var lRomacImportOnly = false;
/**
 * @properties={typeid:35,uuid:"9623949D-2F45-4D2B-95E9-278DECA8473B",variableType:-4}
 */
var lRomacPassWorker = false;
/**
 * @properties={typeid:35,uuid:"67618A1C-68DA-49F7-BCB3-8DBBF10D2B3D",variableType:-4}
 */
var foundPassword = false;

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param {Object} updateValue dataprovider that needs the update
 *
 * @properties={typeid:24,uuid:"37BF4310-4DD9-4A54-841B-48E2F18DBF5E"}
 */
function onActionFileOpenDialog(event,updateValue) {
	var dirs = plugins.file.showFileOpenDialog(2, "\\", false, null);
	var path = dirs.getAbsolutePath();
	var formName = event.getFormName();
	forms[formName][updateValue] = path;
}









