/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8A346359-B94B-43DC-ACF6-7F5E7310E543",variableType:4}
 */
var colPosition = 0;
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
 * @param event
 *
 * @properties={typeid:24,uuid:"D90C533A-3EAF-49BC-8A04-165F123AF7F1"}
 */
function onActionSelect(event) {
	application.output('selection');
	setElements('select');
}
/**
 * @param side
 *
 * @properties={typeid:24,uuid:"5DA7B96D-0F70-4215-92AE-9FF9A853D29C"}
 */
function setElements(side){
	var avail = true;
	if (side == 'select'){avail = false}
	elements.buttAdd.enabled = avail;
	elements.buttAddAll.enabled = avail;
	elements.buttHide.enabled = !avail;
	elements.buttHideAll.enabled = !avail;
	elements.buttFirst.enabled = !avail;
	elements.buttLast.enabled = !avail;
	elements.buttSet.enabled = !avail;
	elements.setPos.enabled = !avail;
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
	var formx = event.getFormName();
	
	var win = application.getActiveWindow();
	if (win.getParent() != null){
		formx = win.getParent().controller.getName();
	} else {
		formx = win.controller.getName();
	}
	
	var formsInUse = [];
	var formy = null;
	if (forms[formx].elements.tabless){
		var formy = forms[formx].elements.tabless.getTabFormNameAt(1);
		formsInUse.push(formy);
	}
	if (forms[formx].elements.split){
		var formCombo = event.getFormName().split("_")[0]+'_pcmk_combo';
		var top = forms[formCombo].elements.split.getLeftForm().controller.getName();
		var bot = forms[formCombo].elements.split.getRightForm().controller.getName();
		formsInUse.push(top);
		formsInUse.push(bot);
	}
	if (formsInUse.length == 0){
		return;
	}
	var colAvail = [];
	var colShow = [];
	var nameToPosY = [];
	var nameToPosX = [];
	while (formsInUse.length > 0){
		formy = formsInUse.pop();
		var elems = forms[formy].elements;
		var lastY = 0;
		var lastX = 0;
		var posX = 0;
		var posY = 0;
		for (var index = 0;index < elems.length;index++){
			var visible = elems[index].isVisible();
			posY = "0000"+elems[index].getLocationY();
			posY = utils.stringRight(posY, 7);
			posX = "0000"+elems[index].getLocationX();
			posX = utils.stringRight(posX,7);
			var name = elems[index].getName();
			if (lastY != posY){
				nameToPosY.push(posY+"|"+name);
				lastY = posY;
			}
			if (lastX != posX){
				nameToPosX.push(posX+"|"+name);
				lastX = posX;
			}
			if (!visible){
				colAvail.push(name);
			}
		}
	}
	nameToPosX.sort();
	nameToPosY.sort();
	var sortedOrder = [];
	//var colOrder = [];
	colAvail.sort();
	if (nameToPosX.length > 3){
		sortedOrder = nameToPosX;
	} else {
		sortedOrder = nameToPosY;
	}
	for (index = 0;index < sortedOrder.length;index++){
		var name = sortedOrder[index].split("|")[1];
		colShow.push(name);
	}
	//colShow.sort();
	application.setValueListItems('stsvl_catTemp1',colAvail);
	application.setValueListItems('stsvl_catTemp2',colShow);
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
	for (var index = items.length-1;index >=0 ;index--){
		var item = items[index];
		select.unshift(item);
		avail[avail.indexOf(item)] = "";
	}
	index = 0;
	var length = avail.length;
	while (index < length){
		item = avail.shift();
		if (item != ""){avail.unshift(item)}
		index++;
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
	for (var index = 0;index < items.length;index++){
		var item = items[index];
		avail.unshift(item);
		select[select.indexOf(item)] = "";
	}
	index = 0;
	var length = select.length;
	while (index < length){
		item = select.shift();
		if (item != ""){select.unshift(item)}
		index++;
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
		avail.push(item);
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