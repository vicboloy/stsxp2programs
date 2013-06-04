/**
 * @properties={typeid:24,uuid:"e47c1302-8e4f-4296-b594-03421cb5149a"}
 */
function printOrderDetails()
{
	forms.order_details_rep.controller.loadRecords(foundset)
	forms.order_details_rep.controller.sort('order_id asc')
	forms.order_details_rep.controller.showPrintPreview()
}

/**
 * @properties={typeid:24,uuid:"a0860e97-8daa-48c9-8d7a-0ab1c6649f57"}
 */
function printPdf()
{
	forms.order_details_rep.controller.loadRecords(foundset);
	forms.order_details_rep.controller.sort('order_id asc');
	
	/** @type {String} */
	var _filepath = plugins.file.showFileSaveDialog();	
	var _printer = plugins.pdf_output.getPDFPrinter(_filepath);
	forms.order_details_rep.controller.print(false, false, _printer);
}
