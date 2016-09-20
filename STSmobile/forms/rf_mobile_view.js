/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C76F50CA-737E-4472-BAFA-AAFBF5300E79",variableType:-4}
 */
var stayField = false;

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
	if (application.isInDeveloper()){application.output('fs size '+foundset.getSize())}
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
				if (focusFirst == ""){focusFirst = item}
				var fieldValue = element.getDataProviderID();
				forms['rf_mobile_view'][fieldValue] = "";
				tabFieldOrder.push(item);
				tabSequence.push(element);
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
	forms[formName].elements[focusFirst].requestFocus();
	controller.setTabSequence(tabSequence);
	forms[formName].elements[focusFirst].requestFocus();


			/**
			application.output('elements'+elements);
			globals.session.errorElement = 'job';
			currentLoad = "";
			currentJob = "";
			elements.job.requestFocus();
			controller.focusField('job',false);
			pcsStatCount = "/";
			locationWeight = 0;
			locationPieces = 0;
			globals.session.errorElement = 'status';
			elements.status.requestFocus();
			controller.focusField('status',false);
			*/
	if (application.isInDeveloper()){application.output('fs size '+foundset.getSize())}

}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3162C58C-4A45-4E6F-A266-8247A8DA4939"}
 */
function onActionKeys(event) {
	if (application.isInDeveloper()){application.output('key pressed '+event.getType())}
	
}

/**
 * Handle focus lost event of an element on the form. Return false when the focus lost event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"A9A81B38-47EA-441D-9F69-4FBB6818A58C"}
 * @AllowToRunInFind
 */
function onElementFocusLost(event) {
	var formName = event.getFormName();
	var elementName = event.getElementName();
	var tabOrder = tabFieldOrder;
	var index = tabOrder.indexOf(elementName);
	index = (index < tabOrder.length-1) ? index+1 : index;
	if (requiredFields.indexOf(elementName) != -1){
		var entry = event.getSource().getDataProviderID();
		var variable = forms[formName];
		var value = variable[entry];
		if (!value ||  value == ""){
			index = tabOrder.indexOf(elementName);
			//return true;
		}
	}
	forms[formName].elements[tabOrder[index]].requestFocus();
	return true;
}

/**
 * Handle focus gained event of an element on the form. Return false when the focus gained event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"2F820D1B-B581-4085-BC49-6524CF069E3B"}
 */
function onElementFocusGained(event) {
	var formName = event.getFormName();
	var elementName = event.getElementName();
	globals.session.errorForm = formName;
	globals.session.errorElement = elementName;
	if (forms['rf_mobile_view'].elements.errorWindow.visible == true){
		forms['rf_mobile_view'].controller.focusField('errorWindow',false);
		return;
	}
	var indexCurrent = tabFieldOrder.indexOf(elementName);
	for (var index = 0;index < indexCurrent;index++){
		var prevField = tabFieldOrder[index];
		if (requiredFields.indexOf(prevField) != -1){
			var entry = forms[formName].elements[prevField].getDataProviderID();
			var variable = forms[formName];
			var value = variable[entry];
			if (!value ||  value == ""){
				forms[formName].elements[prevField].requestFocus();
				return true;
			}
		}
	}
	return true;
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
