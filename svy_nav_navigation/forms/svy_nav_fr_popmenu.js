/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"8D3AD1F0-9059-477B-A076-0B0E50EC2C92"}
 */
var vParentForm = null;

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"EE27DFF4-CF7D-46D2-B829-4CB057E307EB"}
 */
function onClick(event) {
	forms[vParentForm].onClick(event);
}

/**
 * @param {JSEvent} event
 * @properties={typeid:24,uuid:"F2AC6E03-64AE-4460-B4EA-D49F4C089AC8"}
 */
function onRightClick(event) {
	forms[vParentForm].onRightClick(event);
}
