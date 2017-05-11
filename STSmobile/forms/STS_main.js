/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"28761D3F-8A1A-45E4-BE3B-942E9C29542B"}
 */
function onLoad(event) {
	if (false && application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){//JOE DISABLE
		var callback = plugins.WebClientUtils.generateCallbackScript(globals.rfPageIsLoaded, [], true);
		var script = 'function p2pageLoaded(){' + callback + '}';
		//var script = 'function p2pageLoaded(){alert("here");}';
		var markup = '<html><head><script type="text/javascript">var deviceName = "device";' + script + 
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
	globals.rfHtml = markup;
		
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
	if (firstShow){
		if (application.getServerURL().search('https') != -1){
			elements.showHelp.fgcolor = 'green';
		} else {
			elements.showHelp.fgcolor = 'red';
		}
		

		var width = application.getScreenWidth();
		if (width > 400){
			var win = application.getActiveWindow();
			win.setSize(330,win.getHeight());
			
		}
		
	}
	globals.mobForm = i18n.getI18NMessage('sts.mobile.main');
	globals.mobProg = i18n.getI18NMessage('sts.mobile.main');
	//var licCount = plugins.UserManager.Server().getSettingsProperty('license.0.licenses');
	//plugins.dialogs.showErrorDialog('Message','License count'+licCount);
	//globals.rfGetLocalStorage('deviceName'); //JOE DISABLE
}

