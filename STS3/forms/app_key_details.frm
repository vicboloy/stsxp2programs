dataSource:"db:/stsservoy/keys",
extendsID:"4A16F0F7-4C60-4447-AEBE-4C560622E5C9",
items:[
{
labelFor:"display_name",
location:"5,5",
mediaOptions:14,
name:"display_name_label",
size:"140,20",
text:"Display Name",
transparent:true,
typeid:7,
uuid:"25C75869-8346-4716-BD88-870E9525980A"
},
{
anchors:11,
labelFor:"description",
location:"179,5",
name:"description_label",
size:"285,20",
text:"Description",
transparent:true,
typeid:7,
uuid:"2BE7A292-620A-48BE-90FF-49753F1FED08"
},
{
height:50,
partType:1,
typeid:19,
uuid:"C5E7B7C3-2780-4642-8B8E-2680866F7086"
},
{
anchors:15,
items:[
{
containsFormID:"BC125611-3652-44CC-BCD3-C2A62648DEF1",
location:"32,98",
relationName:"keys_to_permissions",
text:"app_key_permiss_list",
typeid:15,
uuid:"342CCC4D-CFFB-4881-ACB5-34B6B0C94BF5"
}
],
location:"32,68",
name:"tab_app_key_permiss_list",
printable:false,
size:"418,136",
transparent:true,
typeid:16,
uuid:"C7F91ADB-AE00-4208-957C-24C9A6FFF4A7"
},
{
anchors:11,
dataProviderID:"description",
location:"179,25",
name:"description",
size:"285,20",
text:"Description",
typeid:4,
uuid:"C88160D3-D2D2-48FD-AE8C-06AB1D87B2E8"
},
{
dataProviderID:"key_name",
location:"5,25",
name:"display_name",
size:"140,20",
text:"Display Name",
typeid:4,
uuid:"C92B69CB-444E-4556-9370-F25269A95204"
},
{
height:219,
partType:5,
typeid:19,
uuid:"ECC51274-E418-484D-B857-C2835D84F7E0"
}
],
name:"app_key_details",
scrollbars:0,
size:"469,219",
styleName:"sts_one",
typeid:3,
uuid:"59EA6ECC-62D2-403B-AABF-E9C3BCCF94E7"