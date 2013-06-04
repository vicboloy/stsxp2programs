borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/svy_framework/sec_owner_in_module",
encapsulation:2,
extendsID:"-1",
items:[
{
anchors:7,
dataProviderID:"scopes.globals.svy_sec_dummy",
horizontalAlignment:0,
imageMediaID:"b2931fee-7e3e-4179-9f41-8b24d78b78bc",
location:"345,20",
mediaOptions:1,
name:"btn_delete",
onActionMethodID:"D849916A-114F-47AB-BA49-93A82800F3C2",
showClick:false,
size:"20,20",
styleClass:"transparent",
typeid:7,
uuid:"211C981D-0BD2-4F34-82C6-0F65FA6B8897"
},
{
anchors:11,
horizontalAlignment:2,
labelFor:"start_date",
location:"125,0",
size:"110,20",
styleClass:"table",
text:"i18n:svy.fr.lbl.start_date",
typeid:7,
uuid:"65613F9B-5F3F-43DF-B257-3E860E8A9DDA"
},
{
anchors:7,
horizontalAlignment:0,
imageMediaID:"c8ab7303-832a-4b3a-8a34-85e3bd552d07",
labelFor:"btn_delete",
location:"345,0",
mediaOptions:1,
onActionMethodID:"04A2F1E3-2F7F-4384-B678-3BC96673C3F8",
showClick:false,
size:"20,20",
styleClass:"table",
typeid:7,
uuid:"78E6310E-7BCE-4222-B599-35DBCDF10C7C"
},
{
height:40,
partType:5,
typeid:19,
uuid:"90FA22B3-7AAA-448B-834B-20E440AD80E0"
},
{
anchors:11,
dataProviderID:"sec_owner_in_module_to_sec_module.name",
editable:false,
location:"0,20",
name:"name",
size:"125,20",
styleClass:"table",
typeid:4,
uuid:"C607DC4A-02AD-4116-9AC9-87D8166B9C13"
},
{
anchors:11,
dataProviderID:"start_date",
displayType:5,
format:"dd/MM/yyyy",
location:"125,20",
name:"start_date",
size:"110,20",
styleClass:"table",
typeid:4,
uuid:"E421891F-E895-4841-96EA-B42F11897F92"
},
{
anchors:11,
dataProviderID:"end_date",
displayType:5,
format:"dd/MM/yyyy",
location:"235,20",
name:"end_date",
size:"110,20",
styleClass:"table",
typeid:4,
uuid:"E704F113-9B4E-426A-A52B-2AAE08C83364"
},
{
anchors:11,
horizontalAlignment:2,
labelFor:"name",
location:"0,0",
size:"125,20",
styleClass:"table",
text:"i18n:svy.fr.lbl.module",
typeid:7,
uuid:"E8FEA6F3-4FE4-49D3-84B1-83925AB73877"
},
{
anchors:11,
horizontalAlignment:2,
labelFor:"end_date",
location:"235,0",
size:"110,20",
styleClass:"table",
text:"i18n:svy.fr.lbl.end_date",
typeid:7,
uuid:"F7BFF788-7846-40B4-8B7A-E372CCC84F3B"
}
],
name:"svy_sec_main_owner_module_tbl",
onShowMethodID:"-1",
scrollbars:32,
showInMenu:true,
size:"365,40",
styleName:"security",
typeid:3,
uuid:"FFBB01DC-4E20-4E4E-A94E-9C1E0FA8CAFF",
view:3