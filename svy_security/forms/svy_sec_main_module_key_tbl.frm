borderType:"EmptyBorder,0,0,0,0",
dataSource:"db:/svy_framework/sec_security_key",
encapsulation:2,
extendsID:"-1",
items:[
{
anchors:11,
horizontalAlignment:2,
labelFor:"name",
location:"0,0",
size:"220,20",
styleClass:"table",
text:"i18n:svy.fr.lbl.key",
typeid:7,
uuid:"05A9063B-0FBF-493C-B7A6-6A9458CBFAF4"
},
{
anchors:7,
horizontalAlignment:0,
imageMediaID:"c8ab7303-832a-4b3a-8a34-85e3bd552d07",
labelFor:"btn_delete",
location:"220,0",
mediaOptions:1,
onActionMethodID:"F25F8E6E-1CFA-44BC-B8A8-32CA40738DE2",
showClick:false,
size:"20,20",
styleClass:"table",
typeid:7,
uuid:"07BEE46A-46E4-480A-9A59-4D5C50722598"
},
{
anchors:7,
dataProviderID:"scopes.globals.svy_sec_dummy",
horizontalAlignment:0,
imageMediaID:"b2931fee-7e3e-4179-9f41-8b24d78b78bc",
location:"220,20",
mediaOptions:1,
name:"btn_delete",
onActionMethodID:"DBFF3E44-9F8F-4006-90D3-68D2F74B64A9",
showClick:false,
size:"20,20",
styleClass:"transparent",
typeid:7,
uuid:"29293223-1C23-4BB5-A829-4C77F217954A"
},
{
height:40,
partType:5,
typeid:19,
uuid:"572B206E-DC31-4D42-BAF5-D8D078C70015"
},
{
anchors:11,
dataProviderID:"name",
editable:false,
location:"0,20",
name:"name",
size:"220,20",
styleClass:"table",
typeid:4,
uuid:"FDE68F3B-89C8-4CB9-BBA8-DE769C8C1267"
}
],
name:"svy_sec_main_module_key_tbl",
onShowMethodID:"-1",
scrollbars:32,
showInMenu:true,
size:"240,40",
styleName:"security",
typeid:3,
uuid:"3FE83823-7253-4FA0-A44F-F5B1E1F05514",
view:3