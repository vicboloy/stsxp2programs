/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F45C245C-50C2-496A-8670-EAB5D6A7176E"}
 */
var debugInfo = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C01663D5-C228-4689-B3D7-6F703B3077C9"}
 */
var metaData = '';//<meta content="width=device-width, initial-scale=45" name="viewport">';
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"28761D3F-8A1A-45E4-BE3B-942E9C29542B"}
 * @AllowToRunInFind
 */
function onLoad(event) {
	if (false && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//JOE DISABLE
		var callback = plugins.WebClientUtils.generateCallbackScript(globals.rfPageIsLoaded, [], true);
		var script = 'function p2pageLoaded(){' + callback + '}';
		//var script = 'function p2pageLoaded(){alert("here");}';
		var markup = '<html><head>'+metaData+'<script type="text/javascript">var deviceName = "device";' + script + 
			'</script></head><body onload="p2pageLoaded()">' +
			'<button type="button" onClick="p2pageLoaded()">TEST</button>'+
			'<button type="button" onClick="alert(\'alert\')">TEST</button>'+
			'</body></html>';
		globals.rfHtml = markup;
		if (application.isInDeveloper()){application.output('test on load callback '+globals.rfHtml);}
		//application.output(plugins.file.getDefaultUploadLocation());
	}
	if (false && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		callback = plugins.WebClientUtils.generateCallbackScript(globals.rfExitPage, [], true);
		script = 'function rfExitPage(){' + callback + '}';
		markup = '<html><head><script type="text/javascript">var deviceName = "device";' + script +
		'captureKey(false,68);' + // F10 is decimal 68
		'</script></head><body onload="rfExitPage()">' +
		//'<script type="text/javascript" charset="utf-8" src="ebapi-modules.js"></script>'+
		'</body></html>';
	}
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		//scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale=1.5');
		//plugins.WebClientUtils.
		//globals.rfHtml = globals.rfHtmlTest;
		//if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		//	plugins.WebClientUtils.executeClientSideJS('navigator.userAgent',globals.storeUserAgent,['navigator.userAgent']);
			plugins.WebClientUtils.executeClientSideJS('navigator.userAgent',globals.storeUserAgent,['navigator.userAgent']);
		//}
		var win = application.getActiveWindow();
		var width = application.getScreenWidth();
		var osName = application.getOSName();
		var elWidth = elements.elHelp.getWidth();//elHelp and mainMenu same width
		var screenHeight = application.getScreenHeight();
		var screenWidth = application.getScreenWidth();
		var newScale = 1.0;
		if (globals.clientUserAgent.search(/iPhone/i) != -1){
			screenHeight = 50;
			elements.elHelp.setSize(elWidth,screenHeight+15);
			elements.mainMenu.setSize(elWidth,screenHeight);
			newScale = Math.floor(width/240*10)/10;
			//newScale = 0.5;
			scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale='+newScale);
			application.output('RM main onLoad newscale '+newScale+'\n'+scopes.globals.viewport);

		} else if (globals.clientUserAgent.search(/Android/i) != -1) {
			screenHeight = 50;
			elements.elHelp.setSize(elWidth,screenHeight+15);
			elements.mainMenu.setSize(elWidth,screenHeight);
			scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale=1.0');
		} else {
			screenHeight = Math.floor(application.getScreenHeight()*70)
			elements.elHelp.setSize(elWidth,screenHeight+15);
			elements.mainMenu.setSize(elWidth,screenHeight);
			
		}
	}
		
	//var newArray = 
	globals.locationList();
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"BF6DDE9E-CFA8-4F24-B28F-6911837D6874"}
 */
function onActionTemp(event) {
	if (true) {return true}
	/** @type {JSFoundSet<db:/stsservoy/messages>} */
	var fs = databaseManager.getFoundSet('db:/stsservoy/messages');
		// This selects only files ('1'), previous dir must be used ('null'), no multiselect ('false') and
		// the filter "JPG and GIF" should be used: ('new Array("JPG and GIF","jpg","gif")').
		// ** @type {JSFile} */
		var f = plugins.file.showFileOpenDialog(1);
		null;
		var txt = plugins.file.readTXTFile(f);
		var lines = txt.split('\n');
		for (var index = 0;index < lines.length;index++){
			fs.newRecord();
			var error = lines[index].split(',');
			fs.message_num = error[0];
			fs.message_text = error[1];
		}
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"B48A3328-0E53-428C-979D-FE0FA2E98598"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	application.output('RM main onShow begin');
	var win = application.getActiveWindow();
	var width = application.getScreenWidth();
	var osName = application.getOSName();
	var elWidth = elements.elHelp.getWidth();//elHelp and mainMenu same width
	var screenHeight = application.getScreenHeight();
	var screenWidth = application.getScreenWidth();
	var newScale = 1.0;
	if (firstShow){
		if (application.getServerURL().search('https') != -1){
			elements.showHelp.fgcolor = 'green';
		} else {
			elements.showHelp.fgcolor = 'red';
		}
		


		if (globals.clientUserAgent.search(/(Android)|(iPhone)/i) == -1){
			//screenHeight = 30;
			//elements.elHelp.setSize(elWidth,screenHeight);
			//elements.mainMenu.setSize(elWidth,screenHeight);
			//newScale = Math.floor(width/240*10)/10;
			//scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale='+newScale);
			//application.output('RM main onShow newscale '+newScale+'\n'+scopes.globals.viewport);

		//} else {
			if (width > 400 && application.getSolutionName() != "STSx"){
				win.setSize(330,win.getHeight());
				width = 330;
			}
			var x = win.getX();
			var y = win.getY();
			debugInfo = 'Width: '+screenWidth+',Height: '+screenHeight;
			if (x+320 > screenWidth){x = screenWidth-320}
			if (y+480 > screenHeight){y = screenHeight-480}
			win.setLocation(x,y);
			elements.elHelp.setSize(elWidth,screenHeight);
			elements.mainMenu.setSize(elWidth,screenHeight);
			if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
				screenHeight = (screenHeight > 420) ? 420 : screenHeight;
				//scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale='+newScale);
			} else {
				elements.mainMenu.setSize(230,420);
			}
			
		}
	}
	if (false && osName.search(/(Linux)|(Mac)/i) != -1){
		screenHeight = 50;
		elements.elHelp.setSize(elWidth,screenHeight+10);
		elements.mainMenu.setSize(elWidth,screenHeight);
		width = 1080
		width = application.getScreenWidth();
		newScale = Math.floor(2*width/240*10)/10;
		newScale = 4.0;
		scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale='+newScale);
		var showWidth = win.controller.getWindow().getWidth();
		application.output('RM main onShow newscale '+newScale+' showWidth '+width+' '+showWidth+'\n'+scopes.globals.viewport);

	}
	globals.mobForm = i18n.getI18NMessage('sts.mobile.main');
	globals.mobProg = i18n.getI18NMessage('sts.mobile.main');
	elements.mainMenu.requestFocus();
	//var licCount = plugins.UserManager.Server().getSettingsProperty('license.0.licenses');
	//plugins.dialogs.showErrorDialog('Message','License count'+licCount);
	//globals.rfGetLocalStorage('deviceName'); //JOE DISABLE
	//var x = application.getScreenWidth();
	//var y = application.getScreenHeight();
	//globals.errorDialogMobile(event,0,null,x+' x '+y)
	//elements.debug.visible = true;
	//debugInfo = x +' x '+y;
}

