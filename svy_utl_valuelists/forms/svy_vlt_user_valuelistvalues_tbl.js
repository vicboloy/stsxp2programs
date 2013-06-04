/**
 *	Method to move records up down by switching their sort_order
 *
 * @author Sanneke Aleman
 * @since 2006-11-10
 * @param {JSEvent} _event
 * 
 * @properties={typeid:24,uuid:"56c64e29-71a5-4bd4-acbc-68f3717f083f"}
 */
function recordUpDown(_event)
{
	var _button = _event.getElementName();
	var _index = controller.getSelectedIndex()
	var _max = controller.getMaxRecordIndex()
	var _current_rec = foundset.getRecord(_index)
	var _change_rec
	if(_button == 'btn_up')
	{
		if(_index == 1)
		{
			return
		}
		_change_rec =  foundset.getRecord(_index -1 )
	}
	else if(_button == 'btn_down')
	{
		if(_index == _max)
		{
			return
		}
		_change_rec =  foundset.getRecord(_index + 1 )
	}
	
	var _sort_order = _current_rec.sort_order
	
	 _current_rec.sort_order =  _change_rec.sort_order
	 _change_rec.sort_order = _sort_order
	
	controller.sort('sort_order asc')
	databaseManager.saveData()
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"D0E29151-FF06-4455-8306-DDF59B9D3A4E"}
 */
function onAction(event) {

}
