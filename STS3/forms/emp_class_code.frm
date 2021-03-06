dataSource:"db:/stsservoy/employee_class",
encapsulation:0,
extendsID:"AA270F42-5225-4103-9803-10B4A05DB5CF",
items:[
{
labelFor:"class_description",
location:"353,65",
name:"class_description_label",
size:"106,20",
text:"i18n:sts.label.class.description",
transparent:true,
typeid:7,
uuid:"093CE894-8DB1-4E46-B5A9-A37D77DB68F9"
},
{
dataProviderID:"class_description",
format:"|#(45)",
location:"469,65",
name:"class_description",
selectOnEnter:true,
size:"140,20",
tabSeq:2,
text:"Class Description",
typeid:4,
uuid:"2615852F-E992-4C24-9604-27250BF88711"
},
{
extendsID:"B8264F35-3B2C-445D-8057-07A22DF67C55",
height:264,
typeid:19,
uuid:"323F63CE-AE36-4F14-BDF3-A7206B9B4E21"
},
{
labelFor:"class_code",
location:"353,35",
name:"class_code_label",
size:"106,20",
text:"i18n:sts.label.class.code",
transparent:true,
typeid:7,
uuid:"33872FDA-344B-4025-B056-BB7EF5F9EB0A"
},
{
extendsID:"E2825F7A-0DA1-4691-BA1B-0739BBF3CF8E",
size:"140,217",
typeid:4,
uuid:"3474A5F1-F180-4827-BFC5-6F859C6E0452"
},
{
horizontalAlignment:0,
location:"332,228",
name:"btn_Delete",
onActionMethodID:"0F0E5A77-AE9D-496C-B320-6F45FB46FE36",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"110,26",
tabSeq:-2,
text:"i18n:sts.btn.delete",
typeid:7,
uuid:"785B1BCD-1E6C-4362-8F20-93E3D974B5B1"
},
{
horizontalAlignment:0,
location:"450,228",
name:"btn_Cancel",
onActionMethodID:"84142266-FF85-4162-912D-D02BCBE7310A",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.cancel",
typeid:7,
uuid:"7D568459-EB45-44AA-B091-6B8E7582D0FB",
visible:false
},
{
dataProviderID:"class_uom",
displayType:10,
format:"|U[15]",
location:"469,125",
name:"class_uom",
selectOnEnter:true,
size:"140,20",
tabSeq:4,
text:"Class Uom",
typeid:4,
uuid:"7EB1C709-A794-430F-9FAF-53D9C9819078"
},
{
horizontalAlignment:0,
location:"104,4",
name:"btn_New",
onActionMethodID:"0AC1F465-7E38-41C1-9CB9-AC43FEAB1DEE",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"97,26",
tabSeq:-2,
text:"i18n:sts.btn.add.class",
typeid:7,
uuid:"8565BA6F-578A-4618-B435-2142937A6AF2"
},
{
dataProviderID:"class_value",
location:"469,155",
name:"class_value",
selectOnEnter:true,
size:"140,20",
tabSeq:5,
text:"Class Value",
typeid:4,
uuid:"85876B5B-FA24-4474-99EC-4F6377B18597"
},
{
dataProviderID:"class_order",
displayType:10,
location:"469,95",
name:"class_order",
selectOnEnter:true,
size:"140,20",
tabSeq:3,
text:"Class Order",
typeid:4,
uuid:"97D09DE2-1E2E-4923-935A-DAD6220556D9"
},
{
labelFor:"class_uom",
location:"353,125",
name:"class_uom_label",
size:"106,20",
text:"i18n:sts.label.class.uom",
transparent:true,
typeid:7,
uuid:"9C242DF6-7B58-4935-9727-1A1987929A1D"
},
{
dataProviderID:"class_code",
displayType:10,
format:"|U[15]",
location:"469,35",
name:"class_code",
onDataChangeMethodID:"9C590279-636E-480A-85F3-41C7518730A7",
selectOnEnter:true,
size:"140,20",
tabSeq:1,
text:"Class Code",
typeid:4,
uuid:"A54A6D67-A3D7-4774-B34D-2CA690A6B5AC"
},
{
labelFor:"class_order",
location:"353,95",
name:"class_order_label",
size:"106,20",
text:"i18n:sts.label.class.order.number",
transparent:true,
typeid:7,
uuid:"AA815AD5-5438-4F80-B14B-A96C5CE47D58"
},
{
labelFor:"class_value",
location:"353,155",
name:"class_value_label",
size:"106,20",
text:"i18n:sts.label.class.value",
transparent:true,
typeid:7,
uuid:"B5564D40-8DC5-48D8-9415-21F833633F0A"
},
{
borderType:"EmptyBorder,0,0,0,0",
horizontalAlignment:0,
imageMediaID:"7DE60661-FA20-4CC8-8F60-48A8518B377F",
location:"537,0",
mediaOptions:14,
name:"btn_Home",
onActionMethodID:"0F7CB54B-C3AC-4211-9A81-5E931253B58C",
showClick:false,
showFocus:false,
size:"78,31",
tabSeq:-2,
toolTipText:"i18n:sts.btn.home.return",
transparent:true,
typeid:7,
uuid:"D5A32489-A678-4315-A655-617FD3BA3108"
},
{
horizontalAlignment:0,
location:"544,228",
name:"btn_Close",
onActionMethodID:"75348F35-ED33-450C-B4F7-3FA566D5A6C0",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"65,26",
tabSeq:-2,
text:"i18n:sts.btn.close",
typeid:7,
uuid:"DF713BAE-62D3-4A82-9A6B-B573482A6518"
},
{
horizontalAlignment:0,
location:"453,228",
name:"btn_Edit",
onActionMethodID:"88A9ED29-5564-4694-A956-13D2D5BA098C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.edit",
typeid:7,
uuid:"E18F7761-3E00-432C-9054-4AEC60EF873E"
},
{
items:[
{
containsFormID:"A45A2D53-6AA5-4C05-9285-86864C2E4D0B",
location:"5,66",
name:"emp_class_lst",
relationName:"sts_employee_class_container",
text:"emp_class_lst",
typeid:15,
uuid:"E9F21DDB-62AA-4367-8559-B332B3219B2E"
}
],
location:"5,36",
name:"tablessX",
printable:false,
size:"322,222",
tabOrientation:-1,
tabSeq:-2,
transparent:true,
typeid:16,
uuid:"E1D79858-E90C-4BFB-B95F-0292999578DC"
},
{
horizontalAlignment:0,
location:"332,228",
name:"btn_Save",
onActionMethodID:"79A78EA7-A841-4268-9B58-8F4C44C432EB",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.save",
typeid:7,
uuid:"F5389F6C-B1E9-47D8-86CE-1175CAAE72A3",
visible:false
}
],
name:"emp_class_code",
navigatorID:"-1",
onHideMethodID:"F136BFBF-4BE1-48EC-87FE-5C11DFC2727D",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"76EF827F-5EBC-488E-AF0B-920AE2FC2807",
onShowMethodID:"E47D7FF2-8473-4AD4-AD69-AC99BA008846",
showInMenu:true,
size:"615,264",
styleName:"sts_one",
typeid:3,
uuid:"219ABDF4-2E73-4064-B4A6-127FDF9B98C8"