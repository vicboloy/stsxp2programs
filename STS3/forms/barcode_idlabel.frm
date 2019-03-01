dataSource:"db:/stsservoy/jobs",
encapsulation:28,
extendsID:"AA270F42-5225-4103-9803-10B4A05DB5CF",
items:[
{
dataProviderID:"vLoadAll",
displayType:4,
formIndex:10,
location:"178,145",
name:"frmChkLoadNum",
size:"45,20",
tabSeq:-2,
text:"i18n:sts.chk.all",
transparent:true,
typeid:4,
uuid:"05D76899-C036-4492-9AEE-B6D51B467A17"
},
{
dataProviderID:"useLocalDirectory",
displayType:4,
formIndex:34,
location:"4,386",
name:"writeTemp",
size:"242,26",
text:"i18n:sts.chk.use.local.dir",
transparent:true,
typeid:4,
uuid:"0AA2D137-342C-4857-B07F-B3A11B7A6DFB"
},
{
extendsID:"E2825F7A-0DA1-4691-BA1B-0739BBF3CF8E",
formIndex:24,
typeid:4,
uuid:"0BF5CA77-CA95-482B-9C7A-93FAD64D3980"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
formIndex:1,
horizontalAlignment:0,
imageMediaID:"7DE60661-FA20-4CC8-8F60-48A8518B377F",
location:"444,5",
mediaOptions:14,
name:"btn_Home",
onActionMethodID:"0F7CB54B-C3AC-4211-9A81-5E931253B58C",
showClick:false,
showFocus:false,
size:"78,31",
transparent:true,
typeid:7,
uuid:"1162A41D-F0FB-4DAE-8943-2E1EC51DC393"
},
{
dataProviderID:"labeLaseFormat",
displayType:2,
formIndex:38,
location:"140,473",
size:"310,26",
typeid:4,
uuid:"150860DD-EF7C-440B-96AA-D0BAC67B32C4",
valuelistID:"DDA1C57D-9764-43A6-A88D-04D51F2899CB"
},
{
customProperties:"",
dataProviderID:"localDir",
editable:false,
formIndex:16,
location:"140,499",
name:"tempPath",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
size:"310,26",
typeid:4,
uuid:"2A12AB04-1BEE-4AAC-AA5B-8015B1E59B23"
},
{
dataProviderID:"labelPrintOrder",
displayType:2,
editable:false,
foreground:"#000000",
formIndex:7,
location:"20,301",
name:"frmLabelPrintOrder",
size:"140,26",
tabSeq:-2,
typeid:4,
uuid:"2BDD7F96-FA64-48C1-B368-0ACF928F1E38",
valuelistID:"457830FB-CE31-4F3E-A472-FE8EBB6FBADB"
},
{
dataProviderID:"vIDNumber",
formIndex:19,
format:"|U",
location:"100,220",
name:"frmIdNumber",
onActionMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
tabSeq:-2,
typeid:4,
uuid:"2C741E75-1313-4D43-819F-A464F87B320B"
},
{
customProperties:"methods:{\
onDataChangeMethodID:{\
arguments:[\
null,\
null,\
null,\
\"'Printer'\"\
]\
}\
}",
dataProviderID:"printerName",
displayType:2,
formIndex:12,
location:"140,421",
onActionMethodID:"-1",
onDataChangeMethodID:"04DB1200-402E-4A31-85CB-8F463D135F52",
size:"310,26",
typeid:4,
uuid:"31D3658F-618B-4568-8E59-92F0A1AB3183",
valuelistID:"419FADD3-4849-4E61-8880-3A3D26126014"
},
{
dataProviderID:"vJobName",
displaysTags:true,
editable:false,
formIndex:11,
location:"245,40",
name:"frmLabJobName",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"3AAE3B55-2ACB-4367-9DF2-219DB52E38F4",
valuelistID:"C3DFE726-7BF2-4AE3-89A1-46285815AA27"
},
{
borderType:"EmptyBorder,0,0,0,0",
formIndex:1,
horizontalAlignment:4,
labelFor:"frmSONum",
location:"5,120",
mnemonic:"",
name:"lblSONum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.shop.order.number_",
transparent:true,
typeid:7,
uuid:"3ACF61C1-2EC0-4536-90EB-32A3E1817932"
},
{
formIndex:13,
horizontalAlignment:4,
location:"5,447",
size:"135,26",
text:"i18n:sts.label.default.label.name",
transparent:true,
typeid:7,
uuid:"3DFB1779-173C-442D-BEB4-E12CBB9C4D0A"
},
{
formIndex:31,
location:"403,9",
onActionMethodID:"0209A2A6-4955-4A59-8AF6-E4BEE47B2B7C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"103,31",
text:"update msg",
typeid:7,
uuid:"3F83D54B-27D2-45DD-BE17-EF145E238929",
visible:false
},
{
formIndex:3,
horizontalAlignment:4,
labelFor:"frmArea",
location:"278,170",
name:"lblArea",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"80,20",
text:"i18n:sts.label.area_",
transparent:true,
typeid:7,
uuid:"444A375D-2E0C-4D2A-A8D2-F2FA071AA672"
},
{
dataProviderID:"vPiecemark",
formIndex:16,
format:"|U",
location:"100,245",
name:"frmPiecemark",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
size:"220,20",
tabSeq:-2,
typeid:4,
uuid:"45007744-1818-4AED-9616-D0DB6BA8DEE4"
},
{
anchors:12,
enabled:false,
horizontalAlignment:0,
location:"344,525",
onActionMethodID:"3A786F20-292F-4BD4-BBD5-3F25A07EE1A4",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"141,26",
tabSeq:-2,
text:"i18n:sts.btn.print.all.labels",
typeid:7,
uuid:"45E79C7C-1EA3-4A25-BF86-E5F57E53DC91",
visible:false
},
{
formIndex:1,
horizontalAlignment:4,
labelFor:"frmPcmkRel",
location:"278,70",
name:"lblPcmkRel",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
text:"i18n:sts.label.piecemark.release_",
transparent:true,
typeid:7,
uuid:"46CF3180-7762-44BC-92E8-735CEE58DBDA"
},
{
formIndex:2,
horizontalAlignment:4,
labelFor:"frmBatch",
location:"278,195",
name:"lblBatch",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"80,20",
text:"i18n:sts.label.batch_",
transparent:true,
typeid:7,
uuid:"47FD1D69-E8BC-4A7E-B235-A1943D252F5B"
},
{
formIndex:5,
horizontalAlignment:4,
labelFor:"frmLotNum",
location:"278,120",
name:"lblLotNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"80,20",
text:"i18n:sts.label.lot.number_",
transparent:true,
typeid:7,
uuid:"492B0683-061A-4645-A29C-CBB8F1D5D97C"
},
{
dataProviderID:"useLabeLasePrinter",
displayType:4,
formIndex:35,
location:"5,355",
name:"useLabeLase",
onActionMethodID:"F3B38C06-5F13-42F3-8255-2887B749C020",
size:"242,26",
text:"i18n:sts.chk.use.labelase",
transparent:true,
typeid:4,
uuid:"4B89068B-A460-44B3-A32C-66EA555397B8"
},
{
formIndex:11,
horizontalAlignment:4,
location:"5,421",
size:"135,26",
text:"i18n:sts.label.parallel.printer.name",
transparent:true,
typeid:7,
uuid:"4C786082-579A-4BEC-8A4F-43D4B3D08921"
},
{
anchors:12,
enabled:false,
formIndex:22,
horizontalAlignment:0,
location:"106,525",
name:"btn_PrintSelected",
onActionMethodID:"3A786F20-292F-4BD4-BBD5-3F25A07EE1A4",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"124,26",
tabSeq:-2,
text:"i18n:sts.btn.print.selected",
typeid:7,
uuid:"4E9484A7-D005-4CED-BB1A-D2730FE0CB6B"
},
{
dataProviderID:"vPcmkRel",
format:"|U",
location:"363,70",
name:"frmPcmkRel",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"5625172C-8532-42B2-8A2C-933153C6417C"
},
{
dataProviderID:"vFabShop",
format:"|U",
location:"363,95",
name:"frmFabShop",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"5A90BA95-B8A3-4CA3-899A-095D3FB2028E"
},
{
anchors:11,
dataProviderID:"useServerPrinters",
displayType:4,
formIndex:39,
location:"455,421",
name:"frmServerPrinters",
onDataChangeMethodID:"5E05D197-475E-4B5F-BB50-FEA18968FE86",
size:"115,26",
text:"i18n:sts.txt.use.server.side.data",
transparent:true,
typeid:4,
uuid:"6520075D-F4D4-424E-A2F9-93098503D2DF"
},
{
location:"326,275",
size:"99,20",
text:"i18n:sts.label.printing.label",
transparent:true,
typeid:7,
uuid:"6DDB11E8-950C-4DD4-9242-CDBF200C8CE8"
},
{
formIndex:6,
horizontalAlignment:4,
labelFor:"frmPiecemark",
location:"5,245",
name:"lblPiecemark",
size:"90,20",
text:"i18n:sts.label.piecemark",
transparent:true,
typeid:7,
uuid:"6E4BEDA7-36F7-4929-BB99-9AE98CE71849"
},
{
horizontalAlignment:4,
location:"5,15",
size:"90,20",
text:"i18n:sts.label.customer.number",
transparent:true,
typeid:7,
uuid:"6FA99E88-58EB-4B2C-BAC7-E81E328E61AC"
},
{
dataProviderID:"vJobNum",
displayType:10,
formIndex:12,
location:"100,40",
name:"frmJobNum",
onDataChangeMethodID:"100148DA-341F-4087-AED3-413147E0B60F",
placeholderText:"Job # Required",
tabSeq:-2,
typeid:4,
uuid:"71FFCFA6-28F6-43F5-8674-1724AFB1C939",
valuelistID:"FF2CD58D-6470-4DEF-BAB3-2DF4480C978F"
},
{
formIndex:4,
horizontalAlignment:4,
labelFor:"frmIdNumber",
location:"5,220",
name:"lblIdNumber",
size:"90,20",
text:"i18n:sts.label.id.number",
transparent:true,
typeid:7,
uuid:"75720781-5093-4138-9F8E-564FC04F75E1"
},
{
dataProviderID:"vFilteredCount",
formIndex:33,
horizontalAlignment:2,
location:"454,45",
size:"62,20",
text:"0",
transparent:true,
typeid:7,
uuid:"768EDAD1-6E3A-4DEB-8BCA-F29634CEAF9C"
},
{
borderType:"EmptyBorder,0,0,0,0",
formIndex:2,
horizontalAlignment:4,
labelFor:"frmSeqNum",
location:"5,69",
mediaOptions:14,
name:"lblSeqNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
onDoubleClickMethodID:"-1",
showClick:false,
size:"90,20",
text:"i18n:sts.label.sequence.number_",
transparent:true,
typeid:7,
uuid:"7D732ABA-F15E-4BC6-96FA-A2644D82A9F8"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'local_temp_path'\",\
\"'Printer'\"\
]\
}\
}",
enabled:false,
formIndex:17,
horizontalAlignment:0,
location:"455,498",
name:"btn_SetTempPath",
onActionMethodID:"BF49A765-9ECE-4164-AAF0-208CA327A66C",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"29,26",
text:"i18n:sts.btn.continuation",
typeid:7,
uuid:"8303866A-95A2-4BA6-84EE-151D1D09D4D7",
visible:false
},
{
customProperties:"methods:{\
onDataChangeMethodID:{\
arguments:[\
null,\
null,\
null,\
\"'Printer'\"\
]\
}\
}",
dataProviderID:"labelName",
displayType:2,
formIndex:14,
location:"140,447",
onActionMethodID:"-1",
onDataChangeMethodID:"04DB1200-402E-4A31-85CB-8F463D135F52",
size:"310,26",
typeid:4,
uuid:"85E760EF-305F-437B-8034-F685A06EB5FF",
valuelistID:"8037ABE5-4B5D-4A73-B82D-FCA45DA950BA"
},
{
displaysTags:true,
horizontalAlignment:4,
location:"5,40",
size:"90,20",
text:"i18n:sts.label.job.number",
transparent:true,
typeid:7,
uuid:"88A1C351-7CD9-4CE3-8E67-DAF1861D704F"
},
{
dataProviderID:"vMinors",
displayType:4,
formIndex:7,
location:"326,245",
name:"frmIncludeMinor",
onActionMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
size:"150,20",
tabSeq:-2,
text:"i18n:sts.chk.include.minor.marks",
transparent:true,
typeid:4,
uuid:"8EAD2F33-A387-429D-A73B-10D12C211F8B"
},
{
formIndex:4,
horizontalAlignment:4,
labelFor:"frmFabShop",
location:"278,95",
name:"lblFabShop",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
text:"i18n:sts.label.fab.shop_",
transparent:true,
typeid:7,
uuid:"8F372E8C-C65B-49F2-81F7-BD76AC68DDE8"
},
{
formIndex:8,
location:"271,65",
name:"mask2",
onActionMethodID:"84F851D9-D505-454C-B669-A87AC0EA0996",
showClick:false,
showFocus:false,
size:"40,159",
text:" ",
transparent:true,
typeid:7,
uuid:"8F893850-17B8-46C6-B40D-E979C69DC343"
},
{
dataProviderID:"vLoadRel",
formIndex:14,
format:"|U",
location:"100,170",
name:"frmLoadRel",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"908DEEF7-8A3E-43DE-A92E-A51D963B725E"
},
{
formIndex:32,
horizontalAlignment:4,
location:"390,45",
size:"54,20",
text:"i18n:sts.label.filtered.items",
transparent:true,
typeid:7,
uuid:"93A3576E-22A3-45CC-ACCF-DBD65EF33C89"
},
{
horizontalAlignment:4,
labelFor:"frmPkgNum",
location:"278,145",
name:"lblPkgNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"80,20",
text:"i18n:sts.label.package.number_",
transparent:true,
typeid:7,
uuid:"9A25A691-4E99-40FB-849B-7C4D6C48EF0E"
},
{
dataProviderID:"vBatch",
format:"|U",
location:"363,195",
name:"frmBatch",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"9ACCC2A9-29D0-4DCC-8DCC-CBBCDCCC57FC"
},
{
borderType:"EmptyBorder,0,0,0,0",
formIndex:5,
horizontalAlignment:4,
labelFor:"frmSheetNum",
location:"5,95",
mediaOptions:14,
name:"lblSheetNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.sheet.number_",
transparent:true,
typeid:7,
uuid:"A02764BC-6EC2-4D1B-A199-3789480230A9"
},
{
dataProviderID:"useBarTender",
displayType:4,
formIndex:23,
location:"5,326",
name:"useBarTender",
onActionMethodID:"B5CD1955-B3E4-40AD-9D87-003EFAE6FF64",
size:"242,26",
text:"i18n:sts.chk.use.bartender",
transparent:true,
typeid:4,
uuid:"A720F730-BED7-49DA-8E27-8FC0EA49D903"
},
{
borderType:"EmptyBorder,0,0,0,0",
horizontalAlignment:4,
labelFor:"frmLoadRel",
location:"5,170",
name:"lblLoadRel",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.load.release_",
transparent:true,
typeid:7,
uuid:"A965D9C7-0BCD-493E-B762-0FB35E43B962"
},
{
dataProviderID:"printingLabel",
displayType:2,
editable:false,
location:"326,300",
name:"frmPrintingLabel",
size:"171,26",
tabSeq:-2,
typeid:4,
uuid:"AE08D3F0-D746-4B0A-A2EE-DC96B73B43F1",
valuelistID:"8037ABE5-4B5D-4A73-B82D-FCA45DA950BA"
},
{
extendsID:"B7976ACA-D234-49B8-81B0-248D58AE9A6F",
formIndex:22,
typeid:7,
uuid:"B1D857C0-3ECB-4B4C-AE3D-794F57167DE1"
},
{
formIndex:8,
location:"0,65",
name:"mask1",
onActionMethodID:"84F851D9-D505-454C-B669-A87AC0EA0996",
showClick:false,
showFocus:false,
size:"49,159",
text:" ",
transparent:true,
typeid:7,
uuid:"B68AF70E-5899-466F-9792-AD9FD12303BA"
},
{
anchors:12,
enabled:false,
horizontalAlignment:0,
location:"5,525",
onActionMethodID:"3A786F20-292F-4BD4-BBD5-3F25A07EE1A4",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.print",
typeid:7,
uuid:"BAEA473B-BA45-4C01-873F-B50A107B5FD4",
visible:false
},
{
dataProviderID:"vArea",
format:"|U",
location:"363,170",
name:"frmArea",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"BD87F395-CBB1-498D-9124-D55667F33EDA"
},
{
dataProviderID:"vSheetNum",
formIndex:15,
format:"|U",
location:"100,95",
name:"frmSheetNum",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"BD907D60-6353-45A0-90CC-6265E7658361"
},
{
formIndex:37,
horizontalAlignment:4,
location:"5,473",
size:"135,26",
text:"i18n:sts.label.labelase.template",
transparent:true,
typeid:7,
uuid:"BEE08531-B207-40C1-B370-C1C9D3194461"
},
{
borderType:"EmptyBorder,0,0,0,0",
formIndex:7,
horizontalAlignment:4,
labelFor:"frmLoadNum",
location:"5,145",
name:"lblLoadNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.load.number_",
transparent:true,
typeid:7,
uuid:"C697383F-738F-4063-B023-3C5608A62E99"
},
{
extendsID:"B8264F35-3B2C-445D-8057-07A22DF67C55",
height:554,
typeid:19,
uuid:"CAA0AE34-7F3A-4ADE-A134-691E06974E03"
},
{
borderType:"EmptyBorder,0,0,0,0",
formIndex:3,
horizontalAlignment:4,
labelFor:"frmDrawingNum",
location:"5,195",
name:"lblDrawingNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.drawing.number_",
transparent:true,
typeid:7,
uuid:"CB6B53D6-EA6B-4672-B936-E966E1656AC4"
},
{
dataProviderID:"vLoadNum",
formIndex:18,
format:"|U",
location:"100,145",
name:"frmLoadNum",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"73,20",
tabSeq:-2,
typeid:4,
uuid:"D0FA64E3-B7D8-4336-9032-5C33ABE9128E"
},
{
formIndex:15,
horizontalAlignment:4,
location:"5,499",
size:"135,26",
text:"i18n:sts.label.local.temp.path",
transparent:true,
typeid:7,
uuid:"D3F34C54-47E8-4E72-AF23-AE51166E9B35"
},
{
dataProviderID:"vLotNum",
format:"|U",
location:"363,120",
name:"frmLotNum",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"DC1FEDF6-7349-4A12-A3D0-D57099165B75"
},
{
dataProviderID:"vSeqNum",
formIndex:13,
format:"|U",
location:"100,70",
name:"frmSeqNum",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"E240E179-303C-4157-A8ED-6C382D102D30"
},
{
anchors:12,
formIndex:14,
horizontalAlignment:0,
location:"251,525",
name:"btn_Clear",
onActionMethodID:"7A62A5CE-DDA9-4C58-9D17-136AECB5CFCE",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.clear",
typeid:7,
uuid:"E6926D74-FEEE-4293-B26E-06CC788C9E1E"
},
{
dataProviderID:"vCustNum",
editable:false,
formIndex:21,
location:"100,15",
name:"frmCustNum",
onDataChangeMethodID:"-1",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"ECD7455E-A7F0-4989-BE4D-61C968D587FE",
valuelistID:"B53B74FF-081E-462E-BDBA-40249F200298"
},
{
formIndex:17,
format:"|U",
location:"100,195",
name:"frmDrawingNum",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"EF6FE946-38A2-41CA-BC79-CE469466A588"
},
{
formIndex:6,
location:"20,276",
size:"140,20",
text:"i18n:sts.label.print.order",
transparent:true,
typeid:7,
uuid:"F2D1EBC6-EF83-4520-950E-7CFD57683070"
},
{
dataProviderID:"vCustomerName",
editable:false,
formIndex:9,
location:"245,15",
name:"frmLabCustName",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"F52B09AD-A3A7-4422-94E0-00DEABA96EF4",
valuelistID:"6C2905C9-795B-4F40-A676-E8EC59D6F510"
},
{
dataProviderID:"vSONum",
formIndex:20,
format:"|U",
location:"100,120",
name:"frmSONum",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"FA6E036D-9C0D-4BF0-B4C9-51587A9F3A0E"
},
{
dataProviderID:"vPkgNum",
format:"|U",
location:"363,145",
name:"frmPkgNum",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"6CA28272-0EFD-4034-8AD0-2735B715A73A",
selectOnEnter:true,
size:"99,20",
tabSeq:-2,
typeid:4,
uuid:"FF41A80B-4830-4DBF-957E-EFA53BD15F99"
}
],
name:"barcode_idlabel",
navigatorID:"-1",
onLoadMethodID:"-1",
onShowMethodID:"B8E7F0FB-EDC8-49A9-9958-91E34DDFBC29",
scrollbars:36,
showInMenu:true,
size:"575,554",
styleName:"sts_one",
typeid:3,
uuid:"AD05C8C0-2CED-41FF-96ED-79396FDFCB4B"