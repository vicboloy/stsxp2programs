/**
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"20DE3C29-9DB8-4406-A294-DCCB67045B8E"}
 */
function onShow(firstShow, event) {
	controller.loadRecords();
	controller.sort('edit_date asc');
	return _super.onShow(firstShow, event)
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"F6DF6D3C-AB99-4AD6-8502-C2562E84F498"}
 */
function onActionSelectAll(event) {
	var formNamePrefix = event.getFormName().split("_")[0];
	var fs = forms[formNamePrefix+'_pcmk_combo_table'].foundset;
	var i = 1;
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i++);
		rec.selection = 1;
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"AE8CD224-DC45-44BE-A095-B1D3673F50F3"}
 */
function onActionClearAll(event) {
	var formNamePrefix = event.getFormName().split("_")[0];
	var fs = forms[formNamePrefix+'_pcmk_combo_table'].foundset;
	var i = 1;
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i++);
		rec.selection = 0;
	}
}
/**
 * @param event
 * @param formName
 *
 * @properties={typeid:24,uuid:"32E9EEC7-C43F-451C-A0C1-BA3D04587D90"}
 */
function onActionRemoveSelected(event,formName) {
	var formNamePrefix = event.getFormName().split("_")[0];
	forms[formNamePrefix+'_pcmk_combo'].onActionRemoveSelected(event);
}