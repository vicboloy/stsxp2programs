dataSource:"db:/stsservoy/associations",
encapsulation:32,
extendsID:"-1",
items:[
{
anchors:6,
horizontalAlignment:0,
location:"795,133",
name:"closeButt",
onActionMethodID:"F3F815E5-1968-4D40-85AB-CEE01C3AC82D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
tabSeq:-2,
text:"Close",
typeid:7,
uuid:"56317553-9349-420D-BB37-7C91A213D509"
},
{
height:159,
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
containsFormID:"12298A77-805B-4074-8463-021BDE7C7523",
location:"116,65",
relationName:"sec_associations.sts_assoc_to_users",
text:"tenant_users",
typeid:15,
uuid:"112BA5C3-9192-46B4-87C7-ECD20AC8D267"
},
{
containsFormID:"8B09D889-B2FF-4ED0-81E5-5A559CB16EFD",
location:"7,74",
relationName:"sec_associations",
text:"associations",
typeid:15,
uuid:"FE5CB7D0-2902-4A2D-91A4-277A6C6EEF65"
}
],
location:"5,30",
name:"split",
printable:false,
size:"870,98",
tabOrientation:-2,
tabSeq:-2,
transparent:true,
typeid:16,
uuid:"D0BDDC3F-0707-4D71-A106-ECD99CA53E2E"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
horizontalAlignment:0,
imageMediaID:"7DE60661-FA20-4CC8-8F60-48A8518B377F",
location:"802,0",
mediaOptions:14,
name:"homeButt",
onActionMethodID:"0F7CB54B-C3AC-4211-9A81-5E931253B58C",
showClick:false,
showFocus:false,
size:"78,31",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"D2AFF154-F05A-42DC-8425-51E5285448D6"
},
{
dataProviderID:"errorMessage",
foreground:"#ff0000",
location:"380,5",
size:"433,20",
transparent:true,
typeid:7,
uuid:"D6F8A1CD-EC42-407F-A88D-BE637F891B84"
}
],
name:"tenants",
navigatorID:"-1",
onHideMethodID:"-1",
onLoadMethodID:"8892A0D9-A658-4625-96FC-392F3EEE7274",
showInMenu:true,
size:"880,376",
styleName:"sts_one",
typeid:3,
uuid:"AF8D7058-F1ED-419C-9C22-0FDEA09C57AF",
view:0