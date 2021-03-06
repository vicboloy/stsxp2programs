dataSource:"db:/stsservoy/permissions",
extendsID:"46F22939-6C19-4384-BFDC-2AEF98CB211F",
initialSort:"form_name asc, element_name asc",
items:[
{
anchors:11,
dataProviderID:"display_flags",
editable:false,
enabled:false,
location:"268,56",
name:"display_flags",
onActionMethodID:"9D6C9EDE-BB07-4BE7-821E-90A53BAF5F40",
size:"82,20",
tabSeq:3,
typeid:4,
uuid:"0406B304-1B98-4555-B5A1-41E8400E127D"
},
{
anchors:11,
labelFor:"display_flags",
location:"268,36",
name:"display_flags_label",
size:"82,20",
text:"i18n:sts.label.permissions",
transparent:true,
typeid:7,
uuid:"043F36AF-8FFE-46A6-9214-920BD2E06EE8"
},
{
height:251,
partType:5,
typeid:19,
uuid:"0827DBE5-6B74-4910-BA98-4279DD1CEF54"
},
{
anchors:11,
dataProviderID:"permission_type",
editable:false,
enabled:false,
location:"5,56",
name:"permission_type",
onActionMethodID:"9D6C9EDE-BB07-4BE7-821E-90A53BAF5F40",
size:"127,20",
tabSeq:1,
text:"Permission Type",
typeid:4,
uuid:"082DB233-390E-47D5-BFE4-23258826FA42",
valuelistID:"1530E9F5-9055-4876-9783-D2CB2E7195E9"
},
{
height:30,
partType:1,
typeid:19,
uuid:"3070C98A-95DA-46DC-8364-AB7E21446FEF"
},
{
anchors:3,
enabled:false,
horizontalAlignment:0,
location:"452,55",
name:"btn_Delete",
onActionMethodID:"17CA20A7-084C-4301-98F5-4528E628A338",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"27,20",
tabSeq:-2,
text:"i18n:sts.btn.x",
typeid:7,
uuid:"5123213E-AED5-498C-ADB8-90386B331AAB"
},
{
anchors:11,
labelFor:"permission_type",
location:"5,36",
name:"permission_type_label",
size:"127,20",
text:"i18n:sts.label.type",
transparent:true,
typeid:7,
uuid:"73938E27-7388-471A-A8A1-33B663F27C35"
},
{
anchors:11,
dataProviderID:"display_resource",
displayType:1,
editable:false,
enabled:false,
location:"130,56",
name:"display_resource",
onActionMethodID:"9D6C9EDE-BB07-4BE7-821E-90A53BAF5F40",
scrollbars:36,
size:"140,20",
tabSeq:2,
typeid:4,
uuid:"81BDFAFB-0024-4E82-8D8B-58634D5F5807",
valuelistID:"F1901F63-5399-43AD-B096-9B5E75C7B64A"
},
{
anchors:9,
horizontalAlignment:0,
labelFor:"btn_Delete",
location:"452,35",
name:"delButton_label",
size:"27,20",
text:"i18n:sts.btn.x",
transparent:true,
typeid:7,
uuid:"8653535E-5680-4272-BA82-506794A2C21D"
},
{
anchors:11,
labelFor:"display_resource",
location:"130,36",
name:"display_resource_label",
onActionMethodID:"104B7DBA-4D9F-4F0F-98CC-26EBA538DA4D",
size:"140,20",
text:"i18n:sts.label.resource",
transparent:true,
typeid:7,
uuid:"A48786C9-EC5E-41FC-8BA1-AF312C41AAB5"
},
{
fontType:"Arial,1,13",
location:"5,5",
size:"474,20",
text:"i18n:sts.label.permissions.msg.override",
transparent:true,
typeid:7,
uuid:"AC00CE62-ABD5-40F1-95B8-D1DC2A8DFD94"
},
{
anchors:3,
enabled:false,
horizontalAlignment:0,
location:"399,5",
name:"btn_New",
onActionMethodID:"5E85197C-4A42-4D56-B1EE-7C833A2AB724",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.new",
typeid:7,
uuid:"CDBF74A5-9F3B-4FEA-979B-B063B8107440"
}
],
name:"app_permiss_general",
onShowMethodID:"5B2689C4-B08A-4740-827F-C3533BEE3F3A",
scrollbars:32,
size:"484,251",
styleName:"sts_one",
typeid:3,
uuid:"EB7D6ADE-D726-461D-8984-46223237C197",
view:3