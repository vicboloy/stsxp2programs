dataSource:"db:/stsservoy/users",
extendsID:"66E5E134-B5C4-43B3-B810-281E2BFF03C1",
items:[
{
height:352,
partType:5,
typeid:19,
uuid:"19056D8E-4784-46D2-BAC5-0A51E9EA28B0"
},
{
anchors:9,
labelFor:"checkUser",
location:"0,23",
size:"21,20",
transparent:true,
typeid:7,
uuid:"368CB576-3DA8-4E19-8009-2468BEFBAAB6"
},
{
anchors:9,
dataProviderID:"is_account_active",
displayType:4,
location:"0,43",
name:"checkUser",
size:"21,20",
tabSeq:-2,
typeid:4,
uuid:"41092C7D-43A2-44DB-B027-8B6E3606C940"
},
{
anchors:3,
horizontalAlignment:0,
location:"123,41",
name:"delButton",
onActionMethodID:"23DF4B40-3BF9-4277-A9FB-EEDA7CBCD90C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"23,20",
tabSeq:-2,
text:"X",
typeid:7,
uuid:"58E29A0C-10D3-413D-9E52-1AE0E919B911",
verticalAlignment:0
},
{
labelFor:"delButton",
location:"123,21",
size:"23,20",
transparent:true,
typeid:7,
uuid:"7BE84ED0-F46C-4B4E-914F-CDA1D30EDC47"
},
{
horizontalAlignment:0,
location:"66,1",
onActionMethodID:"5E85197C-4A42-4D56-B1EE-7C833A2AB724",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
tabSeq:-2,
text:"New",
typeid:7,
uuid:"884C3E7F-3C8F-4AA4-B481-513005F686B1"
},
{
height:21,
partType:1,
typeid:19,
uuid:"CDA0702D-F067-4D0A-A32D-D2164739FB3A"
},
{
anchors:11,
labelFor:"userName",
location:"20,23",
mnemonic:"",
name:"user_name_label",
size:"103,20",
text:"Current Logons",
transparent:true,
typeid:7,
uuid:"F352CBD8-63E7-4BA7-93DA-803EBC0A7F9C"
},
{
anchors:11,
dataProviderID:"user_name",
location:"20,43",
name:"userName",
size:"103,20",
tabSeq:1,
typeid:4,
uuid:"FF2206C2-7E5E-4CCF-95A1-5F0145EBC166"
}
],
name:"tenant_users",
scrollbars:32,
size:"150,352",
styleName:"sts_one",
typeid:3,
uuid:"848ADB50-6F70-4C9D-AAF0-461B51569BF4",
view:3