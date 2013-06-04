dataSource:"db:/svy_framework/nav_tab",
encapsulation:2,
extendsID:"DD43308E-9FAB-4BBB-B769-EB5ECD35357C",
items:[
{
formIndex:16027,
labelFor:"panel_id",
location:"10,40",
name:"panel_id_label",
size:"80,20",
styleClass:"field_title",
text:"i18n:svy.fr.lbl.panel",
transparent:true,
typeid:7,
uuid:"106EF321-842A-4FA8-A259-B14ED6B3A6D3"
},
{
dataProviderID:"tab_relation",
formIndex:16038,
location:"180,190",
name:"tab_relation",
size:"300,20",
typeid:4,
uuid:"11464C0D-C06D-42D7-B521-2C7E606D6FC8",
valuelistID:"2823B3BD-F6C8-4000-B6D0-1D01805C4742"
},
{
anchors:3,
formIndex:16007,
imageMediaID:"DC4105FB-B5B2-4AAF-9423-4DED7B5DD863",
location:"818,8",
mediaOptions:14,
name:"btn_cancel",
onActionMethodID:"A222F63B-556B-4AB9-8D01-34A6826D2B9A",
showClick:false,
showFocus:false,
size:"22,22",
toolTipText:"i18n:svy.fr.lbl.cancel",
transparent:true,
typeid:7,
uuid:"1239BABE-6075-4ED9-B1D8-4DB3B86DA60B"
},
{
formIndex:16031,
labelFor:"program",
location:"10,70",
name:"program_label",
size:"80,20",
styleClass:"field_title",
text:"i18n:svy.fr.lbl.program",
transparent:true,
typeid:7,
uuid:"156AC0CA-F8A9-493D-9075-0E29541B44B7"
},
{
formIndex:16013,
location:"460,100",
mediaOptions:14,
name:"btn_i18n",
onActionMethodID:"16EFE4CA-B788-4361-AC5E-D94E54D7D27B",
size:"20,20",
text:"...",
typeid:7,
uuid:"15BD54F0-B52F-46EE-AD0E-DA3E71F880F2"
},
{
formIndex:16016,
items:[
{
containsFormID:"8EDD909C-E746-48B0-88E4-E040119DF036",
location:"55,307",
relationName:"nav_tab_to_nav_tab_autofill",
text:"svy_nav_c_tab_autofill_tbl",
typeid:15,
uuid:"3158ED30-EE79-4B06-988F-350DD82D21A3"
}
],
location:"10,230",
name:"tab",
printable:false,
size:"830,250",
typeid:16,
uuid:"1F4EFDB3-79F8-43E2-9ECB-9B200E3DD6C2"
},
{
dataProviderID:"i18n_description",
editable:false,
formIndex:10600,
location:"240,100",
name:"Description_i18n",
size:"220,20",
typeid:4,
uuid:"253E8BF9-D8EE-4960-8A9D-68AC699CEFED"
},
{
formIndex:16037,
labelFor:"tab_relation",
location:"10,190",
name:"tab_relation_label",
size:"80,20",
styleClass:"field_title",
text:"i18n:svy.fr.lbl.relation",
transparent:true,
typeid:7,
uuid:"3DDCAD9B-D5AF-4926-B769-E1A804F80B6A"
},
{
dataProviderID:"panel_id",
displayType:3,
formIndex:16028,
location:"180,40",
name:"panel_id",
scrollbars:36,
size:"300,20",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"4C1D0C0D-5518-441D-91C5-1E11C25526B1",
valuelistID:"C141ABC9-CE67-4D8F-B3F1-17DE7791FA9C"
},
{
dataProviderID:"form_type",
displayType:3,
formIndex:10600,
horizontalAlignment:2,
location:"624,70",
scrollbars:36,
size:"90,60",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"4CA289E1-6703-4C7B-80FD-9BF64A400A8D",
valuelistID:"73C6E464-5DA3-45C1-8554-515B8EAC5A49"
},
{
formIndex:16039,
labelFor:"orientation_toolbar",
location:"487,40",
name:"orientation_toolbar_label",
size:"120,20",
styleClass:"field_group",
text:"i18n:svy.fr.lbl.orientation_toolbar",
typeid:7,
uuid:"5297C5BF-AE69-442B-B0EC-92571DBB8AE2"
},
{
anchors:3,
formIndex:13400,
imageMediaID:"44de9876-9f3e-4534-9495-17df06c1d02c",
location:"786,6",
mediaOptions:6,
size:"56,25",
tabSeq:-1,
transparent:true,
typeid:7,
uuid:"53C49DF6-5B99-41F3-96C2-C2018B3CC30B"
},
{
dataProviderID:"parent_tab_id",
formIndex:16030,
location:"180,160",
name:"parent_tab_id",
onDataChangeMethodID:"CF395D78-3AA6-464A-B5D7-A0E83B272296",
size:"300,20",
typeid:4,
uuid:"541F6ECD-2625-45DC-A6B2-1B7D90F6357B",
valuelistID:"7A18A1E2-102B-47B2-BF11-8A090E36676A"
},
{
dataProviderID:"program_id",
formIndex:16032,
location:"180,70",
name:"program",
size:"300,20",
typeid:4,
uuid:"61C9F93F-2E9F-4FA0-92B4-8F0F3DBE0B96",
valuelistID:"87CE680E-49BB-4060-9D7C-1E43F351E539"
},
{
dataProviderID:"orientation_toolbar",
displayType:3,
formIndex:16040,
location:"490,70",
name:"orientation_toolbar",
scrollbars:36,
size:"100,99",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"62C739E5-6CC7-4343-9E3F-7F6C458437E6",
valuelistID:"E8F53193-1F85-4B7B-BB12-678A12B0B800"
},
{
formIndex:16033,
labelFor:"sequence",
location:"10,130",
name:"sequence_label",
size:"80,20",
styleClass:"field_title",
text:"i18n:svy.fr.lbl.sequence",
transparent:true,
typeid:7,
uuid:"63D1B0A0-BC06-4BCF-82FD-59CEDE4F63E4"
},
{
anchors:11,
foreground:"#ffffff",
formIndex:10000,
location:"0,0",
mediaOptions:14,
size:"854,31",
styleClass:"programdtlbar",
tabSeq:-1,
typeid:7,
uuid:"6FA3AAC1-2CED-4B71-B75B-73DD84A5C838"
},
{
formIndex:16008,
labelFor:"Description",
location:"10,100",
mediaOptions:14,
size:"171,20",
styleClass:"field_title",
tabSeq:-1,
text:"i18n:svy.fr.lbl.tab_specific_description",
transparent:true,
typeid:7,
uuid:"7B151B45-24B7-4BB4-B932-7A63D6764B7B"
},
{
dataProviderID:"edit_on_tab",
displayType:3,
formIndex:16015,
location:"740,70",
name:"edit_on_tab",
scrollbars:36,
size:"99,55",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"836578A2-AE72-4C78-96D3-B7454D0559BE",
valuelistID:"B2743987-307F-4621-835A-47FD77678977"
},
{
dataProviderID:"flag_i18n",
displayType:4,
formIndex:15700,
location:"180,100",
onActionMethodID:"9D5C7E3A-BEB4-4177-8ACC-9F2625A9E41D",
size:"20,20",
styleClass:"noborder",
transparent:true,
typeid:4,
uuid:"90C0E8AE-6698-4BED-866E-33FE9C4EF8B8"
},
{
formIndex:13500,
location:"200,101",
mediaOptions:14,
size:"30,20",
styleClass:"field_title",
tabSeq:-1,
text:"i18n:svy.fr.lbl.i18n",
transparent:true,
typeid:7,
uuid:"90F30FFE-02C9-46CF-B5FC-A3A09215E142"
},
{
dataProviderID:"description",
formIndex:16000,
location:"240,100",
name:"Description",
size:"240,20",
typeid:4,
uuid:"9AFFFCE5-D58D-4146-8C07-BBD12554FC29"
},
{
height:490,
partType:5,
typeid:19,
uuid:"B22D77F9-3CA7-43EE-950B-FC97AE59BC73"
},
{
formIndex:16029,
labelFor:"parent_tab_id",
location:"10,160",
name:"parent_tab_id_label",
size:"80,20",
styleClass:"field_title",
text:"i18n:svy.fr.lbl.parent_tab",
transparent:true,
typeid:7,
uuid:"BBD04666-1094-400E-8367-AAA783E65E9B"
},
{
anchors:3,
formIndex:13600,
imageMediaID:"fa70961b-fa9b-4a51-8bb4-a05fd09049c6",
location:"840,6",
mediaOptions:14,
size:"7,25",
tabSeq:-1,
transparent:true,
typeid:7,
uuid:"BBEED848-E82E-4CCF-BD78-D8C7D76CB089"
},
{
dataProviderID:"sequence",
formIndex:16034,
location:"180,130",
name:"sequence",
size:"300,20",
typeid:4,
uuid:"C8A0160F-BD22-4927-BE3D-90CDF07EBD5E"
},
{
anchors:11,
fontType:"Verdana,1,10",
formIndex:12300,
location:"730,40",
mediaOptions:14,
size:"120,20",
styleClass:"field_group",
tabSeq:-1,
text:"i18n:svy.fr.lbl.edit_on_tab",
typeid:7,
uuid:"CCF9931D-D477-47CB-A8C1-55D1C29FA36A"
},
{
anchors:3,
formIndex:13500,
imageMediaID:"51a538b6-bde8-45ca-a3b6-e395e3af9aa6",
location:"780,6",
mediaOptions:14,
size:"6,25",
tabSeq:-1,
transparent:true,
typeid:7,
uuid:"E0E0A1DB-0C99-4A03-8535-33383BFB4F19"
},
{
fontType:"Verdana,1,10",
formIndex:12200,
location:"614,40",
mediaOptions:14,
size:"110,20",
styleClass:"field_group",
tabSeq:-1,
text:"i18n:svy.fr.lbl.form_type",
typeid:7,
uuid:"EB9BEC74-6F76-41BD-9CF2-AB98A6F35C8D"
},
{
anchors:3,
formIndex:16008,
imageMediaID:"054D751A-98C4-45B2-A87C-FAB2A104B15A",
location:"786,8",
mediaOptions:14,
name:"btn_save",
onActionMethodID:"532C9626-841D-4E03-98C8-B6358D94B075",
showClick:false,
showFocus:false,
size:"22,22",
toolTipText:"i18n:svy.fr.lbl.save",
transparent:true,
typeid:7,
uuid:"F1B4B3CC-7C1D-4B73-864D-C8E4EA58BF83"
}
],
name:"svy_nav_c_tab_dtl",
navigatorID:"-1",
onRecordSelectionMethodID:"9D5C7E3A-BEB4-4177-8ACC-9F2625A9E41D",
paperPrintScale:100,
size:"854,490",
styleName:"navigation",
titleText:"Tab detail",
typeid:3,
uuid:"DB5DC422-B61A-4459-8FFA-B6F4D618E0F6"