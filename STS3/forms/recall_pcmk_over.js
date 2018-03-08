/**
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"A7DD2E47-7CCF-4EA9-BD71-A3141B8A39EE"}
 */
function onShow(firstShow, event) {
	controller.loadRecords();
	return _super.onShow(firstShow, event)
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"2FFB8EDD-4659-4BB7-8A7C-50E697DCD50D"}
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
 * @properties={typeid:24,uuid:"D2BCDFB7-33BC-4BF6-B957-E95BA18320D9"}
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
 * @properties={typeid:24,uuid:"F8A5DF9B-9976-4B24-910D-622AA2B319A9"}
 */
function onActionRecallSelected(event,formName) {
	var formNamePrefix = event.getFormName().split("_")[0];
	forms[formNamePrefix+'_pcmk_combo'].onActionRecallSelected(event);
}

