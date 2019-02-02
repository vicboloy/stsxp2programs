
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"410DFFAD-4A6C-470D-93D8-8C4C78DAA46A"}
 */
function onRecordSelection(event) {
	var form = forms['mc_label_dests'];
	if (!form.editingMode){
		form.printerName = printer_name;
		form.labelName = label_template_name;
		form.screenName = rf_screen_name;
		form.elements.btn_Add.visible = false;
		form.elements.btn_Update.visible = true;
	}
}
