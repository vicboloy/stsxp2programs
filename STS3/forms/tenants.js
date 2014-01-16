/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0067668D-18DC-4796-95C0-65B6208FE5E0"}
 */
var errorMessage = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"69C7743A-6579-4ED5-B49F-D30AD78BA1C7"}
 */
var companyName = "";
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"3515AA20-5946-4470-AB1C-C244F779D12E"}
 */
function onActionNew(event) {
	
	globals.secCreateTenant(companyName);
	// TODO Auto-generated method stub
}
