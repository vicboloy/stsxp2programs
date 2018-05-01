/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"89A5815E-BADF-4D8D-B3D6-1EE9451E02CF"}
 */
var vJobNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0B23D759-5002-49D0-8C7E-164CA34BD283"}
 */
var custNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BB26AB91-1943-4A72-9538-EA5154E4671B"}
 */
var releasePO = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5AEA3B72-BE29-48B8-AAA9-9BCBFCB8E863"}
 */
var assocName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FD0743C1-F325-4A84-B693-20FD76889243"}
 */
var jobPlant = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"060311FB-9262-452C-8FD3-88C20924C4DC"}
 */
var assocUUID = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3FE1981D-C9AA-4658-9781-C9C43EDF23A2"}
 */
var jobUUID = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6EC1075E-E2B0-4E79-86CB-7F0D3240D847"}
 */
var insDrawPfx = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC577430-1ED3-441C-830C-AD7B3439570A"}
 */
var insDrawSfx = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B9D13DD2-C1BD-41E0-8DDC-31128CFFC1CA"}
 */
var insJobSO = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F80FB093-AB23-41CA-903D-09D6EA34D367"}
 */
var insCustPO = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"89AE85C2-A9F4-4690-AF60-37CE5A5955E2"}
 */
var insSheetPO = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7D4697D5-EEA5-4E13-85F8-AE22B9BF2FED"}
 */
var insReleasePO = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB5C9208-9E9A-400B-B5A6-800D9FBD8F94"}
 */
var insEmpNumber = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AD7617DF-3653-41A4-AAEE-61AC7A2E8096",variableType:4}
 */
var innPrintNumber = 1;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3B5F6985-D890-4DE8-9F40-7CCBEFE834C4",variableType:4}
 */
var vLongestPM = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5FBAFD70-68E5-4FF6-AD7A-B01A62FF1C0B"}
 */
var insArea = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"985915B9-2C40-4C73-9314-CE6BCE32CF4F"}
 */
var insRoutingCode = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FAA2E5AF-72A8-4E85-9390-D9B9AA4D123E"}
 */
var insSeqNumber = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"33C2F337-574C-4528-85BA-207D02CE3AE1",variableType:4}
 */
var inlMillCowCodes = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C8D3E283-E868-4E16-A446-732D5A6EAC19",variableType:4}
 */
var inlSaveRemarksControl = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7894AA79-6149-42B1-8C8B-E6CFF79C69ED"}
 */
var custId = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EB797A56-93D5-4587-814A-8FA61521411D"}
 */
var vCustName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D47E78E5-FB6B-4D9C-A654-F0CCB2DD4DC2"}
 */
var custName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"62C1731F-22EF-44A9-A9E0-017F9A5E4330"}
 */
var jobName = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1DC23DA5-9181-40FC-B58F-D4300E8E769B",variableType:4}
 */
var vRemaining = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"40146170-0C70-445C-B69A-E39304D50827"}
 */
var importProgress = '';
/**
 * @properties={typeid:35,uuid:"FF7D8CE6-6D8C-4FBF-A44A-A7C35ADC2A1F"}
 * 
 * @type {String}
 */
var insImportOptions = i18n.getI18NMessage('sts.radio.import.matching');
/**
 * @properties={typeid:24,uuid:"E493CB50-EEC0-433D-9A87-E7B744C4564E"}
 * @AllowToRunInFind
 */
function clear(){
	var formName = 'import_performance_txt';
	for (var el in elements){
		if (el.search('ins') == 0){
			forms[formName][el] = '';continue;
		}
		if (el.search('inl') == 0){
			forms[formName][el] = 0;continue;
		}
		if (el.search('inn') == 0){
			forms[formName][el] = null;continue; 
		}
	}
}
/**
 * @properties={typeid:24,uuid:"73A22714-8B7B-4777-A364-20E182DF4390"}
 */
function getInfoFromFiles(){
	//var custId = globals.getCustomerId(vCustName);
	vJobNumber = forms.import_performance_txt._jobNumber;
	/** @type {JSRecord<db:/stsservoy/jobs>} */
	var jobRec = scopes.globals.getJobData(null,vJobNumber);
	jobUUID = jobRec.job_id;
	//application.output('job uuid is '+jobUUID);
	assocUUID = jobRec.association_id;
	assocName = globals.getAssociationName(assocUUID);
	custId = jobRec.customer_id;
	
	var custNumbers = scopes.globals.getCustomersByJob();
	insEmpNumber = globals.session.employeeNum;
	custNumber = (custNumbers[0]) ? custNumbers[0].customer_number : '';
	custName = (custNumbers[0]) ? custNumbers[0].name : '';
	controller.focusField('jobSO',true);
	null;
	scopes.jobs.importJob.bcFormId = jobRec.barcode_form; //#87ticket#87
	scopes.jobs.importJob.jobId = jobUUID;
	scopes.jobs.importJob.jobNumber = jobRec.job_number;
	scopes.jobs.importJob.title = jobRec.job_title;
	//scopes.jobs.importJob.name = custName;
	scopes.jobs.importJob.date = new Date();
	scopes.jobs.importJob.associationId = jobRec.association_id;
	scopes.jobs.importJob.customerId = jobRec.customer_id;
	scopes.jobs.importJob.metricFlag = jobRec.metric_job;

}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"96F893C0-DB31-4EA6-BEC6-E77E0F8D3BB4"}
 */
function onShow(firstShow, event) {
	var jobRoutes = [];
	var jobRouteIds = [];
	/** @type {QBSelect<db:/stsservoy/routings>} */
	var routes = databaseManager.createSelect('db:/stsservoy/routings');
	routes.result.add(routes.columns.routing_id);
	routes.where.add(routes.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	routes.where.add(routes.columns.delete_flag.isNull);
	var R = databaseManager.getFoundSet(routes);
	/** @type {JSRecord<db:/stsservoy/routings>} */
	var rec2 = null;
	idx = 1;
	while (rec2 = R.getRecord(idx++)){
		jobRoutes.push(rec2.route_code);
		jobRouteIds.push(rec2.routing_id);
	}
	jobName = scopes.jobs.importJob.name;
	jobUUID = scopes.jobs.importJob.jobId;
	application.setValueListItems('stsvl_route_code_id',jobRoutes,jobRouteIds);	
	getInfoFromFiles();
	var table = databaseManager.getTable('stsservoy','piecemarks');
	var column = table.getColumn('piecemark');
	var piecemarkSize = column.getLength();
	vRemaining = piecemarkSize-vLongestPM;
	forms.import_performance_bom.elements.btn_Import.enabled = true;
	
	var totalForm = forms.import_performance_bom;
	totalForm.importtotal = totalForm.importBoms+totalForm.importBorders+totalForm.importPcmks;
	totalForm.importRemaining = totalForm.importtotal;
	importProgress =  totalForm.importRemaining+' / '+totalForm.importtotal;
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
 * @properties={typeid:24,uuid:"EAD3FF89-CF04-4EB9-9302-7AAA860CA881"}
 */
function onDataChangeCharsRemaining(oldValue, newValue, event) {
	var el = event.getElementName();
	var formName = event.getFormName();
	var elDataProv = elements[el].getDataProviderID();
	var table = databaseManager.getTable('db:/stsservoy/piecemarks');
	var pcmkLength = table.getColumn('piecemark').getLength();
	
	var remaining = pcmkLength-vLongestPM-insDrawPfx.length-insDrawSfx.length;
	if (remaining < 0){
		globals.errorDialogMobile(event,1169,el,null);
		forms[formName][elDataProv] = oldValue;
		return true;
	}
	vRemaining = remaining;
	return true
}
