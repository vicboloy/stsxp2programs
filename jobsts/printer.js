/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1D75E466-EB92-4249-89CF-73907C414101"}
 */
var connection = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7330DB3F-F928-4D90-A93E-40AEC5FF750B"}
 */
var default_label = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"49FEA6E8-DA3C-450C-A6B4-D3C7A1A804F6"}
 */
var default_label_name = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A688CC03-0416-4DC4-99F9-A81CCBCC836F"}
 */
var barcode_printer = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9F09AAC4-B188-41D5-99EB-E205C21BD677",variableType:4}
 */
var barTender_installed = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5EAD9D16-B768-404F-BC00-1095789D5456",variableType:4}
 */
var barTender_enterprise = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4F8EFAF0-49F0-49DF-AA12-6BB1CBE8D21C",variableType:4}
 */
var barTender_775 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"ECAB0CC0-A21B-4E5C-B4AF-7071E1B06F7D",variableType:4}
 */
var barTender_2016 = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0465FC9D-370E-475A-AF4F-16559EB36A66",variableType:4}
 */
var label_matrix_installed = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F50271C8-635F-460C-8A0E-1C43269A3EBF"}
 */
var third_party_path = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C5C12D0E-65F4-4AAE-BEBE-134C9EACAAAD"}
 */
var parallel_printer_name = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"08E30A4F-AB0F-40D1-9E41-28B83CE97F0D"}
 */
var label_name_default = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7CCDBE64-290D-4927-B31A-3CE03FBBBDDA"}
 */
var local_temp_path = "";
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"F084594B-C575-4880-845A-1D6AC015B800",variableType:-4}
 */
var barTenderFields = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"176CB6B3-5846-404B-8ECD-3606FD25C8B1"}
 */
var barTenderTextSpecs = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8F0E0EFD-0C92-497C-A7DE-9F0CE63DF257",variableType:4}
 */
var labeLaseInstalled = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E39D7EC6-1187-4567-B9C2-BD8FCB4F5AF0"}
 */
var idBarcodePrinter = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82012236-DB40-4FD0-8C72-2106935850EE"}
 */
var idBarcodeFilePath = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DE1CAF02-390A-482B-AF23-ADBF57E10DED"}
 */
var idBarcodeLabelFormat = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"2B92EAA6-E5E1-4209-8176-14B1625BDABF"}
 */
var rawMaterialPrinter = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B2346871-3C12-4ADF-93C4-CBE054AC4ED4"}
 */
var rawMaterialFilePath = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"47C259F8-2256-4CCC-BBFF-4E4E2DB61F15"}
 */
var rawMaterialLabelFormat = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7292EB1D-CB00-483D-B418-A5792D5A7AE8"}
 */
var defaultSysPrinter = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"35BA16D0-6895-4716-80D0-03F6E32BCD39"}
 */
var defaultSysFilePath = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BDFD255E-09EA-43C2-B34E-C60F0069BDC0"}
 */
var defaultSysLabelFormat = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"EFA28D70-015A-46D6-9A57-E055A5BBCC10"}
 */
var userTempPath = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3D4152DD-16C9-41AB-ADAE-92AC5C8EFF90"}
 */
var labeLaseTemplate = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"34B05B3C-B1AF-450D-B36B-E328CA0B7FFC"}
 */
var idLabeLaseTemplate = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"0A2826D8-71BD-4187-8036-815893317953"}
 */
var defaultLabeLaseTemplate = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6759F986-1928-4A00-A1A1-744981A18F22"}
 */
var rawLabeLaseTemplate = '';
/**
 * Red - printed. Yellow - reprint. Green - new print.
 * @param {JSRenderEvent} event
 *
 * @properties={typeid:24,uuid:"C3FC10D9-7AF2-4983-88DF-E79441E9220F"}
 * @AllowToRunInFind
 */
function onRenderPrint(event){
	var rec=event.getRecord();
	var rend=event.getRenderable();

	var andColor = '';
	if (rec && rec.foundset){
		if (scopes.jobs.selectedTableIndexes.indexOf(event.getRecordIndex()) != -1){// && selectedIndexes.indexOf(event.getRecord()) != -1){
			andColor = 'gray';
		}
	}
	var color = rend.bgcolor;//rec.bc_printed == 1 ||  removed since table column change names 20190530
	if (rec && (rec.lprint != 1 || rec.if_lprint != 1) && rec.selection == 1){rend.bgcolor = (andColor != '') ? andColor : "green"}
	if (rec && (rec.lprint == 1 || rec.if_lprint == 1) && rec.selection == 0){rend.bgcolor = (andColor != '') ? andColor : "yellow"}
	if (rec && (rec.lprint == 1 || rec.if_lprint == 1) && rec.selection == 1){rend.bgcolor = (andColor != '') ? andColor : "red"}


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
 * @properties={typeid:24,uuid:"9AE114B3-E03C-45BD-9E02-DED21B29CCE4"}
 * @AllowToRunInFind
 */
function onDataChangePrinterPrefs(oldValue, newValue, event) {
	var prefsChanged = forms.preferences_printer.prefsChanged;
	var form = forms[event.getFormName()];
	form.elements.btn_UpdatePreferences.enabled = true;
	form.elements.btn_SessionPreferences.enabled = true;
	if (event.getElementName() == 'barTenderInstalled'){
		scopes.printer.barTender_2016 = 0;
		form.elements.barTender2016.enabled = (newValue == 1) ? true : false;
	}
	if (event && event.getElementName() && event.getFormName().search('preferences_printer') == 0){// && (event.getElementName().search(/(printerName)|(labelName)/) != -1)){
		var formx = forms[event.getFormName()];
		var elName = event.getElementName();
		switch (formx.labelType){
			case i18n.getI18NMessage('sts.txt.id.label.default'):
				switch (elName){
					case 'printerName':
						scopes.printer.idBarcodePrinter = formx.printerName;
						prefsChanged.push('idBarcodePrinter');
						break;
					case 'labelName':
						scopes.printer.idBarcodeLabelFormat = formx.labelName;
						prefsChanged.push('idBarcodeLabelFormat');
						break;
					case 'labeLaseLabel':
						scopes.printer.idLabeLaseTemplate = formx.labeLaseTemplate;
						prefsChanged.push('idLabeLaseTemplate');
						break;
					default:
				}
				break;
			case i18n.getI18NMessage('sts.txt.part.label.default'):
				switch (elName){
					case 'printerName':
						scopes.printer.rawMaterialPrinter = formx.printerName;
						prefsChanged.push('rawMaterialPrinter');
						break;
					case 'labelName':
						scopes.printer.rawMaterialLabelFormat = formx.labelName;
						prefsChanged.push('rawMaterialLabelFormat');
						break;
					case 'labeLaseLabel':
						scopes.printer.rawLabeLaseTemplate = formx.labeLaseTemplate;
						prefsChanged.push('rawLabeLaseTemplate');
					break;
					default:
				}
				break;
			case i18n.getI18NMessage('sts.txt.system.label.default'):
				switch (elName){
					case 'printerName':
						scopes.printer.defaultSysPrinter = formx.printerName;
						prefsChanged.push('defaultSysPrinter');
						break;
					case 'labelName':
						scopes.printer.defaultSysLabelFormat = formx.labelName;
						prefsChanged.push('defaultSysLabelFormat');
						break;
					case 'labeLaseLabel':
						scopes.printer.defaultLabeLaseTemplate = formx.labeLaseTemplate;
						prefsChanged.push('defaultLabeLaseTemplate');
					default:
				}
				break;
			default:
		}
		var el = event.getElementName();
		var dataProv = formx.elements[el].getDataProviderID();
		dataProv = dataProv.replace('scopes.printer.','');
		prefsChanged.push(dataProv);
	}
	return true
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
 * @properties={typeid:24,uuid:"1E07F83E-087A-41F7-AE39-EC0575C4C1D0"}
 */
function onDataChangePrinterRadios(oldValue, newValue, event) {
/**
 * i18n:sts.txt.id.label.default
i18n:sts.txt.part.label.default
i18n:sts.txt.system.label.default
 */
	var formx = forms[event.getFormName()];
	if (newValue == i18n.getI18NMessage('sts.txt.id.label.default')){
		formx.printerName = scopes.printer.idBarcodePrinter;
		formx.labelName = scopes.printer.idBarcodeLabelFormat;
		formx.labeLaseTemplate = scopes.printer.idLabeLaseTemplate;
	}
	if (newValue == i18n.getI18NMessage('sts.txt.part.label.default')){
		formx.printerName = scopes.printer.rawMaterialPrinter;
		formx.labelName = scopes.printer.rawMaterialLabelFormat;
		formx.labeLaseTemplate = scopes.printer.rawLabeLaseTemplate;
	}
	if (newValue == i18n.getI18NMessage('sts.txt.system.label.default')){
		formx.printerName = scopes.printer.defaultSysPrinter;
		formx.labelName = scopes.printer.defaultSysLabelFormat;
		formx.labeLaseTemplate = scopes.printer.defaultLabeLaseTemplate;
	}
	return true
}
/**
 * @properties={typeid:24,uuid:"AD8B81AF-EA13-4F69-BE11-08F3C1449AF0"}
 * @param {String} labelFldType
 */
function getBTFieldData(labelFldType){
	var barTenderSpecs = "\
		1 AREA Character 6 idfiles.if_id_area 10,\
		2 BATCH Character 3 idfiles.if_id_batch 15,\
		3 BCCUST Character 16 customers.barcode_customer_name 45,\
		4 BCFORM Character 10 jobs.barcode_format_customer_number 20,\
		5 BCINCLDPFX Character 15 customers.bc_include_prefix 15,\
		6 BCJOBSTART Character 35 customers.bc_job_start 35,\
		7 BCPREFIX Character 2 customers.bc_prefix 2,\
		8 BCTITLE Character 26 UNUSED 0 ,\
		9 BOLOUT Character 15 loads.ship_bol_out 15,\
		10 CARRNUM Character 10 loads.ship_carrier_number 15,\
		11 COMMENTS Character 50 loads.ship_load_comment 100,\
		12 COWCODE Character 10 piecemarks.pm_cost_of_work_code 10,\
		13 CTRLNUM Character 30 idfiles.if_control_number 30,\
		14 CUSCITY Character 25 customers.cust_customer_city 50,\
		15 CUSFAX Character 10 customer.job_customer_fax 25,\
		16 CUSFIRST Character 15 customer.job_customer_rep 25,\
		17 CUSLAST Character 15 customer.job_customer_rep 25,\
		18 CUSMIDDLE Character 15 customer.job_customer_rep 25,\
		19 CUSNAME Character 30 customers.job_customer_name 45,\
		20 CUSPHONE Character 10 customers.job_customer_phone 25,\
		21 CUSSTATE Character 2 customers.cust_customer_state 2,\
		22 CUSSTREET Character 30 customers.cust_addr_line1 100,\
		23 CUSTNUM Character 10 customers.job_customer_number 15,\
		24 CUSTPO Character 20 jobs.job_customer_po 30,\
		25 CUSTSO Character 10 idfiles.if_shop_order 20,\
		26 CUSZIP Character 9 customers.cust_zip_code 20,\
		27 DESCR1 Character 30 piecemarks.pm_material 40,\
		28 DESCR2 Character 30 piecemarks.pm_description 40,\
		29 EDITTIME Character 8 idfiles.if_edit_date DATETIME,\
		30 ENGXTIME Character 8 loads.ship_sent_engineer DATETIME,\
		31 FABINVOICE Character 10 loads.ship_fabricator_invoice 15,\
		32 FABSHOP Character 5 idfiles.pcmk_fab_shop 50,\
		33 FABXTIME Character 8 loads.ship_sent_fabricator DATETIME,\
		34 FIREXTIME Character 8 loads.ship_sent_fireproofer DATETIME,\
		35 GALVXTIME Character 8 loads.ship_sent_galvinizer DATETIME,\
		36 GRADE Character 10 piecemarks.pm_grade 20,\
		37 HEAT Character 15 heats.heat_number 40,\
		38 ID Character 10 id_serial_numbers.bc_id_serial_number 30,\
		39 IDFORMAT Character 9 jobs.job_label_format 50,\
		40 IDLOCATION Character 10 idfiles.if_id_location 15,\
		41 IDSTATUS Character 10 status_description.st_status_code 15,\
		42 INVOICE Character 10 loads.ship_load_invoice 15,\
		43 JOBCAREOF Character 28 jobs.job_care_of 50,\
		44 JOBID Character 10 jobs.job_number 20,\
		45 JOBLOCAT Character 28 jobs.job_location 50,\
		46 JOBNUM Character 10 jobs.job_number 20,\
		47 JOBSHIPTO Character 10 jobs.customer_number,\
		48 JOBSTRUCT Character 28 jobs.job_structure 50,\
		49 JOBTITLE Character 28 jobs.job_title 50,\
		50 JOIDFORMAT Character 9 UNUSED 0 ,\
		51 JOLINE1NUM Character 15 UNUSED 0 ,\
		52 JOLINE1STR Character 30 jobs.barcode_format_customer_name 45,\
		53 JOLINE2NUM Character 15 UNUSED 0 ,\
		54 JOLINE2STR Character 30 jobs.job_customer_name 45,\
		55 LINE0FLD Character 30 UNUSED 0 ,\
		56 LINE0PRMPT Character 9 UNUSED 0 ,\
		57 LINE1NUM Character 15 UNUSED 0 ,\
		58 LINE1STR Character 26 UNUSED 0 ,\
		59 LINE2NUM Character 15 UNUSED 0 ,\
		60 LINE2STR Character 26 UNUSED 0 ,\
		61 LINE3FLD Character 30 UNUSED 0 ,\
		62 LINE3PRMPT Character 9 UNUSED 0 ,\
		63 LINE4FLD Character 30 UNUSED 0 ,\
		64 LINE4PRMPT Character 9 UNUSED 0 ,\
		65 LINE5FLD Character 30 UNUSED 0 ,\
		66 LINE5PRMPT Character 9 UNUSED 0 ,\
		67 LINE6FLD Character 30 UNUSED 0 ,\
		68 LINE6PRMPT Character 9 UNUSED 0 ,\
		69 LINE7FLD Character 30 UNUSED 0 ,\
		70 LINE7PRMPT Character 9 UNUSED 0 ,\
		71 LINE8FLD Readable 30 piecemark.pm_item_length_in,\
		72 LINE8PRMPT Character 9 UNUSED 0 ,\
		73 LINE9FLD Character 30 UNUSED 0 ,\
		74 LINE9PRMPT Character 9 UNUSED 0 ,\
		75 LINEAFLD Character 30 UNUSED 0 ,\
		76 LINEAPRMPT Character 9 UNUSED 0 ,\
		77 LINEBFLD Character 30 UNUSED 0 ,\
		78 LINEBPRMPT Character 9 UNUSED 0 ,\
		79 LOADNUM Character 10 loads.ship_load_number 20,\
		80 LODCAREOF Character 28 loads.ship_load_care_of 30,\
		81 LODPO Character 20 loads.ship_load_po 20,\
		82 LODRELEASE Character 20 loads.ship_load_release 20,\
		83 LODSHIPTO Character 10 loads.ship_customer_number 15,\
		84 LOT Character 11 lots.lt_lot_number 15,\
		85 MRR Character 10 idfiles.if_mrr 15,\
		86 ORIGEMPL Character 5 emp.job_original_employee 15,\
		87 OTHRXTIME Character 8 UNUSED 0 ,\
		88 PANTXTIME Character 8 UNUSED 0 ,\
		89 PCCOLOR Character 10 idfiles.if_piece_color 20,\
		90 PCCOWCODE Character 10 piecemarks.pm_cost_of_work_code 10,\
		91 PCMARK Character 30 piecemarks.pm_piecemark 40,\
		92 PCRELEASE Character 3 idfiles.if_piece_release 10,\
		93 PCUOM Character 4 piecemarks.pm_piecemark_unit_of_measure 10,\
		94 PORELEASE Character 20 jobs.job_po_release 25,\
		95 PRODTYPE Character 3 piecemarks.pm_product_type 10,\
		96 PROJYEAR Numeric 4 jobs.job_project_year 4,\
		97 RAWMATLID Character 10 idfiles.if_raw_material_id 40,\
		98 RECACTION Character 1 UNUSED 0 ,\
		99 RECVLOAD Character 10 loadsrcv.recv_load_number 20,\
		100 RECVTIME Character 8 loadsrcv.recv_load_date DATETIME,\
		101 REMAILTIME Character 8 UNUSED 0 ,\
		102 REVLEVEL Character 6 idfiles.if_revision_level 10,\
		103 ROUTECODE Character 10 piecemarks.rt_route_code 15,\
		104 SEMAILTIME Character 8 UNUSED 0 ,\
		105 SEQNUM Character 20 sequences2.sq_sequence_number 30,\
		106 SHEETNUM Character 8 sheets.sh_sheet_number 20,\
		107 SHIPLOAD Character 10 loads.ship_load_date DATETIME,\
		108 SHIPTAG Character 16 piecemarks.pm_ship_tag 20,\
		109 SHIPTIME Character 8 loads.ship_load_time DATETIME,\
		110 SITEXTIME Character 8 UNUSED 0 ,\
		111 TRAILINFO Character 20 loads.ship_load_trailer_info 20,\
		112 EDITDATE Date 8 idfiles.if_edit_date DATETIME,\
		113 ENGXDATE Date 8 UNUSED 0 ,\
		114 FABXDATE Date 8 UNUSED 0 ,\
		115 FIREXDATE Date 8 UNUSED 0 ,\
		116 GALVXDATE Date 8 UNUSED 0 ,\
		117 IDCREATED Date 8 id_serial_number.bc_create_date DATETIME,\
		118 OTHRXDATE Date 8 UNUSED 0 ,\
		119 PANTXDATE Date 8 UNUSED 0 ,\
		120 RECVDATE Date 8 loads.recv_load_date DATETIME,\
		121 REMAILDATE Date 8 UNUSED 0 ,\
		122 REQDSHIP Date 8 idfiles.if_required_ship_date DATETIME,\
		123 SCHDSHIP Date 8 idfiles.if_scheduled_ship_date DATETIME,\
		124 SEMAILDATE Date 8 UNUSED 0 ,\
		125 SHIPDATE Date 8 loads.lds2_ship_date DATETIME,\
		126 SITEXDATE Date 8 UNUSED 0 ,\
		127 DELETEID Logical 1 idfiles.if_deleted_date DATETIME,\
		128 LOGICFLAG Logical 1 idfiles.if_logic_flag 1,\
		129 LPRINT Logical 1 id_serial_number.bc_printed 1,\
		130 LSOTOLOAD Logical 1 customers.job_so_to_load 1,\
		131 METRICJOB Logical 1 jobs.job_metric_job 1,\
		132 BCJBSTRT Numeric 1 customers.barcode_job_start 1,\
		133 BCJOBLGTH Numeric 1 customers.barcode_job_length 1,\
		134 BCPFXLGTH Numeric 1 customers.barcode_fixed_length 1,\
		135 COSTEA Numeric 11.4 piecemarks.pm_cost_each 11.4,\
		136 COWQTY Numeric 10.3 piecemarks.pm_cost_of_work_quantity 10.3,\
		137 FIREPFCF Numeric 9.2 piecemarks.pm_fireproof_cubic_feet 9.2,\
		138 INCREMNT Numeric 3 UNUSED 0 ,\
		139 ITEMWT Numeric 10.3 piecemarks.pm_item_weight_lbs 10.3,\
		140 ITEMWTKG Numeric 10.3 piecemarks.pm_item_weight 10.3,\
		141 JOBWT Numeric 11 jobs.job_weight 11,\
		142 LABELBC Numeric 5 UNUSED 0 ,\
		143 LABELQTY Numeric 5 UNUSED 0 ,\
		144 LGTNUM Numeric 11.4 piecemarks.pm_item_length_in 11.4,\
		145 ORIGQTY Numeric 5 idfiles.if_summed_quantity 5,\
		146 PCUOMDOLL Numeric 11.4 piecemarks.pm_piecemark_uom_dollars 11.4,\
		147 QTY2PRINT Numeric 5 UNUSED 0 ,\
		148 RECVQTY Numeric 5 idfiles.if_receive_quantity 5,\
		149 RECVWT Numeric 10 loads.recv_load_receiving_wt 10,\
		150 SEQQTY Numeric 5 sequences2.sq_sequence_quantity 5,\
		151 SHIPQTY Numeric 5 idfiles.if_shipped_quantity 5,\
		152 SHIPWT Numeric 10 loads.ship_load_shipped_weight 10,\
		153 TOTALWT Numeric 10 loads.ship_load_total_weight 10,\
		154 WIDNUM Numeric 10.4 piecemarks.pm_item_width 10.4,\
		155 RTBW Character 6 sheets.sh_rtbw 6,\
		156 RTSW Character 6 sheets.sh_rtsw 6,\
		157 RTBRANCH Character 6 sheets.sh_rtbranch 6,\
		158 PTFILLET Character 6 sheets.sh_ptfillet 6,\
		159 PTBRANCH Character 6 sheets.sh_rtbranch 6,\
		160 MTFILLET Character 6 sheets.sh_mtfillet 6,\
		161 MTBRANCH Character 6 sheets.sh_mtbranch 6,\
		162 LINESPEC Character 10 sheets.sh_line_spec 10,\
		163 PREHEAT Character 15 sheets.sh_preheat 15,\
		164 SHOPHYDRO Character 6 sheets.sh_shop_hydro 6,\
		165 FLDHYDRO Character 6 sheets.sh_field_hydro 6,\
		166 PMI Character 6 sheets.sh_pmi 6,\
		167 PWHT Character 6 sheets.sh_pwht 6,\
		168 DRAWNBY Character 5 sheets.sh_drawn_by 5,\
		169 CHECKBY Character 5 sheets.sh_checked_by 5,\
		170 PAINTSYS Character 25 sheets.sh_paint_system 25,\
		171 BHN Character 6 sheets.sh_bhn 6,\
		172 BHNMAX Character 6 sheets.sh_bhn_maximum 6,\
		173 LINENBR Character 30 sheets.sh_line_number 30,\
		174 REFDWG Character 30 sheets.sh_reference_drawing 30,\
		175 SKETCH Character 10 sheets.sh_sketch 10,\
		176 PHASE Character 10 idfiles.if_piece_phase 15,\
		177 BOMCOMMENT Character 50 sheet_bom.bom_comment 100,\
		178 SHEETPO Character 20 sheets.sh_sheet_po 20,\
		179 PRIORDATE Date 8 sheets.sh_prior_date DATETIME,\
		180 MINORID Character 10 id_serial_numbers.bc_id_serial_number 10,\
		181 MINORQTY Numeric 5 barcodes.id_on_barcode 5,\
		182 BOMPARTNUM Character 30 sheet_bom.bom_part_number 40,\
		183 BOMHEAT Character 15 sheet_bom.bom_heat 36,\
		184 BOMGUID Character 40 sheet_bom.bom_guid1 40,\
		185 BOMGRADE Character 10 sheet_bom.bom_grade 20,\
		186 BOMSEQNUM Character 20 sheet_bom.bom_sequence_num 25,\
		187 BOMITEMNUM Character 6 sheet_bom.bom_item_number 10,\
		188 BOMREMARKS Character 20 sheet_bom.bom_remarks 30,\
		189 PARENTPCMK Character 30 piecemarks.pm_parent_piecemark 40,\
		190 BOMQTY Numeric 5 sheet_bom.bom_item_quantity 5,\
		191 BOMLGTNUM Numeric 11.4 sheet_bom.bom_item_length 11.4,\
		192 BOMWIDNUM Numeric 10.4 sheet_bom.bom_item_width 10.4,\
		193 BOMITEMWT Numeric 10.3 sheet_bom.bom_item_weight 10.3,\
		194 ERECTDWG Character 15 idfiles.if_erection_drawing 20,\
		195 BUNDLEID Character 10 idfiles.if_bundle_bc 30,\
		196 FINISH Character 10 piecemarks.pm_finish 30,\
		197 DETAILMIN Numeric 10.4 piecemarks.pm_saw_minutes 10.4,\
		198 FABMIN Numeric 10.4 piecemarks.pm_fabrication_minutes 10.4,\
		199 HANDLMIN Numeric 10.4 piecemarks.pm_handling_minutes 10.4,\
		200 PAINTMIN Numeric 10.4 piecemarks.pm_paint_minutes 10.4,\
		201 SAWMIN Numeric 10.4 piecemarks.pm_saw_minutes 10.4,\
		202 WELDMIN Numeric 10.4 piecemarks.pm_weld_minutes 10.4,\
		203 RULECODE Character 20 piecemarks.pm_rule_code 20,\
		204 FT_PKGNO Integer 4 idfiles.if_ft_pkgno 4,\
		205 PCPHASE Character 10 idfiles.if_piece_phase 15,\
		206 PARENTCOPY Numeric 4 UNUSED 0 ,\
		207 PARENTID Character 10 piecemarks.bc_parent_id_serial 30,\
		208 CAMBER Numeric 7.4 piecemarks.pm_camber 7.4,\
		209 BOMMATL Character 100 sheet_bom.bom_material 110,\
		210 BOMSIZE Character 13 sheet_bom.bom_item_size 15,\
		211 BOMRATING Character 15 sheet_bom.bom_rating 15,\
		212 MATLCLASS Character 10 piecemarks.pm_material_class 10,\
		213 BOMENDPREP Character 6 sheet_bom.bom_end_condition 15,\
		214 GUID Character 40 idfiles.if_id_guid 40,\
		215 BOMFINISH Character 30 sheet_bom.bom_finish 30,\
		216 PRIORITY Character 10 sheets.sh_priority 10,\
		217 BOMLGTCHAR Character 15 sheet_bom.bom_item_length.CALC 15,\
		218 IDFINISH Character 30 idfiles.if_id_finish 30,\
		219 IDBATCH Character 15 idfiles.if_id_batch 15,\
		220 SUBCATG Character 10 piecemark.pm_subcategory 30,\
		221 LABELFMT Character 60 view.btw_file_path 60,\
		222 LBLPRNTNAM Character 45 view.barcode_printer_name 55,\
		223 RTOLET Character 6 sheets.sh_rtolet 6,\
		224 RTTS Character 6 sheets.sh_rtts 6,\
		255 RTN90 Character 6 sheets.sh_rtn90 6,\
		226 RTN45 Character 6 sheets.sh_rtn45 6,\
		227 MTSW Character 6 sheets.sh_mtsw 6,\
		228 MTNFILLET Character 6 sheets.sh_mtnfillet 6,\
		229 MTBW Character 6 sheets.sh_mtbw 6,\
		230 FABCODE Character 15 sheets.sh_fabcode 25,\
		231 TOPCOAT Character 20 sheets.sh_topcoat 40,\
		232 FERRITE Character 6 sheets.sh_ferrite 6,\
		233 UT Character 6 sheets.sh_ut 6,\
		234 TRANSMITAL Character 10 sheets.sh_transmittal 20,\
		235 CLIENTDWG Character 8 sheets.sh_client_drawing 16,\
		236 CLIENTREV Character 6 sheets.sh_client_rev 10,\
		237 TAGPCMARK Character 30 sheets.sh_tag_pcmk 40,\
		238 DATEISSD Date 8 sheets.sh_date_issued DATETIME,\
		239 VTPERCENT Character 10 sheets.sh_vtpercent 10,\
		240 SERVTYPE Character 25 sheets.sh_servtype 35,\
		241 ASMECODE Character 10 sheets.sh_asmecode 15,\
		242 OPERATEMP Character 10 sheets.sh_operatemp 10,\
		243 OPERAPRES Character 10 sheets.sh_operapres 10,\
		244 CUTLISTBC Character 20 idfiles.if_cut_list_bc 20,\
		245 PCMKCOUNT Character 10 piecemarks.pm_pcmk_qty 10,\
		246 LGTNUMMM Numeric 11.4 piecemarks.pm_item_length 11.4";
	
	// check missing bt label print columns, check PDF for column, check this table column index and column name, then go to jobs.query_assembly_raw to set column name and data source
	var barTenderRawSpecs = '\
		1 LABELQTY Numeric 4 view.label_count 4 inventory.quantity 4 how many to print being driven by scanners,\
		2 QTY Numeric 14.4 inventory.quantity 4 quantity of inventory item see 1,\
		3 CUSTNUM Character 10 customers.customer_number 14,\
		4 CONTROL Character 15 inventory.control 20,\
		5 MODELPART Character 30 inventory.model_part 40,\
		6 SERIAL Character 40 inventory.serial_number 40,\
		7 IDFLINE2 Character 23 UNUSED 0  - label line 1 and line 2 unused,\
		8 IDSLINE2 Character 23 UNUSED 0  ,\
		9 LOCATION Character 10 inventory.location 15,\
		10 WTUOM Character 5 UNUSED 0  - comes from M or I part master table from warehouse package,\
		11 PARTWT Numeric 9.2 inventory.item_weight_lbs 9.2 part master table 10 x 40 comes from part master table,\
		12 PARTDESCR Character 60 UNUSED 0  part master table,\
		13 LABELSTYL Character 20 UNUSED 0  ,\
		14 LABELFMT Character 60 view.btw_file_path 60 just file name 60,\
		15 HEAT Character 15 inventory.heat 40,\
		16 LGTNUM Numeric 14.4 inventory.item_length_in 14.4,\
		17 CHARLGTH Character 15 inventory.item_length_char 20,\
		18 LBLCONTROL Character 20 UNUSED 0  ,\
		19 LBLMODEL Character 20 UNUSED 0  ,\
		20 LBLSERIAL Character 20 UNUSED 0  ,\
		21 PONUM Character 20 inventory.po_number 30,\
		22 POLINE Numeric 6.2 inventory.po_line_number 6.2,\
		23 LOGICFLAG Logical 1 inventory.logic_flag 1 - T/F,\
		24 POJOBNUM Character 25 jobs.job_number 20,\
		25 LABELNAME Character 20 UNUSED 0  ,\
		26 BILLIN Character 10 inventory.bill_of_lading_in 15,\
		27 BILLOUT Character 10 inventory.bill_of_lading_out 15,\
		28 CERTDATE Date 8 inventory.cert_date DATETIME - propane bottles,\
		29 DUEBACK Date 8 inventory.due_back_date DATETIME - blank,\
		30 FILLDATE Date 8 inventory.fill_date DATETIME -blank,\
		31 INVREFER Character 15 inventory.inventory_ref_number 20 - catchall field,\
		32 PLANT Character 6 association.association_name 50,\
		33 PROCESS Character 5 UNUSED 0  - blank -usally stock/receiv/ship/pick/pickstage,\
		34 RECVDATE Date 8 inventory.receive_date DATETIME,\
		35 RECVTIME Date 8 inventory.receive_date DATETIME hh:mm:ss,\
		36 REMARKS Character 32 inventory.remarks 30,\
		37 SHIPDATE Date 8 inventory.ship_date DATETIME,\
		38 SHIPTIME Date 8 inventory.ship_date DATETIME,\
		39 SQFT Numeric 6.2 inventory.item_square_feet 6.2,\
		40 WT Numeric 9.2 inventory.item_weight_lbs 9.2,\
		41 SERLPRNTD Logical 1 inventory.lprint 1,\
		42 CUSNAME Character 40 customers.job_customer_name 45,\
		43 RUNDATE Date 8 UNUSED 0  ,\
		44 RUNSHIFT Character 2 UNUSED 0 ,\
		45 RUNLINENBR Numeric 3 UNUSED 0 ,\
		46 RUNCAR Numeric 3 UNUSED 0 ,\
		47 RUNFORMNBR Numeric 3 UNUSED 0 ,\
		48 CUSOTHER1 Character 25 UNUSED 0 ,\
		49 CUSOTHER2 Character 25 UNUSED 0 ,\
		50 CUSOTHER3 Character 25 UNUSED 0 ,\
		51 POUOM Character 5 UNUSED 0  - how do i order it,\
		52 INVOICEUOM Character 5 UNUSED 0  - how do i invoice it,\
		53 STOCKUOM Character 5 UNUSED 0  - how do i stock it,\
		54 INVPRNTUOM Character 5 UNUSED 0  - which uom to print,\
		55 OEQTY Numeric 8 UNUSED 0  - blank,\
		56 SILO Numeric 6 UNUSED 0  - blank,\
		57 BOXNUM Numeric 6 UNUSED 0  ,\
		58 SLDPARTNUM Character 25 UNUSED 0 ,\
		59 LBLPRNTNAM Character 45 view.barcode_printer_name 55,\
		60 LABELDESCR Character 35 UNUSED 0 ,\
		61 PARTGRP Character 20 UNUSED 0  ,\
		62 OEJOBNUM Character 10 UNUSED 0  - order entry qty,\
		63 JOBNUM Character 10 jobs.job_number 20,\
		64 GRADE Character 10 inventory.grade 20,\
		65 EMPLNUM Character 5 employees.employee_number 15,\
		66 FABSHOP Character 5 associations.association_name 50,\
		67 WIDNUM Numeric 10.4 inventory.item_width 10.4,\
		68 QCAPPVD Logical 1 inventory.qc_approved_flag 1,\
		69 WTKG Numeric 9.2 inventory.item_weight 9.2,\
		70 LGTNUMMM Numeric 14.4 inventory.item_length 14.4,\
	';
	
	//if (btType == 'P'){
	//var labelFldType = 'P';//Piecemark or Raw
	var pcmkType = [labelFldType,null];
	if (labelFldType == 'R'){
		pcmkType = [labelFldType];
	}
	/** @type {QBSelect<db:/stsservoy/label_fields>} */
	var q = databaseManager.createSelect('db:/stsservoy/label_fields');
	q.where.add(q.columns.label_field_type.isin(pcmkType));
	q.result.add(q.columns.label_field_id);
	q.sort.add(q.columns.field_order);
	var Q = databaseManager.getFoundSet(q);//TODO change this to get data
	var existingFields = [];
	/** @type {JSRecord<db:/stsservoy/label_fields>} */
	var rec = null; var idx = 1;
	while (rec = Q.getRecord(idx++)){
		existingFields.push(rec.field_order);
	}
	var tableColumns = [];
	var tables = databaseManager.getTableNames('stsservoy');
	for (idx = 0;idx < tables.length;idx++){
		var table = databaseManager.getTable('stsservoy',tables[idx]);
		var columns = table.getColumnNames();
		for (var idx1 = 0;idx1 < columns.length;idx1++){
			/** @type {JSColumn} */
			var colInfo = table.getColumn(columns[idx1]);
			tableColumns[tables[idx]+'.'+columns[idx1]] = colInfo.getLength();
		}
	}
	var btSpecs = [];
	var saveRecs = false;
	/** @type{Array} */
	var specs = [];
	if (labelFldType == 'P'){//(P)iecemark
		specs = barTenderSpecs.split(',');
	} else {//(R)aw Material
		specs = barTenderRawSpecs.split(',');
	}
		
	for (idx = 0;idx < specs.length;idx++){
		//var btSpec = {field_order: 0, name:'',dbtype:'', size: 0,dbcol:'',dbsize:0,fldtype:labelFldType}
		var fields = specs[idx].trim().split(/ +/);
		if (fields.length < 5){continue}
		//var btSpec1 = btSpec;
		var btSpec = {
			field_order : fields[0].trim()*1,
			field_name : fields[1],
			field_type : fields[2],
			size : fields[3],
			db_field : fields[4],
			dbsize : fields[5],
			label_field_type : labelFldType
		}
		btSpecs.push(btSpec);
		//if (application.isInDeveloper()){application.output('btspec '+btSpec)}
		if (existingFields.indexOf(btSpec.field_order) == -1){
			saveRecs = true;
			var i2 = Q.newRecord(false);
			rec = Q.getRecord(i2);
			databaseManager.copyMatchingFields(btSpec,rec);
			rec.edit_date = new Date();
			//rec.field_order = btSpec1.num;
			//rec.field_name = btSpec1.name;
			//rec.field_type = btSpec1.dbtype;
			var widthSpec = btSpec.size.split('.');
			rec.field_width = widthSpec[0];
			rec.field_decimal = (widthSpec[1]) ? widthSpec[1] : 0;
			//rec.db_field = btSpec1.dbcol;
			//rec.label_field_type = btSpec1.fldtype;
			if (btSpec.dbsize == 'DATETIME'){
				rec.db_width = 8;
			} else {
				if (application.isInDeveloper()){application.output('dbsize '+btSpec.dbsize);}
				rec.db_width = btSpec.dbsize;				
			}
		}
	}
	if (saveRecs){databaseManager.saveData(Q)}
	return btSpecs;
}
/**
 * @properties={typeid:24,uuid:"02B7EC78-1FA3-4727-9975-06797AA5557A"}
 */
function getBTFieldTabs(){
	var btTabs =  ['AREA','BATCH','BCCUST','BCFORM','BCINCLDPFX','BCJOBSTART','BCPREFIX','BCTITLE','BOLOUT','CARRNUM','COMMENTS','COWCODE','CTRLNUM',
	 'CUSCITY','CUSFAX','CUSFIRST','CUSLAST','CUSMIDDLE','CUSNAME','CUSPHONE','CUSSTATE','CUSSTREET','CUSTNUM','CUSTPO','CUSTSO',
	 'CUSZIP','DESCR1','DESCR2','EDITTIME','ENGXTIME','FABINVOICE','FABSHOP','FABXTIME','FIREXTIME','GALVXTIME','GRADE','HEAT','ID',
	 'IDFORMAT','IDLOCATION','IDSTATUS','INVOICE','JOBCAREOF','JOBID','JOBLOCAT','JOBNUM','JOBSHIPTO','JOBSTRUCT','JOBTITLE','JOIDFORMAT',
	 'JOLINE1NUM','JOLINE1STR','JOLINE2NUM','JOLINE2STR','LINE0FLD','LINE0PRMPT','LINE1NUM','LINE1STR','LINE2NUM','LINE2STR','LINE3FLD',
	 'LINE3PRMPT','LINE4FLD','LINE4PRMPT','LINE5FLD','LINE5PRMPT','LINE6FLD','LINE6PRMPT','LINE7FLD','LINE7PRMPT','LINE8FLD','LINE8PRMPT',
	 'LINE9FLD','LINE9PRMPT','LINEAFLD','LINEAPRMPT','LINEBFLD','LINEBPRMPT','LOADNUM','LODCAREOF','LODPO','LODRELEASE','LODSHIPTO','LOT',
	 'MRR','ORIGEMPL','OTHRXTIME','PANTXTIME','PCCOLOR','PCCOWCODE','PCMARK','PCRELEASE','PCUOM','PORELEASE','PRODTYPE','PROJYEAR',
	 'RAWMATLID','RECACTION','RECVLOAD','RECVTIME','REMAILTIME','REVLEVEL','ROUTECODE','SEMAILTIME','SEQNUM','SHEETNUM','SHIPLOAD',
	 'SHIPTAG','SHIPTIME','SITEXTIME','TRAILINFO','EDITDATE','ENGXDATE','FABXDATE','FIREXDATE','GALVXDATE','IDCREATED','OTHRXDATE',
	 'PANTXDATE','RECVDATE','REMAILDATE','REQDSHIP','SCHDSHIP','SEMAILDATE','SHIPDATE','SITEXDATE','DELETEID','LOGICFLAG','LPRINT',
	 'LSOTOLOAD','METRICJOB','BCJBSTRT','BCJOBLGTH','BCPFXLGTH','COSTEA','COWQTY','FIREPFCF','INCREMNT','ITEMWT','ITEMWTKG','JOBWT',
	 'LABELBC','LABELQTY','LGTNUM','ORIGQTY','PCUOMDOLL','QTY2PRINT','RECVQTY','RECVWT','SEQQTY','SHIPQTY','SHIPWT','TOTALWT','WIDNUM',
	 'RTBW','RTSW','RTBRANCH','PTFILLET','PTBRANCH','MTFILLET','MTBRANCH','LINESPEC','PREHEAT','SHOPHYDRO','FLDHYDRO','PMI','PWHT',
	 'DRAWNBY','CHECKBY','PAINTSYS','BHN','BHNMAX','LINENBR','REFDWG','SKETCH','PHASE','BOMCOMMENT','SHEETPO','PRIORDATE','MINORID',
	 'MINORQTY','BOMPARTNUM','BOMHEAT','BOMGUID','BOMGRADE','BOMSEQNUM','BOMITEMNUM','BOMREMARKS','PARENTPCMK','BOMQTY','BOMLGTNUM',
	 'BOMWIDNUM','BOMITEMWT','ERECTDWG','BUNDLEID','FINISH','DETAILMIN','FABMIN','HANDLMIN','PAINTMIN','SAWMIN','WELDMIN','RULECODE',
	 'FT_PKGNO','PCPHASE','PARENTCOPY','PARENTID','CAMBER','BOMMATL','BOMSIZE','BOMRATING','MATLCLASS','BOMENDPREP','GUID','BOMFINISH'
	 ,'PRIORITY','BOMLGTCHAR'];
	return btTabs;
}

/**
 * @param {JSEvent} event
 * @param {Array} invUUIDs
 *
 * @properties={typeid:24,uuid:"2507CDA0-3384-4315-916A-877E6D3F1AA3"}
 * @AllowToRunInFind
 */
function onActionPrintRMLabels(event,invUUIDs) {
	
	for (var idx = 0;idx < invUUIDs.length;idx++){invUUIDs[idx] = invUUIDs[idx].toString()}
	//determine is this metric or imperial labeling?  
	var form = forms[event.getFormName()];
	if (form.printEnabled == i18n.getI18NMessage('sts.txt.off')){application.output('no printing');return}
	var labelQtyRequested = (form.bundled && form.bundled.match(/^Y/)) ? 1 : form.quantity;
	//start show printing warning
	//var countStr = labelQtyRequested;
	//scopes.globals.errorDialogMobile(event,1220,'sts.txt.printing.inventory.number',countStr);
	var defaultPrinter = rawMaterialPrinter;
	//var employeeNumber = globals.session.employeeNum;
	/** @type {QBSelect<db:/stsservoy/inventory>} */
	var q = databaseManager.createSelect('db:/stsservoy/inventory');
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	q.where.add(q.columns.inventory_uuid.isin(invUUIDs));//verified with sql server
	//q.result.add(q.columns.serial_number)
	//q.result.add(q.columns.inventory_uuid);
	/** @type {QBJoin<db:/stsservoy/jobs>} */
	var r = q.joins.add('db:/stsservoy/jobs');
	r.on.add(q.columns.job_uuid.eq(r.columns.job_id));
	//q.result.add(r.columns.job_number_group)
	/** @type {QBJoin<db:/stsservoy/customers>} */
	var s = r.joins.add('db:/stsservoy/customers');
	s.on.add(r.columns.customer_id.eq(s.columns.customer_id));
	//q.result.add(s.columns.customer_number)
	/** @type {QBJoin<db:/stsservoy/associations>} */
	var t = r.joins.add('db:/stsservoy/associations');
	t.on.add(t.columns.association_uuid.eq(q.columns.association_uuid));
	//q.result.add(t.columns.association_name);
	
	var table = databaseManager.getTable('db:/stsservoy/inventory');
	var invCols = table.getColumnNames();
	for (var i = 0;i < invCols.length;i++){
		q.result.add(q.columns[invCols[i]]);
	}

	var bundled = (form.bundled && form.bundled.match(/^Y/)) ? true : false;
	var labelQuantity = (bundled) ? form.quantity : 1;
	q.result.addValue(1,'labelqty');
	q.result.add(s.columns.customer_number,'CUSTNUM');
	q.result.addValue(rawMaterialLabelFormat,'LABELFMT');
	q.result.add(r.columns.job_number,'POJOBNUM');
	q.result.add(t.columns.association_name,'PLANT');
	q.result.add(s.columns.name,'CUSNAME');
	q.result.addValue(defaultPrinter,'LBLPRNTNAM');
	q.result.add(r.columns.job_number,'JOBNUM');
	q.result.addValue(globals.session.employeeNum,'EMPLNUM');
	q.result.add(t.columns.association_name,'FABSHOP');
	
	q.result.add(q.columns.quantity,'qty');
	q.result.add(q.columns.control,'CONTROL');
	q.result.add(q.columns.model_part,'MODELPART');
	q.result.add(q.columns.serial_number,'SERIAL');
	q.result.add(q.columns.location,'LOCATION');
	q.result.add(q.columns.heat,'HEAT');
	q.result.add(q.columns.item_length_char,'CHARLGTH');
	q.result.add(q.columns.po_number,'PONUM');
	q.result.add(q.columns.po_line_number,'POLINE');
	q.result.add(q.columns.logic_flag,'LOGICFLAG');
	q.result.add(q.columns.bill_of_lading_in,'BILLIN');
	q.result.add(q.columns.bill_of_lading_out,'BILLOUT');
	q.result.add(q.columns.cert_date,'CERTDATE');
	q.result.add(q.columns.due_back_date,'DUEBACK');
	q.result.add(q.columns.fill_date,'FILLDATE');
	q.result.add(q.columns.inventory_ref_number,'INVREFER');
	q.result.add(q.columns.receive_date,'RECVDATE');
	q.result.add(q.columns.receive_date,'RECVTIME');
	q.result.add(q.columns.remarks,'REMARKS');
	q.result.add(q.columns.ship_date,'SHIPDATE');
	q.result.add(q.columns.ship_date,'SHIPTIME');
	q.result.add(q.columns.item_square_feet,'SQFT');
	q.result.add(q.columns.lprint,'SERLPRNTD');
	q.result.add(q.columns.grade,'GRADE');
	q.result.add(q.columns.qc_approved_flag,'QCAPPVD'); 
	q.result.add(q.columns.item_weight_lbs,'PARTWT');
	q.result.add(q.columns.item_length,'LGTNUMMM');
	q.result.add(q.columns.item_length_in,'LGTNUM');
	q.result.add(q.columns.item_weight,'WTKG');
	q.result.add(q.columns.item_weight_lbs,'WT');
	q.result.add(q.columns.item_width_in,'WIDNUM');
	q.result.addValue('X-UNUSED','IDFLINE2');
	q.result.addValue('X-UNUSED','IDSLINE2');
	q.result.addValue('X-UNUSED','WTUOM');
	q.result.addValue('X-UNUSED','PARTDESCR');
	q.result.addValue('X-UNUSED','LABELSTYL');
	q.result.addValue('X-UNUSED','LBLCONTROL');
	q.result.addValue('X-UNUSED','LBLMODEL');
	q.result.addValue('X-UNUSED','LBLSERIAL');
	q.result.addValue('X-UNUSED','LABELNAME');
	q.result.addValue('X-UNUSED','PROCESS');
	q.result.addValue('X-UNUSED','RUNDATE');
	q.result.addValue('X-UNUSED','RUNSHIFT');
	q.result.addValue('X-UNUSED','RUNLINENBR');
	q.result.addValue('X-UNUSED','RUNCAR');
	q.result.addValue('X-UNUSED','RUNFORMNBR');
	q.result.addValue('X-UNUSED','CUSOTHER1');
	q.result.addValue('X-UNUSED','CUSOTHER2');
	q.result.addValue('X-UNUSED','CUSOTHER3');
	q.result.addValue('X-UNUSED','POUOM');
	q.result.addValue('X-UNUSED','INVOICEUOM');
	q.result.addValue('X-UNUSED','STOCKUOM');
	q.result.addValue('X-UNUSED','INVPRNTUOM');
	q.result.addValue('X-UNUSED','OEQTY');
	q.result.addValue('X-UNUSED','SILO');
	q.result.addValue('X-UNUSED','BOXNUM');
	q.result.addValue('X-UNUSED','SLDPARTNUM');
	q.result.addValue('X-UNUSED','LABELDESCR');
	q.result.addValue('X-UNUSED','PARTGRP');
	q.result.addValue('X-UNUSED','OEJOBNUM');
	var Q = databaseManager.getDataSetByQuery(q,-1);
	if (Q.getMaxRowIndex() == 0){return}
	null;
	//scopes.prefs.onActionPrintLabels(event);
	var specs = getBTFieldData('R');
	//var tabCount = specs.length;
	var useServer = false;
	var formName = event.getFormName();
	var versionForm = globals.getInstanceForm(event);
	if (formName.search('barcode_idlabel'+versionForm) == 0) {useServer = (forms['barcode_idlabel'+versionForm].useServerPrinters == 1)}
	if (formName.search('rf_mobile_view') == 0){useServer = true}

	var barcodePrintedArray = [];
	// ** @type {num:Number,name:String,dbtype:String,size:Number,dbcol:String,dbsize:Number} */
	var specObj = {num:0,name:'',dbtype:'',size:0,dbcol:'',dbsize:0};
	var tabContents = '';var fileLine = '';var qIndex = 1;
	if (application.isInDeveloper()){application.output('There are '+Q.getMaxRowIndex()+' labels to print. Labels Requested On form:'+labelQtyRequested)}
	var numberToPrinter = (bundled || globals.session.program == i18n.getI18NMessage('sts.mobile.inventory.audit')) ? 1: labelQtyRequested;//(labelQtyRequested*1 == Q.getMaxRowIndex()) ? 1 : labelQtyRequested*1;
	//var numberToPrinter = bundleCount;//(forms[formName].bundled.matchbundleCount;
	var bundleCount = 1;//(bundled) ? 1: labelQtyRequested;
	for (qIndex = 1;qIndex <= Q.getMaxRowIndex();qIndex++){
		Q.rowIndex = qIndex;
		var rec = Q;
		if (rec.inventory_uuid){barcodePrintedArray.push(rec.inventory_uuid)}
		for (var index = 0;index < specs.length;index++){
			specObj = specs[index];
			/** @type {Array} */
			//var dbCol = specObj.dbcol.split('.');
			//var dbField = dbCol[dbCol.length-1];//get unique record field
			tabContents = rec[specObj.field_name.toLowerCase()];
			if (typeof tabContents === 'undefined'){
				if (application.isInDeveloper()){application.output('undefined or unknown - '+specObj.field_name+' '+scopes.printer.barTenderFields[index]);}
				var fieldTagName = specObj.name;
				tabContents = scopes.prefs.getNonRecordValues(rec,fieldTagName);
			}
			if (!tabContents){tabContents = ''}
			
			tabContents = scopes.prefs.tabContentFormat(tabContents,specObj);
			if (application.isInDeveloper()){application.output('contents '+tabContents);}
			if (tabContents == ''){
				fileLine += '\t';
			} else {
				fileLine += tabContents+"\t";
			}
		}
		if (!useServer){//use multipleLines
			fileLine += "\n";
		} else {
			scopes.prefs.bartenderPrint(event,fileLine,bundleCount); //BARTENDER
			fileLine = '';
		}
	}
	if (!useServer){
		scopes.prefs.bartenderPrint(event,fileLine); //BARTENDER		
	}
	updateInventoryPrinted(event,barcodePrintedArray);
	//close show printing warning
	//scopes.globals.rfErrorHide(event);
	
	//get selected items
	//collect each item's attributes from inventory
	//set tabbed file format for raw material 
	//set all as printed in inventory table
}
/**
 * @properties={typeid:24,uuid:"F26D6542-5AFC-41A1-B72B-2D4326BF156B"}
 */
function getDefaultPrinterName(){
	// wmic printer get name,default
	var getInfo = application.executeProgram('wmic',new Array('printer','get','name,default'));
	application.output('Printer Info: '+getInfo);
	var defaultPrinter = getInfo.match(/TRUE +(.*)\n/);
	if (defaultPrinter){
		return defaultPrinter[1].trim();
	}
	
	var $printService = new Packages.javax.print.PrintServiceLookup.lookupDefaultPrintService();
 	var $printerName = $printService.getName();
 	application.output('Default Printer From Function: '+$printerName);
 	if (!$printerName){printerName = ''}
 	return $printerName.trim();
	//application.output($printerName)
}
/**
 * @param event
 * @param barcodePrintedArray
 *
 * @properties={typeid:24,uuid:"E76C854A-8607-4A3A-9A59-23DDCAA158D7"}
 */
function updateInventoryPrinted(event,barcodePrintedArray){
	if (barcodePrintedArray && barcodePrintedArray.length == 0){return}
	/** @type {QBSelect<db:/stsservoy/inventory>} */
	var q = databaseManager.createSelect('db:/stsservoy/inventory');
	q.where.add(q.columns.tenant_uuid.eq(globals.makeUUID(globals.session.tenant_uuid)));
	q.where.add(q.columns.inventory_uuid.isin(barcodePrintedArray));
	q.result.add(q.columns.inventory_uuid);
	q.result.add(q.columns.print_date);
	q.result.add(q.columns.lprint);
	var Q = databaseManager.getFoundSet(q);
	if (Q.getSize() > 0){
		databaseManager.saveData(Q);
		var R = databaseManager.getFoundSetUpdater(Q);
		var printDate = new Date();
		R.setColumn('print_date',printDate);
		R.setColumn('lprint',1);
		if (!R.performUpdate()){
			var idx = 1;var rec = null;
			while (rec = Q.getRecord(idx++)){
				rec.print_date = printDate;
				rec.lprint = 1;
			}
			databaseManager.saveData(Q);
		}
	}
	null;
}
/**
 * @properties={typeid:24,uuid:"6F9CEA36-B7BC-473F-976D-D018129A96D1"}
 */
function getServerPrinters(){
	var getInfo = application.executeProgram('wmic',new Array('printer','get','name,default'));
	var defPrinter = getInfo.match(/TRUE +(.*)\n/);
	var defaultPrinter = '';
	if (defPrinter){defaultPrinter = defPrinter[1].trim();}
	var printers = getInfo.split('\n');
	var printerList = [];
	for (var i = 0;i < printers.length;i++){
		var matchItem = printers[i].match(/(TRUE|FALSE) +(.*)/)
		if (matchItem){printerList.push(matchItem[2].trim());}
	}
	printerList.sort();
	application.output(printerList)
	application.setValueListItems('stsvl_server_printers',printerList)
	if (defaultPrinter){
		scopes.prefs.defaultPrinter = defaultPrinter;
	}

}