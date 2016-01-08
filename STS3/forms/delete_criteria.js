/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5826A19F-BAF5-4383-8661-9400155C7549"}
 */
var vCustNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"89072BF4-DA51-4963-8A92-DD55D20A9AD4"}
 */
var vCustomerName = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D4944A3B-CE63-42A7-A74E-20720ED0FC9D"}
 */
var vCustomerID = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BE85CB84-95D5-459F-B049-6D2E854E6336"}
 */
var vJobNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"06390DA3-B58D-4801-9BE1-758585CC8AA5"}
 */
var vJobName = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"56DEBCC7-E07C-484D-B857-D122D49FA13D"}
 */
var vJobID = "";

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95086CDB-234C-4157-88DB-239A47A628B7",variableType:4}
 */
var vLabIDNums = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2E6CED4E-1DB3-4FA9-814F-2FDD2B006D53",variableType:4}
 */
var vLabTotPieces = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B5C8EF7B-B1CB-419E-B298-A5482A6BC7D7",variableType:4}
 */
var vLabTotalWt = 0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9030CBCF-A727-4997-92EA-BC95AFF8E82B",variableType:4}
 */
var vLabNumPcmks = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69D72F36-65B5-4EBC-AB19-730A01CB4152"}
 */
var vSeqNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F785E03B-1F03-45D1-AD46-9DA034036684"}
 */
var vSheetNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"938C9EB0-1A32-45C8-B87C-6E17424BDD85"}
 */
var vSONum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E1F02CC8-447F-4D6B-A9AD-2608A3671269"}
 */
var vLoadNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7BC8FE61-854B-4DE5-9F77-0BCF5C09ECB5"}
 */
var vLotNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1781408A-6DD2-4925-81CC-D9B2790519C4"}
 */
var vPkgNum = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2B5CA517-9AB5-480F-B63B-A1BD0ECD555A"}
 */
var vLoadAll = "";

/**
 * @type {String}
 * Load Release loads.load_release
 * @properties={typeid:35,uuid:"7FDF40FA-DA0C-4BC5-805A-228605726532"}
 */
var vLoadRel = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"282EB30D-FC62-4A94-8B5D-D04AA69333B3"}
 */
var vPiecemark = "";

/**
 * @type {String}
 * Piecemark Release idfiles.piece_release
 * @properties={typeid:35,uuid:"4053EFB6-92A9-47DA-B111-15551B317FDA"}
 */
var vPcmkRel = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BED80944-F819-4211-80B3-155633FBE4F4"}
 */
var vFabShop = "";

/**
 * @type {String}
 * Job PO Release jobs.po_release 
 * @properties={typeid:35,uuid:"9A23AC08-9482-44C2-8A29-EC8FD5BAAA59"}
 */
var vJobRel = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EAB887BC-601D-4B2B-A47F-E91152E199B2"}
 */
var vArea = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2DA98BE2-D7DD-4812-94D5-96328032CDFE"}
 */
var vBatch = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4E3B0408-2C60-4C7B-92E5-7EC48C15E1B9"}
 */
var vCowCode = "";

/**
 * @properties={typeid:35,uuid:"0C67F96B-0000-47EC-8E4A-7A8577FC7ABD",variableType:-4}
 */
var jobFound = false;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"620FACFC-1270-4391-84B5-AA6295D5B3B6"}
 */
function onShow(firstShow, event) {
	scopes.jobs.getJobsList();
	scopes.jobs.getCustomersList();
	application.setValueListItems('stsvl_jobs_by_cust',scopes.jobs.jobsArray);
	return _super.onShow(firstShow, event)
}
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"427C542C-E90E-4162-879A-2569A49EA56D"}
 * @AllowToRunInFind
 */
function onDataChangeJobNumber(oldValue, newValue, event) {
	/** @type {JSFoundSet<db:/stsservoy/jobs>} */
	var fs = sts_jobs.duplicateFoundSet();
	fs.loadAllRecords();
	if (fs.find()){
		fs.job_number = newValue;
		var count = fs.search();
		if (count > 0){
			jobFound = true;
			var rec = fs.getRecord(1);
			vJobName = rec.job_title;
			vJobID = rec.job_id;
			vCustomerID = rec.customer_id; // was var vCustId =, check this TODO
			vCustNum = rec.sts_job_to_customer2.customer_number;
			vCustomerName = rec.sts_job_to_customer2.name;
			scopes.jobs.browseJobID = rec.job_id;
			var status = true;
			vLabIDNums = 0;//idfile count
			vLabTotPieces = 0;//totalpieces
			vLabTotalWt = 0;//totalweight
			vLabNumPcmks = 0;//total piecemarks
		} else {
			jobFound = false;
			status = false;
		}
	}
	var formName = 'delete_piecemark_info';
	if (forms[formName]){
		forms[formName].elements.tabless.removeAllTabs();
		scopes.jobs.removeFormHist(formName+"_table");
	}
	browseInfoEnable(null);
	return status;
}
/**
 * @properties={typeid:24,uuid:"86087C50-E905-4A7C-A726-3DB659540029"}
 */
function collectCriteria(formName){
	// feeds jobs.viewBTableToForm()
	var area = scopes.globals.arrayToString(vArea);
	var batch = scopes.globals.arrayToString(vBatch);
	var cowCode = scopes.globals.arrayToString(vCowCode);
	var fabShop = scopes.globals.arrayToString(vFabShop);
	var jobRel = scopes.globals.arrayToString(vJobRel);
	if (vLoadAll){
		var loadAll = null;
	} else {
		loadAll = scopes.globals.arrayToString(vLoadNum);
	}
	//application.output('vLoadRel '+vLoadRel);
	var loadRel = scopes.globals.convertLoadToId(vLoadRel);
	//application.output('loadRel '+loadRel);
	var lotNum = scopes.globals.convertLotToId(vLotNum);//ticket#7
	var pkgNum = scopes.globals.arrayToString(vPkgNum);//ticket#7, currently pkgNum is a FabTrol reference number
	var pcmkRel = scopes.globals.arrayToString(vPcmkRel);
	var pmark = scopes.globals.arrayToString(vPiecemark);
	var seqNum = scopes.globals.arrayToString(vSeqNum);
	var sheetNum = scopes.globals.arrayToString(vSheetNum);
	var soNum = scopes.globals.arrayToString(vSONum);
	var criteria = {
		area: area, 
		batch: batch,
		cowcode: cowCode,
		fabshop: fabShop,
		jobrel : jobRel,
		loadall : loadAll,
		loadrel : loadRel,
		lotnum : lotNum,
		pcmkrel : pcmkRel,
		piecemark : pmark,
		pkgnum : pkgNum,
		seqnum : seqNum,
		sheetnum : sheetNum,
		sonum : soNum
	}
	scopes.jobs.removeFormHist(formName+"_table");
	scopes.jobs.browseJobID = vJobID;
	scopes.jobs.viewBTableToForm(criteria,formName);
}
/**
 * @properties={typeid:24,uuid:"C475BEBD-83D4-4676-828B-D6C8AB673616"}
 */
function browseInfoEnable(altEnable){
	if (jobFound || altEnable){
		elements.btn_Info.enabled = true;
	} else {
		if (!altEnable){
			elements.btn_Browse.enabled = false;
			elements.btn_Info.enabled = false;	
		}
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} formName
 *
 * @properties={typeid:24,uuid:"24AD80C5-DC06-4258-9587-54CFAAF778EE"}
 * @AllowToRunInFind
 */
function onActionClear(event,formName) {
	if (formName == null){
		formName = event.getFormName();
	}
	var formPrefix = event.getFormName().split("_")[0];
	var formNameTable = formPrefix+'_piecemark_info_table';
	formName = formPrefix+"_criteria";
	//application.output(event);
	for(var index in forms[formName]){
		var name = index;
		if (name.search('validate') != -1){continue}
		if (name.search('v') == 0){
			if ((typeof forms[formName][index]) == "number"){
				forms[formName][index] = 0
			} else {
				//application.output(name+" "+typeof forms[formName][index]);
				forms[formName][index] = "";
			}
		}
	}
	jobFound = false;
	if (forms.delete_piecemark_info){
		forms.delete_piecemark_info.elements.tabless.removeAllTabs();
	}
	scopes.jobs.removeFormHist(formNameTable);
	browseInfoEnable(null);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} winTitle
 *
 * @properties={typeid:24,uuid:"3DAECF38-C686-4432-A939-6C97466A4A28"}
 */
function onActionDeleteWindow(event,winTitle) {
	//scopes.jobs.xxxviewBTableThrowSplit(event,winTitle);
	//return;
	//var formName = event.getFormName();
	var formName = 'delete_pcmk_combo';
	application.output('formname '+formName);
	var height = controller.getWindow().getHeight();
	var width = controller.getWindow().getWidth();
	var xOrigin = controller.getWindow().getX();
	var yOrigin = controller.getWindow().getY();
	var win = application.createWindow(winTitle, JSWindow.MODAL_DIALOG);
	win.setInitialBounds(xOrigin+10, yOrigin+10, width, height);
	win.title = winTitle;

	win.show(forms.delete_record_actual);
	scopes.jobs.removeFormHist(formName+'_table');
	//return true;
	//collectCriteria('delete_piecemark_combo');
	//forms.delete_pcmk_combo.elements.split.
	//controller.show(win);
	//return true;
}
