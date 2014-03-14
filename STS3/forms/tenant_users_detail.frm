dataSource:"db:/stsservoy/users",
extendsID:"66E5E134-B5C4-43B3-B810-281E2BFF03C1",
items:[
{
dataProviderID:"is_account_active",
displayType:4,
location:"90,0",
size:"140,20",
text:"Is Active?",
typeid:4,
uuid:"06B69ADE-48A4-4192-BF83-74BF70441F3E"
},
{
horizontalAlignment:4,
location:"5,56",
size:"80,20",
text:"LOGON:",
transparent:true,
typeid:7,
uuid:"11F846B8-5AAE-4FE8-9102-1E2A321118E7"
},
{
horizontalAlignment:4,
location:"5,112",
size:"80,20",
text:"Password:",
transparent:true,
typeid:7,
uuid:"1D73E33E-8FC8-4978-86DE-CA0B89B943E7"
},
{
horizontalAlignment:4,
location:"0,308",
size:"80,20",
text:"Department:",
transparent:true,
typeid:7,
uuid:"3883C774-749A-4562-BBFC-6783D558FB6D"
},
{
dataProviderID:"user_name",
format:"|U",
location:"90,56",
onDataChangeMethodID:"8DACB64A-7171-47AC-9932-E0A54D2E2942",
size:"140,20",
typeid:4,
uuid:"4B5EBC2D-71D9-415F-A8A4-3F1C8AE1D60C"
},
{
dataProviderID:"passwordConfirm",
displayType:6,
location:"90,140",
size:"140,20",
typeid:4,
uuid:"6B167F77-048D-4E54-BC73-32B56BF5D612"
},
{
dataProviderID:"last_login",
displayType:5,
editable:false,
enabled:false,
location:"90,193",
size:"140,20",
transparent:true,
typeid:4,
uuid:"707ACAF6-9C4D-443E-BA05-CEB66B21AC5A"
},
{
horizontalAlignment:4,
location:"10,28",
size:"80,20",
text:"ID:",
transparent:true,
typeid:7,
uuid:"707DEBAA-18BA-4E26-8B52-EF62962CC6DA"
},
{
anchors:9,
labelFor:"userGroups",
location:"240,5",
name:"userGroups_label",
size:"121,20",
text:"Security Groups:",
transparent:true,
typeid:7,
uuid:"726CBC7D-AEE5-42C0-8EA0-2B0A086309F6"
},
{
horizontalAlignment:4,
location:"0,283",
size:"80,20",
text:"Division:",
transparent:true,
typeid:7,
uuid:"892C2FDD-FD62-412B-AFE1-663F2A0DA144"
},
{
dataProviderID:"errorMessage",
foreground:"#ff0000",
location:"5,331",
size:"388,20",
transparent:true,
typeid:7,
uuid:"89B44350-8553-41E1-A40E-8161BC970341"
},
{
anchors:9,
dataProviderID:"userGroups",
displayType:4,
location:"245,30",
name:"userGroups",
onDataChangeMethodID:"38085E9F-89B4-4BB2-B4EC-877EB38695C2",
size:"144,296",
typeid:4,
uuid:"8C99CD70-6B2E-4773-B6FE-3690F107B360",
valuelistID:"681D4A75-FD76-4AB5-BD61-282DA3330713"
},
{
horizontalAlignment:4,
location:"0,193",
size:"80,20",
text:"Last Login:",
transparent:true,
typeid:7,
uuid:"B277CC92-7C1C-42AF-86E8-F483B45195F3"
},
{
height:352,
partType:5,
typeid:19,
uuid:"B50178C0-CA09-4179-AF93-39894189321D"
},
{
dataProviderID:"display_tenant_name",
location:"90,283",
size:"140,20",
text:"type",
transparent:true,
typeid:7,
uuid:"B7CC1DAD-8BAD-4384-88DE-4C3FCFEC8612"
},
{
dataProviderID:"name_last",
location:"90,84",
size:"140,20",
typeid:4,
uuid:"C3DF61C4-477F-4C47-A9EE-F8E993F6979E"
},
{
dataProviderID:"userPassword",
displayType:6,
location:"90,112",
size:"140,20",
typeid:4,
uuid:"E06CFC5A-B2EF-49B3-844A-B3665FCA6A97"
},
{
dataProviderID:"user_id",
editable:false,
location:"90,28",
size:"49,20",
transparent:true,
typeid:4,
uuid:"E078E170-8522-4D6A-9E45-7804B3750E21"
},
{
location:"90,168",
onActionMethodID:"07B224C1-B513-4869-BD4A-60BCF4E94ECA",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"140,20",
text:"Update Password",
typeid:7,
uuid:"E453CA8F-6490-4DD8-87B6-3524F70D8B05"
},
{
dataProviderID:"association_uuid",
displayType:2,
editable:false,
location:"95,308",
size:"140,20",
typeid:4,
uuid:"EF61ED3A-2B05-4A90-A20D-A58F2AED9691",
valuelistID:"7171223D-A518-458A-B051-215CF16CBCBE"
},
{
horizontalAlignment:4,
location:"5,140",
size:"80,20",
text:"Confirm:",
transparent:true,
typeid:7,
uuid:"F5573C30-ADE1-424E-8500-45CDB9050F7F"
},
{
horizontalAlignment:4,
location:"5,84",
size:"80,20",
text:"Description:",
transparent:true,
typeid:7,
uuid:"FB2381A3-5F89-409D-9EBC-4D6613FAFB9C"
}
],
name:"tenant_users_detail",
size:"395,360",
styleName:"sts_one",
typeid:3,
uuid:"C88F92EB-CAB3-4534-83E3-1D6A46FEB83C",
view:0