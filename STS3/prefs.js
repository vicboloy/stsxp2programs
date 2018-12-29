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
var rfLoadWt = "";
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
var labels = "1 AREA Character 6 idfiles.id_area 10,\
	2 BATCH Character 3 idfiles.id_batch 15,\
	3 BCCUST Character 16 customers.name 45,\
	4 BCFORM Character 10 jobs.barcode_form ->,\
	5 BCINCLDPFX Character 15 customers.barcode_include_prefix 15,\
	6 BCJOBSTART Character 35 customers.barcode_job_start 35,\
	7 BCPREFIX Character 2 customers.barcode_prefix 2,\
	8 BCTITLE Character 26 UNKNOWN,\
	9 BOLOUT Character 15 loads.bill_of_lading_out 15,\
	10 CARRNUM Character 10 loads.carrier_number 15,\
	11 COMMENTS Character 50 loads.load_comment media-inderminate,\
	12 COWCODE Character 10 piecemarks.cost_of_work_code 10,\
	13 CTRLNUM Character 30 idfiles.control_number 30,\
	14 CUSCITY Character 25 customers.addresses.city 50,\
	15 CUSFAX Character 10 customer.fax 25,\
	16 CUSFIRST Character 15 customer.representative 25,\
	17 CUSLAST Character 15 customer.representative 25,\
	18 CUSMIDDLE Character 15 customer.representative 25,\
	19 CUSNAME Character 30 customers.name 45,\
	20 CUSPHONE Character 10 customers.phone 25,\
	21 CUSSTATE Character 2 customers.addresses.state 2,\
	22 CUSSTREET Character 30 customers.addresses.line1 (.line2) 100 (100),\
	23 CUSTNUM Character 10 customers.customer_number 15,\
	24 CUSTPO Character 20 jobs.customer_po 30,\
	25 CUSTSO Character 10 idfiles.shop_order 20,\
	26 CUSZIP Character 9 customers.addresses.zipcodes.zipcode_id 20,\
	27 DESCR1 Character 30 piecemarks.material 40,\
	28 DESCR2 Character 30 piecemarks.description 40,\
	29 EDITTIME Character 8 idfiles.edit_date DATETIME,\
	30 ENGXTIME Character 8 loads.sent_engineer DATETIME,\
	31 FABINVOICE Character 10 jobs.loads.fabricator.invoice 15,\
	32 FABSHOP Character 5 associations.association_name 50,\
	33 FABXTIME Character 8 loads.sent_fabricator DATETIME,\
	34 FIREXTIME Character 8 loads.sent_fireproofer DATETIME,\
	35 GALVXTIME Character 8 loads.sent_galvinizer DATETIME,\
	36 GRADE Character 10 piecemarks.grade 20,\
	37 HEAT Character 15 heats.heat_number 40,\
	38 ID Character 10 id_serial_numbers.id_serial_number 30,\
	39 IDFORMAT Character 9 UNKNOWN,\
	40 IDLOCATION Character 10 idfiles.id_location 15,\
	41 IDSTATUS Character 10 idfiles.status_description.status_code 15,\
	42 INVOICE Character 10 jobs.loads.invoice 15,\
	43 JOBCAREOF Character 28 jobs.job_care_of 50,\
	44 JOBID Character 10 jobs.job_number 20 *** check max size ***,\
	45 JOBLOCAT Character 28 jobs.job_location 50,\
	46 JOBNUM Character 10 jobs.job_number 20,\
	47 JOBSHIPTO Character 10 jobs.addresses->/addresses/,\
	48 JOBSTRUCT Character 28 jobs.job_structure 50,\
	49 JOBTITLE Character 28 jobs.job_title 50,\
	50 JOIDFORMAT Character 9 UNKNOWN,\
	51 JOLINE1NUM Character 15 *** Manual entry ***,\
	52 JOLINE1STR Character 30 *** Manual entry ***,\
	53 JOLINE2NUM Character 15 *** Manual entry ***,\
	54 JOLINE2STR Character 30 *** Manual entry ***,\
	55 LINE0FLD Character 30 *** Manual entry ***,\
	56 LINE0PRMPT Character 9 *** Manual entry ***,\
	57 LINE1NUM Character 15 *** Manual entry ***,\
	58 LINE1STR Character 26 *** Manual entry ***,\
	59 LINE2NUM Character 15 *** Manual entry ***,\
	60 LINE2STR Character 26 *** Manual entry ***,\
	61 LINE3FLD Character 30 *** Manual entry ***,\
	62 LINE3PRMPT Character 9 *** Manual entry ***,\
	63 LINE4FLD Character 30 *** Manual entry ***,\
	64 LINE4PRMPT Character 9 *** Manual entry ***,\
	65 LINE5FLD Character 30 *** Manual entry ***,\
	66 LINE5PRMPT Character 9 *** Manual entry ***,\
	67 LINE6FLD Character 30 *** Manual entry ***,\
	68 LINE6PRMPT Character 9 *** Manual entry ***,\
	69 LINE7FLD Character 30 *** Manual entry ***,\
	70 LINE7PRMPT Character 9 *** Manual entry ***,\
	71 LINE8FLD Character 30 *** Manual entry ***,\
	72 LINE8PRMPT Character 9 *** Manual entry ***,\
	73 LINE9FLD Character 30 *** Manual entry ***,\
	74 LINE9PRMPT Character 9 *** Manual entry ***,\
	75 LINEAFLD Character 30 *** Manual entry ***,\
	76 LINEAPRMPT Character 9 *** Manual entry ***,\
	77 LINEBFLD Character 30 *** Manual entry ***,\
	78 LINEBPRMPT Character 9 *** Manual entry ***,\
	79 LOADNUM Character 10 loads.load_number 20,\
	80 LODCAREOF Character 28 loads.care_of 30,\
	81 LODPO Character 20 loads.load_po 20,\
	82 LODRELEASE Character 20 loads.load_release 20,\
	83 LODSHIPTO Character 10 loads.ship_to->/addresses/,\
	84 LOT Character 11 lots.lot 15,\
	85 MRR Character 10 idfiles.mrr 15,\
	86 ORIGEMPL Character 5 idfiles.original_employee_uuid->/employees/,\
	87 OTHRXTIME Character 8 loads.sent_other DATETIME,\
	88 PANTXTIME Character 8 loads.sent_paint DATETIME,\
	89 PCCOLOR Character 10 idfiles.piece_color 20,\
	90 PCCOWCODE Character 10 piecemarks.cost_of_work_code 10,\
	91 PCMARK Character 30 piecemarks.piecemark 40,\
	92 PCRELEASE Character 3 idfiles.piece_release 10,\
	93 PCUOM Character 4 piecemarks.unit_of_measure 10 *** is this used ***,\
	94 PORELEASE Character 20 jobs.PO_release 25,\
	95 PRODTYPE Character 3 piecemarks.product_type 10,\
	96 PROJYEAR Character 4 jobs.project_year 0,\
	97 RAWMATLID Character 10 idfiles.raw_material_id 40,\
	98 RECACTION Character 1 UNKNOWN,\
	99 RECVLOAD Character 10 idfiles.received_load_id->//,\
	100 RECVTIME Character 8 loads.receipt_date DATETIME,\
	101 REMAILTIME Character 8 UNKNOWN,\
	102 REVLEVEL Character 6 idfiles.revision_level 10,\
	103 ROUTECODE Character 10 piecemarks.routings.route_code 15,\
	104 SEMAILTIME Character 8 UNKNOWN,\
	105 SEQNUM Character 20 jobs.sequences.sequence_number 30,\
	106 SHEETNUM Character 8 piecemarks.sheets.sheet_number 20,\
	107 SHIPLOAD Character 10 loads.ship_date DATETIME,\
	108 SHIPTAG Character 16 piecemarks.ship_tag 20,\
	109 SHIPTIME Character 8 loads.ship_date DATETIME,\
	110 SITEXTIME Character 8 loads.sent_site DATETIME,\
	111 TRAILINFO Character 20 loads.trailer_information 20,\
	112 EDITDATE Date 8 idfiles.edit_date DATETIME,\
	113 ENGXDATE Date 8 loads.sent_engineer DATETIME,\
	114 FABXDATE Date 8 loads.sent_fabrication DATETIME,\
	115 FIREXDATE Date 8 loads.sent_fireproofer DATETIME,\
	116 GALVXDATE Date 8 loads.send_galvinizer DATETIME,\
	117 IDCREATED Date 8 id_serial_number.edit_date DATETIME,\
	118 OTHRXDATE Date 8 loads.sent_other DATETIME,\
	119 PANTXDATE Date 8 loads.sent_painter DATETIME,\
	120 RECVDATE Date 8 loads.receipt_date DATETIME,\
	121 REMAILDATE Date 8 UNKNOWN,\
	122 REQDSHIP Date 8 UNKNOWN,\
	123 SCHDSHIP Date 8 UNKNOWN,\
	124 SEMAILDATE Date 8 UNKNOWN,\
	125 SHIPDATE Date 8 loads.ship_date DATETIME,\
	126 SITEXDATE Date 8 loads.sent_site DATETIME,\
	127 DELETEID Logical 1 idfiles.deleted_date DATETIME,\
	128 LOGICFLAG Logical 1 idfiles.logic_flag 0,\
	129 LPRINT Logical 1 idfiles.lprint 0,\
	130 LSOTOLOAD Logical 1 customers.lsotoload 0,\
	131 METRICJOB Logical 1 jobs.metric_job,\
	132 BCJBSTRT Numeric 1 customers.barcode_job_start (17) ,\
	133 BCJOBLGTH Numeric 1 customers.barcode_job_length (17),\
	134 BCPFXLGTH Numeric 1 customers.barcode_fixed_length (17),\
	135 COSTEA Numeric 11.4 piecemarks.cost_each (17),\
	136 COWQTY Numeric 10.3 piecemarks.cost_of_work_quantity (17),\
	137 FIREPFCF Numeric 9.2 piecemarks.fireproof_cubic_feet (17),\
	138 INCREMNT Numeric 3 UNKNOWN,\
	139 ITEMWT Numeric 10.3 piecemarks.item_weight_lbs (17),\
	140 ITEMWTKG Numeric 10.3 piecemarks.item_weight (17),\
	141 JOBWT Numeric 11 jobs.job_weight (17),\
	142 LABELBC Numeric 5 *** calc'ed ***,\
	143 LABELQTY Numeric 5 *** calc'ed ***,\
	144 LGTNUM Numeric 11.4 piecemarks.item_length OR item_length_in (17),\
	145 ORIGQTY Numeric 5 idfiles.original_quantity (17),\
	146 PCUOMDOLL Numeric 11.4 piecemarks.piecemark_uom_dollars (17),\
	147 QTY2PRINT Numeric 5 *** calc'ed ***,\
	148 RECVQTY Numeric 5 *** calc'ed ***,\
	149 RECVWT Numeric 10 loads.receiving_weight (17),\
	150 SEQQTY Numeric 5 sequences.sequence_quantity 0,\
	151 SHIPQTY Numeric 5 sequences.quantity 0,\
	152 SHIPWT Numeric 10 loads.shipped_weight 17,\
	153 TOTALWT Numeric 10 loads.total_weight 17,\
	154 WIDNUM Numeric 10.4 piecemarks.item_weight OR item_weight_lbs (17),\
	155 RTBW Character 6 sheets.rtbw 6,\
	156 RTSW Character 6 sheets.rtsw 6,\
	157 RTBRANCH Character 6 sheets.rtbranch 6,\
	158 PTFILLET Character 6 sheets.ptfillet 6,\
	159 PTBRANCH Character 6 sheets.rtbranch 6,\
	160 MTFILLET Character 6 sheets.mtfillet 6,\
	161 MTBRANCH Character 6 sheets.mtbranch 6,\
	162 LINESPEC Character 10 sheets.line_spec 10,\
	163 PREHEAT Character 15 sheets.preheat 15,\
	164 SHOPHYDRO Character 6 sheets.shop_hydro 6,\
	165 FLDHYDRO Character 6 sheets.field_hydro 6,\
	166 PMI Character 6 sheets.pmi 6,\
	167 PWHT Character 6 sheets.pwht 6,\
	168 DRAWNBY Character 5 sheets.drawn_by 5,\
	169 CHECKBY Character 5 sheets.checked_by 5,\
	170 PAINTSYS Character 25 sheets.paint_system 25,\
	171 BHN Character 6 sheets.bhn 6,\
	172 BHNMAX Character 6 sheets.bhn_maximum 6,\
	173 LINENBR Character 30 sheets.line_number 30,\
	174 REFDWG Character 30 sheets.reference_drawing 30,\
	175 SKETCH Character 10 sheets.sketch 10,\
	176 PHASE Character 10 idfiles.piece_phase 15,\
	177 BOMCOMMENT Character 50 sheets.bom_comment MEDIA,\
	178 SHEETPO Character 20 sheets.sheet_po 20,\
	179 PRIORDATE Date 8 sheets.prior_date DATETIME,\
	180 MINORID Character 10 *** piecemarks...idfile...id_serial_numbers.id_serial_number,\
	181 MINORQTY Numeric 5 *** calc'ed ***,\
	182 BOMPARTNUM Character 30 UNKNOWN,\
	183 BOMHEAT Character 15 UNKNOWN,\
	184 BOMGUID Character 40 UNKNOWN,\
	185 BOMGRADE Character 10 UNKNOWN,\
	186 BOMSEQNUM Character 20 UNKNOWN,\
	187 BOMITEMNUM Character 6 UNKNOWN,\
	188 BOMREMARKS Character 20 UNKNOWN,\
	189 PARENTPCMK Character 30 *** piecemarks.parent_piecemark 40,\
	190 BOMQTY Numeric 5 UNKNOWN,\
	191 BOMLGTNUM Numeric 11.4 UNKNOWN,\
	192 BOMWIDNUM Numeric 10.4 UNKNOWN,\
	193 BOMITEMWT Numeric 10.3 UNKNOWN,\
	194 ERECTDWG Character 15 idfiles.erection_drawing 20,\
	195 BUNDLEID Character 10 idfiles.bundle_bc 30,\
	196 FINISH Character 10 piecemarks.finish 30,\
	197 DETAILMIN Numeric 10.4 piecemarks.saw_minutes (17),\
	198 FABMIN Numeric 10.4 piecemarks.fabrication_minutes (17),\
	199 HANDLMIN Numeric 10.4 piecemarks.handling_minutes (17),\
	200 PAINTMIN Numeric 10.4 piecemarks.paint_minutes (17),\
	201 SAWMIN Numeric 10.4 piecemarks.saw_minutes (17),\
	202 WELDMIN Numeric 10.4 piecemarks.weld_minutes (17),\
	203 RULECODE Character 20 piecemarks.rule_code 20,\
	204 FT_PKGNO Integer 4 idfiles.ft_pkgno 0,\
	205 PCPHASE Character 10 idfiles.piece_phase 15,\
	206 PARENTCOPY Numeric 4 UNKNOWN,\
	207 PARENTID Character 10 piecemarks.parent_piecemark...id_serial_numbers.id_serial_number,\
	208 CAMBER Numeric 7.4 piecemarks.camber (17),\
	209 BOMMATL Character 100 UNKNOWN,\
	210 BOMSIZE Character 13 UNKNOWN,\
	211 BOMRATING Character 15 UNKNOWN,\
	212 MATLCLASS Character 10 sheetbom.material_class 10,\
	213 BOMENDPREP Character 6 UNKNOWN,\
	214 GUID Character 40 idfiles.id_guid 40,\
	215 BOMFINISH Character 30 UNKNOWN,\
	216 PRIORITY Character 10 sheets.priority 10,\
	217 BOMLGTCHAR Character 15 UNKNOWN";
	*/
/**
 * @properties={typeid:35,uuid:"5DDCF579-40D5-485C-97F1-184AFCE4FC33",variableType:-4}
 */
var labelFields = ['AREA',
	'BATCH',
	'BCCUST',
	'BCFORM',
	'BCINCLDPFX',
	'BCJOBSTART',
	'BCPREFIX',
	'BCTITLE',
	'BOLOUT',
	'CARRNUM',
	'COMMENTS',
	'COWCODE',
	'CTRLNUM',
	'CUSCITY',
	'CUSFAX',
	'CUSFIRST',
	'CUSLAST',
	'CUSMIDDLE',
	'CUSNAME',
	'CUSPHONE',
	'CUSSTATE',
	'CUSSTREET',
	'CUSTNUM',
	'CUSTPO',
	'CUSTSO',
	'CUSZIP',
	'DESCR1',
	'DESCR2',
	'EDITTIME',
	'ENGXTIME',
	'FABINVOICE',
	'FABSHOP',
	'FABXTIME',
	'FIREXTIME',
	'GALVXTIME',
	'GRADE',
	'HEAT',
	'ID',
	'IDFORMAT',
	'IDLOCATION',
	'IDSTATUS',
	'INVOICE',
	'JOBCAREOF',
	'JOBID',
	'JOBLOCAT',
	'JOBNUM',
	'JOBSHIPTO',
	'JOBSTRUCT',
	'JOBTITLE',
	'JOIDFORMAT',
	'JOLINE1NUM',
	'JOLINE1STR',
	'JOLINE2NUM',
	'JOLINE2STR',
	'LINE0FLD',
	'LINE0PRMPT',
	'LINE1NUM',
	'LINE1STR',
	'LINE2NUM',
	'LINE2STR',
	'LINE3FLD',
	'LINE3PRMPT',
	'LINE4FLD',
	'LINE4PRMPT',
	'LINE5FLD',
	'LINE5PRMPT',
	'LINE6FLD',
	'LINE6PRMPT',
	'LINE7FLD',
	'LINE7PRMPT',
	'LINE8FLD',
	'LINE8PRMPT',
	'LINE9FLD',
	'LINE9PRMPT',
	'LINEAFLD',
	'LINEAPRMPT',
	'LINEBFLD',
	'LINEBPRMPT',
	'LOADNUM',
	'LODCAREOF',
	'LODPO',
	'LODRELEASE',
	'LODSHIPTO',
	'LOT',
	'MRR',
	'ORIGEMPL',
	'OTHRXTIME',
	'PANTXTIME',
	'PCCOLOR',
	'PCCOWCODE',
	'PCMARK',
	'PCRELEASE',
	'PCUOM',
	'PORELEASE',
	'PRODTYPE',
	'PROJYEAR',
	'RAWMATLID',
	'RECACTION',
	'RECVLOAD',
	'RECVTIME',
	'REMAILTIME',
	'REVLEVEL',
	'ROUTECODE',
	'SEMAILTIME',
	'SEQNUM',
	'SHEETNUM',
	'SHIPLOAD',
	'SHIPTAG',
	'SHIPTIME',
	'SITEXTIME',
	'TRAILINFO',
	'EDITDATE',
	'ENGXDATE',
	'FABXDATE',
	'FIREXDATE',
	'GALVXDATE',
	'IDCREATED',
	'OTHRXDATE',
	'PANTXDATE',
	'RECVDATE',
	'REMAILDATE',
	'REQDSHIP',
	'SCHDSHIP',
	'SEMAILDATE',
	'SHIPDATE',
	'SITEXDATE',
	'DELETEID',
	'LOGICFLAG',
	'LPRINT',
	'LSOTOLOAD',
	'METRICJOB',
	'BCJBSTRT',
	'BCJOBLGTH',
	'BCPFXLGTH',
	'COSTEA',
	'COWQTY',
	'FIREPFCF',
	'INCREMNT',
	'ITEMWT',
	'ITEMWTKG',
	'JOBWT',
	'LABELBC',
	'LABELQTY',
	'LGTNUM',
	'ORIGQTY',
	'PCUOMDOLL',
	'QTY2PRINT',
	'RECVQTY',
	'RECVWT',
	'SEQQTY',
	'SHIPQTY',
	'SHIPWT',
	'TOTALWT',
	'WIDNUM',
	'RTBW',
	'RTSW',
	'RTBRANCH',
	'PTFILLET',
	'PTBRANCH',
	'MTFILLET',
	'MTBRANCH',
	'LINESPEC',
	'PREHEAT',
	'SHOPHYDRO',
	'FLDHYDRO',
	'PMI',
	'PWHT',
	'DRAWNBY',
	'CHECKBY',
	'PAINTSYS',
	'BHN',
	'BHNMAX',
	'LINENBR',
	'REFDWG',
	'SKETCH',
	'PHASE',
	'BOMCOMMENT',
	'SHEETPO',
	'PRIORDATE',
	'MINORID',
	'MINORQTY',
	'BOMPARTNUM',
	'BOMHEAT',
	'BOMGUID',
	'BOMGRADE',
	'BOMSEQNUM',
	'BOMITEMNUM',
	'BOMREMARKS',
	'PARENTPCMK',
	'BOMQTY',
	'BOMLGTNUM',
	'BOMWIDNUM',
	'BOMITEMWT',
	'ERECTDWG',
	'BUNDLEID',
	'FINISH',
	'DETAILMIN',
	'FABMIN',
	'HANDLMIN',
	'PAINTMIN',
	'SAWMIN',
	'WELDMIN',
	'RULECODE',
	'FT_PKGNO',
	'PCPHASE',
	'PARENTCOPY',
	'PARENTID',
	'CAMBER',
	'BOMMATL',
	'BOMSIZE',
	'BOMRATING',
	'MATLCLASS',
	'BOMENDPREP',
	'GUID',
	'BOMFINISH',
	'PRIORITY',
	'BOMLGTCHAR'];
/**
 * @properties={typeid:35,uuid:"DAB42457-A82D-45A8-B525-C1D2FB13C9BA",variableType:-4}
 */
var prefsChangedOutside = [];
/**
 * @properties={typeid:35,uuid:"5AF47F3A-69FA-4A13-B3BB-116F7C94495D",variableType:-4}
 */
var defaultTableColumns = [
'selection',
'job_number',
'bc_id_serial_ number',
'if_original_quantity',
'job_create_date',
'sq_sequence_number',
'lt_lot_number',
'sh_sheet_number',
'pm_item_quantity',
'pm_pcmk_qty',
'pm_parent_piecemark',
'pm_piecemark',
'pm_material',
'pm_finish',
'pm_grade',
'rt_route_code',
'pm_item_length_in',
'pm_item_weight',
'pm_item_length',
'pm_item_weight_lbs',
'if_summed_quantity',
'pm_part_serial',
'pm_create_date',
'job_rf_interface',
'if_id_creation_date',
'if_edit_date',
'if_guid_major',
'if_guid_minor',
'if_create_date',
'bc_edit_date',
'rt_route_description',
'rt_allow_more_codes',
'rt_edit_date',
'pt_association_name',
'pt_edit_date',
'barcode_format_customer_name',
'bc_include_prefix',
'bc_job_start',
'bc_prefix',
'barcode_format_customer_number',
'job_customer_name',
'job_customer_number',
'customer_city',
'customer_state',
'cust_addr_line1',
'cust_zip_code',
'bc_parent_id_serial'
];
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
	// for globals, user_uuid = 'FFFFFFFF-FFFF-FFFF-FFFFFFFFFFFF', tenant_uuid= main tenant, field_name = index, value_type, value_string
	var prefs = scopes.prefs;
	prefType = (event.getFormName().search('printer') != -1) ? 'Printer' : 'Prefs';
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
	var global_user_uuid = application.getUUID('FFFFFFFF-FFFF-FFFF-FFFFFFFFFFFF');
	var tenant = globals.session.tenant_uuid;
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var fs = databaseManager.createSelect('db:/stsservoy/preferences2');
	fs.result.add(fs.columns.preferences2_id);
	fs.where.add(fs.or
			.add(fs.columns.user_uuid.eq(global_user_uuid))
			.add(fs.columns.user_uuid.eq(globals.session.userId))
		);
	fs.where.add(fs.columns.tenant_uuid.eq(tenant));
	if (tempPrefsChanged){
		var thesePrefs = tempPrefsChanged.sort();
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
		if (tempPrefsChanged){
			if (tempPrefsChanged.indexOf(variableX) == -1){continue}//20180108
		}
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.saving.preferences'),false);
		//variableX = index;
		variableSetting = prefs[variableX];
		var variableType = typeof(variableSetting);
		if (variableType === 'function'){continue}
		if (tempPrefsChanged){
			if (tempPrefsChanged.indexOf(variableX) == -1){continue}//20180108
		}
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
				rec.user_uuid = application.getUUID('FFFFFFFF-FFFF-FFFF-FFFFFFFFFFFF');
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
	tempPrefsChanged = [];
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
	var dirs = plugins.file.showDirectorySelectDialog(baseDirObj);
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
 *
 * @properties={typeid:24,uuid:"D533C90F-42D6-426E-83DA-2ADE3C394DBC"}
 * @AllowToRunInFind
 */
function onActionPrintLabels(event) {
	/**
	 * collect label fields and then push into tabbed fields with data
	 */
	var specs = scopes.printer.getBTFieldData();
	var fields = [];
	for (var idx = 0;idx < specs.length;idx++){
		fields.push(specs.field_name);
	}
	var outputFields = [];
	var outputSpecs = [];
	if (application.isInDeveloper()){application.output('print label fields')}
	/** var dbFields = scopes.printer.barTenderTextSpecs.split(",");
	//scopes.printer.labelFields2 = scopes.printer.labelFields.split(",");
	var tabCount = scopes.printer.barTenderFields.length;

	for (var index = 0;index < tabCount;index++){
		application.output('index '+index+" of "+tabCount+" "+dbFields[index]);
		var fields = dbFields[index].split(" ");
		var fieldIn = fields[1];
		var fieldNameDb = fields[4].split(".");
		var fieldOut = fieldNameDb[fieldNameDb.length-1];
		var fieldType = fields[2];
		var fieldSize = fields[3];
		outputFields.push(fieldOut);
		outputSpecs.push(new Array(fieldType,fieldSize,fieldIn));
		//application.output(fieldOut);
	} */
	
	//if (true || true) {return;}
	var tabCount = specs.length;
	var formName = event.getFormName();
	var formTable = formName+"_table";
	/** @type JSFoundSet */
	var fs = forms[formTable].foundset;
	var i = 1;
	var fileLine = "";
	var itemsSelected = false; globals.barcodePrintedArray = [];
	//var btSpec = {num: 0, name:'', size: 0,dbcol:'',dbtype:'',dbsize:0}
	while (i <= fs.getSize()){
		/** @type {JSRecord<selection:Number>} */
		var rec = fs.getRecord(i++);
		var tabContents = "";
		if (rec.selection != 1){continue}
		if (rec.bc_id_serial_number_id){globals.barcodePrintedArray.push(rec.bc_id_serial_number_id)}
		itemsSelected = true;
		for (var index = 0;index < tabCount;index++){
			/** @type {JSRecord<num:Number,name:String,dbtype:String,size:Number,dbcol:String,dbsize:Number>} */
			var specObj = specs[index];
			/** @type {Array} */
			var dbCol = specObj.dbcol.split('.');
			var dbField = dbCol[dbCol.length-1];//get unique record field
			tabContents = rec[dbField];
			if (typeof tabContents === 'undefined'){
				//application.output('undefined or unknow - '+scopes.printer.barTenderFields[index]);
				var fieldTagName = specObj.name;
				tabContents = getNonRecordValues(rec,fieldTagName);
			}
			if (!tabContents){tabContents = ''}
			
			tabContents = tabContentFormat(tabContents,specObj);
			//application.output('contents '+tabContents);
			fileLine += tabContents+"\t";
		}
		fileLine += "\n";
	}
	if (itemsSelected){bartenderPrint(event,fileLine);} //BARTENDER
}
/**
 * @param {JSEvent} event
 * @param {String} txtString
 *
 * @properties={typeid:24,uuid:"5D168323-EA10-466B-AEED-B5B6E31D38F3"}
 * @AllowToRunInFind
 */
function bartenderPrint(event,txtString){
	null;
	var debug = 1;
	var versionForm = globals.getInstanceForm(event);
	var formName = event.getFormName();
	if (formName.search('barcode_piecemark_info') == 0){
		formName = 'barcode_idlabel'+versionForm;
	}
	var reportPth = scopes.prefs.reportpath.replace('.','');
	var barForm = forms[formName];
	
	var printer = barForm.printerName;
	var label = barForm.labelName;
	var tempDir = (barForm.useLocalDirectory) ? barForm.localDir : plugins.file.getDefaultUploadLocation()+scopes.prefs.temppath.replace('.','');
	//tempDir = tempDir.replace(plugins.file.getDefaultUploadLocation(),'');
	tempDir = tempDir.replace(/\/+/g,'\\').replace('.','');
	scopes.jobs.warningsYes(event);
	scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
	var line = "";
	var fileName = tempDir+"\\barcodelabel.txt";
	fileName = fileName.replace(/\/+/g,'\\');
	var btwFile = plugins.file.getDefaultUploadLocation()+reportPth+"\\"+label;
	btwFile = btwFile.replace(/\/+/g,'\\');
	if (debug){application.output('btwFile bartender print '+btwFile)}//REMOVE
	var btwExists = plugins.file.createFile(btwFile);
	if (!btwExists.exists()){
		globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('1226'),i18n.getI18NMessage('1226'));//BarTender Template Does Not Exist in Reports Location
		scopes.jobs.warningsX();
		return;
	}

	var randFileName = tempDir+"\\" + application.getUUID().toString().split("-")[4] +".txt";
	if (debug){application.output('randfilename bartender print '+randFileName)}//REMOVE
	randFileName = randFileName.replace(/\/+/g,'\\');

	var status = plugins.file.writeTXTFile(fileName,txtString);
	if (status){globals.loggerDev(this,'Status write to txt file fail.');}
	status = plugins.file.appendToTXTFile(fileName,line + "\n");
	if (status){globals.loggerDev(this,'Status append to txt file fail.');}
	status = plugins.file.copyFile(fileName,randFileName);
	null;
	if (forms[formName].useLabeLasePrinter){
		var labeLaseFile = tempDir+'\\LabeLase1000.txt';
		labeLaseFile = labeLaseFile.replace(/\/+/g,'\\');
		status = plugins.file.copyFile(fileName,labeLaseFile);
	}
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
	if (forms[formName].useBarTender){
		if (!plugins.servoyguy_servoycom.isJACOBInstalled()) {
			globals.errorDialog('952');
			//plugins.dialogs.showErrorDialog( "Error", "Jacob is not installed.");
			scopes.jobs.warningsX();
			return;
		}
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
		var com = plugins.servoyguy_servoycom.getNewClientJSCOM("BarTender.Application");
		if (!com || !com.isJACOBLoaded()) {
			globals.errorDialog('953');
			plugins.dialogs.showErrorDialog( "Error", "Error loading COM: \n" + plugins.servoyguy_servoycom.getLastError());
			return;
		}
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
		com.put("Visible","true");
		var formats = com.getChildJSCOM("Formats");
		if (!formats){
			plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1225'),i18n.getI18NMessage('1225')+plugins.servoyguy_servoycom.getLastError());//could not open BarTender
			scopes.jobs.warningsX();
			return;
		}
		var format = formats.getChildJSCOM("Open","",[btwFile,false,printer]);
		if (!format){
			plugins.dialogs.showErrorDialog(i18n.getI18NMessage('1225'),i18n.getI18NMessage('1225')+plugins.servoyguy_servoycom.getLastError());//could not open BarTender
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
				db = DBs.getChildJSCOM("GetDatabase","",["Text File 1"]);
			}
			if (!db){
				db = DBs.get('Configuration')+"";
				var regexp = new RegExp(/SelectCommand.*\[(.*)\].*SelectCommand/);
				var database = db.match(regexp);
				if (database){
					db = DBs.getChildJSCOM('GetDatabase',[database[1]]);
				}
			}
		} else {
			db = DBs.getChildJSCOM("GetDatabase","",["Text File 1"]);
		}
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
		format.getChildJSCOM("PrintOut","",["false","true"]);
		//formatsFile.call("ExportToClipboard",0,0);
		//var comItems = formats.get("NamedSubStrings");
		//var comMaterial = comItems.get('Item("Material")');
		//com.getChildJSCOM("Quit","BarTender.Application",[1]);
		//com.getChildJSCOM("Quit","BarTender.Application",[1]);
		//com.getChildJSCOM("Quit","BarTender.Application",[1]);
		com.call("Quit",1); // BarTender.BtSaveOptions.btDoNotSaveChanges = 1
		com.release();
		scopes.jobs.warningsMessage(i18n.getI18NMessage('sts.txt.barcode.print.working'),true);
		var reply = plugins.dialogs.showQuestionDialog(i18n.getI18NMessage('sts.txt.question'),
			i18n.getI18NMessage('sts.txt.question.delete.barcode.file'),
			[i18n.getI18NMessage('sts.btn.yes'),i18n.getI18NMessage('sts.btn.no')]);
		if (reply == i18n.getI18NMessage('sts.btn.yes')){
			var status = plugins.file.deleteFile(randFileName);
			if (!status){//1223
				plugins.dialogs.showErrorDialog('1223',i18n.getI18NMessage('1223'));
			}
		}
	}
	/** @type {QBSelect<db:/stsservoy/id_serial_numbers>} */
	var q = databaseManager.createSelect('db:/stsservoy/id_serial_numbers');
	q.where.add(q.columns.id_serial_number_id.isin(globals.barcodePrintedArray));
	q.result.add(q.columns.id_serial_number_id);
	var Q = databaseManager.getFoundSet(q);
	Q.loadRecords();
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
	//{num: 0, name:'', size: 0,dbcol:'',dbtype:'',dbsize:0}
	/** @type {Array} */
	var tabType = tabSpec.dbtype; // content type
	/** @type {Array} */
	var spec = tabSpec.size.split("."); //length or number.decimal
	var length = spec[0];	// decimal included?
	var expectedData = tabSpec[2]; // incoming expected Data name field for Character, Numeric, Logical, Date
	var decimal = 0;
	if (spec.length == 2){
		decimal = spec[1];
	}
	///var contentLength = tabContents.length;
	var blanks = "                    ";
	var a = tabContents;
	var b = "";
	switch (tabType) {
		case 'Numeric':
			if (decimal != 0){
					var nums = a.toString().split(".");
					var zeroes = "0000000000000000";
					a = blanks+nums[0];
					b = nums[1]+zeroes;
					b = b.substr(0,(decimal*1+1)); // get decimal, and round
					b = Math.round(b/10)+zeroes;
					b = b.substr(0,decimal);
					b = "."+b;
			}		
			break;
		case 'Date':
			/** @type {Date} */
			var myDate = a;
			a = myDate.getMonth()+1+'/'+myDate.getDate()+'/'+myDate.getFullYear().toString().substr(2);;
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
		case 'Readable':
			a = (forms['barcode_idlabel'].vJobMetric) ? a : scopes.jobs.fracToDec(a);
			break;
		case 'Logical':
			a = (a == null || a == 0) ? 'T' : 'F';
			break;
		case 'Character':
			break;
		default:
	}
	a = blanks+a;
	a = a.substr(a.length-length);
	return a+b;
}
/**
 * @properties={typeid:24,uuid:"A0BDA211-2B39-4739-87CC-E244592AA285"}
 */
function getNonRecordValues(currentRecord,barTenderField){
	application.output(barTenderField);
	var newVal = "";
	switch (barTenderField){
		case 'BCCUST':
			null;
			break;
		case 'BCFORM':
			null;
			break;
		case 'BCINCLDPFX':
			null;
			break;
		case 'BCJOBSTART':
			null;
			break;
		case 'BCPREFIX':
			null;
			break;
		case 'BCTITLE':
			null;
			break;
		case 'BOLOUT':
			null;
			break;
		case 'CARRNUM':
			null;
			break;
		case 'COMMENTS':
			null;
			break;
		case 'COWCODE':
			null;
			break;
		case 'CTRLNUM':
			null;
			break;
		case 'CUSCITY':
			null;
			break;
		case 'CUSFAX':
			null;
			break;
		case 'CUSFIRST':
			null;
			break;
		case 'CUSLAST':
			null;
			break;
		case 'CUSMIDDLE':
			null;
			break;
		case 'CUSNAME':
			null;
			break;
		case 'CUSPHONE':
			null;
			break;
		case 'CUSSTATE':
			null;
			break;
		case 'CUSSTREET':
			null;
			break;
		case 'CUSTNUM':
			null;
			break;
		case 'CUSTPO':
			null;
			break;
		case 'CUSTSO':
			null;
			break;
		case 'CUSZIP':
			null;
			break;
		case 'DESCR2':
			null;
			break;
		case 'EDITTIME':
			null;
			break;
		case 'ENGXTIME':
			null;
			break;
		case 'FABINVOICE':
			null;
			break;
		case 'FABSHOP':
			null;
			break;
		case 'FABXTIME':
			null;
			break;
		case 'FIREXTIME':
			null;
			break;
		case 'GALVXTIME':
			null;
			break;
		case 'HEAT':
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
		case 'INVOICE':
			null;
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
		case 'JOLINE1STR':
			null;
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
			null;
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
		case 'LOADNUM':
			null;
			break;
		case 'LODCAREOF':
			null;
			break;
		case 'LODPO':
			null;
			break;
		case 'LODRELEASE':
			null;
			break;
		case 'LODSHIPTO':
			null;
			break;
		case 'LOT':
			null;
			break;
		case 'MRR':
			null;
			break;
		case 'ORIGEMPL':
			null;
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
		case 'RECVLOAD':
			null;
			break;
		case 'RECVTIME':
			null;
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
		case 'SHIPLOAD':
			null;
			break;
		case 'SHIPTAG':
			null;
			break;
		case 'SHIPTIME':
			null;
			break;
		case 'SITEXTIME':
			null;
			break;
		case 'TRAILINFO':
			null;
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
		case 'LSOTOLOAD':
			null;
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
			null;
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
		case 'RECVWT':
			null;
			break;
		case 'SHIPQTY':
			null;
			break;
		case 'SHIPWT':
			null;
			break;
		case 'TOTALWT':
			null;
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
		case 'BOMENDPREP':
			null;
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
 * @param updateValue
 * @param prefsType
 *
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F4A66DAB-3398-4103-8DC0-856657597120"}
 */
function onActionFileOpenDialogLocal(event,updateValue,prefsType) {	//20180820 created
	var baseDirObj = (scopes.printer.local_temp_path) ? scopes.printer.local_temp_path : '';
	var dirs = plugins.file.showDirectorySelectDialog(baseDirObj);
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
		for (var index = 0;index < dirs.length;index++){
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


