/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"E064DA2E-782E-474C-86F5-D602473B1173"}
 */
function delCarrierRecordAndAddress(event) {
	var takeAction = globals.doDialog("Remove Carrier Record","Delete this Carrier?","Delete","Cancel");
	if (globals.dialogResponse == "yes"){
			controller.deleteRecord();
		}
	}

/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @properties={typeid:24,uuid:"B9AB506A-3288-47F8-8A1A-0F33D772766A"}
 */
function onRenderCarrierButton(event) {
	/**
	* if (event.isRecordSelected()) {
		event.getRenderable().fgcolor = '#00ff00';
	} else if (event.getRecordIndex() % 2) {
		event.getRenderable().fgcolor = '#ff0000';
	}
	**/
	elements.deleteCarrierButton.text = 'Delete \''+carrier_name+'\'';
}