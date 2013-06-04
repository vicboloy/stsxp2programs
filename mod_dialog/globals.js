/**
 * @constructor
 *
 * @description Dialog module - https://www.servoyforge.net/projects/mod-dialog
 * @version 1.1.5
 *
 * Written by Robert J.C. Ivens and Paul Bakker
 * OS dependent button-reverse patch by Harjo Kompagnie
 *
 * @properties={typeid:35,uuid:"EFF9564C-DBDB-4087-A9DF-A56826FE2CC7",variableType:-4}
 */
var DIALOGS = new function() {
	/**
	 * @type String
	 */
	var _sStyleSheet = 'dialogs_default'; // forms.dialogs_stylesheet is there to make sure any export of the module will bring along this stylesheet

	/**
	 * @type Number
	 */
	var _nDialogWidth = 500;

	/**
	 * @type Number
	 */
	var _nDialogHeight = 150;

	/*
	 * For every dialog shown a solutionModel clone of a dialogs_xxxx form is created, in order to be able to stack multiple dialogs
	 * In order to prevent a memory leak, the clones need to be cleaned up after use.
	 *
	 * Previous logic tried to accomplish this in the onHide event of the dialog i.c.w. the scheduler plugin,
	 * but this had it's flaws and required application.sleep(100) to work correctly, while also reducing the UX
	 *
	 * With the new logic the dialog calls back to markBluePrintsForCleanup() in it's onHide event.
	 * The markBluePrintsForCleanup() method stored the formName in the bluePrintStack
	 * When getting a new blueprint is requested, all clones are removed by looping through the bluePrintStack
	 */
	var bluePrintStack = []

	function markBluePrintsForCleanup(formName) {
		application.output('Marking form "' + formName + '" for cleanup', LOGGINGLEVEL.DEBUG);
		bluePrintStack.push(formName);
	}
	
	var terminator = (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT ? new Continuation() : null);

	/**
	 * Method to terminate the current method execution after capturing a Continuation.
	 */
	function terminateCurrentMethodExecution() {
		terminator();
	}

	/**
	 * @private
	 *
	 * @param {String} _sFormName
	 * @param {String} _sBaseFormName
	 * @param {Number} _nWidth
	 * @param {Number} _nHeight
	 */
	function newFormBluePrint(_sFormName, _sBaseFormName, _nWidth, _nHeight) {
		//Cleanup of previously used blueprints
		/** @type {String} */
		var formName;
		for (var i = 0; i < bluePrintStack.length; i++) {
			formName = bluePrintStack[i];
			application.output('Cleaning up form "' + formName + '"', LOGGINGLEVEL.DEBUG);
			if (history.removeForm(formName)) {
				bluePrintStack.splice(i, 1);
				if (!solutionModel.removeForm(formName)) {
					application.output("Can't remove dialog form '" + formName + "'", LOGGINGLEVEL.ERROR);
				}
			} else {
				application.output("Can't remove dialog form '" + formName + "' from history", LOGGINGLEVEL.ERROR);
			}
		}

		//Create requested blueprint
		if (!forms[_sFormName]) {
			var _oForm = solutionModel.newForm(_sFormName, forms[_sBaseFormName].controller.getDataSource(), _sStyleSheet, false, _nWidth, _nHeight);
			_oForm.extendsForm = _sBaseFormName;

			//Store pointer to otherwise private method on the form, to be used when hiding the form
			forms[_sFormName]['bluePrintCleanupCallback'] = markBluePrintsForCleanup;
		} else {
			application.output("Form '" + _sFormName + "' already exists.", LOGGINGLEVEL.ERROR);
		}
	}

	/**
	 * @private
	 *
	 * @param {String|RuntimeForm} _sFormName
	 * @param {String} _sDlgType
	 * @param {Array} _aArguments
	 * @param {String} [_sIconStyle]
	 *
	 * @return {String}
	 */
	function showDialog(_sFormName, _sDlgType, _aArguments, _sIconStyle) {
		
		/** @type {Object} */
		var _aArgs = Array.prototype.slice.call(_aArguments),
			_nWidthPadding = 22,
			dialogWindow;
		var _sUniqueName = _aArgs[8] || utils.stringReplace(application.getUUID().toString(), "-", "");

		if(_aArgs[0] instanceof  RuntimeForm) _aArgs[0] = _aArgs[0].controller.getName()
		
		if (_sDlgType == 'FIMD') {
			dialogWindow = application.createWindow("W_" + _sUniqueName, JSWindow.MODAL_DIALOG);
			dialogWindow.setLocation(_aArgs[1] | JSWindow.DEFAULT, _aArgs[2] || JSWindow.DEFAULT);
			
			dialogWindow.title = _aArgs[5]||solutionModel.getForm(_aArgs[0]).titleText||_aArgs[0]
			
			dialogWindow.resizable = (_aArgs[6] == null ? true : _aArgs[6]);
			dialogWindow.showTextToolbar(_aArgs[7] == null ? false : _aArgs[7]);
			forms[_aArgs[0]]['windowName'] = "W_" + _sUniqueName;

			if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
				var _nWidth = (_aArgs[3] == null || _aArgs[3] == JSWindow.DEFAULT) ? solutionModel.getForm(_aArgs[0]).width : _aArgs[3];
				var _nHeight = (_aArgs[4] == null || _aArgs[4] == JSWindow.DEFAULT) ? solutionModel.getForm(_aArgs[0]).getBodyPart().height : _aArgs[4];

				newFormBluePrint(_sUniqueName, 'dialogs_fimd', _nWidth, _nHeight);
				/** @type {RuntimeForm<dialogs_fimd>}*/
				var form = forms[_sUniqueName];
				form.continuation = new Continuation(); // saves the current methodStack into variable x, so it can be continued later on
				form.windowName = "W_" + _sUniqueName;
				
				//	Why is this breaking ? (sean)
				if(form.setupForm)
					form.setupForm(_aArgs[0], _nWidth, _nHeight);

				// Need to add 22 pixels to the width with the original (built-in) servoy stylesheet or else you get scrollbars. You may want to adjust this value when you use a custom (override) stylesheet
				dialogWindow.setSize(_nWidth + _nWidthPadding, _nHeight);
				dialogWindow.show(form);
				terminateCurrentMethodExecution()
			} else {
				dialogWindow.setSize(_aArgs[3] || JSWindow.DEFAULT, _aArgs[4] || JSWindow.DEFAULT);
				dialogWindow.show(forms[_aArgs[0]]);
			}

		} else {
			if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {

				dialogWindow = application.createWindow(_sUniqueName, JSWindow.MODAL_DIALOG);
				dialogWindow.setInitialBounds(JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT, JSWindow.DEFAULT);
				dialogWindow.title = _aArgs[0];

				dialogWindow.resizable = false;
				dialogWindow.showTextToolbar(false);

				newFormBluePrint(_sUniqueName, _sFormName, _nDialogWidth, _nDialogHeight);
				/** @type {RuntimeForm<dialogs_base>}*/
				var dialog = forms[_sUniqueName];
				dialog.continuation = new Continuation(); // saves the current methodStack into variable x, so it can be continued later on
				dialog.windowName = _sUniqueName;

				switch (_sDlgType) {
				case 'input':
					var _top = _aArgs[2]
					dialog.setupForm([_aArgs[1], i18n.getI18NMessage('servoy.button.ok'), i18n.getI18NMessage('servoy.button.cancel')], _sIconStyle, _top, _nDialogWidth, _nDialogHeight + 30);
					break;
				case 'select':
					dialog.setupForm([_aArgs[1], _aArgs[2], i18n.getI18NMessage('servoy.button.ok'), i18n.getI18NMessage('servoy.button.cancel')], _sIconStyle, _nDialogWidth, _nDialogHeight + 30);
					break;
				default:
					dialog.setupForm(_aArgs, _sIconStyle, _nDialogWidth, _nDialogHeight);
				}
				dialogWindow.show(dialog);

				terminateCurrentMethodExecution();

			} else if (application.getApplicationType() == APPLICATION_TYPES.SMART_CLIENT || application.getApplicationType() == APPLICATION_TYPES.RUNTIME_CLIENT) {

				// Turn the Arguments into a real Array
				/** @type {Array} */
				var _aArgArray = [].slice.call(_aArgs),
					_sReturnValue;

				// Process the array and make it in a string we can use in eval
				_aArgArray.forEach(parseArgumentList);

				switch (_sDlgType) {
				case 'warning':
					eval('_sReturnValue = plugins.dialogs.showWarningDialog(' + _aArgArray.join(",") + ' )');
					break;
				case 'error':
					eval('_sReturnValue = plugins.dialogs.showErrorDialog(' + _aArgArray.join(",") + ' )');
					break;
				case 'info':
					eval('_sReturnValue = plugins.dialogs.showInfoDialog(' + _aArgArray.join(",") + ' )');
					break;
				case 'question':
					eval('_sReturnValue = plugins.dialogs.showQuestionDialog(' + _aArgArray.join(",") + ' )');
					break;
				case 'input':
					eval('_sReturnValue = plugins.dialogs.showInputDialog(' + _aArgArray.join(",") + ' )');
					break;
				case 'select':
					eval('_sReturnValue = plugins.dialogs.showSelectDialog(' + _aArgArray.join(",") + ' )');
					break;
				}
				return _sReturnValue;

			}
		}

		/**
		 * @private
		 * @param {Array|String} _oValue
		 * @param {Number} _nIndex
		 * @param {Array} _aArray
		 */
		function parseArgumentList(_oValue, _nIndex, _aArray) {
			if (_oValue instanceof String) {
				_aArray[_nIndex] = "'" + _oValue.replace(/\'/g, "\\'").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'";
			} else if (_oValue instanceof Array) {
				_aArray[_nIndex] = "['" + _oValue.join("','") + "']";
			}
		}

		return null;
	}

	/**
	 * Set the stylesheet of the next dialog window
	 *
	 * @param {String} stylesheetName
	 */
	this.setStylesheet = function(stylesheetName) {
		_sStyleSheet = stylesheetName;
	}

	/**
	 * Set the width of the next dialog window
	 *
	 * @param {Number} width
	 */
	this.setDialogWidth = function(width) {
		// width may not be smaller than 100
		_nDialogWidth = (width < 100 ? 500 : width);
	}

	/**
	 * Set the height of the next dialog window
	 *
	 * @param {Number} height
	 */
	this.setDialogHeight = function(height) {
		// height may not be smaller than 100
		_nDialogHeight = (height < 100 ? 100 : height);
	}

	/**
	 * Reset the width/height of the next dialog window to the default values
	 */
	this.resetDialogSize = function() {
		_nDialogWidth = 500;
		_nDialogHeight = 150;
	}

	/**
	 * Get the version of the dialogs module
	 *
	 * @return {String}
	 */
	this.getVersion = function() {
		return '1.1.5';
	}

	/**
	 * Show an error dialog
	 *
	 * @param {String} title
	 * @param {String} message
	 * @param {...String} buttons
	 * @return {String}
	 */
	this.showErrorDialog = function(title, message, buttons) {
		return showDialog('dialogs_message', 'error', arguments, 'dialogs_icon_error');
	}

	/**
	 * Show a warning dialog
	 *
	 * @param {String} title
	 * @param {String} message
	 * @param {...String} buttons
	 * @return {String}
	 */
	this.showWarningDialog = function(title, message, buttons) {
		return showDialog('dialogs_message', 'warning', arguments, 'dialogs_icon_warning');
	}

	/**
	 * Show an info dialog
	 *
	 * @param {String} title
	 * @param {String} message
	 * @param {...String} buttons
	 * @return {String}
	 */
	this.showInfoDialog = function(title, message, buttons) {
		return showDialog('dialogs_message', 'info', arguments, 'dialogs_icon_info');
	}

	/**
	 * Show a question dialog
	 *
	 * @param {String} title
	 * @param {String} message
	 * @param {...String} buttons
	 * @return {String}
	 */
	this.showQuestionDialog = function(title, message, buttons) {
		return showDialog('dialogs_message', 'question', arguments, 'dialogs_icon_generic');
	}

	/**
	 * Show an input dialog
	 *
	 * @param {String} title
	 * @param {String} message
	 * @param {String} [initialValue]
	 * @return {String}
	 */
	this.showInputDialog = function(title, message, initialValue) {
		return showDialog('dialogs_input', 'input', arguments, 'dialogs_icon_generic');
	}

	/**
	 * Show a select dialog
	 *
	 * @param {String} title
	 * @param {String} message
	 * @param {...String|Array<String>} optionArray
	 * @return {String}
	 */
	this.showSelectDialog = function(title, message, optionArray) {
		return showDialog('dialogs_select', 'select', arguments, 'dialogs_icon_generic');
	}

	/**
	 * Show a Form In Modal Dialog
	 *
	 * @param {String|RuntimeForm} formName
	 * @param {Number} [left]
	 * @param {Number} [top]
	 * @param {Number} [width]
	 * @param {Number} [height]
	 * @param {String} [title]
	 * @param {Boolean} [resizable]
	 * @param {Boolean} [showTextToolbar]
	 * @param {String} [windowName]
	 */
	this.showFormInModalDialog = function(formName, left, top, width, height, title, resizable, showTextToolbar, windowName) {
		showDialog(null, 'FIMD', arguments);
	}
};
