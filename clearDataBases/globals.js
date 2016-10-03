
/**
 * Callback method for when solution is opened.
 *
 * @properties={typeid:24,uuid:"9D8F0194-63B2-40D1-B3C4-26158887A304"}
 */
function onSolutionOpenClear() {
	plugins.maintenance.setMaintenanceMode(true);
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
