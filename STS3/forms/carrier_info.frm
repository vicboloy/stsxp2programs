customProperties:"methods:{\
onHideMethodID:{\
arguments:null,\
parameters:null\
},\
onShowMethodID:{\
arguments:null,\
parameters:null\
}\
}",
dataSource:"db:/stsservoy/carrier",
encapsulation:0,
extendsID:"AA270F42-5225-4103-9803-10B4A05DB5CF",
items:[
{
dataProviderID:"sts_carrier_to_address.line1",
location:"202,75",
name:"line1",
size:"238,20",
tabSeq:3,
text:"Line1",
typeid:4,
uuid:"060C148D-4BA0-42F8-8B77-CC7722436CF4"
},
{
horizontalAlignment:4,
labelFor:"carrier_number",
location:"15,15",
name:"carrier_number_label",
showClick:false,
showFocus:false,
size:"159,20",
text:"i18n:sts.label.carrier.number",
transparent:true,
typeid:7,
uuid:"11D581ED-F90A-4157-88F7-69C562297754"
},
{
horizontalAlignment:4,
labelFor:"carrier_otherphone3",
location:"37,375",
name:"carrier_otherphone3_label",
showClick:false,
showFocus:false,
size:"159,20",
text:"i18n:sts.label.carrier.phone.three",
transparent:true,
typeid:7,
uuid:"1738B224-8C58-42D2-AED5-D9F4B5C0A43A"
},
{
horizontalAlignment:4,
labelFor:"carrier_cellphone",
location:"37,285",
name:"carrier_cellphone_label",
showClick:false,
showFocus:false,
size:"159,20",
text:"i18n:sts.label.carrier.phone.cell",
transparent:true,
typeid:7,
uuid:"1CBFE863-1E97-44B2-934F-E663F67522DB"
},
{
dataProviderID:"carrier_otherphone2",
format:"|#(25)",
location:"206,345",
name:"carrier_otherphone2",
size:"140,20",
tabSeq:12,
text:"Carrier Otherphone2",
typeid:4,
uuid:"1EE5F53F-FA6E-4B63-B461-91BA6E061A3F"
},
{
horizontalAlignment:0,
location:"92,461",
name:"btn_Save",
onActionMethodID:"100B8F88-B23F-43E4-BC9F-2CB51D291148",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"86,26",
tabSeq:-2,
text:"i18n:sts.btn.save",
typeid:7,
uuid:"237B90F9-B41B-48F0-B6C1-A7285F0829B8",
visible:false
},
{
horizontalAlignment:4,
labelFor:"state",
location:"112,165",
name:"state_label",
showClick:false,
showFocus:false,
size:"80,20",
text:"i18n:sts.label.state",
transparent:true,
typeid:7,
uuid:"2ACB1F91-D4C8-45B2-8194-C422FBE620D7"
},
{
anchors:3,
borderType:"EmptyBorder,0,0,0,0",
horizontalAlignment:0,
imageMediaID:"7DE60661-FA20-4CC8-8F60-48A8518B377F",
location:"362,0",
mediaOptions:14,
name:"btn_Home",
onActionMethodID:"0F7CB54B-C3AC-4211-9A81-5E931253B58C",
showClick:false,
showFocus:false,
size:"78,31",
tabSeq:-2,
toolTipText:"i18n:sts.btn.home.return",
transparent:true,
typeid:7,
uuid:"342C7115-5A08-4380-92B5-8246BE687124"
},
{
horizontalAlignment:4,
labelFor:"carrier_otherphone4",
location:"37,405",
name:"carrier_otherphone4_label",
showClick:false,
showFocus:false,
size:"159,20",
text:"i18n:sts.label.carrier.phone.four",
transparent:true,
typeid:7,
uuid:"3B3EF5B8-9694-47B6-9035-2D597837199A"
},
{
dataProviderID:"carrier_name",
format:"|#(45)",
location:"184,45",
name:"carrier_name",
size:"140,20",
tabSeq:2,
text:"Carrier Name",
typeid:4,
uuid:"445C43D9-545B-47A5-BAA0-03CBBBFB2D5D"
},
{
horizontalAlignment:4,
labelFor:"carrier_workphone",
location:"37,315",
name:"carrier_workphone_label",
showClick:false,
showFocus:false,
size:"159,20",
text:"i18n:sts.label.carrier.phone.work",
transparent:true,
typeid:7,
uuid:"45AA86E2-74D9-419C-9B71-2635F53878EB"
},
{
horizontalAlignment:0,
location:"5,460",
name:"btn_Delete",
onActionMethodID:"E064DA2E-782E-474C-86F5-D602473B1173",
onDoubleClickMethodID:"-1",
onRenderMethodID:"-1",
onRightClickMethodID:"-1",
size:"81,26",
tabSeq:-2,
text:"i18n:sts.btn.delete",
typeid:7,
uuid:"465F3F16-E8FE-4170-82AF-942E7284E8E6"
},
{
dataProviderID:"carrier_workphone",
format:"|#(25)",
location:"206,315",
name:"carrier_workphone",
size:"140,20",
tabSeq:11,
text:"Carrier Workphone",
typeid:4,
uuid:"4DEB7AC6-6991-44E6-963B-C93AA5D9065B"
},
{
dataProviderID:"carrier_cellphone",
format:"|#(25)",
location:"206,285",
name:"carrier_cellphone",
size:"140,20",
tabSeq:10,
text:"Carrier Cellphone",
typeid:4,
uuid:"54DE0FB3-056D-4456-9BB5-0380F24BBF18"
},
{
dataProviderID:"sts_carrier_to_address.zip_postal_code",
displayType:10,
location:"202,195",
name:"zip_postal_code",
size:"93,20",
tabSeq:7,
text:"Zip Postal Code",
typeid:4,
uuid:"5ECDC7D5-153E-4625-B69B-3AEB66F768EA",
valuelistID:"1E3F1416-0A70-4F20-AA48-C026EF17DF8F"
},
{
horizontalAlignment:0,
location:"276,461",
name:"btn_Cancel",
onActionMethodID:"2D2FDD4C-4DC6-4BB9-B450-9446D0DB8840",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"86,26",
tabSeq:-2,
text:"i18n:sts.btn.cancel",
typeid:7,
uuid:"68F3A780-6ECE-4D93-85FC-723B020DF6B1",
visible:false
},
{
dataProviderID:"sts_carrier_to_address.line2",
location:"202,105",
name:"line2",
size:"238,20",
tabSeq:4,
text:"Line2",
typeid:4,
uuid:"6BBEC414-023E-452B-9062-91732652B57B"
},
{
horizontalAlignment:4,
labelFor:"carrier_contactname",
location:"37,225",
name:"carrier_contactname_label",
showClick:false,
showFocus:false,
size:"159,20",
text:"i18n:sts.label.carrier.contact.name",
transparent:true,
typeid:7,
uuid:"73A046DC-2CCF-4D55-B91C-535E509C536C"
},
{
horizontalAlignment:4,
labelFor:"line1",
location:"112,75",
name:"line1_label",
showClick:false,
showFocus:false,
size:"80,20",
text:"i18n:sts.label.line1",
transparent:true,
typeid:7,
uuid:"74DFFAD2-6AC3-4F2E-9018-39552462FBD0"
},
{
horizontalAlignment:4,
labelFor:"carrier_name",
location:"15,45",
name:"carrier_name_label",
showClick:false,
showFocus:false,
size:"159,20",
text:"i18n:sts.label.carrier.name",
transparent:true,
typeid:7,
uuid:"808A21BE-903F-44E6-98E7-A75E3B4FBB4C"
},
{
dataProviderID:"carrier_otherphone3",
format:"|#(25)",
location:"206,375",
name:"carrier_otherphone3",
size:"140,20",
tabSeq:13,
text:"Carrier Otherphone3",
typeid:4,
uuid:"80B4B051-E479-4CD9-BC5D-DF205E55E154"
},
{
dataProviderID:"carrier_otherphone4",
format:"|#(25)",
location:"206,405",
name:"carrier_otherphone4",
size:"140,20",
tabSeq:14,
text:"Carrier Otherphone4",
typeid:4,
uuid:"83F3297E-4763-4E37-9A46-B581E0FA3E2A"
},
{
horizontalAlignment:4,
labelFor:"zip_postal_code",
location:"112,195",
name:"zip_postal_code_label",
showClick:false,
showFocus:false,
size:"80,20",
text:"i18n:sts.label.zip.code",
transparent:true,
typeid:7,
uuid:"8FBF3B04-70CB-4A49-BB4B-461B8CB0AEE3"
},
{
dataProviderID:"carrier_email",
format:"|#(45)",
location:"206,255",
name:"carrier_email",
size:"140,20",
tabSeq:9,
text:"Carrier Email",
typeid:4,
uuid:"93A608BA-BB49-4CC2-9062-EAB01A600586"
},
{
dataProviderID:"carrier_fax",
format:"|#(25)",
location:"206,435",
name:"carrier_fax",
size:"140,20",
tabSeq:15,
text:"Carrier Fax",
typeid:4,
uuid:"96916889-41B1-4CB2-B557-3CC1D8048E2D"
},
{
extendsID:"B8264F35-3B2C-445D-8057-07A22DF67C55",
height:491,
typeid:19,
uuid:"99119554-6ACC-4BFB-A380-E56FBF22C80D"
},
{
horizontalAlignment:4,
labelFor:"carrier_email",
location:"37,255",
name:"carrier_email_label",
showClick:false,
showFocus:false,
size:"159,20",
text:"i18n:sts.label.carrier.email",
transparent:true,
typeid:7,
uuid:"A33DCE2E-3CF6-46F5-A045-1B646E30D7CD"
},
{
horizontalAlignment:4,
labelFor:"city",
location:"112,135",
name:"city_label",
showClick:false,
showFocus:false,
size:"80,20",
text:"i18n:sts.label.city",
transparent:true,
typeid:7,
uuid:"AC7082B6-6370-4215-A38C-0859F85D970E"
},
{
anchors:3,
horizontalAlignment:0,
location:"360,461",
name:"btn_Close",
onActionMethodID:"745C0B19-A344-48E6-A10A-C46A89182EC6",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"78,26",
tabSeq:-2,
text:"i18n:sts.btn.close",
typeid:7,
uuid:"BCE8D524-0E3E-4EAD-ABB6-CE7106AC852F"
},
{
horizontalAlignment:4,
labelFor:"carrier_fax",
location:"37,435",
name:"carrier_fax_label",
showClick:false,
showFocus:false,
size:"159,20",
text:"i18n:sts.label.carrier.phone.fax",
transparent:true,
typeid:7,
uuid:"BDA0FA6B-B88F-481A-B2C1-9EE9E5C71DC9"
},
{
dataProviderID:"carrier_number",
format:"|U[15]",
location:"184,15",
name:"carrier_number",
onDataChangeMethodID:"954AB831-FCE3-477B-9DF1-A5B72004B795",
size:"140,20",
tabSeq:1,
text:"Carrier Number",
typeid:4,
uuid:"C26546D3-B874-4151-B351-E79F33F98035"
},
{
dataProviderID:"sts_carrier_to_address.state",
displayType:10,
format:"|U[2]",
location:"202,165",
name:"state",
size:"93,20",
tabSeq:6,
text:"State",
typeid:4,
uuid:"C82DC71D-1624-4CC9-967A-4168758C4F7F",
valuelistID:"FEA9C79D-E28C-47BC-85D0-7365A4B60B43"
},
{
horizontalAlignment:4,
labelFor:"carrier_otherphone2",
location:"37,345",
name:"carrier_otherphone2_label",
showClick:false,
showFocus:false,
size:"159,20",
text:"i18n:sts.label.carrier.phone.two",
transparent:true,
typeid:7,
uuid:"D0C7C525-C5BA-4551-85ED-FDBD8C3BEC66"
},
{
horizontalAlignment:0,
location:"184,461",
name:"btn_Edit",
onActionMethodID:"B9D2388A-C4A5-411A-A952-9EA4CC7D76FE",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"86,26",
tabSeq:-2,
text:"i18n:sts.btn.edit",
typeid:7,
uuid:"EA5A7E2A-280A-4D53-9CC3-9AD53AA5D60E"
},
{
dataProviderID:"carrier_contactname",
format:"|#(45)",
location:"206,225",
name:"carrier_contactname",
size:"140,20",
tabSeq:8,
text:"Carrier Contactname",
typeid:4,
uuid:"EABBB3AD-377A-4E2E-A4E4-6B6D08CFA4E6"
},
{
horizontalAlignment:4,
labelFor:"line2",
location:"112,105",
name:"line2_label",
showClick:false,
showFocus:false,
size:"80,20",
text:"i18n:sts.label.line2",
transparent:true,
typeid:7,
uuid:"F19B4B76-E014-4952-A649-547913B09102"
},
{
dataProviderID:"sts_carrier_to_address.city",
displayType:10,
location:"202,135",
name:"city",
size:"238,20",
tabSeq:5,
text:"City",
typeid:4,
uuid:"F37DCDF7-D44C-4D0F-83C8-29C4BB8C530F",
valuelistID:"08308B8A-82EC-4397-87CC-DF0087D34A30"
}
],
name:"carrier_info",
namedFoundSet:"separate",
navigatorID:"-1",
onHideMethodID:"E2796BCC-C321-4D79-9612-D563951071B8",
onShowMethodID:"DB785183-C273-4686-9517-00D36B84B139",
showInMenu:true,
size:"443,491",
styleName:"sts_one",
typeid:3,
uuid:"AE359BD7-3CEE-48B4-B854-E9B23029B922"