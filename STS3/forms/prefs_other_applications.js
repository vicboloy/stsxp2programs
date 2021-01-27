
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1F6A7B79-A463-47FD-BAC8-96A1C35E84CE"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	if (elements.tabs.getTabFormNameAt(2).search(/fabtrol/i) != -1){
		elements.tabs.setTabEnabledAt(2,false);//disabled FabTrol
	}
	if (elements.tabs.getTabFormNameAt(3).search(/romac/i) != -1){
		elements.tabs.setTabEnabledAt(3,false);//disabled Romac
	}
}
