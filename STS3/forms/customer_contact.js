
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"11FFFF66-EEDC-44A2-87F7-9EC38EE99CF5"}
 */
 function delCustomerRecord(event) {
		var takeAction = globals.doDialog("Delete Record","Delete this Customer?","Delete","Cancel");
		if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
		}
	}
 
	/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"B080F990-8273-4617-99BC-F5DC8B431ACC"}
 */
function delCustomerRecordCancel(event) {
		//var success = forms.customer_contact.controller.deleteRecord();
		//controller.deleteRecord();
		// TODO confirmation Delete
		//application.output('Deleting Record. '+forms.customers_lst.customer_number);
	}
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"6756ADA3-D8F6-4D60-8D6A-ABD51DEE1680"}
 */
function onRenderCustomer(event) {
	// TODO Auto-generated method stub
	// NOTE: a property set on the renderable, will be kept on the element only during onRender
	/**
	 * if (event.isRecordSelected()) {
		event.getRenderable().fgcolor = '#00ff00';
	} else if (event.getRecordIndex() % 2) {
		event.getRenderable().fgcolor = '#ff0000';
	}
	**/
	elements.delCustomerButton.text = 'Delete Customer '+name;
}
