customProperties:"methods:{\
onElementFocusGainedMethodID:{\
arguments:null,\
parameters:null\
},\
onElementFocusLostMethodID:{\
arguments:null,\
parameters:null\
}\
}",
dataSource:"db:/stsservoy/idfiles",
encapsulation:0,
extendsID:"72E0B299-FCCD-4C42-8A48-15F726CE17F1",
items:[
{
formIndex:23,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"locationpieceslabel",
size:"113,20",
text:"i18n:sts.label.location.pieces",
transparent:true,
typeid:7,
uuid:"02AC39A5-DE09-49CA-A8A1-897E079CD214",
visible:false
},
{
dataProviderID:"sts_idfile_to_pcmks.sts_pcmks_to_sheet.sheet_number",
formIndex:42,
horizontalAlignment:4,
location:"135,233",
name:"sheetnumber",
size:"105,20",
transparent:true,
typeid:7,
uuid:"03C0EE6C-0DAA-49A1-9EEB-D70233B407B6",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"piecemark",
editable:false,
formIndex:68,
format:"|U",
location:"99,21",
name:"seqnumberin",
onActionMethodID:"C2F92EE1-BC2D-4469-8B66-C8962D79B9EA",
onDataChangeMethodID:"23E9E9C7-867D-4629-92AF-4B5AA561C734",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
selectOnEnter:true,
size:"140,20",
typeid:4,
uuid:"046B5278-DF12-4C4C-A8D2-1F3422FBDC86",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"",
dataProviderID:"jobNumber",
editable:false,
formIndex:51,
format:"|U",
location:"99,21",
name:"jobnumberin",
onDataChangeMethodID:"0A91B122-3B40-440A-9B48-96C8A1DBA659",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"140,20",
tabSeq:3,
typeid:4,
uuid:"05EC2233-FEC6-4206-82B1-22CD835DFBCC",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"grade",
editable:false,
formIndex:66,
format:"|U",
location:"99,21",
name:"gradein",
onActionMethodID:"C2F92EE1-BC2D-4469-8B66-C8962D79B9EA",
onDataChangeMethodID:"7DE74A71-FB22-4F5F-B4C5-9C61692591A7",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
selectOnEnter:true,
size:"140,20",
typeid:4,
uuid:"06109658-3D7A-4226-AAB7-018F8E69B995",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"",
dataProviderID:"drawingRevision",
editable:false,
formIndex:50,
format:"|U",
location:"99,21",
name:"drawrevin",
onDataChangeMethodID:"516FE600-12F1-4E61-A63F-AD807BBD6AD7",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"140,20",
typeid:4,
uuid:"09ED96ED-2B8F-40CF-90E9-9D1B42C0E06E",
visible:false
},
{
dataProviderID:"scopes.globals.mobItemWeight",
formIndex:59,
horizontalAlignment:4,
location:"135,175",
name:"itemweight",
size:"64,20",
transparent:true,
typeid:7,
uuid:"103EFB51-4A84-429C-B63A-4D4D449B4CBA",
visible:false
},
{
dataProviderID:"scopes.globals.mobLoadWeight",
formIndex:43,
horizontalAlignment:4,
location:"152,175",
name:"shipweight",
size:"54,20",
transparent:true,
typeid:7,
uuid:"111700DD-2E23-48E9-B15F-31B9E4A69B9D",
visible:false
},
{
dataProviderID:"scopes.globals.mobBundleWeight",
enabled:false,
formIndex:13,
horizontalAlignment:4,
location:"139,175",
name:"bundleweight",
size:"61,20",
transparent:true,
typeid:7,
uuid:"121BA923-88A2-4F94-92D0-2B2AF57BD278",
visible:false
},
{
dataProviderID:"scopes.globals.mobPreviousStatus",
formIndex:31,
horizontalAlignment:4,
location:"135,233",
name:"loadnumber",
size:"105,20",
transparent:true,
typeid:7,
uuid:"12290AB5-EA7A-47A9-9BD3-DA9278C0DDAA",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"",
dataProviderID:"loadNumber",
editable:false,
formIndex:39,
format:"|U",
location:"99,21",
name:"loadnumberin",
onActionMethodID:"-1",
onDataChangeMethodID:"8CF384CA-21DF-412A-A399-7789AF85E5F8",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"140,20",
tabSeq:4,
typeid:4,
uuid:"139D22AE-29DD-44B8-91E4-2F12F2FEE5CD",
visible:false
},
{
formIndex:56,
labelFor:"",
location:"0,21",
name:"gradeinlabel",
size:"94,20",
text:"i18n:sts.label.grade",
transparent:true,
typeid:7,
uuid:"17C86526-3A36-4A0A-9A26-254EE5349BDD",
visible:false
},
{
formIndex:60,
labelFor:"",
location:"0,21",
name:"workerinlabel",
size:"94,20",
text:"Worker:",
transparent:true,
typeid:7,
uuid:"17FDA8D8-3671-4C67-8311-F1D37E7E08CB",
visible:false
},
{
formIndex:84,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"statuslabel",
size:"113,20",
text:"i18n:sts.label.status",
transparent:true,
typeid:7,
uuid:"18204D2D-AEF1-4D72-B87B-96ED6036E085",
visible:false
},
{
dataProviderID:"sts_idfile_to_statusdescrip.status_code",
formIndex:46,
horizontalAlignment:4,
location:"135,233",
name:"status",
size:"105,20",
transparent:true,
typeid:7,
uuid:"1B5E980E-0B92-40A2-90B6-4FF77FC48A4B",
visible:false
},
{
dataProviderID:"scopes.globals.mobWeightUnits",
formIndex:62,
horizontalAlignment:4,
location:"201,175",
name:"jobweightunits",
size:"40,20",
text:"type",
transparent:true,
typeid:7,
uuid:"1EC42E83-3C0D-40D3-B938-59547C8443F4",
visible:false
},
{
formIndex:91,
location:"0,21",
name:"bundleinlabel",
size:"94,20",
text:"i18n:sts.label.bundle.number",
transparent:true,
typeid:7,
uuid:"1F1DBD9F-8ECF-40D5-9FEB-AE1D2CAC34DB",
visible:false
},
{
formIndex:80,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"sheetnumberlabel",
size:"113,20",
text:"i18n:sts.label.sheet.number",
transparent:true,
typeid:7,
uuid:"21258B57-9F79-406D-87DA-0207F3F25C76",
visible:false
},
{
formIndex:5,
location:"9,175",
name:"bundlepieceslabel",
size:"29,20",
text:"i18n:sts.label.bundle.pieces",
transparent:true,
typeid:7,
uuid:"26001B70-AAE3-4C8C-A722-CADC8B391A2C",
visible:false
},
{
formIndex:58,
horizontalAlignment:4,
labelFor:"",
location:"0,145",
mnemonic:"",
name:"updateloadlabel",
size:"115,20",
text:"i18n:sts.label.load.update",
transparent:true,
typeid:7,
uuid:"278C8DAF-60FD-4846-9C30-FB9A2687B27A",
visible:false
},
{
formIndex:19,
labelFor:"",
location:"0,21",
name:"jobnumberinlabel",
size:"94,20",
text:"i18n:sts.label.job.number",
transparent:true,
typeid:7,
uuid:"2A8E478F-881B-4DE6-9E42-2D6A747C54B5",
visible:false
},
{
extendsID:"BAF027A9-12D4-4400-BCB7-F4B8ADBD9B99",
formIndex:98,
typeid:7,
uuid:"2FDEF4AD-9CAA-4F24-A536-E6B78F90E935"
},
{
formIndex:3,
horizontalAlignment:2,
labelFor:"",
location:"0,175",
name:"itemlengthlabel",
size:"113,20",
text:"i18n:sts.label.length",
transparent:true,
typeid:7,
uuid:"2FF83E22-A2DF-42CD-80A2-158820FD1577",
visible:false
},
{
dataProviderID:"scopes.globals.mobLocationWeight",
formIndex:70,
horizontalAlignment:4,
location:"135,175",
name:"locationweight",
size:"64,20",
transparent:true,
typeid:7,
uuid:"328720D9-E114-4825-98B2-9C9C9BA4725E",
visible:false
},
{
dataProviderID:"scopes.globals.mobLoadPieces",
formIndex:34,
horizontalAlignment:2,
location:"52,175",
name:"shippieces",
size:"55,20",
transparent:true,
typeid:7,
uuid:"35A6481D-1063-483A-B4E4-F7453BBD59BE",
visible:false
},
{
formIndex:52,
labelFor:"",
location:"0,21",
name:"heatinlabel",
size:"94,20",
text:"i18n:sts.label.heat",
transparent:true,
typeid:7,
uuid:"379EF623-AA32-4CCF-864E-01B870CBC102",
visible:false
},
{
formIndex:81,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"prevstatuslabel",
size:"113,20",
text:"i18n:sts.label.previous.status",
transparent:true,
typeid:7,
uuid:"37ED2C79-EB67-44DC-B36F-2A62CD5803C4",
visible:false
},
{
formIndex:87,
horizontalAlignment:2,
labelFor:"",
location:"0,175",
name:"receiveremaininglabel",
size:"38,20",
text:"i18n:sts.label.receive.remaining",
transparent:true,
typeid:7,
uuid:"468EFEF6-8189-400B-986F-C5F1FF32BFE9",
visible:false
},
{
formIndex:89,
horizontalAlignment:2,
labelFor:"",
location:"0,208",
name:"spacerlabel",
size:"113,20",
transparent:true,
typeid:7,
uuid:"4AA22C5E-5317-45FC-9B6A-1965A312D40C",
visible:false
},
{
formIndex:54,
labelFor:"",
location:"0,21",
mnemonic:"",
name:"seqnumberinlabel",
size:"94,20",
text:"i18n:sts.label.sequence.number",
transparent:true,
typeid:7,
uuid:"4BC5863C-F8D1-4D79-B3D0-0184D7B1E98E",
visible:false
},
{
dataProviderID:"sts_idfile_to_sequence.sequence_number",
formIndex:72,
horizontalAlignment:4,
location:"135,233",
name:"seqnumber",
size:"105,20",
transparent:true,
typeid:7,
uuid:"4DF665A3-CC7B-418E-9263-5018E5F3F54F",
visible:false
},
{
dataProviderID:"sts_idfile_to_pcmks.piecemark",
formIndex:47,
horizontalAlignment:4,
location:"135,233",
name:"piecemark",
size:"105,20",
transparent:true,
typeid:7,
uuid:"50A8129B-CCB7-4218-9AA4-787B02256745",
visible:false
},
{
dataProviderID:"genericInput",
formIndex:26,
format:"|U",
location:"99,21",
name:"genericin",
onActionMethodID:"F8ADBEB1-1289-45F4-AE3B-3E68F35340C2",
onDataChangeMethodID:"527CADD7-4E05-4B95-B333-3D6642B8999C",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"140,20",
typeid:4,
uuid:"52A7A624-E15A-4752-8C48-6AEEE363C9E0",
visible:false
},
{
formIndex:48,
horizontalAlignment:2,
labelFor:"",
location:"0,175",
name:"itemweightlabel",
size:"113,20",
text:"i18n:sts.label.item.weight",
transparent:true,
typeid:7,
uuid:"53952713-3865-460F-96E3-CF920D778426",
visible:false
},
{
formIndex:38,
horizontalAlignment:4,
location:"135,233",
name:"ps",
size:"105,20",
transparent:true,
typeid:7,
uuid:"54C405BC-631C-44A8-80D3-81B1CB2C1B42",
visible:false
},
{
formIndex:21,
labelFor:"",
location:"0,21",
name:"currentidinlabel",
size:"94,20",
text:"i18n:sts.label.id.current",
transparent:true,
typeid:7,
uuid:"5BA3FF00-9656-48AD-9F00-F7FDB0FCDA0B",
visible:false
},
{
extendsID:"6D9A2BCF-CC75-4320-BC90-9CAA730AB885",
formIndex:100,
typeid:16,
uuid:"5D2F3963-1D63-4FB8-A8AA-170E0304D934"
},
{
formIndex:24,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"seqnumberlabel",
size:"113,20",
text:"i18n:sts.label.sequence.number",
transparent:true,
typeid:7,
uuid:"5F0D2755-0068-448D-9233-BA173C5FF233",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"",
dataProviderID:"statusWorker",
editable:false,
formIndex:29,
format:"|U",
location:"99,21",
name:"workerin",
onActionMethodID:"C2F92EE1-BC2D-4469-8B66-C8962D79B9EA",
onDataChangeMethodID:"F9C47BF5-F1BE-46D1-82FF-C80A0246CBEF",
onFocusGainedMethodID:"9F12D05A-CD94-451C-B0D6-C2BBC656849C",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"140,20",
tabSeq:6,
typeid:4,
uuid:"60F97AFE-07D5-440F-B818-D526FA44B861",
visible:false
},
{
dataProviderID:"scopes.globals.mobWeightUnits",
formIndex:15,
horizontalAlignment:4,
location:"206,175",
name:"receiveweightunits",
size:"35,20",
text:"type",
transparent:true,
typeid:7,
uuid:"6608FB28-97A6-40F9-A8D1-831B4E4130C5",
visible:false
},
{
dataProviderID:"lastID",
formIndex:71,
location:"119,233",
name:"previousid",
size:"121,20",
transparent:true,
typeid:7,
uuid:"6AB01297-ACDF-4B4F-A014-84E9311C9E59",
visible:false
},
{
dataProviderID:"scopes.globals.mobBundlePieces",
formIndex:11,
horizontalAlignment:0,
location:"37,175",
name:"bundlepieces",
size:"75,20",
transparent:true,
typeid:7,
uuid:"6CC78AE5-7BE8-4863-AF31-D84BCBA28791",
visible:false
},
{
dataProviderID:"sts_idrepfile_idfile.shop_order",
formIndex:41,
horizontalAlignment:4,
location:"135,233",
name:"shoporder",
size:"105,20",
transparent:true,
typeid:7,
uuid:"71A939E5-B57C-4572-B7F8-10603B55FAD4",
visible:false
},
{
formIndex:91,
labelFor:"genericin",
location:"0,21",
name:"genericinlabel",
size:"94,20",
text:"i18n:sts.label.generic",
transparent:true,
typeid:7,
uuid:"77647B83-01A6-4456-A86B-AA2721FF4EC3",
visible:false
},
{
dataProviderID:"sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.job_number",
formIndex:93,
horizontalAlignment:4,
location:"135,233",
name:"jobnumber",
size:"105,20",
transparent:true,
typeid:7,
uuid:"77845BDD-D7BF-48AE-A8EB-11616CDE6331",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
customProperties:"",
dataProviderID:"currentID",
editable:false,
formIndex:49,
format:"|U",
location:"99,21",
name:"currentidin",
onDataChangeMethodID:"8207B6BB-DA06-4861-8E21-3426C54CCC5F",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"140,20",
tabSeq:7,
typeid:4,
uuid:"7819E826-215E-4A98-9A2B-051F21B1EB3C",
visible:false
},
{
formIndex:79,
horizontalAlignment:2,
labelFor:"",
location:"105,175",
name:"shipweightlabel",
size:"49,20",
text:"i18n:sts.label.weight",
transparent:true,
typeid:7,
uuid:"7B8BCAD0-C104-467D-881C-D9B7C271ED3D",
visible:false
},
{
dataProviderID:"scopes.globals.mobPreviousStatus",
formIndex:33,
horizontalAlignment:2,
location:"37,175",
name:"receiveremaining",
size:"55,20",
transparent:true,
typeid:7,
uuid:"7C1A7ACB-9AAC-4F32-ABDE-B1A46C20E8BE",
visible:false
},
{
formIndex:83,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"locationlabel",
size:"113,20",
text:"i18n:sts.label.location",
transparent:true,
typeid:7,
uuid:"800E893E-03B0-433B-A2DB-E23988FB9780",
visible:false
},
{
anchors:15,
formIndex:6,
location:"5,126",
name:"tabless",
printable:false,
size:"230,194",
tabOrientation:-1,
tabSeq:-2,
transparent:true,
typeid:16,
uuid:"8037A2FA-9084-41AC-90EE-40E4FB4D579A"
},
{
dataProviderID:"sts_idfile_to_pcmks.sts_pcmks_to_sheet.sts_sheet_to_job.job_weight",
formIndex:92,
location:"135,175",
name:"jobweight",
size:"67,20",
transparent:true,
typeid:7,
uuid:"80BABB3C-2D72-43DD-AD5B-A0B9C41BB478",
visible:false
},
{
dataProviderID:"scopes.globals.mobLocationPieces",
formIndex:8,
horizontalAlignment:4,
location:"135,233",
name:"locationpieces",
size:"105,20",
transparent:true,
typeid:7,
uuid:"838ADB4E-B5CD-4805-91AF-331B9ABC19A4",
visible:false
},
{
extendsID:"E082B205-F6E9-4457-9D80-4E59FA43A491",
formIndex:2,
tabSeq:-2,
typeid:7,
uuid:"83CCC5F1-1738-4321-8064-C3546517FF30"
},
{
formIndex:37,
horizontalAlignment:4,
location:"135,233",
name:"heat",
size:"105,20",
transparent:true,
typeid:7,
uuid:"86DC9F5F-D13E-4017-B4DE-0CF6D1BAD737",
visible:false
},
{
formIndex:77,
labelFor:"",
location:"0,21",
name:"statusinlabel",
size:"94,20",
text:"i18n:sts.label.status",
transparent:true,
typeid:7,
uuid:"8CA7F31E-8129-4030-B925-D18C86746E0D",
visible:false
},
{
formIndex:74,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"pslabel",
size:"113,20",
text:"i18n:sts.label.ps",
transparent:true,
typeid:7,
uuid:"8DC62853-2F1F-40B4-919C-8AC08A809A62",
visible:false
},
{
dataProviderID:"scopes.globals.mobItemLength",
formIndex:4,
horizontalAlignment:4,
location:"135,175",
name:"itemlength",
size:"66,20",
transparent:true,
typeid:7,
uuid:"8E73CC40-9880-400A-A509-748D06D06729",
visible:false
},
{
dataProviderID:"scopes.globals.mobWeightUnits",
formIndex:61,
horizontalAlignment:4,
location:"201,175",
name:"locationweightunits",
size:"40,20",
text:"type",
transparent:true,
typeid:7,
uuid:"8F1ADF44-DEE1-49D2-8CF5-FA82D77239A8",
visible:false
},
{
formIndex:7,
location:"111,175",
name:"bundleweightlabel",
size:"29,20",
text:"i18n:sts.label.bundle.weight",
transparent:true,
typeid:7,
uuid:"94833537-3F3C-4A7B-8C53-E15FCA246430",
visible:false
},
{
dataProviderID:"scopes.globals.mobLocationPiecemarks",
formIndex:9,
horizontalAlignment:4,
location:"135,233",
name:"pcmksatlocation",
size:"105,20",
transparent:true,
typeid:7,
uuid:"979953E1-80F6-4BE2-8E1A-C848CDE9C12B",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"piecemark",
editable:false,
formIndex:65,
format:"|U",
location:"135,145",
name:"updateload",
onActionMethodID:"C2F92EE1-BC2D-4469-8B66-C8962D79B9EA",
onDataChangeMethodID:"-1",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
selectOnEnter:true,
size:"73,20",
typeid:4,
uuid:"98B641BE-B0BE-4709-97B8-C2B0B00614E3",
visible:false
},
{
dataProviderID:"scopes.globals.mobPreviousStatus",
formIndex:40,
horizontalAlignment:4,
location:"135,233",
name:"prevstatus",
size:"105,20",
transparent:true,
typeid:7,
uuid:"992BE755-83C2-45ED-9E6A-62F43A51F76B",
visible:false
},
{
formIndex:25,
horizontalAlignment:2,
labelFor:"",
location:"0,175",
mnemonic:"",
name:"jobweightlabel",
size:"113,20",
text:"i18n:sts.label.job.weight",
transparent:true,
typeid:7,
uuid:"99EE9C40-2307-4BCC-A06F-F1F9595A3CF2",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"piecemark",
editable:false,
formIndex:67,
format:"|U",
location:"99,21",
name:"piecemarkin",
onActionMethodID:"-1",
onDataChangeMethodID:"C4F5F0BB-0AD2-4854-A28A-AD9BDFF663D3",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
selectOnEnter:true,
size:"140,20",
typeid:4,
uuid:"9B1C8F67-0989-4C5F-9291-38CD1F692E2D",
visible:false
},
{
formIndex:95,
location:"135,208",
name:"spacer",
size:"105,20",
transparent:true,
typeid:7,
uuid:"9C389A02-32D9-48FA-94AC-4243B49C4C29",
visible:false
},
{
dataProviderID:"scopes.globals.mobWeightUnits",
formIndex:12,
horizontalAlignment:4,
location:"201,175",
name:"itemweightunits",
size:"40,20",
text:"type",
transparent:true,
typeid:7,
uuid:"9E35FE37-D575-4652-914E-A3147928A995",
visible:false
},
{
formIndex:90,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"shoporderlabel",
size:"113,20",
text:"i18n:sts.label.shop.order",
transparent:true,
typeid:7,
uuid:"A5F62048-AADF-46C9-8F6F-A21166B6C2BA",
visible:false
},
{
dataProviderID:"scopes.globals.mobLengthUnits",
horizontalAlignment:4,
location:"201,175",
name:"itemlengthunits",
size:"40,20",
text:"type",
transparent:true,
typeid:7,
uuid:"A756D41E-8E15-4C27-AC4A-EB090DAF3E82",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"statusLocation",
editable:false,
formIndex:63,
format:"|U",
location:"99,21",
name:"locationin",
onActionMethodID:"C2F92EE1-BC2D-4469-8B66-C8962D79B9EA",
onDataChangeMethodID:"76457369-74E3-42E3-8B3C-EC42331E9A19",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
selectOnEnter:true,
size:"140,20",
tabSeq:5,
typeid:4,
uuid:"AA0835B9-C890-4C6C-B820-F9EED1B067C6",
visible:false
},
{
formIndex:85,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"piecemarklabel",
size:"113,20",
text:"i18n:sts.label.piecemark",
transparent:true,
typeid:7,
uuid:"B13B18F0-F74D-4A8B-8F36-E3ED1368DEF9",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"heat",
editable:false,
formIndex:64,
format:"|U",
location:"99,21",
name:"heatin",
onActionMethodID:"C2F92EE1-BC2D-4469-8B66-C8962D79B9EA",
onDataChangeMethodID:"6EC17DBA-0E67-41D3-AAF8-02D306C47BE4",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
selectOnEnter:true,
size:"140,20",
typeid:4,
uuid:"B2C9C39C-99AB-4EE3-A359-DCB5EEA957B5",
visible:false
},
{
formIndex:17,
labelFor:"",
location:"0,233",
name:"previousidlabel",
size:"104,20",
text:"i18n:sts.label.previous.id",
transparent:true,
typeid:7,
uuid:"B4BA7F88-A1C6-4E55-ABEB-0323D97CFBC2",
visible:false
},
{
dataProviderID:"scopes.globals.mobPreviousStatus",
formIndex:44,
horizontalAlignment:4,
location:"137,175",
name:"receiveweight",
size:"54,20",
transparent:true,
typeid:7,
uuid:"B6D72546-7A6F-4B6D-9EA1-E57067D79C16",
visible:false
},
{
formIndex:57,
labelFor:"",
location:"0,21",
name:"locationinlabel",
size:"94,20",
text:"i18n:sts.label.location",
transparent:true,
typeid:7,
uuid:"B776C3F0-5C5F-4245-AF06-601347C8AFDE",
visible:false
},
{
dataProviderID:"sts_idfile_to_pcmks.material",
formIndex:35,
horizontalAlignment:4,
location:"135,233",
name:"material",
size:"105,20",
transparent:true,
typeid:7,
uuid:"B82A7636-FE96-4E61-BFC0-74695C4F63EE",
visible:false
},
{
dataProviderID:"viewTitle",
formIndex:1,
location:"0,0",
name:"transShop",
size:"187,20",
text:"i18n:sts.mobile.transactions",
typeid:7,
uuid:"BC4C592A-2747-41B3-A461-21A6C8AD229A"
},
{
formIndex:55,
labelFor:"",
location:"0,21",
mnemonic:"",
name:"piecemarkinlabel",
size:"94,20",
text:"i18n:sts.label.piecemark",
transparent:true,
typeid:7,
uuid:"BD7453AC-98FF-492B-BCDE-B45136EC3E3C",
visible:false
},
{
dataProviderID:"scopes.globals.mobPreviousLocation",
formIndex:94,
horizontalAlignment:4,
location:"135,233",
name:"prevlocation",
size:"105,20",
transparent:true,
typeid:7,
uuid:"C1087E11-CBFC-4883-8B4E-408D51488A17",
visible:false
},
{
formIndex:73,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"materiallabel",
size:"113,20",
text:"i18n:sts.label.material",
transparent:true,
typeid:7,
uuid:"C16EBF5D-8FAD-4A61-BB67-74B4FC3C6CBB",
visible:false
},
{
extendsID:"5E1F8B4B-3AC9-4527-AAD4-2A4EA808BC6F",
formIndex:99,
location:"0,0",
size:"239,320",
tabSeq:-2,
typeid:16,
uuid:"CF89993A-1B9E-43BE-AAFB-CE8A869F537D"
},
{
dataProviderID:"sts_idrepfile_idfile.sts_idfile_to_pcmks.grade",
formIndex:36,
horizontalAlignment:4,
location:"135,233",
name:"grade",
size:"105,20",
transparent:true,
typeid:7,
uuid:"D33744D4-5FC8-43E6-A199-306D0420C9B2",
visible:false
},
{
formIndex:22,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"pcmksatlocationlabel",
size:"113,20",
text:"i18n:sts.label.piecemarks.at.location",
transparent:true,
typeid:7,
uuid:"D7884225-F50C-4B4F-AB43-656DABF5D50E",
visible:false
},
{
formIndex:20,
labelFor:"",
location:"0,21",
name:"drawrevinlabel",
size:"94,20",
text:"i18n:sts.label.drawing.rev.level",
transparent:true,
typeid:7,
uuid:"DB025B2C-F849-4642-8567-3AE6745BC875",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"piecemark",
editable:false,
formIndex:69,
format:"|U",
location:"135,145",
name:"cancelupdate",
onActionMethodID:"C2F92EE1-BC2D-4469-8B66-C8962D79B9EA",
onDataChangeMethodID:"-1",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
selectOnEnter:true,
size:"73,20",
typeid:4,
uuid:"DB4A8A01-1651-454E-A154-3A4A8883E0AC",
visible:false
},
{
formIndex:10,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"prevlocationlabel",
size:"113,20",
text:"i18n:sts.label.previous.location",
transparent:true,
typeid:7,
uuid:"DF533CFC-B902-4F3E-8AE0-90B8BEE36ABB",
visible:false
},
{
formIndex:88,
horizontalAlignment:2,
labelFor:"",
location:"15,175",
name:"shippieceslabel",
size:"38,20",
text:"i18n:sts.label.ship",
transparent:true,
typeid:7,
uuid:"E07FAACA-4B6B-4BC9-BB94-A18DD318EB3C",
visible:false
},
{
formIndex:53,
horizontalAlignment:4,
labelFor:"",
location:"0,145",
mnemonic:"",
name:"cancelupdatelabel",
size:"115,20",
text:"i18n:sts.label.cancel.update",
transparent:true,
typeid:7,
uuid:"E2903C03-338C-4445-AF23-72C82F7B9536",
visible:false
},
{
dataProviderID:"id_location",
formIndex:45,
horizontalAlignment:4,
location:"135,233",
name:"location",
size:"105,20",
transparent:true,
typeid:7,
uuid:"E291464B-F685-40D7-9D88-46497231E2F7",
visible:false
},
{
formIndex:30,
horizontalAlignment:2,
labelFor:"",
location:"0,175",
name:"locationweightlabel",
size:"113,20",
text:"i18n:sts.label.location.weight",
transparent:true,
typeid:7,
uuid:"E29FAF02-0675-4775-B4D7-A4862D9D798F",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"currentBundle",
editable:false,
formIndex:26,
format:"|U",
location:"99,21",
name:"bundlein",
onActionMethodID:"D7E529C3-3D6F-473F-858F-F9308C91C8DD",
onDataChangeMethodID:"7A558DA6-FB57-40FA-AA5A-D44A5091208E",
onFocusLostMethodID:"-1",
placeholderText:"i18n:sts.txt.bundle.list",
selectOnEnter:true,
tabSeq:2,
typeid:4,
uuid:"E36FACFF-B674-470C-AE71-629FC05513E4",
visible:false
},
{
dataProviderID:"scopes.globals.mobWeightUnits",
formIndex:14,
horizontalAlignment:4,
location:"201,175",
name:"bundleweightunits",
size:"40,20",
text:"type",
transparent:true,
typeid:7,
uuid:"E95CF000-71F7-49DA-BBBD-A3D0BA5AE26D",
visible:false
},
{
formIndex:18,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"pcsstatcountlabel",
size:"113,20",
text:"i18n:sts.label.piecemarks.w.status",
transparent:true,
typeid:7,
uuid:"EAAB6791-535F-4F76-8D82-BCB22E1DFE42",
visible:false
},
{
formIndex:76,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"gradelabel",
size:"113,20",
text:"i18n:sts.label.grade",
transparent:true,
typeid:7,
uuid:"EADC9049-7C91-4E5D-8586-72FBFA580CB4",
visible:false
},
{
formIndex:82,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"loadnumberlabel",
size:"113,20",
text:"i18n:sts.load.num",
transparent:true,
typeid:7,
uuid:"EB7B17CE-0D1D-45DF-8E35-A4B44EEE9BEA",
visible:false
},
{
dataProviderID:"scopes.globals.mobPiecesStatus",
formIndex:32,
horizontalAlignment:4,
location:"135,233",
name:"pcsstatcount",
size:"105,20",
transparent:true,
typeid:7,
uuid:"ED52D2E8-5D2F-4EFC-BC2C-9E0C11898F40",
visible:false
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"statusCode",
editable:false,
formIndex:28,
format:"|U",
location:"99,21",
name:"statusin",
onDataChangeMethodID:"26985B1F-17E8-4514-8F2A-6FF5FFBAA236",
onFocusGainedMethodID:"-1",
onFocusLostMethodID:"-1",
selectOnEnter:true,
size:"140,20",
tabSeq:1,
typeid:4,
uuid:"EDFE621F-905B-4069-99A9-D21073F19356",
visible:false
},
{
formIndex:78,
horizontalAlignment:2,
labelFor:"",
location:"90,175",
name:"receiveweightlabel",
size:"49,20",
text:"i18n:sts.label.receive.weight",
transparent:true,
typeid:7,
uuid:"F40518F4-D344-47F8-BBC5-4B3A032972FB",
visible:false
},
{
formIndex:27,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
mnemonic:"",
name:"jobnumberlabel",
size:"113,20",
text:"i18n:sts.label.job.num",
transparent:true,
typeid:7,
uuid:"F688DBD8-78C4-429C-92BF-EAFECA775158",
visible:false
},
{
dataProviderID:"scopes.globals.mobWeightUnits",
formIndex:16,
horizontalAlignment:4,
location:"206,175",
name:"shipweightunits",
size:"35,20",
text:"type",
transparent:true,
typeid:7,
uuid:"FBBA7DB0-0320-4F5B-8C4B-6036BF44F6E9",
visible:false
},
{
extendsID:"9F957B83-7142-4DB5-BEF2-9BF35E20052B",
formIndex:97,
tabSeq:-2,
typeid:4,
uuid:"FC7A6E61-10B5-428F-AF90-6CED424C446F"
},
{
formIndex:75,
horizontalAlignment:2,
labelFor:"",
location:"0,233",
name:"heatlabel",
size:"113,20",
text:"i18n:sts.label.heat",
transparent:true,
typeid:7,
uuid:"FDC9063C-2D77-4B1D-BE77-C538A7418BEE",
visible:false
},
{
extendsID:"19BB9A0D-AE96-4A42-9A4E-D4761D244396",
formIndex:96,
tabSeq:-2,
typeid:4,
uuid:"FE0CC532-2E45-4E93-BC1D-28B1604B49CC"
},
{
formIndex:86,
horizontalAlignment:2,
labelFor:"",
location:"0,21",
name:"loadnumberinlabel",
size:"94,20",
text:"i18n:sts.label.load.number",
transparent:true,
typeid:7,
uuid:"FF3D847A-6D3B-4D97-9795-6C415A714AFF",
visible:false
}
],
name:"rf_mobile_view",
onElementFocusGainedMethodID:"-1",
onElementFocusLostMethodID:"-1",
onHideMethodID:"C23785CE-89F6-40F2-B99F-2ABB6EE05902",
onLoadMethodID:"-1",
onRenderMethodID:"-1",
onShowMethodID:"8F094E8E-0D6B-4635-8A95-BBCE28FD4B94",
scrollbars:36,
showInMenu:true,
styleName:"sts_one",
typeid:3,
uuid:"7D72F88B-D5CE-4B6B-A17A-E148C011AC75",
view:0