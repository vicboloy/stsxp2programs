/**
 *	Tab switch
 *
 * @author Sanneke Aleman
 * @since 2007-11-24
 * @param {JSEvent} [_event]
 * @param {Number} [_arg] number of the tab you want to navigate to
 * @return  none
 * 
 * @properties={typeid:24,uuid:"3C027180-748A-4FFC-9513-ABE36E17A1DC"}
 */
function tabSwitch(_event, _arg)
{
	var _tab 
	if(_arg == undefined )
	{
		_tab = _event.getElementName().replace(/[^0-9]/g, "")
	}
	else
	{
		_tab = _arg
	}
	
	//deactivated tabs
	for (var i = 0; i < 9; i++) 
	{
		elements['tab_left_'+(i+1)].setImageURL('media:///tab_grey_left.png')
		elements['tab_right_'+(i+1)].setImageURL('media:///tab_grey_right.png')
		elements['tab_'+(i+1)].setImageURL('media:///tab_grey_btw.png')
		elements['lbl_'+(i+1)].setFont('Verdana,0,10');
		elements['lbl_'+(i+1)].fgcolor = '#000000'
	}

	//activated
	elements['tab_left_'+ _tab].setImageURL('media:///tab_blue_left.png')
	elements['tab_right_'+ _tab].setImageURL('media:///tab_blue_right.png')
	elements['tab_'+ _tab].setImageURL('media:///tab_blue_btw.png')
	elements['lbl_'+ _tab].setFont('Verdana,1,10');
	elements['lbl_'+ _tab].fgcolor = '#ffffff'
	
	elements.metadata_tab.tabIndex = _tab	
}

/**
 * @properties={typeid:24,uuid:"575E2DC4-5E66-4FE9-8F5B-BD7E57AC1DD4"}
 */
function setMediaValuelist() {
	var _media = solutionModel.getMediaList();
	var _ds = databaseManager.createEmptyDataSet(0, ["display", "real"]);
	
	for (var i = 0; i < _media.length; i++) {
		_ds.addRow([_media[i].getName(), _media[i].getName()]);
	}
	application.setValueListItems("nav_media",_ds);
}

/**
 * @properties={typeid:24,uuid:"1C30ACB3-733B-4A56-964D-6450AF4A5466"}
 */
function setMediaBGValuelist() {
	var _media = solutionModel.getMediaList();
	var _ds = databaseManager.createEmptyDataSet(0, ["display", "real"]);
	
	for (var i = 0; i < _media.length; i++) {
		if(utils.stringPatternCount(_media[i].getName(),'bg_button')> 0)
		{
			_ds.addRow([_media[i].getName(), _media[i].getName()]);
		}
	}
	application.setValueListItems("nav_media_bg",_ds);
}

/** *
 * @param firstShow
 * @param event
 *
 * @properties={typeid:24,uuid:"A2FDC613-41DD-4D28-93C6-3346B03565BB"}
 */
function onShow(firstShow, event) {
	setMediaValuelist()
	setMediaBGValuelist()
	if(firstShow)
	{
		loadFunctionsValuelist()
	}
	return _super.onShow(firstShow, event)
}

/**
 * @properties={typeid:24,uuid:"8ACF2245-B961-4F9E-8F3B-A845E3851006"}
 */
function loadFunctionsValuelist() {
	/** @type {JSFoundSet<db:/svy_framework/nav_function>} */
	var _fsFunction = databaseManager.getFoundSet('db:/' + globals.nav_db_framework + '/nav_function')
	_fsFunction.loadAllRecords()
	var dataset = databaseManager.convertToDataSet(_fsFunction,['display_description','function_id']);
	application.setValueListItems('nav_functions',dataset)
	
}
