/**
 * @properties={typeid:35,uuid:"7FB44BC4-D696-41A8-BCB5-1B6628A8334B",variableType:-4}
 */
var callback = null;

/**
 * @properties={typeid:35,uuid:"205A60B3-EF10-4ACE-9FE7-8E865C77F80F",variableType:-4}
 */
var editsSaved = false;

/**
 * @properties={typeid:35,uuid:"AEFF74A2-1570-44DE-87FD-C58904FA32EF",variableType:-4}
 */
var isInDialog = false;

/**
 * Base method called when dialog is closed. 
 * All outstanding edits are rolled back and the specified callback function is invoked. 
 * However for example, implementation forms could override and confirm losing unsaved edits.
 * This method always returns true, allowing the dialog to close.
 *
 * @param {JSEvent} event the event that triggered the action
 * @returns {Boolean} true if the dialog should be closed.
 *
 * @properties={typeid:24,uuid:"17832EF1-DFE2-46A1-AD49-9FF39D2A6AC6"}
 */
function onHide(event) {
	if(isInDialog){
		stopEditing();									//	close in-memory transaction - could be overridden
		if(callback){									//	detrmine if a callback method shsould be called
			callback.apply(this, editsSaved)			//	invoke the callback and pass in the value for saved edits
		}
		editsSaved = false;								//	reset the edits flag
		isInDialog = false;								//	reset the in dialog flag
	}
	errorMessage = null;								//	clear any oustanding error
	return true;										//	always allow close - could be overridden
}

/**
 * Base method for showing the form in a modal dialog
 * An in-memory transaction is opened and the dialog is shown.
 * An optional callback method may be invoked upon closing
 * 
 * @param {JSEvent} event the event that triggered the action
 * @param {Function} [onDialogClose] Callback Method to invoke after saving
 * @param {Number} [x] the x coord. Optional
 * @param {Number} [y] the y coord. Optional
 * @param {Number} [width] the width. Optional
 * @param {Number} [height] the height. Optional
 * @param {String} [dialogTitle] the title. Optional
 * @param {Boolean} [resizable] resizable. Optional
 * @param {Boolean} [showTextToolbar] Show the text tool bar. Optional
 * 
 * @properties={typeid:24,uuid:"61C2AE81-EFAD-4320-B11C-EBDB7BFE9449"}
 */
function showDialog(event, onDialogClose,x,y,width,height,dialogTitle,resizable,showTextToolbar) {
	isInDialog = true;									//	set the in-dialog flag
	callback = onDialogClose;							//	set the form variable for the callback	
	startEditing();										//	open the in-memory transaction
	application.showFormInDialog(						//	show the form in the center of the screen (parameters may be overridden)
		forms[controller.getName()],
		x,y,width,height,dialogTitle,resizable,showTextToolbar,controller.getName());
}

/**
 * Base method to close the dialog. Typically called from a 'close' button
 * Any logic should be handled in the onHide() method to account for unexpected closes
 * 
 * @param {JSEvent} event the event that triggered the action
 * @properties={typeid:24,uuid:"899584C0-BBAC-46CD-B280-D30212ECB469"}
 */
function closeDialog(event) {
	application.closeFormDialog(controller.getName());	//	close the dialog
}

/**
 * Base method to validate and save outstanding edits, then closing the dialog.
 * @param {JSRecord} [record] Optionally save only one record (i.e. foundset.getSelectedRecord())
 * @returns {Boolean} True when the data was validated and saved
 *
 * @properties={typeid:24,uuid:"A00338B1-275D-410E-8F3D-9A8B85602CBC"}
 */
function saveEdits(record) {					
	if(_super.saveEdits(record)){						//	Invoke super to save edits
		editsSaved = true;								//	Set the 'saved' flag (used in the callback)
		closeDialog();									//	close the dialog
		return true;
	}
	return false;
}
