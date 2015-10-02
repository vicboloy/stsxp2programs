/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"025F1B47-E30F-46A9-A910-C565912A113F",variableType:-4}
 */
var stayField = false;
/**
 * @properties={typeid:35,uuid:"E7A9A131-D518-4A4B-94E4-29D68B642849",variableType:-4}
 */
var tabOrder = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8B33F61A-576C-4EDE-91F5-EA95EA420181"}
 */
var statusCode = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E08757A0-1F3F-4FF5-9AA2-0447D7B6E7EB"}
 */
var statusLocation = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"5BE708EB-ACC1-443E-A243-A06F073BEA86"}
 */
var statusWorker = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D97CBB1D-6BFF-4A8A-BBF9-D126CCAFF449"}
 */
var currentID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"73C6BF41-2065-42C1-835F-D1D7F515B458"}
 */
var lastID = "";
/**
 * @properties={typeid:24,uuid:"95F94418-73E7-44C7-A483-3B31F88A4D30"}
 */
function resetStatusCode(){
	statusCode = "";
}
/**
 * @properties={typeid:24,uuid:"DF1AC269-3F74-40A2-B479-EF43D0DB62FE"}
 */
function resetWorkerCode(){
	statusWorker = "";
}
/**
 * reset location weight, location pieces, piecemark pieces, total pieces
 * reset oldid status, 
 * check for id in file, and id in bom
 * 
 */

 /**
 * Callback method when form is (re)loaded.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"9E2A54E4-2F94-4384-A84B-98B424FA308D"}
 * @AllowToRunInFind
 */
function onShowForm(firstShow,event) {
	var formName = event.getFormName();
	globals.setTransShop();
	null;
	statusCode = "";
	statusLocation = "";
	statusWorker = "";
	foundset.clear();
	globals.rfClearMobDetails();
	lastID = "";
	switch (formName) {
		case 'rf_shipping':
			application.output('elements'+elements);
			globals.session.errorElement = 'job';
			currentLoad = "";
			currentJob = "";
			elements.job.requestFocus();
			controller.focusField('job',false);
			break;
		default:
			pcsStatCount = "/";
			locationWeight = 0;
			locationPieces = 0;
			globals.session.errorElement = 'status';
			elements.status.requestFocus();
			controller.focusField('status',false);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CAF3DDFA-DD2E-4F15-ABC2-80593443C9E2"}
 */
function onActionKeys(event) {
	application.output('key pressed '+event.getType());
	// TODO Auto-generated method stub
}

