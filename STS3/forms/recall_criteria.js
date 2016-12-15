/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D732E2CD-35DF-43D7-81C5-B7CEB76A5C71"}
 */
var vCustNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DCAAC7FF-CA8D-44F8-9482-428AE6E2CC34"}
 */
var vCustomerName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1D3147D9-0EDC-4414-AD94-3B25DF9F19DE"}
 */
var vCustomerID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AAA31810-8644-4C59-839C-402A10261D04"}
 */
var vJobNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B1466172-F7D8-427D-9157-AE8548B2F11F"}
 */
var vJobName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CCF670C0-7494-4EEE-BE08-C44A8AE994E5"}
 */
var vJobID = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4D61DF31-C21F-421D-B9F0-5451EC323246",variableType:4}
 */
var vLabIDNums = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"830EFAB7-9650-4068-B743-365A92924CEA",variableType:4}
 */
var vLabTotPieces = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"23832D43-5E0C-4BA8-93FB-C39CAAF69F6B",variableType:4}
 */
var vLabTotalWt = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"941EA77C-62B7-41B1-98FF-0CBE5E201F0F",variableType:4}
 */
var vLabNumPcmks = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3ACB8214-50DF-4D69-870F-8DF0E9E78FD1"}
 */
var vSeqNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8C6EDF57-C0A2-4E20-AF36-702902B67BB6"}
 */
var vSheetNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9639D46C-F5A0-4DAC-8C75-CC121EC58275"}
 */
var vSONum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"59E22CE2-6153-436B-9E23-AF090BB4801B"}
 */
var vLoadNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7BDE536C-028A-4BD4-8E7A-755C8E6E092B"}
 */
var vLotNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C1D1117B-42D4-403F-A216-A832FE670977"}
 */
var vPkgNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2A89C981-E3DF-4DDB-A174-1F2F6087E3EF"}
 */
var vLoadAll = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D6A50160-7FEF-407E-B794-99027E928177"}
 */
var vLoadRel = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"12570F2F-74E3-4FBC-8383-ACAB241276DA"}
 */
var vPiecemark = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DBAF86F3-BB88-4035-8A9F-36416ED3F23F"}
 */
var vPcmkRel = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"03A8DD6A-5E74-446F-AB8F-73EDE965EF30"}
 */
var vFabShop = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EEB8C9AF-4DAC-4F4B-A4A4-EA49904A2162"}
 */
var vJobRel = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"51FEBD4D-883D-4724-A908-A9BC816B1092"}
 */
var vArea = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"28ADEA8A-C30B-43D0-9DFB-2A6F82AC2F4A"}
 */
var vBatch = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"67D70F28-970D-498A-882A-8846B0F4C6B0"}
 */
var vCowCode = "";
/**
 * @properties={typeid:35,uuid:"A4C4EC15-0B39-4F0D-BEF6-A6F07895759D",variableType:-4}
 */
var jobFound = false;
/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @AllowToRunInFind
 *
 *
 * @properties={typeid:24,uuid:"4A4879B5-5968-4331-9C3D-B08C19E4437E"}
 */
function onDataChangeJobNumber(oldValue, newValue, event) {
	///var action = event.getFormName().split("_")[0];
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
			var vCustId = rec.customer_id;
			vCustNum = rec.sts_job_to_customer2.customer_number;
			vCustomerName = rec.sts_job_to_customer2.name;
			scopes.jobs.browseJobIDrecall = rec.job_id;
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
	var formName = 'recall_piecemark_info';
	var formTable = 'recall_pcmk_combo_table';
	if (forms[formName]){
		forms[formName].elements.tabless.removeAllTabs();
		scopes.jobs.removeFormHist(formTable);
	}
	browseInfoEnable(null);
	return status;
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"54DC4A60-42B4-4132-9020-4439EDCC336E"}
 */
function onActionDeleteWindow(event) {
	var height = controller.getWindow().getHeight();
	var width = controller.getWindow().getWidth();
	var xOrigin = controller.getWindow().getX();
	var yOrigin = controller.getWindow().getY();
	var win = application.createWindow('Job Piecemark Recall', JSWindow.MODAL_DIALOG);
	win.setInitialBounds(xOrigin+10, yOrigin+10, width, height);
	win.title = 'Job Piecemark Recall';

	win.show(forms.recall_record_actual);
	scopes.jobs.removeFormHist('recall_pcmk_combo_table');
}
/**
 * @param formName
 *
 * @properties={typeid:24,uuid:"C6F23B81-45AB-49E1-BD96-015B55A1F88B"}
 */
function collectAndTab(formName){
	criteria = collectCriteria();
	//scopes.jobs.viewBTableSQL2(criteria,formName);
	scopes.jobs.viewBTableSQLSummary(criteria,formName);
	//var summaryQuery = scopes.jobs.queryAssembly(criteria,formName,'stations');
	//var summaryForm = 'loads_summary_info'+versionForm;
	//var removeFormName = summaryForm+'_table';
	//forms[summaryForm].elements.tabless.removeAllTabs();
	//scopes.jobs.removeFormHist(removeFormName);
	//scopes.jobs.createRouteSummaryForm(summaryQuery,formName.replace('piecemark','summary'));

	forms['recall_piecemark_info'+versionForm].elements.tabless.removeAllTabs();
	if (forms[formName+"_table"] && forms[formName+"_table"].hide){forms[formName+"_table"].hide();}
	scopes.jobs.removeFormHist(formName+"_table");
	scopes.jobs.browseJobID = vJobID;
	scopes.jobs.viewBTableToFormQB(criteria,formName);
	//forms['loads_criteria'+versionForm].vLabNumPcmks = forms[formName+'_table'].foundset.getSize();
	null;
}