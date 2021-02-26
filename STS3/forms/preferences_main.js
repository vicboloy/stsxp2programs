/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4C2FE0A8-BDB7-4E77-8B1F-A2F09B71D9E7"}
 */
var errorMessage = "";
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"46471F9F-18E4-4ECA-BFB0-3DB75F4EC181"}
 */
function onShow(firstShow, event) {
	if (firstShow){
	}
	elements.btn_ExportPreferences.enabled = (globals.session.login == 'P');
	globals.setUserFormPermissions(event,false);
	//elements.btn_ExportPreferences.enabled = (globals.session.login == 'P');
	//for (var index=0;index < globals.aStatusTypes.length;index++){
	//	application.output("index Status Types "+index+" "+globals.aStatusTypes[index]);
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param prefType
 * @properties={typeid:24,uuid:"AFBA62E6-C20B-4626-ADB8-DC2D7D17E805"}
 * @AllowToRunInFind
 */
function onActionUpdatePrefs(event, prefType) {
	// for globals, user_uuid = -1, tenant_uuid= main tenant, field_name = index, value_type, value_string
	errorMessage = i18n.getI18NMessage('sts.txt.saving.preferences');
	application.updateUI();
	var prefs = scopes.prefs;
	if (prefType == 'Printer'){
		prefs = scopes.printer;
	}
	user_uuid = null;//application.getUUID('FFFFFFFF-0000-0000-DDDDDDDDDDDD');
	var tenant = globals.session.tenant_uuid;
	var variable = "";
	var variableSetting = "";
	var description = 'Global Preference';
	//var saveRec = false;
	var rec = null;
	//var updateCount = 0;
	databaseManager.startTransaction();
	/** @type {QBSelect<db:/stsservoy/preferences2>} */
	var fs = databaseManager.createSelect('db:/stsservoy/preferences2');
	fs.result.add(fs.columns.preferences2_id);
	for (var index in prefs){
		variable = index;
		variableSetting = prefs[index];
		var variableType = typeof(variableSetting);
		///var fieldType = typeof(prefs[index]);
		variableSetting +="";
		//saveRec = false;
		fs.where.add(fs.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
		fs.where.add(fs.columns.user_uuid.isNull);
		fs.where.add(fs.columns.field_name.eq(variable));
		/** @type {JSRecord<db:/stsservoy/preferences2>} */
		var F = databaseManager.getFoundSet(fs);
		if (F.getSize() > 0){
			rec = F.getRecord(1);
			if (rec.field_value != variableSetting){
				rec.field_value = variableSetting;//saveRec = true;
			}
			if (rec.value_description != description){
				rec.value_description = description;//saveRec = true;
			}
			if (rec.field_type != variableType){
				rec.field_type = variableType;//saveRec = true;
			}
		} else {
			var recNum = F.newRecord();
			rec = F.getRecord(recNum);
			if (!user_uuid) {
				rec.user_uuid = null;//application.getUUID('FFFFFFFF-0000-0000-DDDDDDDDDDDD');
			} else {
				rec.user_uuid = user_uuid.toString();
			}
			rec.tenant_uuid = tenant.toString();
			rec.field_name = variable;
			rec.field_value = variableSetting;
			rec.field_type = variableType;
			rec.value_description = description;
			//saveRec = true;
		}
		//}
		
		//if (saveRec){databaseManager.saveData(rec)}
		//application.output(index+" = "+prefs[index]+" user_uuid: "+-1+" tenant_uuid "+globals.session.tenant_uuid+" field: "+index+" value: "+prefs[index]+" field type: "+fieldType);
	}
	if (databaseManager.saveData()){
		databaseManager.commitTransaction();
	}
	//application.output("update count "+updateCount);
	errorMessage = "";
	application.updateUI();
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"AE43F1AB-8D15-4F67-BB67-A2CAFAABA1F7"}
 */
function onHide(event) {
	globals.stopWindowTrackEvent(event);

	return true
}
