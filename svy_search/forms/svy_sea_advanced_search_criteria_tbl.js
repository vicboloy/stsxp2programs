/**
 *	Delete record
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"6188FFAB-27FA-4263-BF75-BC03B7765C96"}
 * @AllowToRunInFind
 */
function deleteRecord() {

	if (foundset.getSize()) {
		var ok = i18n.getI18NMessage('svy.fr.lbl.ok');
		var no = i18n.getI18NMessage('svy.fr.lbl.no');
		var answer =  globals.DIALOGS.showQuestionDialog(i18n.getI18NMessage('svy.fr.lbl.record_delete'), i18n.getI18NMessage('svy.fr.dlg.delete'), ok, no); 	
	
		if(answer == ok) {
			var fsCriteria = null;
			
			if(foundset.parent_id && databaseManager.hasRecords(foundset.nav_advanced_search_criteria$same_label)){
				fsCriteria = foundset.nav_advanced_search_criteria$same_label;
			}else if(!foundset.parent_id){
				fsCriteria = foundset.duplicateFoundSet();
				
				if(fsCriteria.find()){
					fsCriteria.advanced_search_id = foundset.advanced_search_id;
					fsCriteria.parent_id = '^';
					fsCriteria.search();
				}
			}
			
			if (databaseManager.hasRecords(fsCriteria)) {
				var otherChilds = fsCriteria//foundset.nav_advanced_search_criteria$same_label.duplicateFoundSet();
				otherChilds.sort('ordering asc');
				
				for (var i=1; i<= otherChilds.getSize(); i++) {
					var rec = otherChilds.getRecord(i);
					
					if (rec.sequence > foundset.sequence) {
						rec.sequence -= 1;
						rec.ordering = rec.parent_id && 
								databaseManager.hasRecords(rec.nav_advanced_search_criteria$parent) && 
								rec.nav_advanced_search_criteria$parent.ordering ? 
										rec.nav_advanced_search_criteria$parent.ordering + '.' + rec.sequence : rec.sequence;
						if (rec.sequence == 0)
							rec.operator = '';
					}
				}
			}
			foundset.deleteRecord();
		}
	}
	else
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.delete_criteria'), 
			i18n.getI18NMessage('i18n:svy.fr.dlg.no_criteria_found'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 *
 *
 * @properties={typeid:24,uuid:"A6E7DD74-8DFA-48A8-99F5-49A8311E36EE"}
 */
function onShow(firstShow, event) {
	if (firstShow)
		refreshTree();								// Refresh tree
}

/**
 * Method to refresh the dbTree showing the search criteria
 * 
 * @properties={typeid:24,uuid:"702FA004-B88F-49C8-92B9-F9FF044557DC"}
 */
function refreshTree() {

	globals.svy_sea_advancedSearchId = advanced_search_id;
	
	/** @type {JSBean} */
	elements.dbTreeCriteria.removeAllRoots()
	
	var searchCriteriaDataSource = controller.getDataSource();
	var groupFs = nav_advanced_search_to_nav_advanced_search_criteria$roots;

	/** @type {Binding} */
	var groupBinding = elements.dbTreeCriteria.createBinding(searchCriteriaDataSource);
	groupBinding.setTextDataprovider('criteria_tree_node_text');
	groupBinding.setNRelationName('nav_advanced_search_criteria_to_nav_advanced_search_criteria$childs');
	groupBinding.setCallBackInfo(treeCallback, 'advanced_search_criteria_id');
	groupBinding.setMethodToCallOnDoubleClick(treeDoubleClick, 'advanced_search_criteria_id');
	
	groupFs.loadAllRecords();
	groupFs.setSelectedIndex(1)
	groupFs.sort('ordering asc');
	elements.dbTreeCriteria.addRoots(groupFs);
	
	// Select node
	elements.dbTreeCriteria.selectionPath = [groupFs.advanced_search_criteria_id];
	
}

/**
 * callback method for dbtree view showing the search criteria
 * 
 * @param {Number} criteriaId Primary key for the selected node
 * 
 * @properties={typeid:24,uuid:"A8648DE2-C264-4D7C-BE08-90214FAC2F0C"}
 */
function treeCallback(criteriaId) {
	// Select the record in foundset
	foundset.selectRecord(criteriaId);	
}

/**
 * Call back method for tree when double clicked on any node
 * 
 * @param {JSEvent} event the event that triggered the action
 * @param {Object} criteriaId
 *
 * @properties={typeid:24,uuid:"4D9441C3-F4A0-41E5-A9A6-B8CA7766E30F"}
 */
function treeDoubleClick(event, criteriaId) {
	// Select the record in foundset and show edit dialog
	foundset.selectRecord(criteriaId);	
	editRecord();
}

/**
 * Perform the element default action.
 *
 * @properties={typeid:24,uuid:"DA8CC926-F487-488A-9DD5-4403D7A41FDB"}
 */
function editRecord() {
	if (!foundset.getSize()) {
		globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.edit_criteria'),
			i18n.getI18NMessage('i18n:svy.fr.dlg.no_criteria_record_found_for_editing'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
		return;
	}
		
	if (!databaseManager.hasTransaction())
		databaseManager.startTransaction();
	
	// Show edit dialog  
	
	if (is_group) {
		var window = application.createWindow('win_group',JSWindow.MODAL_DIALOG);
		window.title = i18n.getI18NMessage('svy.fr.dlg.add_edit_search_criteria') ? i18n.getI18NMessage('svy.fr.dlg.add_edit_search_criteria') : 'Add/Edit search criteria';
		window.resizable = true;
		
		forms[globals.nav.advancedSearchGroupFormName].foundset.loadRecords(foundset);
		window.show(forms[globals.nav.advancedSearchGroupFormName]);
	}
	else {
		var win = application.createWindow('win_criteria',JSWindow.MODAL_DIALOG);
		win.title = i18n.getI18NMessage('svy.fr.dlg.add_edit_search_criteria') ? i18n.getI18NMessage('svy.fr.dlg.add_edit_search_criteria') : 'Add/Edit search criteria';
		win.resizable = true;	
		forms[globals.nav.advancedSearchCriteriaFormName].foundset.loadRecords(foundset);		
		win.show(forms[globals.nav.advancedSearchCriteriaFormName]);
	}
}

/**
 * Generate the pop up menu for criteria types for new record
 * 
 * @author lopamudram
 * @since  2/28/2013
 *
 * @param event
 *
 * @properties={typeid:24,uuid:"AE723826-0BBB-4423-AC4D-6D4AAAE7A725"}
 */
function createContextMenu(event){
	
	var createGrpOption = i18n.getI18NMessage('i18n:svy.fr.dlg.condition_group') ? i18n.getI18NMessage('i18n:svy.fr.dlg.condition_group') : 'Create Group';
	var createNestedGrpOption = i18n.getI18NMessage('i18n:svy.fr.dlg.nested_group') ? i18n.getI18NMessage('i18n:svy.fr.dlg.nested_group') : 'Nested Group';
	var criteriaOption = i18n.getI18NMessage('i18n:svy.fr.dlg.criteria') ? i18n.getI18NMessage('i18n:svy.fr.dlg.criteria') : 'Criteria';	
	var popupmenu = plugins.window.createPopupMenu(); 
	
	if(foundset.is_group == 1){
		popupmenu.addMenuItem(createNestedGrpOption, popUpMenuCallback);
	}
	popupmenu.addMenuItem(createGrpOption, popUpMenuCallback);
	popupmenu.addMenuItem(criteriaOption, popUpMenuCallback);
	
	if (event.getSource()) {
		popupmenu.show(event.getSource());
	}
	

}

/**
 * Callback method for pop up menu items
 * Parameters are default parameters to be declared for a pop up menu callback method
 * 
 * @param index
 * @param parentIndex
 * @param isSelected
 * @param parentText
 * @param text
 * 
 * @author lopamudram
 * @since  2/28/2013
 * 
 * @properties={typeid:24,uuid:"D5AB79F3-961F-42A3-8CD5-2BE71F2BC0D3"}
 */
function popUpMenuCallback(index, parentIndex, isSelected, parentText, text){
	newRecord(text);
}

/**
 *	Create record depending upon selceted pop up menu item
 *
 * @param {String} selectedMenu
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @return  none
 * 
 * @properties={typeid:24,uuid:"7D18044B-432F-403E-BBBC-796807444913"}
 * @AllowToRunInFind
 */
function newRecord(selectedMenu) {
	var criteriaOption = i18n.getI18NMessage('i18n:svy.fr.dlg.criteria') ? i18n.getI18NMessage('i18n:svy.fr.dlg.criteria') : 'Criteria';
	var createNestedGrpOption = i18n.getI18NMessage('i18n:svy.fr.dlg.nested_group') ? i18n.getI18NMessage('i18n:svy.fr.dlg.nested_group') : 'Nested Group';
	var curParent = null;
	var group = null;
	
	if (!selectedMenu)
		return;
	
	if (selectedMenu != criteriaOption) {			// Create group
		if (foundset && foundset.getSize() > 0 && is_group == 1) {
			
			if (selectedMenu == createNestedGrpOption)
				curParent = advanced_search_criteria_id;
			else
				curParent = (parent_id ? parent_id : 0);
		}
		else if (foundset && foundset.getSize() > 0 && is_group == 0 && parent_id != 0)
			curParent = parent_id;
		
		// Create group
		group = 1;
	}
	else if (selectedMenu == criteriaOption) {		// Create Criteria
		if (foundset && foundset.getSize() > 0 && is_group == 1)
			curParent = advanced_search_criteria_id;
		else if (foundset && foundset.getSize() > 0 && is_group == 0 && parent_id != 0)
			curParent = parent_id;
		
		// Create Criteria
		group = 0;
	}
	
	// Start Transaction and create record
	if (databaseManager.hasTransaction())
		databaseManager.rollbackTransaction();
	databaseManager.startTransaction();
	
	// Create Record in Search criteria table
	controller.newRecord(false);
	is_group = group;
	group_name = group ? 'New Condition group' : '';
	parent_id = (curParent ? curParent : '');
	var dupAdvSrcFs=  foundset.duplicateFoundSet();
	if (dupAdvSrcFs.find()) {
		dupAdvSrcFs.parent_id = parent_id;
		dupAdvSrcFs.advanced_search_id = advanced_search_id;
		dupAdvSrcFs.search();
	}
	sequence = dupAdvSrcFs.getSize();
	ordering = parent_id ? nav_advanced_search_criteria$parent.ordering + '.' + sequence : sequence; 
	databaseManager.saveData(foundset);
	
	forms[globals.nav.advancedSearchCriteriaFormName]['filterValueString'] = null;
	forms[globals.nav.advancedSearchCriteriaFormName]['filterValueDatetime'] = null;
	
	forms[globals.nav.advancedSearchCriteriaFormName].controller.focusFirstField();
	
	// get selection array for tree
	var fs = foundset.duplicateFoundSet();
	fs.selectRecord(advanced_search_criteria_id)
	var arr = new Array();
	arr.push(fs.advanced_search_criteria_id)
	while (fs.parent_id) {
		
		fs.selectRecord(fs.parent_id);
		arr.push(fs.advanced_search_criteria_id);
	}
	
	refreshTree();														// Refresh tree
	elements.dbTreeCriteria.selectionPath = arr ? arr.reverse() : arr;	// Select the new node
	
	// Show add dialog
	editRecord();
}
