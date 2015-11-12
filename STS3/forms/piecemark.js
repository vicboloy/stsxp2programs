/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2530F8DA-BD20-4C97-ABCC-017516C1CF2C"}
 */
var employee = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DD502C61-8671-4777-894D-8FE75155DAC1"}
 */
var association = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D864932E-CAEE-4771-833E-3EFF2E909392"}
 */
var associationId = "";
/**
 * @properties={typeid:35,uuid:"04697504-3550-4F09-9BCA-958C7DD8BDA4",variableType:-4}
 */
var fieldOrder = [];
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"17203A44-75E8-49FE-BB31-4EC8BC6EA134"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		fieldOrder = globals.setFieldOrder(event);
	}
	foundset.clear();
	employee = globals.session.loginUserNum;
	associationId = globals.session.associationId;
	association = globals.m.assocs[associationId];
	scopes.globals.getJobsByAssoc();
	elements.job_number.requestFocus();
	return _super.onShow(firstShow, event)
}
/**
 * @properties={typeid:24,uuid:"7D6AA558-0ED5-4C09-B591-B350FC5DF40F"}
 */
function getJobMetrics(){
	null;
	application.output(vJobRec);
	return scopes.jobs.getJobTotalWeight(vJobRec.job_id.toString(),vJobRec.tenant_uuid.toString(),vJobRec.metric_job,false);
}