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
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8A6311AC-4A14-4E10-BC51-9305E3F250D3"}
 */
function onActionAvail(event) {
	setElements('avail');
}
/**
 * TODO generated, please specify type and doc for the params
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
}
/**
 * @param side
 *
 * @properties={typeid:24,uuid:"5DA7B96D-0F70-4215-92AE-9FF9A853D29C"}
 */
function setElements(side){
	var avail = (side == 'avail');
	elements.buttAdd.visible = avail;
	elements.buttAddAll.visible = avail;
	elements.buttHide.visible = !avail;
	elements.buttHideAll.visible = !avail;
	elements.buttFirst.visible = !avail;
	elements.buttLast.visible = !avail;
	elements.buttSet.visible = !avail;
	elements.buttUp.visible = !avail;
	elements.buttDown.visible = !avail;
	elements.setPos.visible = !avail;
}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param tableName
 *
 * @properties={typeid:24,uuid:"F6F30370-7F30-4622-8A08-98A160EF9AAC"}
 */
function tablePrefsColumnsToHide(tableName){
	globals.a.tempHiddenColumns[tableName] = [];
	/** @type {JSDataSet<db:/stsservoy/preferences2>} */
	var prefsFS = databaseManager.getFoundSet('stsservoy','preferences2');
	if (prefsFS.find()) {
		prefsFS.user_id = -1;
		prefsFS.form_name = tableName;
		prefsFS.tenant_uuid = globals.secCurrentTenantID;
		if (prefsFS.search()){
			for (var index = 1;index <= prefsFS.getSize();index++){
				var rec = prefsFS.getRecord(index);
				var columnSpec = rec.field_value.split(",");
				if (columnSpec[3] == 0){
					globals.a.tempHiddenColumns[tableName].push(rec.field_name);
				}
			}
		}
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
	var formName = scopes.jobs.generalTableOrderTableName;
	var win = application.getActiveWindow();
	if (firstShow){
		var formx = win.controller.getName();
	} else {
		formx = win.getParent().controller.getName();
	}
	var colAvail = [];
	var colShow = [];
	//application.setValueListItems('stsvl_catTemp1',colAvail);
	//application.setValueListItems('stsvl_catTemp2',colShow);
	
	///var formsInUse = [];
	/**var formy = null;
	if (forms[formx].elements.tabless){
		formy = forms[formx].elements.tabless.getTabFormNameAt(1);
		formsInUse.push(formy);
	}
	if (forms[formx].elements.split){
		//var formCombo = event.getFormName().split("_")[0]+'_pcmk_combo';
		var left = forms[formx].elements.split.getLeftForm().controller.getName();
		var right = forms[formx].elements.split.getRightForm().controller.getName();
		formsInUse.push(left);
		formsInUse.push(right);
	}
	if (formsInUse.length == 0){
		return;
	}*/
	//while (formsInUse.length > 0){
		colAvail = [];
		colShow = [];
		var nameToPosY = [];
		var nameToPosX = [];
		//formy = formName; //formsInUse.pop();
		//scopes.globals.a.tempHiddenColumns[formy] = [];
		//tablePrefsColumnsToHide(formy);
		currentTableName = formName; // formy;
		var elems = forms[currentTableName].elements;
		var lastY = 0;
		var lastX = 0;
		var posX = 0;
		var posY = 0;
		//colAvail = scopes.globals.a.tempHiddenColumns[formy].sort();
		//forms.loads_pcmk_combo.elements.settingsLeft.
		
		for (var index in elems){
			var name = elems[index].getName();
			if (scopes.jobs.tablePKs.indexOf(name) != -1){continue}
			var visible = elems[index].isVisible();
			if (elems[index].getWidth() == 0){
				colAvail.push(name);
			} else {
				colShow.push(new Array(elems[index].getLocationX(),name));
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
	//}
	colShow = colShow.sort(function (a,b){return a[0]-b[0]});
	//nameToPosX.sort();
	var sortedOrder = [];
	//colAvail = colAvail.sort();
	/**if (nameToPosX.length > 3){
		sortedOrder = nameToPosX;
	} else {
		sortedOrder = nameToPosY;
	}*/
	for (index = 0;index < colShow.length;index++){
		sortedOrder.push(colShow[index][1]);
	}
	//colShow.sort();
	application.setValueListItems('stsvl_catTemp1',colAvail);
	application.setValueListItems('stsvl_catTemp2',sortedOrder);
	resetAvailable = application.getValueListArray('stsvl_catTemp1');
	resetSelected = application.getValueListArray('stsvl_catTemp2');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BC9995D4-4CC7-4AD9-8CC4-15E74C78460D"}
 */
function onActionCancel(event) {
	globals.modalResponse = "Cancel";
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
			select.unshift(item);
		}
	}
	application.setValueListItems('stsvl_catTemp1',avail);
	application.setValueListItems('stsvl_catTemp2',select);
}
/**
 * TODO generated, please specify type and doc for the params
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
}
/**
 * TODO generated, please specify type and doc for the params
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
}
/**
 * TODO generated, please specify type and doc for the params
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
}

/**
 * TODO generated, please specify type and doc for the params
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
	for (var index = 0;index < items.length;index++){
		newSelect.unshift(items[index]);
	}
	application.setValueListItems('stsvl_catTemp2',newSelect);
}
/**
 * TODO generated, please specify type and doc for the params
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
		var item = select.shift();
		if (items.indexOf(item) == -1){
			newSelect.push(item);
		}
	}
	application.setValueListItems('stsvl_catTemp2',newSelect);
}
/**
 * TODO generated, please specify type and doc for the params
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
		var item = select.shift();
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
		if (hideArray.indexOf(item) == -1){
			if (showArray.indexOf(item) == -1){
				//showArray.push(item);
				doneArray.push(item);
			}
		}
	}
	application.output('missing items from avail/select '+doneArray);
	var posX = 0;
	var jsForm = solutionModel.getForm(form);jsForm.get
	for (var index = 0;index < showArray.length;index++){
		/** @type String */
		var name = showArray[index];
		doneArray.push(name);
		if (!elems[name]){continue}
		//if (elems[name] == ""){continue}
		elems[name].visible = true;
		var lastPos = elems[name].getLocationX();
		var jsField = jsForm.getField(name);
		
		if (!jsField){jsField = jsForm.getLabel(name);}
		jsField.x = posX;
		posX = posX+elems[name].getWidth();
		if (tempEmpty.indexOf(name) != -1){
			elems[name].visible = false;
		}
	}

	for (index = 0;index < hideArray.length;index++){
		name = hideArray[index];
		doneArray.push(name);
		if (!elems[name]){continue}
		elems[name].visible = false;
		/** @type JSForm */
		jsField = jsForm.getField(name);
		if (!jsField){jsField = jsForm.getLabel(name);}
		jsField.x = posX;
		posX = posX+elems[name].getWidth();
	}
	forms[form].controller.recreateUI();
	globals.a.tempHiddenColumns[form] = [];
	for (index = 0;index < hideArray.length;index++){
		globals.a.tempHiddenColumns[form].push(hideArray[index]);
	}
	scopes.jobs.tablePrefsSaveDb();
}
