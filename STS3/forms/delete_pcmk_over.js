
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"442BD1C3-C61C-439C-9E4C-A26A0055244C"}
 */
function onShow(firstShow, event) {
	controller.loadRecords();
	return _super.onShow(firstShow, event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4AE881AE-9D63-4980-BC47-2F793DF52C61"}
 */
function onActionSelectAll(event) {
	var formName = event.getFormName();
	var fs = forms['delete_pcmk_combo_table'].foundset;
	var i = 1;
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i++);
		rec.selection = 1;
	}
}
/**
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"83D9C53D-815E-40D0-A20B-F17DE9CD933F"}
 */
function onActionClearAll(event) {
	var fs = forms['delete_pcmk_combo_table'].foundset;
	var i = 1;
	while (i <= fs.getSize()){
		var rec = fs.getRecord(i++);
		rec.selection = 0;
	}
}
/**
 *
 * @param event
 * @param formName
 *
 * @properties={typeid:24,uuid:"EBD3495D-95B6-443E-8F4D-0B1715177021"}
 */
function onActionDeleteSelected(event,formName) {
	forms.delete_pcmk_combo.onActionDeleteSelected(event,'delete_pcmk_combo');
}