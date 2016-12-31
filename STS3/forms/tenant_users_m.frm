customProperties:"design:{\
corporate:\"true\"\
}",
dataSource:"db:/stsservoy/users",
encapsulation:32,
extendsID:"-1",
items:[
{
anchors:6,
horizontalAlignment:0,
location:"795,133",
name:"btn_Close",
onActionMethodID:"F3F815E5-1968-4D40-85AB-CEE01C3AC82D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.close",
typeid:7,
uuid:"56317553-9349-420D-BB37-7C91A213D509"
},
{
height:163,
partType:5,
typeid:19,
uuid:"6329F609-9DF4-4C74-97F4-ADAE59320D44"
},
{
anchors:11,
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"sec_tenants_active.company_name",
editable:false,
format:"|U",
location:"5,5",
onDataChangeMethodID:"7CF8C088-C3E4-4C8A-A67F-F6EE593511AF",
placeholderText:"Company Name",
size:"119,20",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"A4557C19-B037-4393-993D-F92C8B878475"
},
{
anchors:15,
items:[
{
containsFormID:"C88F92EB-CAB3-4534-83E3-1D6A46FEB83C",
location:"85,56",
relationName:"sts_users",
text:"division_user_detail",
typeid:15,
uuid:"9CC612FB-87B1-45E5-98CD-66BEE1740579"
},
{
containsFormID:"848ADB50-6F70-4C9D-AAF0-461B51569BF4",
location:"5,56",
relationName:"sts_users",
text:"division_users",
typeid:15,
uuid:"CB921697-88D6-4566-826E-A51A31FF2325"
}
],
location:"5,26",
name:"split",
onChangeMethodID:"3A0FA441-B43D-40D0-BA06-96C0872D71C7",
printable:false,
size:"870,102",
tabOrientation:-2,
transparent:true,
typeid:16,
uuid:"C14378EA-0E2D-4BBE-9F1B-F228AB53FAE2"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
horizontalAlignment:0,
imageMediaID:"7DE60661-FA20-4CC8-8F60-48A8518B377F",
location:"802,0",
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
uuid:"D2AFF154-F05A-42DC-8425-51E5285448D6"
},
{
enabled:false,
foreground:"#ff0000",
location:"380,5",
showClick:false,
showFocus:false,
size:"433,20",
transparent:true,
typeid:7,
uuid:"D6F8A1CD-EC42-407F-A88D-BE637F891B84"
}
],
name:"tenant_users_m",
navigatorID:"-1",
onHideMethodID:"65A69292-B7F4-4F11-9A42-A0078026855A",
onLoadMethodID:"8892A0D9-A658-4625-96FC-392F3EEE7274",
onShowMethodID:"A71DE566-7137-4EB4-A1F6-8D33C59BE997",
showInMenu:true,
size:"880,376",
styleName:"sts_one",
typeid:3,
uuid:"AF8D7058-F1ED-419C-9C22-0FDEA09C57AF",
view:0