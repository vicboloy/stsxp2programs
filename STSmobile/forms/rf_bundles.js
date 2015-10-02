/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1CAE4B7B-4EFA-4EAE-A6D7-737B8267D574"}
 */
var lastID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"39BB51AF-399F-45F7-ABA7-3F5B994AF947"}
 */
var piecemark = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A3147944-DD4D-4C0D-B2D8-30DD4B8D4A73"}
 */
var pcmkMaterial = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"94217C03-D599-4C97-B018-DD84C33F544F"}
 */
var pcmkLength = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54C4FF4F-0884-4DE5-9DD3-1A81D405F176"}
 */
var pcmkWeight = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E2711DED-F709-4D21-95EF-259F3F13A602",variableType:4}
 */
var totalPieces = 0;
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"29333EF6-3EE4-422E-B805-5D25466DE992"}
 */
var totalWeight = "";
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"8475EFCC-1DB0-4A4A-86E6-3C692FAE162D",variableType:4}
 */
var bundleWeight = 0;
/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"E0183F26-3FA2-4205-B8E6-2BBD9AC2B509",variableType:4}
 */
var bundlePieces = 0;
 /**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C2A8E803-C801-4B61-A2FE-02C22A6CFA60"}
 */
var currentID = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A6003B40-8244-4E07-955F-83E29D194801"}
 */
var currentJob = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"BB276999-7499-4388-B0A5-E2A09EF1EC9F"}
 */
var currentBundle = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D60F73AA-3518-4B01-AB99-B8C057D9FF25"}
 */
var statusLocation = "";
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7A4BFBE7-7350-4519-A8F4-831AFA3C4FDD"}
 */
var statusCode = "";
/**
 * @properties={typeid:24,uuid:"247C9727-E6BD-4B9E-9B18-FDA821BAA339"}
 */
function clearForm(level){
	if (typeof level == undefined){level = 'all';}
	switch (level){
		case 'all':
			currentJob = "";
		case 'job':
			currentBundle = "";
			globals.mob.bundle.Id;
		case 'bundle':
			totalWeight = 0.0;
			totalPieces = 0;
			pcmkLength = 0;
			pcmkWeight = 0;
			piecemark = "";
			pcmkMaterial = "";
			lastID = "";
			// Now the entry area
			statusLocation = "";
			statusCode = "";
	}
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5B1E37AE-9EAA-4F08-9EE5-A1F5BCA4AAC5"}
 */
function onShow(firstShow, event) {
	globals.setTransShop();
}
