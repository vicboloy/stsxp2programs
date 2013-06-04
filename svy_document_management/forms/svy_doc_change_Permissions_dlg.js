/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A40CE735-2FA7-40DE-9296-79F864A1242D"}
 */
var btnCancel = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"809312BA-AC9F-4358-9E91-71096EBBC372",variableType:4}
 */
var btnClickedGroupsSelected = 0;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"34225558-1C00-43D6-9056-D9EEA31687FB"}
 */
var groupNames = null;

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"3F4CC5BD-2DC0-48A2-8608-6B4BB4AB2D30"}
 */
function onDataChange(oldValue, newValue, event) {
	
	
	//button  select group is not visible for public. 
	if(security_level == globals.svy_doc_group_folder_security){
		elements.btn_selectGroup.visible = true;
		elements.lbl_groupNames.visible = true;
	}
	else{
		elements.btn_selectGroup.visible = false;
		elements.lbl_groupNames.visible = false;
	}
		
	return true;	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2CA2603F-697A-464C-855D-C70975DB00B0"}
 */
function closeDialog(event) {
	application.closeAllWindows();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"AF724FD0-D450-4971-A7D9-00B83A96212F"}
 * @AllowToRunInFind
 */
function onShow(firstShow, event) {

	// Search the particular folder.
	groupNames = null;
	foundset.loadAllRecords();
	if(foundset.find()){
		doc_folder_id = scopes.svyDocumentManagement$model.selectedFolder;
		foundset.search();
	}
	// by default it is public.
	if(!utils.hasRecords(doc_folder_to_doc_security))
		security_level = globals.svy_doc_public_folder_security;
//	// Setting the already set security level.
	else if(utils.hasRecords(doc_folder_to_doc_security) && doc_folder_to_doc_security.security_level 
			== globals.svy_doc_public_folder_security)
		security_level = globals.svy_doc_public_folder_security;
	else if(utils.hasRecords(foundset.doc_folder_to_doc_security) && foundset.doc_folder_to_doc_security.security_level == 
		globals.svy_doc_group_folder_security){
			security_level = globals.svy_doc_group_folder_security;
			for(var p = 1; p <= foundset.doc_folder_to_doc_security.getSize(); p++){
				foundset.doc_folder_to_doc_security.setSelectedIndex(p);
				groupNames = groupNames + 
					foundset.doc_folder_to_doc_security.doc_security_to_sec_group.name + '\n';
				
			}
	}
	
	//button  select group is not visible for public. 
	if(security_level == globals.svy_doc_group_folder_security){
		elements.btn_selectGroup.visible = true;
		elements.lbl_groupNames.visible = true;
	}
	else{
		elements.btn_selectGroup.visible = false;
		elements.lbl_groupNames.visible = false;
	}
		
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2F66313F-D0B2-4F68-92B8-FA3E55092AC9"}
 * @AllowToRunInFind
 */
function createSecurityPermissions(event) {
	// On cancel no operation performed.
	if(databaseManager.getEditedRecords()){
		databaseManager.saveData(foundset);
		databaseManager.saveData(foundset.doc_folder_to_doc_security);
	}
	
	// If selected permission is public.
	if(security_level == globals.svy_doc_public_folder_security){
		
			// If the selected folder is already public.
			if(utils.hasRecords(doc_folder_to_doc_security) && 
				doc_folder_to_doc_security.security_level == globals.svy_doc_public_folder_security){
				
				//save permission
				databaseManager.saveData(doc_folder_to_doc_security);
				globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.security_permission'),
					i18n.getI18NMessage('i18n:svy.fr.dlg.folder_having_public_security') ,i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
				 application.closeAllWindows();
				 return;
			}
			
			// New public type permission is created.
			// Here we are searching for the folders of a particular parent folder.
			var seqStr = sequence + "%";
			foundset.loadAllRecords();
			if(foundset.find()){
				foundset.sequence = seqStr;
				foundset.search();
			}
			var changeSecurity;
			// In the loop all the folders and sub folders public security permissions records are created.		
			for (var i = 1;i <= foundset.getSize() ; i++){
				foundset.setSelectedIndex(i);
				// It is already group and now changed to public.
				if(utils.hasRecords(foundset.doc_folder_to_doc_security) && 
					foundset.doc_folder_to_doc_security.security_level == 
						globals.svy_doc_group_folder_security){
					// Delete all the group security records. 
					doc_folder_to_doc_security.deleteAllRecords();
					changeSecurity = 1;
				}
					
				security_level = globals.svy_doc_public_folder_security;
				doc_folder_to_doc_security.newRecord(false);
				doc_folder_to_doc_security.security_level = 
					globals.svy_doc_public_folder_security;
					
			}
			// Message will be not shown for changed security.
			if(!changeSecurity){						
				globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.security_permission'),
					i18n.getI18NMessage('i18n:svy.fr.dlg.security_level_set_to_public') ,i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
				changeSecurity = 0;
			}
			
			databaseManager.saveData(foundset.doc_folder_to_doc_security);
			application.closeAllWindows();
		
	}
	// Create Security Permissions for Group Type.
	else if(security_level == globals.svy_doc_group_folder_security){
		
		if(btnCancel == 'cancel'){
			//btnCancel = null;
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.security_permission'),
				i18n.getI18NMessage('i18n:svy.fr.dlg.please_select_groups') ,i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		
		if(!btnClickedGroupsSelected){
			globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.security_permission'),
				i18n.getI18NMessage('i18n:svy.fr.dlg.please_select_groups') ,i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			return;
		}
		
//		if(forms.svy_sec_selection_dialog.buttonClicked == 'cancel'){
//				
//			globals.DIALOGS.showInfoDialog('Info',
//				'Please select the groups.' ,'Ok');
//			btnClickedGroupsSelected = 0;
//			return;				
//		}
		
		// If the selected folder is public and now it is being changed to group.			
		if(utils.hasRecords(doc_folder_to_doc_security) && 
					doc_folder_to_doc_security.security_level == 
						globals.svy_doc_public_folder_security){
							
					
			// This loop creates the security records for all the chosen groups. 
			var tempFoundset = forms['svy_doc_selection_dialog_sec_group'].foundset.duplicateFoundSet();
			
			// Here we are searching for the folders of a particular parent folder.
			var seqStr2 = sequence + "%";
			foundset.loadAllRecords();
			if(foundset.find()){
				foundset.sequence = seqStr2;
				foundset.search();
			}
			
			// In the loop all the sub folders are assigned group permission.	
			for (var k = 1;k <= foundset.getSize() ; k++){
				foundset.setSelectedIndex(k);
				// Deleting its security record.
				foundset.doc_folder_to_doc_security.deleteRecord();
				foundset.security_level  = globals.svy_doc_group_folder_security;
				// In the loop we are getting all the selected groups.
				for (var l = 1; l <= tempFoundset.getSize(); l++) {
					tempFoundset.setSelectedIndex(l);
					// If it is selected.
					if (tempFoundset['is_selected'] == 1) {
						doc_folder_to_doc_security.newRecord();
						doc_folder_to_doc_security.sec_group_id = tempFoundset['group_id'];
						doc_folder_to_doc_security.security_level  = 
							globals.svy_doc_group_folder_security;
							
						databaseManager.saveData(doc_folder_to_doc_security)
					}
				}
					
			}
										
			btnClickedGroupsSelected = 0;
//			globals.DIALOGS.showInfoDialog('Info',
//				'The Security level is changed from public type to group type.' ,'Ok');
				  application.closeAllWindows();
							
		}
		
		else{
			var groupTypeSet = 0;
			// If it is already group type.
			if(utils.hasRecords(foundset.doc_folder_to_doc_security) &&
				foundset.doc_folder_to_doc_security.security_level == 
					globals.svy_doc_group_folder_security)
				
				groupTypeSet = 1;
			// New group type permission is created.
				
			// This loop creates the security records for all the chosen groups. 
			var tempFoundset1 = forms['svy_doc_selection_dialog_sec_group'].foundset.duplicateFoundSet();
			
			// Here we are searching for the folders of a particular parent folder.
			var seqStr1 = sequence + "%";
			foundset.loadAllRecords();
			if(foundset.find()){
				foundset.sequence = seqStr1;
				foundset.search();
			}
			
			// In the loop all the sub folders of the parent folders are assigned group permission.
			for (var m = 1;m <= foundset.getSize() ; m++){
				foundset.setSelectedIndex(m);
				security_level  = globals.svy_doc_group_folder_security;
				// Loop for all the selected groups.
				for (var j = 1; j <= tempFoundset1.getSize(); j++) {
					tempFoundset1.setSelectedIndex(j);
					// If it is selected.
					if (tempFoundset1['is_selected'] == 1) {
						if(!utils.hasRecords(foundset.doc_folder_to_doc_security)){
							doc_folder_to_doc_security.newRecord();
							doc_folder_to_doc_security.sec_group_id = tempFoundset1['group_id'];
							doc_folder_to_doc_security.security_level  = 
								globals.svy_doc_group_folder_security;
						}
						else{
							var isPresent = 0;
							// This loop is for checking if the selected record is already present in the security table.
							for	(var n = 1; n <= foundset.doc_folder_to_doc_security.getSize(); n++) {
								foundset.doc_folder_to_doc_security.setSelectedIndex(n);
								if(foundset.doc_folder_to_doc_security.sec_group_id ==  
										tempFoundset1['group_id']){
										isPresent = 1;
								}
							
							}
							// If the particular group record is not already present.
							if(isPresent == 0){
								foundset.doc_folder_to_doc_security.newRecord();
								foundset.doc_folder_to_doc_security.security_level  = 
								globals.svy_doc_group_folder_security;
								foundset.doc_folder_to_doc_security.sec_group_id = 
									tempFoundset1['group_id'];
								//databaseManager.saveData();

							}
								
						}	
					}
					
					databaseManager.saveData(foundset.doc_folder_to_doc_security);
				}
				// This loop will whether the particular security record is present in the selected foundset or else it will delete it.
				if(utils.hasRecords(foundset.doc_folder_to_doc_security)){
					for(var p = 1; p <= foundset.doc_folder_to_doc_security.getSize(); p++){
						var recPresent = 0;
						foundset.doc_folder_to_doc_security.setSelectedIndex(p);
						// This loop will check for all the selected groups.
						for(var x = 1; x <= tempFoundset1.getSize(); x++){
							tempFoundset1.setSelectedIndex(x);
							// If it is selected.
							if (tempFoundset1['is_selected'] == 1) {
								// If that selected record is existing in the table.
								if(foundset.doc_folder_to_doc_security.sec_group_id ==  
										tempFoundset1['group_id']){
										recPresent = 1;		
								}
							}
							
						}
						// That security record is not required in the table.must be deleted.
						if(recPresent == 0){
							// Delete record.
							foundset.doc_folder_to_doc_security.deleteRecord();
						}
					}
					
				}
			}	
		
			btnClickedGroupsSelected = 0;
			// If not already group type.
			if(!groupTypeSet)
				globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.security_permission'),
					i18n.getI18NMessage('i18n:svy.fr.dlg.security_level_set_to_group') ,i18n.getI18NMessage('i18n:svy.fr.lbl.ok'));
			
			application.closeAllWindows();				
		}		
	}
	
	databaseManager.saveData(foundset);
	databaseManager.saveData(doc_folder_to_doc_security);
	
	// Recalculate the foundset.
	databaseManager.recalculate(forms.svy_doc_tree.foundset);
	// Refreshing the tree.
	forms.svy_doc_tree.vDidTreeViewInit = 0;
	forms.svy_doc_tree.elements.dbtreeview.removeAllRoots();
	forms.svy_doc_tree.init_tree();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2B34958A-FE15-460E-A217-A2AFAB77DCC7"}
 */
function selectGroups(event) {
	// This displays the dialog to choose group.
	btnClickedGroupsSelected = 1;
	
	// Set the current form name in the global variable svy_doc_group_selection_form
	globals.svy_doc_group_selection_form = controller.getName();
	
	var _query = 'SELECT group_id FROM sec_group';
	var _dataSet = databaseManager.getDataSetByQuery(globals.nav_db_framework, _query, null, -1);
	globals.svy_doc_showSelectionDocDialog('db:/' + globals.nav_db_framework + '/sec_group', _dataSet, ['group_id'], 
			['name'], ['Group'], [200], 600, true);
			
}
