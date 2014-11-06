/**
 * TODO generated, please specify type and doc for the params
 * @param winName
 *
 * @properties={typeid:24,uuid:"773F765F-1143-442A-9EC7-A9C53D44164C"}
 */
function changeWindow(event,winName){
	var currWin = application.getActiveWindow();
	switch(winName)	{
		case 'transactions':
		currWin.show('rf_transactions');
		break;
	default:
	}
}
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
