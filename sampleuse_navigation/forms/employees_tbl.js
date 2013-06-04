/**
 * Perform sort.
 *
 * @param {String} dataProviderID element data provider
 * @param {Boolean} asc sort acscending [true] or descending [false]
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"469AB747-30D6-4D62-BAC8-991DA0DB85A2"}
 */
function onSort(dataProviderID, asc, event) {
	controller.sort(dataProviderID + (asc ? ' asc' : ' desc'), false)
}
