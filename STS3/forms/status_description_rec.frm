dataSource:"db:/stsservoy/status_description",
items:[
{
horizontalAlignment:4,
labelFor:"status_sequence",
location:"26,61",
name:"status_sequence_label",
size:"95,20",
text:"i18n:sts.label.process.number",
transparent:true,
typeid:7,
uuid:"001E34F7-088B-4E18-A9FC-DB35773915EF"
},
{
dataProviderID:"mtr_pdf_required",
displayType:4,
location:"5,367",
name:"mtr_pdf_required",
size:"321,20",
text:"i18n:sts.txt.mtr.pdf.required",
transparent:true,
typeid:4,
uuid:"00F09E25-26F9-46DD-BA95-C907FEC9A70E"
},
{
dataProviderID:"status_description",
format:"|#(40)",
location:"126,88",
name:"status_description",
size:"322,20",
text:"Status Description",
typeid:4,
uuid:"09E33968-059D-43BB-A06F-EBA4A3AAB680"
},
{
dataProviderID:"status_sequence",
format:"#",
location:"126,60",
name:"status_sequence",
onDataChangeMethodID:"26AA575C-C7CE-4B9C-9382-FEA1C4E7C51E",
placeholderText:"required",
selectOnEnter:true,
size:"80,20",
styleClass:"required",
text:"Status Sequence",
typeid:4,
uuid:"211527BB-9BFA-4207-BDE9-6594934B6230"
},
{
dataProviderID:"fabtrol_labor_code",
location:"341,266",
name:"fabtrol_labor_code",
selectOnEnter:true,
size:"164,20",
text:"Fabtrol Labor Code",
typeid:4,
uuid:"2F7E6C83-DEE3-41CF-8EC6-97D48DD59164"
},
{
dataProviderID:"allow_start_prior_not",
displayType:4,
formIndex:3,
location:"5,392",
onDataChangeMethodID:"8AE6A062-C924-4B48-90DA-57487F9FA0C6",
size:"267,20",
text:"i18n:sts.chk.allow.start.if.prior.incomplete",
transparent:true,
typeid:4,
uuid:"30BD29C4-FFD2-4B91-B6BA-415DC900B0E3"
},
{
anchors:6,
customProperties:"",
horizontalAlignment:0,
location:"151,488",
name:"btn_Delete",
onActionMethodID:"8A5C87F2-70B2-42A6-8ACB-8109CDFEB443",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
text:"i18n:sts.btn.delete",
typeid:7,
uuid:"42236679-5452-4FE5-8085-51FEC14B74BC"
},
{
horizontalAlignment:4,
labelFor:"status_type",
location:"26,117",
name:"status_type_label",
size:"95,20",
text:"i18n:sts.label.process",
transparent:true,
typeid:7,
uuid:"4276328D-69E6-47BC-912A-25BBE55414DD"
},
{
horizontalAlignment:4,
labelFor:"fabtrol_labor_code",
location:"209,266",
name:"fabtrol_labor_code_label",
size:"122,20",
text:"i18n:sts.label.fabtrol.labor.code",
transparent:true,
typeid:7,
uuid:"45797D33-9B87-41C0-912E-E2AC704DB4A8"
},
{
dataProviderID:"association_id",
displayType:2,
editable:false,
location:"126,3",
name:"fab_shop",
onDataChangeMethodID:"5742B4F2-2E58-4800-9705-E29D59D30D31",
onFocusGainedMethodID:"83140BE5-4CA5-4469-B715-8FCCEDF64D94",
onFocusLostMethodID:"-1",
size:"140,22",
styleClass:"required",
text:"Fab Shop",
typeid:4,
uuid:"477D86BF-4691-43C5-9776-5809FDB14147",
valuelistID:"26F4D87E-227A-4B80-B6C6-D2F8F82E7164"
},
{
dataProviderID:"allow_multi_scan",
displayType:4,
location:"5,342",
name:"allowMultiScan",
size:"221,20",
text:"i18n:sts.txt.scans.allow.multiple",
transparent:true,
typeid:4,
uuid:"47C44108-E5AC-4903-8296-287B620B959D"
},
{
dataProviderID:"end_for_status",
displayType:2,
editable:false,
location:"126,171",
name:"end_for_status",
onActionMethodID:"-1",
onDataChangeMethodID:"606B1B2B-A0FB-40A0-A8D5-DC59ADE9004B",
onFocusGainedMethodID:"2DC3CFF7-3927-4E02-A7E3-0D36E635B5B0",
placeholderText:" -EMPTY-",
size:"140,22",
text:"End For Status",
typeid:4,
uuid:"48C43EE8-BAED-4917-A8CE-2F3643F43F55",
valuelistID:"4196E8E5-1962-42BB-B088-DF922EC3D281"
},
{
horizontalAlignment:4,
labelFor:"req_xfer_status",
location:"5,201",
name:"req_xfer_status_label",
size:"116,20",
text:"i18n:sts.label.status.required.transfer",
transparent:true,
typeid:7,
uuid:"4E9D0E56-7AF1-4073-B3D1-AC479DD475C8"
},
{
height:518,
partType:5,
typeid:19,
uuid:"534D4FA9-C5B2-405C-8035-DE18C65320E0"
},
{
dataProviderID:"emp_number_required",
displayType:4,
location:"5,291",
size:"220,20",
text:"i18n:sts.txt.worker.employee.number.required",
transparent:true,
typeid:4,
uuid:"59520E38-2C19-491F-BB5E-F41268D20598"
},
{
dataProviderID:"labor_code_department",
displayType:2,
location:"126,143",
size:"159,22",
typeid:4,
uuid:"65247374-BE6F-4D94-A7EF-ACC2D350E9EF",
valuelistID:"F790C56F-48C2-4377-8C82-3C28AFAFF3F5"
},
{
labelFor:"overwrite_field_list",
location:"352,406",
name:"overwrite_field_list_label",
onActionMethodID:"639FAE22-616D-4554-AC77-F7DFB3743FAD",
size:"168,20",
text:"Overwrite Field List",
transparent:true,
typeid:7,
uuid:"799F412D-7483-4BAA-8627-23382D656CBF",
visible:false
},
{
horizontalAlignment:4,
labelFor:"fab_shop",
location:"26,5",
name:"fab_shop_label",
size:"95,20",
text:"i18n:sts.label.fab.shop",
transparent:true,
typeid:7,
uuid:"7AC87D99-5F7D-400C-BFD1-BE81AE04D883"
},
{
foreground:"#000000",
horizontalAlignment:4,
labelFor:"",
location:"5,231",
name:"warn_not_pass_label",
size:"121,38",
text:"i18n:sts.txt.third.party.warn.on.rf",
transparent:true,
typeid:7,
uuid:"85809DED-01CC-47A1-B0FB-92D1E5F7A158"
},
{
dataProviderID:"push_a_station",
displayType:4,
location:"5,417",
name:"push_transaction",
size:"221,20",
text:"i18n:sts.txt.transaction.push.to.third.party",
transparent:true,
typeid:4,
uuid:"89D8BADD-9A8E-496A-9D67-6C2473EEA453"
},
{
dataProviderID:"status_code",
displayType:10,
format:"|U[15]",
location:"126,32",
name:"status_code",
onDataChangeMethodID:"DAD21346-803E-43CF-8AFB-3E75E99A31E0",
onFocusGainedMethodID:"810CC637-B123-4E0B-9137-6CE5639E5EF4",
onRenderMethodID:"-1",
placeholderText:"required",
selectOnEnter:true,
size:"140,20",
styleClass:"required",
text:"Status Code",
typeid:4,
uuid:"8E23ACD7-6C98-42AC-BB5F-AB441844D8CB",
valuelistID:"23486681-EB49-4DB3-9720-0D8BDC65914E"
},
{
anchors:6,
horizontalAlignment:0,
location:"303,487",
name:"btn_Cancel",
onActionMethodID:"18648DD9-901A-4B02-8677-6171519C7084",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
text:"i18n:sts.btn.cancel",
typeid:7,
uuid:"9A3FD4E2-0ED5-4D61-BA2C-DEC19D981093",
visible:false
},
{
anchors:6,
horizontalAlignment:0,
location:"452,486",
name:"btn_Close",
onActionMethodID:"4F8775F1-03C8-45DB-810C-9F440BD4BB71",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
text:"i18n:sts.btn.close",
typeid:7,
uuid:"A2BA5F45-DC55-4EC1-80F4-D8540200DB9A"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
horizontalAlignment:0,
imageMediaID:"7DE60661-FA20-4CC8-8F60-48A8518B377F",
location:"456,0",
mediaOptions:14,
mnemonic:"",
name:"btn_Home",
onActionMethodID:"0F7CB54B-C3AC-4211-9A81-5E931253B58C",
showClick:false,
showFocus:false,
size:"78,31",
toolTipText:"i18n:sts.btn.home.return",
transparent:true,
typeid:7,
uuid:"AA9A3656-FB91-479D-90AE-AD4B4C07851B"
},
{
dataProviderID:"prompt_complete",
displayType:4,
location:"5,442",
name:"percent_complete",
size:"221,20",
text:"i18n:sts.txt.prompt.for.100.complete",
transparent:true,
typeid:4,
uuid:"AC954B38-8226-425F-A067-A324AB78B21A"
},
{
dataProviderID:"labor_percentage_scan",
displayType:4,
formIndex:2,
location:"5,317",
name:"laborPercentageScan",
onDataChangeMethodID:"29573C44-0E0C-437C-8ED1-868400554BA1",
size:"267,20",
text:"i18n:sts.chk.labor.percentage.scan",
transparent:true,
typeid:4,
uuid:"B4565D19-DC35-4C83-989A-03068B27445D"
},
{
horizontalAlignment:4,
labelFor:"status_code",
location:"26,33",
name:"status_code_label",
size:"95,20",
text:"i18n:sts.label.status",
transparent:true,
typeid:7,
uuid:"C2277999-7B68-48BF-9E14-03FBFAA567FB"
},
{
horizontalAlignment:4,
location:"26,145",
size:"95,20",
text:"i18n:sts.label.labor.department",
transparent:true,
typeid:7,
uuid:"CFACF09B-5D5B-4816-BDC5-48812D35ADEA"
},
{
horizontalAlignment:4,
labelFor:"thirdpty_station_name",
location:"222,231",
name:"thirdpty_station_name_label",
size:"109,30",
text:"i18n:sts.label.third.party.station.name",
transparent:true,
typeid:7,
uuid:"D191F038-3957-40F2-852E-9D543D867767"
},
{
dataProviderID:"overwrite_field_list",
displayType:8,
editable:false,
horizontalAlignment:2,
location:"352,431",
name:"overwrite_field_list",
size:"168,10",
text:"Overwrite Field List",
typeid:4,
uuid:"D39D37FE-4AA3-4586-855E-DE624D656EB7",
visible:false
},
{
anchors:6,
displaysTags:true,
formIndex:1,
horizontalAlignment:0,
location:"303,486",
name:"btn_Edit",
onActionMethodID:"6E7FDEDB-5871-4942-852C-A0F6D2FB7B8B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
text:"i18n:sts.btn.edit",
typeid:7,
uuid:"D68352A0-7397-4641-9641-54F28D2A7E29"
},
{
dataProviderID:"status_type",
displayType:10,
location:"126,116",
name:"status_type",
onDataChangeMethodID:"9B4280E2-54DB-4115-A19C-E2F1B193030A",
size:"159,20",
styleClass:"required",
text:"Status Type",
typeid:4,
uuid:"D8055006-490A-4110-BC0C-31313EAD4D49",
valuelistID:"9205CAB4-A798-4EBC-BC29-B26CDAE8659F"
},
{
dataProviderID:"thirdpty_station_name",
format:"|U",
location:"341,241",
name:"thirdpty_station_name",
onDataChangeMethodID:"46026BC9-627D-4EE6-BC74-773646E58E71",
onFocusLostMethodID:"B4B8D7DD-8FD5-4410-B80E-C4BF2F573214",
selectOnEnter:true,
size:"164,20",
text:"Thirdpty Station Name",
typeid:4,
uuid:"DCC50044-F46E-4FB3-B31A-498A67185994"
},
{
dataProviderID:"warn_not_pass",
displayType:4,
location:"131,231",
size:"28,38",
transparent:true,
typeid:4,
uuid:"EB59ACA3-9F24-4669-B8E6-E4CEDE3E9E71"
},
{
horizontalAlignment:4,
labelFor:"end_for_status",
location:"5,173",
name:"end_for_status_label",
size:"116,20",
text:"i18n:sts.label.status.end.for",
transparent:true,
typeid:7,
uuid:"F3042CC8-2851-4A04-9065-17663FAEBE65"
},
{
anchors:6,
horizontalAlignment:0,
location:"151,488",
name:"btn_Save",
onActionMethodID:"4B659364-1FB2-43AC-9102-A6F96603873D",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
text:"i18n:sts.btn.save",
typeid:7,
uuid:"F3959BA4-59B5-4199-97B2-4C05E6314C1D",
visible:false
},
{
horizontalAlignment:4,
labelFor:"status_description",
location:"26,89",
name:"status_description_label",
size:"95,20",
text:"i18n:sts.label.description.colon",
transparent:true,
typeid:7,
uuid:"F7441B0E-751F-4588-852C-ED57C2C7D572"
},
{
dataProviderID:"req_xfer_status",
displayType:2,
editable:false,
location:"126,199",
name:"req_xfer_status",
placeholderText:"-EMPTY-",
size:"140,22",
text:"Req Xfer Status",
typeid:4,
uuid:"F89EB9FF-92F8-45C4-8C3F-1152073F8543",
valuelistID:"4196E8E5-1962-42BB-B088-DF922EC3D281"
}
],
name:"status_description_rec",
navigatorID:"-1",
onHideMethodID:"C6B53188-48DD-42FE-825E-31127EA1968F",
onRecordSelectionMethodID:"CA1247B8-AEAD-4214-91CC-40AE41AA8A73",
onShowMethodID:"77530877-5492-40E1-ACCD-687758F3DFB6",
size:"541,523",
styleName:"sts_two",
typeid:3,
uuid:"F34AD8CD-2E77-49EC-95D0-F44A222AA1B5"