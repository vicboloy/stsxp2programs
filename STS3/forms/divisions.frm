dataSource:"db:/stsservoy/associations",
extendsID:"2FE2D88B-0E43-4246-8AEE-1BBF9C7D9D31",
items:[
{
dataProviderID:"totalLicenses",
horizontalAlignment:4,
location:"166,46",
showFocus:false,
size:"87,20",
transparent:true,
typeid:7,
uuid:"056AED50-189B-4EC2-807E-C6E3A16256DF"
},
{
anchors:11,
labelFor:"company_name",
location:"27,71",
name:"company_name_label",
size:"140,20",
text:"i18n:table.associations.association_name",
toolTipText:"i18n:table.associations.association_name",
transparent:true,
typeid:7,
uuid:"14776049-8536-4068-879B-4CA1AC65995A"
},
{
anchors:11,
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"sts_assoc_to_tenant.company_name",
enabled:false,
fontType:"Arial,1,13",
horizontalAlignment:2,
location:"241,0",
name:"companyName",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
showClick:false,
size:"80,20",
transparent:true,
typeid:7,
uuid:"184C2CA1-D612-4E03-B792-5D52FEBE6769"
},
{
dataProviderID:"association_name",
enabled:false,
format:"|U",
location:"0,46",
name:"newEntry",
onDataChangeMethodID:"10C60271-78D6-4A88-A00B-CA1E56B9C75C",
size:"165,20",
tabSeq:-2,
typeid:4,
uuid:"1A654A29-3DDF-4507-918B-F72AD0D809A2"
},
{
horizontalAlignment:0,
labelFor:"btn_Delete",
location:"374,71",
size:"18,20",
text:"i18n:sts.col.label.delete.record",
toolTipText:"i18n:servoy.menuitem.deleteRecord",
transparent:true,
typeid:7,
uuid:"2D6EC990-13DB-4A57-9B32-8C3F1C0B5F36"
},
{
anchors:11,
dataProviderID:"licenses_mobile",
location:"275,91",
name:"mobile",
onDataChangeMethodID:"398FB5E4-B7CB-4BE9-A220-1036A34F2CE2",
selectOnEnter:true,
size:"100,20",
typeid:4,
uuid:"34C5CD9B-29C8-47FE-87FB-B3C998D670D6"
},
{
anchors:3,
horizontalAlignment:0,
location:"331,0",
name:"btn_Rename",
onActionMethodID:"F496C7D6-BA7E-4CF2-9232-0B5F8F475701",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"93,26",
text:"i18n:sts.btn.rename",
typeid:7,
uuid:"4CF44500-F597-4AA5-B9AE-1EF245F43E71",
visible:false
},
{
formIndex:1,
horizontalAlignment:0,
location:"0,0",
name:"btn_New",
onActionMethodID:"5FA94E54-432C-481E-B00B-77F8A66C8A97",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"107,26",
tabSeq:-2,
text:"i18n:sts.btn.divisions.new",
typeid:7,
uuid:"50E5C954-9271-4AA7-9065-C7F1EE263EA8"
},
{
horizontalAlignment:4,
location:"112,0",
size:"124,20",
text:"i18n:sts.label.company.name",
transparent:true,
typeid:7,
uuid:"551ED239-D6F2-4133-B91D-48AD849D7ED4"
},
{
anchors:11,
labelFor:"desktop",
location:"189,71",
size:"87,20",
text:"i18n:table.associations.licenses_desktop",
toolTipText:"i18n:table.associations.licenses_desktop",
transparent:true,
typeid:7,
uuid:"5C3B88EA-F04C-42B2-9C13-96F8741FF957"
},
{
anchors:11,
dataProviderID:"errorMessage2",
formIndex:3,
location:"0,25",
showClick:false,
showFocus:false,
size:"429,20",
text:"type",
transparent:true,
typeid:7,
uuid:"7E1C5EA4-F2D8-46DE-877B-AEEE23C4BA2C"
},
{
dataProviderID:"select",
displayType:4,
editable:false,
location:"5,91",
name:"btn_Check",
size:"23,20",
tabSeq:-2,
typeid:4,
uuid:"8C5485CA-DC89-4203-BDE7-F4A5EF674C4C",
visible:false
},
{
anchors:11,
labelFor:"mobile",
location:"275,71",
size:"100,20",
text:"i18n:table.associations.licenses_mobile",
toolTipText:"i18n:table.associations.licenses_mobile",
transparent:true,
typeid:7,
uuid:"9B1BB854-C39A-4212-9A71-E07B92C8896F"
},
{
height:117,
partType:5,
typeid:19,
uuid:"ABB948A9-8566-4B02-9F2A-417C7AE5AA8A"
},
{
anchors:11,
dataProviderID:"association_name",
editable:false,
enabled:false,
location:"27,91",
name:"company_name",
onDataChangeMethodID:"E5DE0617-7A12-4660-BCE7-52FBF6BCA1A8",
size:"140,20",
tabSeq:-2,
typeid:4,
uuid:"B34423AE-2E1C-4713-A7B0-2F177A834670"
},
{
location:"258,46",
size:"131,20",
text:"i18n:sts.col.label.licenses.consumed",
transparent:true,
typeid:7,
uuid:"BA33FF67-CEB5-4752-84CC-03836CA11846"
},
{
labelFor:"btn_Check",
location:"5,71",
size:"23,20",
transparent:true,
typeid:7,
uuid:"C880DF35-C785-4F9C-8453-ECA6EF925947",
visible:false
},
{
dataProviderID:"logic_flag",
displayType:4,
location:"166,91",
name:"btn_Office",
size:"23,20",
transparent:true,
typeid:4,
uuid:"CAB0B8CA-DB7B-45D1-82F4-A8AE4B2179E7"
},
{
height:67,
partType:1,
typeid:19,
uuid:"CB242020-0A52-462B-B191-B8DEA814C36A"
},
{
anchors:11,
dataProviderID:"licenses_desktop",
location:"189,91",
name:"desktop",
onDataChangeMethodID:"A5D9FAFB-5B2B-4E9D-BE6F-9CFD09A810F3",
selectOnEnter:true,
size:"87,20",
typeid:4,
uuid:"EB6CA245-6DA3-4122-B673-AB38F065AF68"
},
{
anchors:3,
location:"374,91",
name:"btn_Delete",
onActionMethodID:"E7F20FC9-205F-4531-86E3-859F92A9D93B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"18,20",
tabSeq:-2,
text:"i18n:sts.col.label.delete.record",
toolTipText:"i18n:servoy.menuitem.deleteRecord",
typeid:7,
uuid:"EE62555D-DDC7-40D9-9912-B86F6848E0E3"
},
{
labelFor:"btn_Office",
location:"166,71",
size:"23,20",
text:"i18n:table.associations.logic_flag",
toolTipText:"i18n:table.associations.logic_flag",
transparent:true,
typeid:7,
uuid:"FC078BDD-6F9A-4237-8457-CD326B4AD2FD"
}
],
name:"divisions",
navigatorID:"-1",
onRecordSelectionMethodID:"B4DA9FD0-0287-4BA4-A6DD-21B9321AE891",
onShowMethodID:"AC37FB18-D1DB-4306-A285-BC004019CEB7",
scrollbars:32,
showInMenu:false,
size:"429,140",
styleName:"sts_one",
typeid:3,
uuid:"8B09D889-B2FF-4ED0-81E5-5A559CB16EFD",
view:3