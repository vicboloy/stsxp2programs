/**
 * @properties={typeid:35,uuid:"BC520223-1796-4CDA-92F5-0FD0630A9FC5",variableType:-4}
 */
var editCarrierFlag = false;
/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"E064DA2E-782E-474C-86F5-D602473B1173"}
 * @SuppressWarnings(wrongparameters)
 */
function delCarrierRecordAndAddress(event) { //#task04, #task03
	var status = globals.checkCarrierEmpty(carrier_number);
	if (status != ''){
		scopes.globals.errorDialogMobile(event,'1071',null,status);
		return;
	}
	globals.doDialog(i18n.getI18NMessage('sts.txt.delete.record'),
			i18n.getI18NMessage('sts.txt.delete.this.carrier'),
			i18n.getI18NMessage('sts.txt.delete'),
			i18n.getI18NMessage('sts.txt.cancel'));
	if (globals.dialogResponse.toLowerCase() == 'yes'){
			delete_flag = 99;
			edit_date = new Date();
			var rec = foundset.getSelectedRecord();
			databaseManager.saveData(rec);
	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"B9AB506A-3288-47F8-8A1A-0F33D772766A"}
 */
function onRenderCarrierButton(event) {
	elements.btn_Delete.text = i18n.getI18NMessage('sts.btn.delete');
}
/**
 *
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"E3D11FE7-21BB-4673-BA26-ECA02C3B8401"}
 */
function onEditCarrier(event,editStatus){
	if (foundset.getSize() == 0){return}
	var instanceForm = globals.getInstanceForm(event);
	forms['carriers'+instanceForm].controller.readOnly = !editStatus;
	//forms.carriers_lst.controller.enabled = !editStatus;
	editCarrierFlag = editStatus;
	forms['carrier_info'+instanceForm].controller.readOnly = !editStatus;
	forms['carriers_rec'+instanceForm].elements.btn_New.visible = !editStatus;
	forms['carrier_info'+instanceForm].elements.btn_Delete.visible = !editStatus;
	forms['carrier_info'+instanceForm].elements.btn_Cancel.visible = editStatus;
	forms['carrier_info'+instanceForm].elements.btn_Save.visible = editStatus;
	forms['carrier_info'+instanceForm].elements.btn_Edit.visible = !editStatus;
		
}

	/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"B9D2388A-C4A5-411A-A952-9EA4CC7D76FE"}
 */
function onActionEditCarrier(event) {
		onEditCarrier(event,true);
		//databaseManager.setAutoSave(false); //#task02
		globals.permissionsCacheHit(event,null);
	}

	/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"2D2FDD4C-4DC6-4BB9-B450-9446D0DB8840"}
 */
function onActionCancelEditCarrier(event) {
		onEditCarrier(event,false);
		databaseManager.revertEditedRecords(foundset);
		databaseManager.revertEditedRecords(forms['carriers_rec'].addressFS);
	}

	/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"100B8F88-B23F-43E4-BC9F-2CB51D291148"}
 */
function onActionSaveEditCarrier(event){
		tenant_uuid = globals.session.tenant_uuid;
		edit_date = new Date();
		databaseManager.saveData(foundset.getSelectedRecord());
		databaseManager.saveData(forms['carriers_rec'].addressRec);
		onEditCarrier(event,false);
	}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"745C0B19-A344-48E6-A10A-C46A89182EC6"}
 */
function onActionClose(event) {
	globals.stopWindowTrackEvent(event);
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
 * @properties={typeid:24,uuid:"954AB831-FCE3-477B-9DF1-A5B72004B795"}
 */
function onDataChangeCarrierName(oldValue, newValue, event) { //#task03
	/** @type {QBSelect<db:/stsservoy/carrier>} */
	var c = databaseManager.createSelect('db:/stsservoy/carrier');
	c.result.add(c.columns.carrier_id);
	c.where.add(c.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	c.where.add(c.columns.delete_flag.isNull);
	c.where.add(c.columns.carrier_number.eq(newValue));
	var C = databaseManager.getFoundSet(c);
	if (C.getSize() > 0){
		var rec = C.getRecord(1);
		onActionCancelEditCarrier(event);
		var idx = foundset.getRecordIndex(rec);
		foundset.setSelectedIndex(idx); //ticket #118 resolve record still showing and selection
	}
	return true;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DB785183-C273-4686-9517-00D36B84B139"}
 */
function onShow(firstShow, event) {
	if (foundset.getSize() == 0){
		elements.btn_Delete.visible = false;
		scopes.jobs.formPermissions(event,true);
	}
	onEditCarrier(event,false);
	return _super.onShow(firstShow, event)
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"E2796BCC-C321-4D79-9612-D563951071B8"}
 */
function onHide(event) {
	globals.stopWindowTrackEvent(event);
	onActionClose(event);
	return _super.onHide(event)
}
