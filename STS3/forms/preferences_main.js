
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
	
	//for (var index=0;index < globals.aStatusTypes.length;index++){
	//	application.output("index Status Types "+index+" "+globals.aStatusTypes[index]);
	//}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AFBA62E6-C20B-4626-ADB8-DC2D7D17E805"}
 * @AllowToRunInFind
 */
function onActionUpdatePrefs(event) {
	// for globals, user_id = -1, tenant_id= main tenant, field_name = index, value_type, value_string
	var prefs = scopes.prefs;
	var fs = sts_prefs;
	var user_id = -1;
	var tenant = globals.secCurrentTenantID;
	var variable = "";
	var variableSetting = "";
	var description = "Global Preference";
	var saveRec = false;
	var rec = null;
	var updateCount = 0;
	for (var index in prefs){
		variable = index;
		variableSetting = prefs[index];
		variableType = typeof(variableSetting);
		var fieldType = typeof(prefs[index]);
		variableSetting +="";
		saveRec = false;
		if (fs.find()){
			fs.user_id = -1;
			fs.tenant_id = tenant;
			fs.field_name = variable;
			if (fs.search() > 0){
				rec = fs.getRecord(1);
				if (rec.field_value != variableSetting){
					rec.field_value = variableSetting;saveRec = true;
				}
				if (rec.value_description != description){
					rec.value_description = description;saveRec = true;
				}
				if (rec.field_type != variableType){
					rec.field_type = variableType;saveRec = true;
				}
				//application.output('changed record '+variable);
			} else {
				var recNum = fs.newRecord();
				rec = fs.getRecord(recNum);
				rec.user_id = user_id;
				rec.tenant_id = tenant;
				rec.field_name = variable;
				rec.field_value = variableSetting;
				rec.field_type = variableType;
				rec.value_description = description;
				saveRec = true;
			}
		}
		
		if (saveRec){databaseManager.saveData(rec);updateCount++;}
		//application.output(index+" = "+prefs[index]+" user_id: "+-1+" tenant_id "+globals.secCurrentTenantID+" field: "+index+" value: "+prefs[index]+" field type: "+fieldType);
	}
	//application.output("update count "+updateCount);
}
