
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DCFF7CD2-F1A7-495E-8DFA-B88DEC4E5603"}
 */
function onShow(firstShow, event) {
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B47EFAAF-FD3A-4106-9BE8-91346306BEE6"}
 */
function excludeShapes(event){
	//var dialog = 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CD7F9F6A-5B22-48EF-9EE5-EF631B493F1C"}
 */
function onActionCancelPrint(event) {
	forms['sts_x'].onActionCancelPrint(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E858AD75-907C-4CCF-959F-8E89AF6C8C9F"}
 */
function onActionPrintAll(event) {
	/**
	 * Collect and set selected from all items in table
	 * confirm if any already printed
	 * Proceed to import the selected piecemarks
	 * insert print dialog
	 */
	 /** @type {JSFoundSet<db:/stsservoy/import_table>} * /
	var tableFS = databaseManager.getFoundSet('db:/stsservoy/import_table');
	var fsUpdate = databaseManager.getFoundSetUpdater(tableFS);
	fsUpdate.setColumn('selected',0);
	fsUpdate.performUpdate();*/

	var index = 1;
	var toBePrintedPks = [];
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var fsTabName = forms.import_embed.elements.tabless.getTabFormNameAt(1);
	var fs = forms[fsTabName].foundset;
	while (rec = fs.getRecord(index++)){
		toBePrintedPks.push(rec.import_table_id);
	}
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.where.add(q.columns.import_table_id.isin(toBePrintedPks));
	q.result.add(q.columns.import_table_id);
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var Q = databaseManager.getFoundSet(q);
	var Qupdater = databaseManager.getFoundSetUpdater(Q);
	Qupdater.setColumn('selected',1);
	Qupdater.performUpdate();
	//databaseManager.saveData(Q);
	
	scopes.kiss.performImportTable();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47525F49-11CC-45E9-86C7-9BB0FAB06C6F"}
 */
function onActionPrintSelected(event) {
	/**
	 * Collect and set selected from all items in table
	 * confirm if any already printed
	 * Proceed to import the selected piecemarks
	 * insert print dialog
	 */
	scopes.jobs.perfImportDate = new Date();
	databaseManager.saveData(foundset);
	var setFilter = databaseManager.addTableFilterParam('stsservoy','import_table','selected','=',1,'setSelect');
	//application.updateUI();
	//if (1==1){return}
	 /** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var tableFS = databaseManager.getFoundSet('db:/stsservoy/import_table');
	var fsUpdate = databaseManager.getFoundSetUpdater(tableFS);
	fsUpdate.setColumn('selected',0);
	fsUpdate.performUpdate();

	var index = 1;
	var toBePrintedPks = [];
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var formName = forms.import_embed.elements.tabless.getTabFormNameAt(1);
	var fs = forms[formName].foundset;
	while (rec = fs.getRecord(index++)){
		if (rec.selection == 1){
			toBePrintedPks.push(rec.import_table_id);
		}
	}
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	q.where.add(q.columns.import_table_id.isin(toBePrintedPks));
	q.result.add(q.columns.import_table_id);
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var Q = databaseManager.getFoundSet(q);
	var Qupdater = databaseManager.getFoundSetUpdater(Q);
	Qupdater.setColumn('selected',1);
	Qupdater.performUpdate();
	
	scopes.kiss.performImportTable();
}
