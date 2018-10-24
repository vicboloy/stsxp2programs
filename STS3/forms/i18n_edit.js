/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E7D93581-5AB5-4B65-A0C0-5C6F2F9AA06E"}
 */
var vRefLocale = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E0A7A74D-B27C-444B-8F8D-436F1E84F756"}
 */
var vSetLocale = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A107DC20-3E4E-4052-A8B5-19B3AF92A925"}
 */
var i18nDataSource = '';
/**
 * @properties={typeid:35,uuid:"F0890F1E-1CD6-4BD4-A461-57BE769C41CA",variableType:-4}
 */
var localeChanges = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B6D42877-CE24-454A-A40B-220967C1A688"}
 */
var localeResponse = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"F3E29C8F-010C-4B4C-B2F3-35544B70CC32",variableType:4}
 */
var localeSecondsResponse = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5E973403-787E-4C37-8CB4-B243A611B9B4"}
 */
var i18nKeyFilter = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"041873B4-0D7C-44A2-82F2-33F4BFC3B247"}
 */
var i18nDefFilter = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9C1DCB36-1AA4-4632-94AD-96AC550FF94A"}
 */
var i18nMsgFilter = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1700528A-427C-4F77-9723-7F1B5BC72509"}
 */
var localeSystem = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9F5F07CE-006F-48D3-85EF-A02D9DD6B652"}
 */
var vMessageKey = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0F391683-AC70-48C8-A472-20CE2FBEB4F0"}
 */
var vMessageValue = '';
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FDECDC1A-D98C-4116-B495-AC46CF52DEFC"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	isEditing(event,false);
	i18nKeyFilter = '';
	i18nMsgFilter = '';
	i18nDefFilter = '';
	vSetLocale = '';
	vMessageKey = '';
	vMessageValue = '';
	localeChanges = [];
	scopes.jobs.warningsMessage('sts.txt.operation.takes.time',true);
	scopes.jobs.warningsMessage('sts.txt.operation.takes.time',false);
	scopes.jobs.warningsMessage('sts.txt.operation.takes.time',true);
	if (firstShow){
		//message_locale = '';
		//onDataChangeLanguage('','en',event);
	}
	//var locale = 'systeminfo.exe /FO LIST | find "System Locale"';
	var startTime = new Date();
	
	var systemLocale = '';
	if (!localeResponse){
		localeResponse = application.executeProgram('systeminfo.exe',["/FO","LIST"]);
	}
	var regexp = new RegExp(/([a-z][a-z])-([a-z][a-z]);(.*)[^\w]/);
	var locale = localeResponse.match(regexp);
	if (locale != -1){
		localeSystem = locale[1]+'-('+locale[3].split(' ')[0]+')';
		systemLocale = locale[1];
	}
	//application.output('system locale is '+localeResponse);
	/** @type {Array} */
	var getLocales = i18n.getLanguages();
	//var columnName = getLocales.getColumnName(1)
	getLocales.sort(2,true);
	var showLocales = [];
	var valLocales = [];
	for (var index = 1;index <= getLocales.getMaxRowIndex();index++){
		//application.output(getLocales.getValue(index,1));
		value = getLocales.getValue(index,1)
		if (!value){
			valLocales.push(null);
			showLocales.push('Default');
		} else {
			valLocales.push(getLocales.getValue(index,1));
			showLocales.push(getLocales.getValue(index,2));
		}
	}
	//vRefLocale = systemLocale;
	application.setValueListItems('stsvl_locales',showLocales,valLocales);
	onDataChangeLanguage(null,systemLocale,event);

	var finishTime = new Date();
	localeSecondsResponse = Math.floor((finishTime - startTime)/1000);
	scopes.jobs.warningsX(event);
	//return _super.onShow(firstShow, event);
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
 * @properties={typeid:24,uuid:"CBEFAEA9-B2B1-4E9E-A456-787A86765FC0"}
 */
function onDataChangeLanguage(oldValue, newValue, event) {
	globals.localeSelected = newValue;
	
	/** @type {QBSelect<db:/stsservoy/i18n_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/i18n_table');
	q.result.add(q.columns.message_key);
	q.result.add(q.columns.message_value);//get default word listing
	q.where.add(q.columns.message_language.isNull);
	var r = q.joins.add('db:/stsservoy/i18n_table');
	r.on.add(r.columns.message_key.eq(q.columns.message_key));
	q.result.add(r.columns.message_value,'message_locale');
	//r.root.where.add(q.columns.message_key.eq(r.columns.message_key));
	r.root.where.add(r.columns.message_language.eq(newValue));
	if (i18nMsgFilter){
		r.root.where.add(r.columns.message_value.lower.like('%'+i18nMsgFilter+'%'));
	}
	if (i18nDefFilter){
		q.where.add(q.columns.message_value.lower.like('%'+i18nDefFilter+'%'));
	}
	if (i18nKeyFilter){
		q.where.add(q.columns.message_key.lower.like('%'+i18nKeyFilter+'%'));
	}
	
	var Q = databaseManager.getDataSetByQuery(q,-1);
	
	null;
	i18nDataSource = Q.createDataSource('i18Stuff');
	createEditI18nTable(event);

	return true;
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"21042AAB-F23C-4CC1-869D-068AAE0BA05F"}
 */
function onHide(event) {
	globals.stopWindowTrackEvent(event);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"A65E559E-4421-40F4-A710-DBEE41F7D9B6"}
 */
function createEditI18nTable(event){
	var userTableHeaders = [i18n.getI18NMessage('sts.table.i18n.key'),
	i18n.getI18NMessage('sts.table.i18n.default'),
	i18n.getI18NMessage('sts.table.i18n.locale')
	];

	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var q = databaseManager.createSelect('db:/stsservoy/preferences2');
	q.where.add(q.columns.form_name.eq('i18n_edit_list_table'));
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	var Q = databaseManager.getFoundSet(q);
	var fields = [];
	/** @type {JSFoundSet<db:/stsservoy/preferences2>} */
	var rec = null; var index = 1;
	while (rec = Q.getRecord(index++)){
		fields[rec.field_name] = rec.field_value
	}
	elements.tabless.removeAllTabs();
	scopes.jobs.removeFormHist('i18n_edit_list_table');
	var checkForm = solutionModel.newForm('i18n_edit_list_table',i18nDataSource,'sts_one',false,530,175);
	checkForm.navigator = SM_DEFAULTS.NONE;
	checkForm.view = JSForm.LOCKED_TABLE_VIEW;
	//checkForm.width = 900;
	//checkForm.borderType = solutionModel.createLineBorder(1,'#ff0000');
	checkForm.scrollbars = SM_SCROLLBAR.SCROLLBARS_WHEN_NEEDED;
	var code = 'function recSelect(event){\
		application.output("locale "+message_locale);\
		forms.i18n_edit.foundset.getRecord(foundset.getSelectedIndex());\
		forms["i18n_edit"].vRefLocale = message_locale;\
		forms["i18n_edit"].vMessageValue = message_value;\
		forms["i18n_edit"].vMessageKey = message_key;\
		forms["i18n_edit"].focusLocalEntry(event);}';
	var codeTable = 'function onShow(firstShow, event) {\
		if (firstShow){\
			var formName = event.getFormName();\
			scopes.jobs.tablePrefsLoad(formName);\
		}\
		}'
	checkForm.onRecordSelection = checkForm.newMethod(code);
	checkForm.onShow = checkForm.newMethod(codeTable);

	var item; var columnPos = 0;var width = 350;
	var anchors = SM_ANCHOR.NORTH | SM_ANCHOR.EAST | SM_ANCHOR.WEST;
	
	for (index = 0;index < userTableHeaders.length;index++){
		var headerText = userTableHeaders[index];
		var label = userTableHeaders[index];

		var x = 0;var y = 0; height = 21; width = 200;
		if (!(!fields[label])){
			var fieldSize = fields[label].split(','); 
			x = fieldSize[0];
			y = fieldSize[1];
			width = fieldSize[2];
			height = fieldSize[3];
		}
		item = checkForm.newLabel(headerText,x,y,width,21);
	 	item.labelFor=label; item.anchors = anchors;
	 	item.borderType  = solutionModel.createLineBorder(1,'#000000');
	 	item.toolTipText=label;

		item = checkForm.newTextField(label,x,y+21,width,21);
		//item.printSliding = SM_PRINT_SLIDING.GROW_WIDTH | SM_PRINT_SLIDING.ALLOW_MOVE_X;
		item.name = label; item.editable = false; 
		item.anchors = anchors;
		if (label == i18n.getI18NMessage('sts.table.i18n.key')){
			item.dataProviderID = 'message_key';
		}
		if (label == i18n.getI18NMessage('sts.table.i18n.default')){
			item.dataProviderID = 'message_value';
		}
		if (label == i18n.getI18NMessage('sts.table.i18n.locale')){
			item.dataProviderID = 'message_locale';
		}
		item.editable = false;
		item.toolTipText = item.text;
		columnPos += width;
	}
	elements.tabless.addTab('i18n_edit_list_table');	
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E4EB53CC-A967-4F5E-BFC6-AFB8DAB2B71A"}
 */
function onActionClose(event) {
	elements.tabless.removeAllTabs();
	scopes.globals.onActionCloseButton(event);
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"948E640A-CB46-4213-82E2-F203D9FF04CE"}
 */
function onRecordSelection(event) {
	vRefLocale = message_locale;
	message_key = message_key;
	message_value = message_value;
	//application.output('locale '+message_locale);
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
 * @properties={typeid:24,uuid:"54496537-4B84-4350-9FDC-BA1C42AF13BB"}
 */
function onDataChangeLocaleText(oldValue, newValue, event) {
	function lostUnique(oValue, nValue, regexp){
		var matchOld = oValue.match(regexp);
		var matchNew = nValue.match(regexp);
		if (!matchOld){return false}//no matches in oldvalue for this parameter, no problem adding nonexistent parameter
		if (!matchNew){return true}// the newValue has a value but not returned false, means loss of parameter
		return false;
	}
	var regexp1 = new RegExp(/({0})/);
	var regexp2 = new RegExp(/({1})/);
	var regexp3 = new RegExp(/({2})/);
	var regexp4 = new RegExp(/({3})/);
	if (lostUnique(oldValue,newValue,regexp1) ||
	lostUnique(oldValue,newValue,regexp2) ||
	lostUnique(oldValue,newValue,regexp3) ||
	lostUnique(oldValue,newValue,regexp4)){
		var response = globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('1271'),i18n.getI18NMessage('sts.txt.1271.parameters.removed'),i18n.getI18NMessage('sts.btn.no'),i18n.getI18NMessage('sts.btn.yes'));
		if (response == i18n.getI18NMessage('sts.btn.yes')){
			newValue = oldValue;
			vRefLocale = oldValue;
			return true;
		}
	}
	var regexpC = new RegExp(/(\([a-zA-Z]*\))/);
	if (lostUnique(oldValue,newValue,regexpC)){
		response = globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('1272'),i18n.getI18NMessage('sts.txt.1272.commands.removed'),i18n.getI18NMessage('sts.btn.no'),i18n.getI18NMessage('sts.btn.yes'));
		if (response == i18n.getI18NMessage('sts.btn.yes')){
			newValue = oldValue;
			vRefLocale = oldValue;
			return true;
		}
	}
	var regexpH = new RegExp(/(<html>)/i);
	if (lostUnique(oldValue,newValue,regexpH)){
		response = globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('1273'),i18n.getI18NMessage('sts.txt.1273.html.removed'),i18n.getI18NMessage('sts.btn.no'),i18n.getI18NMessage('sts.btn.yes'));
		if (response == i18n.getI18NMessage('sts.btn.yes')){
			newValue = oldValue;
			vRefLocale = oldValue;
			return true;		
		}
	}

	
	
	localeChanges[vMessageKey] = newValue;
	forms['i18n_edit_list_table'].message_locale = newValue;
	if (!elements.btn_Save.visible){
		elements.btn_Save.enabled = true;
		elements.btn_Save.visible = true;
	}
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"145E3833-FF15-4206-8C45-8351DE89522E"}
 */
function onActionDataEditLocale(event) {
	localeChanges[forms['i18n_edit_list_table'].message_key] = vRefLocale;
	forms['i18n_edit_list_table'].message_locale = vRefLocale;//This transfers the changed data to the record selected
	elements.btn_Save.visible = true;
	elements.btn_Save.enabled = true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"26EF68AE-A8C6-4057-A995-B6D88CACEC41"}
 */
function onActionCancel(event) {
	databaseManager.revertEditedRecords(forms['i18n_edit_list_table'].foundset);
	isEditing(event,false);
	onDataChangeI18nFilter('','',event);
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
 * @properties={typeid:24,uuid:"A82459BF-936B-4238-954B-63449BE8F0C6"}
 */
function onDataChangeLocale(oldValue, newValue, event) {
	globals.DIALOGS.showErrorDialog(i18n.getI18NMessage('sts.txt.update.locale.received'),i18n.getI18NMessage('sts.txt.update.locale.received'));
	return true
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
 * @properties={typeid:24,uuid:"A1F77070-CEE7-4444-BD52-727BAA65F44E"}
 */
function onDataChangeI18nFilter(oldValue, newValue, event) {
	elements.tabless.removeAllTabs();
	scopes.jobs.removeFormHist('i18n_edit_list_table');
	
	onDataChangeLanguage(globals.localeSelected,globals.localeSelected,event);
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"03D45B06-04B0-4DEC-BBBE-F09C55F4F766"}
 */
function onActionFilterClear(event) {
	i18nKeyFilter = '';
	i18nMsgFilter = '';
	i18nDefFilter = '';
	onDataChangeI18nFilter('','',event);
}
/**
 * @param event
 * @param editFlag
 *
 * @properties={typeid:24,uuid:"ACFE80A6-A0E4-4C14-BFDA-77BF8321B532"}
 */
function isEditing(event,editFlag){
	elements.btn_Cancel.visible = editFlag;
	elements.btn_Cancel.enabled = true;
	elements.btn_Edit.visible = !editFlag;
	elements.message_locale.editable = editFlag;
	elements.btn_Save.visible = false;
	elements.btn_Restore.visible = editFlag;
	if (editFlag){
		elements.message_locale.requestFocus();
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"574CEB16-0C50-4DA0-83BF-FC337B1FE608"}
 */
function onActionSave(event) {
	var idx = 0;
	var locale = globals.localeSelected;
	var i18nKey = [];
	var i18nValue = [];
	for (var item in localeChanges){
		i18nKey.push(item);
		i18nValue.push(localeChanges[item]);
		application.output(item+' '+localeChanges[item]);
	}
	/** @type {QBSelect<db:/stsservoy/i18n_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/i18n_table');
	q.result.add(q.columns.i18n_table_id);
	q.where.add(q.columns.message_language.eq(locale));
	q.where.add(q.columns.message_key.isin(i18nKey));
	var Q = databaseManager.getFoundSet(q);
	Q.loadAllRecords();
	/** @type {JSFoundSet<db:/stsservoy/i18n_table>} */
	var rec2 = null;var index = 1;
	while (rec2 = Q.getRecord(index++)){
		var idx2 = i18nKey.indexOf(rec2.message_key);
		var newVal = i18nValue[idx2];
		//application.output('was '+rec2.message_value+ ' now '+newVal);
		rec2.message_value = newVal;
	}
	var success = databaseManager.saveData(Q);
	elements.btn_Save.visible = false;
	localeChanges = [];
	isEditing(event,false);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C00DA1B2-E9B0-4AD9-BC1B-80E347376B2D"}
 */
function onActionEdit(event) {
	isEditing(event,true);
	scopes.jobs.tablePrefsLoad('i18_edit_list_table');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F10F62E1-DF18-498B-9F63-704E6181F1CC"}
 */
function onActionRestoreDefault(event) {
	vRefLocale = forms['i18n_edit_list_table'].message_value;
	forms['i18n_edit_list_table'].message_locale = vRefLocale;
	localeChanges[vMessageKey] = vRefLocale;
	if (!elements.btn_Save.visible){
		elements.btn_Save.enabled = true;
		elements.btn_Save.visible = true;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D64E264B-BCD7-4883-83AF-FA16D07F017B"}
 */
function onActionEnter(event) {
	var fs = forms['i18n_edit_list_table'].foundset;
	var idx = fs.getSelectedIndex();
	if (idx > fs.getSize()){
		fs.setSelectedIndex(1)
	} else {
		fs.setSelectedIndex(idx+1);
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"A6CA973C-61B3-417C-872B-B3E57B1CA62B"}
 */
function focusLocalEntry(event){
	forms.i18n_edit.elements.message_locale.requestFocus();
}