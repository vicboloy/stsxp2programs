/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C97F56EC-F968-4258-9298-F979D86B5A17"}
 */
var currentFormName = '';
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9A40D2C5-D7B0-41CE-8DE0-887B611FBE8F"}
 */
function onShow(firstShow, event) {
	var win = application.getActiveWindow();
	var screenWidth = application.getScreenWidth();
	// get preference window width
	screenWidth = (screenWidth >= 640) ? 640 : screenWidth;
	var height = win.getHeight();
	win.setSize(screenWidth,height);
	if (screenWidth < 230 && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//this is for the mobile computer entry screen
		win.setSize(220,win.getHeight());
		elements.btnMain.visible = false;
		elements.btnPrefs.visible = false;
		elements.btnImport.visible = false;
		elements.tabless.setLocation(0,0);
		
	}
	elements.tabless.addTab(forms.STS_main);
	onActionChangeBtn(event);
	
	currentFormName = 'STS_main';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"4C68FD14-8FFA-4A30-A751-77B65C95E72B"}
 */
function onActionPrefs(event) {
	if (currentFormName == 'prefs_x') {return}
	elements.tabless.removeAllTabs();
	elements.tabless.addTab(forms.prefs_x);
	onActionChangeBtn(event);
	currentFormName = 'prefs_x';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"78E75F8B-92BF-4884-9D84-CF0EC354BA3B"}
 */
function onActionImport(event) {
	if (currentFormName == 'import_x') {return}
	elements.tabless.removeAllTabs();
	elements.tabless.addTab(forms.import_x);
	onActionChangeBtn(event);
	currentFormName = 'import_x';
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"E8EE6266-DA7C-4DC1-8DFA-60F42297FA1F"}
 */
function onActionTrans(event) {
	if (currentFormName == 'STS_main') {return}
	elements.tabless.removeAllTabs();
	elements.tabless.addTab(forms.STS_main);
	onActionChangeBtn(event);
	currentFormName = 'STS_main';
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E771825B-A537-424B-A558-5239C2309F0D"}
 */
function onActionChangeBtn(event){
	var select = '#b7bcbf';
	var unsel = '#e5e5e5';
	var el = event.getElementName();
	elements.btnMain.bgcolor = unsel;
	elements.btnImport.bgcolor = unsel;
	elements.btnPrefs.bgcolor = unsel;
	if (!el){
		elements.btnMain.bgcolor = select;
	} else {
		elements[el].bgcolor = select;
	}
}