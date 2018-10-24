/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AAA28037-F13F-4274-9F80-CF2F49993C3D",variableType:4}
 */
var selectedCheck = 1;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"00159F8F-AA49-4ED6-9372-91C8B84FDEAD",variableType:4}
 */
var lastIndex = 0;
/**
 * @properties={typeid:35,uuid:"ED674758-2942-4E9C-B9A7-5BC2A08B244F",variableType:-4}
 */
var firstPass = false;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7E5A32FD-8CF5-451B-A164-04B3E008F894"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		var formName = event.getFormName();
		scopes.jobs.tablePrefsLoad(formName);
		firstPass = true;
	}
}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"75866502-3028-4E5E-AA56-56E7E50145A9"}
 */
function onRender(event) {
	// NOTE: a property set on the renderable, will be kept on the element only during onRender
	var rec = event.getRecord();
	if (rec && event.getRenderable()){
		
		var bgColor = (!rec.cost_of_work_code) ? 'gray' : 'white';
		var fgColor = (!rec.cost_of_work_code) ? '#ffffff' : '#000000';
		fgColor = (rec.cost_of_work_code && !rec.cost_of_work_quantity) ? 'blue' : fgColor;
		//var enabled = (!rec.cost_of_work_code) ? false : true;
		event.getRenderable().bgcolor = bgColor;
		event.getRenderable().fgcolor = fgColor;
		if (!rec.cost_of_work_code && event.getRenderable().getName() == 'freeCheck'){
			event.getRenderable().enabled = false;
		}
		if (event.isRecordSelected()){
			if (!rec.cost_of_work_code){
				event.getRenderable().fgcolor = 'gray';
				event.getRenderable().bgcolor = 'yellow';
			} else {
				event.getRenderable().fgcolor = 'white';
				event.getRenderable().bgcolor = 'blue';
			}
		}
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D06B5131-04A0-44EF-9CB7-EF3D9CB437F3"}
 */
function UNUSEDonActionCheckBox(event) {
	selectedCheck = foundset.getSelectedIndex();
	if (false && selectedCheck != -1){
		controller.setSelectedIndex(selectedCheck);
		selectedCheck = -1;
	}
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C6F169CD-1112-41AD-9EB6-CD2E478C86CE"}
 */
function onRecordSelection(event) {
	application.output('selection index '+foundset.getSelectedIndex()+'record index '+foundset.getRecordIndex(foundset.getSelectedRecord()));
	var rec = foundset.getSelectedRecord();
	var recIndex = foundset.getRecordIndex(rec);
	application.output('firstPass: '+firstPass+' check change index '+foundset.getSelectedIndex()+' reported rec index '+recIndex);
	if (firstPass){
		selectedCheck = recIndex;
		firstPass = false;
	} else {
		//if (freeCheck2 == 1){
			foundset.setSelectedIndex(selectedCheck);
		//}
		firstPass = true;
	}
	//if (firstPass){
	//	selectedCheck = foundset.getSelectedIndex();
	//	firstPass = false;
	//}
	null;
	null;
	//if (!lastIndex){foundset.setSelectedIndex(1)}
	//if (lastIndex && !foundset.getSelectedRecord().cost_of_work_code){foundset.setSelectedIndex(lastIndex); return;}
	//if (selectedCheck == -1){selectedCheck = foundset.getSelectedIndex();}
	//lastIndex = foundset.getSelectedIndex();
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C241ACC3-65FE-442D-BC00-BD987742E534"}
 */
function onDataChangeCheck(oldValue, newValue, event) {
	//null;
	var rec = foundset.getSelectedRecord();
	selectedCheck = foundset.getRecordIndex(rec);
	application.output('check change index '+selectedCheck);
	//firstPass = true;
	return true;
}
