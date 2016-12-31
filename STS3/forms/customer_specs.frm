customProperties:"methods:{\
onRecordSelectionMethodID:{\
arguments:null,\
parameters:null\
}\
}",
dataSource:"db:/stsservoy/customers",
encapsulation:0,
extendsID:"-1",
items:[
{
anchors:6,
horizontalAlignment:0,
location:"446,487",
name:"btn_Close",
onActionMethodID:"89C383DE-E736-4E50-8603-1524629ED635",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"78,26",
tabSeq:-2,
text:"i18n:sts.btn.close",
typeid:7,
uuid:"00B2F276-9061-4ED0-9AF3-D81AB9B257A5"
},
{
anchors:12,
horizontalAlignment:0,
location:"235,487",
name:"btn_Cancel",
onActionMethodID:"14967395-D34F-4E4A-ACEB-91B1FCE3E9C5",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.cancel",
typeid:7,
uuid:"2BE62140-275D-49A3-B5C5-10FF7275F84E",
visible:false
},
{
anchors:12,
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"true\"\
]\
}\
}",
horizontalAlignment:0,
location:"87,487",
name:"btn_Edit",
onActionMethodID:"3F935FD7-0489-42AA-A670-C26F73B09E0C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"69,26",
tabSeq:-2,
text:"i18n:sts.btn.edit",
typeid:7,
uuid:"31AAEDB6-3C2F-4598-BA4B-3A05EE1454DC"
},
{
anchors:12,
enabled:false,
horizontalAlignment:0,
location:"5,487",
name:"btn_Delete",
onActionMethodID:"FF3A2D9F-98D2-4CB9-AADB-49103C11E1C5",
onDoubleClickMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
size:"77,26",
tabSeq:-2,
text:"i18n:sts.btn.delete",
typeid:7,
uuid:"339FE5AE-7C6A-4E18-9851-0CF115FD2845"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
horizontalAlignment:0,
imageMediaID:"7DE60661-FA20-4CC8-8F60-48A8518B377F",
location:"446,0",
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
uuid:"3A8B3055-32B0-440B-81FB-B2A90E482E0E"
},
{
anchors:12,
horizontalAlignment:0,
location:"161,487",
name:"btn_Save",
onActionMethodID:"5FFCF8BA-36DB-46CC-8AD3-1391CAEBFB4D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"69,26",
tabSeq:-2,
text:"i18n:sts.btn.save",
typeid:7,
uuid:"7ADDC6A0-99E7-443F-BA91-20AA078E4BF8",
visible:false
},
{
anchors:15,
borderType:"BevelBorder,0",
items:[
{
containsFormID:"54F91E55-F0E6-4523-9747-4113D51BF3AE",
location:"5,58",
name:"Customer",
relationName:"sts_customer_container",
text:"i18n:sts.tab.customer.customer",
typeid:15,
uuid:"11BADAB5-CA04-42E9-88CA-EE8949BBD084"
},
{
containsFormID:"34C436F3-F50C-4094-B2E6-E79C008D7264",
location:"293,147",
name:"i18n",
relationName:"sts_cust_to_address",
text:"i18n:sts.tab.customer.addresses",
typeid:15,
uuid:"8F5B3453-754E-473A-8951-B9EFC1BA348B"
},
{
containsFormID:"09ED1A58-743D-40D0-90E6-5C82E76BEC57",
location:"220,118",
name:"Financial",
relationName:"sts_customer_container",
text:"i18n:sts.tab.customer.accounting",
typeid:15,
uuid:"9D3ABF33-17F0-45B8-A803-D7FAAD3922E6"
},
{
containsFormID:"9BB8EB73-4C67-4825-BC86-4970E2AAC729",
location:"85,90",
name:"Barcode",
relationName:"sts_customer_container",
text:"i18n:sts.tab.customer.barcodes",
typeid:15,
uuid:"B8CD76DC-AFB4-443B-8368-8788536B356D"
}
],
location:"5,28",
name:"tabs",
printable:false,
size:"519,454",
tabSeq:-2,
typeid:16,
uuid:"825B3BC0-A018-4686-AC06-CA32A69A5E2C"
},
{
height:518,
partType:5,
typeid:19,
uuid:"9E729FC3-BD7A-420F-9D7D-E02E5D24964B"
},
{
location:"5,5",
showClick:false,
showFocus:false,
size:"99,20",
text:"i18n:sts.label.customer",
transparent:true,
typeid:7,
uuid:"A0EE472C-44D3-4BF1-8513-86C4DF52FCCC"
},
{
dataProviderID:"name",
location:"109,5",
showClick:false,
showFocus:false,
size:"294,20",
transparent:true,
typeid:7,
uuid:"CE2D0310-BC47-40AE-94A2-0AC468B2D257"
}
],
name:"customer_specs",
navigatorID:"-1",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"-1",
onShowMethodID:"6B4C0C75-68C1-4903-A9B5-F49D0FF64BFF",
scrollbars:12,
size:"529,507",
styleName:"sts_one",
typeid:3,
uuid:"EE9D7F11-257C-4193-ADC9-803B65C4698D"