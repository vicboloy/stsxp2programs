/**
 * 
 *
 * @properties={typeid:35,uuid:"5986270F-2DA2-4408-A62E-5F2E26B8D48B",variableType:-4}
 */
var printSelection = [];

/**
 * 
 *
 * @properties={typeid:35,uuid:"19CC51C9-710E-4337-B405-E566C8301C68",variableType:-4}
 */
var printActions = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"56015AC8-394E-4F8F-89C1-C2B5F98A5FBC",variableType:-4}
 */
var barcodeSet = [];
/**
 * 
 *
 * @properties={typeid:35,uuid:"9F2A7483-9483-4511-8209-EE3134121E7B",variableType:-4}
 */
var lprint = false;
/**
 * 
 *
 * @properties={typeid:35,uuid:"F407FAA9-9903-49DC-B79C-22FF1C75C4B4",variableType:-4}
 */
var endVars = null;
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * 
 *
 * @properties={typeid:24,uuid:"53AA15CA-E636-482E-BEF3-AFE7B5C4ECF4"}
 */
function onRenderRequestBarCount(event) {
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
	/** @type {JSFoundSet<db:/stsservoy/import_table>} */
	var rec=event.getRecord();
	var rend=event.getRenderable();
	
	var color = 'yellow';//rend.bgcolor;
	//rend.bgcolor = cyan;
	if (rend){
		if (rec && !rend.toolTipText){
			rend.toolTipText = scopes.kiss.importExistingRecStatus(rec);
			forms['kiss_option_import'].importRecData = rend.toolTipText;
		}
		if (rend && rec && rec.lprint != 1 && rec.selected == 1){color = "green"}
		if (rend && rec && rec.lprint == 1 && rec.selected == 0){color = "yellow"}
		if (rend && rec && rec.lprint == 1 && rec.selected == 1){color = "red"}
		//var recalc = false;
		//var rec = event.getRecord();
		if (rend.getName() == 'set_bc_qty'){
			if ((rec && rec.item_qty == 1) || 
					(rec.import_status == i18n.getI18NMessage('status.ignore'))){// ||
					//(scopes.prefs.qtyPrompt != 0 && rec.item_qty*1 < scopes.prefs.qtyPrompt*1) || 
					//(scopes.prefs.wtPrompt != 0 && rec.item_weight*rec.item_qty <= scopes.prefs.wtPrompt*1) ){//) || (rec && rec.parent_piecemark != rec.piecemark) ){
				//rec.set_bc_qty = 1;
				rend.fgcolor = 'black';rend.border = 'EmptyBorder,0,0,0,0';
				rend.enabled = false;
				//recalc = true;
			} else {
				rend.bgcolor = 'yellow';
				rend.enabled = true;
			}
		} 
		/**else 
		if (false && rec && rend.getName() == 'set_bc_qty' && rec.item_qty*1 > 1){
			if (!rec.set_bc_qty){
				//application.output('set bc qty render');
				//var uniqPcmk = scopes.jobs.uniquePiecemark(rec);
				//var uniqPcmkId = scopes.jobs.dsPiecemarkArray[uniqPcmk];
				//var seqId = scopes.jobs.dsSequenceArray['_'+rec.sequence_number];
				//var lotId = scopes.jobs.dsLotArray['_'+rec.lot_number+'|_'+rec.sequence_number];
				//** @type {Array} * /
				//var barcodeCnt = scopes.jobs.dsIdfileArray[uniqPcmkId+','+seqId+','+lotId];
				rec.set_bc_qty =  Math.floor(rec.item_qty);
				//if (application.isInDeveloper()){application.output('existing bc count '+barcodeCnt+' : length'+barcodeCnt)}
				recalc = true;
			}
			rend.bgcolor = color;//'yellow';rend.fgcolor = 'red';
		}
		if (false && rec && recalc){
			var nums = scopes.jobs.createBCnums(rec.set_bc_qty,rec.item_qty,rec.item_weight);
			rec.last_bc_qty = nums.last;
			rec.barcode_qty = nums.per;
			rec.total_label_wt = nums.totwt;
			rec.last_bc_qty = nums.last;
			rec.total_label_qty = nums.full;
		} */
	}
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * 
 *
 * @properties={typeid:24,uuid:"4DF98C5B-E5E6-4A71-AA70-55B102E8A7A8"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {
	elements.selection.visible = false;//remove selection tab temporarily as per P2 20180816
	/** @type {QBSelect<db:/stsservoy/import_table>} */
	var q = databaseManager.createSelect('db:/stsservoy/import_table');
	//q.where.add(q.columns.import_status.not.eq(i18n.getI18NMessage('import.ignore')));
	q.where.add(q.columns.job_number.eq(forms['kiss_option_import'].jobNumber));
	q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
	foundset.loadRecords(databaseManager.getFoundSet(q));
	foundset.loadAllRecords();
	null;
	//scopes.kiss.setDbTableCounts(event);
	//databaseManager.getTableFilterParams('stsservoy');
}
/**
 * @param rec
 *
 * @properties={typeid:24,uuid:"4E347EEF-947C-4A80-9D36-2FBA5E95DC5B"}
 */
function setBarcodesCounts(rec){
	rec.set_bc_qty = ((rec.item_qty == 1) || (rec && rec.parent_piecemark != rec.piecemark))? 1: rec.item_qty;
	var nums = scopes.jobs.createBCnums(rec.set_bc_qty,rec.item_qty,rec.item_weight);
	rec.last_bc_qty = nums.last;
	rec.barcode_qty = nums.per;
	rec.total_label_wt = nums.totwt;
	rec.last_bc_qty = nums.last;
	rec.total_label_qty = nums.full;
	return nums;
}
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"D1FFC250-3A99-4B9F-BD86-33E83EF6960D"}
 */
function onRenderStatus(event) {
	var rend = event.getRenderable();
	if (rend){
		/** @type {JSFoundSet<db:/stsservoy/import_table>} */
		var rec = event.getRecord();
		if (rec){
			if (rec.import_status == i18n.getI18NMessage('import.summarize')) {
				rend.bgcolor = '#99ffff';
			} else if (rec.import_status == i18n.getI18NMessage('import.ignore')) {
				rend.bgcolor = '#d6d6c2';
			} else if (rec.import_status == i18n.getI18NMessage('import.dirty')){
				rend.bgcolor = 'yellow';
			} else {
				if (rec.sts_qty == rec.item_qty){
					rend.bgcolor = 'green';
				} else if (rec.sts_qty != 0) {
					rend.bgcolor = '#99ffff';
				} else {
					rend.bgcolor = '#ffff99';
				}
			}
		}
	}
}

/**
 * Perform sort.
 *
 * @param {String} dataProviderID element data provider
 * @param {Boolean} asc sort ascending [true] or descending [false]
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"159235FD-8C6C-43FC-8832-98E789A41384"}
 */
function onSort(dataProviderID, asc, event) {
	function sort(a,b){
		var numeric = (a-b);
		application.output('numeric '+numeric);
		if (numeric== "NaN"){
			if (asc){
				return (a-b);
			} else {
				return (b-a);
			}
		} else {
			if (asc){
				return (a<b);
			} else {
				return (a>b);
			}
		}
	}
	//if (1==1) {return}
	application.output('sorting '+dataProviderID);
	var form = event.getFormName();
	sort(dataProviderID + (asc ? ' asc' : ' desc'), false);
	application.output('has record changes '+databaseManager.hasRecordChanges(foundset))
	application.output('sort complete');
}

/**
 * Handle changed data.
 *
 * @param {String} oldValue old value
 * @param {String} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"944967A0-68FC-410B-99A1-E9278A890C0B"}
 */
function onDataChangeStatus(oldValue, newValue, event) {
	var idx = controller.getSelectedIndex();
	var rec = foundset.getRecord(idx);
	if (rec){databaseManager.saveData(rec)}
	return true;
}
/**
 * @param {Boolean} hide
 *
 * @properties={typeid:24,uuid:"48F7E7BB-4D46-4073-A194-3887F2CDAB55"}
 */
function hideIgnoredRecords(hide){
	databaseManager.saveData(foundset);
	if (hide){
		/** @type {QBSelect<db:/stsservoy/import_table>} */
		var q = databaseManager.createSelect('db:/stsservoy/import_table');
		q.where.add(q.columns.import_status.not.eq(i18n.getI18NMessage('import.ignore')));
		q.where.add(q.columns.job_number.eq(forms['kiss_option_import'].jobNumber));
		q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		foundset.loadRecords(databaseManager.getFoundSet(q));
	} else {
		/** @type {QBSelect<db:/stsservoy/import_table>} */
		q = databaseManager.createSelect('db:/stsservoy/import_table');
		q.where.add(q.columns.tenant_uuid.eq(globals.session.tenant_uuid));
		q.where.add(q.columns.job_number.eq(forms['kiss_option_import'].jobNumber));
		foundset.loadRecords(databaseManager.getFoundSet(q));
	}
}