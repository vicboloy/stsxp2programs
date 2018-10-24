/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FD600C25-EE05-4677-81E4-98A1155A0E3C"}
 */
var employee = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FB5C86AA-0920-43E1-82E7-F5E1CFD830D1"}
 */
var association = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CC5C868B-893B-4E28-A83E-B1E0DD23044C"}
 */
var associationId = "";

/**
 * @properties={typeid:35,uuid:"C7719EA8-0DD8-4CD6-92D3-0B53C759BA4D",variableType:-4}
 */
var fieldOrder = [];

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"6F75E48D-263E-4AE9-9CEA-595159AD0811"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		fieldOrder = globals.setFieldOrder(event);
	}
	globals.setUserFormPermissions(event);
	foundset.clear();
	employee = globals.session.loginUserNum;
	associationId = globals.session.associationId;
	association = globals.m.assocs[associationId];
	scopes.globals.getJobsByAssoc();
	elements.job_number.requestFocus();
	return _super.onShow(firstShow, event)
}

/**
 * @properties={typeid:24,uuid:"DBEC6242-6E9A-4212-B934-38FD25E06C2C"}
 */
function getJobMetrics(){
	null;
	application.output(vJobRec);
	return scopes.jobs.getJobTotalWeight(vJobRec.job_id.toString(),vJobRec.tenant_uuid.toString(),vJobRec.metric_job,false);
}
