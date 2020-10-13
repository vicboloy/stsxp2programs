/**
 * This hold a temporary record for the absence of a 
 * @type {JSRecord}
 *
 * @properties={typeid:35,uuid:"F7F31EDF-5A75-4A43-AA91-E251CFECE508",variableType:-4}
 */
var dummy = null;
/** *
 * @param event
 *
 *
 * @properties={typeid:24,uuid:"AF890D49-1470-460C-A5C7-96D6AF247F69"}
 */
function updateUI(event) {
	/**var isData = permission_type == globals.SEC_PERMISSION_TYPE_DATA;
	isData = false;
	//elements.server_name.visible = isData;
	server_name = 'stsservoy';
	elements.table_name.visible = isData && server_name != null;
	elements.can_delete.visible = isData && server_name != null && table_name != null;
	elements.can_insert.visible = isData && server_name != null && table_name != null;
	elements.can_update.visible = isData && server_name != null && table_name != null;
	elements.can_read.visible = isData && server_name != null && table_name != null;
	elements.use_tracking.visible = isData && server_name != null && table_name != null;
	*/
	///var isUI = (permission_type == globals.SEC_PERMISSION_TYPE_UI) && (permissionForm == 'app_keys');

	var isUI = true && (permissionForm == 'app_permiss_general');
	elements.form_name.visible = true;
	elements.element_uuid.visible = isUI && form_name != null;
	elements.is_visible.visible = isUI && form_name != null;
	elements.is_accessible.visible = isUI && form_name != null;// && is_visible == 1;
	
//	elements.element_uuid.visible = isUI && form_name != null;
//	elements.form_name.visible = 
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E294DC77-E1A7-444F-9CB2-12E85E150C11"}
 */
function onShow(firstShow, event) {
	if (foundset.getSize() == 0){
		foundset.newRecord();
		dummy = foundset.getRecord(1);
	}
	//if (foundset.getSize() > 0){
		tenant_uuid = globals.session.tenant_uuid;
		permission_type = globals.SEC_PERMISSION_TYPE_UI;
	//}
	elements.btn_Okay.enabled = false;
	updateUI(null);
	createPermissTable(event,form_name);
	var elValue = elements.form_name.getDataProviderID();
	
	if (!forms[event.getFormName()][elValue]){
		elements.form_name.requestFocus();
	} else {
		elements.btn_Cancel.requestFocus();
	}
	return _super.onShow(firstShow, event)
}

/**
 * Perform create new record.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"04A39348-D5B8-4171-B10B-3FE0CCD76768"}
 */
function newRecord(event, location, changeSelection) {
	var rec = _super.newRecord(event, location, changeSelection);
	if (typeof edit_date !== "undefined"){edit_date = new Date();}
	if (typeof tenant_uuid === "undefined"){return rec}
	if (tenant_uuid == null && globals.session.tenant_uuid != null){
		tenant_uuid = globals.session.tenant_uuid;
	}
	return rec;
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
 * @properties={typeid:24,uuid:"D9E72EB1-E5D7-41A4-AB6B-C5CA3458AC38"}
 * @AllowToRunInFind
 */
function onDataChangeFormName(oldValue, newValue, event) {
	if (foundset.getSize() == 0){
		foundset.newRecord();
		var rec = foundset.getRecord(1);
		rec.form_name = newValue;
	}
	createPermissTable(event,newValue);
	return _super.onDataChangeFormName(oldValue, newValue, event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"84A235D8-1EF8-483A-909B-25418C893560"}
 */
function onHide(event) {
	if (dummy){
		try {
		foundset.deleteRecord(dummy);
		} catch (e) {}
	}
	elements.tabless.removeAllTabs();
	
	var resultHistory = history.removeForm('element_list');
	var resultRemove = solutionModel.removeForm('element_list');
	if (resultHistory || resultRemove){globals.loggerDev(this,'History removal failed.');}
	return _super.onHide(event)
}
/**
 * @AllowToRunInFind
 * 
 * @param {JSEvent} event
 * @param formName
 * Best dynamic table example
 * @properties={typeid:24,uuid:"8685A30C-69E5-4FC0-BF47-D3F35F77200D"}
 */
function createPermissTable(event,formName){
	elements.tabless.removeAllTabs();
	elements.tabless.visible = false;
	elements.element_uuid.visible = false;
	elements.element_uuid_label.visible = false;
	
	var resultHistory = history.removeForm('element_list');
	var resultRemove = solutionModel.removeForm('element_list');
	if (permissionForm && permissionForm == 'app_permiss_general'){
		elements.btn_Okay.enabled = true;
		return true;
	}

	elements.tabless.visible = true;
	var knownEls = [];
	var elSettings = [];
	/** @type {QBSelect<db:/stsservoy/permissions>} */
	var fs = databaseManager.createSelect('db:/stsservoy/permissions');
	fs.result.add(fs.columns.permission_uuid);
	fs.where.add(fs.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	fs.where.add(fs.columns.form_name.eq(formName));
	fs.where.add(fs.columns.key_uuid.eq(globals.makeUUID(key_uuid)));
	var PRM = databaseManager.getFoundSet(fs);
	/** @type {JSRecord<db:/stsservoy/permissions>} */
	var rec = null;var idx = 1;
	while (rec = PRM.getRecord(idx++)){
		var elName = rec.element_name;
		knownEls.push(elName);
		///application.output('formname element '+rec.element_name+' visible '+rec.is_visible+' enabled '+rec.is_accessible);
		if (!elSettings[elName]){elSettings[elName] = [];}
		/** @type {Array} */
		var elSettingsArray = elSettings[elName];
		var elSetting = {visible : rec.is_visible, 
							enabled :rec.is_accessible,
							keyId :rec.key_uuid.toString()};
		elSettingsArray.push(elSetting);
	}
	
	var newForm = solutionModel.cloneForm('element_list',solutionModel.getForm('app_permiss_detail_list'));
	
	if (resultHistory || resultRemove){globals.loggerDev(this,'History remove failed.');}
	if (!formName){return null}
	var buttons = solutionModel.getForm(formName).getButtons(true);
	buttons = buttons.sort();
	var otherButtons = solutionModel.getForm(formName).getLabels(true);
	otherButtons = otherButtons.sort();
	var fields = solutionModel.getForm(formName).getFields(true);
	fields = fields.sort();

	var localDataSrc = databaseManager.createEmptyDataSet();
	localDataSrc.addColumn('element_name',1,JSColumn.TEXT);
	localDataSrc.addColumn('key_uuid',2,JSColumn.TEXT);
	localDataSrc.addColumn('is_visible',3,JSColumn.TEXT);
	localDataSrc.addColumn('is_enabled',4,JSColumn.TEXT);
	localDataSrc.addColumn('is_ignored',5,JSColumn.TEXT);
	localDataSrc.addColumn('is_keyed',6,JSColumn.TEXT);
	for (var index = 0;index < buttons.length;index++){
		elName = buttons[index].name;
		if (!elName){continue}
		if (knownEls.indexOf(elName) != -1){
			elSettingsArray = elSettings[elName];
			for (var index2 = 0;index2 < elSettingsArray.length;index2++){
				elSetting = elSettingsArray[index2];
				var ignored = elSetting.ignored;
				if (!ignored){ignored = 0}
				localDataSrc.addRow([elName,elSetting.keyId,elSetting.visible,elSetting.enabled,ignored,0])
			}
		} else {
			localDataSrc.addRow([elName,null,0,0,1,0]);
		}
	}
	for (index = 0;index < fields.length;index++){
		elName = fields[index].name;
		if (!elName){continue}
		if (knownEls.indexOf(elName) != -1){
			elSettingsArray = elSettings[elName];
			for (index2 = 0;index2 < elSettingsArray.length;index2++){
				elSetting = elSettingsArray[index2];
				ignored = elSetting.ignored;
				if (!ignored){ignored = 0}
				localDataSrc.addRow([elName,elSetting.keyId,elSetting.visible,elSetting.enabled,ignored,0])
			}
		} else {
			localDataSrc.addRow([elName,null,0,0,1,0]);
		}
	}
	for (index = 0;index < otherButtons.length;index++){
		elName = otherButtons[index].name;
		if (!elName){continue}
		if (knownEls.indexOf(elName) != -1){
			elSettingsArray = elSettings[elName];
			for (index2 = 0;index2 < elSettingsArray.length;index2++){
				elSetting = elSettingsArray[index2];
				ignored = elSetting.ignored;
				if (!ignored){ignored = 0}
				localDataSrc.addRow([elName,elSetting.keyId,elSetting.visible,elSetting.enabled,ignored,0])
			}
		} else {
			localDataSrc.addRow([elName,null,0,0,1,0]);
		}
	}
	//application.output('data source '+localDataSrc);
	var localSrc = localDataSrc.createDataSource('formElementNames',[JSColumn.TEXT,JSColumn.TEXT,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER,JSColumn.INTEGER]);
	newForm.dataSource = localSrc;
	newForm.getField('elementName').dataProviderID = 'element_name';
	newForm.getField('keyId').dataProviderID = 'key_uuid';
	newForm.getField('checkVisible').dataProviderID = 'is_visible';
	newForm.getField('checkEnabled').dataProviderID = 'is_enabled';
	newForm.getField('checkIgnore').dataProviderID = 'is_ignored';
	newForm.getField('checkKeyed').dataProviderID = 'is_keyed';
	var code = 'function onRecordSelection(event) {forms.app_permiss_detail.onRecordSelection2(event);}';
	newForm.onRecordSelection = newForm.newMethod(code);
	if (1==1){
		newForm.getField('checkKeyed').visible = 0;
	}
	/** {JSForm} */
	elements.tabless.addTab(forms['element_list']);
	elements.btn_Okay.enabled = true;
	return  null;
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {JSRecord} record
 * @param {Boolean} stopEdit
 *
 * @properties={typeid:24,uuid:"406CA139-54EE-4A8D-A88E-A5056C1E4A44"}
 * @AllowToRunInFind
 */
function saveEdits(event, record, stopEdit) {
	null;
	if (form_name != null){
		/** @type {JSDataSet<uuid:String,name:String>} */
		var elementNames = security.getElementUUIDs(form_name);//solutionModel.getForm('addressesCustomer').getFields(true) // .getButtons(true) true is inherited elements
		for (var index = 1; index <= elementNames.getMaxRowIndex();index++){
			elementNames.rowIndex = index;
			if (element_uuid && elementNames.uuid == element_uuid){//20180103 change for problem closing element permissions
				element_name = elementNames.name;
				break;
			}
		}
	}
	/** @type {JSFoundSet} */
	var formFs = null;
	var currentKey = forms.app_key_list.key_uuid;
	if (forms['element_list']){
		formFs = forms['element_list'].foundset;
		for (index = 1;index <= formFs.getSize();index++){
			/** @type {JSRecord}  */
			var formRec = {element_name : "", is_ignored : 0, is_enabled : 0, is_visible : 0, permission_uuid : null};
			formRec = formFs.getRecord(index);
			/** @type {QBSelect<db:/stsservoy/permissions>} */
			var fs = databaseManager.createSelect('db:/stsservoy/permissions');
			fs.result.add(fs.columns.permission_uuid);
			fs.where.add(fs.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
			fs.where.add(fs.columns.element_name.eq(formRec.element_name));
			fs.where.add(fs.columns.form_name.eq(form_name));
			fs.where.add(fs.columns.key_uuid.eq(globals.makeUUID(currentKey)));
			var PRM = databaseManager.getFoundSet(fs);
			if (PRM.getSize() > 0){
				/** @type {JSRecord<db:/stsservoy/permissions>} */
				var searchRec = PRM.getRecord(1);
				if (formRec.is_ignored == 1){
					PRM.deleteRecord(searchRec);
				} else {
					var saveRec = false;
					if (searchRec.is_accessible != formRec.is_enabled){
						searchRec.is_accessible = formRec.is_enabled;
						saveRec = true;
					}
					if (searchRec.is_visible != formRec.is_visible){
						searchRec.is_visible = formRec.is_visible;
						saveRec = true;
					}
					if (saveRec){
						///_super.saveEdits(event, newRec, false)
						databaseManager.saveData(searchRec);
					}
				}
			} else {
				if (formRec.is_ignored == 1){
					// ignore
				} else {
					var index2 = PRM.newRecord();
					var newRec = PRM.getRecord(index2);
					newRec.edit_date = new Date();
					if (forms['element_list']){
						newRec.key_uuid = key_uuid.toString();
					} else {
						newRec.key_uuid = null;
					}
					newRec.element_name = formRec.element_name;
					newRec.form_name = form_name;
					newRec.is_accessible = formRec.is_enabled;
					newRec.is_visible = formRec.is_visible;
					newRec.tenant_uuid = globals.session.tenant_uuid;
					newRec.permission_type = permission_type;
					newRec.server_name = 'stsservoy';
					databaseManager.saveData(newRec);
				}
			}
		}
	} else {
		// check for record existing as a record already, delete newrecord if so
		/** @type {JSFoundSet<db:/stsservoy/permissions>} */
		var fs2 = foundset.duplicateFoundSet();
		if (fs2.find()){
			fs2.application_id = application_id;
			fs2.form_name = form_name;
			fs2.element_name = element_name;
			fs2.permission_uuid = '!'+permission_uuid;
			var count = fs2.search();
			if (count){
				var record2 = fs2.getRecord(1);
				var index3 = fs2.getRecordIndex(record2);
				foundset.setSelectedIndex(index3);
				closeDialog(event);
			}
		}
	}
	return _super.saveEdits(event, record, stopEdit)
}
/**
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"69E72D46-7598-44EC-974B-9F494391557F"}
 * @AllowToRunInFind
 */
function onRecordSelection2(event) {
	///return true;
	/** {JSRecord} */
	var selRec = {element_name : "", is_enabled : 0, is_visible : 0};
	selRec = forms['element_list'].foundset.getSelectedRecord();
	var fs = forms.app_permiss_detail.foundset.duplicateFoundSet();
	if (!selRec){return}
	if (fs.find()){
		fs.application_id = application_id;
		fs.form_name = form_name;
		if (selRec){
			fs.element_name = selRec.element_name;
			fs.is_accessible = (selRec.is_enabled == 1);
			fs.is_visible = (selRec.is_visible == 1);
		}
		fs.key_uuid = "!null";
		if (fs.search()){
			var record = fs.getRecord(1);
			forms.app_permiss_detail.foundset.selectRecord(record.permission_uuid);
			null;
			/**var pk = fs.permission_uuid;
			var fs2 = forms.app_permiss_detail.foundset.duplicateFoundSet();
			var index = fs.getSelectedIndex();
			forms.app_permiss_detail.controller.setSelectedIndex(index);*/
			//forms.app_permiss_detail.foundset.getRecordIndex(record);
		}
	}
}
/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"108ECB6C-EDE0-4E5E-BFA3-F4A4A7C37CE5"}
 */
function onDataChangeVisible(oldValue, newValue, event) {
	if (newValue == 1){
		elements.is_accessible.enabled = true;
		is_accessible = 1;
	} else {
		elements.is_accessible.enabled = false;
		is_accessible = 0;		
	}
	return true
}
