/**
 * @properties={type:8,typeid:36,uuid:"DD19EE75-0C42-4D91-85D4-276D3BAC8378"}
 */
function itemWeightLastBC()//20180110 set table weights for metric/imperial
{
	if (forms['kiss_option_import'] && forms['kiss_option_import'].jobMetric == true){
		return item_weight * last_bc_qty;
	} else {
		return item_weight * last_bc_qty * 2.2046226;
	}
}

/**
 * @properties={type:8,typeid:36,uuid:"8D4094DB-0E6D-4D0E-9B61-5F91C3C6167B"}
 */
function totalWeight()//20180110 set table weights for metric/imperial
{
	if (forms['kiss_option_import'] && forms['kiss_option_import'].jobMetric == true){
		return item_weight * barcode_qty;
	} else {
		return item_weight * barcode_qty * 2.2046226;
	}
}

/**
 * @properties={type:8,typeid:36,uuid:"65DD4FB9-AAB1-4858-8303-7EBD37BEF060"}
 */
function itemWeight()//20180110 set table weights for metric/imperial
{
	if (forms['kiss_option_import'] && forms['kiss_option_import'].jobMetric == true){
		return item_weight;
	} else {
		return item_weight * 2.2046226;
	}
}
