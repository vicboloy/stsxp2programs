
/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7B89F81C-A1F4-458D-961C-B8574C4800A9"}
 */
function onRecordSelectionStatusCode(event) {
	var index = controller.getSelectedIndex();
	var tempcode = status_code;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {String} direction sort direction
 *
 * @private
 *
 * @properties={typeid:24,uuid:"5291A0DB-466A-42FD-90E4-0FAC6162ADC9"}
 */
function onActionStatusChange(event,direction){
	var index = controller.getSelectedIndex();
	var code = status_code;
	application.output("index "+index+" code "+code+" make "+direction);
	if (direction == "lower") {
		//renumber to higher number
		moveUp(true);
	} else if (direction == "higher"){
		//renumber to lower number
		moveUp(false);
	} else {
		//remove
		
	}
}
/**
 * @properties={typeid:24,uuid:"9FDF7B23-BA0E-4BCF-AD39-D3CBFD1D1E81"}
 * @AllowToRunInFind
 * 
 * @param {boolean} moveUpFlag either move the selection up or move it down
 * 
 */
function moveUp(moveUpFlag){
	var currRecord = controller.getSelectedIndex();
	if (moveUpFlag && currRecord == 1){return}
	if (!moveUpFlag && currRecord == controller.getMaxRecordIndex()){return}
	var nextIndex = 0;
	if (moveUpFlag){
		nextIndex = currRecord-1;
	} else {
		nextIndex = currRecord+1;
	}
	
	var currentSort = route_order;
	controller.setSelectedIndex(nextIndex);
	var nextSort = route_order;
	route_order = currentSort;
	controller.setSelectedIndex(currRecord);
	route_order = nextSort;
	controller.sort('route_order asc');
}
/**
 * Perform sort.
 *
 * @param {String} dataProviderID element data provider
 * @param {Boolean} asc sort ascending [true] or descending [false]
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"DCEEDF51-5C95-468C-9D61-A3B58926EA31"}
 */
function onSortNoOp(dataProviderID, asc, event) {
	return;
	//controller.sort(dataProviderID + (asc ? ' asc' : ' desc'), false)
}
/**
 * Perform sort.
 *
 *
 * @private
 *
 *
 * @properties={typeid:24,uuid:"AA19A989-3E4C-4383-93DE-229306C6F0EA"}
 */
function onResort() {
	controller.sort('route_order asc');
}