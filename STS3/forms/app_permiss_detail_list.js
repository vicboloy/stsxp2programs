/**
 * @properties={typeid:35,uuid:"1138357D-4118-4A73-AB46-C4999DCB7FB8",variableType:-4}
 */
var elementsDs = null;

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F078FB8D-777E-4A65-9113-DFD560E186D6"}
 */
function onActionChecked(event) {
	is_ignored = 0;
}

/**
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5A373D38-2CFA-40E8-8340-ECB605E843CA"}
 */
function onActionIgnore(event) {
	is_enabled = 0;
	is_visible = 0;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"751D18E7-D85F-4DF4-BB95-6519AF69D16A"}
 */
function onActionKeyed(event) {
	// TODO Auto-generated method stub
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"C3F75C3E-DA5F-4741-8024-24027B694CAF"}
 */
function onDataChangeVisible(oldValue, newValue, event) {
	if (newValue == 1){
		is_enabled = 1;
	} else {
		is_enabled = 0;		
	}
	return true;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"78D854FA-9CD2-4225-9750-A8B1F6F9C98A"}
 */
function onDataChangeEnabled(oldValue, newValue, event) {
	if (!is_visible){
		is_enabled = 0;
	}
	return true
}
