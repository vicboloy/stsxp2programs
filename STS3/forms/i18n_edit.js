/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E7D93581-5AB5-4B65-A0C0-5C6F2F9AA06E"}
 */
var vRefLocale = 'en';
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E0A7A74D-B27C-444B-8F8D-436F1E84F756"}
 */
var vSetLocale = '';
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FDECDC1A-D98C-4116-B495-AC46CF52DEFC"}
 */
function onShow(firstShow, event) {
	if (firstShow){
		var getLocales = i18n.getLanguages();
		var showLocales = [];
		var valLocales = [];
		for (var index = 1;index <= getLocales.getMaxRowIndex();index++){
			application.output(getLocales.getValue(index,2));
			valLocales.push(getLocales.getValue(index,1));
			showLocales.push(getLocales.getValue(index,2));
		}
		application.setValueListItems('stsvl_locales',showLocales,valLocales);
	}
	return _super.onShow(firstShow, event)
}
