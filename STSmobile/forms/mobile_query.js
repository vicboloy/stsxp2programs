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
	if (application.isInDeveloper()){application.output('approved value '+approvedValue)}
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
	elements.btn_respond_lt.enabled = true;
}
/**
 * @param message
 *
 * @properties={typeid:24,uuid:"818CF022-2C52-4035-B847-DF00194DA94C"}
 */
function setButtonTextRt(message){
	elements.btn_respond_rt.text = message;
	elements.btn_respond_rt.enabled = true;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"6918F035-AA61-45C9-884D-B0BC6F85B99D"}
 * @AllowToRunInFind
 */
function actionBtn(event){
	var elName = event.getElementName();
	var actionIs = elements[elName].text;
	globals.rfQueryClose(event,actionIs);
	if (actionIs == i18n.getI18NMessage('sts.btn.yes')){
		if (approveValue.search('BND') == 0){
			globals.mob.bundle.Id = approveValue;
			forms['rf_mobile_view'].currentBundle = approveValue;
		} else {
			var shortMessageHeat = i18n.getI18NMessage('sts.txt.heat.use.new.number');
			var index = shortMessageHeat.search(':');
			shortMessageHeat = shortMessageHeat.substring(0,index);
			var dialogText2 = dialogText.replace(/(\<html\>)|(\<br\>)/g,'');
			if (dialogText2.search(shortMessageHeat) == 0){globals.createHeat(event,approveValue)}
		}
	}
	return actionIs;
	
}