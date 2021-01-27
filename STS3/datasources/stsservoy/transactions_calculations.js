/**
 * @properties={type:4,typeid:36,uuid:"FC9E1C6D-94AD-4F9F-9B17-F65A4B0A3490"}
 */
function labor_piece()
{
	if (application.isInDeveloper()){
		application.output('Entered labor piece exist '+trans_id+ ' '+labor_quantity+' '+quantity)
	}
	if (globals.laborHoursTrans[trans_id]){
		return globals.laborHoursTrans[trans_id];
	}
	var id_serial_id = sts_trans_to_id_serial.sts_idfile_to_barcoded;
	var qty = (!quantity) ? 0 : 1;
	var Quant = id_serial_id.getSize()  * qty;
	if (Quant == 0){Quant = null}
	globals.laborHoursTrans[trans_id] = Quant;
	return Quant;
}

/**
 * @properties={type:12,typeid:36,uuid:"6B8CFF12-8C21-4F93-860A-09B4A776F08C"}
 */
function showSeconds()
{
	
}

/**
 * @properties={type:4,typeid:36,uuid:"B6A492F1-E032-4B0E-8F4D-40D2AC6F3543"}
 */
function freeCheck()
{
	return 0;
}
