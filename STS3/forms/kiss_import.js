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
	var path = "C:\\Users\\Alienware\\Documents\\STS p2programs\\KISS\\";
	plugins.file.showFileOpenDialog(0, path, false, fileReceipt);
}
