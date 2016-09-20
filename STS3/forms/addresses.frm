dataSource:"db:/stsservoy/addresses",
extendsID:"B6CF9948-A35C-4413-A7F5-135E22B132BD",
items:[
{
anchors:12,
location:"5,374",
name:"btn_Delete",
onActionMethodID:"1965D683-4062-420F-A3A7-09CE735A5E8E",
onDoubleClickMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,26",
tabSeq:-2,
text:"i18n:sts.btn.delete.address",
typeid:7,
uuid:"24879B03-E6DC-4BB8-9A78-A308E4C7111B",
visible:false
},
{
anchors:11,
dataProviderID:"note",
displayType:1,
format:"|#(200)",
location:"304,30",
name:"note",
size:"200,85",
tabSeq:7,
text:"Note",
typeid:4,
uuid:"35BB5AD9-84ED-4518-89FF-5290CC66378E"
},
{
labelFor:"address_type",
location:"5,5",
name:"address_type_label",
onDoubleClickMethodID:"2D2C9CB6-BC69-4956-A0EF-ED3990541D03",
size:"119,20",
text:"i18n:sts.label.address.type",
transparent:true,
typeid:7,
uuid:"45DC0BC9-C4F9-4BD3-85BF-90B5EE14AA71"
},
{
anchors:6,
horizontalAlignment:0,
location:"373,374",
name:"btn_New",
onActionMethodID:"3268BC50-5A10-4EE0-9547-CC071F13BFDA",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,26",
tabSeq:-2,
text:"i18n:sts.btn.add.address",
typeid:7,
uuid:"474CA866-D448-4C4F-AE2E-9C9333931A21",
visible:false
},
{
dataProviderID:"line2",
format:"|#(100)",
location:"95,65",
name:"line2",
size:"204,20",
tabSeq:3,
text:"Line2",
typeid:4,
uuid:"4B6AC9A0-B921-4B6B-83BC-51BA7E0DEAAD"
},
{
dataProviderID:"state",
displayType:10,
format:"|#(2)",
location:"95,125",
name:"state",
size:"174,20",
tabSeq:5,
text:"State",
typeid:4,
uuid:"4D4A857C-5246-4C4B-A587-ABD417A53FB0",
valuelistID:"FEA9C79D-E28C-47BC-85D0-7365A4B60B43"
},
{
location:"5,150",
text:"i18n:sts.label.country",
transparent:true,
typeid:7,
uuid:"5DDC0280-201A-471B-8AEA-9F68AC54F029"
},
{
labelFor:"note",
location:"304,5",
name:"note_label",
size:"71,20",
text:"i18n:sts.label.note",
transparent:true,
typeid:7,
uuid:"6FDEA244-A39C-479E-916A-152024210A44"
},
{
dataProviderID:"line1",
format:"|#(100)",
location:"95,35",
name:"line1",
size:"204,20",
tabSeq:2,
text:"Line1",
typeid:4,
uuid:"7640DCDD-E819-4D3A-B697-005D8FFE6A99"
},
{
labelFor:"state",
location:"5,125",
name:"state_label",
size:"80,20",
text:"i18n:sts.label.state",
transparent:true,
typeid:7,
uuid:"79B9381C-79FA-40ED-8609-F577886A7418"
},
{
dataProviderID:"city",
displayType:10,
format:"|#(50)",
location:"95,95",
name:"city",
size:"174,20",
tabSeq:4,
text:"City",
typeid:4,
uuid:"85BEE301-8EDD-4892-8EEA-22EE0597FEBE",
valuelistID:"08308B8A-82EC-4397-87CC-DF0087D34A30"
},
{
anchors:15,
items:[
{
containsFormID:"B3138870-FB31-48D2-9E68-D09390C883BF",
location:"5,214",
relationName:"sts_addresses_list",
text:"address_lst",
typeid:15,
uuid:"4A5D02D8-4B4D-479D-9EF3-2CC6217BA41F"
}
],
location:"5,184",
name:"tabless",
printable:false,
size:"499,184",
tabOrientation:-1,
tabSeq:-2,
transparent:true,
typeid:16,
uuid:"9A52E448-89AE-4C86-BA24-6FF9311BE913"
},
{
anchors:3,
horizontalAlignment:4,
location:"423,5",
name:"editMessage",
text:"i18n:sts.label.edit.message",
transparent:true,
typeid:7,
uuid:"B2AC90ED-0E98-4D96-AA1D-F3316DEDBDB2",
visible:false
},
{
height:400,
partType:5,
typeid:19,
uuid:"BC9246F6-1ED2-484A-B739-4483AF87BA2B"
},
{
labelFor:"city",
location:"5,95",
name:"city_label",
size:"80,20",
text:"i18n:sts.label.city",
transparent:true,
typeid:7,
uuid:"C19F111B-7BFB-4425-B8D0-500AE9B2696B"
},
{
dataProviderID:"country",
format:"|U[50]",
location:"95,150",
typeid:4,
uuid:"CA7815AF-9CD8-4613-A456-4D9D0F8849C6"
},
{
anchors:12,
horizontalAlignment:0,
location:"284,374",
name:"btn_Cancel",
onActionMethodID:"E71A7A0A-4F5D-4AE6-AC22-33D055AD20FB",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,26",
tabSeq:-2,
text:"i18n:sts.btn.cancel",
typeid:7,
uuid:"DCD2094D-E1AE-4E8E-BAFF-C33A04174807",
visible:false
},
{
anchors:12,
horizontalAlignment:0,
location:"189,373",
name:"btn_Edit",
onActionMethodID:"D92C5F5E-161C-410F-A7DA-0243B2333602",
onDoubleClickMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,26",
tabSeq:-2,
text:"i18n:sts.btn.edit.address",
typeid:7,
uuid:"E2277028-5655-4874-B0A2-B87DF58D5B6F",
visible:false
},
{
dataProviderID:"zip_postal_code",
displayType:10,
location:"279,125",
name:"zip_postal_code",
onDataChangeMethodID:"2D2C9CB6-BC69-4956-A0EF-ED3990541D03",
placeholderText:"i18n:sts.label.zip.code",
size:"70,20",
tabSeq:6,
text:"Zip Postal Code",
typeid:4,
uuid:"E8E6EA4F-9821-4D26-9055-4BC6A5AFE025",
valuelistID:"1E3F1416-0A70-4F20-AA48-C026EF17DF8F"
},
{
dataProviderID:"address_type",
displayType:2,
format:"|U[40]",
location:"134,5",
name:"address_type",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
size:"140,20",
tabSeq:1,
text:"Address Type",
typeid:4,
uuid:"EA135DB5-01F8-453F-8168-1F88617C527D",
valuelistID:"56475DC5-77F8-429E-BE96-70DC9171C95F"
},
{
anchors:12,
horizontalAlignment:0,
location:"95,374",
name:"btn_Save",
onActionMethodID:"FF7606F7-99DE-4C97-8E9E-385A230040D9",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,26",
tabSeq:-2,
text:"i18n:sts.btn.save",
typeid:7,
uuid:"F0F16D7B-7C1C-4F7B-B57A-BE103A340913",
visible:false
},
{
labelFor:"line1",
location:"5,35",
name:"line1_label",
size:"80,20",
text:"i18n:sts.label.line1",
transparent:true,
typeid:7,
uuid:"F4E9D1E2-3207-4B9D-BC67-423667E500C4"
},
{
labelFor:"line2",
location:"5,65",
name:"line2_label",
size:"80,20",
text:"i18n:sts.label.line2",
transparent:true,
typeid:7,
uuid:"F5A941F1-908C-482E-A0C4-86CFDA728A7E"
}
],
name:"addresses",
navigatorID:"-1",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"718BC3DA-0399-48C1-B30B-4F89819F2C79",
onShowMethodID:"58D23BAB-196E-45BC-9D0D-1390DA9370E1",
showInMenu:true,
size:"509,400",
styleName:"sts_one",
typeid:3,
uuid:"E6818EAD-F587-4B8F-AA52-012EE881207A"