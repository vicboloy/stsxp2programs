/**
 * @properties={typeid:35,uuid:"64CFF165-05D8-4DB1-8B5D-2967962B34D1",variableType:-4}
 */
var printSelection = [];
/**
 * @properties={typeid:35,uuid:"8CBF5E33-1D39-4561-8858-781B4DEFF8CB",variableType:-4}
 */
var printActions = [];
/**
 * @properties={typeid:35,uuid:"E87E839B-A77F-4B5B-A196-9CCC58F850FD",variableType:-4}
 */
var barcodeSet = [];
/**
 * @properties={typeid:35,uuid:"9CB4FD13-7C16-4AFE-95D1-FE5172BBBD41",variableType:-4}
 */
var lprint = false;
/**
 * @properties={typeid:35,uuid:"58292EE3-F792-4F6B-AE70-2DA6B4383FA6",variableType:-4}
 */
var endVars = null;
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"6DE7985F-F2E7-42E7-916E-C1D84CACF24F"}
 */
function onRender(event) {
	/**
	 * item quantities of 1 must get label counts of 1
	 * item quantities in a multiple of sequence_quantity, get initialized to item quantities
	 */
	// NOTE: a property set on the renderable, will be kept on the element only during onRender
	//if (event.isRecordSelected()) {
	//	event.getRenderable().fgcolor = '#00ff00';
	//} else if (event.getRecordIndex() % 2) {
	//	event.getRenderable().fgcolor = '#ff0000';
	//}
	var rec=event.getRecord();
	var rend=event.getRenderable();
	
	var color = rend.bgcolor;
	if (rec && rec.lprint != 1 && rec.selection == 1){rend.bgcolor = "green"}
	if (rec && rec.lprint == 1 && rec.selection == 0){rend.bgcolor = "yellow"}
	if (rec && rec.lprint == 1 && rec.selection == 1){rend.bgcolor = "red"}
	if (event.getRenderable()){
		var recalc = false;
		/** @type {JSFoundSet<db:/stsservoy/import_table>} */
		var rec = event.getRecord();
		if (rec && rec.item_qty == 1){
			if (rend.getName() == 'set_bc_qty'){
				rend.enabled = false;rend.fgcolor = 'black';rend.border = 'EmptyBorder,0,0,0,0';
				rec.set_bc_qty = 1;
				recalc = false;
			}
		}
		if (rec && !rec.set_bc_qty && rec.item_qty*1 > 1){
			if (rend.getName() == 'set_bc_qty'){
				rec.set_bc_qty = Math.floor(rec.item_qty);
				recalc = true;
			}
		}
		if (false && rec && recalc){
			var nums = scopes.kiss.createBCnums(rec.set_bc_qty,rec.item_qty,rec.item_weight);
			rec.last_bc_qty = nums.last;
			rec.barcode_qty = nums.per;
			rec.total_label_wt = nums.totwt;
			rec.last_bc_qty = nums.last;
			rec.total_label_qty = nums.full;
		}
	}
}
