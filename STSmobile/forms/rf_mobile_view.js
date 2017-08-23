/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C76F50CA-737E-4472-BAFA-AAFBF5300E79"}
 */
var stayField = '';
/**
 * @properties={typeid:35,uuid:"A9E241CD-9D14-4332-A936-2F48EFB92CD9",variableType:-4}
 */
var fieldBadEntry = false;
/**
 * @properties={typeid:35,uuid:"039D460E-945E-490C-BB44-AFE440B34CA8",variableType:-4}
 */
var fieldErroredIndex = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2C0CD9AE-ACA9-4FF9-910A-02BCB7E41811"}
 */
var currentField = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"31BE79E9-C17C-4F46-A21F-CEC76AA55BB5"}
 */
var fieldErroredName = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B4DFA51D-715E-4C1F-8A94-9D29ECD0212F"}
 */
var statusCode = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D15E024A-716A-42E5-9AB6-2522B88F80C0"}
 */
var statusLocation = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18D0B8E7-089A-43FA-B0FF-FA3259ED066B"}
 */
var statusWorker = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"87945C0C-A95F-4FE9-936B-D32B094F8C7C"}
 */
var currentID = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7058CCB8-B5DC-4CBE-AA06-F7329412F039"}
 */
var lastID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"76973B92-58EA-4478-B1C3-48328E211128"}
 */
var jobNumber = "";
/**
 * @properties={typeid:35,uuid:"F91391F5-7779-4FFE-8AE0-469C570CDAFC",variableType:-4}
 */
var shownFields = [];
/**
 * @properties={typeid:35,uuid:"C58165B7-9D69-4CCA-BFC2-28D932C4BDF6",variableType:-4}
 */
var tabFieldOrder = [];
/**
 * @properties={typeid:35,uuid:"48497B76-2F8B-4DEA-9852-C9F0DC3FD0A2",variableType:-4}
 */
var requiredFields = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC5B2482-6856-46EF-8603-F224865992F8"}
 */
var loadNumber = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E0ADF44D-B8F1-4DE2-AB91-FE3DDAED3364"}
 */
var currentBundle = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EAAF2D65-72BB-45D6-9826-F5F371F6C957",variableType:4}
 */
var dc = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"98986AC8-0155-41DF-A4BF-2FEDCB94DA62"}
 */
var focusLost = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F6DCF346-D576-40F1-80BB-CD14F815D1BE"}
 */
var focusGain = '';
/**
 * @properties={typeid:35,uuid:"FF87A397-F569-4B79-BF92-38AA539398CB",variableType:-4}
 */
var focusSkipFlag = false;
/**
 * @properties={typeid:24,uuid:"CC386C84-184A-40DA-B592-66A5398ADC06"}
 */
function resetStatusCode(){
	statusCode = "";
}
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EF5CB821-FAEF-4769-9226-7BA8107B2349",variableType:4}
 */
var bundlePieces = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"79C858C6-4575-4D63-9007-1CBE6EC49FD4",variableType:4}
 */
var bundleWeight = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AC2C961D-11AB-4DBA-BE44-4B1054E93DB3",variableType:4}
 */
var width = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6648D84A-8F9C-4E3D-8187-A4513C8CFD23",variableType:4}
 */
var weight = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C02A9607-CBD4-47E4-9131-1D0428B285B0",variableType:4}
 */
var length = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1ED8A611-393A-4972-91B1-B4299C5D3D17"}
 */
var pcswstatus = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E4D9F0F1-595C-4E9C-87E9-5E73BBB740A1"}
 */
var heat = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"600CAE77-AF63-4C4B-995A-CE1936AA5667"}
 */
var grade = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7BC5514D-D658-4B95-8113-773BD2C11017",variableType:4}
 */
var pcmksAtLocation = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"606D6B51-7AED-4C16-BEE7-A0E95D64DA7C",variableType:4}
 */
var shipPieces = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1682909D-5ED3-4F25-A60E-896719E0D385",variableType:4}
 */
var shipWeight = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54712BBF-E2D2-457E-AC0C-FA23BDA33FD3"}
 */
var piecemark = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C1781428-12DB-4BE4-ADCE-DA1CBEE4CA5D"}
 */
var viewTitle = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"07CD6A04-A34E-4CE9-BFD3-EDCB0059C0D7"}
 */
var drawingRevision = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"181A79DB-72AA-4C37-AA71-1D56BEF93557"}
 */
var genericInput = "";
/**
 * @properties={typeid:24,uuid:"2CEA60B5-2BBD-4F80-B54F-0E5FCE77C62A"}
 */
function resetWorkerCode(){
	statusWorker = "";
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F094E8E-0D6B-4635-8A95-BBCE28FD4B94"}
 * @AllowToRunInFind
 */
function onShowForm(firstShow,event) {
	if (firstShow){
		if (!globals.shortcutsSet){
			//plugins.window.createShortcut('UP',globals.rfRecordUp,'rf_mobile_view');
			//plugins.window.createShortcut('DOWN',globals.rfRecordDown,'rf_mobile_view');
			plugins.window.createShortcut('RIGHT',globals.rfRecordDetail,'rf_mobile_view');
			plugins.window.createShortcut('LEFT',globals.rfRecordDetailClose,'rf_mobile_view');
			plugins.window.createShortcut('RIGHT',globals.rfArrowRt,'mobile_query');
			plugins.window.createShortcut('LEFT',globals.rfArrowLt,'mobile_query');
			shortcutsSet = true;
		}
		forms.rf_mobile_view.elements.tablessHistory.setTabEnabledAt(1,true);
		forms.rf_mobile_view.elements.tablessHistory.setTabEnabledAt(2,true);
		fieldErroredName = '';
	}
	if (application.isInDeveloper()){application.output('fs size '+foundset.getSize())}
	if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT){

	}
	requiredFields = [];
	var formName = event.getFormName();
	var tabSequence = [];
	tabFieldOrder = [];
	var transShopEl = forms[formName].elements.transShop;
	var showElementsOf = globals.session.program;
	viewTitle = showElementsOf+' '+globals.session.association;
	//var start = transShopEl.getLocationY()*1+transShopEl.getHeight()*1;
	var padding = 2;
	//globals.setTransShop();
	null;
	statusCode = "";
	statusLocation = "";
	statusWorker = "";
	foundset.clear();
	if (application.isInDeveloper()){application.output('foundset '+foundset)}
	globals.rfClearMobDetails();
	globals.mobWeightUnits = (globals.isJobMetric(forms[formName].jobNumber)) ? " kgs" : " lbs";
	globals.mobLengthUnits = (globals.isJobMetric(forms[formName].jobNumber)) ? " mm" : " ins";
	lastID = "";
	var show = [];
	var focusFirst = "";
	for (var item in globals.rfViews[showElementsOf]){
		show.push(item);
	}
	while (item = shownFields.pop()){
		if (show.indexOf(item) == -1){
			var element = forms[formName].elements[item];
			var elementLabel = forms[formName].elements[item+'label'];
			var elementUnits = forms[formName].elements[item+'units'];
			element.visible = false;
			element.bgcolor = 'DEFAULT';
			elementLabel.visible = false;
			if (elementUnits){elementUnits.visible = false;}
		}
	}
	var newLine = true;
	var newY = 0;
	var fieldLine = 0;
	for (var index = 0;index < show.length;index++){
		item = show[index];
			/** @type {JSField} */
			element = forms[formName].elements[item];
			if (!element){continue}
			element.bgcolor = 'white';
			elementLabel = forms[formName].elements[item+'label'];
			elementUnits = forms[formName].elements[item+'units'];
			var height = element.getHeight();
			if (newLine){
				fieldLine++;
			} else {
				newLine = true;
			}
			newY = height*fieldLine+padding*fieldLine; //+start*1;
			if (globals.rfViews[showElementsOf][item].search(",") != -1){
				newLine = false; // continuation of field on same line as last
			}
			element.visible = true;
			element.setLocation(element.getLocationX(),newY);
			if (globals.rfViews[showElementsOf][item].search("O|R") != -1){
				if (focusFirst == ""){focusFirst = item;tabSequence.push(element)}
				var fieldValue = element.getDataProviderID();
				forms['rf_mobile_view'][fieldValue] = "";
				//tabFieldOrder.push(item);
				//tabSequence.push(element);
				if (globals.rfViews[showElementsOf][item].search("R") != -1){
					requiredFields.push(item);
					element.bgcolor = 'yellow';
				}
			}
			shownFields.push(item);
			if (elementLabel){
				elementLabel.visible = true;
				elementLabel.setLocation(elementLabel.getLocationX(),newY);
			}
			if (elementUnits){
				elementUnits.visible = true;
				elementUnits.setLocation(elementUnits.getLocationX(),newY);
				//elementUnits.putClientProperty('tabSeq',-1);
			}
	}
	//forms[formName].elements[focusFirst].requestFocus();
	controller.setTabSequence(tabSequence);
	//if (firstShow){
	//	application.output(' REM rf_mobile_view show focus');
	forms[formName].elements[focusFirst].requestFocus();
	//}
}
/**
 * Handle focus lost event of an element on the form. Return false when the focus lost event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"A9A81B38-47EA-441D-9F69-4FBB6818A58C"}
 * @AllowToRunInFind
 */
function onElementFocusLost(event) {
	var formName = event.getFormName();
	var elementName = event.getElementName();
	focusLost = elementName;
	if (application.isInDeveloper()){application.output(dc++ +' -REM Focus Lost -'+elementName+'\n stayfield:'+stayField+'\n focusGain:'+focusGain+'\n focusLost:'+focusLost+'\n fieldErroredName:'+fieldErroredName);}
	if (elements.errorWindow.visible == true){
		controller.focusField('errorWindow',false);
		if (application.isInDeveloper()){application.output(dc++ +' -REM error window showing Focus Lost field:'+elementName);}
		focusSkipFlag = true;
		return;
	}
	if (focusSkipFlag){//assume this loss is intentional
		//focusSkipFlag = false;
		return;
	}

	var gain = tabFieldOrder.indexOf(focusGain);
	var lose = tabFieldOrder.indexOf(elementName);
	if (lose != -1 && gain != -1 && gain < lose){
		if (application.isInDeveloper()){application.output(dc++ +' -REM move to lower tab, gain '+gain+' lose '+lose);}
		// clear out higher tabs
		for (var index = lose;index > gain;index--){
			var fieldName = tabFieldOrder[index];
			var provId = forms.rf_mobile_view.elements[fieldName].getDataProviderID();
			forms.rf_mobile_view[provId] = '';
		}
		//stayField = ''; //clear out, this required-field complete
		return;
	}
	if (stayField != '' && fieldErroredName == ''){//control tabbing out of required field
		var dataProv = elements[elementName].getDataProviderID();
		if (application.isInDeveloper()){application.output(dc++ +' -REM tab out required field with /'+forms.rf_mobile_view[dataProv]+'/')}
		if (application.isInDeveloper()){application.output('REM does forms.rf_mobile_view[dataProv] !=  \'\''+(forms.rf_mobile_view[dataProv] != '')+' length '+forms.rf_mobile_view[dataProv].length)}
		if (forms.rf_mobile_view[dataProv].length > 1){
			stayField = ''; //clear out, this required-field complete
			elements[getNextTabbed(elementName,false)].requestFocus();
			return;
		}

		stayField = elementName;
		fieldErroredName = elementName;
		return;
	}
	if (fieldErroredName != '' && fieldErroredName != elementName){
		if (application.isInDeveloper()){application.output(dc++ +' -REM FL field name focus to '+fieldErroredName)}
		if (elements[fieldErroredName]){elements[fieldErroredName].requestFocus();}
		return;
	}

	if (1==1){return}
	//var prevElement = tabFieldOrder.indexOf(elementName);
	if (requiredFields.indexOf(elementName) == -1){return}
	application.output(' REM return to last required entry that"s empty');
	var el = elementName;
	var newEl = elementName;
	for (index = tabFieldOrder.indexOf(el);index >= 0;index--){
		el = tabFieldOrder[index];
		if (requiredFields.indexOf(el) != 0){
			var dataProv = elements[el].getDataProviderID();
			if (forms[formName][dataProv] == ''){
				newEl = el;
			}
		}
		if (application.isInDeveloper()){application.output(dc++ +' -REM FL data provider empty')}
	}
	if (newEl != elementName){
		elements[newEl].requestFocus();
		stayField = newEl;
		//focusSkipFlag = true;
	}
	return;
}

/**
 * Handle focus gained event of an element on the form. Return false when the focus gained event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * @properties={typeid:24,uuid:"2F820D1B-B581-4085-BC49-6524CF069E3B"}
 */
function onElementFocusGained(event) {
	var formName = event.getFormName();
	var elementName = event.getElementName();
	var fieldStayFlag = entryRequired(elementName);
	focusGain = elementName;
	if (application.isInDeveloper()){application.output(dc++ + ' +REM Focus Gain +field:'+elementName+'\n stayfield:'+stayField+'\n focusGain:'+focusGain+'\n focusLost:'+focusLost+'\n fieldErroredName:'+fieldErroredName);}
	globals.session.errorForm = formName;
	globals.session.errorElement = elementName;
	if (forms['rf_mobile_view'].elements.errorWindow.visible == true){
		forms['rf_mobile_view'].controller.focusField('errorWindow',false);
		if (application.isInDeveloper()){application.output(dc++ + ' +REM error window showing Focus Gain field:'+elementName+' fieldErroredName '+fieldErroredName)}
		return;
	}

	if (focusSkipFlag){
		if (application.isInDeveloper()){application.output(dc++ + ' +REM focusSkipFlagged')}
		elements[focusLost].requestFocus();
		if (entryRequired(focusLost)){
			fieldErroredName = focusLost;
			stayField = focusLost;
			focusLost = focusLost;
			focusGain = focusLost;
		}
		focusSkipFlag = false;
		return;
	}
	if (stayField != '' && elementName != stayField){//control tabbing out of required field
	// focus new field if field complete, or to earlier field, or is last field
		if (application.isInDeveloper()){application.output(dc++ + ' +REM stayfield Focus Gain')}
		if ( tabFieldOrder.indexOf(elementName) < tabFieldOrder.indexOf(stayField)
				|| (tabFieldOrder.indexOf(stayField) == tabFieldOrder.length-1)
				|| (fieldErroredName == '')){
				//|| (tabFieldOrder.indexOf(elementName) != 0)){
					if (application.isInDeveloper()){application.output(dc++ + ' +REM stayfield no fld change Focus Gain')}
			fieldErroredName = (fieldStayFlag) ? elementName : '';
			stayField = (fieldStayFlag) ? elementName : '';
			var finIndex = tabFieldOrder.length-1;
			for (var index = tabFieldOrder.indexOf(elementName);index <= finIndex;index++){
				var fieldName = tabFieldOrder[index];
				if (application.isInDeveloper()){application.output(dc++ +' +REM clearing field (no chg) '+fieldName);}
				var provId = forms.rf_mobile_view.elements[fieldName].getDataProviderID();
				forms.rf_mobile_view[provId] = '';
			}
			//provId = elements[elementName].getDataProviderID();
			//forms[formName][provId] = '';
			return;
		} else {
			var provId = elements[stayField].getDataProviderID();
			//forms[formName][provId] = '';
			//focusSkipFlag = true;
			if (application.isInDeveloper()){application.output(dc++ + ' +REM stayfield fld change:'+stayField+' Focus Gain')}
			elements[stayField].requestFocus();
			return;
		}
	}
	if (tabFieldOrder.indexOf(focusGain) < tabFieldOrder.indexOf(focusLost)){
		if (application.isInDeveloper()){application.output(dc++ + ' +REM change to lower field Focus Gain')}
		// clear out higher tabs
		for (var index = tabFieldOrder.indexOf(focusLost);index >= tabFieldOrder.indexOf(focusGain);index--){
			var fieldName = tabFieldOrder[index];
			if (application.isInDeveloper()){application.output(dc++ +' +REM clearing field '+fieldName);}
			var provId = forms.rf_mobile_view.elements[fieldName].getDataProviderID();
			forms.rf_mobile_view[provId] = '';
		}
		//currentField = focusGain;
		//focusSkipFlag = true;
		if (entryRequired(focusGain)){
			forms[formName].fieldErroredName = focusGain;
		}
		forms[formName].elements[focusGain].requestFocus();
		return;
	}
	if (stayField == '' && fieldStayFlag){
		if (application.isInDeveloper()){application.output(dc++ + ' +REM entry reqd but not stayed Focus Gain')}
		for (index = tabFieldOrder.indexOf(elementName);index < tabFieldOrder.length;index++){
			var fld = tabFieldOrder[index];
			var dataProv = elements[fld].getDataProviderID();
			forms[formName][dataProv] = '';
			if (application.isInDeveloper()){application.output(dc++ +'  +REM clearing field X= '+tabFieldOrder[index]);}
			//elements[tabFieldOrder[index]].requestFocus();
		}
		stayField = elementName;
		return;
	}
	if (fieldErroredName != '' && fieldErroredName != elementName){
		if (application.isInDeveloper()){application.output(dc++ + ' +REM field errored & current not erredFocus Gain')}
		//focusSkipFlag = true;
		elements[fieldErroredName].requestFocus();
		stayField = fieldErroredName;
		return;
	}
	if (1==1){return}

	return;
}
/**
 *
 * @properties={typeid:24,uuid:"0FBD3266-A05E-48E1-B3EC-50E5FB85403F"}
 */
function clearForm(){
	for (var index = 0;index < shownFields.length;index++){
		forms['rf_mobile_view'][shownFields[index]] = "";
	}
	forms.rf_mobile_view.foundset.clear();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C23785CE-89F6-40F2-B99F-2ABB6EE05902"}
 */
function onHide(event) {
	foundset.clear();
	return true
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D7E529C3-3D6F-473F-858F-F9308C91C8DD"}
 * @AllowToRunInFind
 */
function onActionBundle(event) {
	if (!currentBundle || currentBundle.length == 0 || currentBundle == "L"){
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT && elements.errorWindow && elements.errorWindow.visible){
			//globals.rfErrorHide(event);
			return false;
		}
		stayField = 'bundlein';
		scopes.globals.rfCreateBundle(event);
		return true;
	} else {
		//currentField = event.getElementName();
		stayField = event.getElementName();
		return true;
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"C2F92EE1-BC2D-4469-8B66-C8962D79B9EA"}
 */
function onActionOptional(event) {
	var formName = event.getFormName();
	var elementName = event.getElementName();
	var tabOrder = tabFieldOrder;
	var index = tabOrder.indexOf(elementName);
	index = (index < tabOrder.length-1) ? index+1 : index;
	if (requiredFields.indexOf(elementName) == -1){
		var entry = event.getSource().getDataProviderID();
		var form = forms[formName];
		var value = form[entry];
		index = getNextTabbed(elementName,true);
		currentField = getNextTabbed(elementName,false);
	}
	if (false && currentField){
		forms[formName].elements[currentField].requestFocus();
		forms.rf_mobile_view.controller.focusField(currentField,true);
		return true;		
	}
	forms[formName].elements[tabOrder[index]].requestFocus();
	forms.rf_mobile_view.controller.focusField(tabOrder[index],true);
	return true;
}
/**
 * @param {String} currentFld
 * @param {Boolean} indexTrue
 *
 * @properties={typeid:24,uuid:"73284836-3CBE-4B3C-9C32-5263BA542928"}
 */
function getNextTabbed(currentFld,indexTrue){
	var index = tabFieldOrder.indexOf(currentFld);
	if (index < tabFieldOrder.length-1){
		index++;
	}
	if (indexTrue){
		return index;
	} else {
		return tabFieldOrder[index];
	}
}
/**
 * @param fieldName
 *
 * @properties={typeid:24,uuid:"9B2C8F36-9FF5-453B-9A4A-63EE8F713E63"}
 */
function entryRequired(fieldName){
	return (requiredFields.indexOf(fieldName) != -1) ? true : false;
}
/**
 * @properties={typeid:24,uuid:"732C6ECD-44F7-49D6-A6D5-EC17AB1671CF"}
 */
function fieldPrevTab(){
	var focused = forms.rf_mobile_view.focusGain;
	var focusIndex = tabFieldOrder.indexOf(focused)
	var index = (focusIndex == 0) ? 0 : focusIndex-1;
	var prevTab = tabFieldOrder[index];
	forms.rf_mobile_view.elements[prevTab].requestFocus();
}
/**
 * @properties={typeid:24,uuid:"93BEEA58-EBC3-44B1-97CB-20752B43A85B"}
 */
function fieldNextTab(){
	var focused = forms.rf_mobile_view.focusGain;
	var focusIndex = tabFieldOrder.indexOf(focused)
	var index = (focusIndex == tabFieldOrder.length-1) ? tabFieldOrder.length-1 : focusIndex+1;
	var nextTab = tabFieldOrder[index];
	forms.rf_mobile_view.elements[nextTab].requestFocus();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8B3CF2B4-2F3A-4001-ADA3-4013AED4A48E"}
 */
function onActionGeneric(event) {
	// get element type from entry 
}
