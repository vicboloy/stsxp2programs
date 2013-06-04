dataSource:"db:/svy_framework/nav_popmenu",
encapsulation:2,
extendsID:"DD43308E-9FAB-4BBB-B769-EB5ECD35357C",
items:[
{
height:220,
partType:5,
typeid:19,
uuid:"13CD397F-76CE-4A24-970B-3F50FF60DC35"
},
{
anchors:3,
formIndex:16008,
imageMediaID:"AA7C6DC4-F224-4FFB-9C18-3F4ECB7E1054",
location:"926,8",
mediaOptions:14,
name:"btn_delete",
onActionMethodID:"EAFBA1F7-CE1F-49E5-B102-CE44174ED6DB",
showClick:false,
showFocus:false,
size:"22,22",
toolTipText:"i18n:svy.fr.lbl.delete_popmenu_item",
transparent:true,
typeid:7,
uuid:"2D499D7E-AE75-409F-B79F-E783F2D23624"
},
{
anchors:3,
formIndex:13500,
imageMediaID:"51a538b6-bde8-45ca-a3b6-e395e3af9aa6",
location:"852,6",
mediaOptions:14,
size:"6,25",
tabSeq:-1,
transparent:true,
typeid:7,
uuid:"338080C4-CBFB-465E-9B35-B6C52F56472D"
},
{
anchors:3,
formIndex:16009,
imageMediaID:"324A663E-DC4A-4590-8D8E-9BDFF7DDC9AF",
location:"894,8",
mediaOptions:14,
name:"btn_duplicate",
onActionMethodID:"A8C7DD03-DE47-4556-A5F4-65B6A20DF038",
showClick:false,
showFocus:false,
size:"22,22",
toolTipText:"i18n:svy.fr.lbl.duplicate_popmenu_item",
transparent:true,
typeid:7,
uuid:"369CA4BD-2395-4BFD-8A59-BDF60ED0745E"
},
{
anchors:3,
formIndex:16008,
imageMediaID:"15508DD3-6E79-48A6-BAE4-55892C1E7B5F",
location:"0,60",
mediaOptions:14,
name:"btn_edit",
onActionMethodID:"DD4BFA51-6073-40D7-804D-B21F94ED41C8",
showClick:false,
showFocus:false,
size:"22,22",
toolTipText:"i18n:svy.fr.lbl.record_edit",
transparent:true,
typeid:7,
uuid:"39F63591-FF08-4F9B-B4A0-601A7FB72E77"
},
{
anchors:3,
formIndex:13400,
imageMediaID:"44de9876-9f3e-4534-9495-17df06c1d02c",
location:"858,6",
mediaOptions:6,
size:"96,25",
tabSeq:-1,
transparent:true,
typeid:7,
uuid:"4EF3AD71-630E-4EEC-9CA3-8DA0975766C6"
},
{
anchors:11,
dataProviderID:"sequence_nr",
editable:false,
formIndex:10300,
location:"640,60",
size:"70,20",
styleClass:"table",
text:"i18n:svy.fr.lbl.sequence",
typeid:4,
uuid:"61C65DC5-C374-4435-8A05-1A2E1F545196"
},
{
anchors:11,
dataProviderID:"label",
editable:false,
formIndex:10100,
location:"20,60",
size:"230,20",
styleClass:"table",
text:"i18n:svy.fr.lbl.label",
typeid:4,
uuid:"6E3C6D36-D099-4650-9D65-1A71DA4177C0"
},
{
height:31,
partType:1,
typeid:19,
uuid:"87D27AD0-48C5-404B-BB3E-8A155EBD1BEA"
},
{
anchors:11,
foreground:"#ffffff",
formIndex:10000,
location:"0,0",
mediaOptions:14,
size:"970,31",
styleClass:"programdtlbar",
tabSeq:-1,
typeid:7,
uuid:"91D5F43E-3B4C-4165-9A60-6680C648E9A8"
},
{
anchors:11,
dataProviderID:"parent_popmenu_id",
editable:false,
formIndex:10200,
location:"710,60",
size:"140,20",
styleClass:"table",
text:"i18n:svy.fr.lbl.parent",
typeid:4,
uuid:"AE9C5E0B-09B4-450E-AAF3-DFA33EFC0250",
valuelistID:"99A0A062-5CBF-42C7-89C5-50FCD28DAFC4"
},
{
dataProviderID:"function_id",
displayType:2,
editable:false,
formIndex:16015,
location:"250,60",
name:"function_id",
size:"390,20",
styleClass:"table",
text:"i18n:svy.fr.lbl.function",
typeid:4,
uuid:"B09A2517-17A9-45DC-94B0-52048F21EDF7",
valuelistID:"911D911D-5A06-4E26-92A6-A52716914781"
},
{
anchors:3,
formIndex:13600,
imageMediaID:"fa70961b-fa9b-4a51-8bb4-a05fd09049c6",
location:"952,6",
mediaOptions:14,
size:"7,25",
tabSeq:-1,
transparent:true,
typeid:7,
uuid:"C7005E8F-1535-4944-8C79-4C83EB95241F"
},
{
anchors:3,
formIndex:16008,
imageMediaID:"E0DD9216-4897-4F30-B4E4-6EE23AF39E26",
location:"860,8",
mediaOptions:14,
name:"btn_new",
onActionMethodID:"4AF5C92B-3153-4594-A83D-EE5CD3533EC7",
showClick:false,
showFocus:false,
size:"22,22",
toolTipText:"i18n:svy.fr.lbl.add_popmenu_item",
transparent:true,
typeid:7,
uuid:"C75F51DF-BC1F-4C20-BFD5-2183849E3882"
},
{
anchors:11,
dataProviderID:"nav_popmenu_to_nav_navigation_keys$popmenu.security_key_id",
editable:false,
location:"850,60",
size:"119,20",
styleClass:"table",
text:"i18n:svy.fr.lbl.securitykey",
typeid:4,
uuid:"ED5832BD-9635-4168-8596-797DAA08FDFB",
valuelistID:"4A2B9E4E-A2C1-40CE-9C01-9975F60F84EC"
}
],
name:"svy_nav_c_popmenu_root_tbl",
onDeleteAllRecordsCmdMethodID:"-1",
onDeleteRecordCmdMethodID:"-1",
onDuplicateRecordCmdMethodID:"-1",
onFindCmdMethodID:"-1",
onInvertRecordsCmdMethodID:"-1",
onNextRecordCmdMethodID:"-1",
onOmitRecordCmdMethodID:"-1",
onPreviousRecordCmdMethodID:"-1",
onPrintPreviewCmdMethodID:"-1",
onSearchCmdMethodID:"-1",
onShowOmittedRecordsCmdMethodID:"-1",
paperPrintScale:100,
rowBGColorCalculation:null,
scrollbars:33,
size:"970,220",
styleName:"navigation",
typeid:3,
uuid:"271B65B0-28BC-434B-9402-1DEE32901DD2",
view:3