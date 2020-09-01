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
	if (globals.clientUserAgent){
		globals.mob.userAgent = globals.clientUserAgent;
	}
	
	 scopes.globals.viewport = scopes.globals.viewportSrc;

	/** if (false && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//JOE DISABLE
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
	} */
	/** if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		if (!globals.zoomMenuSet){
			globals.zoomMenuSet = true;
			scopes.globals.viewport = scopes.globals.viewportSrc;
			plugins.WebClientUtils.executeClientSideJS('resize()');
		}

		//scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale=1.5');
		//plugins.WebClientUtils.
		//globals.rfHtml = globals.rfHtmlTest;
		//if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		//	plugins.WebClientUtils.executeClientSideJS('navigator.userAgent',globals.storeUserAgent,['navigator.userAgent']);
		var win = application.getActiveWindow();
		var width = application.getScreenWidth();
		var osName = application.getOSName();
		var elWidth = elements.elHelp.getWidth();//elHelp and mainMenu same width
		var screenHeight = application.getScreenHeight();
		var screenWidth = application.getScreenWidth();
		var newScale = 1.0;
		if (globals.clientUserAgent.search(/(iPhone|iPad)/i) != -1 || osName.search(/Mac/i) != -1){
			screenHeight = 50;
			elements.elHelp.setSize(elWidth,screenHeight+15);
			elements.mainMenu.setSize(elWidth,screenHeight);
			newScale = Math.floor(width/240*10)/10;
			//newScale = 0.5;
			scopes.globals.viewport = scopes.globals.viewportSrc.replace('initial-scale=1.0','initial-scale='+newScale);
			if (application.isInDeveloper()){application.output('RM main onLoad newscale '+newScale+'\n'+scopes.globals.viewport);}

		} else if (globals.clientUserAgent.search(/Android/i) != -1 || osName.search(/Linux/) != -1) {
			screenHeight = 50;
			elements.elHelp.setSize(elWidth,screenHeight+15);
			elements.mainMenu.setSize(elWidth,screenHeight);
			scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale=1.0');
			if (application.isInDeveloper()){application.output('inside android scaling')}
		} else if (globals.clientUserAgent.search(/CE/)){
			if (!globals.zoomMenuSet){
				globals.zoomMenuSet = true;
				scopes.globals.viewport = scopes.globals.viewportSrc;
				plugins.WebClientUtils.executeClientSideJS('resize()');
			}
		} else {
			screenHeight = Math.floor(application.getScreenHeight()*.70)
			elements.elHelp.setSize(elWidth,screenHeight+15);
			elements.mainMenu.setSize(elWidth,screenHeight);
			var win = application.getWindow();
			win.setSize(240,screenHeight);
			if (application.isInDeveloper()){application.output('at screen height windows '+elWidth+'x'+screenHeight)}
		}
	} */
		
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
	/** if (globals.clientUserAgent.search(/Windows CE/) != -1 && application.getOSName().search(/Win32/) != -1){
		if (false && firstShow){
			var startDate = new Date() + 90000;
			plugins.scheduler.removeJob('refresher');
			plugins.scheduler.addJob('refresher',startDate,globals.timedResize,0);
			 //plugins.WebClientUtils.executeClientSideJS('resize();');
		}
	} else {
		//elements.btn_Resize.visible=false;
	} */
	application.output('RM main onShow begin'+globals.clientUserAgent);
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		//globals.getBrowserInfo();
	}
	var win = application.getActiveWindow();
	var width = win.getWidth();
	var height = win.getHeight();
	var osName = application.getOSName();
	var elWidth = elements.elHelp.getWidth();//elHelp and mainMenu same width
	var screenHeight = application.getScreenHeight();
	var screenWidth = application.getScreenWidth();
	screenHeight = (screenHeight > 480) ? 480 : screenHeight;
	screenWidth = (screenWidth > 300) ? 300 : screenWidth;
	application.output('OS Name:'+osName+' UserAgent: '+globals.clientUserAgent+' BrowserReportedSize: '+globals.clientHeight+'x'+globals.clientWidth+' App Bounds: '+screenWidth+'x'+screenHeight+' Win Bounds; '+width+'x'+height,LOGGINGLEVEL.WARNING);
	var newScale = 1.0;
	if (firstShow){
		if (application.getServerURL().search('https') != -1){
			elements.showHelp.fgcolor = 'green';
		} else {
			elements.showHelp.fgcolor = 'red';
		}


		if (osName.search(/Win32/) != -1){//9090 is 240x320
		//	if (globals.clientUserAgent.search(/Windows CE/) != -1 && osName.search(/Win32/) != -1){
			if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
			 //newScale = screenHeight/appHeight;
			 //scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale='+newScale);
			 //scopes.globals.viewport = scopes.globals.viewportSrc;
			elements.elHelp.setSize(230,270);//Math.floor(screenHeight*.9));//screenHeight-30);
			elements.mainMenu.setSize(230,270);//Math.floor(screenHeight*.9));//screenHeight-30);

			 if (firstShow){
				 //scopes.globals.viewport = scopes.globals.viewportSrc;
				// application.output('2222222222222222222'+scopes.globals.viewport)
				// plugins.WebClientUtils.executeClientSideJS('resize();');
				 //plugins.WebClientUtils.executeClientSideJS('resize();');
			 }
		}
	} else if (globals.clientUserAgent.search(/(Linux)|(iPhone)|(iPad)/i) == -1 && application.getOSName().search(/Mac/i) == -1){
		//screenHeight = 30;
		//elements.elHelp.setSize(elWidth,screenHeight);
		//elements.mainMenu.setSize(elWidth,screenHeight);
		//newScale = Math.floor(width/240*10)/10;
		//scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale='+newScale);
		//application.output('RM main onShow newscale '+newScale+'\n'+scopes.globals.viewport);
		//} else {
		if (width > 800 && application.getSolutionName() != "STSx"){
			win.setSize(330,win.getHeight());
			width = 330;
		}
		var x = win.getX();
		var y = win.getY();
		debugInfo = 'Width: '+screenWidth+',Height: '+screenHeight;
		if (x+320 > screenWidth){x = screenWidth-320}
		if (y+480 > screenHeight){y = screenHeight-480}
		win.setLocation(x,y);
		elements.elHelp.setSize(width,screenHeight);
		elements.mainMenu.setSize(width,screenHeight);
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
			screenHeight = (screenHeight > 420) ? 420 : screenHeight;
			//scopes.globals.viewport = scopes.globals.viewport.replace('initial-scale=1.0','initial-scale='+newScale);
		} else {
			elements.mainMenu.setSize(230,420);
		}
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
			screenHeight = application.getScreenHeight();
			screenWidth = application.getScreenWidth();
			var appWidth = win.getWidth();
			var appHeight = Math.floor(screenHeight*0.85);
			if (application.isInDeveloper()){application.output('screeni '+screenWidth+'x'+screenHeight+' app: '+appWidth+'x'+appHeight);}
			win.setSize(appWidth,appHeight);
			elements.mainMenu.setSize(500,480); // This was the change that doesn't go past the end of the screen
		}

	} else {
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
			screenHeight = application.getScreenHeight();
			screenWidth = application.getScreenWidth();
			appWidth = win.getWidth();
			appHeight = Math.floor(screenHeight*0.9);
			elements.elHelp.setSize(screenWidth-15,screenHeight-140);//Math.floor(screenHeight*.9));//screenHeight-30);
			elements.mainMenu.setSize(screenWidth-15,screenHeight-120);//Math.floor(screenHeight*.9));//screenHeight-30);
			if (application.isInDeveloper()){application.output('screenp '+screenWidth+'x'+screenHeight+' app: '+appWidth+'x'+appHeight);}
			//win.setSize(appWidth,screenWidth*0.9);
			if (application.isInDeveloper()){application.output('screenp '+screenWidth+'x'+screenHeight+' app: '+win.getWidth()+'x'+win.getHeight());}

		}
	}
	}
	if (false && globals.clientUserAgent.search(/Win32/) != -1){
		if (globals.clientHeight < 15){
			globals.clientHeight = application.getScreenHeight();
		}
		application.output('Windows CE Login. Resizing Main Menu.',LOGGINGLEVEL.WARNING);
		elements.mainMenu.setSize(Math.floor(globals.clientWidth),Math.floor(globals.clientHeight-60));
		elements.elHelp.setSize(Math.floor(globals.clientWidth),Math.floor(globals.clientHeight-60));
	}
	if (osName.search(/(Linux)|(Mac)/i) != -1){
		screenHeight = 50;
		elements.elHelp.setSize(elWidth,screenHeight+10);
		elements.mainMenu.setSize(screenWidth,screenHeight);
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
	//globals.geti18nScreenNameMapping();//20190202 get i18n screen mapping to i18n key
	application.output('Scaling Main Factor: '+newScale,LOGGINGLEVEL.WARNING);
	elements.mainMenu.requestFocus();
	if (application.getOSName().search(/Win32/) != -1 && application.getScreenWidth() > 240){
	//if (globals.clientUserAgent.search(/Windows CE/) != -1 && application.getOSName().search(/Win32/) != -1){
		if (true||firstShow){
			var date = new Date();
			date.setTime(date.getTime()+500);
			plugins.scheduler.removeJob('refresher');
			plugins.scheduler.addJob('refresher',date,globals.timedResize,10000,0);
			//application.updateUI();
			//plugins.WebClientUtils.executeClientSideJS('resize();');
		}
	}
	//var licCount = plugins.UserManager.Server().getSettingsProperty('license.0.licenses');
	//plugins.dialogs.showErrorDialog('Message','License count'+licCount);
	//globals.rfGetLocalStorage('deviceName'); //JOE DISABLE
	//var x = application.getScreenWidth();
	//var y = application.getScreenHeight();
	//globals.errorDialogMobile(event,0,null,x+' x '+y)
	//elements.debug.visible = true;
	//debugInfo = x +' x '+y;
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"77505E67-9993-4A6D-8A5F-1345A445F877"}
 */
function onActionResize(event) {
	if(application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){
		plugins.WebClientUtils.executeClientSideJS('resizer();');
	}
}
