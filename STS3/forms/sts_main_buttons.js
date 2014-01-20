/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BADC9EA2-CBA1-450E-93B3-77B0AD78BAA1"}
 */
var winderList = "";
/**
 * TODO generated, please specify type and doc for the params
 * @param {JSEvent} event event that launched this function
 * @param tabName {String} identify the tab selected to open that form view
 *
 * @properties={typeid:24,uuid:"DAB11C9F-D47B-4C2A-AA3A-F07D4B9AFE63"}
 */
function onActionMenu(event,tabName){
	//application.output(tabName);
	replaceTabIcon(tabName);
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
 * TODO generated, please specify type and doc for the params
 * @param tabName
 *
 * @properties={typeid:24,uuid:"1866A7CB-D2A5-4FD5-92FA-ECC35CA24587"}
 */
function replaceTabIcon(tabName){
	elements.iFirstL.imageURL = "media:///sts_tab_start_txc.gif";
	elements.iOne.imageURL = "media:///sts_tab_top_txc.gif";
	elements.iTwo.imageURL = "media:///sts_tab_top_txc.gif";
	elements.iThree.imageURL = "media:///sts_tab_top_txc.gif";
	elements.iFour.imageURL = "media:///sts_tab_top_txc.gif";
	elements.iFive.imageURL = "media:///sts_tab_top_txc.gif";
	elements.iHome.imageURL = "media:///sts_text_txc.gif";
	elements.iEndR.imageURL = "media:///sts_tab_end_txc.gif";
	elements.iOneTwo.imageURL = "media:///sts_tab_mid_txc.gif";
	elements.iTwoThree.imageURL = "media:///sts_tab_mid_txc.gif";
	elements.iThreeFour.imageURL = "media:///sts_tab_mid_txc.gif";
	elements.iFourFive.imageURL = "media:///sts_tab_mid_txc.gif";
	switch (tabName){
	case 'edit':
	elements.iOneTwo.imageURL = "media:///sts_tab_mid_txcA.gif";
	elements.iTwo.imageURL = "media:///sts_tab_top_txcA.gif";
	elements.iTwoThree.imageURL = "media:///sts_tab_mid_txcB.gif";
		break;
	case 'import':
	elements.iFirstL.imageURL = "media:///sts_tab_start_txcA.gif";
	elements.iOne.imageURL = "media:///sts_tab_top_txcA.gif";
	elements.iOneTwo.imageURL = "media:///sts_tab_mid_txcB.gif";

		break;
	case 'view':
	elements.iTwoThree.imageURL = "media:///sts_tab_mid_txcA.gif";
	elements.iThree.imageURL = "media:///sts_tab_top_txcA.gif";
	elements.iThreeFour.imageURL = "media:///sts_tab_mid_txcB.gif";
		break;
	case 'reports':
	elements.iThreeFour.imageURL = "media:///sts_tab_mid_txcA.gif";
	elements.iFour.imageURL = "media:///sts_tab_top_txcA.gif";
	elements.iFourFive.imageURL = "media:///sts_tab_mid_txcB.gif";
		break;
	case 'labels':
	elements.iFourFive.imageURL = "media:///sts_tab_mid_txcA.gif";
	elements.iFive.imageURL = "media:///sts_tab_top_txcA.gif";
	elements.iEndR.imageURL = "media:///sts_tab_end_txcA.gif";
		break
	default:
	elements.iHome.imageURL = "media:///sts_text_txcA.gif";
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
	replaceTabIcon('');

}
