/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D15D1D9F-059C-4016-ACBF-6D5A89481CCA"}
 */
var statusRevision = "";
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"432FD01A-0CEE-401D-8511-6FB0452C81FB"}
 */
function onShowForm(firstShow, event) {
	statusRevision = "";
	globals.mob.currentRevision = "";
	return _super.onShowForm(firstShow, event)
}
