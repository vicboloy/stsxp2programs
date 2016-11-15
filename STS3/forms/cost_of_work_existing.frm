dataSource:"db:/stsservoy/piecemarks",
encapsulation:60,
extendsID:"B6CF9948-A35C-4413-A7F5-135E22B132BD",
items:[
{
height:314,
partType:5,
typeid:19,
uuid:"050BF4A1-9F9B-4EBE-A853-306CF1771ABF"
},
{
anchors:12,
dataProviderID:"vKeepExistingCosts",
displayType:4,
location:"335,289",
size:"183,20",
text:"i18n:sts.chk.dont.update.existing.cost",
transparent:true,
typeid:4,
uuid:"320A9CE4-CE0B-414E-8A1A-859BC29510F8"
},
{
anchors:12,
dataProviderID:"vShowDetail",
displayType:4,
location:"100,279",
size:"101,20",
text:"i18n:sts.chk.show.detail",
transparent:true,
typeid:4,
uuid:"3D4B86D9-7610-4A32-B4A7-C12262C5A08E"
},
{
anchors:12,
dataProviderID:"vKeepCostsShipped",
displayType:4,
location:"335,265",
size:"236,20",
text:"i18n:sts.chk.dont.update.cost.on.items",
transparent:true,
typeid:4,
uuid:"63DE19F7-5F0A-4328-8F87-1594F99AA8AC"
},
{
anchors:6,
horizontalAlignment:0,
location:"607,279",
name:"btn_ClearAll",
onActionMethodID:"1ACDDE9F-EA2B-480B-86CB-BA1A20CEADCC",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"109,26",
text:"i18n:sts.btn.clear.marked",
typeid:7,
uuid:"91ADC489-A99F-42A0-BF3D-DDAB1DC57D17"
},
{
anchors:15,
items:[
{
containsFormID:"E0E3BEF4-BDB6-4707-992F-9C52A0C2CE78",
location:"5,35",
relationName:"sts_piecemark",
text:"cost_of_work_existlist",
typeid:15,
uuid:"ABB75DB3-C3BB-4FD3-82BC-4668FEBE7709"
}
],
location:"5,5",
name:"tabless",
printable:false,
size:"716,255",
tabOrientation:-1,
transparent:true,
typeid:16,
uuid:"A7DDE8DF-8B88-43A4-BFA4-BB3966065E5E"
},
{
anchors:12,
horizontalAlignment:0,
location:"206,279",
name:"btn_CalculateCost",
onActionMethodID:"64736B02-3306-4EDE-AF97-277164B7175E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"124,26",
text:"i18n:sts.btn.calculate.cost",
typeid:7,
uuid:"AB76EDA8-1375-4432-8CA6-74467AEAFEC2"
},
{
anchors:12,
horizontalAlignment:0,
location:"10,279",
name:"btn_Refresh",
onActionMethodID:"3128BA95-3BFC-41FC-BF66-1AB329F3F670",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
text:"i18n:sts.btn.refresh",
typeid:7,
uuid:"E6C70BCF-6A07-404A-9E74-1DCB350E22FE"
}
],
name:"cost_of_work_existing",
namedFoundSet:"separate",
onShowMethodID:"0286DA98-9CFD-4826-9A7F-8D5FB12D9924",
showInMenu:true,
size:"726,314",
styleName:"sts_one",
typeid:3,
uuid:"7548A829-FE15-4FD2-9757-2850B712E1B9"