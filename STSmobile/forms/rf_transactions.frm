dataSource:"db:/stsservoy/idfiles",
encapsulation:60,
extendsID:"72E0B299-FCCD-4C42-8A48-15F726CE17F1",
items:[
{
dataProviderID:"statusCode",
displayType:10,
format:"|U",
location:"100,19",
name:"status",
onDataChangeMethodID:"26985B1F-17E8-4514-8F2A-6FF5FFBAA236",
onFocusLostMethodID:"D4DB847F-AB68-451C-B4FE-9E20C9EA487F",
tabSeq:1,
typeid:4,
uuid:"040B1D8D-9D96-4304-8D42-52710A520CA6",
valuelistID:"3365A4A0-44DD-41E4-B021-A4428E093733"
},
{
anchors:15,
items:[
{
containsFormID:"0125012B-3A8B-46D1-8456-20B1F29B7B0A",
location:"5,156",
relationName:"sts_idfile",
text:"rf_transaction_list",
typeid:15,
uuid:"F287C0B4-6E36-421F-A3BF-2A9FC265667A"
}
],
location:"5,126",
name:"tabless",
printable:false,
size:"230,194",
tabOrientation:-1,
tabSeq:-2,
transparent:true,
typeid:16,
uuid:"18D552FB-2E06-438A-B262-F723A0FA6AB5"
},
{
horizontalAlignment:4,
location:"100,0",
name:"currentDivision",
size:"140,20",
transparent:true,
typeid:7,
uuid:"40EDE1E6-7222-4CD4-B96D-3AE463F0ABF1"
},
{
dataProviderID:"currentID",
format:"|U",
location:"100,80",
name:"current",
onDataChangeMethodID:"F6D06FDF-2291-4430-8649-ECE5DA9CADB8",
tabSeq:3,
typeid:4,
uuid:"41B533EB-22A3-4770-8027-27A3865A9730"
},
{
dataProviderID:"lastID",
location:"100,101",
name:"previous",
size:"140,20",
transparent:true,
typeid:7,
uuid:"48678B4B-5142-4899-9B1B-84E47CBDBD74"
},
{
location:"0,80",
text:"ID:",
transparent:true,
typeid:7,
uuid:"4B1FFF00-8DD8-4159-9673-439F7A9D26B9"
},
{
dataProviderID:"statusWorker",
format:"|U",
location:"100,60",
name:"worker",
onActionMethodID:"-1",
onDataChangeMethodID:"F9C47BF5-F1BE-46D1-82FF-C80A0246CBEF",
tabSeq:2,
typeid:4,
uuid:"5611B078-DDEF-497E-9CE2-7AB32ACFFDF7"
},
{
location:"0,101",
text:"Previous ID:",
transparent:true,
typeid:7,
uuid:"60600E65-4920-4218-A4BB-880D6E7E9CCD"
},
{
location:"0,0",
text:"Transactions",
transparent:true,
typeid:7,
uuid:"710BDF27-CC2A-4F8C-AA85-8566CCF24740"
},
{
extendsID:"7963020A-9D23-4CDC-9B81-ED507DAB6C72",
typeid:7,
uuid:"767F3AD4-DEF0-4B4B-AAB7-FA426BB8D7F0",
visible:false
},
{
extendsID:"B672DE2E-8F71-466B-B4A2-E7FF4A55970F",
typeid:7,
uuid:"7B0B41E6-F63E-4F62-A3A6-CC4FAB196C15",
visible:false
},
{
location:"0,60",
text:"Worker:",
transparent:true,
typeid:7,
uuid:"7CFA2C61-8A90-4C97-A5A1-A5DE9AE16747"
},
{
extendsID:"0A55CD08-0F35-467D-BF1A-9CE850550C5D",
typeid:7,
uuid:"86EDCBB3-829A-4223-ABBA-15602A7291D0",
visible:false
},
{
anchors:9,
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,1,14",
horizontalAlignment:0,
location:"197,0",
onActionMethodID:"5EF80351-5BA6-414C-98AB-EFDB31AD4CAA",
size:"38,20",
tabSeq:4,
text:"F1",
transparent:true,
typeid:7,
uuid:"8A66FFB6-CE5F-43C8-AA4C-2A902807C877"
},
{
extendsID:"3A8D06C7-DC11-4E7F-810D-D7762812245C",
typeid:7,
uuid:"9608F254-2728-4443-8B94-4F091D166B02",
visible:false
},
{
location:"0,39",
text:"Location:",
transparent:true,
typeid:7,
uuid:"9FE8AF80-5CF7-46F2-A2DF-D3286A82DA46"
},
{
location:"0,19",
text:"Status:",
transparent:true,
typeid:7,
uuid:"A384BF72-9451-4AC3-81DA-D3D3899EBC35"
},
{
dataProviderID:"statusLocation",
format:"|U",
location:"100,39",
name:"location",
onActionMethodID:"-1",
onDataChangeMethodID:"D5D84404-C6EC-4EB8-984D-E594A43EAAF9",
tabSeq:-2,
typeid:4,
uuid:"A8B43C12-2B3B-4372-B7F3-82D95C0C30F6"
},
{
extendsID:"A4842B95-DD5A-40B3-8202-9B70F65AECF7",
height:320,
typeid:19,
uuid:"D8C21553-31E6-440B-B8C9-D41A52A0E202"
}
],
name:"rf_transactions",
onLoadMethodID:"-1",
onRenderMethodID:"-1",
onShowMethodID:"9E2A54E4-2F94-4384-A84B-98B424FA308D",
showInMenu:true,
styleName:"sts_one",
typeid:3,
uuid:"0175C770-245C-4B80-8C37-4886836EBD44",
view:0