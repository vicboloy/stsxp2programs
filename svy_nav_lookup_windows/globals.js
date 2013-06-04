/**
 * @deprecated DO NOT USE ANYMORE Use {@link scopes#svyLookupWindows#getMode()} and {@link scopes#svyLookupWindows#setMode()} instead
 * @author Sanneke Aleman
 * @type {{pk:Number, fields:Array, data:Array, mode:String, returnField: String, returnForm: String, allowInBrowse:Boolean, fields:Array, data:Array}}
 * @properties={typeid:35,uuid:"4195E908-335A-455F-A222-DD3D45AB673D",variableType:-4}
 */
var svy_nav_fr_solutionModelObject = null;

/**
 * @deprecated  Use {@link scopes#svyLookupWindows#showLookupWindow(JSEvent, String, String, String, String, Object,Array, String, Boolean, String, String, String, String)} instead 
 * 
 * @param {JSEvent} [event]
 * @param {String} returnField
 * @param {String} program
 * @param {String} [afterInsertMethodName]
 * @param {String} [methodToAddFoundsetFilters]
 * @param {Object} [params]  Mode can be (case insensitive):
 *							"newCommit" - will commit the transaction in the lookup window
 *							"newNoCommit" - will not commit the transaction in the lookup window
 *							"show" - shows the requested record (which has the edit button if needed) - pass the pk to use the correct record
 *							"editCommit" - will commit the transaction in the lookup window - pass the pk to use the correct record
 *							"editNoCommit" - will not commit the transaction in the lookup window - pass the pk to use the correct record
 *							"allowInBrowse" - to allow in browse
 * @param {Array} [svy_nav_fr_recursivecall] if you want the lookup window to call a lookup window
 * @param {String} [requestedDataprovider] if you want to return the value of a different other then the PK
 * @param {Boolean} [allowInBrowse] if you want the method to run in browse
 * @param {String} [beforeInserMethodName] If method returns false insert will not happen - method will get the value of insert as argument
 * @param {String} [sortString] sort order of the foundset in the lookup
 * @param {String} [returnForm] if you want to specify the returnform (instead of taking the one from the event)
 * @param {String} [element] if you want to specify the element (instead of taking the one from the event)
 * 
 * @properties={typeid:24,uuid:"E106D87F-1106-4FB1-A67D-ED2DBE853664"}
 * @AllowToRunInFind
 */
function svy_nav_showLookupWindow(event, returnField, program, afterInsertMethodName, methodToAddFoundsetFilters, params, svy_nav_fr_recursivecall, requestedDataprovider, allowInBrowse, beforeInserMethodName, sortString, returnForm, element) {
	scopes.svyLookupWindows.showLookupWindow(event, returnField, program, afterInsertMethodName, methodToAddFoundsetFilters, params, svy_nav_fr_recursivecall, requestedDataprovider, allowInBrowse, beforeInserMethodName, sortString, returnForm, element)
}
