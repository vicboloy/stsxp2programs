/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2C31DDBD-155A-4F94-8BA1-9B8A6C5066D5",variableType:4}
 */
var barcodeLength = 10;
/**
 * @type {Number}
 * Default table column width
 * @properties={typeid:35,uuid:"FBDB080B-6D19-4E26-9EA7-D73608837283",variableType:4}
 */
var defaultColumnWidth = 110;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"4D627D50-A40E-414C-947C-7DFA22358B95"}
 */
var shipTranCode = "FABSH";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"6FD7A509-37B9-41FA-8341-22314511F337"}
 */
var recvTranCode = "FABRC";

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"1EC2FDEF-4E8E-4A20-8E63-1C3EBD32BB19"}
 */
var dlApp = "LDTDNLD.APP";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"1723A7E7-D477-4B7A-8382-342D864E2EC3"}
 */
var portApp = "LDTPROG.APP";
/**
 *
 * @properties={typeid:35,uuid:"AFE06346-EA0B-4EC2-8DCD-B75521B6C11C",variableType:-4}
 */
var rfPort = false;
/**
 *
 * @properties={typeid:35,uuid:"8F8B91B2-E2C8-4111-BFF0-C753F4C81E9D",variableType:-4}
 */
var lRfNetLoadWt =false;
/**
 *
 * @properties={typeid:35,uuid:"C36564B8-1B39-411E-B970-DCF44E60DB70",variableType:-4}
 */
var lbPort = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"E4AB8840-5532-48EC-821D-0AD92DA3E28D"}
 */
var rfUlApp = "RFSYM38X.APP";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"0AB3E37A-A1A9-43D1-B12A-E3F7DBDBCF23"}
 */
var rfDlApp = "RFSYM38X.APP";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"D32DE4FC-C2BA-4BF2-9095-95553425A44C"}
 */
var rfPortApp = "RFSYM38X.APP";
/**
 *
 * @properties={typeid:35,uuid:"5A81A1ED-F422-4CCA-B5F5-2526815BE0A2",variableType:-4}
 */
var enableDebug = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"995E95AB-A9FA-476A-B0D5-044695360D09"}
 */
var rfShipStatus = "WELD";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"378F3A67-9C88-413C-B808-C9CD95A30A4A"}
 */
var defaultRfPrinter = i18n.getI18NMessage('sts.empty.entry');
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"B59D795D-8345-4D41-89E8-E41EC0670E21"}
 */
var aRfShipStatus = "";
/**
 *
 * @properties={typeid:35,uuid:"B7BDFCC7-BD56-4D2B-8C69-B0232F56269D",variableType:-4}
 */
var lMainMenuLoad = false;
/**
 *
 * @properties={typeid:35,uuid:"B29C9273-F85A-4C94-8D96-94DD5D85C5DA",variableType:-4}
 */
var lRecvLoaded = false;
/**
 *
 * @properties={typeid:35,uuid:"DECE6CD3-C865-448D-8DAD-6AC2D611E0E4",variableType:-4}
 */
var lShipLoaded = false;
/**
 *
 * @properties={typeid:35,uuid:"2D74D7A6-B460-4779-8C92-4A886F9135EF",variableType:-4}
 */
var lMoveLoaded = false;
/**
 *
 * @properties={typeid:35,uuid:"CCC2579F-EECB-47E1-8B8E-26D8C27CD371",variableType:-4}
 */
var lStatLoaded = false;
/**
 *
 * @properties={typeid:35,uuid:"1CB71E6F-AC5D-44B9-A609-81EF638ADE5F",variableType:-4}
 */
var stspath = false;

//RF Settings preferences -----------------------------------------------------------------


/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"7D2C28FD-155F-4BAD-B4AB-7891EE9BCDBA"}
 */
var rfPortableType = "";

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"36925B21-B824-4B36-88FD-890763D14B19"}
 */
var yourFcCallSign = "TEST CALL SIGN";
/**
 *
 * @properties={typeid:35,uuid:"8DF61EDA-B9BB-4FBD-900F-DB1A54D5182C",variableType:-4}
 */
var lShowRs = false;
/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"D19665AA-0D45-405D-B45C-F80C64BBCF34",variableType:8}
 */
var xmitDelay = 0.010000;
/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"18589240-3883-42CE-8950-C4CD5EAE886B",variableType:8}
 */
var powerUpDelay = 20.000000;
/**
 *
 * @properties={typeid:35,uuid:"45B2F143-3E96-4762-976F-FBE5B55A97EB",variableType:-4}
 */
var lForceReload = true;
/**
 *
 * @properties={typeid:35,uuid:"38FB08CA-AC92-40DE-9181-B490F41B04C8",variableType:-4}
 */
var lUseSeq = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"1275D80C-75EF-4405-8B55-79160D74740A",variableType:-4}
 */
var printIdQty = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"9886C929-C9AC-483B-A290-212D968C6FA9",variableType:-4}
 */
var rfRefresh = true;
/**
 *
 * @properties={typeid:35,uuid:"21067B16-5B30-4C62-8800-9C56D23B2E29",variableType:-4}
 */
var rfStamperConnected = false;
/**
 *
 * @properties={typeid:35,uuid:"5BE0BE05-1C79-4212-9F62-3BE37E02871F",variableType:-4}
 */
var reqdShipStatusCode = true;

/**
 *
 * @properties={typeid:35,uuid:"B39C19AD-5F1A-4B39-B078-E70325EF8D90",variableType:-4}
 */
var lSaveRfTrans = true;
/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"E0DE0A8E-4F44-4EE3-90E8-38B7E5A2B477",variableType:8}
 */
var welderGroupQty = 0.000000;
/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"9B83CDBF-62C4-477B-87E5-A3FEE89070D3",variableType:8}
 */
var welderGroupRange = 0.000000;
/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"1B81767A-6FE0-4DDB-BA30-EFB089354654",variableType:8}
 */
var rfPromptDuration = 0.000000;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"F9CFA10C-1AD6-4BD9-9A16-B02E513156C3"}
 */
var rfLoadWt = i18n.getI18NMessage('sts.txt.rfsettings.recalculate.w.each.scan');
/**
 *
 * @properties={typeid:35,uuid:"12A758D1-73C8-417A-A767-60B523737C6B",variableType:-4}
 */
var chngRecvLoad = true;
/**
 *
 * @properties={typeid:35,uuid:"BE838F90-7358-42AA-942B-9AAB098B3EFE",variableType:-4}
 */
var chngShipLoad = true;
/**
 *
 * @properties={typeid:35,uuid:"D63109BE-C7C3-4D39-8AFF-FBD4DF00E119",variableType:-4}
 */
var lNewRecvId = false;
/**
 *
 * @properties={typeid:35,uuid:"7A681B5B-9830-4169-B9EA-1AAE111C6A27",variableType:-4}
 */
var autoCreateLoad = true;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"AD3BC241-5E9C-4D6F-B1E8-010670EAB241"}
 */
var rfPlRpType = "Summary Report";
/**
 *
 * @properties={typeid:35,uuid:"0F509787-2EEB-4E76-AD57-7FE7D88E2D44",variableType:-4}
 */
var rfDuplStatusScans = false;
/**
 *
 * @properties={typeid:35,uuid:"93A6DBA6-58AA-4ACD-9138-E43B67D6BDD5",variableType:-4}
 */
var lAllowInterimShipments = false;
/**
 *
 * @properties={typeid:35,uuid:"BA7C9ED7-C21C-4413-A975-39364E8A3DD2",variableType:-4}
 */
var globalF8Off = false;
/**
 *
 * @properties={typeid:35,uuid:"05636FA1-66C4-43EB-B991-26FD78B66661",variableType:-4}
 */
var shipF8Off = true;
/**
 *
 * @properties={typeid:35,uuid:"C1B18206-B8A0-4666-AFC0-A6040DDEF2E4",variableType:-4}
 */
var lAddLocationWtPcs = false;

//Sounds preferences -----------------------------------------------------------------

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"7003767F-E892-4878-9082-C4DF48F66801"}
 */
var stsStart = "C:\WINDOWS\THE MICROSOFT SOUND.WAV";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5C689F3E-E2E1-40DE-81AF-520B782A9B82"}
 */
var stsExit = "C:\WINDOWS\CHIMES.WAV";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"508C5E2F-17D8-4C55-92B0-3EBE8E146D94"}
 */
var stsBell = "C:\WINDOWS\DING.WAV";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"99BE3220-D73A-4B3F-A7C3-050816D26BED"}
 */
var stsInfo = "C:\WINDOWS\TADA.WAV";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"A8F618E8-1028-4CAD-B696-72AA337DCF4C"}
 */
var stsStop = "C:\WINDOWS\CHORD.WAV";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"4ECB6D78-5774-47B7-A6FC-60E5887758D7"}
 */
var stsQues = "C:\WINDOWS\CHORD.WAV";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"1A8DF1E3-C79D-4E2E-A209-14659ABBB1A6"}
 */
var stsAster = "C:\WINDOWS\CHORD.WAV";

//Misc Info Settings preferences -----------------------------------------------------------------

/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"5C77EBCB-96BC-40A6-97CA-435D140BC50C",variableType:8}
 */
var maxwt = 42000.000000;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"DDA8E6AF-2A68-413D-865F-BAEEA7D49013"}
 */
var markZip = "MARKUNIQ";
/**
 *
 * @properties={typeid:35,uuid:"7E8E8EAD-5298-4B80-93E3-E41DB830E7A9",variableType:-4}
 */
var lMuJobName = true;
/**
 *
 * @properties={typeid:35,uuid:"56A19933-3A97-494E-8991-EEE319DFD8BB",variableType:-4}
 */
var lRecJobName = true;
/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"B8ED6757-FB67-4E33-B4D5-76F74278E864",variableType:8}
 */
var paralPort = 1.000000;
/**
 *
 * @properties={typeid:35,uuid:"12BB891E-1549-474B-873F-85B342CA7453",variableType:-4}
 */
var lCowCustSpc = true;
/**
 *
 * @properties={typeid:35,uuid:"5D7A18B7-7A21-4436-ABF7-F2CA269DE324",variableType:-4}
 */
var lCowPosPC = true;
/**
 *
 * @properties={typeid:35,uuid:"83D6BFC8-322A-4AEC-B139-322CC3F307A4",variableType:-4}
 */
var lFabShip = false;
/**
 * @type {Number}
 * Weight below which import requests number of piecemarks per ID (independed of quantity)
 *
 * @properties={typeid:35,uuid:"9A30699D-F6DC-4492-94A5-75AB24A3CA4D",variableType:8}
 */
var wtPrompt = 0.000000;
/**
 * @type {Number}
 * Quantity below at which import requests number of piecemarks per ID (independent of weight)
 *
 * @properties={typeid:35,uuid:"4A49D468-DCAF-4954-A5D3-1712FA52481D",variableType:8}
 */
var qtyPrompt = 30.000000;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"0C9B5DB8-9EBC-4CB1-9498-960AE11A92E4"}
 */
var recvrZip = "RECEIVER";
/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"432A6A34-CBD4-43F5-9FED-6FDF909130AF",variableType:8}
 */
var paintDelay = 0.000000;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5C2046B4-55DA-4DF2-B659-54E1559EE541"}
 */
var dflRouteCode = "";
/**
 *
 * @properties={typeid:35,uuid:"A097C175-2832-4DC0-822B-F9F2CECD592F",variableType:-4}
 */
var validStatusCodes = true;
/**
 * Keep minor piecemarks during import or not.
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B691096B-AAE6-4A20-9715-F1AEDA199594",variableType:4}
 */
var lKeepMinorPcMarks = 0;
/**
 *
 * @properties={typeid:35,uuid:"E7245799-F08F-42F6-98D9-9F7DF429E629",variableType:-4}
 */
var lOnlyOneCustPerJob = true;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"25F69518-C453-4A88-8C7B-9A4C30A15EAD"}
 */
var madeIn = "Made in USA";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"538D7335-1F84-48EA-B30C-E3810E11783B"}
 */
var stsInstalled = "Fabricator";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6B01A835-DDB7-4E78-903E-975105584CAB"}
 */
var stsCustomerNum = "P2PROG";
/**
 *
 * @properties={typeid:35,uuid:"7DE1951C-F66E-4864-9D79-F60F582BE6FF",variableType:-4}
 */
var smallMadeInFont = true;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"22289A00-4BA5-4BAE-9246-FDA87996C2D4",variableType:4}
 */
var maxColumnShow = 100;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F1DD0133-ABAB-48EF-848D-497217360449",variableType:4}
 */
var showManHours = 1;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"743823E3-0F12-47C4-AF81-3CD7A948332F",variableType:4}
 */
var maxIdleMinutes = 20;
//PO Info preferences -----------------------------------------------------------------

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"63A49CA8-5246-4B69-B662-880C92E0EA7A"}
 */
var poSetting = "Use the Job P.O. Number";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"C72D12F7-D2AA-4829-B645-22836D6C4E9E"}
 */
var relSetting = "Use the Load Release #";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"FD7B0BD2-025A-477B-8B5E-A48AFE1CC214"}
 */
var poCostSetting = "Use the Job P.O. Number";


//Display Settings preferences -----------------------------------------------------------------

/**
 *
 * @properties={typeid:35,uuid:"667F6482-B5FB-4556-AC20-FBB953DC5D8B",variableType:-4}
 */
var lLogoDisplay = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"65B2DEAE-BEF5-4B68-9801-32E6248FE76C"}
 */
var bmpFile = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"37A45EF7-5B48-4397-A1EB-B7830B0CD322"}
 */
var iconFile = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"78ED0F24-2A60-4312-A335-BFAF860DF5AD"}
 */
var winTitle = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"19275B11-818C-4CBE-BD0A-9561A5D03F3E",variableType:4}
 * global measurement display preference imperial default / metric by choice
 */
var lMeasurementSystemMetric = 0; 
//Hardware Settings preferences -----------------------------------------------------------------

/**
 *
 * @properties={typeid:35,uuid:"F6CD06A6-E2CF-4DF8-A755-304D4DA28D50",variableType:-4}
 */
var lTranTrak = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"50CD8310-6F99-4B0B-9B24-CEA9C19D5880"}
 */
var dflIdFmt = "FORMAT 2";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"9AD3D5CD-A86F-4A58-B417-2A5D4E2D564C"}
 */
var idBLine1 = "Bar Code Form #";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"B286076A-4A6F-4E89-9C54-3C2ACB24379F"}
 */
var idBLine2 = "Customer Number";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"078A51F6-C49A-49F1-ABA7-7D51013424D8"}
 */
var idLblTxt1 = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"DEFF0361-9C13-41D1-91E5-DC34A2212DD6"}
 */
var idLblTxt2 = "";
/**
 *
 * @properties={typeid:35,uuid:"AFD20FA7-F504-4026-BCEF-BF717AA04A1A",variableType:-4}
 */
var lRecvLoad = true;
/**
 *
 * @properties={typeid:35,uuid:"87D09237-608E-4A73-8099-C6131217D24E",variableType:-4}
 */
var lShipLoad = true;
/**
 *
 * @properties={typeid:35,uuid:"0333E8F6-3848-43CD-86F4-288FCD2A1495",variableType:-4}
 */
var lLoadCopy = true;
/**
 *
 * @properties={typeid:35,uuid:"B7F8FBB1-3815-4FD4-83FE-70C9B178B8F6",variableType:-4}
 */
var ignoreBatchJobLoadQty = true;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"E64B00BF-D811-4C8D-ABBA-82B2F9E83446"}
 */
var portableType = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"1EFCA65D-2A90-49A5-8DC5-D39BDCEBFA4F"}
 */
var mcLinkPath = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"36AEAA80-5761-412A-9060-97F3B3D614FF"}
 */
var loadCreate = "Job Number Specific";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"F4809046-5AFC-4928-BC23-ED76E5AEB981"}
 */
var startLoadNum = "0";
/**
 * @properties={typeid:35,uuid:"36646994-6DDB-42CC-B4E2-53602E9666AE",variableType:-4}
 */
var screenFull = false;
//Data Path Settings preferences -----------------------------------------------------------------

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"04F8B40B-DC0A-46DD-861F-5F8FF1240D9F"}
 */
var localpath = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5C31E0F4-A0FD-4879-999C-68C221EB3B50"}
 */
var datapath = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"5F0706C5-3A2C-4CAD-8211-CB94E8C0E4EC"}
 */
var temppath = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"973012E1-93D0-4894-98FC-5F2662768729"}
 */
var importpath = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"DDFDAB27-0BB8-4755-80B4-3CBA7435C126"}
 */
var foxfirepath = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"16396C67-8F90-4954-AB5F-B49251921E39"}
 */
var foxfireexe = '';
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"F84869B9-583A-4E89-935E-27985E0306CC"}
 */
var reportpath = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"F4640503-4D5C-442F-82BD-4BA344C9EABC"}
 */
var xportpath = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"90F9D81C-54DC-4B87-A9B8-FA75295C9855"}
 */
var localFiles = "#";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"A3E764FF-4D47-440D-8949-92A2A121FEEB"}
 */
var mtrpath ="";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"C606823B-FA08-4ECE-8139-789B7F4001FD"}
 */
var wh32datapath = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69CC9EC9-D452-4C07-98B8-D6044D74D553"}
 */
var progDbBinaryPath = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"21ABF9E3-3972-49C5-A75F-CF496AA6769A"}
 */
var progDbAdmin = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F04F6B0D-ABB8-4960-9963-5CBCD13AF5AB"}
 */
var progDbPassword = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B5A928D1-F343-4D30-A6EA-4A2EDEE7EA9B"}
 */
var progDbPort = '';

//Material Type Settings preferences -----------------------------------------------------------------

/**
 *
 * @properties={typeid:35,uuid:"5516D882-80C3-423F-91E3-DE9B8BDF16CE",variableType:-4}
 */
var lPcMarkEntryValidate = false;
/**
 *
 * @properties={typeid:35,uuid:"51B53A82-2E7B-40CD-81D6-F229CE7DBFCA",variableType:-4}
 */
var lPartMasterModule = false;
/**
 *
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1D8FF62A-8FE3-46DD-B77F-FE422A50F0C4",variableType:4}
 */
var partNumLength = 0;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"2240347E-6CAA-4D9B-BA8C-3DED506BDF98"}
 */
var pnPadCharacter = "";
/**
 *
 * @properties={typeid:35,uuid:"927B6DB8-9530-4FBD-85EB-B3DD5AB399B5",variableType:-4}
 */
var lAutoPartNum = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"AC4833EB-0176-4AD5-85F2-C745CDEA5779"}
 */
var validatePartNumber = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"0601B9B2-5E19-4CF3-88EF-4A9886F8AD9A"}
 */
var eachWtUom = "";
/**
 * @type {Number}
 *
 *
 * @properties={typeid:35,uuid:"A19B8F2E-678B-4A8B-8DE0-F6CE18A41A3B",variableType:8}
 */
var maxDropLength = 0.000000;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8AE7711F-84E6-4B6C-BDA3-5988C1BD3E06",variableType:4}
 */
var barcodeRawLength = 9;
/**
 */

//RF Screen Settings preferences -----------------------------------------------------------------


//FabTrol preferences -----------------------------------------------------------------
/**
 * @properties={typeid:35,uuid:"6CA445CE-2FE3-4B1E-A249-8016CED64EB8",variableType:-4}
 */
var promptFabShop = true;
/**
 *
 * @properties={typeid:35,uuid:"F29EC32E-1FB5-40BB-A40B-03A2A21F4BD6",variableType:-4}
 */
var lFabtrolInstalled = true;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"8588C2DC-23F5-41AB-A15F-C5963A494D5D"}
 */
var fabtrolRootPath = "C:\FABTROLMRP\\";
/**
 *
 * @properties={typeid:35,uuid:"B2EE2A4C-4F21-44AA-899B-72D82F872B41",variableType:-4}
 */
var lFabtrolShip = true;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"00575608-3B0B-4C8C-AF89-10419DE3FA2C"}
 */
var ftMatchType = "LOAD";
/**
 *
 * @properties={typeid:35,uuid:"61640AAB-1037-4EC2-9C70-856714E38B89",variableType:-4}
 */
var lFabtrolSeqTesting = false;
/**
 *
 * @properties={typeid:35,uuid:"75C59CE0-9C54-4D22-91B6-6049E324BF5C",variableType:-4}
 */
var lFabtrolSqlVersion = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"882A6C31-CE8D-4DBB-9E58-6A9A351EEC33"}
 */
var fabtrolServerName = "BSCFAB";

/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"977891E3-F4AF-4474-8392-38FCD27BB556"}
 */
var fabtrolDatabase = "FABTROLMRP";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"37DA0AF6-7DB5-427B-8DF4-DEE3DE497982"}
 */
var fabtrolUserid = "FTAPP";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"19D5EADC-EFAB-4F89-9CC2-5A377DEAEB71"}
 */
var fabtrolPassword = "FT-SQL-DB";
/**
 *
 * @properties={typeid:35,uuid:"E882E7E9-DE84-423B-80F3-D5F2BE4D0A84",variableType:-4}
 */
var lFabtrolMrp = true;
/**
 *
 * @properties={typeid:35,uuid:"3F3E0003-AB29-4B0B-8617-908DF451E7CA",variableType:-4}
 */
var lFabtrolImportOnly = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"ADD4C69A-807D-45D9-9D43-A4338D13E295"}
 */
var fabtrolAdcPath = "LOAD";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"126E8851-109F-41DB-B2CE-D1BDDE8212BC"}
 */
var ftFabtrolOdbc = "FTMRP38FABTROL";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"F54B4D09-B770-4E35-B188-5B57AAA73380"}
 */
var ftProjectOdbc = "FTMRP38PROJECTS";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"7DDDDEE7-8A09-4374-892F-216594815E1B"}
 */
var ftSystemOdbc = "FTMRP38SYSTEM";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"57F367DA-20A6-4C01-989F-9D2F4A3204DA"}
 */
var ftUnitOdbc = "FTMRP38UNIT";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"342F15E9-E648-4008-B741-602C8521663B"}
 */
var ftSimpleJobs = "OLD";
/**
 *
 * @properties={typeid:35,uuid:"13117E04-7C05-48D9-8C0E-B248DC967F5F",variableType:-4}
 */
var ftDoNotMuliplyMinors = true;
/**
 *
 * @properties={typeid:35,uuid:"7E65BEC9-CD46-4A02-A7A0-80AC8F4175DA",variableType:-4}
 */
var ftVer2x = false;
/**
 */

//FabSuite preferences -----------------------------------------------------------------

/**
 *
 * @properties={typeid:35,uuid:"E36D2273-C045-402B-BC17-8344A70F00BA",variableType:-4}
 */
var lFabsuiteInstalled = false;
/**
 *
 * @properties={typeid:35,uuid:"88051069-9348-411E-BB89-D4122A3E88A7",variableType:-4}
 */
var lFabsuiteSqlVersion = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"8F1D971C-452F-4BBD-A1D0-A64E55C53863"}
 */
var fabsuiteRootPath = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"29E365E6-7B39-4BF3-98E3-F61A3D9F01A5"}
 */
var userFabsuiteRootPath = '';
/**
 * @type {String}
 *
*
 * @properties={typeid:35,uuid:"7A124B92-A69A-47EB-A2FF-EC290E32A32D"}
 */
var fabsuiteServerName = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"0EFBF1DC-B32E-4830-AC3E-207A62C863F7"}
 */
var fabsuiteDatabase = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"47EE0FFF-A0D5-4E0E-B689-964E23BAD2D2"}
 */
var fabsuiteUserid = "";
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"9091BD20-38E5-4782-97C9-B70DB5D0675E"}
 */
var fabsuitepassword = "";
/**
 *
 * @properties={typeid:35,uuid:"9A7C122E-9A7F-40F3-8511-6998E29FC3F1",variableType:-4}
 */
var lFabsuiteImportOnly = false;
/**
 *
 * @properties={typeid:35,uuid:"0E165AF3-33BD-4249-B8A1-FC6E2A685732",variableType:-4}
 */
var lFabsuitePassWorker = false;
/**
 *
 * @properties={typeid:35,uuid:"35733FC8-06A1-4BB6-9F47-C198CF9F6762",variableType:-4}
 */
var lFsAllowNonSerial = false;
/**
 *
 * @properties={typeid:35,uuid:"CB656EDD-A4B8-4B2B-B57A-CA24C2AD0642",variableType:-4}
 */
var lFsLocnBatch = false;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"05B71A8F-DC06-4892-A310-7FB7DA680BE3",variableType:4}
 */
var lFsPrintIDFromCutList = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4C0B44D9-5B2E-47B5-91D0-B3B407CE2607",variableType:4}
 */
var lFsFlipPrimSecWhenShop = 0;
/**
 * @properties={typeid:35,uuid:"A546F3D4-282B-44DC-90E9-D11AEE714DB7",variableType:-4}
 */
var lFsDoNotPrintScrapLabels = true;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4A7EFE23-DBDB-4477-9C8E-F852CAB4539B",variableType:8}
 */
var lFsNoPushSecLoc = 0;
/**
 */

// Romac preferences -----------------------------------------------------------------
/**
 *
 * @properties={typeid:35,uuid:"A995F490-6612-48CC-A50A-CCA77CEC2652",variableType:-4}
 */
var lRomacInstalled = false;
/**
 * @type {String}
 *
 *
 * @properties={typeid:35,uuid:"9DD7A2F6-41E9-4E5D-9C36-59F2AFCF0FCB"}
 */
var romacRootPath = "";
/**
 *
 * @properties={typeid:35,uuid:"65FE77C5-6A41-4D37-869D-28C582E87568",variableType:-4}
 */
var lRomacImportOnly = false;
/**
 *
 * @properties={typeid:35,uuid:"0462CBF1-6B42-43C8-9BBF-2D60612461FA",variableType:-4}
 */
var lRomacPassWorker = false;
/**
 *
 * @properties={typeid:35,uuid:"FBFBEAD2-3977-4D8D-B00F-E394E09EAB78",variableType:-4}
 */
var foundPassword = false;
/**
 * @properties={typeid:35,uuid:"3FCAD52F-204F-460A-9FE0-265234C773FB",variableType:-4}
 */
var prefsDirty = false;
/**
 * @properties={typeid:35,uuid:"BDB8F2E6-F38A-4341-914C-C4A81A150F8C",variableType:-4}
 */
var prefsPrinterDirty = false;
/**
 * @properties={typeid:35,uuid:"5DDCF579-40D5-485C-97F1-184AFCE4FC33",variableType:-4}
 */
var labelFields = [];
/**
 * @properties={typeid:35,uuid:"DAB42457-A82D-45A8-B525-C1D2FB13C9BA",variableType:-4}
 */
var prefsChangedOutside = [];
/**
 * @type {Array}
 * @properties={typeid:35,uuid:"5AF47F3A-69FA-4A13-B3BB-116F7C94495D",variableType:-4}
 */
var defaultTableColumns = [];
// _________________________________________________________________________________________________
/**
 * moved to globals. scopes.globals.
 * @properties={typeid:24,uuid:"8F8422B9-2B61-4F09-9761-3E69957359CC"}
 */
function mainWindowFront(){
	application.updateUI();
	var windowx = application.getWindow();
	if (windowx != null){
		windowx.toFront();
	}
}
/**
 * @properties={typeid:24,uuid:"55DC9A89-CE4E-4A73-B9DD-1F8CF4486A13"}
 */
function getLabelFormats(){
	var reportsDir = scopes.prefs.reportpath;
	var formatArray = [];
	formatArray.push('<NONE>');
	formatArray.push('one.btw');
	formatArray.push('two.btw');
	formatArray.push('three.btw');
	application.setValueListItems('stsvl_label_formats',formatArray);
}
/**
 * @properties={typeid:24,uuid:"67C84D85-364A-462C-8852-C98980D5D716"}
 */
function stopWindowTrack(){
	globals.setWindowClosed("");
	var win = application.getActiveWindow();
	win.hide();
	return true
}
/**
 * Handle focus gained event of an element on the form. Return false when the focus gained event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"6160DF0D-B40D-428D-A490-312C43E14183"}
 */
function onElementFocusGained(event) {
	var fmName = event.getFormName();
	var elName = event.getElementName();
	var field = forms[fmName].elements[elName];
	if (elName && fmName && field.enabled){
		scopes.prefs.oldBGcolor = field.bgcolor;
		field.bgcolor = "Silver";
		//application.updateUI();
	}
	return true
}

/**
 * Handle focus lost event of an element on the form. Return false when the focus lost event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"2E5A08F3-4F2D-49A6-AA9B-585FC6F102D9"}
 */
function onElementFocusLost(event) {
	var fmName = event.getFormName();
	var elName = event.getElementName();
	var field = forms[fmName].elements[elName];
	if (elName && fmName && field.enabled){
		field.bgcolor = scopes.prefs.oldBGcolor;
		//application.updateUI();
	}
	return true
}
/**
 * @AllowToRunInFind
 * 
 * @param event {JSEvent}
 *
 * @properties={typeid:24,uuid:"3218661F-609A-45FA-8A8D-12DF3DBEED6B"}
 */
function onActionUpdatePrefs(event) {
	// for globals, user_uuid = 'FFFFFFFF-0000-0000-DDDDDDDDDDDD', tenant_uuid= main tenant, field_name = index, value_type, value_string
	var prefs = scopes.prefs;
	var prefType = (event.getFormName().search('printer') != -1) ? 'Printer' : 'Prefs';
	var description = "Global Preference";
	if (prefType == "Printer"){
		prefs = scopes.printer;
		description = "Global Printer";
		forms.preferences_printer.errorMessage = i18n.getI18NMessage('sts.txt.saving.preferences');
		var form = forms[event.getFormName()];
		var tempPrefsChanged = form.prefsChanged;
	}
	scopes.jobs.warningsYes(event);
	application.updateUI();
	//var fs = databaseManager.getFoundSet('stsservoy','preferences2');
	var global_user_uuid = null;
	var tenant = globals.session.tenant_uuid;
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var fs = databaseManager.createSelect('db:/stsservoy/preferences2');
	var userID = (globals.session.loginId) ? globals.session.loginId.toString() : globals.session.loginId;
	fs.result.add(fs.columns.preferences2_id);
	fs.where.add(fs.or
			.add(fs.columns.user_uuid.isNull)
			.add(fs.columns.user_uuid.eq(userID))
		);
	fs.where.add(fs.columns.tenant_uuid.eq(tenant));
	if (globals.tempPrefsChanged){
		var thesePrefs = globals.tempPrefsChanged.sort();
		fs.where.add(fs.columns.field_name.isin(thesePrefs)); //20180108 save only changed prefs
	}
	var FS = databaseManager.getFoundSet(fs);
	var fldDescrip = []; var fldValue = [];var fldType = [];var fldName = [];
	var fsIndex = 1;
	/** @type {JSRecord<db:/stsservoy/preferences2>} */
	var rec = null;
	while (rec = FS.getRecord(fsIndex)){
		fldName[rec.field_name] = fsIndex;
		
		fldDescrip[fsIndex] = rec.value_description;
		fldValue[fsIndex] = rec.field_value;
		fldType[fsIndex] = rec.field_type;
		fsIndex++;
	}
	var variableX = "";
	var variableSetting = "";
	databaseManager.startTransaction();
	for (variableX in prefs){
		if (globals.tempPrefsChanged){
			if (globals.tempPrefsChanged.indexOf(variableX) == -1){continue}//20180108
		}
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.saving.preferences'),false);
		//variableX = index;
		variableSetting = prefs[variableX];
		var variableType = typeof(variableSetting);
		if (variableType === 'function'){continue}
		//if (globals.tempPrefsChanged){
		//	if (globals.tempPrefsChanged.indexOf(variableX) == -1){continue}//20180108
		//}
		//var fieldType = typeof(prefs[index]);
		variableSetting +="";
		if (fldName[variableX]){
			fsIndex = fldName[variableX];
			if (fldValue[fsIndex] != variableSetting){
				rec = FS.getRecord(fsIndex);
				rec.field_value = variableSetting;
				rec.value_description = description;
				rec.field_type = variableType;
			}
		} else {
			var recNum = FS.newRecord(false);
			rec = FS.getRecord(recNum);
			if (!global_user_uuid) {
				rec.user_uuid = null;
			} else {
				rec.user_uuid = global_user_uuid;
			}
			if (variableX.search('user') == 0){
				rec.user_uuid = globals.session.userId;
			}
			rec.tenant_uuid = tenant;
			rec.field_name = variableX;
			rec.field_value = variableSetting;
			rec.field_type = variableType;
			rec.value_description = description;
		}
	}
	if (prefType == "Printer"){
		forms.preferences_printer.errorMessage = "";
	}
	var committed = false;
	if (databaseManager.saveData(FS)){
		committed = databaseManager.commitTransaction();
	}
	if (application.isInDeveloper()){application.output('comitted '+committed)}
	globals.tempPrefsChanged = [];
	setPrefsClean(event,prefType);
	globals.onActionCancelButton(event);
	application.updateUI();
	scopes.jobs.warningsX(event);
}
/**
 * @properties={typeid:24,uuid:"FAFD3720-4D08-4BE2-A2F6-BCAE870935A0"}
 */
function getBTLabelFormats(){
	var reportsPath = scopes.prefs.reportpath;
	var labelList = [];
	var suffix = ['.btw','.BTW','.qdf'];
	var path = plugins.file.getDefaultUploadLocation()+reportsPath;
	path = path.replace(/\/+/g,'\\').replace('.','');
	application.output('REM label path '+path);
	var btwFiles = plugins.file.getFolderContents(path,suffix);
	//var btwFiles = plugins.file.getFolderContents(reportsPath,suffix);
	labelList.push('<NONE>');
	for (var index = 0;index < btwFiles.length;index++){
		labelList.push(btwFiles[index].getName());
	}
	application.setValueListItems('stsvl_label_formats',labelList);
}
/**
 * @properties={typeid:24,uuid:"2FDB4922-1121-4905-BF7F-EA235F50409D"}
 */
function getLocalPrinters(){
	application.setValueListItems('stsvl_get_printer_list',application.getPrinters().sort());
}
/**
 * @param event {JSEvent}
 * @param prefsType {String}
 * @properties={typeid:24,uuid:"6A1B1375-8F19-4418-BD98-EEE564E7C264"}
 * @AllowToRunInFind
 */
function setPrefsDirty(event,prefsType){
	var formName = "";
	if (event){
		formName = event.getFormName();
	}
	if (!formName){
		if (prefsType == 'Print'){
			formName = "print";
		}
	}
	if (formName.search('print') != -1){
		
		prefsPrinterDirty = (prefsType == "Printer") ? true : false;
		forms[formName].elements.btn_UpdatePreferences.enabled = (prefsPrinterDirty) ? true : false;
		forms[formName].elements.btn_SessionPreferences.enabled = (prefsPrinterDirty) ? true : false;
	} else {
		prefsDirty = (prefsType != "Printer") ? true : false;
		forms.preferences_main.elements.btn_UpdatePreferences.enabled = (prefsDirty) ? true : false;
		forms.preferences_main.elements.btn_SessionPreferences.enabled = (prefsDirty) ? true : false;
	}
}
/**
 * @param event {JSEvent}
 * @param prefsType {String}
 *
 * @properties={typeid:24,uuid:"08572388-36D7-4BB3-B26B-8E6C99E4AB33"}
 * @AllowToRunInFind
 */
function setPrefsClean(event,prefsType){
	var formName = event.getFormName();
	if (formName.search('print') != -1){
		prefsPrinterDirty = (prefsType == "Printer") ? true : false;
		forms.preferences_printer.elements.btn_UpdatePreferences.enabled = (!prefsPrinterDirty);
		forms.preferences_printer.elements.btn_SessionPreferences.enabled = (!prefsPrinterDirty);
	} else {
		prefsDirty = (prefsType != "Printer") ? true : false;
		forms.preferences_main.elements.btn_UpdatePreferences.enabled = (!prefsDirty);
		forms.preferences_main.elements.btn_SessionPreferences.enabled = (!prefsDirty);
	}
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 * @param {String} prefsType
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"04DB1200-402E-4A31-85CB-8F463D135F52"}
 * @AllowToRunInFind
 */
function onDataChangePrefsGeneral(oldValue, newValue, event,prefsType) {
	setPrefsDirty(event,prefsType);
	var elName = event.getElementName();
	if (!globals.tempPrefsChanged){globals.tempPrefsChanged = []}
	if (globals.tempPrefsChanged.indexOf(globals.tempPrefsChanged)){globals.tempPrefsChanged.push(elName);}
	return true;
}
/**
 * @param {JSEvent} event
 * @param updateValue
 * @param prefsType
 *
 * @properties={typeid:24,uuid:"BF49A765-9ECE-4164-AAF0-208CA327A66C"}
 * @AllowToRunInFind
 */
function onActionFileOpenDialog(event,updateValue,prefsType) {
	//var priorPath = (prefsType == 'Printer') ? scopes.printer[updateValue]: scopes.prefs[updateValue];
	//if (priorPath == "" || priorPath == null){priorPath = "C:\\"}
    var defaultDir = plugins.file.getDefaultUploadLocation();
    
	var baseDirObj = plugins.file.convertToJSFile(defaultDir);
	var dirs = plugins.file.showDirectorySelectDialog(baseDirObj,i18n.getI18NMessage('sts.txt.select.default.directory'));
	if (!dirs){return}
	var intendedDir = dirs.getAbsolutePath();
	if (intendedDir.indexOf(defaultDir) != 0 && updateValue.search('user') != 0){
		//application.output('intended '+intendedDir+' default '+defaultDir);
		scopes.globals.errorDialogMobile(event,1258,'','');//The Base Directory Is Unavailable From This Client
		//return;
		// show cannot run this unless it is in network
	}
	//var dirs = plugins.file.showFileOpenDialog(2, priorPath, false, fileReceipt2);
	var stsTestFile = 'STSTestWriteFile.txt';
	if (dirs == null){return false}
	var path = dirs.getAbsolutePath();
	var file = plugins.file.createFile(stsTestFile);
	var error = false;
	if (file.exists()){
		//application.output(stsTestFile+' file exists');
		if (!file.deleteFile()){
			//application.output(stsTestFile+' file exists but cannot delete');
			error = true;
		}
	} else {
		if (!file.createNewFile()){
			//application.output(stsTestFile+' could not create');
			error = true;
		} else {
			//application.output(stsTestFile+' file created');
			if (!file.deleteFile()){
				//application.output(stsTestFile+' file deleted');
				error = true;
			}
		}
	}
	if (error){
		//application.output(path+' directory access test failed');
		scopes.globals.errorDialogMobile(event,'1257',null,'');// Cannot Modify File In Directory
		var form = event.getFormName();
		var elName = event.getElementName();
		//forms[form].elements[elName].getDataProviderID();
		return false;
	}
	//application.output(path+' path is accessible');
	///var formName = event.getFormName();
	//if (path.replace(defaultDir,'')){
	path = path.replace(defaultDir,'');
	if (path.search(/[A-Za-z\][:\.]\\/) == -1){
		path = '.'+path;
	}
	//}
	if (prefsType == "Printer"){
		scopes.printer[updateValue] = path;
	} else {
		scopes.prefs[updateValue] = path;
	}
	setPrefsDirty(event,prefsType);
	forms.preferences_printer.prefsChanged.push(updateValue);//20180109 update prefs on button inop from button change
	return true;
}
/**
 * @param event {JSEvent}
 *
 * @properties={typeid:24,uuid:"DF62A537-91F7-4B78-955B-76456B9BE458"}
 * @AllowToRunInFind
 */
function onActionCancelPrefs(event) {
	var prefsType = (event.getFormName().search("printer") != -1) ? "Printer" : "Prefs";
	scopes.globals.onStartLoadPrefs(prefsType);
	setPrefsClean(event,prefsType);
	scopes.globals.onActionCancelButton(event);
}


/**
 * @param event {JSEvent}
 * @param updateValue
 *
 * @properties={typeid:24,uuid:"F0DF3CC2-DF4F-46AF-BCFA-8C913799762C"}
 * @AllowToRunInFind
 */
function onActionFileOpenDialogFile(event,updateValue) {
	var prefsType = (event.getFormName().search("printer") != -1) ? "Printer" : "Prefs";
	var scoper = (prefsType == 'Printer') ? scopes.printer : scopes.prefs;
	var lastValue = scoper[updateValue];
	var file = plugins.file.showFileOpenDialog(1, "\\windows\\", false, new Array("Images and Audio Files","wav","ico","bmp","png","gif"));
	if (!file){return}
	setPrefsDirty(event,prefsType);
	var path = file.getAbsolutePath();
	///var formName = event.getFormName();
	scoper[updateValue] = file;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4EEDD213-B9E1-4EBF-932D-8CBE5ECB49A5"}
 * @AllowToRunInFind
 */
function onActionFormTemplate(event) {
	var templateTextDbName = "Text File 1.txt";
	var reports = scopes.prefs.reportpath;
	var pathName = reports+"\\"+templateTextDbName;

	var pathNameMeta = plugins.file.convertToJSFile(reports);

	if (!pathNameMeta.exists()){
		plugins.dialogs.showErrorDialog(i18n.getI18NMessage('sts.txt.reports.folder.invalid'),
			i18n.getI18NMessage('sts.txt.reports.folder.invalid.msg'));
		return; // path does not exist
	}
	var fileMeta = plugins.file.convertToJSFile(pathName);
	if (fileMeta.exists()){
		plugins.file.writeTXTFile(pathName,"");// clear out file
	}
	var newContent = "";
	var items = scopes.printer.labelText.split(",");
	var dataSize = items.length;
	///var itemList = "";
	for (var index = 0;index < dataSize;index++){
		//var splits = items[index].split(" ");
		//itemList += "'"+splits[1]+"'"+",\n";
		newContent += "\t";
	}
	//application.output(itemList);
	newContent += "\n";
	plugins.file.writeTXTFile(pathName,newContent);
	newContent = "";
	null;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * Use case is print to labelase, print under STSmobile directly to server, print to server, 
 * print to user-specific printers, print with and without db in the bartender template
 *
 * @properties={typeid:24,uuid:"D533C90F-42D6-426E-83DA-2ADE3C394DBC"}
 * @AllowToRunInFind
 */
function onActionPrintLabels(event) {
	var formName = event.getFormName();
	var versionForm = scopes.globals.getInstanceForm(event);
	if (application.isInDeveloper()){application.output('RM formName onActionPrintLabels:'+formName)}
	/**
	 * collect label fields and then push into tabbed fields with data HERE HERE HERE 
	 */
	if (formName.search('rf_mobile_view') != 0 && formName.search('raw') == -1){
		var specs = scopes.printer.getBTFieldData('P');		
		var srcForm = 'barcode_idlabel'+versionForm;
	} else if (globals.session.program == i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')) {
		specs = scopes.printer.getBTFieldData('P');	
		srcForm = 'rf_mobile_view';
	} else if (globals.session.program == i18n.getI18NMessage('sts.mobile.inventory.move')) {
		specs = scopes.printer.getBTFieldData('R');	
		srcForm = 'rf_mobile_view';
	} else if (globals.session.program == i18n.getI18NMessage('sts.mobile.inventory.move')) {
		specs = scopes.printer.getBTFieldData('R');	
		srcForm = 'rf_mobile_view';
	} else if (globals.session.program == i18n.getI18NMessage('sts.mobile.status')){
		specs = scopes.printer.getBTFieldData('P');	
		srcForm = 'rf_mobile_view';		
	} else if (globals.session.program == i18n.getI18NMessage('sts.mobile.build.bundles')){
		specs = scopes.printer.getBTFieldData('P');	
		srcForm = 'rf_mobile_view';		
	}	else {
		specs = scopes.printer.getBTFieldData('R');//raw material
		srcForm = 'barcode_id_raw'+versionForm
	}
	var fields = [];
	for (var idx = 0;idx < specs.length;idx++){
		fields.push(specs[idx].field_name);
	}
	var outputFields = [];
	var outputSpecs = [];
	if (application.isInDeveloper()){application.output('print label fields')}
	//var useServer = false;
	//var formName = event.getFormName();
	var versionForm = globals.getInstanceForm(event);
	if (forms[srcForm].useServerPrinters == null){forms[srcForm].useServerPrinters = 1}//20200827 print bundles and shipping not yet set
	var useServer = (forms[srcForm].useServerPrinters == 1);
	var useLabeLase = (forms[srcForm].useLabeLasePrinter && forms[srcForm].useLabeLasePrinter == 1);
	var useBTPrint = (forms[srcForm].useBarTender && forms[srcForm].useBarTender == 1);
	if (formName == 'rf_mobile_view'){useServer = true;useBTPrint = true}

	var labCnt = 0;
	//if (true || true) {return;}
	var tabCount = specs.length;
	formName = event.getFormName();
	var formTable = formName+"_table";
	
	var updateIdfile = true;
	var rePrint = false;
	if (globals.session.program == i18n.getI18NMessage('sts.mobile.cut.cutlist.raw') ||
		globals.session.program == i18n.getI18NMessage('sts.mobile.inventory.move')){
		fs = globals.session.tempFS;
	} else if (globals.session.program == i18n.getI18NMessage('sts.mobile.build.bundles')){
		fs = globals.session.tempFS;
		updateIdfile = false;
	} else if (globals.session.program == i18n.getI18NMessage('sts.mobile.status')){
		fs = globals.session.tempFS;
		updateIdfile = false;
		rePrint = true;
	} else {
		/** @type JSFoundSet */
		var fs = forms[formTable].foundset;
	}
	//application.output(fs.getRecord(1));
	databaseManager.saveData(fs);//20190531 keep sort on close for printing labels
	var i = 1;
	var fileLine = "";
	var llfileLine = "";

	var itemsSelected = false; globals.barcodePrintedArray = [];var printedIndexes = [];
	//var btSpec = {num: 0, name:'', size: 0,dbcol:'',dbtype:'',dbsize:0}
	var printed = false;
	var printDate = new Date();
	/** @type {JSRecord<selection:Number>} */
	var rec = null; i = 1;
	while (rec = fs.getRecord(i++)){
		var tabContents = "";
		if (updateIdfile && rec.selection != 1 && globals.session.program != i18n.getI18NMessage('sts.mobile.cut.cutlist.raw')){
			if (globals.session.program != i18n.getI18NMessage('sts.mobile.inventory.move')){//reprint in progress for inventory move
				continue;
			}
		}
		labCnt++;
		printedIndexes.push(i);//index of  printed elements for later view marking as printed
		if (rec.bc_id_serial_number_id){globals.barcodePrintedArray.push(rec.bc_id_serial_number_id.toString())}
		if (rec.inventory_uuid){globals.barcodePrintedArray.push(rec.inventory_uuid.toString())}
		itemsSelected = true;
		//var altSystem = ['PARTWT','LGTNUM','WT','WIDNUM'];
		if (useLabeLase){
			llfileLine += 'LLP\t';
		}
		for (var index = 0;index < tabCount;index++){
			/** @type {JSRecord<num:Number,name:String,dbtype:String,size:Number,dbcol:String,dbsize:Number>} */
			var specObj = specs[index];
			/** @type {Array} */
			var dbCol = specObj.db_field.split('.');
			var dbField = dbCol[dbCol.length-1];//get unique record field
			tabContents = rec[dbField];
			if (application.isInDeveloper()){application.output('Index: '+index+' dbField:'+dbField+' Content:'+tabContents);}

			if (typeof tabContents === 'undefined'){// || altSystem.indexOf(specObj.field_name) != -1){
				//if (application.isInDeveloper()){application.output('undefined or unknown - '+dbField+' '+specObj.field_name);}
				var fieldTagName = specObj.field_name;
				tabContents = getNonRecordValues(rec,fieldTagName);
			}
			if (!tabContents){tabContents = ''}
			
			tabContents = tabContentFormat(tabContents,specObj);
			if (0 && application.isInDeveloper()){application.output('contents '+tabContents);}
			if (tabContents == ''){
				fileLine += '\t';
				if (useLabeLase){
					llfileLine += '\t';
				}
			} else {
				fileLine += tabContents+"\t";
				if (useLabeLase){
					llfileLine += tabContents+"\t";
				}
			}
			//fileLine += tabContents+"\t";
		}
		//fileLine += "\n";
		if (!useServer){//use multipleLines
			fileLine += "\n";
		} else {
			if (useBTPrint){
				scopes.prefs.bartenderPrint(event,fileLine); //BARTENDER
				fileLine = '';
				printed = true;
			}
		}
		if (useLabeLase){
			llfileLine += '\n';
			application.output('LABELASE: '+llfileLine);
		}

	}
	if (!useServer && itemsSelected && useBTPrint){
		scopes.prefs.bartenderPrint(event,fileLine); //BARTENDER	
		printed = true;	
	}
	if (useLabeLase){//write labelase1000.txt file
		var reportPth = scopes.prefs.reportpath.replace('.','');
		var tempDir = (forms[srcForm].useLocalDirectory) ? forms[srcForm].localDir : plugins.file.getDefaultUploadLocation()+scopes.prefs.temppath.replace('.','');
		//tempDir = tempDir.replace(plugins.file.getDefaultUploadLocation(),'');
		tempDir = tempDir.replace(/\/+/g,'\\').replace('.','');
		var labeLasePath = plugins.file.getDefaultUploadLocation()+reportPth+"\\"+forms[srcForm].labeLaseFormat;
		labeLasePath = labeLasePath.replace(/\/+/g,'\\');
		//application.output('printing LabeLase Template: '+labeLasePath);
		//application.output('llfileLine:\n'+llfileLine);
		var llText = llfileLine.replace(/LLP/g,labeLasePath);
		//application.output('with LabeLase Path:'+llText);
		var labeLaseFile = tempDir+'\\LabeLase1000.txt';
		labeLaseFile = labeLaseFile.replace(/\/+/g,'\\');
		var labeLase = plugins.file.convertToJSFile(labeLaseFile);
		labeLase.deleteFile();
		status = plugins.file.appendToTXTFile(labeLaseFile,llText);
		//status = plugins.file.copyFile(randFileName,labeLaseFile);
	}
	if (updateIdfile && printed){
		for (var i2 = 0; i2 < printedIndexes.length;i2++){
			rec = fs.getRecord(printedIndexes[i2]-1);
			if (rec.inventory_uuid){
				/** @type {QBSelect<db:/stsservoy/inventory>} */
				var q = databaseManager.createSelect('db:/stsservoy/inventory');
				q.where.add(q.columns.inventory_uuid.eq(rec.inventory_uuid.toString()));
				q.result.add(q.columns.inventory_uuid);
				var Q = databaseManager.getFoundSet(q);
				if (Q.getSize() != 0){
					/** @type {JSFoundSet<db:/stsservoy/inventory>} */
					var rec2 = Q.getRecord(1);
					rec2.lprint = 1;
					rec2.edit_date = printDate;
					databaseManager.saveData(rec2);
				}
				
			} else {
				markRecPrinted(rec.if_idfile_id,printDate);
			}
			rec.bc_printed = 1;// these are for color highlighting only.  No change is made to the real data
			rec.if_lprint = 1;
		}
	}
	if (formName == 'rf_mobile_view'){
		forms['rf_mobile_view'].tempFS = null;
	}
	//if (itemsSelected){bartenderPrint(event,fileLine);} //BARTENDER
	if (application.isInDeveloper()){application.output('Number of labels to printed '+labCnt)}
	//clear selections 
	if (event.getFormName() != 'rf_mobile_view'){
		plugins.dialogs.showErrorDialog(i18n.getI18NMessage('sts.txt.labels.sent.to.printer'),i18n.getI18NMessage('sts.txt.labels.sent.to.printer')+' '+labCnt);
	}

}
/**
 * @param {JSEvent} event
 * @param {String} txtString
 *
 * @properties={typeid:24,uuid:"5D168323-EA10-466B-AEED-B5B6E31D38F3"}
 * @AllowToRunInFind
 */
function bartenderPrint(event,txtString,labelCount){
	var copies = (!(!labelCount)) ? labelCount : 1;
	null;
	var debug = 1;
	var versionForm = globals.getInstanceForm(event);
	var formName = event.getFormName();
	if (formName.search('barcode_piecemark_info_raw') == 0){
		formName = 'barcode_id_raw'+versionForm;
	}
	if (formName.search('barcode_piecemark_info') == 0){
		formName = 'barcode_idlabel'+versionForm;
	}
	var reportPth = scopes.prefs.reportpath.replace('.','');
	var barForm = forms[formName];
	
	var printer = barForm.printerName;
	//var printerMinor = barForm.printerMinor;
	var label = barForm.labelName;
	var labelMinor = barForm.labelName;
	var printerMinor = '';
	var useRawSettings = (forms[formName]['labelPrintType'] == 'material');
	if (formName == 'rf_mobile_view'){
		if (useRawSettings){
			label = scopes.printer.rawMaterialLabelFormat;
			printer = scopes.printer.rawMaterialPrinter;
		} else {
			label = scopes.printer.idBarcodeLabelFormat;
			printer = scopes.printer.idBarcodePrinter;
			labelMinor = label;
			printerMinor = printer;
		}
		var userDestination = getUserDestination();
		if (userDestination.printerMajor && !useRawSettings){
			printer = userDestination.printerMajor;
			label = userDestination.labelMajor;
			printerMinor = userDestination.printerMinor;
			labelMinor = userDestination.labelMinor;
		}
		if (userDestination.printerRaw && useRawSettings){
			printer = userDestination.printerRaw;
			label = userDestination.labelRaw;
		}
		//forms[formName]['labelPrintType'] = '';
	}
	var useServer = false;
	if (formName.search('barcode_idlabel'+versionForm) == 0) {useServer = (forms['barcode_idlabel'+versionForm].useServerPrinters == 1)}
	if (formName.search('barcode_id_raw') == 0){useServer = (forms['barcode_id_raw'+versionForm].useServerPrinters == 1)}
	if (formName == 'rf_mobile_view'){useServer = true}
	//application.output('barcode_idlabel'+versionForm);
	var tempDir = (barForm.useLocalDirectory) ? barForm.localDir : plugins.file.getDefaultUploadLocation()+scopes.prefs.temppath.replace('.','');
	//tempDir = tempDir.replace(plugins.file.getDefaultUploadLocation(),'');
	tempDir = tempDir.replace(/\/+/g,'\\').replace('.','');
	scopes.jobs.warningsYes(event);
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
	var line = "";
	//var fileName = tempDir+"\\barcodelabel.txt";//Paul no longer wants this file in temp dir 20190228
	//fileName = fileName.replace(/\/+/g,'\\');
	var btwFile = plugins.file.getDefaultUploadLocation()+reportPth+"\\"+label;
	btwFile = btwFile.replace(/\/+/g,'\\');
	var btwFileMinor = plugins.file.getDefaultUploadLocation()+reportPth+"\\"+labelMinor;
	btwFileMinor = btwFileMinor.replace(/\/+/g,'\\');
	if (debug){application.output('btwFile bartender print '+btwFile)}//REMOVE
	//var btwExists = plugins.file.createFile(btwFile);
	//if (!btwExists.exists()){
	//	globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('1226'),i18n.getI18NMessage('1226'));//BarTender Template Does Not Exist in Reports Location
	//	scopes.jobs.warningsX();
	//	return;
	//}

	var randFileName = tempDir+"\\" + globals.getRandomG() +".txt";
	if (debug){application.output('randfilename bartender print '+randFileName)}//REMOVE
	randFileName = randFileName.replace(/\/+/g,'\\');

	var status = plugins.file.writeTXTFile(randFileName,txtString);
	if (status){globals.loggerDev(this,'Status write to txt file fail.');}
	status = plugins.file.appendToTXTFile(randFileName,line + "\n");
	cleanTempDir(event,tempDir);//20190530
	if (status){globals.loggerDev(this,'Status append to txt file fail.');}
	//status = plugins.file.copyFile(fileName,randFileName);
	null;
	if (0 && forms[formName].useLabeLasePrinter){
		var labeLasePath = plugins.file.getDefaultUploadLocation()+reportPth+"\\"+barForm.labeLaseFormat;
		labeLasePath = labeLasePath.replace(/\/+/g,'\\');
		application.output('printing LabeLase Template: '+labeLasePath);
		var llText = txtString.replace(/^(\t)/g,labeLasePath+'\t');
		application.output('with LabeLase Path:'+llText);
		var labeLaseFile = tempDir+'\\LabeLase1000.txt';
		labeLaseFile = labeLaseFile.replace(/\/+/g,'\\');
		status = plugins.file.copyFile(randFileName,labeLaseFile);
	}
	/**
	 * send to barTender Db Automation
	 * useServer = checkbox on STS barcode label print view {Boolean}
	 * useBarTender = barTender installed {Boolean}
	 * rf_mobile_view ONLY uses barTender integration and ONLY when printEnabled on a print view
	 * 20190509 printer will be different if printing IDs vs RAW
	 * ID fields (#189/#91 (PARENTPCMK #189/PCMK #91)) match means ID not match Minor, RAW fields (SHIPTIME #38/none #180)
	 */
	var printMinorLabel = false;//(labelData[189] == labelData[91]);
	if ((forms[formName].useBarTender && useServer) || 
			(formName == 'rf_mobile_view' && !useRawSettings) ||
			(formName == 'rf_mobile_view' && forms[formName].printEnabled == i18n.getI18NMessage('sts.txt.on'))){
		var labelData = txtString.split('\t');
		printMinorLabel = (labelData[188] != labelData[90]);//location minus 1 since in array
		/** @type {JSFoundSet<db:/stsservoy/bt_labels>} */
		var labelFS = databaseManager.getFoundSet('stsservoy','bt_labels');
		var idx3 = labelFS.newRecord();
		/** @type {JSFoundSet<db:/stsservoy/bt_labels>} */
		var rec = labelFS.getRecord(idx3);
		if (!useRawSettings){
			if (!printMinorLabel){
				rec.bt_printer = printer;
				rec.bt_btwtemplate = btwFile;
			} else {
				rec.bt_printer = printerMinor;
				rec.bt_btwtemplate = btwFileMinor;
			}
		} else {
			rec.bt_printer = printer;
			rec.bt_btwtemplate = btwFile;			
		}
		rec.bt_copies = Math.floor(copies).toString();//"1";//Math.floor(1);
		globals.printedLabels(rec.bt_copies);//set number of labels sent to printer
		rec.bt_print_date = new Date();
		rec.prime_key = rec.bt_label_id;
		for (var idx4 = 0;idx4 < labelData.length;idx4++){
			var fieldNum = idx4*1.0+1;
			var fieldName = 'field_'+Math.floor(fieldNum);
			var fieldData = labelData[idx4].trim();
			if (fieldData){//apparently empty data must be null for BarTender
				rec[fieldName] = fieldData;
			} else {
				rec[fieldName] = null;
			}
		}
		databaseManager.saveData(rec);
	} else {
	/**
	 * check for bartender 2016 or greater
	 * show print status dialog or not t/f
	 * how many duplicate labels
	 * show print dialog t/f
	 * printing labels, please wait message
	 * set printed flags
	 * enable printed status on table, render code
	 * control print, won't enable unless printer and btw selected
	 * create database label
	 */
		if (useServer == false && scopes.printer.barTender_installed && formName != 'rf_mobile_view'){
			if (!plugins.servoyguy_servoycom.isJACOBInstalled()) {
				globals.errorDialog('952');
				application.output('RM COM: JACOB NOT INSTALLED');
				//plugins.dialogs.showErrorDialog( "Error", "Jacob is not installed.");
				scopes.jobs.warningsX();
				return;
			}
			scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
			var com = plugins.servoyguy_servoycom.getNewClientJSCOM("BarTender.Application");
			if (!com || !com.isJACOBLoaded()) {
				globals.errorDialog('953');
				application.output('RM COM: Error Loading COM');
				plugins.dialogs.showErrorDialog( "Error", "Error loading COM: \n" + plugins.servoyguy_servoycom.getLastError());
				return;
			}
			scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
			com.put("Visible","true");//change to false bartender
			var formats = com.getChildJSCOM("Formats");
			if (!formats){
				plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1225'),i18n.getI18NMessage('1225')+plugins.servoyguy_servoycom.getLastError());//could not open BarTender
				scopes.jobs.warningsX();
				application.output('RM COM: No Formats Found');
				return;
			}
			if (printMinorLabel){
				var format = formats.getChildJSCOM("Open","",[btwFileMinor,false,printer]);
			} else {
				format = formats.getChildJSCOM("Open","",[btwFile,false,printer]);
			}
			if (!format){
				plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1225'),i18n.getI18NMessage('1225')+plugins.servoyguy_servoycom.getLastError());//could not open BarTender
				application.output('RM COM: No formats format found');
				com.call("Quit",1); // BarTender.BtSaveOptions.btDoNotSaveChanges = 1
				com.release();
				scopes.jobs.warningsX();
				if (1==1){return}
				// check btwfile for existence
				//var btwCheck =  (plugins.file.createFile(btwFile));
				// check empty printer
			}
			//application.output('btw file '+btwFile);
			scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
			var DBs = format.getChildJSCOM("Databases");
			//var otherDB = format.call('Databases');
			//var misc = Packages.com.servoyguy.plugins.servoycom.getInt(1);
			scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
			if (scopes.printer.barTender_2016){
				var db = DBs.getChildJSCOM("GetDatabase","",[1]);
				if (!db){
					//application.output('RM COM: No 2016 DB found');
					//db = DBs.getChildJSCOM("GetDatabase","",["\"Text File 1\""]);
				}
				if (!db){
					//application.output('RM COM: No DB \"Text File 1\" found');
					db = DBs.get('Configuration')+"";
					var regexp = new RegExp(/SelectCommand.*\[(.*)\].*SelectCommand/);
					var regexpAlt = new RegExp(/RecordSet Name="(.*)" Connection/);
					var database = db.match(regexp);
					var databaseAlt = db.match(regexpAlt);
					application.output('RM COM: bartender database '+database+' DB ');
					if (!database){
						plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1266')+plugins.servoyguy_servoycom.getLastError(),i18n.getI18NMessage('1266')+plugins.servoyguy_servoycom.getLastError());//could not open BarTender
						com.call("Quit",1); // BarTender.BtSaveOptions.btDoNotSaveChanges = 1
						com.release();
						scopes.jobs.warningsX();
						return;
					}
					var database2 = database[1];
					application.output('Database used '+database2);
					database2 = database2.trim();
					var databaseAlt2 = databaseAlt[1];
					if (database2){
						db = DBs.getChildJSCOM('GetDatabase',[database2]);
						if (!db){
							db = DBs.getChildJSCOM('GetDatabase',[databaseAlt2]);
							application.output('now using alternate database... '+databaseAlt2);
						}
					} else {
						application.output('RM COM: No DB '+database2+' found');					
					}
				}
			} //else {
			//	db = DBs.getChildJSCOM("GetDatabase","",["Text File 1"]);
			//}
			if (!db){
				plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1266')+plugins.servoyguy_servoycom.getLastError(),i18n.getI18NMessage('1266')+plugins.servoyguy_servoycom.getLastError());//could not open BarTender
				com.call("Quit",1); // BarTender.BtSaveOptions.btDoNotSaveChanges = 1
				com.release();
				scopes.jobs.warningsX();
				return;
			}
			//var setDb = db.getChildJSCOM("TextFile");
			// Need db.TextFile.FileName = "c:\\barcodelabel.txt"
			scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
			var oleDb = db.getChildJSCOM("TextFile");
			scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
			if (debug){application.output('random file name to bartender '+randFileName)}
			oleDb.put("FileName",randFileName);
			/**
			var db = DBs.getChildJSCOM("GetDatabase","",["PostgreSQL35W"]);
			var ole = db.getChildJSCOM("ODBC");
			var sql = 'SELECT "bc_id", "bc_text1" FROM "public"."barcode_test" WHERE bc_id <> \'*EX0B022680*\'';
			ole.put("SQLStatement",sql);
			ole.put("UserId","DBA");
			application.output("sql "+ole.get("SQLStatement"));*/
			//format.put("Printer","Bullzip PDF Printer");
			format.getChildJSCOM("PrintOut","",["false","true"]);// open bartender, show print dialog
			//formatsFile.call("ExportToClipboard",0,0);
			//var comItems = formats.get("NamedSubStrings");
			//var comMaterial = comItems.get('Item("Material")');
			//com.getChildJSCOM("Quit","BarTender.Application",[1]);
			//com.getChildJSCOM("Quit","BarTender.Application",[1]);
			//com.getChildJSCOM("Quit","BarTender.Application",[1]);
			scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
			if (formName != 'rf_mobile_view'){
				/** var reply = plugins.dialogs.showQuestionDialog(i18n.getI18NMessage('sts.txt.question'),
					i18n.getI18NMessage('sts.txt.question.delete.barcode.file'),
					[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')]);
				if (reply == i18n.getI18NMessage('sts.btn.yes')){ */
				
//DO NOT DELETE YET					var status = plugins.file.deleteFile(randFileName);
				while (com.call('isPrinting') == true){
					application.output('still printing');
					application.sleep(1000);
				}
				com.call("Quit",1); // BarTender.BtSaveOptions.btDoNotSaveChanges = 1
				com.release();//release bartender every time since the program closes each time
				var status = false;// plugins.file.deleteFile(randFileName); delete bartender temp file
				application.output('Deleted print barcode label Name '+status);
				/**	if (!status){//1223
						plugins.dialogs.showErrorDialog('1223',i18n.getI18NMessage('1223'));
					}
				} */
			} else {
				//status = plugins.file.deleteFile(randFileName);
			}
		}
	}
	if (event.getFormName() == 'rf_mobile_view'){return}//there are no serial numbers to save in id_serial_numbers
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.where.add(q.columns.id_serial_number_id.isin(globals.barcodePrintedArray));
	q.result.add(q.columns.id_serial_number_id);
	var Q = databaseManager.getFoundSet(q);
	Q.loadRecords();
	//globals.printedLabels(Q.getSize());
	var Qupdate = databaseManager.getFoundSetUpdater(Q);
	Qupdate.setColumn('printed',1);
	Qupdate.performUpdate();
	
	scopes.jobs.warningsX();
}
/**
 * @param {String} tabContents  "string indicating field from which to grab information
 * @param {Object} tabSpec //// fieldtype="Character|Date|Logical|Numeric",fieldsize="x|x.x"
 *
 * @properties={typeid:24,uuid:"86A68CCA-D101-4D62-886B-8F9197D80CD0"}
 * @AllowToRunInFind
 */
function tabContentFormat(tabContents,tabSpec){
	if (tabContents == ""){return tabContents}
	if (tabSpec.db_field.search('UNUSED') != -1){return ''}
	//{num: 0, name:'', size: 0,dbcol:'',dbtype:'',dbsize:0}
	/** @type {Array} */
	var tabType = tabSpec.field_type; // content type WAS dbtype 
	if (tabSpec.field_name.search('TIME') != -1){
		tabType = 'Time';
	}
	/** @type {Array} */
	var spec = tabSpec.size.split("."); //length or number.decimal
	var length = spec[0];	// decimal included?
	//var expectedData = tabSpec[2]; // incoming expected Data name field for Character, Numeric, Logical, Date
	var decimal = 0;
	if (spec.length == 2){
		decimal = spec[1];
	}
	///var contentLength = tabContents.length;
	var blanks = "                                                                                                  ";
	var smallZeroes = "00";
	var a = tabContents;
	var b = "";
	switch (tabType) {
		case 'Numeric':
			if (decimal != 0){
					var nums = tabContents.toString().split(".");
					var zeroes = "0000000000000000";
					a = blanks+nums[0];
					if (!nums[1]){
						b = zeroes;
					} else {
						b = nums[1]+zeroes;
					}
					b = b.substr(0,(decimal*1+1)); // get decimal, and round
					b = Math.round(b/10)+zeroes;
					b = b.substr(0,decimal);
					b = "."+b;
			}		
			break;
		case 'Date':
			/** @type {Date} */
			var myDate = a;
			var month = myDate.getMonth()+1;
			month = smallZeroes+month;
			var dom = smallZeroes+myDate.getDate();
			var year = myDate.getFullYear().toString().substr(2);
			a = month.substring(month.length-2,month.length)+'/'+dom.substring(dom.length-2,dom.length)+'/'+year;
			myDate = Date.parse(myDate);
			if (!myDate){return ''}
			//myDate2 = myDate.clone().add(6).days();
			//application.ouput('in date '+myDate+" changed + 6 days "+myDate.add(6).days());
			//if (application.isInDeveloper()){application.output('date is '+tabContents+ 'expected Data '+tabSpec+" +-+-+-+ "+expectedData+" dayts "+myDate2)}
			///** @type {Date} */
			///var dated = a;
			//if (expectedData && expectedData.search("TIME") == -1){
				//a ="";
				//var day = Date.parse(tabContents);
				//a = (myDate.getMonth()+1)+"/"+myDate.getDate()+"/"+myDate.getFullYear().toString().substr(2);
				//if (application.isInDeveloper()){application.output('data converted is '+a);}
			//} else {
			//	a= day.getHours()+":"+day.getMinutes();
			//	if (application.isInDeveloper()){application.output('time is '+a);}
			//}
			
			break;
		case 'Time':
			
			/** @type {Date} */
			var myDate = a;
			//a = myDate.getMonth()+1+'/'+myDate.getDate()+'/'+myDate.getFullYear().toString().substr(2);;
			var hours = smallZeroes+myDate.getHours()+"";
			var mins = smallZeroes+myDate.getMinutes()+"";
			var secs = smallZeroes+myDate.getSeconds()+"";
			a = hours.substring(hours.length-2,hours.length)+':'+mins.substring(mins.length-2,mins.length)+':'+secs.substring(secs.length-2,secs.length);
			break;
		case 'Readable':
			//a = scopes.jobs.fracToDec(a);//readable is always Imperial
			a = globals.ftDecToString('FEET',a,13,'ALL');
			break;
		case 'Logical':
			a = (a || a == null || a == 0) ? 'T' : 'F';
			break;
		case 'Character':
			break;
		default:
	}
	///a = blanks+a;
	//a = a.substr(a.length-length);
	a = a.toString().trim();
	return a;//a+b;
}
/**
 * @properties={typeid:24,uuid:"A0BDA211-2B39-4739-87CC-E244592AA285"}
 */
function getNonRecordValues(currentRecord,barTenderField){
	application.output(barTenderField);
	var newVal = "";
	switch (barTenderField){
		case 'BCCUST':// fld 3
			newVal = currentRecord.barcode_customer_name;
			break;
		case 'BCFORM':// fld 4
			newVal = currentRecord.barcode_format_customer_number
			break;
		case 'BCINCLDPFX':// fld 5
			newVal = currentRecord.bc_include_prefix;
			break;
		case 'BCJOBSTART':// fld 6
			newVal = currentRecord.bc_job_start;
			break;
		case 'BCPREFIX':// fld 7
			newVal = currentRecord.bc_prefix;
			break;
		case 'BCTITLE':
			null;
			break;
		case 'BOLOUT':// fld 9
			newVal = currentRecord.ship_bol_out;
			break;
		case 'CARRNUM':// fld 10
			newVal = currentRecord.ship_carrier_number;
			break;
		case 'COMMENTS':// fld 11
			newVal = currentRecord.ship_load_comment;
			break;
		case 'COWCODE':
			null;
			break;
		case 'CTRLNUM':
			null;
			break;
		case 'CUSCITY':// fld 14
			newVal = currentRecord.customer_city;
			break;
		case 'CUSFAX':// fld 15
			newVal = currentRecord.job_customer_fax;
			break;
		case 'CUSFIRST':// fld 16
			newVal = currentRecord.job_customer_rep;
			break;
		case 'CUSLAST':
			null;
			break;
		case 'CUSMIDDLE':
			null;
			break;
		case 'CUSNAME':// fld 19
			newVal = currentRecord.job_customer_name;
			break;
		case 'CUSPHONE':// fld 20
			newVal = currentRecord.job_customer_phone;
			break;
		case 'CUSSTATE':// fld 21
			newVal = currentRecord.customer_state;
			break;
		case 'CUSSTREET'://fld 22
			newVal = currentRecord.cust_addr_line1;
			break;
		case 'CUSTNUM':// fld 4
			newVal = currentRecord.barcode_customer_number;
			break;
		case 'CUSTPO':
			null;
			break;
		case 'CUSTSO':
			null;
			break;
		case 'CUSZIP':// fld 26
			newVal = currentRecord.cust_zip_code;
			break;
		case 'DESCR2':
			null;
			break;
		case 'EDITTIME':
			null;
			break;
		case 'ENGXTIME':// fld 30
			newVal = currentRecord.ship_sent_engineer;
			break;
		case 'FABINVOICE':// fld 31
			newVal = currentRecord.ship_fabricator_invoice;
			break;
		case 'FABSHOP':// fld 32
		case 'PLANT':
			newVal = currentRecord.pcmk_fab_shop;
			break;
		case 'FABXTIME':// fld 33
			newVal = currentRecord.ship_sent_fabricator;
			break;
		case 'FIREXTIME':// fld 34
			newVal = currentRecord.ship_sent_fireproofer;
			break;
		case 'GALVXTIME':// fld 35
			newVal = currentRecord.ship_sent_galvinizer;
			break;
		case 'HEAT':// fld 37
			null;
			break;
		case 'IDFORMAT':
			null;
			break;
		case 'IDLOCATION':
			null;
			break;
		case 'IDSTATUS':
			null;
			break;
		case 'INVOICE':// fld 42
			newVal = currentRecord.ship_load_invoice;
			break;
		case 'JOBCAREOF':
			null;
			break;
		case 'JOBID':
			null;
			break;
		case 'JOBLOCAT':
			null;
			break;
		case 'JOBNUM':
			null;
			break;
		case 'JOBSHIPTO':
			null;
			break;
		case 'JOBSTRUCT':
			null;
			break;
		case 'JOBTITLE':
			null;
			break;
		case 'JOIDFORMAT':
			null;
			break;
		case 'JOLINE1NUM':
			null;
			break;
		case 'JOLINE1STR':// fld 52
			newVal = currentRecord.barcode_format_customer_name;
			break;
		case 'JOLINE2NUM':
			null;
			break;
		case 'JOLINE2STR':
			null;
			break;
		case 'LINE0FLD':
			null;
			break;
		case 'LINE0PRMPT':
			null;
			break;
		case 'LINE1NUM':
			null;
			break;
		case 'LINE1STR':
			null;
			break;
		case 'LINE2NUM':
			null;
			break;
		case 'LINE2STR':
			null;
			break;
		case 'LINE3FLD':
			null;
			break;
		case 'LINE3PRMPT':
			null;
			break;
		case 'LINE4FLD':
			null;
			break;
		case 'LINE4PRMPT':
			null;
			break;
		case 'LINE5FLD':
			null;
			break;
		case 'LINE5PRMPT':
			null;
			break;
		case 'LINE6FLD':
			null;
			break;
		case 'LINE6PRMPT':
			null;
			break;
		case 'LINE7FLD':
			null;
			break;
		case 'LINE7PRMPT':
			null;
			break;
		case 'LINE8FLD':
			newVal = currentRecord.pm_item_length_char;
			break;
		case 'LINE8PRMPT':
			null;
			break;
		case 'LINE9FLD':
			null;
			break;
		case 'LINE9PRMPT':
			null;
			break;
		case 'LINEAFLD':
			null;
			break;
		case 'LINEAPRMPT':
			null;
			break;
		case 'LINEBFLD':
			null;
			break;
		case 'LINEBPRMPT':
			null;
			break;
		case 'LOADNUM':// fld 79
			newVal = currentRecord.ship_load_number;
			break;
		case 'LODCAREOF':// fld 80
			newVal = currentRecord.ship_load_care_of;
			break;
		case 'LODPO':// fld 81
			newVal = currentRecord.ship_load_po;
			break;
		case 'LODRELEASE':// fld 82
			newVal = currentRecord.ship_load_release;
			break;
		case 'LODSHIPTO':// fld 83
			newVal = currentRecord.ship_customer_number;
			break;
		case 'LOT':
			null;
			break;
		case 'MRR':
			null;
			break;
		case 'ORIGEMPL':// fld 86
			newVal = currentRecord.job_original_employee;
			break;
		case 'OTHRXTIME':
			null;
			break;
		case 'PANTXTIME':
			null;
			break;
		case 'PCCOLOR':
			null;
			break;
		case 'PCCOWCODE':
			null;
			break;
		case 'PCRELEASE':
			null;
			break;
		case 'PCUOM':
			null;
			break;
		case 'PORELEASE':
			null;
			break;
		case 'PRODTYPE':
			null;
			break;
		case 'PROJYEAR':
			null;
			break;
		case 'RAWMATLID':
			null;
			break;
		case 'RECACTION':
			null;
			break;
		case 'RECVLOAD':// fld 99
			newVal = currentRecord.recv_load_number;
			break;
		case 'RECVTIME':// fld 100
			newVal = currentRecord.recv_load_date;
			break;
		case 'REMAILTIME':
			null;
			break;
		case 'REVLEVEL':
			null;
			break;
		case 'SEMAILTIME':
			null;
			break;
		case 'SHIPLOAD':// fld 107
			newVal = currentRecord.ship_load_date;
			break;
		case 'SHIPTAG':
			null;
			break;
		case 'SHIPTIME':// fld 109
			newVal = currentRecord.ship_load_time;
			break;
		case 'SITEXTIME':
			null;
			break;
		case 'TRAILINFO':// fld 111
			newVal = currentRecord.ship_load_trailer_info;
			break;
		case 'EDITDATE':
			null;
			break;
		case 'ENGXDATE':
			null;
			break;
		case 'FABXDATE':
			null;
			break;
		case 'FIREXDATE':
			null;
			break;
		case 'GALVXDATE':
			null;
			break;
		case 'IDCREATED':
			null;
			break;
		case 'OTHRXDATE':
			null;
			break;
		case 'PANTXDATE':
			null;
			break;
		case 'RECVDATE':
			null;
			break;
		case 'REMAILDATE':
			null;
			break;
		case 'REQDSHIP':
			null;
			break;
		case 'SCHDSHIP':
			null;
			break;
		case 'SEMAILDATE':
			null;
			break;
		case 'SHIPDATE':
			null;
			break;
		case 'SITEXDATE':
			null;
			break;
		case 'DELETEID':
			null;
			break;
		case 'LOGICFLAG':
			null;
			break;
		case 'LSOTOLOAD':// fld 130
			newVal = currentRecord.job_so_to_load;
			break;
		case 'METRICJOB':
			null;
			break;
		case 'BCJBSTRT':
			null;
			break;
		case 'BCJOBLGTH':
			null;
			break;
		case 'BCPFXLGTH':
			null;
			break;
		case 'COSTEA':
			null;
			break;
		case 'COWQTY':
			null;
			break;
		case 'FIREPFCF':
			null;
			break;
		case 'INCREMNT':
			null;
			break;
		case 'JOBWT':
			null;
			break;
		case 'LABELBC':
			null;
			break;
		case 'LABELQTY':
			null;
			break;
		case 'LGTNUM':
			newVal = currentRecord.item_length_in;
			break;
		case 'PCUOMDOLL':
			null;
			break;
		case 'QTY2PRINT':
			null;
			break;
		case 'RECVQTY':
			null;
			break;
		case 'RECVWT':// fld 149
			newVal = currentRecord.recv_load_receiving_wt;
			break;
		case 'SHIPQTY':
			null;
			break;
		case 'SHIPWT':// fld 152
			newVal = currentRecord.ship_load_shipped_weight;
			break;
		case 'TOTALWT':// fld 153
			newVal = currentRecord.ship_load_total_weight;
			break;
		case 'WT':
		case 'PARTWT':
			newVal = currentRecord.item_weight_lbs;
			break;
		case 'WIDNUM':
			newVal = currentRecord.item_width_in;
			break;
		case 'RTBW':
			null;
			break;
		case 'RTSW':
			null;
			break;
		case 'RTBRANCH':
			null;
			break;
		case 'PTFILLET':
			null;
			break;
		case 'PTBRANCH':
			null;
			break;
		case 'MTFILLET':
			null;
			break;
		case 'MTBRANCH':
			null;
			break;
		case 'LINESPEC':
			null;
			break;
		case 'PREHEAT':
			null;
			break;
		case 'SHOPHYDRO':
			null;
			break;
		case 'FLDHYDRO':
			null;
			break;
		case 'PMI':
			null;
			break;
		case 'PWHT':
			null;
			break;
		case 'DRAWNBY':
			null;
			break;
		case 'CHECKBY':
			null;
			break;
		case 'PAINTSYS':
			null;
			break;
		case 'BHN':
			null;
			break;
		case 'BHNMAX':
			null;
			break;
		case 'LINENBR':
			null;
			break;
		case 'REFDWG':
			null;
			break;
		case 'SKETCH':
			null;
			break;
		case 'PHASE':
			null;
			break;
		case 'BOMCOMMENT':
			null;
			break;
		case 'SHEETPO':
			null;
			break;
		case 'PRIORDATE':
			null;
			break;
		case 'MINORID':
			null;
			break;
		case 'MINORQTY':
			null;
			break;
		case 'BOMPARTNUM':
			null;
			break;
		case 'BOMHEAT':
			null;
			break;
		case 'BOMGUID':
			null;
			break;
		case 'BOMGRADE':
			null;
			break;
		case 'BOMSEQNUM':
			null;
			break;
		case 'BOMITEMNUM':
			null;
			break;
		case 'BOMREMARKS':
			null;
			break;
		case 'PARENTPCMK':
			null;
			break;
		case 'BOMQTY':
			null;
			break;
		case 'BOMLGTNUM':
			null;
			break;
		case 'BOMWIDNUM':
			null;
			break;
		case 'BOMITEMWT':
			null;
			break;
		case 'ERECTDWG':
			null;
			break;
		case 'BUNDLEID':
			null;
			break;
		case 'DETAILMIN':
			null;
			break;
		case 'FABMIN':
			null;
			break;
		case 'HANDLMIN':
			null;
			break;
		case 'PAINTMIN':
			null;
			break;
		case 'SAWMIN':
			null;
			break;
		case 'WELDMIN':
			null;
			break;
		case 'RULECODE':
			null;
			break;
		case 'FT_PKGNO':
			null;
			break;
		case 'PCPHASE':
			null;
			break;
		case 'PARENTCOPY':
			null;
			break;
		case 'CAMBER':
			null;
			break;
		case 'BOMMATL':
			null;
			break;
		case 'BOMSIZE':
			null;
			break;
		case 'BOMRATING':
			null;
			break;
		case 'MATLCLASS':
			null;
			break;
		case 'BOMENDPREP':// fld 213
			newVal = currentRecord.bom_end_condition;
			break;
		case 'GUID':
			null;
			break;
		case 'BOMFINISH':
			null;
			break;
		case 'PRIORITY':
			null;
			break;
		case 'BOMLGTCHAR':
			null;
			break;
		case 'PARENTID':// fld 207
			newVal = currentRecord.bc_parent_id_serial;
			break;
		case 'LABELFMT':
			newVal = currentRecord.LABELFMT;
			break;
		default:

	}
	return newVal;
}
/**
 * @properties={typeid:24,uuid:"1737A0EF-1FE3-498B-A8B7-404992F069CA"}
 */
function getAddressInfo(){
	
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"16259E66-00F8-4F06-895C-218D6270D5D9"}
 * @AllowToRunInFind
 */
function onDataChangePathEntry(oldValue, newValue, event) {
	var form = event.getFormName();
	var el = event.getElementName();
	var dataProv = forms[form].elements[el].getDataProviderID().split('.')[2];
	var defaultLoc = plugins.file.getDefaultUploadLocation();
	try{
		plugins.file.convertToRemoteJSFile(newValue);//use this to ensure entry is in correct format "/dirName"
	} catch (e){
		scopes['prefs'][dataProv] = oldValue;
		return
	}
	
	var dirNames = newValue.split('/');
	var parentDir = '/';
	var createDir = false;
	for (var index = 1;index < dirNames.length;index++){
		var contentNames = [];
		var parentDirObj = plugins.file.convertToRemoteJSFile(parentDir);
		var dirContents = plugins.file.getRemoteFolderContents(parentDirObj);
		for (var idx1 = 0;idx1 < dirContents.length;idx1++){contentNames.push(dirContents[idx1].getName().replace('/',''))}
		if (contentNames.indexOf(dirNames[index]) == -1){
			createDir = true;
			break;
		}
		parentDir += '/'+dirNames[index];
	}
	if (createDir){
		var response = globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('sts.txt.create.subdirectory'),i18n.getI18NMessage('sts.txt.create.subdirectory'),[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')]);
		if (response == i18n.getI18NMessage('sts.btn.no')){
			scopes['prefs'][dataProv] = oldValue;
			return;
		}
	}
	var fileName = 'STSTestWriteFile.txt';
	application.output('default server directory '+plugins.file.getDefaultUploadLocation());
	var tempDir = plugins.file.getHomeFolder();
	application.output('tempDir '+tempDir);
	var fileNamePath = tempDir.getAbsolutePath()+'/'+fileName;//local directory
	application.output('local directory '+fileNamePath);
	var fileObj = plugins.file.createFile(fileNamePath);
	application.output('fileObj '+fileObj);
	var success = fileObj.createNewFile();
	application.output('create new File success '+success);
	var consolePath = newValue+'/'+fileName;//remote directory under defaultLocation
	application.output('remote directory under defaultlocation '+ consolePath);
	plugins.file.streamFilesToServer(fileObj,consolePath);
	application.output('stream file to server: fileObj '+fileObj+' consolePath '+consolePath);
	success = fileObj.deleteFile();
	application.output('success source file deletion '+success);
	var item = plugins.file.convertToRemoteJSFile(consolePath);
	application.output('convert to remote js file '+consolePath+' JSFile '+item);
	if (item){
		application.output('remote file copy exists '+item.exists());
	} else {
		application.output('remote file copy DNE.');
	}
	if (item && item.exists()){
		//item.deleteFile();
	}
	setPrefsDirty(event,'prefs');
	forms.preferences_printer.prefsChanged.push(forms[form].elements[el].getDataProviderID());//20180109 update prefs on button inop from button change

}
/**
 * @properties={typeid:24,uuid:"60760702-97A9-4A08-BC84-5CD4A262EAF4"}
 */
function getLabeLaseLabelFormats(){
	var reportsPath = scopes.prefs.reportpath;
	var labelList = [];
	var suffix = ['.itl','.itlx'];
	var path = plugins.file.getDefaultUploadLocation()+reportsPath;
	path = path.replace(/\/+/g,'\\').replace('.','');
	application.output('REM label path '+path);
	var formatFiles = plugins.file.getFolderContents(path.replace(/\/+/g,'/'),suffix);
	//var btwFiles = plugins.file.getFolderContents(reportsPath,suffix);
	labelList.push('<NONE>');
	for (var index = 0;index < formatFiles.length;index++){
		labelList.push(formatFiles[index].getName());
	}
	application.setValueListItems('stsvl_labelase_formats',labelList);
}

/**
 * @param {JSEvent} event
 * @param {String} updateValue
 * @param prefsType
 *
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F4A66DAB-3398-4103-8DC0-856657597120"}
 */
function onActionFileOpenDialogLocal(event,updateValue,prefsType) {	//20180820 created
	var baseDirObj = (scopes.printer.local_temp_path) ? scopes.printer.local_temp_path : '';
	if (updateValue.search('exe') != -1){
		var dirs = plugins.file.showFileOpenDialog(1,baseDirObj,false,new Array('EXE','exe'));
		if (!dirs){return}
		baseDirObj = scopes.prefs[updateValue];
		var exepath = dirs.getAbsolutePath();
		if (updateValue == 'foxfireexe'){
			if (exepath.search('ffstart9.exe') == -1){return}
		}
		scopes.prefs[updateValue] = exepath.replace('\\ffstart9.exe','');
		setPrefsDirty(event,prefsType);
		scopes.prefs[updateValue] = exepath;
		forms.preferences_printer.prefsChanged.push(updateValue);
		return;
	} else {
		var dirs = plugins.file.showDirectorySelectDialog(baseDirObj);
	}
	if (!dirs){return}
	var intendedDir = dirs.getAbsolutePath();
	scopes.printer.userTempPath = intendedDir;
	setPrefsDirty(event,prefsType);
	forms.preferences_printer.prefsChanged.push(updateValue);//20180109 update prefs on button inop from button change

}
/**
 * @properties={typeid:24,uuid:"C3FBC68F-7433-4A8F-BA2B-5C4C8DAA94FC"}
 */
function setMissingPrefs(){
	// local document paths
	prefsChangedOutside = [];
	function setEmptyPrefs(){
		if (!scopes.prefs.reportpath) {scopes.prefs.reportpath = '.\\'} 
		if (!scopes.prefs.datapath) {scopes.prefs.datapath = '.\\'} 
		if (!scopes.prefs.importpath) {scopes.prefs.importpath = '.\\'} 
		if (!scopes.prefs.datapath) {scopes.prefs.datapath = '.\\'} 
		if (!scopes.prefs.foxfirepath) {scopes.prefs.foxfirepath = '.\\'} 
		if (!scopes.prefs.temppath) {scopes.prefs.temppath = '.\\'} 
		if (!scopes.prefs.mtrpath) {scopes.prefs.mtrpath = '.\\'} 
		if (!scopes.prefs.wh32datapath) {scopes.prefs.wh32datapath = '.\\'} 
	}
	if (true || scopes.prefs.reportpath == ''){
		//var uploadLoc = plugins.file.getDefaultUploadLocation();
		var dirs = plugins.file.getRemoteFolderContents(plugins.file.convertToRemoteJSFile('/'),null,2);
		/** @type plugins.file.JSFile */
		var dir;var dirList = [];
		for (var index = 0;index < dirs.length;index++){
			dirList.push(dirs[index].getName());
		}
		for (index = 0;index < dirs.length;index++){
			dir = dirs[index];
			if (dir.isDirectory()){
				var dirName = dir.getName();
				var dir2 = dirName.toUpperCase();
				dirName = '.\\'+dirName;
				switch (dir2){
					case 'REPORTS':
					case 'REPORT':
						if (scopes.prefs.reportpath){break}
						scopes.prefs.reportpath = dirName;
						prefsChangedOutside.push('reportpath');
						break;
					case 'IMPORT':
					case 'IMPORTS':
					if (scopes.prefs.importpath){break}
						scopes.prefs.importpath = dirName;
						prefsChangedOutside.push('importpath');
						break;
					case 'FOXFIRE':
						if (scopes.prefs.foxfirepath){break}
						scopes.prefs.foxfirepath = dirName;
						prefsChangedOutside.push('foxfirepath');
						break;
					case 'EXPORT':
					case 'EXPORTS':
					case 'XPORT':
					case 'XPORTS':
						if (scopes.prefs.xportpath){break}
						scopes.prefs.xportpath = dirName;
						prefsChangedOutside.push('xportpath');
					break;
					case 'MTR':
					case 'MTRPDF':
						if (scopes.prefs.mtrpath){break}
						scopes.prefs.mtrpath = dirName;
						prefsChangedOutside.push('mtrpath');
					break;
					case 'WH32':
					case 'WAREHOUSE':
					case 'WAREHOUSE32':
						if (scopes.prefs.wh32datapath){break}
						scopes.prefs.wh32datapath = dirName;
						prefsChangedOutside.push('wh32datapath');
						break;
					case 'TEMP':
					case 'TMP':
						if (scopes.prefs.temppath){break}
						scopes.prefs.temppath = dirName;
						prefsChangedOutside.push('temppath');
						break;
					default:
				}
			}
		}
		setEmptyPrefs();
		//application.output('RM prefschangedoutside '+prefsChangedOutside);
		//if (prefsChangedOutside && prefsChangedOutside.length > 0){onActionUpdatePrefs(null);}
	}
}
/**
 * @properties={typeid:24,uuid:"6B9C2ED7-40D7-419C-92C2-DE4FDD2570E7"}
 */
function loadArrays(){
	var labelFieldsTmp = 'AREA,BATCH,BCCUST,BCFORM,BCINCLDPFX,BCJOBSTART,BCPREFIX,BCTITLE,BOLOUT,CARRNUM,\
		COMMENTS,COWCODE,CTRLNUM,CUSCITY,CUSFAX,CUSFIRST,CUSLAST,CUSMIDDLE,CUSNAME,CUSPHONE,CUSSTATE,CUSSTREET,\
		CUSTNUM,CUSTPO,CUSTSO,CUSZIP,DESCR1,DESCR2,EDITTIME,ENGXTIME,FABINVOICE,FABSHOP,FABXTIME,FIREXTIME,\
		GALVXTIME,GRADE,HEAT,ID,IDFORMAT,IDLOCATION,IDSTATUS,INVOICE,JOBCAREOF,JOBID,JOBLOCAT,JOBNUM,JOBSHIPTO,\
		JOBSTRUCT,JOBTITLE,JOIDFORMAT,JOLINE1NUM,JOLINE1STR,JOLINE2NUM,JOLINE2STR,LINE0FLD,LINE0PRMPT,LINE1NUM,\
		LINE1STR,LINE2NUM,LINE2STR,LINE3FLD,LINE3PRMPT,LINE4FLD,LINE4PRMPT,LINE5FLD,LINE5PRMPT,LINE6FLD,\
		LINE6PRMPT,LINE7FLD,LINE7PRMPT,LINE8FLD,LINE8PRMPT,LINE9FLD,LINE9PRMPT,LINEAFLD,LINEAPRMPT,LINEBFLD,\
		LINEBPRMPT,LOADNUM,LODCAREOF,LODPO,LODRELEASE,LODSHIPTO,LOT,MRR,ORIGEMPL,OTHRXTIME,PANTXTIME,PCCOLOR,\
		PCCOWCODE,PCMARK,PCRELEASE,PCUOM,PORELEASE,PRODTYPE,PROJYEAR,RAWMATLID,RECACTION,RECVLOAD,RECVTIME,\
		REMAILTIME,REVLEVEL,ROUTECODE,SEMAILTIME,SEQNUM,SHEETNUM,SHIPLOAD,SHIPTAG,SHIPTIME,SITEXTIME,TRAILINFO,\
		EDITDATE,ENGXDATE,FABXDATE,FIREXDATE,GALVXDATE,IDCREATED,OTHRXDATE,PANTXDATE,RECVDATE,REMAILDATE,REQDSHIP,\
		SCHDSHIP,SEMAILDATE,SHIPDATE,SITEXDATE,DELETEID,LOGICFLAG,LPRINT,LSOTOLOAD,METRICJOB,BCJBSTRT,BCJOBLGTH,\
		BCPFXLGTH,COSTEA,COWQTY,FIREPFCF,INCREMNT,ITEMWT,ITEMWTKG,JOBWT,LABELBC,LABELQTY,LGTNUM,ORIGQTY,PCUOMDOLL,\
		QTY2PRINT,RECVQTY,RECVWT,SEQQTY,SHIPQTY,SHIPWT,TOTALWT,WIDNUM,RTBW,RTSW,RTBRANCH,PTFILLET,PTBRANCH,\
		MTFILLET,MTBRANCH,LINESPEC,PREHEAT,SHOPHYDRO,FLDHYDRO,PMI,PWHT,DRAWNBY,CHECKBY,PAINTSYS,BHN,BHNMAX,LINENBR,\
		REFDWG,SKETCH,PHASE,BOMCOMMENT,SHEETPO,PRIORDATE,MINORID,MINORQTY,BOMPARTNUM,BOMHEAT,BOMGUID,BOMGRADE,\
		BOMSEQNUM,BOMITEMNUM,BOMREMARKS,PARENTPCMK,BOMQTY,BOMLGTNUM,BOMWIDNUM,BOMITEMWT,ERECTDWG,BUNDLEID,FINISH,\
		DETAILMIN,FABMIN,HANDLMIN,PAINTMIN,SAWMIN,WELDMIN,RULECODE,FT_PKGNO,PCPHASE,PARENTCOPY,PARENTID,CAMBER,\
		BOMMATL,BOMSIZE,BOMRATING,MATLCLASS,BOMENDPREP,GUID,BOMFINISH,PRIORITY,BOMLGTCHAR';

	var defaultTableColumnsTmp = 'selection,job_number,bc_id_serial_ number,if_original_quantity,job_create_date,\
		sq_sequence_number,lt_lot_number,sh_sheet_number,pm_pcmk_qty,pm_parent_piecemark,pm_piecemark,pm_material,\
		pm_finish,pm_grade,rt_route_code,pm_item_length_in,pm_item_lemgth_char,pm_item_weight,pm_item_length,\
		pm_item_weight_lbs,if_summed_quantity,pm_part_serial,pm_create_date,job_rf_interface,if_id_creation_date,\
		if_edit_date,if_guid_major,if_guid_minor,if_create_date,bc_edit_date,rt_route_description,rt_allow_more_codes,\
		rt_edit_date,pt_association_name,pt_edit_date,barcode_format_customer_name,bc_include_prefix,bc_job_start,\
		bc_prefix,barcode_format_customer_number,job_customer_name,job_customer_number,customer_city,customer_state,\
		cust_addr_line1,cust_zip_code,bc_parent_id_serial';
	labelFields = labelFieldsTmp.split(',');
	defaultTableColumns = defaultTableColumnsTmp.replace(/([ \t]+)/g,'').split(',');
}
/**
 * @properties={typeid:24,uuid:"7864F523-743F-4876-A117-216FC0D36051"}
 */
function getMCPrintScreenNames(){//Print Screen Names
	/**
	 * "RF ASN Receiving"    (prints labels)
"RF Checklist Receive"    (prints labels)
"RF ChklistRecv w/Rem"    (prints labels)
"RF Checklist Status"    (prints labels)
"RF PO Receive W/FT"
"RF Receiving"
"RF Return Receive"
"RF Build Bundles"    (prints labels)
"RF Shipping"
"RF Ship By Seq"
"RF Shipping W/FT ADC"
"RF ShipBySeq W/FT ADC"
"RF Final Ship"
"RF Verify Load"
"RF Move"
"RF Inspections"    (prints labels)
"RF Inspections w/Rev"    (prints labels)
"RF Transactions"    (prints labels)
"RF Transactions w/Rev"    (prints labels)
"RF Time Transactions"
"RF Labor Transaction"
"RF Labor Inspection"
"RF Production W/FT ADC"
"RF Saw"
"RF WTS / STS Saw"    (prints labels)
"RF Cut Cutlist"    (prints labels)
"RF Cut Cutlist2"    (prints labels)
"RF Cut STS Invent"    (prints labels)
"RF TFS Inventory"    (prints labels)
"RF Inventory Move"    (prints labels)
"RF Status"    (prints labels)
"RF Change Weight"
"RF Inventory Status"    (prints labels)
"RF Inventory Audit"    (prints labels)
"RF Invent Audit Sweep"
"RF STS Audit Sweep"
"RF Status W/FT ADC"
"RF Stamping"
"RF Q.C."
"RF Welder/Heat PerWeld"
"RF New Weld Numbers"
"RF Fitters"
"RF Q.C. Weld Numbers"
"RF Build Assembly"
"RF Find PcMarks"
"RF NDE/BHN/PWHT"
"RF Hydro Pkg Nbr"
"RF Task Pkg Progress"
	 x"RF ASN Receiving"    (prints labels)
	 x"RF Checklist Receive"    (prints labels)
	 x"RF ChklistRecv w/Rem"    (prints labels)
	 x"RF Checklist Status"    (prints labels
	 x"RF Build Bundles"    (prints labels)
	 x"RF Inspections"    (prints labels)
	 x"RF Inspections w/Rev"    (prints labels)
	 x"RF Transactions"    (prints labels)
	 x"RF Transactions w/Rev"    (prints labels)	 
	 x"RF WTS / STS Saw"    (prints labels)
	 x"RF Cut Cutlist"    (prints labels)
	 x"RF Cut Cutlist2"    (prints labels)
	 x"RF Cut STS Invent"    (prints labels)
	 x"RF TFS Inventory"    (prints labels)
	 x"RF Inventory Move"    (prints labels)
	 x"RF Status"    (prints labels)
	 x"RF Inventory Status"    (prints labels)
	 x"RF Inventory Audit"    (prints labels)
	 *
	 */
	// removed 	 'sts.mobile.cut.cutlist2', as it is a later but duplicated, so unnecessary
	var mobilePrintViews = globals.mobilePrintViews.slice(0);
	var mobileViews = [];
	for (var idx = 0;idx < mobilePrintViews.length;idx++){
		var viewName = mobilePrintViews[idx];
		var i18nStr = i18n.getI18NMessage(viewName).replace('\'','');
		mobileViews.push(i18nStr);
		globals.m.i18nMobilePrintViews[i18nStr] = viewName;
		globals.m.i18nMobilePrintViews[viewName] = i18nStr;
		
	}
	mobileViews.sort();
	application.setValueListItems('stsvl_mc_screen_names',mobileViews);

}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"EF3108AB-C274-42CB-B96C-C786C7524EB5"}
 */
function getUsersWithScreenPrintPerms(event){
	/**
	 * get user association
	 * get other users from assoc
	 * 
	 */
	var form = forms['mc_label_dests'];
	var userID = form.userID.toString();
	var assocID = forms['division_user_detail'].association_uuid.toString();
	var tenantID = globals.session.tenant_uuid;
	var notDeleted = [null,0];
	/** @type {QBSelect<db:/stsservoy/users>} */
	var u = databaseManager.createSelect('db:/stsservoy/users');
	u.result.add(u.columns.user_uuid);
	u.where.add(u.columns.association_uuid.eq(assocID));
	u.where.add(u.columns.tenant_uuid.eq(tenantID));
	u.where.add(u.columns.delete_flag.isin(notDeleted));
	u.where.add(u.columns.user_uuid.not.eq(userID));
	var U = databaseManager.getDataSetByQuery(u,-1);
	var uArray = U.getColumnAsArray(1);
	/** @type {QBSelect<db:/stsservoy/label_destinations>} */
	var q = databaseManager.createSelect('db:/stsservoy/label_destinations');
	q.result.add(q.columns.user_uuid);
	q.result.distinct = true;
	q.groupBy.add(q.columns.user_uuid);
	q.where.add(q.columns.tenant_uuid.eq(tenantID));
	q.where.add(q.columns.delete_flag.isin(notDeleted));
	q.where.add(q.columns.user_uuid.isin(uArray));
	var Q = databaseManager.getDataSetByQuery(q,-1);
	var qArray = Q.getColumnAsArray(1);
	/** @type {QBSelect<db:/stsservoy/users>} */
	var v = databaseManager.createSelect('db:/stsservoy/users');
	v.result.add(v.columns.user_uuid);
	v.result.add(v.columns.user_name);
	v.sort.add(v.columns.user_name.asc);
	v.where.add(v.columns.user_uuid.isin(qArray));
	v.where.add(v.columns.tenant_uuid.eq(tenantID));
	v.where.add(v.columns.association_uuid.eq(assocID));
	var V = databaseManager.getDataSetByQuery(v,-1);
	var uuidUsers = V.getColumnAsArray(1);
	var nameUsers = V.getColumnAsArray(2);
	uuidUsers.unshift('');
	nameUsers.unshift('');
	application.setValueListItems('stsvl_printUsersUuid',nameUsers,uuidUsers);
	
}
/**
 * @properties={typeid:24,uuid:"B7F28ED3-D52E-4252-B86A-B741F71AE3DB"}
 */
function getMCFSScreenNames(){//FabSuite Screen Names
	var fsImportOnly = ['sts.mobile.cut.cutlist.raw'];
	var importOnly = (scopes.prefs.lFabsuiteImportOnly);
	var mobileFSViews = globals.mobileFSViews.slice(0);
	for (var idx = 0;idx < mobileFSViews.length;idx++){
		var viewName = mobileFSViews[idx];
		if (importOnly && fsImportOnly.indexOf(viewName) != -1){continue} 
		var i18nStr = i18n.getI18NMessage(viewName).replace('\'','');
		globals.m.i18nMobileFabsuiteViews[i18nStr] = viewName;
		globals.m.i18nMobileFabsuiteViews[viewName] = i18nStr;
		
	}
}
/**
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"D5D70604-99E7-4830-B3E0-5398DA1D271C"}
 */
function onDataChangeLocalPathEntry(oldValue, newValue, event) {
	if (!(!newValue)){
			
		var fileAndPath = plugins.file.convertToJSFile(newValue);
		var dirSize = plugins.file.getFileSize(fileAndPath);
		var form = forms[event.getFormName()];
		var element = form.elements[event.getElementName()];
		var dataProv = element.getDataProviderID();
		if (dirSize == 0){
			//application.output('error in file size');
			forms[event.getFormName()][dataProv] = oldValue;
			return true;
		}
	}
	setPrefsDirty(event,'prefs');
	forms.preferences_printer.prefsChanged.push(dataProv);//20180109 update prefs on button inop from button change
	return true;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"D0BF4A75-AB74-4CA9-82A1-04E5569E8059"}
 */
function bartenderOpen(event){
	if (!plugins.servoyguy_servoycom.isJACOBInstalled()) {
		globals.errorDialog('952');
		application.output('RM COM: JACOB NOT INSTALLED');
		//plugins.dialogs.showErrorDialog( "Error", "Jacob is not installed.");
		scopes.jobs.warningsX();
		return;
	}
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
	bartenderConnect(event);
	if (!globals.btCom){return false}
	if (!globals.btCom || !globals.btCom.isJACOBLoaded()) {
		globals.errorDialog('953');
		application.output('RM COM: Error Loading COM');
		plugins.dialogs.showErrorDialog( "Error", "Error loading COM: \n" + plugins.servoyguy_servoycom.getLastError());
		return;
	}
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
	if (application.isInDeveloper()){
		globals.btCom.put("Visible","true");//change to false bartender
	} else {
		globals.btCom.put("Visible","false");//change to false bartender		
	}
	return true;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C202C813-F81C-4B28-A9EC-CA35C0ACE413"}
 */
function bartenderClose(event){
	if (globals.btCom){
		globals.btCom.call("Quit",1); // BarTender.BtSaveOptions.btDoNotSaveChanges = 1
		globals.btCom.release();
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"AA6B355F-5B2F-4EC3-A596-490E95783CE9"}
 */
function bartenderConnect(event){
	if (globals.btCom){
		globals.btCom.release();
	}
	globals.btCom = plugins.servoyguy_servoycom.getNewClientJSCOM("BarTender.Application");
}
/**
 * @properties={typeid:24,uuid:"FC92F2E5-B74B-42F5-8E3A-EEF8CB5EEE4A"}
 */
function createBtTableLabelFields(){
	var db = databaseManager.getTable('stsservoy','bt_labels');
	var fields = db.getColumnNames();
	var limit = 254;
	var sqlAddCol = 'ALTER TABLE bt_labels ADD COLUMN NEW_COL_NAME VARCHAR(100);';
	for (var idx = 1;idx <= limit;idx++){
		var columnName = "field_"+idx;
		if (fields.indexOf(columnName) == -1){
			application.output('create Field '+columnName);
			var newSql = sqlAddCol.replace('NEW_COL_NAME',columnName);
			plugins.rawSQL.executeSQL('stsservoy','bt_labels',newSql);
			plugins.rawSQL.flushAllClientsCache('stsservoy','bt_labels');
		} else {
			application.output('skipping field '+columnName)
		}
	}
	
}
/**
 * @properties={typeid:24,uuid:"4ADAE4E5-7CA7-4901-B1D2-3D6D0E637456"}
 */
function getUserDestination(){
	var userUUID = globals.session.loginId;
	var screenName = globals.session.program;
	var screens = [];
	switch (screenName.replace(/\'/g,"")) { //this section adds fields that are to be printed but are NOT screens, revised to remove single quotes from mobile screen name in i18n
		case i18n.getI18NMessage('sts.mobile.cut.cutlist.raw'):
			screens = [i18n.getI18NMessage('sts.mobile.cut.cutlist.raw'),
				i18n.getI18NMessage('sts.mobile.cut.cutlist.raw.sts.id'),
				i18n.getI18NMessage('sts.mobile.cut.cutlist.raw.sts.minorid'),
				i18n.getI18NMessage('sts.mobile.cut.cutlist.raw.sts.minor.print'),
				i18n.getI18NMessage('sts.mobile.cut.cutlist.raw.sts.id.print')
				];
			break;
		case i18n.getI18NMessage('sts.mobile.inspections'):
			screens = [i18n.getI18NMessage('sts.mobile.inspections'),
				i18n.getI18NMessage('sts.mobile.inspections.minor.print')];
			break;
		case i18n.getI18NMessage('sts.mobile.inspections.w.revs'):
			screens = [i18n.getI18NMessage('sts.mobile.inspections.w.revs'),
				i18n.getI18NMessage('sts.mobile.inspections.w.revs.minor.print')];
			break;
		case i18n.getI18NMessage('sts.mobile.status'):
			screens = [i18n.getI18NMessage('sts.mobile.status'),
				i18n.getI18NMessage('sts.mobile.status.minor.print')];
			break;
		case i18n.getI18NMessage('sts.mobile.transactions'):
			screens = [i18n.getI18NMessage('sts.mobile.transactions'),
				i18n.getI18NMessage('sts.mobile.transactions.minor.print')];
			break;
		case i18n.getI18NMessage('sts.mobile.transactions.w.revs'):
			screens = [i18n.getI18NMessage('sts.mobile.transactions.w.revs.minor.print'),
				i18n.getI18NMessage('sts.mobile.transactions.w.revs.minor.print')];
			break;
		default:
			screens = [];
	}
	//application.output('RM Get User Destination user  id: '+userUUID+' Screen: '+screenName);
	var destination = {labelRaw:null, printerRaw:null, labelMajor:null, printerMajor:null, labelMinor:null, printerMinor:null}
	/** @type {QBSelect<db:/stsservoy/label_destinations>} */
	var dest = databaseManager.createSelect('db:/stsservoy/label_destinations');
	dest.where.add(dest.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	dest.where.add(dest.columns.user_uuid.eq(userUUID.toString()));
	if (screens.length != 0){
		dest.where.add(dest.columns.rf_screen_name.isin(screens));
	} else {
		dest.where.add(dest.columns.rf_screen_name.eq(screenName));
	}
	dest.result.add(dest.columns.label_destination_uuid);
	var D = databaseManager.getFoundSet(dest);
	/** @type {JSFoundSet<db:/stsservoy/label_destinations>} */
	var rec = null;var idx = 1;
	if (D.getSize() > 0){
		while (rec = D.getRecord(idx++)){//these print selection are entirely from i18n table. this function returns all destinations for a given screen. bartender print determines which destination is selected
			switch (rec.rf_screen_name) {
				case i18n.getI18NMessage('sts.mobile.cut.cutlist.raw'):
				case i18n.getI18NMessage('sts.mobile.asn.receiving'):
				case i18n.getI18NMessage('sts.mobile.checklist.receive'):
				case i18n.getI18NMessage('sts.mobile.checklist.receive.w.rem'):
				case i18n.getI18NMessage('sts.mobile.checklist.status'):
				case i18n.getI18NMessage('sts.mobile.inventory.audit'):
				case i18n.getI18NMessage('sts.mobile.inventory.audit.sweep'):
				case i18n.getI18NMessage('sts.mobile.inventory.move'):
					destination.printerRaw = rec.printer_name;
					destination.labelRaw = rec.label_template_name;
					break;
				case i18n.getI18NMessage('sts.mobile.cut.cutlist.raw.sts.minorid'):
				case i18n.getI18NMessage('sts.mobile.cut.cutlist.raw.sts.minor.print'):
				case i18n.getI18NMessage('sts.mobile.inspections.minor.print'):
				case i18n.getI18NMessage('sts.mobile.inspections.w.revs.minor.print'):
				case i18n.getI18NMessage('sts.mobile.status.minor.print'):
					destination.labelMinor = rec.label_template_name;
					destination.printerMinor = rec.printer_name;
					break;
				default:
					destination.labelMajor = rec.label_template_name;
					destination.printerMajor = rec.printer_name;
			}
		}
	}
	return destination;
}
/**
 * @param {Boolean} server
 *
 * @properties={typeid:24,uuid:"F50F52A6-1C10-4494-9AAB-1973662F110C"}
 */
function useServerPrinters(server){
	var printers = [];
	if (server){
		var printerList = plugins.UserManager.Server().executeCommand('wmic printer get name');
		var printerArr = printerList.trim().split('\n');
		for (var idx = 1;idx < printerArr.length;idx++){
			printers.push(printerArr[idx].trim());
		}
	} else {
		printers = application.getPrinters();
	}
	//application.output('Printers '+printers)
	printers.sort();
	return printers;
}
/**
 * @param event
 * @param tempDir
 *
 * @properties={typeid:24,uuid:"44977ACA-E2E0-413B-9164-6DB94A113448"}
 * @AllowToRunInFind
 */
function cleanTempDir(event,tempDir){//20190530 globals.checkedForTempFiles
	if (globals.checkedForTempFiles){return}// && !application.isInDeveloper()){return}
	globals.checkedForTempFiles = true;
	if (tempDir.search('temp') == -1 && tempDir.search('tmp') == -1 ){return}
	var currDate = new Date();
	var calcDate = currDate.getTime() - 432000000/5;
	var delDate = new Date(calcDate)
	if (application.isInDeveloper()){application.output('current Date: '+currDate+' Delete Date: '+delDate);}
	var getDir = plugins.file.getFolderContents(tempDir);
	if (!getDir){
		getDir = plugins.file.getRemoteFolderContents(tempDir);
	}
	for (var idx = 0;idx < getDir.length;idx++){
		var fileObj = getDir[idx];
		var fileDate = fileObj.lastModified();
		var deleteFlag = (fileDate < delDate);
		if (application.isInDeveloper()){application.output('File name: '+fileObj.getName()+' last mod: '+fileDate+' delete: '+deleteFlag);}
		if (deleteFlag){
			fileObj.deleteFile();
		}
	}
	//var delDateSql = utils.dateFormat(delDate,'yyyy-MM-dd HH:mm:ss');
	//application.output('del date '+delDateSql)
	/** @type {QBSelect<db:/stsservoy/bt_labels>} */
	var q = databaseManager.createSelect('db:/stsservoy/bt_labels');
	//q.where.add(q.columns..eq(globals.session.tenant_uuid));
	q.where.add(q.columns.bt_print_date.lt(delDate));
	q.result.add(q.columns.bt_print_date);
	q.sort.add(q.columns.bt_print_date.asc);
	var Q = databaseManager.getFoundSet(q);
	if  (Q.getSize() > 0){
		Q.deleteAllRecords();
		/** @type {JSFoundSet<db:/stsservoy/bt_labels>} */
		//var rec = null; idx = 1;
		//while (rec = Q.getRecord(idx++)){
		//	application.output('print date is '+rec.bt_print_date)
		//}
		
	}
}
/**
 * @param recUUID
 * @param printDate
 *
 * @properties={typeid:24,uuid:"45D0EB17-27A6-4CA8-BB52-53592D4CB642"}
 */
function markRecPrinted(recUUID,printDate){
	recUUID = recUUID.toString();
	if (!printDate){printDate = new Date()};
	/** @type {QBSelect<db:/stsservoy/idfiles>} */
	var q = databaseManager.createSelect('db:/stsservoy/idfiles');
	q.where.add(q.columns.idfile_id.eq(recUUID));
	q.result.add(q.columns.idfile_id);
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() > 0){
		/** @type {JSFoundSet<db:/stsservoy/idfiles>} */
		var rec = Q.getRecord(1);
		rec.print_date = printDate;
		rec.lprint = 1;
		databaseManager.saveData(rec);
	}
}