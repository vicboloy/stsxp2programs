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
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	elements.tabless.removeAllTabs();
	elements.indFabSuite.visible = (scopes.globals.fabsuiteCom) ? false : true;

	if (globals.isSmartClient){
		elements.tabless.addTab(forms.import_x);
	} else {
		var win = application.getActiveWindow();
		var screenWidth = application.getScreenWidth();
		// get preference window width
		screenWidth = (screenWidth >= 640) ? 640 : screenWidth;
		var height = win.getHeight();
		win.setSize(screenWidth,height);
		if (screenWidth < 230 && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//this is for the mobile computer entry screen
			win.setSize(220,win.getHeight());
			elements.btnMain.visible = false;
			//elements.btnPrefs.visible = false;
			elements.btnImport.visible = false;
			elements.tabless.setLocation(0,0);
			
		}
		elements.tabless.addTab(forms.STS_main);
		onActionChangeBtn(event);
	
		currentFormName = 'STS_main';
	}
	
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
	if (!forms['sts_x'].elements[el]){
		el = 'btnImport';
	}
	forms['sts_x'].elements.btnMain.bgcolor = unsel;
	forms['sts_x'].elements.btnImport.bgcolor = unsel;
	forms['sts_x'].elements.btnPrefs.bgcolor = unsel;
	if (!el){
		forms['sts_x'].elements.btnMain.bgcolor = select;
	} else {
		forms['sts_x'].elements[el].bgcolor = select;
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E8B2AE6-E426-418A-9155-5A8775F8FC5D"}
 */
function onActionTest(event) {
	var servoyDir = plugins.UserManager.Server().servoyDirectory;
	application.output('directory '+servoyDir);
	var xmlStuff = '<FabSuiteXMLRequest>\
		<Version/>\
</FabSuiteXMLRequest>';
	xmlStuff = '<FabSuiteXMLRequest>\
				<GetBillOfMaterials>\
				<JobNumber>04030</JobNumber>\
				</GetBillOfMaterials>\
				</FabSuiteXMLRequest>';
	//var response = forms.secLoginExample.fabsuite(xmlStuff);//change this here
	///var response = forms.initial.fabsuite(xmlStuff);
	var response = scopes.globals.com.call('FabSuiteXML',xmlStuff);//change this here
	//var response = security.authenticate('fabSuiteAuthenticate','fabsuite');
	elements.indFabSuite.visible = false;
	if (response){
		elements.indFabSuite.visible = true;
	}
	application.output('response |'+response+'|2nd');
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C23C4B55-94C4-4527-A64A-9BA6AFCA460E"}
 */
function onActionTestFS(event) {
	var xmlConnect = '<FabSuiteXMLRequest>\
		<Connect>\
			<IPAddress>localhost</IPAddress>\
			<PortNumber>3306</PortNumber>\
			<Username>admin</Username>\
			<Password>fab</Password>\
		</Connect>\
	</FabSuiteXMLRequest>';

	var ping = '<FabSuiteXMLRequest>\
				<Ping/>\
				</FabSuiteXMLRequest>';
	var jobList = '<FabSuiteXMLRequest>\
		<GetProductionControlJobInformation>\
		</GetProductionControlJobInformation>\
		</FabSuiteXMLRequest>';
	jobList = '<FabSuiteXMLRequest>\
		<GetBillOfMaterials>\
		<JobNumber>04030</JobNumber>\
		<Filters?\
		</GetBillOfMaterials>\
		</FabSuiteXMLRequest>';

	var resp = security.authenticate('fabSuiteAuthenticate','fabsuite',[jobList]);
	elements.indFabSuite.fgcolor = 'yellow';
	elements.indFabSuite.bgcolor = 'red';
	elements.indFabSuite.text = resp;
	application.output('resp '+resp);
}
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"31C163CE-62C7-409C-9ACE-A33B61D3B8F9"}
 */
function onActionPrint(event){
	elements.tabless.removeAllTabs();
	elements.tabless.addTab(forms.import_embed);
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0D4A44AF-C006-4156-A5E6-D7E73715EBFF"}
 */
function onActionCancelPrint(event) {
	if (currentFormName == 'import_x') {return}
	elements.tabless.removeAllTabs();
	elements.tabless.addTab(forms.import_x);
	onActionChangeBtn(event);
	currentFormName = 'import_x';
}
