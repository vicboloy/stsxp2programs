dataSource:"db:/stsservoy/associations",
extendsID:"2FE2D88B-0E43-4246-8AEE-1BBF9C7D9D31",
items:[
{
height:243,
partType:5,
typeid:19,
uuid:"1269F80C-31B3-46CF-B1E3-5D682FF4A0D4"
},
{
anchors:11,
dataProviderID:"association_name",
editable:false,
location:"0,96",
name:"groupName",
size:"136,20",
typeid:4,
uuid:"1CD773A7-517B-442E-857E-AADC3E1A9EA4"
},
{
location:"27,5",
onActionMethodID:"5E85197C-4A42-4D56-B1EE-7C833A2AB724",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"128,20",
text:"New Department",
typeid:7,
uuid:"3D7503A4-88B8-46CF-9830-221BF54B7B86"
},
{
anchors:9,
displaysTags:true,
labelFor:"delButton",
location:"136,78",
size:"24,20",
transparent:true,
typeid:7,
uuid:"3F7773F7-776E-4904-9E67-5D66C26DD829"
},
{
anchors:11,
displaysTags:true,
labelFor:"groupName",
location:"0,78",
name:"association_name_label",
size:"136,20",
text:"Department",
transparent:true,
typeid:7,
uuid:"5EB49556-FE1D-4A1B-B032-E389A6A04FB4"
},
{
anchors:11,
dataProviderID:"errorMessage",
foreground:"#ff0000",
location:"1,25",
size:"159,20",
transparent:true,
typeid:7,
uuid:"9C10D3D1-3A9F-4D79-9B9D-8A9F6A6D9524"
},
{
dataProviderID:"association_name",
format:"|U",
location:"1,45",
onDataChangeMethodID:"E65FF145-8336-4CDF-BCB4-707BEC29CDD2",
size:"159,20",
typeid:4,
uuid:"9FF90A5B-CD85-4138-A241-A1A430A78EDE"
},
{
height:66,
partType:1,
typeid:19,
uuid:"DB80EDDE-0515-426A-B522-B38991892098"
},
{
anchors:3,
location:"136,96",
name:"delButton",
onActionMethodID:"23DF4B40-3BF9-4277-A9FB-EEDA7CBCD90C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"24,20",
text:"X",
typeid:7,
uuid:"EADC48F9-B499-46AF-B572-99990040E35D"
}
],
name:"member_list",
onRecordSelectionMethodID:"C7D41A02-6C8E-40CC-B485-983A4C16C2CC",
scrollbars:32,
size:"160,247",
styleName:"sts_one",
typeid:3,
uuid:"A58B7F94-B432-4FF1-84DB-0885E19AEC4D",
view:3