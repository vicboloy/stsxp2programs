dataSource:"db:/stsservoy/employee",
encapsulation:0,
extendsID:"-1",
items:[
{
anchors:12,
horizontalAlignment:0,
location:"280,457",
name:"btn_Cancel",
onActionMethodID:"868EBCCD-CB9C-4014-A79F-9BF649AE09C0",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.cancel",
typeid:7,
uuid:"03984F39-B318-4FB0-8073-57F527700281",
visible:false
},
{
anchors:12,
horizontalAlignment:0,
location:"5,456",
name:"btn_Delete",
onActionMethodID:"F545C75F-A84C-43DF-BA74-1AB91158C183",
onDoubleClickMethodID:"-1",
onRenderMethodID:"C74EDC7C-1D05-4C89-A7DD-DDA85668ACD1",
onRightClickMethodID:"-1",
size:"85,26",
tabSeq:-2,
text:"i18n:sts.btn.delete",
typeid:7,
uuid:"08757308-3040-4D5B-8D46-0EABE3A65487"
},
{
anchors:6,
horizontalAlignment:0,
location:"464,456",
name:"btn_Close",
onActionMethodID:"AE427593-ABE1-4D76-AE72-7AAFF8E12156",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.close",
typeid:7,
uuid:"5EAD340F-AFF2-4412-81EF-D3BF1A5F6CC6"
},
{
height:488,
partType:5,
typeid:19,
uuid:"91B52B09-501A-44B5-A5E0-D0E0E022219B"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
horizontalAlignment:0,
imageMediaID:"7DE60661-FA20-4CC8-8F60-48A8518B377F",
location:"471,0",
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
uuid:"9864A0CA-8B5F-40D4-A7B3-A828CC80B88E"
},
{
anchors:15,
items:[
{
containsFormID:"BB1B2F7E-C46C-4524-95B5-1F69B94CF939",
location:"195,160",
name:"Login_Details",
relationName:"sts_employee_to_userid",
text:"i18n:sts.tab.employee.account",
typeid:15,
uuid:"1954C50B-5025-4EA1-AB5E-F2ED31E29EF9"
},
{
containsFormID:"4B0A4F42-885F-493A-AF55-DD6A25926088",
location:"139,131",
name:"employee_addresses",
relationName:"sts_employee_to_address",
text:"i18n:sts.tab.customer.addresses",
typeid:15,
uuid:"69535606-5912-477D-80B1-F5EAA83FEBFE"
},
{
containsFormID:"B26BD786-5340-4AEB-AFD5-84C95ADA4321",
location:"105,100",
name:"Account",
relationName:"sts_employee_container",
text:"i18n:sts.tab.employee.personal",
typeid:15,
uuid:"7C4E02BB-6B50-476D-8BC9-1D7D698D540D"
},
{
containsFormID:"5340E756-265D-4089-A0CD-7A29A72C302D",
location:"19,70",
name:"employee",
relationName:"sts_employee_container",
text:"i18n:sts.tab.employee.employee",
typeid:15,
uuid:"D6249FF4-2973-405E-AF02-BEFD84F7B9CC"
}
],
location:"5,29",
name:"tabs",
printable:false,
size:"539,422",
tabSeq:-2,
typeid:16,
uuid:"A808F01F-EF9C-45EF-AC6E-97879D83F525"
},
{
dataProviderID:"employeeFullName",
location:"10,4",
name:"employeeFullName",
onRenderMethodID:"-1",
size:"358,20",
text:"type",
transparent:true,
typeid:7,
uuid:"A975932E-07B7-4D4D-B6A0-678F9BFED2D5"
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
location:"100,457",
name:"btn_Edit",
onActionMethodID:"CC3812E4-6FD8-461F-9749-A972DF579433",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.edit",
typeid:7,
uuid:"C162F459-7030-49FA-B18F-AEE055CC747A"
},
{
anchors:12,
horizontalAlignment:0,
location:"190,457",
name:"btn_Save",
onActionMethodID:"7C64DFF6-6587-439E-B5C3-F9204FDA3248",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.save",
typeid:7,
uuid:"FD645D72-54CC-4C37-BD30-564EFB0C147A",
visible:false
}
],
name:"employee_specs",
navigatorID:"-1",
onRecordSelectionMethodID:"B95D8BF7-792E-41C5-83FE-76D7127C9670",
onShowMethodID:"636B132D-6A0E-4E10-A916-30A9CBC1B3D6",
scrollbars:32,
size:"549,511",
styleName:"sts_one",
typeid:3,
uuid:"22EFDBB4-D013-452F-82D2-60D162098B25"