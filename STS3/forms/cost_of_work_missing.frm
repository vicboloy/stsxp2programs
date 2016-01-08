dataSource:"db:/stsservoy/piecemarks",
extendsID:"B6CF9948-A35C-4413-A7F5-135E22B132BD",
items:[
{
anchors:12,
horizontalAlignment:0,
location:"10,326",
name:"btn_Refresh",
onActionMethodID:"5ABF695A-F0ED-4A56-A7DA-626A54A53BE9",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"127,26",
tabSeq:-2,
text:"Refresh",
typeid:7,
uuid:"09BCE75C-8929-4760-B08C-D4B230C5A544"
},
{
height:366,
partType:5,
typeid:19,
uuid:"572BB39E-43AA-4407-B134-3DB1B4201E41"
},
{
anchors:12,
horizontalAlignment:0,
location:"499,326",
name:"btn_Apply",
onActionMethodID:"4E4EB056-903A-4287-8680-42D541140C50",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"127,26",
tabSeq:-2,
text:"Apply Updates",
typeid:7,
uuid:"65E2F594-DB0D-4132-8521-ABEF81CCD843"
},
{
anchors:12,
dataProviderID:"vShowBySheet",
displayType:4,
location:"177,310",
size:"179,20",
tabSeq:-2,
text:"Show Detail by Sheet",
transparent:true,
typeid:4,
uuid:"70F15C4A-42B4-4D12-A8B1-5881191A0E67"
},
{
anchors:12,
dataProviderID:"vShowByPiecemark",
displayType:4,
location:"177,336",
size:"179,20",
tabSeq:-2,
text:"Show Detail by Piecemark",
transparent:true,
typeid:4,
uuid:"85EA213B-E137-4BC7-B494-EB6F59733ACC"
},
{
anchors:15,
items:[
{
containsFormID:"115FB700-F6E5-4B18-800C-E2817CE179ED",
location:"5,35",
name:"missTable",
relationName:"sts_piecemark",
text:"cost_of_work_misslist",
typeid:15,
uuid:"CBDAEF2F-FCD6-4189-9846-241D02F56C6B"
}
],
location:"5,5",
name:"tabless",
printable:false,
size:"640,300",
tabOrientation:-1,
tabSeq:1,
transparent:true,
typeid:16,
uuid:"91190318-3B00-4C3A-A6E6-0CB2C8B303C8"
}
],
name:"cost_of_work_missing",
onShowMethodID:"64859050-196D-4F03-A116-1F13CB60FEAC",
size:"650,480",
styleName:"sts_one",
typeid:3,
uuid:"F12E09DF-7A5D-461D-AFD9-3785D74D0F71"