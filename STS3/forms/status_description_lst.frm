customProperties:"methods:{\
onRecordSelectionMethodID:{\
arguments:null,\
parameters:null\
},\
onSortCmdMethodID:{\
arguments:null,\
parameters:null\
}\
}",
dataSource:"db:/stsservoy/status_description",
encapsulation:0,
extendsID:"B437E60E-3696-4619-BACC-D42AE6A64D83",
items:[
{
anchors:11,
dataProviderID:"sts_status_description_to_associations.association_name",
editable:false,
location:"69,20",
name:"fab_shop",
size:"69,20",
typeid:4,
uuid:"00F5997B-7EF4-47A0-8498-BF4FDF420E13"
},
{
anchors:11,
labelFor:"status_code",
location:"138,0",
name:"status_code_label",
showClick:false,
showFocus:false,
size:"53,20",
text:"i18n:table.general.status_code",
toolTipText:"i18n:table.general.status_code",
transparent:true,
typeid:7,
uuid:"17277860-0A78-4ED7-8BDB-FE49B1FE4557"
},
{
anchors:11,
labelFor:"fab_shop",
location:"69,0",
name:"fab_shop_label",
showClick:false,
showFocus:false,
size:"69,20",
text:"i18n:table.associations.association_name",
toolTipText:"i18n:table.associations.association_name",
transparent:true,
typeid:7,
uuid:"1A4BC706-897E-429A-BDDA-5886EA589BAC"
},
{
anchors:11,
labelFor:"status_sequence",
location:"0,0",
name:"status_sequence_label",
showClick:false,
showFocus:false,
size:"71,20",
text:"i18n:table.general.process.id",
toolTipText:"i18n:table.general.process.id",
transparent:true,
typeid:7,
uuid:"1B9FF1E9-A36B-463E-85CA-923AB7F3BAF7"
},
{
anchors:11,
dataProviderID:"status_sequence",
editable:false,
format:"#|",
horizontalAlignment:4,
location:"0,20",
name:"status_sequence",
size:"71,20",
text:"Status Sequence",
typeid:4,
uuid:"A2D540A4-BABA-4499-A830-2915C1ACEB2A"
},
{
extendsID:"309DAEC2-F9E3-4DBF-8718-0884B5FE1FBF",
height:62,
typeid:19,
uuid:"A7A396C0-F01A-4908-A69E-2FEEDEA3C0C9"
},
{
anchors:11,
dataProviderID:"status_code",
editable:false,
location:"138,20",
name:"status_code",
size:"53,20",
text:"Status Code",
typeid:4,
uuid:"BCA1855A-49BE-46C0-AA83-24D8004DF59B"
}
],
name:"status_description_lst",
navigatorID:"-1",
onNewRecordCmdMethodID:"0",
onRecordSelectionMethodID:"F4FE1C11-ACB3-45A0-AFAD-5265E95D99BD",
onSortCmdMethodID:"0",
scrollbars:32,
showInMenu:false,
size:"191,404",
styleName:"sts_one",
typeid:3,
uuid:"2235F743-C14C-4E9E-9FAD-0F29E32B7CB6",
view:3