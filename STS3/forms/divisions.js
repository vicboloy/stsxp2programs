/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EDD95397-117A-4C6F-899E-572130E73C49"}
 */
var totalLicenses = "0/0";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"07A23754-DD1E-4A0E-BC45-6098831FC30D",variableType:4}
 */
var licenseDesktop = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9A411FB3-A691-48D7-9035-9E1056EB8291",variableType:4}
 */
var licenseMobile = 0;
/**
 * @properties={typeid:35,uuid:"9CCBF445-8737-43DF-801C-6C9E7D6E38ED",variableType:-4}
 */
var existingDivisions = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5252B434-08B3-4A93-A6DE-A8B0E7953CAB"}
 */
var errorMessage2 = "";
/**
 *
 * @param {Number} [index] 
 *
 *
 * @properties={typeid:24,uuid:"632687C8-5715-4EF2-B917-A823999EDDBD"}
 */
function assocListRecord(index){
	return foundset.getRecord(index);
}
/**
 * @properties={typeid:24,uuid:"FC4CDAC0-CA7E-4F63-8CCC-696FF355D31F"}
 */
function assocListCount(){
	return foundset.getSize();
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} location
 * @param {Boolean} changeSelection
 *
 * @properties={typeid:24,uuid:"5FA94E54-432C-481E-B00B-77F8A66C8A97"}
 */
function newRecord(event, location, changeSelection) {
	existingDivisions = [];
	var newFS = foundset.duplicateFoundSet();
	/** @type {JSFoundSet<db:/stsservoy/associations>} */
	var rec = null; var index = 1;
	while (rec = newFS.getRecord(index++)){
		existingDivisions.push(rec.association_name);
	}
	/** @type {JSFoundset<db:/stsservoy/tenant_list>} */
	var newRec = _super.newRecord(event, location, changeSelection);
	logic_flag = 0;
	edit_date = new Date();
	tenant_uuid = globals.session.tenant_uuid;
	tenant_group_uuid = globals.session.parentAssociationId;
	elements.newEntry.requestFocus();
	forms.tenant_divisions_m.onEdit(event,true);
	return newRec;
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AC37FB18-D1DB-4306-A285-BC004019CEB7"}
 */
function onShow(firstShow, event) {
	globals.setUserFormPermissions(event,false);
	showLicensing();
	editInactive(event);
	foundset.sort('logic_flag desc, association_name asc');
	var isCorp = globals.session.corpUser;//(association_uuid == tenant_group_uuid);
	if (application.isInDeveloper()){application.output('isCorp '+isCorp+' assocUUID '+association_uuid+' TenantGroupUUID '+tenant_group_uuid)}
	elements.btn_New.visible = isCorp;
	return _super.onShow(firstShow, event);
}
/**
 * @properties={typeid:24,uuid:"11AFB06B-9040-47F5-A0AC-C8FD6F298797"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function showLicensing(){
	totalLicenses = scopes.globals.getTenantUsedLicenses();
	if (totalLicenses.search('-') != -1){
		globals.licenseError = true;
		if (application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT){
			globals.errorDialogMobile(null,'1073','','');//1073 license count exceeded
		}
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F496C7D6-BA7E-4CF2-9232-0B5F8F475701"}
 */
function onActionCompanyRename(event) {
	var formName = event.getFormName();
	var provider = forms[formName].elements['companyName'].getDataProviderID();
	var oldName = controller.getDataProviderValue(provider);
	var newMsg = i18n.getI18NMessage('sts.txt.rename.company.msg').replace('XXX',oldName);
	var newName = plugins.dialogs.showInputDialog(i18n.getI18NMessage('sts.txt.rename.company'),newMsg,oldName);
	if (!newName || newName == "" || newName.toUpperCase() == oldName.toUpperCase()){return}
	newName = newName.toUpperCase();
	forms[formName].controller.setDataProviderValue(provider,newName);
}
/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"E80702F9-4ADD-4168-BF0E-C56D58C62399"}
 */
function editActive(event){
	buttonsEnabled(true);
}
/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"EB184517-7E7C-4618-B3F9-A6C188FEFDCA"}
 */
function editInactive(event){
	buttonsEnabled(false);
}
/**
 *
 * @param enabled
 *
 * @properties={typeid:24,uuid:"7DBD09A1-E713-4988-9D5F-773501992A73"}
 */
function buttonsEnabled(enabled){
	elements.btn_Check.enabled = enabled;
	//elements.btn_Office.enabled = enabled;
	if (association_uuid == tenant_group_uuid){
		elements.btn_Rename.enabled = enabled;
		elements.btn_Rename.visible = enabled;
	}
	elements.btn_Delete.enabled = enabled;
	elements.desktop.editable = enabled;
	elements.mobile.editable = enabled;
	elements.btn_New.enabled = !enabled;
	elements.newEntry.enabled = enabled;
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
 * @properties={typeid:24,uuid:"10C60271-78D6-4A88-A00B-CA1E56B9C75C"}
 */
function onDataChangeDivision(oldValue, newValue, event) {
	forms['tenant_divisions_m'].elements.btn_Save.enabled = false;
	//ticket#65 name changes that match other records go to that record
	/** @type {QBSelect<db:/stsservoy/associations>} */
	var a = databaseManager.createSelect('db:/stsservoy/associations');
	a.result.add(a.columns.association_uuid);
	a.where.add(a.columns.association_name.trim.eq(newValue));
	//a.where.add(a.columns.delete_flag.not.eq(99));
	a.where.add(a.or
		.add(a.columns.delete_flag.not.eq(99))
		.add(a.columns.delete_flag.isNull)
		);
	//.add(a.where.add(a.columns.delete_flag.isNull)))
	a.where.add(a.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	var A = databaseManager.getFoundSet(a);
	// ** @type {QBSelect<db:/stsservoy/associations>} */
	//var b = databaseManager.createSelect('db:/stsservoy/associations');
	//b.result.add(b.columns.association_uuid);
	//b.where.add(b.columns.association_name.trim.eq(newValue));
	//b.where.add(b.columns.delete_flag.isNull);
	//.add(a.where.add(a.columns.delete_flag.isNull)))
	//b.where.add(b.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	//var B = databaseManager.getFoundSet(b);
	//if (B.getSize() > 0){
	//	var rec = B.getRecord(1);
	//	databaseManager.revertEditedRecords(foundset);
	//	var idx = foundset.getRecordIndex(rec);
	//	foundset.setSelectedIndex(idx);
	//} else if (A.getSize() > 0){
	if (A.getSize() > 0){
		var rec = A.getRecord(1);
		databaseManager.revertEditedRecords(foundset);
		idx = foundset.getRecordIndex(rec);
		foundset.setSelectedIndex(idx);
		forms['tenant_divisions_m'].elements.btn_Save.enabled = false;
		return true;
	}
	licenses_desktop = 1;
	licenses_mobile = 0;
	forms['tenant_divisions_m'].elements.btn_Save.enabled = true;
	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} index
 *
 * @properties={typeid:24,uuid:"E7F20FC9-205F-4531-86E3-859F92A9D93B"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function deleteRecord(event, index) {
	// update to qbselect 20161121

	var status = globals.checkAssociationsEmpty(association_uuid);
	if (status != ''){
		globals.errorDialogMobile(event,'1071','',status); //1071, record has data. will not be deleted.
		return false;   // Do not delete association that is attached to a job				
	}
	forms.tenant_divisions_m.onEdit(event,true);
	return _super.deleteRecord(event, index);
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"989E8755-D41B-456B-96AD-6A24039EC4A9"}
 */
function onRender(event) {
	var rec = event.getRecord();
	if (rec && rec.association_uuid == rec.tenant_group_uuid && event.getRenderable().getName() == 'company_name'){
		event.getRenderable().bgcolor = 'pink';
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F4013B9F-4ADF-4F64-92ED-7F8681547542"}
 */
function onFocusLostDivisionEntry(event) {
	forms.tenant_divisions_m.elements.btn_Save.enabled = (!(!association_name));
}
