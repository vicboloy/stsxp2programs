/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6D059CAB-275C-48CB-B313-E218ACFB7147"}
 */
var vJobNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D6BA0800-3A88-40FC-8D41-CBB598994AD8"}
 */
var vSeqNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"566C0CB7-F535-4B2E-B5FE-71FCF50FB75C"}
 */
var vLotNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0266CC59-6EAC-422F-9095-04FB62B844C4"}
 */
var vPartNumber = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C09D747B-8772-452C-8219-85DD9110E070"}
 */
var vDrawingNumber = '';
/**
 * @properties={typeid:35,uuid:"E95C8326-22BE-46D1-A647-C5596445ED79",variableType:-4}
 */
var entryOrder = ['numJob','numSeq','numLot','numPart','numDraw','btnSelect'];
/**
 * @properties={typeid:35,uuid:"95F8CF68-A99B-45D2-AE3C-B1B4CC2018E6",variableType:-4}
 */
var importing = false;
/**
 * @properties={typeid:35,uuid:"AA70D327-3A39-441F-839C-533427D7CF8F",variableType:-4}
 */
var endVars = null;
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9C3FB14A-E1B9-48B2-B697-5B369E7E6A2C"}
 */
function onActionClear(event) {
	vJobNumber = '';
	vSeqNumber = '';
	vLotNumber = '';
	vPartNumber = '';
	vDrawingNumber = '';
	elements.btnSelect.visible = true;
	elements.btnSelect.enabled = false;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"80729955-DDC6-48FF-B9C3-04AAE578D73F"}
 * @AllowToRunInFind
 */
function onActionCollectCriteria(event) {
	if (vJobNumber == ''){return}
	if (!scopes.globals.com){
		
	}
	if (importing){return}
	importing = true;
	elements.btnSelect.visible = false;
	application.updateUI();
	/** @type {JSField} */
	var item = null;
	var filter = '';
	var subFilter = '';
	var formName = event.getFormName();
	var items = [];var idx = 0;
	var filterFld = '';
	var filterType = '<Filter><FilterType>TTT</FilterType><FilterValue>UUU</FilterValue></Filter>\n';
	var filters = {};
	for (item in elements){
		if (item.search('num') != 0){continue}
		var dataProv = elements[item].getDataProviderID();
		if (forms[formName][dataProv] == ''){continue} //skip empty fields for filter
		switch (dataProv){
			case 'vJobNumber':
				continue;
				break;
			case 'vSeqNumber':
				if (application.isInDeveloper()){application.output('Sequence Number '+vSeqNumber)}
				filterFld = 'Sequence';
				break;
			case 'vLotNumber':
				if (application.isInDeveloper()){application.output('Lot Number '+vLotNumber)}
				filterFld = 'LotNumber';
				break;
			case 'vPartNumber':
				if (application.isInDeveloper()){application.output('Part Number '+vPartNumber)}
				filterFld = 'MainMark'
				break;
			case 'vDrawingNumber':
				if (application.isInDeveloper()){application.output('Drawing Number '+vDrawingNumber)}
				filterFld = 'DrawingNumber';
				break;
			default:
		}
		filters[filterFld] = forms[formName][dataProv];
		items = forms[formName][dataProv].split(',');
		for (idx = 0;idx < items.length;idx++){
			subFilter = filterType.replace('TTT',filterFld);
			subFilter = subFilter.replace('UUU',items[idx]);
			filter += subFilter;
			
		}
	}
	if (filter != ''){
		filter = '<Filters>\n'+filter+'</Filters>\n';
	}
	var servoyDir = plugins.UserManager.Server().servoyDirectory;
	//servoyDir = 'c:\\windows\\temp';
	var request = '<FabSuiteXMLRequest>\n\
		<ExportJob>\n\
		<JobNumber>'+vJobNumber+'</JobNumber>\n\
		<FileName>'+servoyDir+'\\KissFileSTSx.kss</FileName>\n\
		<IncludeLotNumbers>1</IncludeLotNumbers>\n\
		FILTERS\n\
		</ExportJob>\n\
		</FabSuiteXMLRequest>';
	request = request.replace('FILTERS',filter);
	application.output('new request \n'+request);
	if (application.isInDeveloper()){
		for (var obj in filters){
			application.output('Filters :'+obj+': '+filters[obj]);
			
		}
	}
	scopes.kiss.importFSOnServer(event,request,filters);
	elements.btnSelect.visible = true;
	importing = false;

}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"AADD8472-EB6C-451C-89E0-6793384FF46B"}
 */
function clearBadEntry(event){
	var fieldName = event.getElementName();
	var provId = elements[fieldName].getDataProviderID();
	application.output('provider id '+provId);
	forms[event.getFormName()][provId] = '';
	if (!vJobNumber){elements.btnSelect.enabled = false;}
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4C7EC89A-FC8D-4517-B073-46573C77A6B4"}
 */
function onShow(firstShow, event) {
	if (!globals.fabSuiteLocal){
		for (var el in elements){
			elements[el].enabled = false;
		}
	}
	elements.numJob.requestFocus();
}
