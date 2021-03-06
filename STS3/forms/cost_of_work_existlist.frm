dataSource:"db:/stsservoy/piecemarks",
encapsulation:12,
items:[
{
anchors:11,
dataProviderID:"charLength",
editable:false,
location:"744,20",
name:"length_char",
size:"66,20",
tabSeq:-2,
typeid:4,
uuid:"0563D7E3-D421-4644-98E3-6674F26434C7",
visible:false
},
{
anchors:11,
labelFor:"customer_number",
location:"31,0",
name:"customer_number_label",
size:"73,20",
text:"i18n:sts.col.label.customer.number",
toolTipText:"i18n:sts.col.label.customer.number",
transparent:true,
typeid:7,
uuid:"0EA2EC5E-FAFA-44AC-BCC4-7BC5E1E9173F"
},
{
anchors:11,
dataProviderID:"sts_piecemarks_to_sheets.st2_sheets_to_jobs.st2_jobs_to_customers.customer_number",
editable:false,
location:"31,20",
name:"customer_number",
size:"73,20",
tabSeq:-2,
typeid:4,
uuid:"10D8C373-9EFC-4D84-B045-0D26B42C9A54"
},
{
anchors:11,
labelFor:"material",
location:"318,0",
name:"material_label",
size:"54,20",
text:"i18n:sts.col.label.material",
toolTipText:"i18n:sts.col.label.material",
transparent:true,
typeid:7,
uuid:"21F81206-A206-4587-9DF4-3C430E6D6955"
},
{
anchors:11,
dataProviderID:"sts_piecemark_cowxref.sts_cowcode_cowcode_xref.cow_code",
editable:false,
location:"412,20",
name:"your_code",
size:"66,20",
tabSeq:-2,
typeid:4,
uuid:"2462AEBB-9EF4-4C4B-9DB0-8F1DC37042F2"
},
{
anchors:11,
dataProviderID:"cost_of_work_code",
editable:false,
location:"183,20",
name:"cost_of_work_code",
size:"67,20",
tabSeq:-2,
typeid:4,
uuid:"286D9C69-2C5E-4EC3-BF5F-C07D549E9431"
},
{
anchors:11,
labelFor:"customer_po",
location:"104,0",
name:"customer_po_label",
size:"80,20",
text:"i18n:sts.col.label.customer.po",
toolTipText:"i18n:sts.col.label.customer.po",
transparent:true,
typeid:7,
uuid:"2C5D268F-EAC6-4A51-B9AA-9A4EBC169240"
},
{
anchors:11,
dataProviderID:"material",
editable:false,
location:"318,20",
name:"material",
size:"54,20",
tabSeq:-2,
typeid:4,
uuid:"2FE16872-FEDF-4902-A342-E0FC0463FCF6"
},
{
anchors:11,
labelFor:"length_char",
location:"744,0",
mnemonic:"",
name:"length_char_label",
size:"66,20",
text:"i18n:sts.col.label.length",
toolTipText:"i18n:sts.col.label.length",
transparent:true,
typeid:7,
uuid:"3C958543-C98C-4450-A778-DC376742922B",
visible:false
},
{
anchors:11,
labelFor:"piecemark",
location:"251,0",
name:"piecemark_label",
size:"69,20",
text:"i18n:sts.col.label.piecemark",
toolTipText:"i18n:sts.col.label.piecemark",
transparent:true,
typeid:7,
uuid:"4037D7BE-0CDE-4EAD-B50D-BB43FD938C03",
visible:false
},
{
anchors:11,
dataProviderID:"sts_piecemark_cowxref.uom_dollar",
editable:false,
format:"#,###,###.00",
horizontalAlignment:4,
location:"677,20",
name:"dollar_uom",
size:"66,20",
tabSeq:-2,
typeid:4,
uuid:"4339357A-D456-4A05-9149-8D79CC3F600F"
},
{
anchors:11,
labelFor:"item_width",
location:"478,0",
name:"item_width_label",
size:"43,20",
text:"i18n:sts.col.label.width",
toolTipText:"i18n:sts.col.label.width",
transparent:true,
typeid:7,
uuid:"456A94AB-D310-49C3-987F-4E93FFE6F381",
visible:false
},
{
anchors:11,
dataProviderID:"cost_each",
editable:false,
format:"#,###,###.00",
horizontalAlignment:4,
location:"619,20",
name:"cost_each",
size:"57,20",
tabSeq:-2,
typeid:4,
uuid:"53E70C91-40B6-4618-BF7C-B9D52C45A036"
},
{
anchors:11,
labelFor:"item_weight",
location:"566,0",
name:"item_weight_label",
size:"53,20",
text:"i18n:sts.col.label.item.weight",
toolTipText:"i18n:sts.col.label.item.weight",
transparent:true,
typeid:7,
uuid:"5CF9DB45-67CC-45C2-9DE1-C5FBD061C67F",
visible:false
},
{
anchors:11,
dataProviderID:"sts_pcmks_to_sheet.st2_sheets_to_jobs.customer_po",
editable:false,
location:"104,20",
name:"customer_po",
size:"80,20",
tabSeq:-2,
typeid:4,
uuid:"5EAF3416-F5B5-4899-9DA1-9731A5CD5DA1"
},
{
anchors:11,
labelFor:"dollar_uom",
location:"677,0",
mnemonic:"",
name:"dollar_uom_label",
size:"66,20",
text:"i18n:sts.col.label.dollar.per.uom",
toolTipText:"i18n:sts.col.label.dollar.per.uom",
transparent:true,
typeid:7,
uuid:"5EB9694E-C580-4ECE-89C5-C5CEBBA312E8"
},
{
anchors:11,
labelFor:"cost_of_work_quantity",
location:"806,0",
name:"cost_of_work_quantity_label",
size:"63,20",
text:"i18n:sts.col.label.cow.quantity",
toolTipText:"i18n:sts.col.label.cow.quantity",
transparent:true,
typeid:7,
uuid:"6564E1B4-4EDB-4700-B6C1-0546572946E8"
},
{
anchors:11,
dataProviderID:"cost_of_work_quantity",
editable:false,
format:"#,###,###.00",
horizontalAlignment:4,
location:"806,20",
name:"cost_of_work_quantity",
size:"63,20",
tabSeq:-2,
typeid:4,
uuid:"664826EC-C690-4422-BEE8-D8D465F88A6E"
},
{
anchors:11,
labelFor:"your_code",
location:"412,0",
mnemonic:"",
name:"your_code_label",
size:"66,20",
text:"i18n:sts.col.label.code.yours",
toolTipText:"i18n:sts.col.label.code.yours",
transparent:true,
typeid:7,
uuid:"7AA1F43D-AD56-4EAA-BA46-99FFB21808FA"
},
{
anchors:11,
dataProviderID:"piecemark",
editable:false,
location:"251,20",
name:"piecemark",
size:"69,20",
tabSeq:-2,
typeid:4,
uuid:"91909D8E-A3BD-42ED-AF62-2CA5E7FB07F2",
visible:false
},
{
anchors:11,
dataProviderID:"freeCheck2",
displayType:4,
location:"0,20",
name:"freeCheck",
onDataChangeMethodID:"-1",
size:"31,20",
transparent:true,
typeid:4,
uuid:"B30C42E4-C4E7-4D28-9971-D22867F01CAA"
},
{
anchors:11,
labelFor:"piecemark_unit_of_measure",
location:"373,0",
name:"piecemark_unit_of_measure_label",
size:"39,20",
text:"i18n:sts.col.label.uom",
toolTipText:"i18n:sts.col.label.uom",
transparent:true,
typeid:7,
uuid:"B572E5B9-9206-435C-9166-746CCA03B7C3"
},
{
anchors:11,
labelFor:"sheet_number",
location:"870,0",
size:"63,20",
text:"i18n:sts.col.label.sheet.number",
toolTipText:"i18n:sts.col.label.sheet.number",
transparent:true,
typeid:7,
uuid:"BE370F62-C463-4D1A-9C5C-AD1988D23466",
visible:false
},
{
anchors:11,
dataProviderID:"piecemark_unit_of_measure",
editable:false,
location:"373,20",
name:"piecemark_unit_of_measure",
size:"39,20",
tabSeq:-2,
typeid:4,
uuid:"C3F9DCDC-4E8D-4CE5-ADAC-E5EB276B4548"
},
{
anchors:11,
labelFor:"cost_each",
location:"619,0",
name:"cost_each_label",
size:"57,20",
text:"i18n:sts.col.label.cost.each",
toolTipText:"i18n:sts.col.label.cost.each",
transparent:true,
typeid:7,
uuid:"D4C63CCF-A84D-4368-A32F-BA6B4B1F4DE1"
},
{
anchors:11,
labelFor:"freeCheck",
location:"0,0",
name:"freeCheck_label",
size:"31,20",
text:"i18n:sts.col.label.clear",
toolTipText:"i18n:sts.col.label.clear",
transparent:true,
typeid:7,
uuid:"D52A06DB-27E0-48FA-BE65-684D301AA568"
},
{
anchors:11,
labelFor:"cost_of_work_code",
location:"183,0",
name:"cost_of_work_code_label",
size:"67,20",
text:"i18n:sts.col.label.customer.code",
toolTipText:"i18n:sts.col.label.customer.code",
transparent:true,
typeid:7,
uuid:"D55475DF-1E43-46FB-A8CC-B1EE940AB5D3"
},
{
height:82,
partType:5,
typeid:19,
uuid:"D7F3459C-AEA9-4C73-BC08-3C989A0F5A0D"
},
{
anchors:11,
dataProviderID:"charWidth",
editable:false,
horizontalAlignment:4,
location:"478,20",
name:"item_width",
size:"43,20",
tabSeq:-2,
typeid:4,
uuid:"DB181440-18F5-4B4B-B462-ED34153E88F2",
visible:false
},
{
anchors:11,
dataProviderID:"item_weight",
editable:false,
format:"#,###,###.0",
horizontalAlignment:4,
location:"566,20",
name:"item_weight",
size:"53,20",
tabSeq:-2,
typeid:4,
uuid:"F276E481-07E8-43C3-9182-819DD9CC73EB",
visible:false
},
{
anchors:11,
dataProviderID:"sts_pcmks_to_sheet.sheet_number",
editable:false,
horizontalAlignment:4,
location:"870,20",
name:"sheet_number",
size:"63,20",
tabSeq:-2,
typeid:4,
uuid:"F7535AD8-40EB-4C7B-8BC2-580F8244E3C8",
visible:false
}
],
name:"cost_of_work_existlist",
navigatorID:"-1",
onRecordSelectionMethodID:"-1",
onRenderMethodID:"75866502-3028-4E5E-AA56-56E7E50145A9",
onShowMethodID:"7E5A32FD-8CF5-451B-A164-04B3E008F894",
selectionMode:2,
size:"936,82",
styleName:"sts_two",
transparent:true,
typeid:3,
uuid:"E0E3BEF4-BDB6-4707-992F-9C52A0C2CE78",
view:3