dataSource:"db:/svy_framework/nav_user_table_view",
items:[
{
dataProviderID:"flag_user_default",
displayType:4,
location:"130,40",
name:"flag_user_default",
onDataChangeMethodID:"28A02339-AB33-4F73-BB1D-109A1ADBE671",
size:"20,20",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"328AED67-1416-4AC5-86B4-1BA42A7B7E3A"
},
{
labelFor:"flag_user_default",
location:"10,40",
mediaOptions:14,
name:"lbl_flag_user_default",
size:"110,20",
tabSeq:-1,
text:"i18n:svy.fr.lbl.default_table_view",
transparent:true,
typeid:7,
uuid:"4D6E848D-0BFD-4A85-80EC-D3FBEC64F0EA"
},
{
anchors:11,
dataProviderID:"search_id",
displayType:2,
editable:false,
location:"130,100",
name:"search_id",
size:"380,20",
typeid:4,
uuid:"5F4A0698-342F-41E6-A6CB-766CBA9AC68B",
valuelistID:"8AF3D8AA-0AF2-44CC-978C-521D64D8E8DE"
},
{
labelFor:"name",
location:"10,10",
mediaOptions:14,
name:"lbl_name",
size:"110,20",
tabSeq:-1,
text:"Name",
transparent:true,
typeid:7,
uuid:"64C2A217-E16E-4460-AE4B-FC6708B4599C"
},
{
anchors:6,
location:"220,520",
mediaOptions:14,
name:"btn_cancel",
onActionMethodID:"CCA10EA9-201F-4451-9827-22E5CBC750AF",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,20",
text:"i18n:svy.fr.lbl.cancel",
typeid:7,
uuid:"6D538DFC-DE2E-4BC0-92BE-9429C6EFD477"
},
{
location:"235,251",
mediaOptions:14,
name:"btn_select",
onActionMethodID:"426D4700-A976-4A5D-BDAD-8327432FBD9B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"50,20",
text:">",
typeid:7,
uuid:"852A0FF4-A1AD-46E2-943A-ECF84E3EB0C4"
},
{
location:"10,70",
name:"lbl_search_type",
size:"110,20",
text:"i18n:svy.fr.lbl.search_type",
transparent:true,
typeid:7,
uuid:"8F013D97-6FFF-4701-9066-4E821CA31372"
},
{
anchors:6,
customProperties:"methods:{
onActionMethodID:{
arguments:[
null,
\"true\"
]
}
}",
location:"390,520",
mediaOptions:14,
name:"btn_ok_show",
onActionMethodID:"D156EA34-FDCC-4CD4-8F49-296E744961AB",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"120,20",
text:"i18n:svy.fr.lbl.ok_show",
typeid:7,
uuid:"9389BA3D-4F1D-4807-9215-CCC484B02549"
},
{
location:"235,221",
mediaOptions:14,
name:"btn_all",
onActionMethodID:"01CB7A81-0261-4128-8014-DD5C8CCF4992",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"50,20",
text:">>",
typeid:7,
uuid:"9655FFCF-80B7-49EC-861F-46085CE5791C"
},
{
anchors:13,
items:[
{
containsFormID:"D138FCE2-B3F0-416C-90DA-8B48103162AC",
location:"14,158",
text:"svy_nav_fr_user_table_view_available",
typeid:15,
uuid:"6DD5ECAD-E31B-47B5-828D-9E6918A02E58"
}
],
location:"10,135",
name:"tab_unselected",
printable:false,
size:"220,370",
styleClass:"border",
typeid:16,
uuid:"96BF6CA1-9854-4C05-A64C-9FFCA4DFA2B9"
},
{
anchors:15,
items:[
{
containsFormID:"D29CD835-8597-4948-BBF5-179F4A8DA5DD",
location:"293,162",
relationName:"nav_user_table_view_to_sec_user_table_properties",
text:"svy_nav_fr_user_table_view_selected",
typeid:15,
uuid:"52F7415C-6BDA-472E-8328-8E780D7C3FDD"
}
],
location:"292,135",
name:"tab_selected",
printable:false,
size:"220,370",
styleClass:"border",
typeid:16,
uuid:"9B9D774F-10AB-4AF3-B886-30F909DE5DAB"
},
{
location:"235,311",
mediaOptions:14,
name:"btn_deselectAll",
onActionMethodID:"5B2C08B0-84EA-443A-AC79-3088D94EDB40",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"50,20",
text:"<<",
typeid:7,
uuid:"9FC74080-C330-42C6-82C5-DD259A2123E6"
},
{
dataProviderID:"search_type",
displayType:2,
editable:false,
location:"130,70",
name:"search_type",
onDataChangeMethodID:"ADD15741-42A9-46EA-84B8-F73C4DDF6577",
size:"140,20",
typeid:4,
uuid:"B68A3067-4A06-450D-BDB5-A384A9059F38",
valuelistID:"5DB0C305-8FA4-4292-AD54-AE73EE5E5529"
},
{
height:550,
partType:5,
typeid:19,
uuid:"C15AD26D-0C9B-4A36-BDBF-A955A9DD4018"
},
{
anchors:6,
customProperties:"methods:{
onActionMethodID:{
arguments:[
null,
\"false\"
]
}
}",
location:"305,520",
mediaOptions:14,
name:"btn_ok",
onActionMethodID:"D156EA34-FDCC-4CD4-8F49-296E744961AB",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,20",
text:"i18n:svy.fr.lbl.ok",
typeid:7,
uuid:"C490FE69-A927-4690-9245-B567838E165D"
},
{
anchors:11,
dataProviderID:"name",
location:"130,10",
name:"name",
size:"380,20",
typeid:4,
uuid:"C8021327-69E5-47F4-96FE-56E95A754D04"
},
{
location:"235,281",
mediaOptions:14,
name:"btn_deselect",
onActionMethodID:"2E06D218-BF68-444A-A3D2-DF2E7694AEFC",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"50,20",
text:"<",
typeid:7,
uuid:"CED69112-4BB5-4C3A-873B-48C7FE59CFA8"
},
{
location:"10,100",
name:"lbl_search_id",
size:"110,20",
text:"i18n:svy.fr.lbl.saved_search",
transparent:true,
typeid:7,
uuid:"D718F08A-69CE-45AD-B7EC-0DE825970C54"
}
],
name:"svy_nav_fr_user_table_view_dtl",
navigatorID:"-1",
onHideMethodID:"C36D6DDE-DB0D-4184-9DFB-536F17471D88",
onShowMethodID:"5B830FAB-7B6E-4468-A9A5-13C1430A504E",
paperPrintScale:100,
size:"520,550",
styleName:"navigation",
titleText:"i18n:svy.fr.lbl.edit_tableview",
typeid:3,
uuid:"1F04F69D-8093-4FF4-BFC4-5C9198BA2696"