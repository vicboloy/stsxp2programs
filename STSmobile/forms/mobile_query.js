/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"738F7B99-BE54-4110-9902-E36A88235981"}
 */
var dialogText = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"49189F92-F67B-4CA5-80E7-0D2B8AF4D00B"}
 */
var dialogBtnLt = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3681162B-C93B-4DF6-B4EC-A374A99D2FC9"}
 */
var dialogBtnRt = '';
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DB3E5482-050C-4492-AD60-3C03CEA47421",variableType:4}
 */
var btnNumber = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8A7ACDED-5BB5-4DEA-9410-4409C0F15B6C"}
 */
var approveValue = '';
/**
 * @param {String} message
 * @param {String} approvedValue
 *
 * @properties={typeid:24,uuid:"F69C42D1-B570-424F-8C77-9B1488B26343"}
 */
function setTitleText(message,approvedValue){
	application.output('approved value '+approvedValue)
	approveValue = approvedValue;
	dialogText = scopes.globals.textWrap(message,30)+'<br><br><center>'+approvedValue;
}
/**
 * @param {String} message
 *
 * @properties={typeid:24,uuid:"89D06393-499B-42A3-978D-279FE6944384"}
 */
function setButtonTextLt(message){
	//dialogBtnLt = message;
	elements.btn_respond_lt.text = message;
}
/**
 * @param message
 *
 * @properties={typeid:24,uuid:"818CF022-2C52-4035-B847-DF00194DA94C"}
 */
function setButtonTextRt(message){
	elements.btn_respond_rt.text = message;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"6918F035-AA61-45C9-884D-B0BC6F85B99D"}
 */
function actionBtn(event){
	var elName = event.getElementName();
	var actionIs = elements[elName].text;
	globals.rfQueryClose(event,actionIs);
	return actionIs;
	
}