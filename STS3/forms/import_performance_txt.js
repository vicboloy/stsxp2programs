/**
 * @properties={typeid:35,uuid:"17059D41-C83F-40BA-B0E2-3AB35C4A7F56",variableType:-4}
 */
var _arraycomments = [];
/**
 * @properties={typeid:35,uuid:"49BBFA30-D86B-444A-B624-14AA817CE09C",variableType:-4}
 */
var _arraysheets = [];
/**
 * @properties={typeid:35,uuid:"D6D7CB26-2A1C-45AE-8C83-2C59A82E5F13",variableType:-4}
 */
var _arraypcmks = [];
/**
 * @properties={typeid:35,uuid:"EE640A52-5666-4363-9CA6-23681E4EA94D",variableType:-4}
 */
var _arraycuts = [];
/**
 * @properties={typeid:35,uuid:"47BDA76E-F509-4D80-9F1B-708D139233B9",variableType:-4}
 */
var _arraybom = [];
/**
 * @properties={typeid:35,uuid:"F3894238-0BA1-48C4-88ED-1C7B88E115C6",variableType:-4}
 */
var _arraybommaterial = [];
/**
 * @properties={typeid:35,uuid:"3EDAB4B0-EE2F-4DE8-B185-BF14F2106B1C",variableType:-4}
 */
var _arrayborderkss = [];
/**
 * @properties={typeid:35,uuid:"70FEE937-C374-4A5D-B52D-9291F321CD4B",variableType:-4}
 */
var objsheetbom = {sheet:'',item_number:'',item_size:'',bom_remarks:'',item_quantity:'',bom_material:'',bom_field_material:false,bom_source_file:''};
/**
 * @properties={typeid:35,uuid:"C0A56298-2CE9-4719-A7B2-BEB7A67CB725",variableType:-4}
 */
var objsheetcutlist = {sheet:'',item_number:'',item_size:'',item_length_ins:'',item_length:'',remarks:'',bom_end_one:'',bom_end_two:'',bom_xref_item:'',bom_source_file:''};
/**
 * @properties={typeid:35,uuid:"7109DC6A-8F11-4708-885E-CEBD6FE8CE20",variableType:-4}
 */
var objspoolinfo = {sheet:'',		piecemark:'',	spoolfile:''};
/**
 * @properties={typeid:35,uuid:"C78F5CF7-D10E-4CBB-8F19-E43D17F9ADBF",variableType:-4}
 */
var objborderkss = {bhn_maximum: '',	bhn: '',		checked_by: '',	date_issued: '',		drawn_by: '',		field_hydro: '',
					jobnumber: '',		line_number: '',line_spec: '',	mtbranch: '',			mtfillet: '',		mtsw: '',	
					paint_system: '',	phase: '',		pmi: '',		preheat: '',			prior_date: '',		ptbranch: '',	
					ptfillet: '',		ptsw: '',		pwht: '',		reference_drawing: '',	revision_level: '',	rtbranch: '',	rtbw: '',
					rtsw: '',			shop_hydro: '',	sketch: '',		border_file:''}
/**
 * @properties={typeid:35,uuid:"59CE64AD-0C95-4768-9671-D2F0DC8E5DCE",variableType:-4}
 */
var objbomkss = {partnumber:'',nsinches:'',description:'',quantity:'',bomfile:'',fieldmaterial:'',sheet:''};

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"DADB6AA6-DFB6-41A3-A3F0-DC55C438E807",variableType:4}
 */
var countBorder = 0
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"9BAAC701-6B79-4D11-B09B-B9FAF74F32A0",variableType:4}
 */
var countOrb = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"95CBE781-6D5E-42AD-B9BA-D50A1F9979BE",variableType:4}
 */
var countKss = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"EEFBF24A-DA95-4415-9E30-736D96361F52",variableType:4}
 */
var countBom = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"396BF997-5B05-49A0-81AD-5DEEA77A7656"}
 */
var prefSpecBorder = '*_BORDER_TEXT.ORB';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C54DEA4D-5C60-42D1-AA99-59399D34C1AA"}
 */
var prefSpecBom = '*_BOM.ORB';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CFD37FAC-0704-4AB5-ABCF-E5841CC51AE9"}
 */
var prefSpecComments = '*_COMMENTS.ORB';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1576BE1B-103E-4DA0-88CF-D7159723DB15"}
 */
var prefSpecSpool = '*_SPOOL_PC.ORB';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E9C9091D-729F-4AAD-A6C0-CA0ED77AE4D4"}
 */
var prefSpecCut = '*_CUT_PC.ORB';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"71D3A31F-CC50-4657-B055-0BB4FC0811E9"}
 */
var kssFileBorder = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"973038D1-CEF4-46CA-8B41-C2FF79C64CE9"}
 */
var kssFileBom = '';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ABBD1F23-E342-4B11-B9FA-FB261716B120"}
 */
var orbDirectory = '';
/**
 * @properties={typeid:35,uuid:"55475950-454D-418E-8029-469023007557",variableType:-4}
 */
var drawingsArray = [];
/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"206156CA-8A1C-47F5-B29F-EAEF3E7604DB",variableType:-4}
 */
var drawingX = true;
/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"E9ABD505-9689-46F4-A13C-DA68EA3D07B8",variableType:-4}
 */
var drawingY = true;
/**
 * @properties={typeid:35,uuid:"C46FBC72-5159-47BC-AD0C-EF878E5343A5",variableType:-4}
 */
var spoolArray = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"DE351BB3-84F9-4AC3-97FC-04D0868EF746"}
 */
var _jobNumber = '';

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"58E44695-3FF8-4E3C-B322-2C3D3426EFCF"}
 * @AllowToRunInFind
 */
function onActionGetFile(event) {
	var elementName = event.getElementName();
	var fileSpec = '';
	var directory = 'e://';
	var title = '';
	var labelEl = '';
	var index = 0;
	var fileList;
	switch (elementName){
		case 'getBorder':
			fileSpec = prefSpecBorder;
			if (orbDirectory == ''){directory = scopes.prefs.importpath}else{directory = orbDirectory}
			/** @type {JSFile} */
			var kssFileStuff = plugins.file.showFileOpenDialog(1,directory,false,(new Array('Border KSS File','kss','KSS')));
			if (!kssFileStuff){return}
			if (orbDirectory == ''){orbDirectory = kssFileStuff.getPath().replace(kssFileStuff.getName(),'');}
			elements.viewOrb.enabled = true;
			kssFileBorder = kssFileStuff.getPath();
			elements.viewBorder.enabled = true;
			kssFileStuff = null;
			countBorder = 1;
			countOrb = 0;
			dir = plugins.file.convertToJSFile(orbDirectory);
			if (!dir){return}
			fileList = dir.listFiles();
			for (index = 0;index < fileList.length;index++){
				if (fileList[index].getName().search(fileSpec.replace('*','')) != -1){
					countBorder++;
				}
				if (fileList[index].getName().search('ORB') != -1){
					countOrb++;
				}
			}
			break;
		case 'getBom':
			fileSpec = prefSpecBom;
			if (orbDirectory == ''){directory = scopes.prefs.importpath}else{directory = orbDirectory}
			kssFileStuff = plugins.file.showFileOpenDialog(1,directory,false,(new Array('BOM KSS File','kss','KSS')));
			if (!kssFileStuff){return}
			if (orbDirectory == ''){orbDirectory = kssFileStuff.getPath().replace(kssFileStuff.getName(),'');}
			elements.viewOrb.enabled = true;
			kssFileBom = kssFileStuff.getPath();
			elements.viewBom.enabled = true;
			kssFileStuff = null;
			countBom = 1;
			countOrb = 0;
			dir = plugins.file.convertToJSFile(orbDirectory);
			if (!dir){return}
			fileList = dir.listFiles();
			for (index = 0;index < fileList.length;index++){
				if (fileList[index].getName().search(fileSpec.replace('*','')) != -1){
					countBom++;
				}
				if (fileList[index].getName().search('ORB') != -1){
					countOrb++;
				}
			}
			break;
		case 'getDir':
			directory = 'e://';
			if (orbDirectory == ''){directory = scopes.prefs.importpath}else{directory = orbDirectory}
			labelEl = elements.inDir;
			title = labelEl.titleText;
			orbDirectory = plugins.file.showDirectorySelectDialog(directory,title);
			elements.viewOrb.enabled = true;
			countOrb = 0;
			var dir = plugins.file.convertToJSFile(orbDirectory);
			if (!dir){return}
			fileList = dir.listFiles();
			for (index = 0;index < fileList.length;index++){
				if (fileList[index].getName().search('ORB') != -1){
					countOrb++;
				}
			}
			break;
		default:
			return;
	}
	getDrawingsList(event);
			
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9750C58E-FCFB-458B-B717-3F7C8B421F59"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function getBorderKss(event){
	var columnNames = new Array();
	var dir = '';
	if (orbDirectory != ''){dir = orbDirectory} else {return}
	var currentSheet = '';
	var sheets = new Array();
	var sheetIdx = 0;
	getDrawingsList(event);
	var fileName = orbDirectory+'BORDER.KSS';
	/** @type {plugins.file.JSFile} */
	var file = plugins.file.readTXTFile(fileName).split('\n');
	countBorder = file.length;
	var borderFile = '';
	for ( var index = 0;index < file.length;index++){
		var fields = file[index].split('~');
		if (columnNames.length == 0){
			for (var i = 0;i< fields.length;i++){
				columnNames.push(fields[i]);
				columnNames[columnNames.length-1] = [];
			}
			sheetIdx = fields.length-1;
		}
		if (fields.length > sheetIdx){
			var fieldSpec = prefSpecBorder.replace('*','');
			//if (application.isInDeveloper()){application.output('sheet '+fields[sheetIdx])}
			currentSheet = fields[sheetIdx].replace(fieldSpec,'');
			sheets[currentSheet] = new Array();
			for (var iii = 0;iii <= sheetIdx;iii++){
				sheets[currentSheet][iii] = new Array();						
			}
			//if (application.isInDeveloper()){application.output(currentSheet)}
		} else {
			var line = 0;
			for (i = 0;i < fields.length;i++){
				if (fields[i] != ''){
					while(1){
						if (!sheets[currentSheet][line]){sheets[currentSheet][line] = new Array()}
						if (!sheets[currentSheet][line][i]){sheets[currentSheet][line][i] = fields[i];break}
						line++;
					}
				}
			}
		}
		
	}
	_arrayborderkss = new Array();
	for (var sheet in sheets) {
		//if (application.isInDeveloper()){application.output('sheet name kss ' + sheet);}
		//if (!_arrayborderkss[sheet]){
		//	_arrayborderkss[sheet] = new Array();
		//	var newSheet = {};
			//for (var key in objborderkss){_arrayborderkss[sheet][key] = objborderkss[key]}
		var newSheet = {};
		for (var key in objborderkss){newSheet[key] = objborderkss[key]}
		//}
		newSheet.border_file = sheet+prefSpecBorder.replace('*','');
		newSheet.rtbw = sheets[sheet][0][0] ? sheets[sheet][0][0] : '';
		newSheet.rtsw = sheets[sheet][1][0] ? sheets[sheet][1][0] : '';
		newSheet.rtbranch = (sheets[sheet][2][0]) ? sheets[sheet][2][0] : '';

		newSheet.ptsw = (sheets[sheet][0][1]) ? sheets[sheet][0][1] : '';
		newSheet.ptbranch = (sheets[sheet][1][1]) ? sheets[sheet][1][1] : '';
		newSheet.ptfillet = (sheets[sheet][2][1]) ? sheets[sheet][2][1] : '';

		newSheet.mtsw = (sheets[sheet][0][2]) ? sheets[sheet][0][2] : '';
		newSheet.mtbranch = (sheets[sheet][1][2]) ? sheets[sheet][1][2] : '';
		newSheet.mtfillet = (sheets[sheet][2][2]) ? sheets[sheet][2][2] : '';
		newSheet.line_spec = (sheets[sheet][3][2]) ? sheets[sheet][3][2] : '';
		newSheet.preheat = (sheets[sheet][4][2]) ? sheets[sheet][4][2] : '';

		newSheet.shop_hydro = (sheets[sheet][0][3]) ? sheets[sheet][0][3] : '';
		newSheet.field_hydro =(sheets[sheet][1][3]) ? sheets[sheet][1][3] : '';
		newSheet.pmi = (sheets[sheet][2][3]) ? sheets[sheet][2][3] : '';

		newSheet.pwht = (sheets[sheet][0][4]) ? sheets[sheet][0][4] : '';
		newSheet.drawn_by = (sheets[sheet][1][4]) ? sheets[sheet][1][4] : '';
		newSheet.checked_by = (sheets[sheet][2][4]) ? sheets[sheet][2][4] : '';

		newSheet.paint_system = (sheets[sheet][0][5]) ? sheets[sheet][0][5] : '';
		newSheet.bhn = (sheets[sheet][1][5]) ? sheets[sheet][1][5] : ''; // bhn is bhn_percent, but not in table that way
		newSheet.bhn_maximum = (sheets[sheet][2][5]) ? sheets[sheet][2][5] : '';
		newSheet.date_issued = (sheets[sheet][3][5]) ? sheets[sheet][3][5] : '';
		if (newSheet.date_issued.search('/') != -1){
			newSheet.date_issued = scopes.globals.getDateTime(newSheet.date_issued);
		} else {
			newSheet.date_issued = null;
		}
		//application.output('date issued '+Date.parse(newSheet.prior_date));
		newSheet.prior_date = (sheets[sheet][4][5]) ? sheets[sheet][4][5] : '';
		if (newSheet.prior_date.search('/') != -1){
			newSheet.prior_date = scopes.globals.getDateTime(newSheet.prior_date);
		} else {
			newSheet.prior_date = null;
		}

		newSheet.line_number = (sheets[sheet][0][6]) ? sheets[sheet][0][6] : '';
		newSheet.reference_drawing = (sheets[sheet][1][6]) ? sheets[sheet][1][6] : '';
		newSheet.jobnumber = (sheets[sheet][2][6]) ? sheets[sheet][2][6] : '';
		if (newSheet.jobnumber){_jobNumber = newSheet.jobnumber}

		newSheet.revision_level = (sheets[sheet][0][7]) ? sheets[sheet][0][7] : '';
		newSheet.sketch = (sheets[sheet][1][7]) ? sheets[sheet][1][7] : ''; 
		newSheet.phase = (sheets[sheet][2][7]) ? sheets[sheet][2][7] : '';
		_arrayborderkss[sheet] = newSheet;
	}
	if (application.isInDeveloper()){
		for (var sht in _arrayborderkss){
			application.output('sheet no. '+sht);
			application.output(_arrayborderkss[sht]);
		}
	}
	if (application.isInDeveloper()){application.output('BOM KSS')}
	getBomKss(event);
	if (application.isInDeveloper()){application.output('COMMENTS')}
	getCommentOrb(event);
	if (application.isInDeveloper()){application.output('CUTLIST')}
	getCutList(event);
	//for (var name in sheets){
	//	application.output(' names '+name);
	//	application.output('         '+sheets[name]);
	//}
	/** var tables = new Array('sheets','sheet_bom');
	tables = [];

	for (var idx = 0;idx < tables.length;idx++){
		var tableName = 'db:/stsservoy/'+tables[idx];
		var table = databaseManager.getTable(tableName);
		var cols = table.getColumnNames();
		for (var j = 0;j < cols.length;j++){
			var tableInfo = table.getColumn(cols[j]);
			application.output(cols[j]+'\t'+tableInfo.getTypeAsString()+'\t'+tableInfo.getLength()+'\t'+tables[idx]);
		}
	} */
}
/**
 * @param {JSEvent} event
 * 
 * @properties={typeid:24,uuid:"1AD30476-BC70-4DA3-813D-BAC2D1EDA385"}
 */
function clear(event){
	kssFileBom = '';
	kssFileBorder = '';
	orbDirectory = '';
	countBorder = 0;
	countKss = 0;
	countOrb = 0;
	
	//forms.import_performance_setting.importCount = 0;
	drawingsArray = new Array();
	for (var key in {viewBom:null,viewBorder:null,viewOrb:null}){
		//application.output('key is '+key)
		forms.import_performance_txt.elements[key].enabled = false;
		forms.import_performance_txt.elements[key].bgcolor = 'yellow';
	}
	forms.import_performance_bom.viewValidation = 0;
	forms.import_performance_bom.enableTab();
	forms.import_performance_bom.importBoms = 0;
	forms.import_performance_bom.importBorders = 0;
	forms.import_performance_bom.importPcmks = 0;
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
 * @properties={typeid:24,uuid:"A3873552-1300-419A-B8CE-ACEBEDAB7AB4"}
 */
function onDataChangeFileSelect(oldValue, newValue, event) {
	var elementName = event.getElementName();
	var file;
	var formName;
	var dataProv;
	var view;
	switch (elementName){
		case 'inBorder':
			view = 'viewBorder';
			break;
		case 'inBom':
			view = 'viewBom';
			break;
		case 'inDir':
			view = 'viewOrb';
			break;
		default:
			return false;
	}
	/** @type plugins.file.JSFile */
	file = plugins.file.convertToJSFile(newValue);
	if (!file.exists()){
		formName = event.getFormName();
		dataProv = forms[formName].elements[elementName].getDataProviderID();
		forms[formName][dataProv] = oldValue;
		elements[view].enabled = false;
	} else {
		elements[view].enabled = true;
	}
	return true;
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"3CC3E854-51BB-47E5-A296-55512BC7D076"}
 */
function getCommentOrb(event){
	function able (a,b){return (a < b) ? -1 : (a > b) ? 1 : 0}
	function bravo (b,a){return (a < b) ? -1 : (a > b) ? 1 : 0}
	
	var dir = '';
	if (orbDirectory != ''){dir = orbDirectory} else {return}
	if (application.isInDeveloper()){application.output('directory '+dir)}
	//var currentSheet = '';
	//var sheets = new Array();
	//var sheetIdx = 0;
	for (var idx = 0;idx < drawingsArray.length;idx++){
		var sheetName = drawingsArray[idx];
		var fileName = dir+sheetName+prefSpecComments.replace('*','');
		/** @type {plugins.file.JSFile} */
		var file1 = plugins.file.readTXTFile(fileName);
		if (!file1){continue}
		var file = file1.split('\n');
		var commentsArray = new Array();
		for (var index = 0;index < file.length;index++){
			//if (application.isInDeveloper()){application.output('index '+index+' '+file[index])}
			var fields = file[index].split(' ');
			var fieldComment = fields[2].split(',');
			//if (application.isInDeveloper()){application.output('comments '+fieldComment[1])}
			var fieldLen = fieldComment.length;
			var comment = '';
			for (var idx2 = 1;idx2 < fieldLen;idx2++){
				comment += fieldComment[idx2];
				if (idx2 != fieldLen - 1){comment += ' ';}
			}
			var orderComment = fields[1]+'~'+comment;
			commentsArray.push(orderComment);
		}
		//application.output('drawingy '+drawingY+' drawingx '+drawingX);
		if (drawingY){
			commentsArray.sort(able);
		} else {
			commentsArray.sort(bravo);
		}
		// [0.871943~-, 0.996086~-, 1.12343~-, 1.24961~-, 1.37313~-]
		//if (application.isInDeveloper()){application.output(commentsArray)}
		var comments = '';
		for (index = 0;index < commentsArray.length;index++){
			fields = commentsArray[index].split('~');
			comments += fields[1];
			if (index != commentsArray.length -1){
				comments += '\n';
			}
			
		}
		//if (application.isInDeveloper()){application.output('comments: \n:'+comments+':')}
		_arraycomments[sheetName] = comments;
	}
	if (application.isInDeveloper()){
		application.output('COMMENTS');
		for (var key in _arraycomments){
			application.output(key);
			application.output(_arraycomments[key]);
		}
	}
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E771E1FA-87D0-4DCA-A182-C5FAE151660B"}
 * @AllowToRunInFind
 * @SuppressWarnings(wrongparameters)
 */
function getCutList(event){
	function sortTable(a,b){//This sorts the cutsList first by y-axis (row), then by x-axis (column)
		var r = a[1]-b[1];
		if (r != 0){return r}
		return a[0]-b[0];
	}

	_arraycuts = new Array();
	var dir = '';
	if (orbDirectory != ''){dir = orbDirectory} else {return}
	if (application.isInDeveloper()){application.output('directory '+dir)}
	var sheet = '';
	for (var idx = 0;idx < drawingsArray.length;idx++){
		sheet = drawingsArray[idx];
		//application.output(dir+drawingsArray[idx]+prefSpecCut.replace('*',''))
		/** @type plugins.file.JSFile */
		var file = plugins.file.readTXTFile(dir+drawingsArray[idx]+prefSpecCut.replace('*',''));
		if (!file){continue}
		var cutFile = drawingsArray[idx]+prefSpecCut.replace('*','');
		/** @type {Array} */
		var cutsArray = new Array();
		var lines = file.split('\n');
		//application.output(file);
		var xyPiece = [0,0]; // PIECE is (top,left) of table
		var xyIns = [0,0];   // (INS) is (bottom,left) of table.
		var xNums = new Array(); // Ordering array for columns
		var yNums = new Array(); // Ordering array for rows
		// 7 input fields
		for (var index = 0;index < lines.length;index++){
			var flds = lines[index].split(' ',3);
			var data = lines[index].split(',')[1];
			if (flds.length != 3){continue} // May be the wrong data set
			var fld1 = flds[0].split('(')[1];
			var fld2 = flds[1];
			var fld3 = data;
			if (fld3.indexOf('PIECE') == 0){xyPiece = [fld1,fld2]}
			if (fld3.indexOf('(INS)') == 0){xyIns = [fld1,fld2]}
			fld1 = Math.floor(fld1*100);
			fld2 = Math.floor(fld2*100);
			var newLine = new Array(fld1,fld2,fld3);
			cutsArray.push(newLine); // Save [x,y,data] for each input line
			xNums.push(fld1); //Collect starting coords for columns
			yNums.push(fld2); //Collect starting coords for rows
		}
		var xOrient = (xyPiece[0] < xyIns[0]); // is table correct horizontally
		var yOrient = (xyPiece[1] < xyIns[1]); // is table correct vertically
		drawingX = xOrient;drawingY = yOrient;//save to globals for comments
		xNums.sort(function (a,b){return a-b}); // sort column coords
		yNums.sort(function (a,b){return a-b}); // sort row coords

		cutsArray.sort(sortTable);

		var colsx = [];colsx[0] = [];
		var colsy = [];colsy[0] = [];
		var colIndexx = 0;
		var colIndexy = 0;
		for (index = 0;index < xNums.length;index++){
			if (colsx[colIndexx].indexOf(xNums[index]) == -1){colsx[colIndexx].push(xNums[index])}//save ONLY new origins
			if (colsy[colIndexy].indexOf(yNums[index]) == -1){colsy[colIndexy].push(yNums[index])}
			if (index != cutsArray.length-1){
				var diffx = xNums[index+1]-xNums[index];//difference between reported data start origins
				var diffy = yNums[index+1]-yNums[index];
				if (diffx > 12){colIndexx++;colsx[colIndexx] = []}//separation minimum guess for columns, force a column change
				if (diffy > 6){colIndexy++;colsy[colIndexy] = []}//separation minimum guess for rows
			}
			//application.output('x:'+diffx+',y:'+diffy);		
		}
		//application.output('colsx '+colsx);
		//application.output('colsy '+colsy);
		
		for (index = 0;index < cutsArray.length;index++){//Set row,x, and column,y, indices to an ordinal value
			var line = cutsArray[index];
			for (var ix = 0;ix < colsx.length;ix++){
				if (colsx[ix].indexOf(line[0]) != -1){
					cutsArray[index][0] = ix;
					break;
				}
			}
			for (var iy = 0;iy < colsy.length;iy++){
				if (colsy[iy].indexOf(line[1]) != -1){
					cutsArray[index][1] = iy;
					break;
				}
			}
			//if (application.isInDeveloper()){application.output('sorted '+cutsArray[index])}
		}
		cutsArray.sort(sortTable);
		for (index = 0;index < cutsArray.length;index++){//flip array if the orientation isn't normal orientation
			if (!xOrient){
				// flip array by x's
				cutsArray[index][0] = colIndexx - cutsArray[index][0];
			}
			if (!yOrient){
				// flip array by y's
				cutsArray[index][1] = colIndexy - cutsArray[index][1];
			}
			//application.output('sorted '+cutsArray[index]);
		}
		cutsArray.sort(sortTable);
		//for (index = 0;index < cutsArray.length;index++){
		//	application.output('--- '+cutsArray[index]);
		//}
		var start = false;
		var idx1 = 0;
		while (idx1 < cutsArray.length){
			var cutInfo = cutsArray[idx1];
			
			if (cutInfo[2].search('<') == 0){start = true;}
			if (!start){idx1++;continue}
			var cut = {};
			for (var key in objsheetcutlist){cut[key] = objsheetcutlist[key]}
			cut.sheet = sheet;
			cut.bom_source_file = cutFile;
			cut.item_number = cutsArray[idx1][2].replace('<','').replace('>','');	idx1++;
			if (cutsArray[idx1][0] == 2){
				length = cutsArray[idx1++][2];
				cut.length = (metric) ? length : scopes.jobs.fracToDec(length);
			}
			if (cutsArray[idx1][0] == 3){
				var metric = scopes.jobs.importJob.metricFlag;
				var length = cutsArray[idx1++][2];
				length = (metric) ? length : scopes.jobs.ft_to_in(length);
				cut.item_length_ins = (metric) ? scopes.jobs.mm_to_ft(length) : length;
				cut.item_length = (metric) ? length : cut.item_length_ins*25.4;
			} // was nsinches
			if (cutsArray[idx1][0] == 4){cut.remarks = cutsArray[idx1++][2]}
			if (cutsArray[idx1][0] == 5){cut.bom_end_one = cutsArray[idx1++][2]} //was endone
			if (cutsArray[idx1][0] == 6){cut.bom_end_two = cutsArray[idx1++][2]} //was endtwo
			if (cutsArray[idx1][0] == 7){cut.bom_xref_item = cutsArray[idx1++][2]} // was partnumber
			//if (application.isInDeveloper()){application.output('new '+sheet+' '+cut.partnumber)}
			cut.material_class = i18n.getI18NMessage('sts.txt.pipe.field.return.cut.pipe');
			if (_arraybommaterial[cut.bom_xref_item]){
				cut.bom_field_material = _arraybommaterial[cut.bom_xref_item].bom_field_material; // copy from bomkss
				cut.bom_material = _arraybommaterial[cut.bom_xref_item].bom_material;
			}
			
			cut.item_quantity = 1;
			_arraycuts.push(cut);
	
		}
	}
	if (application.isInDeveloper()){
		application.output('CUT LIST');
		for (index = 0;index < _arraycuts.length;index++){
			application.output(_arraycuts[index]);
		}
	}
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
 * @properties={typeid:24,uuid:"85AA86C9-13BC-47A0-8540-2C127AF723B6"}
 * @AllowToRunInFind
 */
function onDataChangeFileFilter(oldValue, newValue, event) {
	var dir = plugins.file.convertToJSFile(orbDirectory);
	var elName = event.getElementName();
	var formName = event.getFormName();
	var dataProv = elements[elName].getDataProviderID();
	var count = 0;
	if (dir.exists()){
		// error 956 Filter Does Not Have Any Results
		var fileList = dir.listFiles();
		var filter = newValue.replace('*','').toUpperCase();
		for (var index = 0;index < fileList.length;index++){
			var fileName = fileList[index].getName().toUpperCase();
			if (fileName.search(filter) != -1){
				count++;
			}
		}
		if (count == 0){
			globals.errorDialogMobile(event,956,'','');
			forms[formName][dataProv] = oldValue;			
		} else {
			forms[formName][dataProv] = newValue.toUpperCase();			
		}
	} else {
		forms[formName][dataProv] = oldValue;
		globals.errorDialogMobile(event,955,'','');
	}
	return true;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7568BA6C-6D54-4436-86F5-9EFB1E6F65FC"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		globals.restorePrefsLocal(event);
		clear(event);
	}
}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"7267BE06-561E-495B-ADAF-B246505A3B71"}
 */
function getDrawingsList(event){
	if (drawingsArray.length == 0 && orbDirectory != ''){
		var dir = plugins.file.convertToJSFile(orbDirectory);
		var fileList = dir.listFiles();
		var fileSpecs = [];
		fileSpecs.push(prefSpecBom.replace('*',''));
		fileSpecs.push(prefSpecBorder.replace('*',''));
		fileSpecs.push(prefSpecComments.replace('*',''));
		fileSpecs.push(prefSpecCut.replace('*',''));
		fileSpecs.push(prefSpecSpool.replace('*',''));
		
		for (var index = 0;index < fileList.length;index++){
			var file = fileList[index].getName();
			for (var i = 0;i < fileSpecs.length;i++){
				var fileSpec = fileSpecs[i];
				if (file.search(fileSpec) != -1){
					var drawing = file.replace(fileSpec,'');
					if (drawingsArray.indexOf(drawing) == -1){
						drawingsArray.push(drawing);
					}
				}
			}
		}
		drawingsArray.sort();
		_arraysheets = drawingsArray;
		if (application.isInDeveloper()){application.output(drawingsArray)}
	}
}
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"54BD5D25-620C-4626-BE36-9D3F5C159A2F"}
 */
function onActionViewData(event) {
	var elName = event.getElementName().replace('view','');
	if (elName == 'Orb'){
		getSpoolInfo(event);
		forms.import_performance_validation.displaySpoolInfo(event);

		//forms.import_performance_txt;
		var val = forms['import_performance_bom']['viewValidation'];
		val = val | 4;
		forms.import_performance_txt.elements.viewOrb.bgcolor = 'grey';
		forms['import_performance_bom']['viewValidation'] = val;
		forms['import_performance_bom'].enableTab();
		return
	}
	var winName = 'Preview Data- '+elName.toUpperCase();
	var win = application.createWindow(winName,JSWindow.MODAL_DIALOG);
	win.title = winName;
	win.show('import_performance_validation');
}
/**
 * @AllowToRunInFind
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"EC9FE8F3-6935-49D4-A820-4166EE1AA71C"}
 * @SuppressWarnings(wrongparameters)
 */
function getBomKss(event){
	/** function sortTable(a,b){//This sorts the cutsList first by y-axis (row), then by x-axis (column)
		var r = a[1]-b[1];
		if (r != 0){return r}
		var s = a[0]-b[0];
		return s;
	} */
	_arraybommaterial = new Array();
	getDrawingsList(event);
	_arraybom = new Array();
	var dir = '';
	if (orbDirectory != ''){dir = orbDirectory} else {return}
	//if (application.isInDeveloper()){application.output('directory '+dir)}
	var sheet = '';
	var bomFile = '';
	//var xNums = [], yNums = [];
	//var file = plugins.file.readTXTFile(dir+drawingsArray[idx]+prefSpecBom.replace('*',''));
	//var bomFile = drawingsArray[idx]+prefSpecBom.replace('*','');
	var idx1 = 0;
	var filein = plugins.file.readTXTFile(kssFileBom);
	var file = filein.split('\n');
	var isFieldMaterial = false;
	var bom = {}
	var bomArray = new Array();
	while (idx1 < file.length){
		var line = file[idx1].split('~');
		if (line[2].search('FIELD MAT') != -1){isFieldMaterial = true;idx1++;continue}
		if (!line[0] && !line[1] &&!line[3]){
			var descrip = _arraybom[sheet][_arraybom[sheet].length-1].description;
			descrip += ' '+ line[2];
			_arraybom[sheet][_arraybom[sheet].length-1].description = descrip;
			idx1++;
			continue;
		}
		if (line.length == 5){
			isFieldMaterial = false;
			bomFile = line[4];
			sheet = bomFile.replace(prefSpecBom.replace('*',''),'');
			if (typeof _arraybom[sheet] == 'undefined'){_arraybom[sheet] = []}
			idx1++;
			continue;
		}
		bom.sheet = sheet;
		bom.bom_source_file = bomFile;
		bom.bom_material = (line[2]) ? line[2] : ''; //was description
		var matClass = scopes.jobs.pipeDescripToFieldValue(bom.bom_material);
		bom.bom_field_material = (isFieldMaterial) ? 1 : 0; // was fieldmaterial
		bom.item_number = (line[0]) ? line[0] : ''; // was partnumber, translates to item_number
		bom.item_size = (line[1]) ? line[1] : ''; //was nsinches
		bom.item_quantity = (line[3]) ? line[3] : ''; // was quantity
		bom.material_class = matClass;
		if (matClass == i18n.getI18NMessage('sts.txt.pipe.field.pipe')){
			var metric = scopes.jobs.importJob.metricFlag;
			var length = bom.item_quantity;
			var inches = scopes.jobs.ft_to_in(length);
			bom.bom_length_ins = (metric) ? scopes.jobs.mm_to_ft(length) : inches;
			bom.bom_length = (metric) ? length : scopes.jobs.ft_to_mm(length);
			bom.item_quantity = 1;
			_arraybommaterial[bom.item_number] = {};
			_arraybommaterial[bom.item_number].bom_material = bom.bom_material;
			_arraybommaterial[bom.item_number].bom_field_material = bom.bom_field_material;
		}
		_arraybom[sheet].push({});
		var bom2 = _arraybom[sheet][_arraybom[sheet].length-1];
		for (var key1 in bom){bom2[key1] = bom[key1]}


		idx1++;

	/**for (var idx = 0;idx < drawingsArray.length;idx++){
		
		xNums = new Array();
		yNums = new Array();
		
		sheet = drawingsArray[idx];
		/ ** @type plugins.file.JSFile  * /
		var file = plugins.file.readTXTFile(dir+drawingsArray[idx]+prefSpecBom.replace('*',''));
		var bomFile = drawingsArray[idx]+prefSpecBom.replace('*','');
		/ ** @type {Array} * /
		var bomArray = new Array();
		if (!file){continue}
		var lines = file.split('\n');
		//application.output(file);
		// 4 input fields
		var flip = false;
		//if (application.isInDeveloper()){application.output('START ----- '+sheet)}
		for (var index = 0;index < lines.length;index++){
			var flds = lines[index].split(' ',3);
			var data = lines[index].split(',');
			if (flds.length != 3){continue} // May be the wrong data set
			var fld1 = flds[0].split('(')[1];
			var fld2 = flds[1];
			var fld3 = '';
			for (var idx3 = 1;idx3 < data.length;idx3++){
				var sep = ", ";
				if (idx3 == data.length-1){sep = ''}
				fld3 = fld3+data[idx3]+sep;
			}
			if (bomArray.length == 0){
				if (fld3.search('MATERIALS') != -1){flip = true}
			}
			//if (fld3.indexOf('PIECE') == 0){xyPiece = [fld1,fld2]}
			//if (fld3.indexOf('(INS)') == 0){xyIns = [fld1,fld2]}
			fld1 = Math.floor(fld1*100);
			fld2 = Math.floor(fld2*100);
			var newLine = new Array(fld1,fld2,fld3);
			bomArray.push(newLine); // Save [x,y,data] for each input line
			xNums.push(fld1); //Collect starting coords for columns
			yNums.push(fld2); //Collect starting coords for rows
		}
		xNums.sort(function (a,b){return a-b}); // sort column coords
		yNums.sort(function (a,b){return a-b}); // sort row coords

		bomArray.sort(sortTable);
		/ ** for (index = 0;index < bomArray.length;index++){
			application.output('incoming bom '+bomArray[index])
		} * /

		var colsx = [];colsx[0] = [];
		var colsy = [];colsy[0] = [];
		var colIndexx = 0;
		var colIndexy = 0;
		for (index = 0;index < xNums.length;index++){
			if (colsx[colIndexx].indexOf(xNums[index]) == -1){colsx[colIndexx].push(xNums[index])}//save ONLY new origins
			if (colsy[colIndexy].indexOf(yNums[index]) == -1){colsy[colIndexy].push(yNums[index])}
			if (index != bomArray.length-1){
				//application.output('x"'+xNums[index+1]+' x\''+xNums[index]+' y"'+yNums[index+1]+' y\''+yNums[index]);
				var diffx = xNums[index+1]-xNums[index];//difference between reported data start origins
				var diffy = yNums[index+1]-yNums[index];
				if (diffx > 30){colIndexx++;colsx[colIndexx] = []}//separation minimum guess for columns, force a column change
				if (diffy > 10){colIndexy++;colsy[colIndexy] = []}//separation minimum guess for rows
			}
			//application.output('x:'+diffx+',y:'+diffy);		
		}
		//application.output('bom colsx '+colsx);
		//application.output('bom colsy '+colsy);
		
		for (index = 0;index < bomArray.length;index++){//Set row,x, and column,y, indices to an ordinal value
			var line = bomArray[index];
			for (var ix = 0;ix < colsx.length;ix++){
				if (colsx[ix].indexOf(line[0]) != -1){
					bomArray[index][0] = ix;
					break;
				}
			}
			for (var iy = 0;iy < colsy.length;iy++){
				if (colsy[iy].indexOf(line[1]) != -1){
					bomArray[index][1] = iy;
					break;
				}
			}
			//if (application.isInDeveloper()){application.output('bom arr '+bomArray[index])}
		}
		bomArray.sort(sortTable);
		for (index = 0;index < bomArray.length;index++){//flip array if the orientation isn't normal orientation
			if (!drawingX){
				// flip array by x's
				bomArray[index][0] = colIndexx - bomArray[index][0];
			}
			if (!drawingY){
				// flip array by y's
				bomArray[index][1] = colIndexy - bomArray[index][1];
			}
			//application.output('sorted '+cutsArray[index]);
		}
		bomArray.sort(sortTable);
		/ ** if (application.isInDeveloper()){
			for (index = 0;index < bomArray.length;index++){
				application.output(sheet+'--- '+bomArray[index]);
			}
		} */
		/** var start = false;
		var idx1 = 0;
		var isFieldMaterial = false;
		var appendable = false;
		var lastBomIdx = 0;
		while (idx1 < bomArray.length){
			var bomInfo = bomArray[idx1];
			//if (application.isInDeveloper()){application.output(bomInfo)}
			if (bomInfo[2].search('DESCRIPTION') != -1){start = true;idx1++;continue}
			if (!start){idx1++;continue}
			var bom = {};
			for (var key in objsheetbom){bom[key] = objsheetbom[key]}
			bom.sheet = sheet;
			bom.bomfile = bomFile;
			bom.fieldmaterial = isFieldMaterial;
			bom.partnumber = bomArray[idx1++][2];
			if (bomArray[idx1][0] == 1){bom.nsinches = bomArray[idx1++][2]}
			if (bomArray[idx1][0] == 2){bom.quantity = bomArray[idx1++][2]}
			if (bomArray[idx1][0] == 3){bom.description = bomArray[idx1++][2]}
			while (bomArray[idx1] && bomArray[idx1][0] == 3){
				if (bomArray[idx1][2].search('FIELD') != -1){isFieldMaterial = true;idx1++;continue}
				if (bomArray[idx1][2].search('SHOP') != -1){isFieldMaterial = false;idx1++}
				//var ref = _arraybom[lastBomIdx];
				bom.description = bom.description+', '+bomArray[idx1++][2];
			}
			
			lastBomIdx = _arraybom.length;
			bom.description = bom.description.replace(/ +/g,' '); */
			//if (bom.description.search('MATERIAL') != -1){continue}
			//if (application.isInDeveloper()){application.output(bom)}
			//complete = true;
		
	}
	if (application.isInDeveloper()){	
		application.output('BOM LIST');
		for (var idx = 0;idx < drawingsArray.length;idx++){
			var sheet = drawingsArray[idx];
			application.output(sheet);
			for (idx1 = 0;idx1 < _arraybom[sheet].length;idx1++){
				application.output(_arraybom[sheet][idx1]);
			}
		}
	}
}
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C72B1DE3-7C57-4F03-8AC1-75FE3A4166B5"}
 */
function getSpoolInfo(event){
	var longest = 0;
	var dir = orbDirectory;
	_arraypcmks = new Array();
	if (application.isInDeveloper()){application.output('drawings array '+drawingsArray.length)}
	for (var idx = 0;idx < drawingsArray.length;idx++){
		var sheet = drawingsArray[idx];
		var fileName = drawingsArray[idx]+prefSpecSpool.replace('*','');
		var fullPath = dir+'\\'+fileName;
		/** @type plugins.file.JSFile */
		var file = plugins.file.readTXTFile(fullPath);
		var lines = file.split('\n');
		//application.output('inside'+lines.length);
		for (var idx2 = 0;idx2 < lines.length;idx2++){
			var spoolStuff = {};
			for (var key in objspoolinfo){spoolStuff[key] = objspoolinfo[key]}
			spoolStuff.spoolfile = fileName;
			spoolStuff.piecemark = lines[idx2].split(',')[1];
			var nameLength = spoolStuff.piecemark.length;
			longest = (longest > nameLength) ? longest : nameLength;
			spoolStuff.sheet = sheet;
			_arraypcmks.push(spoolStuff);
			//application.output(spoolStuff)
		}
	}
	forms.import_performance_setting.vLongestPM = longest;
	getJobName(event);
	if (application.isInDeveloper()){
		//application.output(spoolArray);
		//application.output(spoolArray[0]);
		for (idx = 0;idx < _arraypcmks.length;idx++){
			//application.output('idx '+idx2)
			application.output(_arraypcmks[idx]);
			//application.output('tst'+spoolArray[idx][0]+', '+spoolArray[idx][1]+', '+spoolArray[idx][2]);
		}
	}
}
/**
 * @param event
 *
 * @properties={typeid:24,uuid:"3F4152D9-6E44-4D9E-8FB9-43C22A317181"}
 * @AllowToRunInFind
 */
function getJobName(event){
	getDrawingsList(event);
	var dir = orbDirectory;
	var sheet = drawingsArray[0];
	application.output(dir+drawingsArray[idx]+prefSpecBorder.replace('*',''))
	/** @type plugins.file.JSFile */
	var file = plugins.file.readTXTFile(dir+sheet+prefSpecBorder.replace('*',''));
	var lines = file.split('\n');
	var idx = 0;
	
	while (idx++ < lines.length){
		var line = lines[idx].split(',');
		if (line[1].search('HYDRO') != -1){
			scopes.jobs.importJob.name = lines[++idx].split(',')[1];
			application.output('job name '+scopes.jobs.importJob.name);
			return;
		}
	}
}