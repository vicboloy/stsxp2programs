/**
 * @properties={type:12,typeid:36,uuid:"66871388-8198-4282-BFFA-16EA7347EB6B"}
 */
function calcShowFieldOnly()
{
	var field = mapped_field;
	if (!field){return field;}
	field = field.split('.')[1];
	return field;
}
