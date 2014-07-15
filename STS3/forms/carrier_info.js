/**
 * @properties={typeid:35,uuid:"BC520223-1796-4CDA-92F5-0FD0630A9FC5",variableType:-4}
 */
var editCarrierFlag = false;
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E064DA2E-782E-474C-86F5-D602473B1173"}
 */
function delCarrierRecordAndAddress(event) {
	globals.doDialog("Remove Carrier Record","Delete this Carrier?","Delete","Cancel");
	if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
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
	elements.deleteCarrierButton.text = 'Delete \''+carrier_name+'\'';
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param editStatus
 *
 * @properties={typeid:24,uuid:"E3D11FE7-21BB-4673-BA26-ECA02C3B8401"}
 */
function onEditCarrier(event,editStatus){
		forms.carriers.controller.readOnly = !editStatus;
		forms.carriers_lst.controller.enabled = !editStatus;
		editCarrierFlag = editStatus;
		forms.carriers_rec.elements.addNewCarrierButton.visible = !editStatus;
		forms.carrier_info.elements.deleteCarrierButton.visible = !editStatus;
		forms.carrier_info.elements.cancelButton.visible = editStatus;
		forms.carrier_info.elements.saveButton.visible = editStatus;
		forms.carrier_info.elements.editButton.visible = !editStatus;
		
	}

	/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B9D2388A-C4A5-411A-A952-9EA4CC7D76FE"}
 */
function onActionEditCarrier(event) {
		onEditCarrier(event,true);
		databaseManager.setAutoSave(false);
	}

	/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"2D2FDD4C-4DC6-4BB9-B450-9446D0DB8840"}
 */
function onActionCancelEditCarrier(event) {
		onEditCarrier(event,false);
		databaseManager.revertEditedRecords(foundset);
		databaseManager.setAutoSave(true);
	}

	/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"100B8F88-B23F-43E4-BC9F-2CB51D291148"}
 */
function onActionSaveEditCarrier(event){
		tenant_uuid = globals.secCurrentTenantID;
		onEditCarrier(event,false);
		databaseManager.saveData(foundset);
		databaseManager.setAutoSave(true);
	}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"745C0B19-A344-48E6-A10A-C46A89182EC6"}
 */
function onActionClose(event) {
	globals.stopWindowTrack();
	globals.mainWindowFront();
}
