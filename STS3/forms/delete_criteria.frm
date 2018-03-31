dataSource:"db:/stsservoy/jobs",
extendsID:"AA270F42-5225-4103-9803-10B4A05DB5CF",
items:[
{
dataProviderID:"vCowCode",
format:"|U",
location:"100,369",
name:"frmCowCode",
size:"148,20",
tabSeq:12,
typeid:4,
uuid:"08D9B508-4663-43EF-9A03-0178CDFD5980"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
horizontalAlignment:4,
labelFor:"frmPcmkRel",
location:"5,289",
name:"lblPcmkRel",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.piecemark.release_",
transparent:true,
typeid:7,
uuid:"0F9B64FE-56B9-4823-BEDA-CBEE0FAFBD47"
},
{
dataProviderID:"vLoadNum",
formIndex:12,
format:"|U",
location:"100,214",
name:"frmLoadNum",
size:"284,20",
tabSeq:5,
typeid:4,
uuid:"16574A70-809B-4C25-8485-1CBC2538160A"
},
{
dataProviderID:"vCustomerName",
editable:false,
enabled:false,
formIndex:10,
location:"245,15",
name:"frmLabCustName",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"186DFE95-7ED9-4E99-9D6E-EEB721A9F479",
valuelistID:"6C2905C9-795B-4F40-A676-E8EC59D6F510"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'delete_piecemark_info'\"\
]\
}\
}",
horizontalAlignment:0,
location:"413,407",
name:"btn_Clear",
onActionMethodID:"24AD80C5-DC06-4258-9587-54CFAAF778EE",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"80,26",
tabSeq:-2,
text:"i18n:sts.btn.clear",
typeid:7,
uuid:"18E453D3-1551-44B8-9AC6-3C29B3C8DC91"
},
{
dataProviderID:"vFabShop",
format:"|U",
location:"100,114",
name:"frmFabShop",
size:"429,20",
tabSeq:9,
typeid:4,
uuid:"194ECBDF-13A5-4558-9E23-9AED88CF5B6C"
},
{
dataProviderID:"vLabNumPcmks",
horizontalAlignment:4,
location:"401,350",
transparent:true,
typeid:7,
uuid:"20C1055E-919C-4090-9592-EFCBDEF5ED23"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:13,
horizontalAlignment:4,
labelFor:"frmLotNum",
location:"5,189",
name:"lblLotNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.lot.number_",
transparent:true,
typeid:7,
uuid:"3667CBA9-9446-4647-A1D2-738B64AA77C2"
},
{
dataProviderID:"vJobNum",
displayType:10,
formIndex:18,
format:"|U",
location:"100,40",
name:"frmJobNum",
onDataChangeMethodID:"100148DA-341F-4087-AED3-413147E0B60F",
placeholderText:"Job # Required",
tabSeq:1,
typeid:4,
uuid:"37A0F1DF-771A-4350-AD4A-F975DC4F1A9A",
valuelistID:"FF2CD58D-6470-4DEF-BAB3-2DF4480C978F"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"false\"\
],\
parameters:[\
\"event\",\
\"flaggedDeleted\"\
]\
}\
}",
enabled:false,
horizontalAlignment:0,
location:"33,407",
name:"btn_Info",
onActionMethodID:"A98C66C7-B597-44CA-A364-EC1E03C57F99",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"129,26",
tabSeq:-2,
text:"i18n:sts.btn.get.information",
typeid:7,
uuid:"386A923E-2D96-456D-BF91-E7A5922EEADA"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'Job Piecemark Deletion'\"\
]\
}\
}",
enabled:false,
horizontalAlignment:0,
location:"172,407",
name:"btn_Browse",
onActionMethodID:"3DAECF38-C686-4432-A939-6C97466A4A28",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"190,26",
tabSeq:-2,
text:"i18n:sts.btn.record.selection.deletion",
typeid:7,
uuid:"3E64E9AC-BB3A-4E5C-9527-D7106004A669"
},
{
formIndex:15,
horizontalAlignment:4,
location:"253,325",
size:"143,20",
text:"i18n:sts.label.total.weight",
transparent:true,
typeid:7,
uuid:"4580196A-3B24-45F7-A71C-37822564CB9B"
},
{
dataProviderID:"vPkgNum",
formIndex:3,
format:"|U",
location:"100,314",
name:"frmPkgNum",
size:"148,20",
typeid:4,
uuid:"46688B97-9D8D-4A15-BE78-C5307807952E"
},
{
dataProviderID:"vArea",
formIndex:11,
format:"|U",
location:"100,64",
name:"frmArea",
size:"429,20",
tabSeq:10,
typeid:4,
uuid:"4F13595C-35FD-482D-A09B-B1A2D4B6AEE1"
},
{
extendsID:"E2825F7A-0DA1-4691-BA1B-0739BBF3CF8E",
formIndex:20,
size:"140,373",
typeid:4,
uuid:"4FAC35DC-50F8-443B-852E-0CBBFDDC6EA8"
},
{
dataProviderID:"vLotNum",
formIndex:7,
format:"|U",
location:"100,189",
name:"frmLotNum",
size:"429,20",
typeid:4,
uuid:"596203CB-109B-4925-B8EB-70FBB9023BEC"
},
{
dataProviderID:"vPiecemark",
formIndex:8,
format:"|U",
location:"100,89",
name:"frmPiecemark",
size:"429,20",
tabSeq:7,
typeid:4,
uuid:"71B5BDFE-124E-4BA6-8199-BAB907827CC8"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:1,
horizontalAlignment:4,
labelFor:"frmLoadRel",
location:"5,239",
name:"lblLoadRel",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.load.release_",
transparent:true,
typeid:7,
uuid:"73ABB500-723A-4517-BC52-AAAAB3C55A9F"
},
{
extendsID:"B7976ACA-D234-49B8-81B0-248D58AE9A6F",
formIndex:19,
typeid:7,
uuid:"73E239CE-7A10-4159-B822-B63CAF43C23A"
},
{
dataProviderID:"vLabTotalWt",
horizontalAlignment:4,
location:"401,325",
transparent:true,
typeid:7,
uuid:"7B1CA4F0-7D9A-44DA-80AE-98A6E37B8BF9"
},
{
dataProviderID:"vSheetNum",
formIndex:5,
format:"|U",
location:"100,139",
name:"frmSheetNum",
size:"429,20",
tabSeq:3,
typeid:4,
uuid:"7C7935A2-4F18-4960-8DC7-5B3684CBC41E"
},
{
dataProviderID:"vBatch",
format:"|U",
location:"100,344",
name:"frmBatch",
size:"148,20",
tabSeq:11,
typeid:4,
uuid:"7CF78646-ED09-4F27-A513-FDBABF49A242"
},
{
formIndex:13,
horizontalAlignment:4,
location:"253,275",
size:"143,20",
text:"i18n:sts.label.barcode.id.numbers",
transparent:true,
typeid:7,
uuid:"7F4D782A-1C63-4ECB-B6B9-F119844D63F5"
},
{
dataProviderID:"vSeqNum",
formIndex:16,
format:"|U",
location:"100,164",
name:"frmSeqNum",
size:"429,20",
tabSeq:2,
typeid:4,
uuid:"82A7EDFD-1A88-497B-9024-11AAAD5E1A03"
},
{
dataProviderID:"vCustNum",
displayType:10,
editable:false,
formIndex:17,
location:"100,15",
name:"frmCustNum",
onDataChangeMethodID:"427C542C-E90E-4162-879A-2569A49EA56D",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"840C3E85-EB42-4B40-8925-6EDD1CE782AB",
valuelistID:"B53B74FF-081E-462E-BDBA-40249F200298"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:9,
horizontalAlignment:4,
labelFor:"frmBatch",
location:"5,344",
name:"lblBatch",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.batch_",
transparent:true,
typeid:7,
uuid:"8993872C-DB98-4FA5-AA8D-87911C215A89"
},
{
horizontalAlignment:4,
location:"253,350",
size:"143,20",
text:"i18n:sts.label.number.of.piecemarks",
transparent:true,
typeid:7,
uuid:"8A020ADD-9A64-4A0B-83E2-A419D05D9096"
},
{
displaysTags:true,
formIndex:10,
horizontalAlignment:4,
location:"5,40",
size:"90,20",
text:"Job #:",
transparent:true,
typeid:7,
uuid:"8F8A60C9-FD77-45E6-A71F-676B85C23452"
},
{
extendsID:"B8264F35-3B2C-445D-8057-07A22DF67C55",
height:438,
typeid:19,
uuid:"97C57D03-8DF6-432D-AB86-E95EFB1E77EE"
},
{
dataProviderID:"vUnits",
horizontalAlignment:2,
location:"486,325",
size:"43,20",
transparent:true,
typeid:7,
uuid:"A1419802-8E63-4B46-B3BB-C0C64BCE7B83"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:12,
horizontalAlignment:4,
labelFor:"frmSeqNum",
location:"5,164",
name:"lblSeqNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.sequence.number_",
transparent:true,
typeid:7,
uuid:"A1D804C7-7F46-4F05-8966-07F2B3B6D304"
},
{
dataProviderID:"vLabTotPieces",
horizontalAlignment:4,
location:"401,300",
transparent:true,
typeid:7,
uuid:"AEDF411F-09B2-4B03-A70A-23997A05D510"
},
{
dataProviderID:"vSONum",
formIndex:9,
format:"|U",
location:"100,264",
name:"frmSONum",
size:"148,20",
tabSeq:4,
typeid:4,
uuid:"AF93765F-1BF1-4502-B08F-B77303121DFD"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:14,
horizontalAlignment:4,
labelFor:"frmCowCode",
location:"5,369",
name:"lblCowCode",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.cow.code_",
transparent:true,
typeid:7,
uuid:"AFF701AA-1671-4C3A-B6F2-500906F0FE62"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:6,
horizontalAlignment:4,
labelFor:"frmPiecemark",
location:"5,89",
name:"lblPiecemark",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.piecemark_",
transparent:true,
typeid:7,
uuid:"B65F6836-6A67-47FD-98EE-B747538D823B"
},
{
dataProviderID:"vJobName",
editable:false,
enabled:false,
formIndex:14,
location:"245,40",
name:"frmLabJobName",
tabSeq:-2,
transparent:true,
typeid:4,
uuid:"BD817067-8658-49A0-8B66-F5949567E79C",
valuelistID:"C3DFE726-7BF2-4AE3-89A1-46285815AA27"
},
{
dataProviderID:"vLoadRel",
formIndex:1,
format:"|U",
location:"100,239",
name:"frmLoadRel",
size:"429,20",
tabSeq:6,
typeid:4,
uuid:"BF2A4B2F-717B-4A7A-A0FC-7A9826A2C5E0"
},
{
height:6,
partType:2,
typeid:19,
uuid:"CA0A4D94-586E-454C-ADAC-6524F1F2C49D"
},
{
dataProviderID:"vLoadAll",
displayType:4,
formIndex:6,
location:"389,214",
name:"frmChkLoadNum",
tabSeq:-2,
text:"i18n:sts.label.load.show.all.numbers",
transparent:true,
typeid:4,
uuid:"CA76C452-D7D4-480F-915D-DF237F53B4B5"
},
{
dataProviderID:"vLabIDNums",
horizontalAlignment:4,
location:"401,275",
transparent:true,
typeid:7,
uuid:"D1D52F1B-8D00-42AA-ADBE-2EF52AA67196"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:8,
horizontalAlignment:4,
labelFor:"frmFabShop",
location:"5,114",
name:"lblFabShop",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.status_",
transparent:true,
typeid:7,
uuid:"D28C214F-142E-4C64-901D-6C051ECF4C2D"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:2,
horizontalAlignment:4,
labelFor:"frmSheetNum",
location:"5,139",
name:"lblSheetNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.sheet.number_",
transparent:true,
typeid:7,
uuid:"D5333E0F-19BB-432B-BEC7-F9D64C7DCA84"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:5,
horizontalAlignment:4,
labelFor:"frmPkgNum",
location:"5,314",
name:"lblPkgNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.package.number_",
transparent:true,
typeid:7,
uuid:"D9923DB1-F59F-4A05-AAF1-94BF2AAFAFD3"
},
{
formIndex:2,
horizontalAlignment:4,
location:"253,300",
size:"143,20",
text:"i18n:sts.label.total.pieces",
transparent:true,
typeid:7,
uuid:"DBB66AD5-7031-4474-9535-6A9C4CCE1443"
},
{
formIndex:11,
horizontalAlignment:4,
location:"5,15",
size:"90,20",
text:"Customer #:",
transparent:true,
typeid:7,
uuid:"E09C2E7F-31B5-456E-B58D-35982F8F4314"
},
{
formIndex:15,
location:"8,7",
size:"40,390",
transparent:true,
typeid:7,
uuid:"E2CE8538-DCBA-42CE-B9BC-F164C10FFD81"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:3,
horizontalAlignment:4,
labelFor:"frmSONum",
location:"5,264",
name:"lblSONum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.shop.order.number_",
transparent:true,
typeid:7,
uuid:"E7922281-C05A-4318-A57B-D8783C1AAC6F"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:4,
horizontalAlignment:4,
labelFor:"frmArea",
location:"5,64",
name:"lblArea",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.area_",
transparent:true,
typeid:7,
uuid:"F8B25D7B-F4FD-45DA-B49C-2C4823F709AA"
},
{
borderType:"EmptyBorder,0,0,0,0",
fontType:"Arial,0,13",
formIndex:7,
horizontalAlignment:4,
labelFor:"frmLoadNum",
location:"5,214",
name:"lblLoadNum",
onActionMethodID:"7A4014D5-3AF4-4850-A54C-00823F390FF0",
showClick:false,
size:"90,20",
text:"i18n:sts.label.load.number_",
transparent:true,
typeid:7,
uuid:"FC1FD2B7-B4F4-423E-ACD4-5BBC84A377D8"
},
{
dataProviderID:"vPcmkRel",
formIndex:4,
format:"|U",
location:"100,289",
name:"frmPcmkRel",
size:"148,20",
tabSeq:8,
typeid:4,
uuid:"FC6D51B7-0F2D-451D-8426-381B739027C1"
}
],
name:"delete_criteria",
onHideMethodID:"17832EF1-DFE2-46A1-AD49-9FF39D2A6AC6",
onShowMethodID:"620FACFC-1270-4391-84B5-AA6295D5B3B6",
size:"534,438",
styleName:"sts_one",
typeid:3,
uuid:"BD43913E-A4D2-4697-A6D8-CFD792E86D80"