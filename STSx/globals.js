
/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"D7A7FA63-522F-44C6-84AD-07135F6C4BB2"}
 */
function onSolutionOpenX(arg, queryParams) {
	application.output('REMOVE entered params '+arg);
	var win = application.getActiveWindow();
	var width = application.getScreenWidth();
	application.output('REMOVE screen width '+width);
	// get preference window width
	width = (win.getWidth() >= 640) ? 640 : width;
	if (width < 240 && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//this is for the mobile computer entry screen
		win.setSize(220,win.getHeight());
		forms['sts_x'].elements.btnMain.visible = false;
		forms['sts_x'].elements.btnPrefs.visible = false;
		forms['sts_x'].elements.btnImport.visible = false;
		forms['sts_x'].elements.tabless.setLocation(0,0);
		
	}
	testFabsuite();
	//log into fabsuite
	
	
}
/**
 * @properties={typeid:24,uuid:"860CF975-5FCA-4C92-818D-1C75C83CFA26"}
 */
function testFabsuite(){
	//var attachTo = plugins.fabsuite.fsSetLib('E:\\p2programs\\javaCom\\FabSuiteXMLInterface.dll');
	//var attachTo = plugins.fabsuite.fsSetLib('C:\\Program Files (x86)\\FabSuite LLC\\FabSuite\\FabSuiteXMLInterface.dll');
	//attachTo = plugins.fabsuite.fsSetLib('C:/Program Files (x86)/FabSuite LLC/FabSuite/FabSuiteXMLInterface.dll');
	//application.output('attached to fslib '+attachTo);
	var xmlQuery = '<FabSuiteXMLRequest>\
					<Connect>\
						<IPAddress>localhost</IPAddress>\
						<PortNumber>3306</PortNumber>\
						<Username>admin</Username>\
						<Password>fab</Password>\
					</Connect>\
				</FabSuiteXMLRequest>';
	//var response = plugins.fabsuite.fsXML(xmlQuery);
	//application.output('fs xml response '+response);
	//var test0 = plugins.fabsuite.fsSetLib('C:\\Program Files (x86)\\FabSuite LLC\\FabSuite\\FabSuiteXMLInterface.dll');
	var xmlConnect = '<FabSuiteXMLRequest>\
							<Connect>\
								<IPAddress>localhost</IPAddress>\
								<PortNumber>3306</PortNumber>\
								<Username>admin</Username>\
								<Password>fab</Password>\
							</Connect>\
						</FabSuiteXMLRequest>';

	var test = plugins.fabsuite.fsXML2(xmlConnect);
	application.output('test fs interface '+test);

}