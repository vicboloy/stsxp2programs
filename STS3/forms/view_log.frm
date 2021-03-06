dataSource:"db:/stsservoy/rf_transactions",
encapsulation:60,
extendsID:"B6CF9948-A35C-4413-A7F5-135E22B132BD",
items:[
{
anchors:12,
horizontalAlignment:0,
location:"100,269",
name:"btn_MaximizeWindow",
onActionMethodID:"B5F3140A-92DF-4C0D-A4A0-985F31F6573E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"59,26",
text:"i18n:sts.btn.maximize",
typeid:7,
uuid:"2C5689DA-0C2C-48E6-BCA2-926F189EDE7A"
},
{
anchors:6,
borderType:"EmptyBorder,0,0,0,0",
horizontalAlignment:0,
imageMediaID:"7DE60661-FA20-4CC8-8F60-48A8518B377F",
location:"477,269",
mediaOptions:14,
name:"btn_Home",
onActionMethodID:"0F7CB54B-C3AC-4211-9A81-5E931253B58C",
showClick:false,
showFocus:false,
size:"78,31",
toolTipText:"i18n:sts.btn.home.return",
transparent:true,
typeid:7,
uuid:"3B1802BB-814C-4558-8F57-37FF1A3B91C5"
},
{
anchors:15,
items:[
{
containsFormID:"7EDC2B9D-2CEB-478C-8ED2-84C2DB2C28C3",
location:"5,35",
relationName:"sts_rf_transactions",
text:"sts_nav_log",
typeid:15,
uuid:"4631759A-E632-4DB6-9386-3B0BA45FEB31"
}
],
location:"5,5",
name:"tabless",
printable:false,
size:"545,260",
tabOrientation:-1,
transparent:true,
typeid:16,
uuid:"75803F54-C86D-4870-B443-1186387D9FD2"
},
{
anchors:12,
location:"359,270",
text:"i18n:sts.txt.time.last.update",
transparent:true,
typeid:7,
uuid:"A6FA09F8-EEF3-45FC-B25A-ED2589D21AD9"
},
{
anchors:12,
horizontalAlignment:0,
location:"174,269",
name:"btn_Close",
onActionMethodID:"90788B49-C8B0-43F4-8D84-E6731AE8332C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
text:"i18n:sts.btn.close",
typeid:7,
uuid:"AD80A244-1FE2-413D-B933-BA4F679D5816"
},
{
anchors:12,
enabled:false,
horizontalAlignment:0,
location:"269,269",
name:"btn_Filters",
onActionMethodID:"DBA18592-9F56-420F-B454-528ABE6F7D12",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
text:"i18n:sts.btn.filters",
typeid:7,
uuid:"C0B1E9C5-2FF3-414F-A9E6-CF8AB7A49A15"
},
{
anchors:12,
horizontalAlignment:0,
location:"5,269",
name:"btn_EditSettingsLeftPanel",
onActionMethodID:"9B76F79D-345F-4C2A-830E-CB035E55E972",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
text:"i18n:sts.btn.settings",
typeid:7,
uuid:"C9EB1C7F-DDF7-4F40-A5FF-42ACF2CC6357"
},
{
height:300,
partType:5,
typeid:19,
uuid:"D110A3A6-8E75-4704-A941-2C895F8E8EAC"
},
{
anchors:14,
dataProviderID:"localTime",
location:"444,270",
name:"last_Log_Update",
size:"34,20",
transparent:true,
typeid:7,
uuid:"D34B9573-991F-4FC8-8D59-9DFDDB9FCDCD"
}
],
name:"view_log",
onHideMethodID:"E557B85D-59D5-4488-BD79-20CC8421A7C4",
onRenderMethodID:"-1",
onShowMethodID:"4B78B9BC-6D87-4A10-9336-24733ED72A4C",
showInMenu:true,
size:"555,300",
styleName:"sts_one",
typeid:3,
uuid:"B5115541-D83F-49DF-A720-E8AAB739FD85"