/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A92C5243-2B01-4556-8671-509FCEC88306"}
 */
var transStat = '';
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"87050456-1953-4F21-999C-C5202E60098F"}
 */
function onActionClose(event) {
	//forms.rf_mobile_view.elements.tablessHistory.setTabEnabledAt(1,true);
	//forms.rf_mobile_view.elements.tablessHistory.setTabEnabledAt(2,true);
	forms.rf_mobile_view.elements.tablessHistory.tabIndex = 1;
	return true;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"425867EF-E4EB-4E1E-B092-D8AEA4F53963"}
 */
function onShow(firstShow, event) {
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8F5D2BA8-7660-4E62-B8B1-F46AEB903B18"}
 */
function getTransactionDetails(event) {
	if (foundset.getSelectedIndex() == -1){return}
	if (!foundset){return}
	var tranEls = ['trans_status','transaction_date','transaction_duration','transaction_start','transaction_end','employee_number','association_name','trans_code',
	'minor_piecemark','quantity','revision_level','worker_id','worker2_id','worker3_id','worker4_id','worker5_id','trans_reversal_worker','trans_reversal_date',
	'trailer_labor_percentage','trailer_labor_quantity','gps_record_number','latitude','longitude','location','altitude','bundle_id'];
	//for (var index = 0;index < tranEls.length;index++){
		transStat = '';
		var transI18 = 'table.transactions.';
		var generalI18 = 'table.general.';
		 transStat += i18n.getI18NMessage(transI18+'trans_status') + ': ' + trans_status;
		 transStat += '\n' + i18n.getI18NMessage(transI18+'transaction_date') + ': ' + scopes.jobs.formatDate(transaction_date);
		 //application.output('trans date '+transaction_date);
		 //application.output('trans start '+transaction_start);
		// application.output('trans end '+transaction_end);
		 transStat += '\n' + i18n.getI18NMessage(transI18+'transaction_duration') + ': ' + scopes.jobs.formatMinutes(transaction_duration);
		 transStat += '\n' + i18n.getI18NMessage(transI18+'transaction_start') + ': ' + scopes.jobs.formatDate(transaction_start);
		 transStat += '\n' + i18n.getI18NMessage(transI18+'transaction_end') + ': ' + scopes.jobs.formatDate(transaction_end);
		 var empName = (sts_transactions_to_employee_logged) ? sts_transactions_to_employee_logged.employee_number : '';
		 transStat += '\n' + i18n.getI18NMessage('table.employee.employee_number') + ': ' + empName;
		 transStat += '\n' + i18n.getI18NMessage('table.associations.association_name') + ': ' + globals.session.association;
		 transStat += '\n' + i18n.getI18NMessage(transI18+'trans_code') + ': ' + trans_code;
		 transStat += '\n' + i18n.getI18NMessage(generalI18+'bundle_id') + ': ' + bundle_id;
		 transStat += '\n' + i18n.getI18NMessage(transI18+'minor_piecemark') + ': ' + minor_piecemark;
		 transStat += '\n' + i18n.getI18NMessage(transI18+'quantity') + ': ' + quantity;
		 transStat += '\n' + i18n.getI18NMessage(generalI18+'revision_level') + ': ' + revision_level;
		 var emp1 = (sts_transactions_to_employee) ? sts_transactions_to_employee.employee_number : '';
		 transStat += '\n' + i18n.getI18NMessage(transI18+'worker_id') + ': ' + emp1;
		 var emp2 = (sts_transactions_to_employee2) ? sts_transactions_to_employee2.employee_number : '';
		 transStat += '\n' + i18n.getI18NMessage(transI18+'worker2_id') + ': ' + emp2;
		 var emp3 = (sts_transactions_to_employee3) ? sts_transactions_to_employee3.employee_number : '';
		 transStat += '\n' + i18n.getI18NMessage(transI18+'worker3_id') + ': ' + emp3;
		 var emp4 = (sts_transactions_to_employee4) ? sts_transactions_to_employee4.employee_number : '';
		 transStat += '\n' + i18n.getI18NMessage(transI18+'worker4_id') + ': ' + emp4;
		 var emp5 = (sts_transactions_to_employee5) ? sts_transactions_to_employee5.employee_number : '';
		 transStat += '\n' + i18n.getI18NMessage(transI18+'worker5_id') + ': ' + emp5;
		 var revEmp = (sts_transactions_to_employee_reversal) ? sts_transactions_to_employee_reversal.employee_number : '';
		 transStat += '\n' + i18n.getI18NMessage(transI18+'trans_reversal_worker') + ': ' + revEmp;
		 transStat += '\n' + i18n.getI18NMessage(transI18+'trans_reversal_date') + ': ' + scopes.jobs.formatDate(trans_reversal_date);
		 transStat += '\n' + i18n.getI18NMessage(transI18+'trailer_labor_percentage') + ': ' + trailer_labor_percentage;
		 var aged = (new Date().getTime() - new Date(transaction_date).getTime())/60000;
		 transStat += '\n' + i18n.getI18NMessage('sts.time.age.record') + ': ' + scopes.jobs.formatMinutes(aged);
		 transStat += '\n' + i18n.getI18NMessage(transI18+'gps_record_number') + ': ' + gps_record_number;
		 transStat += '\n' + i18n.getI18NMessage(generalI18+'latitude') + ': ' + latitude;
		 transStat += '\n' + i18n.getI18NMessage(transI18+'longitude') + ': ' + longitude;
		 transStat += '\n' + i18n.getI18NMessage(transI18+'location') + ': ' + location;
		 if (status_description_id){
		 	transStat += '\n' + i18n.getI18NMessage('sts.txt.status.code.orig') + ': ' + sts_transactions_to_status_descrip.status_code;
		 }
		 transStat += '\n' + i18n.getI18NMessage(generalI18+'altitude') + ': ' + altitude;

		 
	//}
	//application.output(transStat);
	
}
