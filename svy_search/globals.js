/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D2EB773D-E135-459F-A4B2-C65D7B676C86"}
 */
var svy_sea_version = '4.0.0';

/**
 * Storing some information of the search, used in svy_sea_search
 *
 * @properties={typeid:35,uuid:"690327fd-3081-4c50-a0b2-3a5ddaf50c54",variableType:-4}
 */
var svy_sea_criteria;

/**
 * Used to store foundset properties to be able to restore the foundset
 * @type {{form:String,sql:String,parameters:Array,index:Number}}
 *
 * @properties={typeid:35,uuid:"0db28a23-becd-4ebf-babb-5d3450679c57",variableType:-4}
 */
var svy_sea_foundset;

/**
 * @type {String}
 *
 * To store what the main form is
 *
 * @properties={typeid:35,uuid:"e169485a-d95c-4f52-aa99-ca31bf46b63e"}
 */
var svy_sea_mainForm = 'main';

/**
 * @type {String}
 *
 * The mode of the search (DATA/FIND/FIND REDUCE/FIND EXTEND)
 *
 * @properties={typeid:35,uuid:"568e8cc9-cfa7-44d9-a19d-19c0bac25065"}
 */
var svy_sea_mode = '';

/**
 * @type {String}
 *
 * The form that is searched on
 *
 * @properties={typeid:35,uuid:"0b47e404-7d5a-4781-a307-87c4206a89a2"}
 */
var svy_sea_searchForm = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AB4994F5-9EA0-4280-B815-70A5FA5A33EC"}
 */
var svy_sea_advancedSearchId = null;

/**
 * @type {String}
 * 
 * @properties={typeid:35,uuid:"564FDBF8-0869-4DB5-AB06-D0233DCD3395"}
 */
var svy_sea_CONST_NULL = null;

/**
 *	To cancel a search end reset the foundset
 *
 * @author Sanneke Aleman
 * @since 2007-11-09
 * @param {Boolean} [_clear] clear last results
 * @param {Boolean} [_reduce] reduce search
 * @param {JSEvent} [_event] the event that triggered the action
 * @param {String} [_form]  the form name
 * @param {Boolean}	[_noSearch] (the search is not don jet)
 * @return  none
 *
 * @properties={typeid:24,uuid:"e530583b-c5dd-433a-a0fe-56f7f50f134d"}
 * @AllowToRunInFind
 */
function svy_sea_cancelSearch(_clear, _reduce, _event, _form, _noSearch) {
	if (!_form) {
		_form = globals.svy_sea_searchForm
	}

	if (_noSearch != 1) {
		forms[_form].controller.search();
		forms[globals.svy_sea_mainForm].controller.search();
	}

	globals.svy_sea_foundsetRestore();
	globals.svy_sea_mode = 'DATA';
	globals.nav.tabSearchForms = null
	forms[globals.svy_sea_searchForm].updateUI('browse')
}

/**
 *	To extend a find
 *
 * @author Sanneke Aleman
 * @since 2007-11-09
 * @return  none
 *
 * @properties={typeid:24,uuid:"fff529f2-8e6d-4eab-a88f-83b10ff190b3"}
 */
function svy_sea_extend_find() {
	globals.svy_sea_find(2)
}

/**
 *	 To go into find mode (used by navigation framework)
 *
 * @author Sanneke Aleman
 * @since 2007-11-09
 * @param {Number} [_mode]  the mode (1,2,3 )
 * @param {String} [_form]  the form name
 * @return  none
 *
 * @properties={typeid:24,uuid:"a03cf790-f44b-4c77-b45f-e6db9072e513"}
 */
function svy_sea_find(_mode, _form) {	
	if (!_form) {
		_form = globals.svy_sea_searchForm
	}
	forms[_form].updateUI('find')

	if (_mode == null) {
		globals.svy_sea_mode = 'FIND'
		globals.svy_sea_foundsetSave(_form);
	} else if (_mode == 1) {
		globals.svy_sea_mode = 'FIND REDUCE'
		globals.svy_sea_foundsetSave(_form);
	} else if (_mode == 2) {
		globals.svy_sea_mode = 'FIND EXTEND'
		globals.svy_sea_foundsetSave(_form);
	} else if (_mode == 3) // search again
	{
		globals.svy_sea_mode = 'FIND'
	}

	forms[globals.svy_sea_mainForm].controller.find()
	forms[_form].controller.find()
	forms[_form].controller.focusFirstField()
}

/**
 *	To restore a saved foundset in case you enter a find and the user wants to cancel or when navigating from a list to detail forms
 * 		globals.svy_sea_foundset should be an object containing: form, sql, parameters and index
 *
 * @author Sanneke Aleman
 * @since 2007-11-09
 * @return  none
 *
 * @properties={typeid:24,uuid:"847973df-8750-41d3-a199-fb1f3618f82e"}
 * @AllowToRunInFind
 */
function svy_sea_foundsetRestore() {
	if (globals.svy_sea_foundset.form == globals.nav_currentPanel1Form) {
		// 1 load all records
		forms[globals.svy_sea_foundset.form].foundset.loadAllRecords()

		/** @type {{sql:String,parameters:Array,index:Number}} */
		var _fsObj = globals.svy_sea_foundset
		
		//using temporary tables, sql can not be placed back
		if (utils.stringPatternCount(_fsObj.sql, '#TEMP') > 0) return

		//2 load records on to form
		forms[globals.svy_sea_foundset.form].foundset.loadRecords(_fsObj.sql, _fsObj.parameters);

		//3 set selected record.
		forms[globals.svy_sea_foundset.form].foundset.setSelectedIndex(_fsObj.index)
	} else {
		forms[globals.svy_sea_searchForm].controller.find();
		forms[globals.svy_sea_searchForm].controller.search();
	}

}

/**
 *	To save a foundset into a object in when entering a find and the user wants to cancel or when navigating from a list to detail forms
 *
 * @author Sanneke Aleman
 * @since 2007-11-09
 * @param {String} [_form]  the form name
 * @return  none
 *
 * @properties={typeid:24,uuid:"e7932072-91b8-414b-b3b5-ecb6d8a0353c"}
 */
function svy_sea_foundsetSave(_form) {
	if (!_form) {
		_form = globals.svy_sea_searchForm
	}

	globals.svy_sea_foundset = new Object()

	// 1 save the form you like to restore the foundset of
	globals.svy_sea_foundset.form = _form

	// 2 save the sql and parameters - also relevant for navigating to detail
	globals.svy_sea_foundset.sql = databaseManager.getSQL(forms[globals.svy_sea_foundset.form].foundset)
	globals.svy_sea_foundset.parameters = databaseManager.getSQLParameters(forms[globals.svy_sea_foundset.form].foundset)

	// 3 save the index - also relevant for navigating to detail
	globals.svy_sea_foundset.index = forms[globals.svy_sea_foundset.form].controller.getSelectedIndex()
}

/**
 *	To reduce a find
 *
 * @author Sanneke Aleman
 * @since 2007-11-09
 * @return  none
 *
 * @properties={typeid:24,uuid:"cda7773e-0a91-4dfa-99b5-2fa46a7c123a"}
 */
function svy_sea_reduce_find() {
	globals.svy_sea_find(1)
}

/**
 *	To restore a saved foundset in case you enter a find and the user wants to cancel or when navigating from a list to detail forms
 *
 * @author Sanneke Aleman
 * @since 2007-11-09
 * @param {UUID} _searchCriteriaID ID of the search you want to reset
 * @return  none
 *
 * @properties={typeid:24,uuid:"97066425-4e8c-424a-b962-470c01a40e8d"}
 * @AllowToRunInFind
 */
function svy_sea_restoreSearch(_searchCriteriaID) {
	globals.nav_searchCriteriaID = _searchCriteriaID;
	
	globals.nav_program_id =  _to_search_criteria.program_id
	
	var _program = _to_nav_program$program_id.program_name
	globals.nav.program[_program].active_search = i18n.getI18NMessage('svy.fr.lbl.regular_search').toLowerCase() + ': ' + _to_search_criteria.name;
	
	globals.nav.program[_program].search_type = 'R';
	globals.nav.program[_program].search_id = _searchCriteriaID;

	// load records on to form
	forms[globals.nav_currentPanel1Form].foundset.loadRecords(_to_search_criteria.sql_statement, _to_search_criteria.parameters);

	if (forms[_program + '_tab']) {
		forms[_program + '_tab'].controller.loadRecords(_to_search_criteria.sql_statement, _to_search_criteria.parameters);
	}
}

/**
 * To restore a saved search
 * 
 * @param {Number} _itemIndex the index of the menu item
 * @param {Number} _parentItemIndex the index of the parent menu
 * @param {Boolean} _isSelected flag if the item is selected
 * @param {String} _parentMenuText the text of the parent menu item
 * @param {String} _menuText the text of the menu item
 * @param {String|UUID} _searchCriteriaID ID of the search record
 * @param {Boolean} [_advancedSearch] flag to trigger the regular or advanced search
 * @return none
 *
 * @properties={typeid:24,uuid:"655213D9-A966-46CE-9779-DFCA998F6C8B"}
 */
function svy_sea_restoreSearchFromPopmenu(_itemIndex, _parentItemIndex, _isSelected, _parentMenuText, _menuText, _searchCriteriaID, _advancedSearch) {
	if (!_advancedSearch) {
		svy_sea_restoreSearch(_searchCriteriaID);
	} else {
		svy_sea_restoreAdvancedSearch(_searchCriteriaID);
	}
}

/**
 *	Shows a dialog to save a search
 *
 * @author Sanneke Aleman
 * @since 2007-11-09
 * @return  none
 *
 * @properties={typeid:24,uuid:"1b7c27d2-c456-4325-bd24-50ab78d69205"}
 */
function svy_sea_saveSearch() {
	globals.DIALOGS.showFormInModalDialog(forms.svy_sea_search_new_search)
}

/**
 *	To search user friendly by setting the # % for the user
 *
 * @author Sanneke Aleman
 * @since 2007-11-09
 * @param {Boolean} [clear] clear last results
 * @param {Boolean} [reduce] reduce search
 * @param {JSEvent} [event] the event that triggered the action
 * @param {String} [form] name of the form
 * @return  none
 *
 * @properties={typeid:24,uuid:"5f6b5475-e019-4ffd-bf13-9b8f5d042d9f"}
 * @AllowToRunInFind
 */
function svy_sea_search(clear, reduce, event, form) {
	if (!form) {
		// this script assumes that you work with a main form, with on it a tab to search in.
		form = globals.svy_sea_searchForm
	}

	var i
	var j
	/** @type {String} */
	var dataProv
	var dataValue,  column,  relation, relObj, dataProvName
	globals.svy_sea_criteria = new Object();
	
	var searchColumn = new Object()
	
	/** @type {Array<String>} */
	var formNames = globals['svy_nav_getAllVisibleFormNames'](true);
	var frForms = forms['ly_' + _to_nav_layout.name].getConfiguredFrameworkForms();
	for (var l = 0; l < formNames.length; l++) {
		if (!forms[formNames[l]].foundset.isInFind()) {
			continue;
		}
		var table = databaseManager.getTable(forms[formNames[l]].foundset);
		var dataProviders = solutionModel.getForm(formNames[l]).getFields(true)
		for (var m = 0; m < dataProviders.length; m++) {
			if(forms[formNames[l]][dataProviders[m].dataProviderID])
			{
				dataProv = dataProviders[m].dataProviderID
				dataValue = forms[formNames[l]][dataProv];
				
				if(utils.stringPatternCount(dataProv,'.') > 0) //related colum, get the table from the relation
				{
					relation = dataProv.match(/([\w$]+)\.\w+$/)[1]
					relObj = solutionModel.getRelation(relation)
					table = databaseManager.getTable(relObj.foreignDataSource)
					dataProvName = dataProv.match(/(\w+)$/)[1]
				}
				else
				{
					table = databaseManager.getTable(forms[formNames[l]].foundset);
					dataProvName = dataProv
				}
				
				if(!searchColumn[table]) searchColumn[table] = new Object()
				
				if(searchColumn[table][dataProvName])
				{
					continue //field is already in the search object
				}
				else
				{
					searchColumn[table][dataProvName] = true
				}
				
				column = table.getColumn(dataProvName)
				if (dataValue && column) {
					globals.svy_sea_criteria[dataProv] = new Object();		
					globals.svy_sea_criteria[dataProv].criteria = dataValue;
					globals.svy_sea_criteria[dataProv].type = column.getTypeAsString()
					globals.svy_sea_criteria[dataProv].form = formNames[l]
					globals.svy_sea_criteria[dataProv].relation = ''
					if(formNames[l] != form && forms[formNames[l]].foundset != forms[form].foundset) //not the main search form, find relation between them, if they have the same foundset it is not needed
					{
						globals.svy_sea_criteria[dataProv].relation = getRelationsToFrameworkForm(formNames[l], frForms, '')
					}
				}
			}
		}
	}
	
	
	function getRelationsToFrameworkForm(formName, frFormA, relationFromMain)
	{
		if(frFormA && frFormA.indexOf(formName) == -1) //not a framework form
		{
			var context = forms[formName].controller.getFormContext()
			var prev = context.getMaxRowIndex() - 1
			var levelUpForm = context.getValue(prev, 2);
			
			var tabs = solutionModel.getForm(levelUpForm).getTabPanel(context.getValue(prev, 3)).getTabs();
			for (var n = 0; n < tabs.length; n++) {
				if (tabs[n].relationName) {
					relationFromMain = tabs[n].relationName + '.' + relationFromMain;
					getRelationsToFrameworkForm(levelUpForm, tabs[n].containsForm.name, relationFromMain);
				}
			}
		}
		else if(formName != form)
		{
			return getRelationToMain(formName, frFormA, relationFromMain, null)
		}
		
		return relationFromMain
		
	}
	
	function getRelationToMain(formName, frFormA, relationFromMain, tabId)
	{
	
		/** @type {JSFoundSet<db:/svy_framework/nav_tab>} */
		var fsTab = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_tab')
		
		if(tabId)
		{
			fsTab.addFoundSetFilterParam('tab_id','=',tabId)
		}
		else
		{
			var _program_id = globals.nav.program[forms[formName].getProgram()].program_id
			fsTab.addFoundSetFilterParam('layout_id','=',globals.nav_layout_id)
			fsTab.addFoundSetFilterParam('program_id','=',_program_id)
		}
		
		fsTab.loadAllRecords()
		
		if(fsTab.getSize())
		{
			if(fsTab.tab_relation)
			{
				relationFromMain = fsTab.tab_relation + '.'+relationFromMain
			}
			
			if(databaseManager.hasRecords(fsTab.nav_tab$to_parent) && fsTab.nav_tab$to_parent.panel_id != 1)
			{
				getRelationToMain(null,frFormA,relationFromMain,fsTab.parent_tab_id)
			}
		}
		
		
		return relationFromMain
	}
	
	/*
	 * Perform a search for all criteria stored in globals.svy_sea_criteria
	 * only for the first search that takes place, the existing foundset needs to be disregarded
	 * This is done by specifying true for the first param of controller.search([clearLastResults],[reduceSearch])
	 * Since the find/search logic works in loops, the "_newFoundset" variable is declared as true outside of the loop
	 * and will be to false after each search inside the loop
	 */

	var newFoundset = true;
	var searchPreformed = false;
	var reduceFind = true;

	if (globals.svy_sea_mode == 'FIND') {

	} else if (globals.svy_sea_mode == 'FIND REDUCE') {
		newFoundset = false;
	} else if (globals.svy_sea_mode == 'FIND EXTEND') {
		newFoundset = false;
		reduceFind = false;
	}

	for (i in globals.svy_sea_criteria) {
		//format can already be set
		if (globals.svy_sea_criteria[i].type == 'DATETIME' && (!/\|/.test(globals.svy_sea_criteria[i].criteria))) {
			// For datetime the correct format needs to be added.

			var format = "ddMMyyyy";
			var time = false;
			var match = globals.svy_sea_criteria[i].criteria.match(/[\-\.\/]/);
			if (match) {
				var delimiter = match[0];
				/** @type {Array<String>} */
				var dateAr = globals.svy_sea_criteria[i].criteria.split(delimiter);

				if (/:/.test(dateAr[2])) {
					time = true;
					var _timeComp = dateAr[2].replace(/^[\s\w\-\.\/]*\s/, "");
					var _timeAr = _timeComp.split(":");
					dateAr[2] = dateAr[2].replace(/(\s[\w\:]*)$/, "");
					for (j = 0; j < _timeAr.length; j++) {
						dateAr.push(_timeAr[j]);
					}
				}

				format = dateAr[0].replace(/[^0-9]/g, "").replace(/\d/g, "d") + delimiter +
				dateAr[1].replace(/\d/g, "M") + delimiter +
				dateAr[2].replace(/\d/g, "y");

				if (dateAr.length > 3) format += " " + dateAr[3].replace(/\d/g, "H");
				if (dateAr.length > 4) format += ":" + dateAr[4].replace(/\d/g, "m");
				if (dateAr.length > 5) format += ":" + dateAr[5].replace(/\d/g, "s");
				if (dateAr.length > 6) format += ":" + dateAr[6].replace(/\d/g, "S");

				if (/\.\.\./.test(format)) {
					format = format.substring(0, format.search(/\.\.\./));
				}
			}

			forms[form].controller.find();
			forms[form][globals.svy_sea_criteria[i].relation + i] = (time ? "" : "#") + globals.svy_sea_criteria[i].criteria + "|" + format;
			forms[form].controller.search(newFoundset, reduceFind);
			if (globals.svy_sea_mode == 'FIND') {
				newFoundset = false;
			}
			searchPreformed = true;

		} else if (utils.stringPatternCount(globals.svy_sea_criteria[i].criteria, ' ... ') == 1 || globals.svy_sea_criteria[i].type != 'TEXT')
		// For other non Text dataproviders, the search can be performed on the unmodified search criteria
		{
			forms[form].controller.find();
			forms[form][globals.svy_sea_criteria[i].relation + i] = globals.svy_sea_criteria[i].criteria;
			forms[form].controller.search(newFoundset, reduceFind);
			if (globals.svy_sea_mode == 'FIND') {
				newFoundset = false;
			}
			searchPreformed = true;
		}
		/*
		 * For all Text dataproviders, the searchcriteria needs to be modified
		 * A '#' needs to be put in front of the criteria to make it case insensitive
		 * Each criteria needs be searched for twice: as start of the field and as start of a word in the field
		 * If multiple words are specified in the criteria, they need to be handled as separate AND criteria for the same field
		 */ else if (globals.svy_sea_criteria[i].type == 'TEXT') {

			var criteria = globals.svy_sea_criteria[i].criteria
				// filter enters
			if (utils.stringPatternCount(criteria, '\n') > 0) {
				criteria = utils.stringReplace(criteria, '\n', '')
			}
			// filter tabs
			if (utils.stringPatternCount(criteria, '\r') > 0) {
				criteria = utils.stringReplace(criteria, '\r', '')
			}
			// filter ' ... ' to '...'
			if (utils.stringPatternCount(criteria, ' ... ') == 1) {
				criteria = utils.stringReplace(criteria, ' ... ', '...')
			}
			// UUID
			if (criteria instanceof UUID) {
				criteria = criteria.toString();
			}
			var matchWholeWord = false;
			var matchExact = false;
			if (utils.stringLeft(criteria, 2) == "==") {
				matchExact = true;
				criteria = utils.stringRight(criteria,criteria.length-2);
			} else if (utils.stringLeft(criteria, 1) == "=") {
				matchWholeWord = true;
				criteria = utils.stringRight(criteria,criteria.length-1);
			}
			criteria = criteria.split(' ');
			if (criteria) // value is empty you don't want to search on %
			{
				for (j = 0; j < criteria.length; j++) {
					forms[form].controller.find();
					if (matchWholeWord) {
						// match whole word
						forms[form][globals.svy_sea_criteria[i].relation + i] = "#% " + criteria[j] + " %";
						forms[form].controller.newRecord();
						forms[form][globals.svy_sea_criteria[i].relation + i] = "#" + criteria[j] + " %";
						forms[form].controller.newRecord();
						forms[form][globals.svy_sea_criteria[i].relation + i] = "#% " + criteria[j];
					} else if (matchExact) {
						// match entire field
						forms[form][globals.svy_sea_criteria[i].relation + i] = '#' + criteria[j];
					} else if(scopes.svyProperties.getPropertyValue("search_begin_fields")){ //only search on the beginning of strings
						forms[form][globals.svy_sea_criteria[i].relation + i] = '#' + criteria[j] + '%';
					}
					else
					{
						// searches for beginning of words the FileMaker way			
						forms[form][globals.svy_sea_criteria[i].relation + i] = '#' + criteria[j] + '%';
						forms[form].controller.newRecord() //The newRecord will make this into an OR search
						forms[form][globals.svy_sea_criteria[i].relation + i] = '#% ' + criteria[j] + '%';
					}
					forms[form].controller.search(newFoundset, reduceFind);
					if (globals.svy_sea_mode == 'FIND') {
						newFoundset = false;
					}
					searchPreformed = true;
				}
			}
		}

	}

	//If one search was performed, this variable would be true. Apparently, there were no search criteria
	if (!searchPreformed) {
		forms[form].controller.search(newFoundset, true);
	}

	//If the resulted foundset is empty: Ask user to Modify existing searchcriteria or revert back to previous foundset
	if (!utils.hasRecords(forms[form].foundset)) {
		// show dialog with the option to search again
		var yes = i18n.getI18NMessage('svy.fr.lbl.yes')
		var no = i18n.getI18NMessage('svy.fr.lbl.no')
		var answer = globals.DIALOGS.showQuestionDialog('', i18n.getI18NMessage('svy.fr.dlg.search_again'), yes, no);
		if (answer == yes) {
			globals.svy_sea_search_again(form)
		} else {
			globals.svy_sea_cancelSearch()
		}

		return
	} else {
		if (globals.nav.activeView == 1) {
			globals.nav.program[globals.nav_program_name].active_search = i18n.getI18NMessage('svy.fr.lbl.regular_search').toLowerCase();
		}
		
		if (forms[globals.svy_sea_mainForm].foundset.isInFind() == true) {
			forms[globals.svy_sea_mainForm].controller.search();
			forms[form].syncFoundsets(forms[form].foundset)
		}
	}
	// end items

	globals.nav.tabSearchForms = null
	forms[form].updateUI('browse')

	if (forms[form].onPostSearch) {
		forms[form].onPostSearch()
	}

}

/**
 *	If a search has no search result and you want to search again, wil put your search criterea back, only to use after svy_sea_search
 *
 * @author Sanneke Aleman
 * @since 2007-11-09
 * @param {String} _form name of the form
 * @return  none
 *
 * @properties={typeid:24,uuid:"9e262547-d30c-46d6-b224-3c6a0c905afd"}
 * @AllowToRunInFind
 */
function svy_sea_search_again(_form) {
	//Set form in findmode and refill searchcriteria //controller.search()
	forms[globals.svy_sea_mainForm].controller.find()
	forms[_form].controller.find()
	forms[_form].controller.focusFirstField()
	
	if (globals.svy_sea_criteria) {
		for (var i in globals.svy_sea_criteria) {
			forms[_form][globals.svy_sea_criteria[i].relation + i] = globals.svy_sea_criteria[i].criteria;
		}
	}
}

/**
 *	To let the user delete searches saved by user
 *
 * @author Sanneke Aleman
 * @since 2009-09-09
 * @return  none
 *
 * @properties={typeid:24,uuid:"d04eb50c-fc35-45cc-bba7-611590a6bf72"}
 */
function svy_sea_deleteSearch() {
	
	globals.nav_program_id = _to_nav_program.program_id
	
	forms.svy_sea_deletePopup.controller.loadRecords(_to_search_criteria$user_id$organization_id$search_form_name)
	globals.DIALOGS.showFormInModalDialog(forms.svy_sea_deletePopup, -1, -1, 258, 258, 'i18n:svy.fr.lbl.delete_search')
	

}

/**
 *	To restore a saved advanced search
 *
 * @author Vincent Schuurhof
 * @since 2011-05-24
 * @param {UUID} _searchCriteriaID ID of the search you want to reset
 * @return none
 *  
 * @properties={typeid:24,uuid:"4CE22D1C-F0CC-4F66-AD0C-01AF75CB5158"}
 * @AllowToRunInFind
 */
function svy_sea_restoreAdvancedSearch(_searchCriteriaID) {
	/*globals.nav_searchCriteriaID = _searchCriteriaID;
	
	if (databaseManager.hasRecords(_to_nav_advanced_search.nav_advanced_search_to_nav_advanced_search_criteria)) {
		globals.nav.program[globals.nav_program_name].active_search = globals.nav.program[globals.nav_program_name].active_search = i18n.getI18NMessage('svy.fr.lbl.advanced_search').toLowerCase() + ': ' + _to_nav_advanced_search.name;
		
		globals.nav.program[globals.nav_program_name].search_type = 'A';
		globals.nav.program[globals.nav_program_name].search_id = _searchCriteriaID;

		var _searchFoundset = forms[globals.nav_currentPanel1Form].foundset.duplicateFoundSet();
		var _searchCriteria = _to_nav_advanced_search.nav_advanced_search_to_nav_advanced_search_criteria;
		
		_searchFoundset.find();
		for (var i = 1; i <= _searchCriteria.getSize(); i++) {
			_searchCriteria.setSelectedIndex(i);
			var _filterPrefix = '';
			var _filterValue = '';
			var _filterSuffix = '';
			
			if (_searchCriteria.filter_value) {
				_filterValue = _searchCriteria.filter_value;
				switch (_searchCriteria.filter_operator) {
					case '=':
						break;
					case '<':
					case '<=':
					case '>':
					case '>=':
						_filterPrefix = _searchCriteria.filter_operator;
						break;
					case 'CONTAINS':
						_filterPrefix = '%';
						_filterSuffix = '%';
						break;
				}
				
				if (_searchCriteria.date_format) {
					_filterValue += '|' + _searchCriteria.date_format;
				}
			} else {
				_filterValue = '^=';
			}
			
			if (_to_nav_advanced_search.operator == 'OR') {
				_searchFoundset.newRecord();
			}
			_searchFoundset[_searchCriteria.field_name] = '#' + _filterPrefix + _filterValue + _filterSuffix;
		}
		
		_searchFoundset.search();		
		forms[globals.nav_currentPanel1Form].foundset.loadRecords(_searchFoundset);
		
		if (forms[globals.nav_program_name + '_tab']) {
			forms[globals.nav_program_name + '_tab'].controller.loadRecords(_searchFoundset);
		}
	} */

	globals.nav_searchCriteriaID = _searchCriteriaID;
	
	
	if (databaseManager.hasRecords(_to_nav_advanced_search.nav_advanced_search_to_nav_advanced_search_criteria)) {
		var _form = _to_nav_advanced_search.form_name
		
		var _toolbarForm = forms[_form].getToolbarFormName()
		var _program = forms[_toolbarForm].vProgram
		
		globals.nav.program[_program].active_search = globals.nav.program[_program].active_search = i18n.getI18NMessage('svy.fr.lbl.advanced_search').toLowerCase() + ': ' + _to_nav_advanced_search.name;
		globals.nav.program[_program].search_type = 'A';
		globals.nav.program[_program].search_id = _searchCriteriaID;

		
		// Loop through the search criteria records
		if (!databaseManager.hasRecords(_to_nav_advanced_search) || !databaseManager.hasRecords(_to_nav_advanced_search.nav_advanced_search_to_nav_advanced_search_criteria))
			return;
		
		var _criteriaFs = _to_nav_advanced_search.nav_advanced_search_to_nav_advanced_search_criteria.duplicateFoundSet();
		_criteriaFs.loadAllRecords();
		_criteriaFs.sort('ordering asc');
		
		var _sortOrder = forms[_form].foundset.getCurrentSort();
		var _dataSource = forms[_form].controller.getDataSource().split('/');	// Data source
		var _tableName  = _dataSource[2];															// Table name on which query will be fired
		var _tblObj = databaseManager.getTable(_dataSource[1] , _dataSource[2])						// JSTable object
		var _pkColumns = _tblObj.getRowIdentifierColumnNames();
		var _sqlQuery = '';																			// SQL query for the criteria
		var _previousOrder = '';																	// Ordering info for the previous record
		var _currentOrder = null;																	// Ordering info for current record
		var _args = new Array();																	// Arguments for the sql query
		var i, j, k = 0;																			// Loop variables
		var _openedBraces = 0;
		var _closedBraces = 0;	
		
		var relArr = new Array();																	// Array to keep track of all the unique relations used in criteria
		
		// get the Primary key fields to the sql
		_sqlQuery = 'SELECT ';
		for (i = 0; i < _pkColumns.length; i++) {
			_sqlQuery += i > 0 ? ', ' : '';
			_sqlQuery += _tableName + '.' + _pkColumns[i];
		}
		_sqlQuery += ' FROM ' + _tableName + ' ';
		
		for (i = 1; i < _criteriaFs.getSize() ; i++) {												// Loop through the criterias
			var _rec = _criteriaFs.getRecord(i);
			var _field = _rec.field_name;
			
			if (_field && _field.lastIndexOf('.') > -1) {											// Related field found
				var rels = _field.split('.');
				for (j = 0; j < rels.length - 1 ; j++) {
					var flag = true;
					for (k = 0 ; k < relArr.length; k++) {
						if (relArr[k] == rels[j])
							flag = false
					}
					
					if (flag) {					
						relArr.push(rels[j]);														// Update relation array
						var rel = rels[j];
						var jsRel = solutionModel.getRelation(rel);
						var primary = jsRel.primaryDataSource;
						var foreign = jsRel.foreignDataSource;
						
						_sqlQuery += jsRel.joinType == JSRelation.INNER_JOIN ? 
									'INNER JOIN ' : 'LEFT OUTER JOIN ';								// Set join type in relation
						_sqlQuery += foreign.split('/')[2] + ' ';
						_sqlQuery += 'ON ';
						var relItems = jsRel.getRelationItems();
						
						for (k = 0 ; k< relItems.length; k++) {
							if (k > 0)
								_sqlQuery += 'AND ';												// Add new join criteria
							_sqlQuery += primary.split('/')[2] + '.' + relItems[k].primaryDataProviderID + ' ';	// Set Join criterias
							_sqlQuery += relItems[k].operator  + ' ';
							_sqlQuery += foreign.split('/')[2] + '.' + relItems[k].foreignColumnName  + ' ';
						}
					}
				}
			}
		}		
		
		var _sqlCondition = '';		
		for (i = 1; i <= _criteriaFs.getSize() ; i++) {												// Loop to start adding where conditions
			_rec = _criteriaFs.getRecord(i);			
			var _colObj = _tblObj.getColumn(_rec.field_name);
			
			if (!_rec.ordering) {																	// Invalid Search
				globals.DIALOGS.showInfoDialog('Invalid data', 
					'Records created before implementation of extended advanced search.', 'OK');
				return;
			}
					
			if (_rec.is_group ) {																	// Skip the group having no child record
				var _sql = "SELECT COUNT(*) from nav_advanced_search_criteria WHERE advanced_Search_id = ? " + 
						" AND ordering LIKE ? AND ordering != ? AND is_group = ?";
				var ds = databaseManager.getDataSetByQuery(globals.nav_db_framework, _sql, 
						[_rec.advanced_search_id.toString(), _rec.ordering + '%', _rec.ordering, 0], 1);				
				
				if (ds.getValue(1,1) == 0) {
					_currentOrder = _rec.ordering;
					
					if (i == _criteriaFs.getSize() && _currentOrder.split('.').length > 1) {		// When group is the last record, we might need to close some braces
					
						for (j = _closedBraces; j < _openedBraces ; j++) {
							_sqlCondition += ')';	
						}
						_closedBraces = _openedBraces;
					}
					else {
						for (j = 1; j <= (_previousOrder.split('.').length - _currentOrder.split('.').length) ; j++) {
							_sqlCondition += ')';_closedBraces++;
						}
					}
										
					_previousOrder = _rec.ordering;
					continue;					
				}
			}
			
			if (!_previousOrder && _rec.is_group)
				_previousOrder = _rec.ordering;
			_currentOrder = _rec.ordering;
			
			// Closing braces in query
			if (_previousOrder && _currentOrder.split('.').length < _previousOrder.split('.').length && i > 1 
					&& _previousOrder != _currentOrder) {
				for (j = 1; j <= (_previousOrder.split('.').length - _currentOrder.split('.').length) ; j++) {
					_sqlCondition += ')';	_closedBraces++;
				}
			}
			
			if (_rec.is_group) {																	// When group Encountered
				if (_rec.operator  && _sqlCondition != '') 
					_sqlCondition += ' ' + _rec.operator + ' ';
				_sqlCondition += '(';_openedBraces++;
			}			
			else {																					// Criteria encountered
					
				if (_rec.field_name.lastIndexOf('.') == -1)	{										// Set table object, table name, field name for non related fields
					_tblObj = databaseManager.getTable(_dataSource[1] , _dataSource[2])	;
					_tableName  = _dataSource[2];
					_colObj = _tblObj.getColumn(_rec.field_name);
					_field = _rec.field_name;
				}
				else {																				// Set table object, table name, field name for related fields
					_field = _rec.field_name.split('.')[_rec.field_name.split('.').length - 1];
					var _rel = _rec.field_name.split('.')[_rec.field_name.split('.').length - 2]
					_tableName = solutionModel.getRelation(_rel).foreignDataSource.split('/')[2];
					_tblObj = databaseManager.getTable(solutionModel.getRelation(_rel).foreignDataSource.split('/')[1], _tableName);					
					_colObj = _tblObj.getColumn(_rec.field_name.split('.')[_rec.field_name.split('.').length - 1]);
				}
				if (_rec.operator)																	// Check for operator OR/AND
					_sqlCondition += ' ' + _rec.operator + ' ';
				
				if (_rec.field_name)																// Check for Field name
					_sqlCondition += _tableName + '.' + _field + ' ';					
				
				if(_rec.filter_operator && _rec.filter_operator != 'CONTAINS') {					// Check for Filter Operator	
					_sqlCondition += _rec.filter_operator + ' ? ' ;
					if(_colObj.getType() == JSColumn.INTEGER || _colObj.getType() == JSColumn.NUMBER)// For integers and Numbers the argument should be a number
						_args.push(utils.stringToNumber(_rec.filter_value));
					else if(_colObj.getType() == JSColumn.DATETIME)
						_args.push(utils.parseDate(_rec.filter_value, _rec.date_format));
					else
						_args.push(_rec.filter_value);												// Character parameter
				}				
				else if(_rec.filter_operator && _rec.filter_operator == 'CONTAINS') {										// For CONTAINS use LIKE keyword
					_sqlCondition += 'LIKE ? ';
					_args.push('%' + _rec.filter_value + '%');
				}
				else
				{}
			}	
			
			if (i == _criteriaFs.getSize() && _currentOrder.split('.').length > 1) {
				for (j = 1; j < (_currentOrder.split('.').length) ; j++) {
					_sqlCondition += ')';_closedBraces++;				
				}
			}
			
			_previousOrder = _rec.ordering;
		}
		
		if (_sqlCondition)
			_sqlQuery += 'WHERE ' + _sqlCondition;													// Add WHERE clause to query
			
		if (_sortOrder) {																			// Add sort order
			_sqlQuery += ' ORDER BY ' + _sortOrder;	
		}
		
		application.output(_sqlQuery+":"+_args);
		
		try {
			
			var _ds = databaseManager.getDataSetByQuery(_dataSource[1], _sqlQuery, _args, 100);
			if (_ds)
				forms[_form].foundset.loadRecords(_ds);
				forms[_form].syncFoundsets(forms[_form].foundset);
				if (forms[_form].onPostSearch) {
					forms[_form].onPostSearch();
				}
		} 
		catch (_exception) {																							// Exception
			globals.DIALOGS.showInfoDialog('Advanced Search', 
					'Error occured. Please contact developer.' + _exception, 'OK');
		}
	}
}

/**
 * Method to duplicate a record including its related records
 * 
 * @author 
 * @since 2011-08-8
 * @param {JSFoundset<db:/svy_framework/nav_advanced_search>} _fs foundset
 *
 * @properties={typeid:24,uuid:"C66CE32E-82B6-4DB1-8304-19EC2914D9C4"}
 */
function svy_sea_duplicateAdvancedSearch(_fs) {
	
	//object to store pk of new duplicated record
	var _relInfo = new Object();
	
	var _searchSourceRecord = _fs.getSelectedRecord();
	var _searchDuplicateRecord = _fs.getRecord(_fs.duplicateRecord(true, true));
	_searchDuplicateRecord.name += '_copy';
	databaseManager.saveData(_searchDuplicateRecord);
	
	//get criteria foundset for source serach record
	var _criteriaSourceFs = _searchSourceRecord.nav_advanced_search_to_nav_advanced_search_criteria;
	_criteriaSourceFs.sort('ordering asc');
	
	//get criteria foundset for duplicate search record
	var _criteriaDuplicateFoundset = _searchDuplicateRecord.nav_advanced_search_to_nav_advanced_search_criteria;
	
	for (var i = 1; i <= _criteriaSourceFs.getSize(); i++) {
		
		var _criteriaSourceRecord = _criteriaSourceFs.getRecord(i);
		var _criteriaDuplicateRecord = _criteriaDuplicateFoundset.getRecord(_criteriaDuplicateFoundset.newRecord());
		
		// Copy fields
		databaseManager.copyMatchingFields(_criteriaSourceRecord, _criteriaDuplicateRecord);
		_criteriaDuplicateRecord.is_group = _criteriaSourceRecord.is_group;
		_criteriaDuplicateRecord.advanced_search_id = _searchDuplicateRecord.nav_advanced_search_id;
		
		// Set parent id, when exists
		if (_criteriaDuplicateRecord.parent_id) {
			_criteriaDuplicateRecord.parent_id = _relInfo[_criteriaDuplicateRecord.parent_id];
		}
		
		// Save data
		databaseManager.saveData(_criteriaDuplicateRecord);
		
		// Push value to Object
		_relInfo[_criteriaSourceRecord.advanced_search_criteria_id] = _criteriaDuplicateRecord.advanced_search_criteria_id;
	}	
}

/**
 * @properties={typeid:24,uuid:"25BC54C7-FC54-419E-8556-5E5688C1B6F7"}
 */
function svy_sea_showAdvancedSearch(_program, _formName) {
	forms[globals.nav.advancedSearchFormName]['vProgram'] = _program
	forms[globals.nav.advancedSearchFormName]['vFormname'] = _formName
	
	globals.DIALOGS.showFormInModalDialog(forms[globals.nav.advancedSearchFormName], -1, -1, -1, -1, i18n.getI18NMessage('svy.fr.lbl.advanced_search'));
}
