
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A1B2FEC9-34A6-46A3-A972-5DE0B0C609B9"}
 */
 function onLoadCreateRecord(event) {
		if (controller.getMaxRecordIndex() == 0){
			var newCarrier = controller.newRecord()
			var newAddy = sts_carrier_to_address.newRecord;
			newCarrier.carrier_address = newAddy.address_id;
		}
		if (globals.carriersDividerLocation == 0.0) {
			elements.split.dividerLocation = 300.0;
		}
	}

/**
 * TODO generated, please specify type and doc for the params
 * @param previousIndex
 * @param event
 *
 * @properties={typeid:24,uuid:"5439B6EE-D2FE-4164-9A77-3923DC176DE2"}
 */
function onTabChange(previousIndex, event) {
		globals.carriersDividerLocation = elements.split.dividerLocation;
	}

