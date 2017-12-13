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
 * @properties={typeid:35,uuid:"6154C6D0-024E-4855-83BC-11552DACC348",variableType:-4}
 */
var seqs = [];
/**
 * @properties={typeid:35,uuid:"C19DF545-D466-487A-8392-884880558E33",variableType:-4}
 */
var marks = [];
/**
 * @properties={typeid:35,uuid:"60412191-034F-41A8-A341-4B96F2640E8F",variableType:-4}
 */
var lots = [];
/**
 * @properties={typeid:35,uuid:"EE95D966-E225-40F6-8E3B-7758D33049E5",variableType:-4}
 */
var draws = [];
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
	seqs = [];
	marks = [];
	lots = [];
	draws = [];

	for (item in forms['import_x'].elements){
		if (item.search('num') != 0){continue}
		var dataProv = forms['import_x'].elements[item].getDataProviderID();
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
			application.output('name '+items[idx]);
			switch(filterFld){
				case 'Sequence':
					seqs.push(items[idx]);
					break;
				case 'LotNumber':
					lots.push(items[idx]);
					break;
				case 'MainMark':
					marks.push(items[idx]);
					break;
				case 'DrawingNumber':
					draws.push(items[idx]);
					break;
				default:
			}
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
	forms.sts_x.elements.tabless.removeAllTabs();
	var applied = false;
	for (var filtName in ['marks','seqs','draws','lots','setFilter']){databaseManager.removeTableFilterParam('stsservoy',filtName)}
	if (1==1){
		if (marks.length != 0){applied = databaseManager.addTableFilterParam('stsservoy','import_table','parent_piecemark','in',marks,'marks')}
		if (seqs.length != 0){applied = databaseManager.addTableFilterParam('stsservoy','import_table','sequence_number','in',seqs,'seqs')}
		if (draws.length != 0){applied = databaseManager.addTableFilterParam('stsservoy','import_table','sheet_number','in',draws,'draws')}
		if (lots.length != 0){applied = databaseManager.addTableFilterParam('stsservoy','import_table','lot_number','in',lots,'lots')}
	}
	//var filts = databaseManager.getTableFilterParams("stsservoy");
	//for (var idx = 0;idx < filts.length;idx++){
	//	application.output(filts[idx]);
	//}
	scopes.kiss.importFSOnServer(event,request,filters);
	forms.sts_x.elements.tabless.addTab('import_embed');
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
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/import_table');
	for (var filtName in ['marks','seqs','draws','lots','setFilter']){databaseManager.removeTableFilterParam('stsservoy',filtName)}
	fs.loadAllRecords();
	fs.deleteAllRecords();
	if (!globals.fabSuiteLocal){
		for (var el in elements){
			elements[el].enabled = false;
		}
	}
	elements.numJob.requestFocus();
}
