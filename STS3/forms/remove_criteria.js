/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A9D7C0A-9DED-46F6-9DEC-A1F9FBC4D562"}
 */
var vCustNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F9DDB430-1978-4493-8400-55EAF8164B72"}
 */
var vCustomerName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EE60A1D1-6358-4401-B435-42DD4E641F89"}
 */
var vCustomerID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5FEC095C-D5C6-4737-98CF-13C960907326"}
 */
var vJobNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"10ACF6BC-59AB-426B-8994-41163000EE3D"}
 */
var vJobName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"998AD616-6C60-4A28-969F-2AA1BA936723"}
 */
var vJobID = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC89E767-C129-4DF8-A19B-6CB49D821598",variableType:4}
 */
var vLabIDNums = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3B857D7D-70D1-4774-95ED-8C41D2482A5B",variableType:4}
 */
var vLabTotPieces = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2302CA98-2ADB-4567-AA60-0ECF40B9B653",variableType:4}
 */
var vLabTotalWt = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"401E38D3-253F-4CE5-BF99-2988F6D606E9",variableType:4}
 */
var vLabNumPcmks = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EE9FEDD1-B704-4BBC-92D6-48A7E4575938"}
 */
var vSeqNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"303AE2AA-B52D-429F-89A2-64DF84494909"}
 */
var vSheetNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D2CF0C92-76C9-41A3-A34E-00857D5867DB"}
 */
var vSONum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"151BBD03-A1EC-45A8-B0A9-F81563CE33A6"}
 */
var vLoadNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8560AE5F-F717-4506-B246-3DAD3F119BAE"}
 */
var vLotNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D5B19724-155B-4B47-925A-F0F03EFCD9C4"}
 */
var vPkgNum = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2C3354A3-95EF-49CE-BB8F-2DDEF3E83307"}
 */
var vLoadAll = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"75AC7790-E6A3-4122-AEE9-0DE837EC11D7"}
 */
var vLoadRel = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AE760B48-5AE9-41AF-AEA6-833A94ADE724"}
 */
var vPiecemark = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7324916E-D4C2-43E8-A7B2-67F86F4C6F54"}
 */
var vPcmkRel = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"27E44F41-7E9B-4BA7-853A-065EF84FDD9E"}
 */
var vFabShop = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2565FB64-0534-4567-984A-7BA2F081BEB5"}
 */
var vJobRel = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C435C43A-09CC-4505-ABE3-5410420F6977"}
 */
var vArea = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FA842BB6-C51E-4FD7-884C-90782D8BD5C3"}
 */
var vBatch = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5A145843-F365-4496-86A9-B118F96EEC7C"}
 */
var vCowCode = "";
/**
 * @properties={typeid:35,uuid:"CD9F4F53-8114-4500-AC87-57B75E040ECE",variableType:-4}
 */
var jobFound = false;
/**
 * @param firstShow
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"E1F92F98-A7A7-46F0-BDD7-FD0D51942170"}
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
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4B88F544-1F8C-4D00-8E25-B23DDEDDCB48"}
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
	var formName = 'remove_piecemark_info';
	var formTable = 'remove_pcmk_combo_table'
	if (forms[formName]){
		forms[formName].elements.tabless.removeAllTabs();
		scopes.jobs.removeFormHist(formTable);
	}
	browseInfoEnable();
	return status;
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B4464A45-2994-4FF2-8837-3AC4ACADD07C"}
 */
function onActionDeleteWindow(event) {
	var height = controller.getWindow().getHeight();
	var width = controller.getWindow().getWidth();
	var xOrigin = controller.getWindow().getX();
	var yOrigin = controller.getWindow().getY();
	var win = application.createWindow("Job Piecemark Remove", JSWindow.MODAL_DIALOG);
	win.setInitialBounds(xOrigin+10, yOrigin+10, width, height);
	win.title = "Job Piecemark Remove";

	win.show(forms.remove_record_actual);
	scopes.jobs.removeFormHist('remove_pcmk_combo_table');}