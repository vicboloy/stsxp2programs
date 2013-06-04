/**
 * @param {String} [_title]
 * 
 * @properties={typeid:24,uuid:"CE272977-1BE3-4404-99BC-804D8A4A54B5"}
 */
function setTitle(_title) {
	if (!_title) {
		_title = elements.tab.getTabTextAt(elements.tab.tabIndex).replace(/&nbsp;/g, " ").toUpperCase();
	}
	elements.title.text = _title;
}

/** *
 * @param previousIndex
 * @param event
 *
 * @properties={typeid:24,uuid:"4D124FDC-81D2-42BC-84F1-5CBAC7F0D3CE"}
 */
function onTabChange(previousIndex, event) {
	 _super.onTabChange(previousIndex, event);

	/** @type {Number} */
	var _tabIndex = elements.tab.tabIndex;
	var _tabObj = tabInfo[_tabIndex];
	
	 setTitle();
	elements["tab_p" + _tabObj.panelNr + "_t" + _tabIndex]["imageURL"] = "media:///pv_tab_active.png";

}

/**
 * @properties={typeid:24,uuid:"6EF19430-4E97-470E-B9AD-38353E555553"}
 */
function hasCustomTabs() {
	return true;
}

/**
 * @properties={typeid:24,uuid:"331CC615-07E9-4046-B5C7-EA027EE92EC6"}
 */
function getOffsetWithoutToolbar() {
	return 20
}

/**
*
* @param {JSForm} jsPanelForm
* @param {JSFoundSet<db:/svy_framework/nav_tab>} tabFS
* @param {Number} panelNr
* @param {Number} [selectedTabNr]
*
* @properties={typeid:24,uuid:"621A377C-778F-4F50-914C-5C2D30AE96B4"}
*/
function createCustomTabs(jsPanelForm, tabFS, panelNr, selectedTabNr) {
	
	var tabWidth = 80;
	var tabHeight = 14;
	var xOffset = 140;
	var yOffset = 6;
	var tabTitle, tabBG, tabRec;
	var jsMethod = jsPanelForm.getMethod("switchTab");
	var jsMethodWithArgs;
	var tabBGname, tabTitleName;

	if (!selectedTabNr) {
		selectedTabNr = 1;
	}
	
	for (var i = 1; i <= tabFS.getSize(); i++) {
		//create tab buttons
		tabRec = tabFS.getRecord(i);
		
		jsMethodWithArgs = solutionModel.wrapMethodWithArguments(jsMethod,[null, i]);

		//create button background
		tabBGname = "tab_" + "p" + panelNr + "_t" + i;
		tabBG = jsPanelForm.getComponent(tabBGname);
		if (!tabBG) {
			tabBG = jsPanelForm.newButton("", ((i-1)*tabWidth + xOffset), yOffset, tabWidth, tabHeight, jsMethodWithArgs);
			tabBG.name = tabBGname;
			tabBG.mediaOptions = SM_MEDIAOPTION.CROP;
			tabBG.transparent = true;
			tabBG.showClick = false;
			tabBG.formIndex = 1;
		}
		tabBG.imageMedia = solutionModel.getMedia(i==selectedTabNr ? "pv_tab_active.png" : "pv_tab_inactive.png");

		//create button title
		tabTitleName = "tab_title_" + "p" + panelNr + "_t" + i;
		tabTitle = jsPanelForm.getComponent(tabTitleName);
		if (!tabTitle) {
			tabTitle = jsPanelForm.newButton(tabRec.display_description, ((i-1)*tabWidth + xOffset), yOffset, tabWidth, tabHeight, jsMethodWithArgs);
			tabTitle.name = tabTitleName;
			tabTitle.showClick = false;
			tabTitle.showFocus = false;
			tabTitle.transparent = true;
			tabTitle.styleClass = "tab_header";
			tabTitle.formIndex = 2;
		}
	}
	
	_super.createCustomTabs(jsPanelForm, tabFS, panelNr)
}

/**
 * @param {JSEvent} event
 * @param {Number} tabNr
 * 
 * @properties={typeid:24,uuid:"1C51FFE7-5093-4A99-8E14-53D9F72952A1"}
 */
function switchCustomTabs(event, tabNr) {
	_super.switchCustomTabs.apply(this, arguments);
	
	var form = controller.getName()
	var panelNr = utils.stringRight(form,1) 
	var tab = elements.tab;
	var elementName = 'tab_p' + panelNr + '_t' + tab.tabIndex
	elements[elementName]["imageURL"] = "media:///pv_tab_inactive.png";
	
	
}
