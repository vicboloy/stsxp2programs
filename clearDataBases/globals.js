
/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"9D8F0194-63B2-40D1-B3C4-26158887A304"}
 */
function onSolutionOpenClear() {
	plugins.maintenance.setMaintenanceMode(true);
	var table = 'idfiles';
	//var column = 'original_employee_uuid';
	//var oldColumn = 'original_employee';
	//var table = databaseManager.getTable('stsservoy',table);
	try {
		null;
		//plugins.rawSQL.executeSQL('stsservoy','idfiles','ALTER TABLE idfiles DROP COLUMN original_employee;');
		//application.output('delete original_employee column from idfiles table');
	} catch (e) {}
	try {
		plugins.rawSQL.executeSQL('stsservoy', 'addresses', 'CREATE INDEX CONCURRENTLY address_customerid_idx ON addresses (customer_id);');
	} catch (e) {}
	
	try {
		plugins.rawSQL.executeSQL('stsservoy', 'customers', 'CREATE INDEX CONCURRENTLY customer_number_idx ON customers (customer_number);');
	} catch (e) {}

	
	try {
		plugins.rawSQL.executeSQL('stsservoy', 'jobs', 'CREATE INDEX CONCURRENTLY jobs_idx ON jobs (job_number);');
	} catch (e) {}
	try {
		plugins.rawSQL.executeSQL('stsservoy', 'jobs', 'CREATE INDEX CONCURRENTLY jobs_associd_jobnum_idx ON jobs (association_id,job_number);');
	} catch (e) {}
	try {
		plugins.rawSQL.executeSQL('stsservoy', 'jobs', 'CREATE INDEX CONCURRENTLY jobs_association_idx ON jobs (association_id);');
	} catch (e) {}
	try {
		plugins.rawSQL.executeSQL('stsservoy', 'jobs', 'CREATE INDEX CONCURRENTLY jobs_customer_idx ON jobs (customer_id);');
	} catch (e) {}
	try {
		plugins.rawSQL.executeSQL('stsservoy', 'jobs', 'CREATE INDEX CONCURRENTLY jobs_bill_to_idx ON jobs (bill_to);');
	} catch (e) {}
	try {
		plugins.rawSQL.executeSQL('stsservoy', 'jobs', 'CREATE INDEX CONCURRENTLY jobs_bc_form_idx ON jobs (barcode_form);');
	} catch (e) {}
	
	try {
		plugins.rawSQL.executeSQL('stsservoy', 'id_serial_numbers', 'CREATE INDEX CONCURRENTLY id_numberid_number_idx ON id_serial_numbers (id_serial_number);');
	} catch (e) {}

	
	try {		
		plugins.rawSQL.executeSQL('stsservoy','import_table','CREATE INDEX CONCURRENTLY import_tab_idx ON import_table (job_number,parent_piecemark,piecemark);');
	} catch (e) {}
	
	try {		
		plugins.rawSQL.executeSQL('stsservoy','import_guids','CREATE INDEX CONCURRENTLY import_guids_import_table_idx ON import_guids (import_table_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','import_guids','CREATE INDEX CONCURRENTLY import_guid_idx ON import_guids (assem_guid,part_guid);');
	} catch (e) {}
	
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_lotid_idx ON idfiles (lot_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_bundle_idx ON idfiles (bundle_bc NULLS LAST);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_serial_id_idx ON idfiles (id_serial_number_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_location_idx ON idfiles (id_location);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_seq_pcmk_idx ON idfiles (sequence_id,piecemark_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_uniq_idx ON idfiles (sequence_id,lot_id,piecemark_id,delete_flag);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_ship_idx ON idfiles (ship_load_id NULLS LAST);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_pcmk_id_idx ON idfiles (piecemark_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_bundle_idfileid_idx ON idfiles (bundle_bc, idfile_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_bundle_serialid_idx ON idfiles (id_serial_number_id, bundle_bc);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_recvd_load_idx ON idfiles (received_load_id NULLS LAST);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_current_load_idx ON idfiles (current_load_id NULLS LAST);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_status_description_idx ON idfiles (status_description_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_parent_idfileid_idx ON idfiles (parent_idfile_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_fs_guids_idx ON idfiles (guid_major, guid_minor);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','idfiles','CREATE INDEX CONCURRENTLY idfile_sequences_idx ON idfiles (sequence_id);');
	} catch (e) {}

	try {		
		plugins.rawSQL.executeSQL('stsservoy','i18n_table','CREATE INDEX CONCURRENTLY i18n_table_idx ON i18n_table (message_key, message_value);');
	} catch (e) {}
	
	try {		
		plugins.rawSQL.executeSQL('stsservoy','id_serial_numbers','CREATE INDEX CONCURRENTLY id_serial_numbers_number_idx ON id_serial_numbers (id_serial_number);');
	} catch (e) {}
	
	try {		
		plugins.rawSQL.executeSQL('stsservoy','piecemarks','CREATE INDEX CONCURRENTLY pcmks_route_codes_idx ON piecemarks (e_route_code_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','piecemarks','CREATE INDEX CONCURRENTLY pcmks_sheetid_idx ON piecemarks (sheet_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','piecemarks','CREATE INDEX CONCURRENTLY pcmks_minor_idx ON piecemarks (piecemark);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','piecemarks','CREATE INDEX CONCURRENTLY pcmks_major_idx ON piecemarks (parent_piecemark);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','piecemarks','CREATE INDEX CONCURRENTLY pcmks_idx ON piecemarks (sheet_id,parent_piecemark,piecemark);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','piecemarks','CREATE INDEX CONCURRENTLY pcmks_general_idx ON piecemarks (sheet_id,piecemark);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','piecemarks','CREATE INDEX CONCURRENTLY pcmks_uniq_idx ON piecemarks (sheet_id,parent_piecemark,piecemark,grade,finish);');
	} catch (e) {}
	
	
	try {		
		plugins.rawSQL.executeSQL('stsservoy','permissions','CREATE INDEX CONCURRENTLY permissions_key_idx ON permissions (key_uuid);');
	} catch (e) {}
	

	try {		
		plugins.rawSQL.executeSQL('stsservoy','loads','CREATE INDEX CONCURRENTLY loads_interim_idx ON loads (interim_load);');
	} catch (e) {}

	try {		
		plugins.rawSQL.executeSQL('stsservoy','route_detail','CREATE INDEX CONCURRENTLY route_detail_status_descrip_idx ON route_detail (status_description_id);');
	} catch (e) {}

	try {		
		plugins.rawSQL.executeSQL('stsservoy','sheet_bom','CREATE INDEX CONCURRENTLY sheet_bom_sheetid_idx ON sheet_bom (sheet_id);');
	} catch (e) {}
	try {		
		plugins.rawSQL.executeSQL('stsservoy','sheet_bom','CREATE INDEX CONCURRENTLY sheet_bom_end_conditions_idx ON sheet_bom (end_condition_id);');
	} catch (e) {}

	try {		
		plugins.rawSQL.executeSQL('stsservoy','sheets','CREATE INDEX CONCURRENTLY sheet_jobid_idx ON sheets (job_id);');
	} catch (e) {}

	try {		
		plugins.rawSQL.executeSQL('stsservoy','status_description','CREATE INDEX CONCURRENTLY status_description_association_idx ON status_description (association_id);');
	} catch (e) {}

	try {		
		plugins.rawSQL.executeSQL('stsservoy','transactions','CREATE INDEX CONCURRENTLY transactions_idfileid_idx ON transactions (idfile_id);');
	} catch (e) {}

	try {		
		plugins.rawSQL.executeSQL('stsservoy','users','CREATE INDEX CONCURRENTLY users_employeeid_idx ON users (employee_id);');
	} catch (e) {}

	try {		
		plugins.rawSQL.executeSQL('stsservoy','user_groups','CREATE INDEX CONCURRENTLY user_groups_groupuuid__idx ON user_groups (group_uuid);');
	} catch (e) {}

	if (1==0){
		var tablesToClear = ['addresses','carrier','cow_xref','cowcodes','customers','employee','employee_class','end_conditions',
		'heats','id_serial_numbers','idfiles','jobs','labor_codes','labor_department','last_id_serial','loads','lots',
		'piecemarks','preferences2','rf_transactions','route_detail','routings','sequences','sheets','status_description',
		'transactions','uom_types','users','associations'
		]
		// 'mapping', 'users', 'groups','applications','associations','barcode_test','group_keys','i18n_table',
		// 'ref_types','messages','tenant_list','user_groups','zipcodes','valuelists'
		for (var index = 0;index < tablesToClear.length;index++){
			var fs = databaseManager.getFoundSet('stsservoy',tablesToClear[index]);
			if (fs.getSize() > 0){application.output('Deleting table '+tablesToClear[index])}
			fs.loadRecords();
			while (fs.getSize() != 0){
				fs.deleteAllRecords();
			}
		}
	}
	plugins.maintenance.setMaintenanceMode(false);
}
