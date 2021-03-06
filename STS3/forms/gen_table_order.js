/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A346359-B94B-43DC-ACF6-7F5E7310E543",variableType:4}
 */
var colPosition = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"60A29708-5609-4403-BD60-1F658B37F614"}
 */
var currentTableName = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2051E0CC-104A-4845-AC87-025D4188FB1A"}
 */
var selAvailable = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D0509056-83AC-45F6-9444-EF7B6ED3FF6E"}
 */
var selSelected = "";
/**
 * @properties={typeid:35,uuid:"5C9883A7-7387-4DF3-9C21-EDE295FC675D",variableType:-4}
 */
var resetAvailable = [];
/**
 * @properties={typeid:35,uuid:"CAA0CD5E-DE77-48C1-91D8-676D69B29180",variableType:-4}
 */
var resetSelected = [];
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"189335B0-DE99-449C-83A2-44123001D7EF",variableType:4}
 */
var elementCount = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C9ACBC2B-EA6F-4F79-A632-6B8E94739D90"}
 */
var versionForm = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"073C6E68-6D72-4C21-9029-714B394F0FF1"}
 */
var baseForm = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DA73D2DB-26FB-4F76-88C0-FAB1B4A01B98",variableType:4}
 */
var elementShow = 0;
/**
 * @properties={typeid:35,uuid:"7C82F09C-B4D9-4574-BAD4-1E7903F9B76A",variableType:-4}
 */
var parentEvent = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1EDA31C6-4F9E-466D-8117-F927297B9B4E"}
 */
var elementInfo = '';
/**
 * @properties={typeid:35,uuid:"AD7F533F-381C-45D6-A782-0B0FE0365393",variableType:-4}
 */
var i18nMapping = [];
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A6311AC-4A14-4E10-BC51-9305E3F250D3"}
 */
function onActionAvail(event) {
	setElements('avail');
	var name = selAvailable.split('\n')[0];
	if (name){
		elementInfo = i18nMapping[name];
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"29DD7012-09E3-4941-9291-0AA3F81A6150"}
 */
function onActionReset(event){
	application.setValueListItems('stsvl_catTemp1',resetAvailable);
	application.setValueListItems('stsvl_catTemp2',resetSelected);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"D90C533A-3EAF-49BC-8A04-165F123AF7F1"}
 */
function onActionSelect(event) {
	//application.output('selection');
	setElements('select');
	var name = selSelected.split('\n')[0];
	if (name){
		elementInfo = i18nMapping[name];
	}
}
/**
 * @param side
 *
 * @properties={typeid:24,uuid:"5DA7B96D-0F70-4215-92AE-9FF9A853D29C"}
 */
function setElements(side){
	var avail = (side == 'avail');
	elements.btn_Add.visible = avail;
	elements.btn_AddAll.visible = avail;
	elements.btn_Hide.visible = !avail;
	elements.btn_HideAll.visible = !avail;
	elements.btn_First.visible = !avail;
	elements.btn_Last.visible = !avail;
	elements.btn_Set.visible = !avail;
	elements.btn_Up.visible = !avail;
	elements.btn_Down.visible = !avail;
	elements.setPos.visible = !avail;
}
/**
 * @AllowToRunInFind
 * 
 * @param tableName
 *
 * @properties={typeid:24,uuid:"F6F30370-7F30-4622-8A08-98A160EF9AAC"}
 */
function tablePrefsColumnsToHide(tableName){
	var elems = forms[currentTableName].elements;
	var existEl = new Array();
	for (var name in elems){existEl.push(name)}
	globals.a.tempHiddenColumns[tableName] = [];
	/** @type {Array} */
	var tempArray = globals.a.tempHiddenColumns[tableName];
	var version = globals.getInstanceForm(tableName);
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var prefsFS = databaseManager.createSelect('db:/stsservoy/preferences2');
	prefsFS.result.add(prefsFS.columns.preferences2_id);
	prefsFS.where.add(prefsFS.columns.user_uuid.isNull);//FFFFFFFF-0000-0000-DDDDDDDDDDDD
	prefsFS.where.add(prefsFS.columns.form_name.eq(tableName.replace(version,"")));
	prefsFS.where.add(prefsFS.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	var P = databaseManager.getFoundSet(prefsFS);
	
	var index = 1;
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var rec = "";
	while (rec = P.getRecord(index++)){
		if (existEl.indexOf(rec.field_name) == -1 || rec.field_name == 'selection'){continue}
		var columnSpec = rec.field_value.split(",");
		if (columnSpec[3] == 0){
			if (rec.field_name == 'selection'){
				tempArray.unshift(rec.field_name);
			} else {
				if (tempArray.indexOf(rec.field_name) == -1){tempArray.push(rec.field_name);}
			}
		}
		index++;
	}
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5FD76D7C-005E-44EA-B200-F2F6F8ECDA9A"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		versionForm = globals.getInstanceForm(event);
		baseForm = event.getFormName().replace(versionForm,'');
		parentEvent = event;
	}
	i18nMapping = [];
	elementInfo = i18n.getI18NMessage('sts.txt.table.info.here');
	globals.setUserFormPermissions(event,false);
	var currentForm = event.getFormName();//20181003
	var formName = scopes.jobs.generalTableOrderTableName;
	selAvailable = '';
	selSelected = '';
	///var win = application.getActiveWindow();
	/** if (firstShow){
		var formx = win.controller.getName();
	} else {
		formx = win.getParent().controller.getName();
	} */
	var colAvail = [];
	var colShow = [];
	colAvail = [];
	colShow = [];
	///var nameToPosY = [];
	///var nameToPosX = [];
	//formy = formName; //formsInUse.pop();
	//scopes.globals.a.tempHiddenColumns[formy] = [];
	currentTableName = formName; // formy;
	if (currentForm == 'piecemarks2'){
		currentTableName = forms.piecemarks2.elements.tabs.getTabFormNameAt(5);
	}
	
	tablePrefsColumnsToHide(currentTableName);
	//var tableVersion = globals.getInstanceForm(currentTableName);
	var elems = forms[currentTableName].elements;
	//if (elems['selection'] && elems['selection'].visible == false){colAvail.push('selection')}
	elementCount = elems.length;
	///var lastY = 0;
	///var lastX = 0;
	///var posX = 0;
	///var posY = 0;
	colAvail = scopes.globals.a.tempHiddenColumns[currentTableName].sort();
	//forms.loads_pcmk_combo.elements.settingsLeft.

	for (var index in elems){
		var name = elems[index].getName();
		getColumnI18nMapping(event,currentTableName,name);
		if (name == 'selection'){continue}
		///if (scopes.jobs.tablePKs.indexOf(name) != -1){continue}
		///var visible = elems[index].isVisible();
		if (colAvail.indexOf(i18nMapping[name]) != -1 || elems[index].visible == false){
			if (colAvail.indexOf(i18nMapping[name]) == -1){colAvail.push(i18nMapping[name]);}
		} else {
			colShow.push(new Array(elems[index].getLocationX(),i18nMapping[name]));
		}

		/**posX = "000000000"+elems[index].getLocationX();
		 posX = utils.stringRight(posX,9);
		 if (scopes.globals.a.tempHiddenColumns[formy].indexOf(name) == -1 && lastX != posX){
		 nameToPosX.push(posX+"|"+name);
		 lastX = posX;
		 }
		 if (scopes.globals.a.tempHiddenColumns[formy].indexOf(name) != -1 &&
		 colAvail.indexOf(name) == -1){
		 colAvail.push(name);
		 }*/
	}
	colShow = colShow.sort(function (a,b){return a[0]-b[0]});
	//nameToPosX.sort();
	var sortedOrder = [];
	colAvail = colAvail.sort();
	/**if (nameToPosX.length > 3){
	 sortedOrder = nameToPosX;
	 } else {
	 sortedOrder = nameToPosY;
	 }*/
	for (index = 0;index < colShow.length;index++){
		var newShowEl = colShow[index][1];
		if (newShowEl == 'selection'){continue}
		if (sortedOrder.indexOf(newShowEl) == -1){sortedOrder.push(newShowEl)}
	}
	//colShow.sort();
	if (elems['selection'] && elems['selection'].visible == false && colAvail.indexOf('selection') == -1){colAvail.unshift(i18nMapping['selection'])}
	
	if (elems['selection'] && elems['selection'].visible == true && sortedOrder.indexOf('selection') == -1){sortedOrder.unshift(i18nMapping['selection'])}
	application.setValueListItems('stsvl_catTemp1',colAvail);
	application.setValueListItems('stsvl_catTemp2',sortedOrder);
	resetAvailable = application.getValueListArray('stsvl_catTemp1');
	resetSelected = application.getValueListArray('stsvl_catTemp2');
	setElementCount();
	elements.btn_Save.enabled = false;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BC9995D4-4CC7-4AD9-8CC4-15E74C78460D"}
 */
function onActionCancel(event) {
	globals.modalResponse = 'Cancel';
	var win = application.getActiveWindow();
	win.hide();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3AB41C66-730E-4099-99A4-D0CE97813434"}
 */
function onActionShow(event) {
	var avail = application.getValueListArray('stsvl_catTemp1');
	var select = application.getValueListArray('stsvl_catTemp2');
	var items = elements.available.getSelectedElements();
	//application.output('items selected '+items);
	var availLength = avail.length;
	for (var index = 0; index < availLength;index++){
		var item = avail.shift();
		if (items.indexOf(item) == -1){
			avail.push(item);
		} else {
			select.push(item);//add at end, was unshift to put in first place
		}
	}
	application.setValueListItems('stsvl_catTemp1',avail);
	application.setValueListItems('stsvl_catTemp2',select);
	setElementCount();
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"8FDF63D3-09CE-4214-A303-731E0EE65E16"}
 */
function onActionShowAll(event){
	var avail = application.getValueListArray('stsvl_catTemp1');
	var select = application.getValueListArray('stsvl_catTemp2');
	//var items = elements.available.getSelectedElements();
	var availLength = avail.length;
	for (var index =0; index < availLength;index++){
		var item = avail.shift();
		select.push(item);
	}
	application.setValueListItems('stsvl_catTemp1',avail);
	application.setValueListItems('stsvl_catTemp2',select);
	setElementCount();
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"20C49544-397B-445A-B0F6-33EAEDA47ABF"}
 */
function onActionHide(event) {
	var avail = application.getValueListArray('stsvl_catTemp1');
	var select = application.getValueListArray('stsvl_catTemp2');
	var items = elements.selected.getSelectedElements();
	var selectLength = select.length;
	for (var index = 0;index < selectLength;index++){
		var item = select.shift();
		if (items.indexOf(item) == -1){
			select.push(item);
		} else {
			avail.push(item);
		}
	}
	avail.sort();
	application.setValueListItems('stsvl_catTemp1',avail);
	application.setValueListItems('stsvl_catTemp2',select);
	setElementCount();
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"6270B35C-79EE-4ACF-8F0D-902FEE6AACFD"}
 */
function onActionHideAll(event) {
	var avail = application.getValueListArray('stsvl_catTemp1');
	var select = application.getValueListArray('stsvl_catTemp2');
	for (var index = 0;index < select.length;index++){
		var item = select[index];
		if (avail.indexOf(item) == -1){
			avail.push(item);
		}
	}
	avail.sort();
	application.setValueListItems('stsvl_catTemp1',avail);
	application.setValueListItems('stsvl_catTemp2',[]);
	setElementCount();
}

/**
 * @param event
 *
 * @properties={typeid:24,uuid:"87E6BFCF-85AD-4C86-81BE-5E2AB9BEED99"}
 */
function onActionShowFirst(event){
	var select = application.getValueListArray('stsvl_catTemp2');
	var newSelect = [];
	var items = elements.selected.getSelectedElements();
	for (var index = 0;index < select.length;index++){
		var item = select[index];
		if (items.indexOf(item) == -1){
			newSelect.push(item);
		}
	}
	for (index = 0;index < items.length;index++){
		newSelect.unshift(items[index]);
	}
	application.setValueListItems('stsvl_catTemp2',newSelect);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"31F87BDE-35F5-4C5F-9C2A-297956AEA156"}
 */
function onActionShowLast(event){
	var select = application.getValueListArray('stsvl_catTemp2');
	var newSelect = [];
	var items = elements.selected.getSelectedElements();
	for (var index = 0;index < select.length;index++){
		var item = select[index];
		if (items.indexOf(item) == -1){
			newSelect.push(item);
		}
	}
	for (index = 0;index < items.length;index++){
		newSelect.push(items[index]);
	}
	application.setValueListItems('stsvl_catTemp2',newSelect);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"18D73663-B9C2-4804-BB3E-A0B26131B220"}
 */
function onActionShowSetLocation(event){
	var select = application.getValueListArray('stsvl_catTemp2');
	var newSelect = [];
	var items = elements.selected.getSelectedElements();
	if (items.length == 0){return}
	var index = 0;
	if (colPosition < 1){colPosition == 1}
	if (colPosition > select.length){colPosition = select.length}
	while(index < colPosition-1){
		var item = select.shift();
		if (items.indexOf(item) == -1){
			newSelect.push(item);
			index++;
		}
	}
	for(index = 0;index < items.length;index++){
		newSelect.push(items[index]);
	}
	while(select.length > 0){
		item = select.shift();
		if (items.indexOf(item) == -1){
			newSelect.push(item);
		}
	}
	application.setValueListItems('stsvl_catTemp2',newSelect);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"C8D2D82E-1566-4D14-B499-B94D9B06DAEF"}
 */
function onActionMoveUp(event){
	var select = application.getValueListArray('stsvl_catTemp2');
	var newSelect = [];
	var items = elements.selected.getSelectedElements();
	if (items.length == 0){return}
	var position = select.indexOf(items[0]);
	var index = 0;
	while(index < position-1){
		var item = select.shift();
		if (items.indexOf(item) == -1){
			newSelect.push(item);
			index++;
		}
	}
	for(index = 0;index < items.length;index++){
		newSelect.push(items[index]);
	}
	while(select.length > 0){
		item = select.shift();
		if (items.indexOf(item) == -1){
			newSelect.push(item);
		}
	}
	application.setValueListItems('stsvl_catTemp2',newSelect);
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"4D377105-9835-4FAA-B773-24E96804CD8E"}
 */
function onActionMoveDown(event){
	var select = application.getValueListArray('stsvl_catTemp2');
	var newSelect = [];
	var items = elements.selected.getSelectedElements();
	if (items.length == 0){return}
	var position = select.indexOf(items[0]);
	if (position == select.length-1){return}
	var index = 0;
	while(index < position+1){
		var item = select.shift();
		if (items.indexOf(item) == -1){
			newSelect.push(item);
			index++;
		}
	}
	for(index = 0;index < items.length;index++){
		newSelect.push(items[index]);
	}
	while(select.length > 0){
		item = select.shift();
		if (items.indexOf(item) == -1){
			newSelect.push(item);
		}
	}
	application.setValueListItems('stsvl_catTemp2',newSelect);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"264969BB-D50E-4488-914B-58FA1DE31BA7"}
 */
function onActionApply(event) {
	// well, this isn't really a save.  We reorder the elements and close window.  Save is performed later
	var showArray = application.getValueListArray('stsvl_catTemp2'); // show and order, the rest are hidden
	var hideArray = application.getValueListArray('stsvl_catTemp1'); // items to hide, put them last
	var form = scopes.jobs.generalTableOrderTableName;
	//var jsField = null;
	globals.a.tempHiddenColumns[form] = [];
	var doneArray = [];
	var elems = forms[form].elements;
	//application.output(showArray);
	var tempEmpty = globals.a.tempHiddenEmpty;
	for (var item in elems){
		var i18nItem = i18nMapping[item];
		if (hideArray.indexOf(i18nItem) == -1){
			if (showArray.indexOf(i18nItem) == -1){
				//showArray.push(item);
				doneArray.push(i18nItem);
			}
		}
	}
	if (application.isInDeveloper()){application.output('missing items from avail/select '+doneArray);}
	var posX = 0;
	var jsForm = solutionModel.getForm(form);
	for (var index = 0;index < showArray.length;index++){
		/** @type String */
		var i18nName = showArray[index];
		var name = i18nMapping[i18nName]; 
		doneArray.push(name);
		if (!elems[name]){continue}
		//if (elems[name] == ""){continue}
		elems[name].visible = true;
		var elPosY = elems[name].getLocationY();
		elems[name].setLocation(posX,elPosY);
		///var lastPos = elems[name].getLocationX();
		var jsField = jsForm.getField(name);
		
		if (!jsField){jsField = jsForm.getLabel(name);}
		jsField.x = posX;jsField.visible = true;
		if (jsField.width < 3){jsField.width = 110}
		posX = (elems[name].getWidth() < 3) ? posX+elems[name].getWidth() : posX+110;
		if (tempEmpty.indexOf(i18nName) != -1){
			elems[name].visible = false;
		}
	}

	for (index = 0;index < hideArray.length;index++){
		i18nName = hideArray[index];
		name = i18nMapping[i18nName]; 
		doneArray.push(i18nName);
		if (!elems[name]){continue}
		elems[name].visible = false;
		/** @type JSForm */
		jsField = jsForm.getField(name);
		if (!jsField){jsField = jsForm.getLabel(name);}
		jsField.x = posX;jsField.visible = false;
		posX = posX+elems[name].getWidth();
	}
	
	forms[form].controller.recreateUI();
	globals.a.tempHiddenColumns[form] = [];
	for (index = 0;index < hideArray.length;index++){
		/** @type {Array} */ var tempArray = globals.a.tempHiddenColumns[form];
		tempArray.push(hideArray[index]);
	}
	elements.btn_Save.enabled = true;
}
/**
 * @properties={typeid:24,uuid:"087925C3-B29C-4B22-BD62-FB5911B08BC9"}
 */
function setElementCount(){
	var showArray = application.getValueListArray('stsvl_catTemp2'); // show and order, the rest are hidden
	var hideArray = application.getValueListArray('stsvl_catTemp1'); // items to hide, put them last
	elementCount = hideArray.length;
	elementShow = showArray.length;
	if (elementShow > scopes.prefs.maxColumnShow){
		plugins.dialogs.showErrorDialog('1263',i18n.getI18NMessage('1263'));//Number Of Shown Columns Exceeds Misc Preference Settings.
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E6D4E879-C5D1-4F58-8AE2-8CAA5F5E2FDF"}
 */
function onActionSave(event) {
	scopes.jobs.saveTableSettings(event);
	elements.btn_Save.enabled = false;
}
/**
 * @param {JSEvent} event
 * @param formName
 *
 * @properties={typeid:24,uuid:"497F5381-79BD-476B-A791-8B826B1B4ECE"}
 * @AllowToRunInFind
 */
function getColumnI18nMapping(event,tableFormName,elName){
	var tableI18n = '';
	if (tableFormName.search('transactions') != -1){
		tableI18n = i18n.getI18NMessage('table.transactions.'+elName);
	} else if (tableFormName.search('raw') != -1){
		var i18nText = i18n.getI18NMessage('table.inventory.'+elName);
		if (!i18nText.match('!') ){
			tableI18n = '(inventory) '+ i18nText;
		} else {
			if (application.isInDeveloper()){application.output(elName)}
			switch (elName){
			case 'barcode_printer_name' : tableI18n = '(form) '+i18n.getI18NMessage('table.general.barcode_printer_name');break;
			case 'association_name' : tableI18n = '(associations) '+i18n.getI18NMessage('table.associations.association_name');break;
			case 'btw_file_path' : tableI18n = '(form) '+i18n.getI18NMessage('table.general.btw_file_path');break;
			case 'labelfmt' : tableI18n = '(form) '+i18n.getI18NMessage('table.general.btw_file_path');break;
			case 'lgtnummm' : tableI18n = '(inventory) '+i18n.getI18NMessage('table.inventory.item_length');break;
			case 'wtkg' : tableI18n = '(inventory) '+i18n.getI18NMessage('table.inventory.item_weight');break;
			case 'cust_customer_number' : tableI18n = '(customers) '+i18n.getI18NMessage('table.general.job_customer_number');break;
			case 'customer_number' : tableI18n = '(customers) '+i18n.getI18NMessage('table.general.job_customer_number');break;
			case 'employee_number' : tableI18n = '(customers) '+i18n.getI18NMessage('table.employee.employee_number');break;
			case 'fabshop' : tableI18n = '(associations) '+i18n.getI18NMessage('table.associations.association_name');break;
			case 'shop' : tableI18n = '(associations) '+i18n.getI18NMessage('table.associations.association_name');break;
			case 'plant' : tableI18n = '(associations) '+i18n.getI18NMessage('table.associations.association_name');break;
			case 'quantity' : tableI18n = '(form) '+i18n.getI18NMessage('sts.txt.quantity');break;
			case 'job_customer_name' : tableI18n = '(customers) '+i18n.getI18NMessage('table.general.job_customer_name');break;
			case 'job_number' : tableI18n = '(jobs) '+i18n.getI18NMessage('table.jobs.job_number');break;
			case 'job_number_group' : tableI18n = '(jobs) '+i18n.getI18NMessage('table.jobs.job_number_group');break;
				default: tableI18n = elName;application.output('defaulted '+elName)
			}
			//tableI18n = scopes.jobs.determineI18n(elName,'readable');
		}
	} else {
		tableI18n = scopes.jobs.determineI18n(elName,'source');
	}
	i18nMapping[tableI18n] = elName;
	i18nMapping[elName] = tableI18n;
}