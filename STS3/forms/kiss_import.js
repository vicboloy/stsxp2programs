/**
 * @properties={typeid:35,uuid:"8219B251-F78E-47C2-9DBC-AD3F2257A453",variableType:-4}
 */
var mappedFormatArray = [];
/**
 * TODO generated, please specify type and doc for the params
 *
 * @properties={typeid:24,uuid:"29613655-7267-4CA0-84D1-F961CC7C7709"}
 */
function fileReceipt(file){
	if (file == null){return}
	scopes.jobs.readKissTextFile(file);
	//establish error-free or dialog with errors, correct column count, mapping, 
	var win = application.createWindow("KISS Import", JSWindow.DIALOG);
	win.title = "KISS Import";
	win.show(forms.kiss_option_import);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param {Event} event
 *
 * @properties={typeid:24,uuid:"B3F01716-FF60-4B1E-94C0-C57744ED6B31"}
 */
function getKissFile(event){
	var success = history.removeForm('kiss_barcode_request');
	if (success){
		var success2 = solutionModel.removeForm('kiss_barcode_request');
	}
	history.removeForm('kiss_excludes_lst');
	solutionModel.removeForm('kiss_excludes_lst');
	//var path = "C:\\Users\\Alienware\\Documents\\STS p2programs\\KISS\\";
	var path = scopes.prefs.importpath;
	plugins.file.showFileOpenDialog(0, path, false, fileReceipt);
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AFAC0BFC-86EE-4035-8A29-E52E00E956B5"}
 */
var texts="";
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"17F794AB-0E0E-4D5D-8835-E442A59A244F"}
 */
function onActionAddTenant(event) {
	var appType = application.getApplicationType();
	if (appType == 2){
		//plugins.file.showDirectorySelectDialog(directory)
		//plugins.file.get
		//var dir=plugins.file.showDirectorySelectDialog('c:\\STS\\');
		//var jsFileType = plugins.file.convert
		texts = plugins.file.readTXTFile('c:\\STS\\STS.txt');
		application.output(texts);
	}
	/** * @type {JSFoundset<db:/stsservoy/uom_types>} */
/**	var fs=databaseManager.getFoundSet('db:/stsservoy/uom_types');
	//fs.deleteAllRecords();
	//return;
	fs.loadAllRecords();
	var count = fs.getSize();
	for (var i=1;i<=count;i++){
		var rec = fs.getRecord(i);
		if (rec.tenant_uuid == null){
			rec.tenant_uuid = globals.secCurrentTenantID;
			var error = databaseManager.saveData(rec);
		}
	}
	application.output('saved '+error);
	*/
}
