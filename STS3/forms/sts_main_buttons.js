/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BADC9EA2-CBA1-450E-93B3-77B0AD78BAA1"}
 */
var winderList = "";
/**
 * TODO generated, please specify type and doc for the params
 * @param tabName {String} identify the tab selected to open that form view
 *
 * @properties={typeid:24,uuid:"DAB11C9F-D47B-4C2A-AA3A-F07D4B9AFE63"}
 */
function onActionMenu(event,tabName){
	//application.output(tabName);
	switch (tabName){
		case 'edit':
			elements.split.setLeftForm(forms.sts_nav_edit,null);
			break;
		case 'import':
			elements.split.setLeftForm(forms.sts_nav_import,null);
			break;
		case 'view':
			elements.split.setLeftForm(forms.sts_nav_view,null);
			break;
		case 'reports':
		elements.split.setLeftForm(forms.sts_nav_reports,null);
			break;
		case 'labels':
			elements.split.setLeftForm(forms.sts_nav_labels,null);
			break
		default:
			elements.split.setLeftForm(forms.sts_nav_default,null);
	}
}
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"35F5B55F-AE50-40D1-BF9F-6EA16BFBDD7D"}
 */
function onLoadMain(event) {
	globals.initStatusTypes();
	globals.initUomArray();
	application.setValueListItems('stsvl_rfPortableType',forms.preferences_main.arfPortableType);
	application.setValueListItems('stsvl_status_type',globals.aStatusTypes);
	globals.initLaborCodes();
	elements.split.rightFormMinSize = 40;
	elements.split.dividerLocation = 0.80;
	application.output('current tenant '+globals.secCurrentTenantID);
}
