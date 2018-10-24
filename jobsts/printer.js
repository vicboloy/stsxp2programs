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
['AREA','BATCH','BCCUST','BCFORM','BCINCLDPFX','BCJOBSTART','BCPREFIX','BCTITLE','BOLOUT','CARRNUM',
'COMMENTS','COWCODE','CTRLNUM','CUSCITY','CUSFAX','CUSFIRST','CUSLAST','CUSMIDDLE','CUSNAME','CUSPHONE','CUSSTATE','CUSSTREET',
'CUSTNUM','CUSTPO','CUSTSO','CUSZIP','DESCR1','DESCR2','EDITTIME','ENGXTIME','FABINVOICE','FABSHOP','FABXTIME','FIREXTIME',
'GALVXTIME','GRADE','HEAT','ID','IDFORMAT','IDLOCATION','IDSTATUS','INVOICE','JOBCAREOF','JOBID','JOBLOCAT','JOBNUM',
'JOBSHIPTO','JOBSTRUCT','JOBTITLE','JOIDFORMAT','JOLINE1NUM','JOLINE1STR','JOLINE2NUM','JOLINE2STR','LINE0FLD','LINE0PRMPT',
'LINE1NUM','LINE1STR','LINE2NUM','LINE2STR','LINE3FLD','LINE3PRMPT','LINE4FLD','LINE4PRMPT','LINE5FLD','LINE5PRMPT','LINE6FLD',
'LINE6PRMPT','LINE7FLD','LINE7PRMPT','LINE8FLD','LINE8PRMPT','LINE9FLD','LINE9PRMPT','LINEAFLD','LINEAPRMPT','LINEBFLD',
'LINEBPRMPT','LOADNUM','LODCAREOF','LODPO','LODRELEASE','LODSHIPTO','LOT','MRR','ORIGEMPL','OTHRXTIME','PANTXTIME','PCCOLOR',
'PCCOWCODE','PCMARK','PCRELEASE','PCUOM','PORELEASE','PRODTYPE','PROJYEAR','RAWMATLID','RECACTION','RECVLOAD','RECVTIME',
'REMAILTIME','REVLEVEL','ROUTECODE','SEMAILTIME','SEQNUM','SHEETNUM','SHIPLOAD','SHIPTAG','SHIPTIME','SITEXTIME','TRAILINFO',
'EDITDATE','ENGXDATE','FABXDATE','FIREXDATE','GALVXDATE','IDCREATED','OTHRXDATE','PANTXDATE','RECVDATE','REMAILDATE','REQDSHIP',
'SCHDSHIP','SEMAILDATE','SHIPDATE','SITEXDATE','DELETEID','LOGICFLAG','LPRINT','LSOTOLOAD','METRICJOB','BCJBSTRT','BCJOBLGTH',
'BCPFXLGTH','COSTEA','COWQTY','FIREPFCF','INCREMNT','ITEMWT','ITEMWTKG','JOBWT','LABELBC','LABELQTY','LGTNUM','ORIGQTY',
'PCUOMDOLL','QTY2PRINT','RECVQTY','RECVWT','SEQQTY','SHIPQTY','SHIPWT','TOTALWT','WIDNUM','RTBW','RTSW','RTBRANCH','PTFILLET',
'PTBRANCH','MTFILLET','MTBRANCH','LINESPEC','PREHEAT','SHOPHYDRO','FLDHYDRO','PMI','PWHT','DRAWNBY','CHECKBY','PAINTSYS','BHN',
'BHNMAX','LINENBR','REFDWG','SKETCH','PHASE','BOMCOMMENT','SHEETPO','PRIORDATE','MINORID','MINORQTY','BOMPARTNUM','BOMHEAT',
'BOMGUID','BOMGRADE','BOMSEQNUM','BOMITEMNUM','BOMREMARKS','PARENTPCMK','BOMQTY','BOMLGTNUM','BOMWIDNUM','BOMITEMWT','ERECTDWG',
'BUNDLEID','FINISH','DETAILMIN','FABMIN','HANDLMIN','PAINTMIN','SAWMIN','WELDMIN','RULECODE','FT_PKGNO','PCPHASE','PARENTCOPY',
'PARENTID','CAMBER','BOMMATL','BOMSIZE','BOMRATING','MATLCLASS','BOMENDPREP','GUID','BOMFINISH','PRIORITY','BOMLGTCHAR']; */

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"176CB6B3-5846-404B-8ECD-3606FD25C8B1"}
 */
var barTenderTextSpecs = "";
/**\
1 AREA Character 6 idfiles.id_area 10,\
2 BATCH Character 3 idfiles.id_batch 15,\
3 BCCUST Character 16 customers.name 45,\
4 BCFORM Character 10 jobs.barcode_form 20,\
5 BCINCLDPFX Character 15 customers.barcode_include_prefix 15,\
6 BCJOBSTART Character 35 customers.barcode_job_start 35,\
7 BCPREFIX Character 2 customers.barcode_prefix 2,\
8 BCTITLE Character 26 UNKNOWN,\
9 BOLOUT Character 15 loads.bill_of_lading_out 15,\
10 CARRNUM Character 10 loads.carrier_number 15,\
11 COMMENTS Character 50 loads.load_comment 100,\
12 COWCODE Character 10 piecemarks.cost_of_work_code 10,\
13 CTRLNUM Character 30 idfiles.control_number 30,\
14 CUSCITY Character 25 customers.addresses.city 50,\
15 CUSFAX Character 10 customer.fax 25,\
16 CUSFIRST Character 15 customer.representative 25,\
17 CUSLAST Character 15 customer.representative 25,\
18 CUSMIDDLE Character 15 customer.representative 25,\
19 CUSNAME Character 30 customers.name 45,\
20 CUSPHONE Character 10 customers.phone 25,\
21 CUSSTATE Character 2 customers.addresses.state 2,\
22 CUSSTREET Character 30 customers.addresses.line1 100,\
23 CUSTNUM Character 10 customers.customer_number 15,\
24 CUSTPO Character 20 jobs.customer_po 30,\
25 CUSTSO Character 10 idfiles.shop_order 20,\
26 CUSZIP Character 9 customer_zip_code 20,\
27 DESCR1 Character 30 piecemarks.material 40,\
28 DESCR2 Character 30 piecemarks.description 40,\
29 EDITTIME Character 8 idfiles.edit_date DATETIME,\
30 ENGXTIME Character 8 loads.sent_engineer DATETIME,\
31 FABINVOICE Character 10 jobs.loads.fabricator.invoice 15,\
32 FABSHOP Character 5 associations.association_name 50,\
33 FABXTIME Character 8 loads.sent_fabricator DATETIME,\
34 FIREXTIME Character 8 loads.sent_fireproofer DATETIME,\
35 GALVXTIME Character 8 loads.sent_galvinizer DATETIME,\
36 GRADE Character 10 piecemarks.grade 20,\
37 HEAT Character 15 heats.heat_number 40,\
38 ID Character 10 id_serial_numbers.id_serial_number 30,\
39 IDFORMAT Character 9 jobs.label_format 50,\
40 IDLOCATION Character 10 idfiles.id_location 15,\
41 IDSTATUS Character 10 status_description.status_code 15,\
42 INVOICE Character 10 loads.invoice 15,\
43 JOBCAREOF Character 28 jobs.job_care_of 50,\
44 JOBID Character 10 jobs.job_number 30,\
45 JOBLOCAT Character 28 jobs.job_location 50,\
46 JOBNUM Character 10 jobs.job_number 20,\
47 JOBSHIPTO Character 10 jobs.addresses,\
48 JOBSTRUCT Character 28 jobs.job_structure 50,\
49 JOBTITLE Character 28 jobs.job_title 50,\
50 JOIDFORMAT Character 9 UNKNOWN,\
51 JOLINE1NUM Character 15 *** Manual entry ***,\
52 JOLINE1STR Character 30 *** Manual entry ***,\
53 JOLINE2NUM Character 15 *** Manual entry ***,\
54 JOLINE2STR Character 30 *** Manual entry ***,\
55 LINE0FLD Character 30 *** Manual entry ***,\
56 LINE0PRMPT Character 9 *** Manual entry ***,\
57 LINE1NUM Character 15 *** Manual entry ***,\
58 LINE1STR Character 26 *** Manual entry ***,\
59 LINE2NUM Character 15 *** Manual entry ***,\
60 LINE2STR Character 26 *** Manual entry ***,\
61 LINE3FLD Character 30 *** Manual entry ***,\
62 LINE3PRMPT Character 9 *** Manual entry ***,\
63 LINE4FLD Character 30 *** Manual entry ***,\
64 LINE4PRMPT Character 9 *** Manual entry ***,\
65 LINE5FLD Character 30 *** Manual entry ***,\
66 LINE5PRMPT Character 9 *** Manual entry ***,\
67 LINE6FLD Character 30 *** Manual entry ***,\
68 LINE6PRMPT Character 9 *** Manual entry ***,\
69 LINE7FLD Character 30 *** Manual entry ***,\
70 LINE7PRMPT Character 9 *** Manual entry ***,\
71 LINE8FLD Character 30 *** Manual entry ***,\
72 LINE8PRMPT Character 9 *** Manual entry ***,\
73 LINE9FLD Character 30 *** Manual entry ***,\
74 LINE9PRMPT Character 9 *** Manual entry ***,\
75 LINEAFLD Character 30 *** Manual entry ***,\
76 LINEAPRMPT Character 9 *** Manual entry ***,\
77 LINEBFLD Character 30 *** Manual entry ***,\
78 LINEBPRMPT Character 9 *** Manual entry ***,\
79 LOADNUM Character 10 loads.load_number 20,\
80 LODCAREOF Character 28 loads.care_of 30,\
81 LODPO Character 20 loads.load_po 20,\
82 LODRELEASE Character 20 loads.load_release 20,\
83 LODSHIPTO Character 10 ADDRESSloads.ship_to,\
84 LOT Character 11 lots.lot 15,\
85 MRR Character 10 idfiles.mrr 15,\
86 ORIGEMPL Character 5 employee.original_employee,\
87 OTHRXTIME Character 8 loads.sent_other DATETIME,\
88 PANTXTIME Character 8 loads.sent_paint DATETIME,\
89 PCCOLOR Character 10 idfiles.piece_color 20,\
90 PCCOWCODE Character 10 piecemarks.cost_of_work_code 10,\
91 PCMARK Character 30 piecemarks.piecemark 40,\
92 PCRELEASE Character 3 idfiles.piece_release 10,\
93 PCUOM Character 4 piecemarks.unit_of_measure 10,\
94 PORELEASE Character 20 jobs.po_release 25,\
95 PRODTYPE Character 3 piecemarks.product_type 10,\
96 PROJYEAR Character 4 jobs.project_year 0,\
97 RAWMATLID Character 10 idfiles.raw_material_id 40,\
98 RECACTION Character 1 UNKNOWN,\
99 RECVLOAD Character 10 loadsrcv.recv_load_number 20,\
100 RECVTIME Character 8 loads.receipt_date DATETIME,\
101 REMAILTIME Character 8 UNKNOWN,\
102 REVLEVEL Character 6 idfiles.revision_level 10,\
103 ROUTECODE Character 10 piecemarks.routings.route_code 15,\
104 SEMAILTIME Character 8 UNKNOWN,\
105 SEQNUM Character 20 jobs.sequences.sequence_number 30,\
106 SHEETNUM Character 8 piecemarks.sheets.sheet_number 20,\
107 SHIPLOAD Character 10 loads.ship_date DATETIME,\
108 SHIPTAG Character 16 piecemarks.ship_tag 20,\
109 SHIPTIME Character 8 loads.ship_date DATETIME,\
110 SITEXTIME Character 8 loads.sent_site DATETIME,\
111 TRAILINFO Character 20 loads.trailer_information 20,\
112 EDITDATE Date 8 idfiles.edit_date DATETIME,\
113 ENGXDATE Date 8 loads.sent_engineer DATETIME,\
114 FABXDATE Date 8 loads.sent_fabrication DATETIME,\
115 FIREXDATE Date 8 loads.sent_fireproofer DATETIME,\
116 GALVXDATE Date 8 loads.send_galvinizer DATETIME,\
117 IDCREATED Date 8 id_serial_number.edit_date DATETIME,\
118 OTHRXDATE Date 8 loads.sent_other DATETIME,\
119 PANTXDATE Date 8 loads.sent_painter DATETIME,\
120 RECVDATE Date 8 loads.receipt_date DATETIME,\
121 REMAILDATE Date 8 loads.email_received DATETIME,\
122 REQDSHIP Date 8 idfiles.required_ship_date DATETIME,\
123 SCHDSHIP Date 8 idfiles.scheduled_ship_date DATETIME,\
124 SEMAILDATE Date 8 loads.email_sent DATETIME,\
125 SHIPDATE Date 8 loads.ship_date DATETIME,\
126 SITEXDATE Date 8 loads.sent_site DATETIME,\
127 DELETEID Logical 1 idfiles.deleted_date DATETIME,\
128 LOGICFLAG Logical 1 idfiles.logic_flag 0,\
129 LPRINT Logical 1 idfiles.lprint 0,\
130 LSOTOLOAD Logical 1 customers.lsotoload 0,\
131 METRICJOB Logical 1 jobs.metric_job,\
132 BCJBSTRT Numeric 1 customers.barcode_job_start (17) ,\
133 BCJOBLGTH Numeric 1 customers.barcode_job_length (17),\
134 BCPFXLGTH Numeric 1 customers.barcode_fixed_length (17),\
135 COSTEA Numeric 11.4 piecemarks.cost_each (17),\
136 COWQTY Numeric 10.3 piecemarks.cost_of_work_quantity (17),\
137 FIREPFCF Numeric 9.2 piecemarks.fireproof_cubic_feet (17),\
138 INCREMNT Numeric 3 UNKNOWN,\
139 ITEMWT Numeric 10.3 piecemarks.item_weight_lbs (17),\
140 ITEMWTKG Numeric 10.3 piecemarks.item_weight (17),\
141 JOBWT Numeric 11 jobs.job_weight (17),\
142 LABELBC Numeric 5 *** calc'ed ***,\
143 LABELQTY Numeric 5 *** calc'ed ***,\
144 LGTNUM Numeric 11.4 piecemarks.item_length OR item_length_in (17),\
145 ORIGQTY Numeric 5 idfiles.original_quantity (17),\
146 PCUOMDOLL Numeric 11.4 piecemarks.piecemark_uom_dollars (17),\
147 QTY2PRINT Numeric 5 *** calc'ed ***,\
148 RECVQTY Numeric 5 *** calc'ed ***,\
149 RECVWT Numeric 10 loads.receiving_weight (17),\
150 SEQQTY Numeric 5 sequences.sequence_quantity 0,\
151 SHIPQTY Numeric 5 sequences.quantity 0,\
152 SHIPWT Numeric 10 loads.shipped_weight 17,\
153 TOTALWT Numeric 10 loads.total_weight 17,\
154 WIDNUM Numeric 10.4 piecemarks.item_weight OR item_weight_lbs (17),\
155 RTBW Character 6 sheets.rtbw 6,\
156 RTSW Character 6 sheets.rtsw 6,\
157 RTBRANCH Character 6 sheets.rtbranch 6,\
158 PTFILLET Character 6 sheets.ptfillet 6,\
159 PTBRANCH Character 6 sheets.rtbranch 6,\
160 MTFILLET Character 6 sheets.mtfillet 6,\
161 MTBRANCH Character 6 sheets.mtbranch 6,\
162 LINESPEC Character 10 sheets.line_spec 10,\
163 PREHEAT Character 15 sheets.preheat 15,\
164 SHOPHYDRO Character 6 sheets.shop_hydro 6,\
165 FLDHYDRO Character 6 sheets.field_hydro 6,\
166 PMI Character 6 sheets.pmi 6,\
167 PWHT Character 6 sheets.pwht 6,\
168 DRAWNBY Character 5 sheets.drawn_by 5,\
169 CHECKBY Character 5 sheets.checked_by 5,\
170 PAINTSYS Character 25 sheets.paint_system 25,\
171 BHN Character 6 sheets.bhn 6,\
172 BHNMAX Character 6 sheets.bhn_maximum 6,\
173 LINENBR Character 30 sheets.line_number 30,\
174 REFDWG Character 30 sheets.reference_drawing 30,\
175 SKETCH Character 10 sheets.sketch 10,\
176 PHASE Character 10 idfiles.piece_phase 15,\
177 BOMCOMMENT Character 50 sheets.bom_comment MEDIA,\
178 SHEETPO Character 20 sheets.sheet_po 20,\
179 PRIORDATE Date 8 sheets.prior_date DATETIME,\
180 MINORID Character 10 *** piecemarks...idfile...id_serial_numbers.id_serial_number,\
181 MINORQTY Numeric 5 *** calc'ed ***,\
182 BOMPARTNUM Character 30 UNKNOWN,\
183 BOMHEAT Character 15 UNKNOWN,\
184 BOMGUID Character 40 UNKNOWN,\
185 BOMGRADE Character 10 UNKNOWN,\
186 BOMSEQNUM Character 20 UNKNOWN,\
187 BOMITEMNUM Character 6 UNKNOWN,\
188 BOMREMARKS Character 20 UNKNOWN,\
189 PARENTPCMK Character 30 *** piecemarks.parent_piecemark 40,\
190 BOMQTY Numeric 5 UNKNOWN,\
191 BOMLGTNUM Numeric 11.4 UNKNOWN,\
192 BOMWIDNUM Numeric 10.4 UNKNOWN,\
193 BOMITEMWT Numeric 10.3 UNKNOWN,\
194 ERECTDWG Character 15 idfiles.erection_drawing 20,\
195 BUNDLEID Character 10 idfiles.bundle_bc 30,\
196 FINISH Character 10 piecemarks.finish 30,\
197 DETAILMIN Numeric 10.4 piecemarks.saw_minutes (17),\
198 FABMIN Numeric 10.4 piecemarks.fabrication_minutes (17),\
199 HANDLMIN Numeric 10.4 piecemarks.handling_minutes (17),\
200 PAINTMIN Numeric 10.4 piecemarks.paint_minutes (17),\
201 SAWMIN Numeric 10.4 piecemarks.saw_minutes (17),\
202 WELDMIN Numeric 10.4 piecemarks.weld_minutes (17),\
203 RULECODE Character 20 piecemarks.rule_code 20,\
204 FT_PKGNO Integer 4 idfiles.ft_pkgno 0,\
205 PCPHASE Character 10 idfiles.piece_phase 15,\
206 PARENTCOPY Numeric 4 UNKNOWN,\
207 PARENTID Character 10 piecemarks.parent_piecemark...id_serial_numbers.id_serial_number,\
208 CAMBER Numeric 7.4 piecemarks.camber (17),\
209 BOMMATL Character 100 UNKNOWN,\
210 BOMSIZE Character 13 UNKNOWN,\
211 BOMRATING Character 15 UNKNOWN,\
212 MATLCLASS Character 10 piecemarks.material_class 10,\
213 BOMENDPREP Character 6 UNKNOWN,\
214 GUID Character 40 idfiles.id_guid 40,\
215 BOMFINISH Character 30 UNKNOWN,\
216 PRIORITY Character 10 sheets.priority 10,\
217 BOMLGTCHAR Character 15 UNKNOWN"; */

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
 */
function onRenderPrint(event){
	var rec=event.getRecord();
	var rend=event.getRenderable();
	var color = rend.bgcolor;
	if (rec && rec.bc_printed != 1 && rec.selection == 1){rend.bgcolor = "green"}
	if (rec && rec.bc_printed == 1 && rec.selection == 0){rend.bgcolor = "yellow"}
	if (rec && rec.bc_printed == 1 && rec.selection == 1){rend.bgcolor = "red"}

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
 */
function getBTFieldData(){
	var barTenderSpecs = "\
		1 AREA Character 6 idfiles.if_id_area 10,\
		2 BATCH Character 3 idfiles.if_id_batch 15,\
		3 BCCUST Character 16 customers.barcode_customer_name 45,\
		4 BCFORM Character 10 jobs.barcode_format_customer_number 20,\
		5 BCINCLDPFX Character 15 customers.bc_include_prefix 15,\
		6 BCJOBSTART Character 35 customers.bc_job_start 35,\
		7 BCPREFIX Character 2 customers.bc_prefix 2,\
		8 BCTITLE Character 26 UNUSED,\
		9 BOLOUT Character 15 loads.ship_bol_out 15,\
		10 CARRNUM Character 10 loads.ship_carrier_number 15,\
		11 COMMENTS Character 50 loads.ship_load_comment 100,\
		12 COWCODE Character 10 piecemarks.pm_cost_of_work_code 10,\
		13 CTRLNUM Character 30 idfiles.if_control_number 30,\
		14 CUSCITY Character 25 customers.customer_city 50,\
		15 CUSFAX Character 10 customer.job_customer_fax 25,\
		16 CUSFIRST Character 15 customer.job_customer_rep 25,\
		17 CUSLAST Character 15 customer.job_customer_rep 25,\
		18 CUSMIDDLE Character 15 customer.job_customer_rep 25,\
		19 CUSNAME Character 30 customers.job_customer_name 45,\
		20 CUSPHONE Character 10 customers.job_customer_phone 25,\
		21 CUSSTATE Character 2 customers.customer_state 2,\
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
		50 JOIDFORMAT Character 9 UNUSED,\
		51 JOLINE1NUM Character 15 UNUSED,\
		52 JOLINE1STR Character 30 jobs.barcode_format_customer_name 45,\
		53 JOLINE2NUM Character 15 UNUSED,\
		54 JOLINE2STR Character 30 jobs.job_customer_name 45,\
		55 LINE0FLD Character 30 UNUSED,\
		56 LINE0PRMPT Character 9 UNUSED,\
		57 LINE1NUM Character 15 UNUSED,\
		58 LINE1STR Character 26 UNUSED,\
		59 LINE2NUM Character 15 UNUSED,\
		60 LINE2STR Character 26 UNUSED,\
		61 LINE3FLD Character 30 UNUSED,\
		62 LINE3PRMPT Character 9 UNUSED,\
		63 LINE4FLD Character 30 UNUSED,\
		64 LINE4PRMPT Character 9 UNUSED,\
		65 LINE5FLD Character 30 UNUSED,\
		66 LINE5PRMPT Character 9 UNUSED,\
		67 LINE6FLD Character 30 UNUSED,\
		68 LINE6PRMPT Character 9 UNUSED,\
		69 LINE7FLD Character 30 UNUSED,\
		70 LINE7PRMPT Character 9 UNUSED,\
		71 LINE8FLD Readable 30 piecemark.pm_length_in,\
		72 LINE8PRMPT Character 9 UNUSED,\
		73 LINE9FLD Character 30 UNUSED,\
		74 LINE9PRMPT Character 9 UNUSED,\
		75 LINEAFLD Character 30 UNUSED,\
		76 LINEAPRMPT Character 9 UNUSED,\
		77 LINEBFLD Character 30 UNUSED,\
		78 LINEBPRMPT Character 9 UNUSED,\
		79 LOADNUM Character 10 loads.ship_load_number 20,\
		80 LODCAREOF Character 28 loads.ship_load_care_of 30,\
		81 LODPO Character 20 loads.ship_load_po 20,\
		82 LODRELEASE Character 20 loads.ship_load_release 20,\
		83 LODSHIPTO Character 10 loads.ship_customer_number 15,\
		84 LOT Character 11 lots.lt_lot 15,\
		85 MRR Character 10 idfiles.if_mrr 15,\
		86 ORIGEMPL Character 5 emp.job_original_employee 15,\
		87 OTHRXTIME Character 8 UNUSED,\
		88 PANTXTIME Character 8 UNUSED,\
		89 PCCOLOR Character 10 idfiles.if_piece_color 20,\
		90 PCCOWCODE Character 10 piecemarks.pm_cost_of_work_code 10,\
		91 PCMARK Character 30 piecemarks.pm_piecemark 40,\
		92 PCRELEASE Character 3 idfiles.if_piece_release 10,\
		93 PCUOM Character 4 piecemarks.pm_unit_of_measure 10,\
		94 PORELEASE Character 20 jobs.job_po_release 25,\
		95 PRODTYPE Character 3 piecemarks.pm_product_type 10,\
		96 PROJYEAR Numeric 4 jobs.job_project_year 4,\
		97 RAWMATLID Character 10 idfiles.if_raw_material_id 40,\
		98 RECACTION Character 1 UNUSED,\
		99 RECVLOAD Character 10 loadsrcv.recv_load_number 20,\
		100 RECVTIME Character 8 loadsrcv.recv_load_date DATETIME,\
		101 REMAILTIME Character 8 UNUSED,\
		102 REVLEVEL Character 6 idfiles.if_revision_level 10,\
		103 ROUTECODE Character 10 piecemarks.rt_route_code 15,\
		104 SEMAILTIME Character 8 UNUSED,\
		105 SEQNUM Character 20 sequences.sq_sequence_number 30,\
		106 SHEETNUM Character 8 sheets.sh_sheet_number 20,\
		107 SHIPLOAD Character 10 loads.ship_load_date DATETIME,\
		108 SHIPTAG Character 16 piecemarks.pm_ship_tag 20,\
		109 SHIPTIME Character 8 loads.ship_load_time DATETIME,\
		110 SITEXTIME Character 8 UNUSED,\
		111 TRAILINFO Character 20 loads.ship_load_trailer_info 20,\
		112 EDITDATE Date 8 idfiles.if_edit_date DATETIME,\
		113 ENGXDATE Date 8 UNUSED,\
		114 FABXDATE Date 8 UNUSED,\
		115 FIREXDATE Date 8 UNUSED,\
		116 GALVXDATE Date 8 UNUSED,\
		117 IDCREATED Date 8 id_serial_number.bc_create_date DATETIME,\
		118 OTHRXDATE Date 8 UNUSED,\
		119 PANTXDATE Date 8 UNUSED,\
		120 RECVDATE Date 8 loads.recv_load_date DATETIME,\
		121 REMAILDATE Date 8 UNUSED,\
		122 REQDSHIP Date 8 idfiles.if_required_ship_date DATETIME,\
		123 SCHDSHIP Date 8 idfiles.if_scheduled_ship_date DATETIME,\
		124 SEMAILDATE Date 8 UNUSED,\
		125 SHIPDATE Date 8 loads.ship_date DATETIME,\
		126 SITEXDATE Date 8 UNUSED,\
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
		138 INCREMNT Numeric 3 UNUSED,\
		139 ITEMWT Numeric 10.3 piecemarks.pm_item_weight_lbs 10.3,\
		140 ITEMWTKG Numeric 10.3 piecemarks.pm_item_weight 10.3,\
		141 JOBWT Numeric 11 jobs.job_weight 11,\
		142 LABELBC Numeric 5 UNUSED,\
		143 LABELQTY Numeric 5 UNUSED,\
		144 LGTNUM Numeric 11.4 piecemarks.pm_item_length 11.4,\
		145 ORIGQTY Numeric 5 idfiles.if_original_quantity 5,\
		146 PCUOMDOLL Numeric 11.4 piecemarks.pm_piecemark_uom_dollars 11.4,\
		147 QTY2PRINT Numeric 5 UNUSED,\
		148 RECVQTY Numeric 5 idfiles.if_receive_quantity 5,\
		149 RECVWT Numeric 10 loads.recv_load_receiving_wt 10,\
		150 SEQQTY Numeric 5 sequences.sq_sequence_quantity 5,\
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
		181 MINORQTY Numeric 5 barcodes.bc_barcode_item_qty 5,\
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
		206 PARENTCOPY Numeric 4 UNUSED,\
		207 PARENTID Character 10 piecemarks.bc_parent_id_serial_number 10,\
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
		220 SUBCATG Character 10 piecemark.p_subcategory 30,\
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
		243 OPERAPRES Character 10 sheets.sh_operapres 10";
	
	/** @type {QBSelect<db:/stsservoy/label_fields>} */
	var q = databaseManager.createSelect('db:/stsservoy/label_fields');
	q.result.add(q.columns.label_field_id);
	q.sort.add(q.columns.field_order);
	var Q = databaseManager.getFoundSet(q);
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
	var specs = barTenderSpecs.split(',');
	for (idx = 0;idx < specs.length;idx++){
		var btSpec = {num: 0, name:'',dbtype:'', size: 0,dbcol:'',dbsize:0}
		var fields = specs[idx].trim().split(/ +/);
		var btSpec1 = btSpec;
		btSpec1 = {
			num : fields[0].trim()*1,
			name : fields[1],
			dbtype : fields[2],
			size : fields[3],
			dbcol : fields[4],
			dbsize : fields[5]
		}
		btSpecs.push(btSpec1);
		if (existingFields.indexOf(btSpec1.num) == -1){
			saveRecs = true;
			var i2 = Q.newRecord(false);
			rec = Q.getRecord(i2);
			rec.edit_date = new Date();
			rec.field_order = btSpec1.num;
			rec.field_name = btSpec1.name;
			rec.field_type = btSpec1.dbtype;
			var widthSpec = btSpec1.size.split('.');
			rec.field_width = widthSpec[0];
			rec.field_decimal = (widthSpec[1]) ? widthSpec[1] : 0;
			rec.db_field = btSpec1.dbcol;
			if (btSpec1.dbsize == 'DATETIME'){
				rec.db_width = 8;
			} else {
				application.output('dbsize '+btSpec1.dbsize);
				rec.db_width = btSpec1.dbsize;				
			}
			/** if (tableColumns[btSpec1.dbcol]){
				rec.db_width = tableColumns[btSpec1.dbcol]
			} else if (btSpec1.dbsize){
				rec.db_width = (btSpec1.dbsize == 'DATETIME') ? 8 : btSpec1.dbsize;
			} else {
				rec.db_width = 0;
			} */
			
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
