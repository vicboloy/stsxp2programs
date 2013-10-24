customProperties:"",
dataSource:"db:/stsservoy/status_description",
extendsID:"B437E60E-3696-4619-BACC-D42AE6A64D83",
initialSort:"status_sequence asc",
items:[
{
labelFor:"status_type",
location:"254,100",
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
location:"495,194",
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
location:"629,230",
size:"28,38",
typeid:4,
uuid:"141376BE-293F-4ED6-A1BC-E6F2C299D35B"
},
{
dataProviderID:"prompt_complete",
displayType:4,
enabled:false,
location:"539,399",
name:"percent_complete",
size:"221,30",
text:"<html><red>Prompt<\/red> for <br>100% Complete",
typeid:4,
uuid:"1B61412C-AE66-4665-AC6D-D268E648638B"
},
{
foreground:"#000000",
horizontalAlignment:4,
labelFor:"",
location:"503,230",
name:"warn_not_pass_label",
size:"121,38",
text:"<html>Warn on RF if not <br>passed to 3rd Party",
typeid:7,
uuid:"201D08A4-AADB-4177-812B-32EF8522B450"
},
{
location:"84,5",
name:"addButton",
onActionMethodID:"91BAAD22-DC07-4128-BB22-7E3F0002F1A0",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"Add",
typeid:7,
uuid:"2EF9DD23-F94A-466F-8BF0-727DBEDC0DB8"
},
{
dataProviderID:"allow_multi_scan",
displayType:4,
location:"539,338",
size:"221,20",
text:"Allow Multiple Scans",
typeid:4,
uuid:"30AE4379-9755-483E-9B01-487747E7409F"
},
{
labelFor:"status_description",
location:"254,70",
name:"status_description_label",
size:"116,20",
text:"Description",
transparent:true,
typeid:7,
uuid:"3BAE7E73-546B-426A-8332-7D5C72D5352E"
},
{
dataProviderID:"fab_shop",
enabled:false,
format:"|U",
location:"344,10",
name:"fab_shop",
size:"140,20",
text:"Fab Shop",
typeid:4,
uuid:"4E3D587A-8ACE-4650-950F-67D856876FFF"
},
{
extendsID:"309DAEC2-F9E3-4DBF-8718-0884B5FE1FBF",
height:544,
typeid:19,
uuid:"577F95BB-7640-4E65-80CF-B468FD21F3E3"
},
{
dataProviderID:"status_description",
location:"382,70",
name:"status_description",
size:"237,20",
text:"Status Description",
typeid:4,
uuid:"59E7DD2E-6114-4C1E-94F3-32D462CD14B9"
},
{
dataProviderID:"push_a_station",
displayType:4,
enabled:false,
location:"539,363",
name:"push_transaction",
size:"221,31",
text:"<html>Push Transaction to <br>Third Party",
typeid:4,
uuid:"5CD4F64C-1FAB-4800-8878-586CE08336A0"
},
{
dataProviderID:"thirdpty_station_name",
format:"|U",
location:"627,162",
name:"thirdpty_station_name",
size:"140,20",
text:"Thirdpty Station Name",
typeid:4,
uuid:"5F7D172A-E95F-4136-949E-3AAB97846AE0"
},
{
dataProviderID:"status_type",
displayType:2,
location:"344,100",
name:"status_type",
size:"140,20",
text:"Status Type",
typeid:4,
uuid:"5FA1F787-4B78-455E-AF28-2E217D792A0E",
valuelistID:"9205CAB4-A798-4EBC-BC29-B26CDAE8659F"
},
{
labelFor:"end_for_status",
location:"254,156",
name:"end_for_status_label",
size:"96,20",
text:"End For Status:",
transparent:true,
typeid:7,
uuid:"6299924E-340A-4744-BD7C-282FE2026961"
},
{
dataProviderID:"fabtrol_labor_code",
location:"627,194",
name:"fabtrol_labor_code",
size:"140,20",
text:"Fabtrol Labor Code",
typeid:4,
uuid:"646CA53C-94E3-4507-9E06-245A6AE29B15"
},
{
dataProviderID:"req_xfer_status",
displayType:2,
editable:false,
location:"363,186",
name:"req_xfer_status",
placeholderText:"-EMPTY-",
size:"140,20",
text:"Req Xfer Status",
typeid:4,
uuid:"7826535B-C869-4BCA-B5A6-3C4D2727DA73",
valuelistID:"23486681-EB49-4DB3-9720-0D8BDC65914E"
},
{
customProperties:"",
location:"437,469",
name:"deleteButton",
onActionMethodID:"2BD445F0-CAC3-47A9-8209-748004C6544E",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"214,33",
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
location:"608,512",
name:"cancelButton",
onActionMethodID:"63DF1572-0114-4457-A490-415629F7DD57",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"Cancel",
typeid:7,
uuid:"7C5230FF-9AF8-49E4-A049-44FDB0E548C2",
visible:false
},
{
location:"504,512",
name:"editButton",
onActionMethodID:"6655BA1E-3C2E-47A7-BE61-C19CBCE5239D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
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
location:"254,211",
name:"overwrite_field_list_label",
onActionMethodID:"B0300964-0FDA-4658-A268-379475A5D0F4",
size:"168,20",
text:"Overwrite Field List",
transparent:true,
typeid:7,
uuid:"85FE4E6D-48C2-4F22-BB09-5333CD3C9F5E"
},
{
items:[
{
containsFormID:"2235F743-C14C-4E9E-9FAD-0F29E32B7CB6",
location:"10,70",
relationName:"sts_status_code_container",
text:"status_description_lst",
typeid:15,
uuid:"6BDB76FB-89B3-42F6-AB57-B6397A664516"
}
],
location:"10,40",
name:"tablessX",
printable:false,
size:"229,473",
tabOrientation:-1,
transparent:true,
typeid:16,
uuid:"88B16424-76CB-458D-ABB8-72E63494807E"
},
{
horizontalAlignment:4,
labelFor:"thirdpty_station_name",
location:"508,152",
name:"thirdpty_station_name_label",
size:"109,30",
text:"<html>3rd Party<br>Station Name:",
transparent:true,
typeid:7,
uuid:"8ED86CC8-C7AB-4498-8720-563BB873D527"
},
{
location:"254,130",
text:"Labor Dept:",
transparent:true,
typeid:7,
uuid:"B3793BC4-DBC9-4515-8461-AA99BA304388"
},
{
dataProviderID:"status_code",
displayType:10,
format:"|U",
location:"344,40",
name:"status_code",
onDataChangeMethodID:"B6ABBA02-E6AC-434D-9F92-E50C12FD5FE4",
onRenderMethodID:"-1",
size:"140,20",
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
location:"254,236",
name:"overwrite_field_list",
size:"168,228",
text:"Overwrite Field List",
typeid:4,
uuid:"CA2985F7-F082-415F-9612-322F41361D88"
},
{
dataProviderID:"emp_number_required",
displayType:4,
location:"539,278",
size:"220,20",
text:"Worker Employee # Required",
typeid:4,
uuid:"CAEA9732-C784-4046-8576-1FFA5A024A83"
},
{
labelFor:"req_xfer_status",
location:"254,186",
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
location:"539,303",
name:"mtr_pdf_required",
size:"224,30",
text:"<HTML>MTR PDF Required<br>at this Status Point",
typeid:4,
uuid:"CE9BAC88-F350-4BF3-BDDA-032503E33F5E"
},
{
location:"400,512",
name:"saveButton",
onActionMethodID:"CA01300F-DA75-49DC-A18A-CEE45DCE7324",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"SAVE",
typeid:7,
uuid:"D1FECC85-45DB-4FBB-9003-44688289D2D9",
visible:false
},
{
horizontalAlignment:4,
labelFor:"status_sequence",
location:"508,130",
name:"status_sequence_label",
size:"109,20",
text:"STS Process #:",
transparent:true,
typeid:7,
uuid:"DE87247D-5FC1-4C0C-9D3C-E9C21D151FAD"
},
{
dataProviderID:"end_for_status",
displayType:2,
location:"363,156",
name:"end_for_status",
placeholderText:" -EMPTY-",
size:"140,20",
text:"End For Status",
typeid:4,
uuid:"E2549BB3-80BE-4D35-94EE-E53E2662047A",
valuelistID:"23486681-EB49-4DB3-9720-0D8BDC65914E"
},
{
dataProviderID:"labor_code_department",
displayType:2,
location:"344,130",
typeid:4,
uuid:"EF6BBA8A-75D2-43F3-A0A4-10804573E41F",
valuelistID:"F790C56F-48C2-4377-8C82-3C28AFAFF3F5"
},
{
dataProviderID:"status_sequence",
location:"627,130",
name:"status_sequence",
size:"140,20",
text:"Status Sequence",
typeid:4,
uuid:"FA110749-A83B-4DCE-A841-DCE9FDB31FD7"
}
],
name:"status_descriptions",
navigatorID:"-1",
onLoadMethodID:"-1",
onShowMethodID:"E44816A6-43AC-40C4-AB19-74B1B1EB170C",
onShowOmittedRecordsCmdMethodID:"0",
size:"778,545",
styleName:"sts_one",
typeid:3,
uuid:"24DDD857-1423-40C0-A1D8-2B9BB788A8CF"