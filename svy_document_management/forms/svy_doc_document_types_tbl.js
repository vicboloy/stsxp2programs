/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2C12C36F-51F5-4E0F-A405-79A794537801"}
 */
function createNewDocumentType(event) {
	foundset.newRecord(false);
	databaseManager.saveData(foundset);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3232E274-D9D5-459D-A100-8AA37586E299"}
 */
function onShow(firstShow, event) {
	foundset.loadAllRecords();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3F8EE214-D766-4137-859C-A9E23FB5A5EB"}
 */
function deleteDocumentType(event) {
	var pressBtn = globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('i18n:svy.fr.lbl.delete'),
			i18n.getI18NMessage('i18n:svy.fr.dlg.delete_doc_type'), i18n.getI18NMessage('i18n:svy.fr.lbl.yes'), 
			i18n.getI18NMessage('i18n:svy.fr.lbl.no'));
	
	if(pressBtn == i18n.getI18NMessage('i18n:svy.fr.lbl.yes'))
		foundset.deleteRecord();
	else
		return ;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"8D66A5A2-0EE9-4412-A608-C24BD3E4E741"}
 */
function onDataChange(oldValue, newValue, event) {
	// Convert extensions to lower case
	
	if (extension)
		extension = extension.toLowerCase();
	
	databaseManager.saveData(foundset);

	return true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87A4ECDF-8137-4592-B7BF-FF5767FA89F3"}
 */
function initDocumentTypes(event) {
	
	// Array of some default document types
	var _arr = [
					['png', 'The PNG file type is primarily associated with "Portable (Public) Network Graphic". Proposed GIF replacement. The Macintosh type is: PNGf'],
					['gif', 'The GIF file type is primarily associated with "Graphic Interchange Format". Graphic files in .GIF format can be manipulated by a large number of programs.'],
					['jpg', 'The JPG file type is primarily associated with "JPEG/JIFF Image". A lossy bitmap image format used by digital cameras and to display photographs on the Web'],
					['jpeg', 'The JPEG file type is primarily associated with "JPEG/JIFF Image". A lossy bitmap image format used by digital cameras and to display photographs on the Web'],
					['doc', 'The DOC file type is primarily associated with "Word" by Microsoft Corporation.'],
					['xls', 'The XLS file type is primarily associated with "Excel" by Microsoft Corporation.'],
					['pdf', 'The PDF file type is primarily associated with "Acrobat" by Adobe Systems Incorporated.'],
					['ppt', 'The PPT file type is primarily associated with "PowerPoint" by Microsoft Corporation.'],
					['tiff', 'The TIFF file type is primarily associated with "Tagged Image Format File". Also most fax files.'],
					['bmp', 'The BMP file type is primarily associated with "Windows OS/2 Bitmap Graphics".'],
					['docx', 'The DOCX file type is primarily associated with "Word" by Microsoft Corporation.'],
					['xlsx', 'The XLSX file type is primarily associated with '],
					['pptx', 'The PPTX file type is primarily associated with '],
					['ps', 'The PS file type is primarily associated with "PostScript".'],
					['odt', 'The ODT file type is primarily associated with "OpenOffice/StarOffice" by Sun Microsystems, Inc..'],
					['ods', 'The ODS file type is primarily associated with "OpenOffice/StarOffice" by Sun Microsystems, Inc..'],
					['odp', 'The ODP file type is primarily associated with "OpenOffice/StarOffice" by Sun Microsystems, Inc..'],
					['odg', 'The ODG file type is primarily associated with "OpenOffice/StarOffice" by Sun Microsystems, Inc.'],
					['sql', 'The SQL file type is primarily associated with "Structured Query Language Data".'],
					['csv', 'The CSV file type is primarily associated with "Comma-Separated Variables".'],
					['txt', 'The TXT file type is primarily associated with "Text File".']				
				];
	
	// Populate the default Document types	
	for (var _i=0; _i < _arr.length ; _i++) {
		scopes.svyDocumentManagement$model.docType = _arr[_i][0];
		if(!databaseManager.hasRecords(_to_doc_document_type$extension))
		{
			var _newDocTypeRecord = _to_doc_document_type$extension.getRecord(_to_doc_document_type$extension.newRecord());
			_newDocTypeRecord.name = _arr[_i][1];
			_newDocTypeRecord.extension = _arr[_i][0];
			
			databaseManager.saveData(_newDocTypeRecord);
		}
	}
	
	foundset.loadAllRecords();
}

/**
 * Save foundset 
 * 
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"13D16AD1-073E-4ED9-933B-8C9BB74AEF64"}
 */
function saveData(event) {
	databaseManager.saveData(foundset.getSelectedRecord());
	
	return true;
}
