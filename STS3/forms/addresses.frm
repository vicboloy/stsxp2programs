dataSource:"db:/stsservoy/addresses",
encapsulation:60,
items:[
{
location:"41,324",
name:"deleteButton",
onActionMethodID:"1965D683-4062-420F-A3A7-09CE735A5E8E",
onDoubleClickMethodID:"-1",
onRenderMethodID:"AC080D32-4094-4A4B-9591-EA87495D8865",
onRightClickMethodID:"-1",
size:"265,26",
tabSeq:9,
text:"Delete",
typeid:7,
uuid:"24879B03-E6DC-4BB8-9A78-A308E4C7111B"
},
{
dataProviderID:"note",
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
text:"Address Type",
transparent:true,
typeid:7,
uuid:"45DC0BC9-C4F9-4BD3-85BF-90B5EE14AA71"
},
{
location:"349,324",
name:"addAddressButton",
onActionMethodID:"3268BC50-5A10-4EE0-9547-CC071F13BFDA",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,26",
tabSeq:10,
text:"Add Address",
typeid:7,
uuid:"474CA866-D448-4C4F-AE2E-9C9333931A21"
},
{
dataProviderID:"line2",
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
location:"95,125",
name:"state",
size:"140,20",
tabSeq:5,
text:"State",
typeid:4,
uuid:"4D4A857C-5246-4C4B-A587-ABD417A53FB0",
valuelistID:"FEA9C79D-E28C-47BC-85D0-7365A4B60B43"
},
{
labelFor:"note",
location:"304,5",
name:"note_label",
size:"80,20",
text:"Note",
transparent:true,
typeid:7,
uuid:"6FDEA244-A39C-479E-916A-152024210A44"
},
{
dataProviderID:"line1",
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
text:"State",
transparent:true,
typeid:7,
uuid:"79B9381C-79FA-40ED-8609-F577886A7418"
},
{
dataProviderID:"city",
displayType:10,
location:"95,95",
name:"city",
size:"140,20",
tabSeq:4,
text:"City",
typeid:4,
uuid:"85BEE301-8EDD-4892-8EEA-22EE0597FEBE",
valuelistID:"08308B8A-82EC-4397-87CC-DF0087D34A30"
},
{
items:[
{
containsFormID:"B3138870-FB31-48D2-9E68-D09390C883BF",
location:"0,185",
relationName:"sts_addresses_list",
text:"address_lst",
typeid:15,
uuid:"4A5D02D8-4B4D-479D-9EF3-2CC6217BA41F"
}
],
location:"0,155",
name:"tabless",
printable:false,
size:"504,159",
tabOrientation:-1,
tabSeq:8,
transparent:true,
typeid:16,
uuid:"9A52E448-89AE-4C86-BA24-6FF9311BE913"
},
{
height:400,
partType:5,
typeid:19,
uuid:"BC9246F6-1ED2-484A-B739-4483AF87BA2B"
},
{
labelFor:"zip_postal_code",
location:"330,125",
name:"zip_postal_code_label",
size:"80,20",
text:"Zipcode",
typeid:7,
uuid:"BDB24832-DA28-423F-9E1F-A7F1915B0427"
},
{
labelFor:"city",
location:"5,95",
name:"city_label",
size:"80,20",
text:"City",
transparent:true,
typeid:7,
uuid:"C19F111B-7BFB-4425-B8D0-500AE9B2696B"
},
{
location:"374,365",
name:"cancelButton",
onActionMethodID:"E71A7A0A-4F5D-4AE6-AC22-33D055AD20FB",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,26",
text:"Cancel",
typeid:7,
uuid:"DCD2094D-E1AE-4E8E-BAFF-C33A04174807",
visible:false
},
{
location:"185,365",
name:"editButton",
onActionMethodID:"D92C5F5E-161C-410F-A7DA-0243B2333602",
onDoubleClickMethodID:"-1",
onRenderMethodID:"86B853C9-AA6A-4395-89A8-B1BB1F8939C7",
onRightClickMethodID:"-1",
size:"130,26",
text:"Edit Address",
typeid:7,
uuid:"E2277028-5655-4874-B0A2-B87DF58D5B6F"
},
{
dataProviderID:"zip_postal_code",
displayType:10,
location:"250,125",
name:"zip_postal_code",
onDataChangeMethodID:"2D2C9CB6-BC69-4956-A0EF-ED3990541D03",
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
location:"134,5",
name:"address_type",
onDataChangeMethodID:"EC5EA9E7-95A5-4380-A18D-20EDCE050212",
size:"140,20",
tabSeq:1,
text:"Address Type",
typeid:4,
uuid:"EA135DB5-01F8-453F-8168-1F88617C527D",
valuelistID:"A04D21F2-6B62-4C04-A544-1DA8F6DFA5F4"
},
{
location:"5,365",
name:"saveButton",
onActionMethodID:"FF7606F7-99DE-4C97-8E9E-385A230040D9",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,26",
text:"SAVE",
typeid:7,
uuid:"F0F16D7B-7C1C-4F7B-B57A-BE103A340913",
visible:false
},
{
labelFor:"line1",
location:"5,35",
name:"line1_label",
size:"80,20",
text:"Line1",
transparent:true,
typeid:7,
uuid:"F4E9D1E2-3207-4B9D-BC67-423667E500C4"
},
{
labelFor:"line2",
location:"5,65",
name:"line2_label",
size:"80,20",
text:"Line2",
transparent:true,
typeid:7,
uuid:"F5A941F1-908C-482E-A0C4-86CFDA728A7E"
}
],
name:"addresses",
navigatorID:"-1",
onLoadMethodID:"-1",
onShowMethodID:"AC080D32-4094-4A4B-9591-EA87495D8865",
showInMenu:true,
size:"519,393",
styleName:"sts_one",
typeid:3,
uuid:"E6818EAD-F587-4B8F-AA52-012EE881207A"