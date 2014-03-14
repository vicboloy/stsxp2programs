dataSource:"db:/stsservoy/tenant_list",
extendsID:"4E83FC43-0E9E-45F9-B01E-036E71805DF5",
items:[
{
anchors:11,
labelFor:"company_name",
location:"20,104",
name:"company_name_label",
size:"140,20",
text:"Comany Divisions",
transparent:true,
typeid:7,
uuid:"14776049-8536-4068-879B-4CA1AC65995A"
},
{
dataProviderID:"company_name",
format:"|U",
location:"0,44",
onDataChangeMethodID:"7CF8C088-C3E4-4C8A-A67F-F6EE593511AF",
size:"183,20",
typeid:4,
uuid:"1A654A29-3DDF-4507-918B-F72AD0D809A2"
},
{
labelFor:"delButton",
location:"160,104",
size:"18,20",
transparent:true,
typeid:7,
uuid:"2D6EC990-13DB-4A57-9B32-8C3F1C0B5F36"
},
{
location:"50,2",
onActionMethodID:"5E85197C-4A42-4D56-B1EE-7C833A2AB724",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"133,20",
text:"New Division",
typeid:7,
uuid:"50E5C954-9271-4AA7-9065-C7F1EE263EA8"
},
{
dataProviderID:"select",
displayType:4,
location:"0,124",
name:"select",
size:"23,20",
typeid:4,
uuid:"8C5485CA-DC89-4203-BDE7-F4A5EF674C4C"
},
{
height:243,
partType:5,
typeid:19,
uuid:"ABB948A9-8566-4B02-9F2A-417C7AE5AA8A"
},
{
anchors:11,
dataProviderID:"company_name",
location:"20,124",
name:"company_name",
size:"140,20",
typeid:4,
uuid:"B34423AE-2E1C-4713-A7B0-2F177A834670"
},
{
labelFor:"select",
location:"0,104",
name:"select_label",
size:"23,20",
transparent:true,
typeid:7,
uuid:"C880DF35-C785-4F9C-8453-ECA6EF925947"
},
{
height:66,
partType:1,
typeid:19,
uuid:"CB242020-0A52-462B-B191-B8DEA814C36A"
},
{
anchors:3,
location:"160,124",
name:"delButton",
onActionMethodID:"23DF4B40-3BF9-4277-A9FB-EEDA7CBCD90C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"18,20",
text:"X",
typeid:7,
uuid:"EE62555D-DDC7-40D9-9912-B86F6848E0E3"
},
{
anchors:11,
dataProviderID:"errorMessage",
foreground:"#ff0000",
location:"0,23",
size:"188,20",
transparent:true,
typeid:7,
uuid:"F5E2AD72-0181-4AF5-9C2A-ACC584F3BC8D"
}
],
name:"member_list_detail",
namedFoundSet:"separate",
navigatorID:"-1",
scrollbars:32,
showInMenu:false,
size:"188,243",
styleName:"sts_one",
typeid:3,
uuid:"8B09D889-B2FF-4ED0-81E5-5A559CB16EFD",
view:3