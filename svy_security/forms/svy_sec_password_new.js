/**
 * @type {JSRecord<db:/svy_framework/sec_user>}
 * @properties={typeid:35,uuid:"DC86A82E-E845-47F5-9569-CDC834DDE4E1",variableType:-4}
 */
var vRecUser = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"783bb000-4fcd-460d-bbb2-9bd53277c473"}
 */
var new_password = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"cc310575-d66c-4f05-96a1-a746527ff1ab",variableType:4}
 */
var password_ok = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"d4010ef9-b621-4536-bfc1-dda6333cf207"}
 */
var retype_newpassword = '';

/**
 * Method to check a password, for lenght, begin, equal, not the same begin, must contain numbers.
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"e31e120a-3a2a-4415-817c-b1a128822824"}
 */
function check_password(_event)
{
	var userId;
	if (vRecUser) {
		userId = vRecUser.user_id;
	} else if (globals.svy_sec_trigger_form != globals.svy_utl_getFrameworkFormName('sec_main_user_password_tbl') && globals.svy_sec_lgn_user_id) {
		// form is not called from user_dtl form
		userId = application.getUUID(globals.svy_sec_lgn_user_id);
	} else {
		userId = forms[globals.svy_utl_getFrameworkFormName('sec_main_user_access')].user_id;
	}
	
	if (!userId) {
		elements.lbl_warning.text = "No userId found";
		return;
	}

	if (new_password != retype_newpassword) {
		elements.lbl_warning.text = i18n.getI18NMessage('svy.fr.dlg.password_not_equal')
		return;
	}

	// check the password
	/** @type {JSFoundSet<db:/svy_framework/sec_user>} */
	var fs = databaseManager.getFoundSet("db:/" + globals.nav_db_framework + "/sec_user");
	fs.loadRecords(userId);
	
	if (!utils.hasRecords(fs)) {
		elements.lbl_warning.text = "Failed to find the user record!";
		return;
	}
	
	var userRecord = fs.getRecord(1);
	
	var success;
	try {
		success = fs.changePassword(new_password, userRecord);
	} catch (e) {
		elements.lbl_warning.text = e.message
		return;
	}

	if (!success) // problem saving the password
	{
		elements.lbl_warning.text = ""
		return;
	}

	// hook to have method to update your own tables.
	if (globals['scc_changePassword']) {
		globals['scc_changePassword'](userRecord, new_password)
	}
	
	password_ok = 1
	globals.svy_sec_trigger_form = null
	
	globals.svy_nav_closeForm(_event)
}

/**
 *  Lets the user only exit the dialog if he chooses one of the options
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 *
 * @properties={typeid:24,uuid:"70e850ab-3bc2-4a27-bae0-157db919df43"}
 */
function onHide() {
	if (password_ok == 0) {
		return false

	} else return true
}

/**
 *  Sets the variables to null
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 *
 * @properties={typeid:24,uuid:"3d36a548-ad8f-443d-8a24-5878fcf2e491"}
 */
function onShow() {
	password_ok = 0
	elements.lbl_warning.text = null
	new_password = null
	retype_newpassword = null
	controller.focusFirstField()
}

/**
 *  Cancel
 *
 * @author Sanneke Aleman
 * @since 2008-05-04
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"f482f534-c978-4938-bbbd-80e09271a08f"}
 */
function cancel(_event) {
	password_ok = 1
	globals.svy_nav_closeForm(_event)
}

/**
 * @param {JSRecord<db:/svy_framework/sec_user>} _recUser
 * @properties={typeid:24,uuid:"46206A07-D27E-448A-8F00-594B1C9EAD92"}
 */
function show(_recUser) {
	//store record in variable
	vRecUser = _recUser
	globals.DIALOGS.showFormInModalDialog(forms[controller.getName()])
}
