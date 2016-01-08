customProperties:"",
dataSource:"db:/stsservoy/status_description",
extendsID:"B437E60E-3696-4619-BACC-D42AE6A64D83",
initialSort:"status_sequence asc",
items:[
{
labelFor:"status_type",
location:"254,125",
name:"status_type_label",
size:"80,20",
text:"Process:",
transparent:true,
typeid:7,
uuid:"0DB0F59D-8240-4E3C-9CE8-E4CCF9685024"
},
{
horizontalAlignment:4,
labelFor:"fabtrol_labor_code",
location:"479,305",
name:"fabtrol_labor_code_label",
size:"122,20",
text:"Fabtrol Labor Code:",
transparent:true,
typeid:7,
uuid:"0E58ABE1-8B75-4D70-A672-9C7E770B0484"
},
{
dataProviderID:"warn_not_pass",
displayType:4,
location:"375,287",
size:"28,38",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"141376BE-293F-4ED6-A1BC-E6F2C299D35B"
},
{
dataProviderID:"prompt_complete",
displayType:4,
enabled:false,
location:"285,456",
name:"percent_complete",
size:"221,30",
tabSeq:-2,
text:"<html><red>Prompt<\/red> for <br>100% Complete",
transparent:true,
typeid:4,
uuid:"1B61412C-AE66-4665-AC6D-D268E648638B"
},
{
foreground:"#000000",
horizontalAlignment:4,
labelFor:"",
location:"249,287",
name:"warn_not_pass_label",
size:"121,38",
text:"<html>Warn on RF if not <br>passed to 3rd Party",
transparent:true,
typeid:7,
uuid:"201D08A4-AADB-4177-812B-32EF8522B450"
},
{
horizontalAlignment:0,
location:"84,5",
name:"btn_New",
onActionMethodID:"91BAAD22-DC07-4128-BB22-7E3F0002F1A0",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"Add",
typeid:7,
uuid:"2EF9DD23-F94A-466F-8BF0-727DBEDC0DB8"
},
{
dataProviderID:"allow_multi_scan",
displayType:4,
location:"285,395",
size:"221,20",
tabSeq:-2,
text:"Allow Multiple Scans",
transparent:true,
typeid:4,
uuid:"30AE4379-9755-483E-9B01-487747E7409F"
},
{
labelFor:"status_description",
location:"254,95",
name:"status_description_label",
size:"80,20",
text:"Description:",
transparent:true,
typeid:7,
uuid:"3BAE7E73-546B-426A-8332-7D5C72D5352E"
},
{
dataProviderID:"association_id",
displayType:10,
location:"344,10",
name:"fab_shop",
onDataChangeMethodID:"7A0C7C5E-62FD-4F81-8ED6-EB07E4193343",
onFocusLostMethodID:"-1",
size:"140,20",
tabSeq:1,
text:"Fab Shop",
typeid:4,
uuid:"4E3D587A-8ACE-4650-950F-67D856876FFF",
valuelistID:"7F393B0E-5AE4-41EE-877E-180358CB31F4"
},
{
extendsID:"309DAEC2-F9E3-4DBF-8718-0884B5FE1FBF",
height:523,
typeid:19,
uuid:"577F95BB-7640-4E65-80CF-B468FD21F3E3"
},
{
horizontalAlignment:0,
location:"693,493",
name:"btn_Close",
onActionMethodID:"9C86DD7A-7054-461D-837C-63849E991890",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"Close",
typeid:7,
uuid:"59B89D8B-2B7C-4061-AE32-C8D62683E304"
},
{
dataProviderID:"status_description",
location:"344,95",
name:"status_description",
size:"237,20",
tabSeq:4,
text:"Status Description",
typeid:4,
uuid:"59E7DD2E-6114-4C1E-94F3-32D462CD14B9"
},
{
dataProviderID:"push_a_station",
displayType:4,
enabled:false,
location:"285,420",
name:"push_transaction",
size:"221,31",
tabSeq:-2,
text:"<html>Push Transaction to <br>Third Party",
transparent:true,
typeid:4,
uuid:"5CD4F64C-1FAB-4800-8878-586CE08336A0"
},
{
dataProviderID:"thirdpty_station_name",
format:"|U",
location:"611,273",
name:"thirdpty_station_name",
size:"140,20",
tabSeq:9,
text:"Thirdpty Station Name",
typeid:4,
uuid:"5F7D172A-E95F-4136-949E-3AAB97846AE0"
},
{
dataProviderID:"status_type",
displayType:2,
location:"344,125",
name:"status_type",
size:"140,20",
tabSeq:5,
text:"Status Type",
typeid:4,
uuid:"5FA1F787-4B78-455E-AF28-2E217D792A0E",
valuelistID:"9205CAB4-A798-4EBC-BC29-B26CDAE8659F"
},
{
labelFor:"end_for_status",
location:"254,181",
name:"end_for_status_label",
size:"96,20",
text:"End For Status:",
transparent:true,
typeid:7,
uuid:"6299924E-340A-4744-BD7C-282FE2026961"
},
{
dataProviderID:"fabtrol_labor_code",
location:"611,305",
name:"fabtrol_labor_code",
size:"140,20",
tabSeq:10,
text:"Fabtrol Labor Code",
typeid:4,
uuid:"646CA53C-94E3-4507-9E06-245A6AE29B15"
},
{
dataProviderID:"req_xfer_status",
displayType:2,
editable:false,
location:"363,211",
name:"req_xfer_status",
placeholderText:"-EMPTY-",
size:"140,20",
tabSeq:8,
text:"Req Xfer Status",
typeid:4,
uuid:"7826535B-C869-4BCA-B5A6-3C4D2727DA73",
valuelistID:"4196E8E5-1962-42BB-B088-DF922EC3D281"
},
{
customProperties:"",
horizontalAlignment:0,
location:"437,493",
name:"btn_Delete",
onActionMethodID:"2BD445F0-CAC3-47A9-8209-748004C6544E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"87,26",
tabSeq:-2,
text:"Delete",
typeid:7,
uuid:"7A032385-1F66-4135-BB06-944475697BBD"
},
{
labelFor:"status_code",
location:"254,40",
name:"status_code_label",
size:"80,20",
text:"Status:",
transparent:true,
typeid:7,
uuid:"7B22F850-289A-4EE6-A5F7-A6B5DC403DB9"
},
{
horizontalAlignment:0,
location:"565,493",
name:"btn_Cancel",
onActionMethodID:"63DF1572-0114-4457-A490-415629F7DD57",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"Cancel",
typeid:7,
uuid:"7C5230FF-9AF8-49E4-A049-44FDB0E548C2",
visible:false
},
{
displaysTags:true,
formIndex:1,
horizontalAlignment:0,
location:"565,491",
name:"btn_Edit",
onActionMethodID:"6655BA1E-3C2E-47A7-BE61-C19CBCE5239D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"Edit",
typeid:7,
uuid:"7CF641E4-349E-4ED6-B753-3EE70189BCFE"
},
{
labelFor:"fab_shop",
location:"254,10",
name:"fab_shop_label",
size:"80,20",
text:"Shop:",
transparent:true,
typeid:7,
uuid:"855B7F5D-7C8A-4D16-8AC9-DC2FEAADE3EF"
},
{
labelFor:"overwrite_field_list",
location:"389,416",
name:"overwrite_field_list_label",
onActionMethodID:"B0300964-0FDA-4658-A268-379475A5D0F4",
size:"168,20",
tabSeq:-2,
text:"Overwrite Field List",
transparent:true,
typeid:7,
uuid:"85FE4E6D-48C2-4F22-BB09-5333CD3C9F5E",
visible:false
},
{
items:[
{
containsFormID:"2235F743-C14C-4E9E-9FAD-0F29E32B7CB6",
location:"10,70",
relationName:"sts_status_code_container",
text:"status_description_lst",
typeid:15,
uuid:"CEDF8B72-3C09-4950-96D0-C75A614CC246"
}
],
location:"10,40",
name:"tablessX",
printable:false,
size:"229,473",
tabOrientation:-1,
tabSeq:-2,
transparent:true,
typeid:16,
uuid:"88B16424-76CB-458D-ABB8-72E63494807E"
},
{
horizontalAlignment:4,
labelFor:"thirdpty_station_name",
location:"492,263",
name:"thirdpty_station_name_label",
size:"109,30",
text:"<html>3rd Party<br>Station Name:",
transparent:true,
typeid:7,
uuid:"8ED86CC8-C7AB-4498-8720-563BB873D527"
},
{
location:"254,155",
text:"Labor Dept:",
transparent:true,
typeid:7,
uuid:"B3793BC4-DBC9-4515-8461-AA99BA304388"
},
{
dataProviderID:"status_code",
format:"|U",
location:"344,40",
name:"status_code",
onDataChangeMethodID:"B6ABBA02-E6AC-434D-9F92-E50C12FD5FE4",
onRenderMethodID:"-1",
placeholderText:"required",
size:"140,20",
tabSeq:2,
text:"Status Code",
typeid:4,
uuid:"BC1C4E4D-8FB3-4D75-AA2C-9FE9A74BACAA",
valuelistID:"23486681-EB49-4DB3-9720-0D8BDC65914E"
},
{
dataProviderID:"overwrite_field_list",
displayType:8,
editable:false,
horizontalAlignment:2,
location:"389,441",
name:"overwrite_field_list",
size:"168,10",
tabSeq:-2,
text:"Overwrite Field List",
typeid:4,
uuid:"CA2985F7-F082-415F-9612-322F41361D88",
visible:false
},
{
dataProviderID:"emp_number_required",
displayType:4,
location:"285,335",
size:"220,20",
tabSeq:-2,
text:"Worker Employee # Required",
transparent:true,
typeid:4,
uuid:"CAEA9732-C784-4046-8576-1FFA5A024A83"
},
{
labelFor:"req_xfer_status",
location:"254,211",
name:"req_xfer_status_label",
size:"96,20",
text:"Req Xfer Status:",
transparent:true,
typeid:7,
uuid:"CB7E9C7A-603A-4C25-83E5-6C7447E8F9A8"
},
{
dataProviderID:"mtr_pdf_required",
displayType:4,
location:"285,360",
name:"mtr_pdf_required",
size:"224,30",
tabSeq:-2,
text:"<HTML>MTR PDF Required<br>at this Status Point",
transparent:true,
typeid:4,
uuid:"CE9BAC88-F350-4BF3-BDDA-032503E33F5E"
},
{
horizontalAlignment:0,
location:"437,493",
name:"btn_Save",
onActionMethodID:"CA01300F-DA75-49DC-A18A-CEE45DCE7324",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"SAVE",
typeid:7,
uuid:"D1FECC85-45DB-4FBB-9003-44688289D2D9",
visible:false
},
{
anchors:9,
borderType:"EmptyBorder,0,0,0,0",
horizontalAlignment:0,
imageMediaID:"7DE60661-FA20-4CC8-8F60-48A8518B377F",
location:"695,5",
mediaOptions:14,
mnemonic:"",
name:"btn_Home",
onActionMethodID:"6BE4A05A-3DF4-461F-AE75-6966D1774E30",
showClick:false,
showFocus:false,
size:"78,31",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"D6DB792E-3573-48EB-850C-4FCB3F91EA7C"
},
{
horizontalAlignment:4,
labelFor:"status_sequence",
location:"244,65",
name:"status_sequence_label",
size:"95,20",
text:"STS Process #:",
transparent:true,
typeid:7,
uuid:"DE87247D-5FC1-4C0C-9D3C-E9C21D151FAD"
},
{
dataProviderID:"end_for_status",
displayType:2,
editable:false,
location:"363,181",
name:"end_for_status",
onDataChangeMethodID:"-1",
placeholderText:" -EMPTY-",
size:"140,20",
tabSeq:7,
text:"End For Status",
typeid:4,
uuid:"E2549BB3-80BE-4D35-94EE-E53E2662047A",
valuelistID:"4196E8E5-1962-42BB-B088-DF922EC3D281"
},
{
dataProviderID:"labor_code_department",
displayType:2,
location:"344,155",
tabSeq:6,
typeid:4,
uuid:"EF6BBA8A-75D2-43F3-A0A4-10804573E41F",
valuelistID:"F790C56F-48C2-4377-8C82-3C28AFAFF3F5"
},
{
dataProviderID:"status_sequence",
location:"344,65",
name:"status_sequence",
onDataChangeMethodID:"B848F299-A871-4A13-A798-6EBB73ADEB6F",
placeholderText:"required",
size:"80,20",
tabSeq:3,
text:"Status Sequence",
typeid:4,
uuid:"FA110749-A83B-4DCE-A841-DCE9FDB31FD7"
}
],
name:"status_descriptions",
navigatorID:"-1",
onHideMethodID:"E21EE873-34C3-488D-8F27-F113B59EAEDE",
onLoadMethodID:"-1",
onRecordSelectionMethodID:"C1C28BCB-C5AA-4EE3-90DF-23AC5D30A993",
onShowMethodID:"E44816A6-43AC-40C4-AB19-74B1B1EB170C",
onShowOmittedRecordsCmdMethodID:"0",
onUnLoadMethodID:"-1",
size:"778,545",
styleName:"sts_one",
typeid:3,
uuid:"24DDD857-1423-40C0-A1D8-2B9BB788A8CF"