dataSource:"db:/stsservoy/routings",
extendsID:"B437E60E-3696-4619-BACC-D42AE6A64D83",
items:[
{
dataProviderID:"allow_more_codes",
displayType:4,
location:"426,27",
name:"allow_more_codes",
size:"204,20",
text:"Allow Additional Status Codes",
typeid:4,
uuid:"051A4F8E-5EAA-45DA-B511-7990A145388E"
},
{
horizontalAlignment:4,
labelFor:"route_code",
location:"173,27",
name:"route_code_label",
size:"89,20",
text:"Routing Code:",
transparent:true,
typeid:7,
uuid:"06B7FF50-6D30-4EF0-81CE-42DCD33D2F0F"
},
{
location:"761,87",
onActionMethodID:"2454B75A-0C1B-4C08-847D-3EC92DF8DF03",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"Move UP",
typeid:7,
uuid:"15743A29-C0FE-4156-B6FA-93CEB9BB83B5"
},
{
dataProviderID:"codesAvail",
displayType:12,
location:"187,113",
name:"availableCodes",
onActionMethodID:"3D1E9757-FA9B-4E00-9FD8-12CD2249934B",
size:"170,289",
typeid:4,
uuid:"1F97DCF5-C0EC-4F7A-ABEB-162DAB555A49",
valuelistID:"6E2BFA71-8980-4CBF-8F3A-38F93EA6794F"
},
{
horizontalAlignment:4,
labelFor:"route_description",
location:"182,57",
name:"route_description_label",
size:"80,20",
text:"Description:",
transparent:true,
typeid:7,
uuid:"3E5FDF79-F0F3-4186-A969-418FA2630333"
},
{
location:"448,92",
size:"146,20",
text:"Selected Status Codes",
transparent:true,
typeid:7,
uuid:"40DBE72E-21F6-42EF-935D-EDD9C5A65F6F"
},
{
items:[
{
containsFormID:"4EAD9B4A-1EA5-408B-BA7B-E09203E72E62",
location:"10,75",
relationName:"sts_routing_codes_container",
text:"routing_codes_lst",
typeid:15,
uuid:"2A87BAB8-58EE-4005-8412-54CEFFD8DA66"
}
],
location:"10,45",
name:"tablessX",
printable:false,
size:"148,332",
tabOrientation:-1,
transparent:true,
typeid:16,
uuid:"434CAF6E-1BD7-4CFE-99B4-428757208916"
},
{
location:"659,87",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"Move DOWN",
typeid:7,
uuid:"52024CF9-72BF-4610-BA29-FA36B36D44ED"
},
{
location:"343,455",
name:"editButton",
onActionMethodID:"5A03D84F-63FE-439C-908A-54F4839CD8F2",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"Edit",
typeid:7,
uuid:"5686C9F5-D9F4-4025-9144-E89D1C20DA80"
},
{
location:"290,412",
name:"deleteButton",
onActionMethodID:"30AE3F2F-AA0B-4BC4-9E02-96FFD937D512",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"214,33",
text:"Delete",
typeid:7,
uuid:"645FEE64-844A-432B-8689-7D0655494DCF"
},
{
customProperties:"methods:{
onActionMethodID:{
arguments:[
null,
\"'routing_id'\"
]
}
}",
location:"10,10",
name:"addButton",
onActionMethodID:"1C48C95D-A375-495D-9D45-70364F986DDB",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"148,26",
text:"ADD Route",
typeid:7,
uuid:"6517F7C1-1A1F-4DF4-9276-CFA0D6FE5D13"
},
{
location:"253,455",
name:"saveButton",
onActionMethodID:"1F45CB1F-7119-4FFE-AFDE-B311BBCB3DC9",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"SAVE",
typeid:7,
uuid:"79249E53-D08B-42D4-ABBD-3CC4CF53C3ED",
visible:false
},
{
items:[
{
containsFormID:"F89F0A3F-9C88-463F-87D9-284B64327E91",
location:"659,143",
name:"codes_list",
relationName:"sts_route_status_codes",
text:"routings_status_codes_lst",
typeid:15,
uuid:"723638E0-DE32-4F27-BDD0-2E5EA65EE92A"
}
],
location:"659,113",
name:"tabless",
printable:false,
size:"182,289",
tabOrientation:-1,
transparent:true,
typeid:16,
uuid:"7DF2D7E5-8B06-4E77-9714-A68569C6E0A5"
},
{
location:"434,455",
name:"cancelButton",
onActionMethodID:"C9F5DFA1-D2EA-414C-87B3-A158BD655AB1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"Cancel",
typeid:7,
uuid:"AC2AAC38-59A2-4622-B33E-CF41B1E56C00",
visible:false
},
{
dataProviderID:"route_description",
location:"271,57",
name:"route_description",
size:"314,20",
text:"Route Description",
typeid:4,
uuid:"AF929C59-F57E-43D2-AE14-8E8289DC3D58"
},
{
location:"187,92",
size:"146,20",
text:"Available Status Codes",
transparent:true,
typeid:7,
uuid:"E4AE9D3E-1129-4816-B979-7C919BD0C75C"
},
{
customProperties:"methods:{
onDataChangeMethodID:{
arguments:[
null,
null,
null,
\"'route_code'\",
\"'routing_id'\"
]
}
}",
dataProviderID:"route_code",
format:"|U",
location:"272,27",
name:"route_code",
onDataChangeMethodID:"DA80D0B2-0857-4B1E-9481-96DB80FEDA1C",
onRenderMethodID:"-1",
size:"140,20",
text:"Route Code",
typeid:4,
uuid:"E8CDE8FA-6EB9-4DA2-ABD4-B592E4EC9D2A"
},
{
dataProviderID:"codesSelect",
displayType:12,
location:"448,113",
name:"selectedCodes",
onActionMethodID:"4CD3262A-EBA4-431D-ACB6-1A742DD12980",
size:"170,289",
typeid:4,
uuid:"FC19F493-5D7F-42C4-BD7E-FF255E326628",
valuelistID:"10D3DCDA-BA13-438A-BF13-C22D734E8E65"
}
],
name:"routing_codes",
navigatorID:"-1",
onShowMethodID:"01A10811-600F-47BB-9936-2B301CB8668A",
size:"856,0",
styleName:"sts_one",
typeid:3,
uuid:"02E4F084-1B51-47CD-B56D-D07E34D03F10"