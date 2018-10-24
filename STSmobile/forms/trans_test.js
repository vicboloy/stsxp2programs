/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"782BB5B4-99AD-4F1B-80F0-FC41D4D34350"}
 */
var stayField = '';
/**
 * 
 *
 * @properties={typeid:35,uuid:"EA47EAC8-F95B-4AE1-8239-3E54208AB57A",variableType:-4}
 */
var fieldBadEntry = false;
/**
 * 
 *
 * @properties={typeid:35,uuid:"0BE78528-29E6-4347-89CE-13B0198CA6C5",variableType:-4}
 */
var fieldErroredIndex = null;
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"EF8786D3-57A3-42CD-9CA8-149DE1CA5FEF"}
 */
var currentField = '';
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"56034CCF-7291-4669-B950-E9656E548287"}
 */
var fieldErroredName = '';
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"9D435BB3-47E6-47F3-98D8-F2C63D729198"}
 */
var statusCode = "";

/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"2A62E856-749C-4590-BA8E-D4C7508F648B"}
 */
var statusLocation = "";

/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"B189478A-7EC5-457C-B736-7F6A149DC57E"}
 */
var statusWorker = "";

/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"95D184F7-053C-44DE-817A-82DDDCD9A1D6"}
 */
var currentID = "";

/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"B8895D6C-AF12-437E-A0D5-2A3133E26C35"}
 */
var lastID = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"B11C756E-5685-4DA7-9A89-9BA09B098D7A"}
 */
var jobNumber = "";
/**
 * 
 *
 * @properties={typeid:35,uuid:"F7244706-1117-4D01-8DF9-E42D62F23183",variableType:-4}
 */
var shownFields = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"D995C7D1-95C2-42DB-9B7A-74EC49A6A8AD",variableType:-4}
 */
var tabFieldOrder = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"893D4C25-407C-4DF1-AE62-7DD3422D4B5B",variableType:-4}
 */
var requiredFields = [];
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"00E57101-C72C-40F1-84DB-2E5A605AC33D"}
 */
var loadNumber = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"C7A81739-C181-4DE0-ACE2-65E3375F628B"}
 */
var currentBundle = "";
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"8D5C45BE-0F30-42E5-80F3-EA8464B92600",variableType:8}
 */
var dc = 0;
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"C836D159-C1A1-4D95-BD9D-0E5F7501671C"}
 */
var focusLost = '';
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"102C168D-7609-440C-B81E-169294FD72D0"}
 */
var focusGain = '';
/**
 * 
 *
 * @properties={typeid:35,uuid:"F4533863-D7B6-4D2E-BB0D-877CED1E8938",variableType:-4}
 */
var focusSkipFlag = false;
/**
 * 
 *
 * @properties={typeid:24,uuid:"3BB87593-02DA-409B-BE9E-BC260B23CF47"}
 */
function resetStatusCode(){
	statusCode = "";
}
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"EEB9D3B6-568E-40BD-92B8-3A5778AE51D6",variableType:8}
 */
var bundlePieces = 0;
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"427636DD-59AA-4CE7-9F98-E429C955EAEB",variableType:8}
 */
var bundleWeight = 0;
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"3AB83DEB-5AE9-4957-9710-26441AA7B4F5",variableType:8}
 */
var width = 0;
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"1B779286-0828-46A0-A355-C589A2334B30",variableType:8}
 */
var weight = 0;
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"88F183F3-6D2E-4F60-ACB8-4194A9B3967E",variableType:8}
 */
var length = 0;
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"B0093824-51E9-428F-8628-8041AE9948C3"}
 */
var pcswstatus = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"538555C9-F7B4-44AF-AC7B-5CD181D9998C"}
 */
var heat = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"39BAB322-6D7D-4D75-A3CF-934C153FA8D0"}
 */
var grade = "";
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"85724B4A-3F88-4536-901E-75ACBFEFDBDB",variableType:8}
 */
var pcmksAtLocation = 0;
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"F20B0172-B826-4DEF-ABEF-9EEB26F5C2D6",variableType:8}
 */
var shipPieces = 0;
/**
 * @type {Number}
 *
 * 
 *
 * @properties={typeid:35,uuid:"CA254668-E6AE-43A0-BBEE-F8700E0E2C91",variableType:8}
 */
var shipWeight = 0;
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"C6F4B5C4-702A-4E66-B14F-B8A0047B0855"}
 */
var piecemark = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"86BBD030-4A2A-4DA1-96C1-DB01F98CE635"}
 */
var viewTitle = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"84B9AA20-5C69-4BA9-A3DA-CB234F871B95"}
 */
var drawingRevision = "";
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"31DF2B43-B0DA-4F11-90B5-085ABCDE3745"}
 */
var genericInput = "";
/**
 * 
 *
 * @properties={typeid:35,uuid:"4FAF35C4-DB8F-4785-84E0-A0C269215553",variableType:-4}
 */
var showingFields = [];
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"CFEFD516-B2E5-48A4-AEB7-DADDBB063473"}
 */
var lastAction = '';
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"54AC8C31-9D3C-4F95-BCE8-691482F09A0E"}
 */
var sequence = '';
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"6E8D972E-0C03-4F50-8250-55B46C321FDD"}
 */
var quantity = '';
/**
 * @type {String}
 *
 * 
 *
 * @properties={typeid:35,uuid:"1F7D19B7-1421-4D2B-8A57-A8BF62B6D2D6"}
 */
var partnumber = '';
/**
 * 
 *
 * @properties={typeid:35,uuid:"630EA15F-D2C1-44B8-B288-4F4E82BA1EED",variableType:-4}
 */
var grantFocus = null;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F0DAED7E-3715-49C2-A944-F8A2992A82A3"}
 */
var genericInput2 = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A0DD8E1E-F2A5-44F7-83E8-288392DDD378"}
 */
var genericInput3 = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F904CD14-8082-4A32-841F-E480AA5CFFE4"}
 */
var input1 = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9CCACA8D-423E-4BCE-B257-8E1FA3F2E5C5"}
 */
var input2 = '';
/**
 * 
 *
 * @properties={typeid:24,uuid:"AE49C337-62BF-4A4C-8EED-A45698A70655"}
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
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"94F08730-D2F2-40EB-9C58-C93108515E05"}
 */
function onShowForm(firstShow,event) {
	if (firstShow){
	}
	var formName = event.getFormName();
	foundset.clear();
	statusCode = "";
	statusLocation = "";
	statusWorker = "";
	elements.genericin.requestFocus();
}
/**
 * Handle focus lost event of an element on the form. Return false when the focus lost event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"C9552591-C52F-4B02-BC12-772B581E51F8"}
 */
function onElementFocusLost(event) {
	if (1){return}
	if (elements.errorWindow.visible){return}
	var elementId = plugins.WebClientUtils.getElementMarkupId(elements.genericin);
	//var extraJS = 'event.preventDefault();timeout(function () {$'+elementId+'.focus();}, 500);';
	//var extraJS = 'alert("startJS");event.preventDefault();timeout(function () {document.getElementById("'+elementId+'").focus();}, 500);alert("this is id:'+elementId+'");';
	//var extraJS = 'alert("startJS");';
	//plugins.WebClientUtils.executeClientSideJS(extraJS)
	if (event.getElementName() == 'genericin') {
		elements['genericin2'].requestFocus();
	} else {
		elements['genericin'].requestFocus();
	}
}

/**
 * Handle focus gained event of an element on the form. Return false when the focus gained event of the element itself shouldn't be triggered.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 *
 * 
 *
 * @properties={typeid:24,uuid:"4B89D2BE-3937-460E-8F16-73F9CE3D5BF0"}
 */
function onElementFocusGained(event) {
	if (1==1){return}
	var elName = event.getElementName();
	application.output('element name '+elName+' grant focus '+grantFocus);
	if (grantFocus){
		elements[grantFocus].requestFocus();
		grantFocus = null;
	} else {
		elements['genericin'].requestFocus();
	}
}
/**
 *
 * 
 *
 * @properties={typeid:24,uuid:"B4A555BC-0588-41C4-A80F-BB98A6A999E0"}
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
 * 
 *
 * @properties={typeid:24,uuid:"8D1EC1D6-87E4-427A-8E55-129300BCA10E"}
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
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"3C8F5243-E14D-4730-80D5-E9177DD0271B"}
 */
function onActionBundle(event) {
	if (1==1) {return true}
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
 * 
 *
 * @properties={typeid:24,uuid:"6E6AC664-6BD4-4445-A3DA-9BDE72171419"}
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
	//forms[formName].elements[tabOrder[index]].requestFocus();
	//forms.rf_mobile_view.controller.focusField(tabOrder[index],true);
	return true;
}
/**
 * @param {String} currentFld
 * @param {Boolean} indexTrue
 *
 * 
 *
 * @properties={typeid:24,uuid:"2EE44B10-78DD-41C8-8F77-16477ED14F0F"}
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
 * 
 *
 * @properties={typeid:24,uuid:"67FCB0E0-6948-47CD-9227-B03FDAC8CBEB"}
 */
function entryRequired(fieldName){
	return (requiredFields.indexOf(fieldName) != -1) ? true : false;
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"7E7EAF09-6974-4790-842A-F470F653947B"}
 */
function fieldPrevTab(){
	if (1==1){return;}
	var focused = forms.rf_mobile_view.focusGain;
	var focusIndex = tabFieldOrder.indexOf(focused)
	var index = (focusIndex == 0) ? 0 : focusIndex-1;
	var prevTab = tabFieldOrder[index];
	forms.rf_mobile_view.elements[prevTab].requestFocus();
}
/**
 * 
 *
 * @properties={typeid:24,uuid:"54B34A59-CF31-4C60-BB61-C5AD7D6F21ED"}
 */
function fieldNextTab(){
	if (1==1){return;}
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
 * 
 *
 * @properties={typeid:24,uuid:"BCB8C546-6839-47A9-8E51-41646CDF8EC8"}
 */
function onActionGeneric(event) {
	// get element type from entry 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * 
 *
 * @properties={typeid:24,uuid:"9815E538-424D-4227-87A4-55E8B471673F"}
 */
function onActionRemoveFocus(event) {
	elements.genericin.requestFocus();
}

/**
 * Handle focus gained event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * 
 *
 * @properties={typeid:24,uuid:"A8294A52-F469-43BC-BB70-1EF00115C6BA"}
 */
function onFocusGrant(event) {
	if (grantFocus){
		elements[focusGrant].requestFocus();
	}
}

/**
 * Handle focus lost event of the element.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * 
 *
 * @properties={typeid:24,uuid:"FF2BE3AB-D017-40AD-8DB3-3D46EE3D643E"}
 */
function onFocusLost(event) {
	globals.spurious = 1;
	genericInput = '';
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * 
 *
 * @properties={typeid:24,uuid:"A6C218FE-5750-4800-8F01-D61BF68DC0B8"}
 */
function onLoad(event) {
	application.output('viewport globals '+globals.viewport+' -end-');
 // globals.viewPort2 = globals.viewPort2.toXMLString().replace(']]>','').replace('<![CDATA[','');

}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"D191F361-B56C-4EAC-AD8C-5E36BCDFA001"}
 */
function onDataChangeTestEntry(oldValue, newValue, event) {
	var el = event.getElementName();
	var prefix = newValue.substr(0,1);
	var data = newValue.replace(prefix,'');
	var entryIs = '';
	switch (prefix){
		case 'S' :
			entryIs = "Status";
			statusCode = data;
			break;
		case 'C':
			entryIs = "Loc"
			statusLocation = data;
			break;
		case 'W':
			entryIs = "Worker"
			statusWorker = data;
			break;
		case 'D':
		default:
			entryIs = "Serial"
			if (prefix != 'D'){
				currentID = newValue;
			} else {
				currentID = data;
			}
	}
	if (event.getElementName() == 'genericin'){
		elements.genericinlabelc.text = "Entry:";
		elements.genericinlabel.text = "Entry:"+entryIs;
		//elements.genericin.replaceSelectedText('')
		genericInput2 = ''
		elements.genericin2.requestFocus();
		//plugins.UserManager.executeCommand('dir');
		//genericInput = 'x';
		//elements.genericin.requestFocus();
		//genericInput = '';
	} else if (event.getElementName() == 'genericin2') {
		elements.genericinlabel.text = "Entry:";
		elements.genericinlabelc.text = "Entry:"+entryIs;
		genericInput = '';
		elements.genericin.requestFocus();
		//genericInput2 = '';
	} else {
		elements.genericin.selectAll();
		//genericInput = '';
		//elements.genericin.requestFocus();
	}
	//plugins.UserManager.executeCommand('dir');
	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"008B7EEE-EBF5-4224-9C41-3C9DC252AA3B"}
 */
function onActionBack(event) {
	globals.showExecLogout();
}
