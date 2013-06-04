/**
 * @properties={typeid:24,uuid:"B2B90877-2A25-4988-A5D0-A20C91DC5A61"}
 */
function onLoad() {
	setProgress(0);
}

/**
 * Method used to set the loading progress
 * 
 * @param {Number} _percentage
 * 
 * @properties={typeid:24,uuid:"215491B7-5CF6-4F49-8C97-56BF383FB6F1"}
 */
function setProgress(_percentage) {
	
}

/**
 * @deprecated Use setProgress(_percentage) instead
 * @param {Number} _percentage
 *
 * @properties={typeid:24,uuid:"D54AC365-1046-48F6-A036-23A61D7CF209"}
 */
function setStatusBar(_percentage) {
	setProgress(_percentage);
}
