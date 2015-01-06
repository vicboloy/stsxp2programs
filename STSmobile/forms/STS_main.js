
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"28761D3F-8A1A-45E4-BE3B-942E9C29542B"}
 */
function onLoad(event) {
	var newArray = globals.locationList();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BF6DDE9E-CFA8-4F24-B28F-6911837D6874"}
 */
function onActionTemp(event) {
	if (true) {return true}
	/** @type {JSFoundSet<db:/stsservoy/messages>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/messages');
		// This selects only files ('1'), previous dir must be used ('null'), no multiselect ('false') and
		// the filter "JPG and GIF" should be used: ('new Array("JPG and GIF","jpg","gif")').
		/** @type {JSFile} */
		var f = plugins.file.showFileOpenDialog(1);
		null;
		var txt = plugins.file.readTXTFile(f);
		var lines = txt.split('\n');
		for (var index = 0;index < lines.length;index++){
			fs.newRecord();
			var error = lines[index].split(',');
			fs.message_num = error[0];
			fs.message_text = error[1];
		}
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B48A3328-0E53-428C-979D-FE0FA2E98598"}
 */
function onShow(firstShow, event) {
	globals.mobForm = "STS_main";
	globals.mobProg = "Main";
}
