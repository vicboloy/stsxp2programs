dataSource:"db:/stsservoy/users",
extendsID:"66E5E134-B5C4-43B3-B810-281E2BFF03C1",
items:[
{
dataProviderID:"errorMessage",
fontType:"Arial,0,12",
location:"10,200",
name:"error_message",
size:"314,20",
transparent:true,
typeid:7,
uuid:"088CC303-4296-48A1-ABF9-B487F4FD3188"
},
{
horizontalAlignment:4,
location:"5,175",
size:"132,20",
text:"i18n:sts.label.password.confirm",
transparent:true,
typeid:7,
uuid:"30FC70BD-2950-4EC8-84BA-7E2A38125A67"
},
{
horizontalAlignment:4,
labelFor:"user_name",
location:"5,91",
name:"user_name_label",
size:"132,20",
text:"i18n:sts.label.login.name",
transparent:true,
typeid:7,
uuid:"3478F1D4-55E9-4C0D-A7EC-E4F0A0D1E030"
},
{
displaysTags:true,
enabled:false,
horizontalAlignment:0,
location:"287,151",
name:"btn_Update",
onActionMethodID:"07B224C1-B513-4869-BD4A-60BCF4E94ECA",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"83,44",
tabSeq:-2,
text:"i18n:sts.btn.password",
typeid:7,
uuid:"39790B14-A2B3-4149-9A36-8E8667DF3950"
},
{
anchors:3,
horizontalAlignment:4,
location:"256,5",
name:"editMessage",
text:"i18n:sts.label.edit.message",
transparent:true,
typeid:7,
uuid:"5A832B4C-EFA0-41B6-A125-9F2CEA58177F",
visible:false
},
{
dataProviderID:"is_account_active",
displayType:4,
location:"262,35",
name:"is_account_active",
onDataChangeMethodID:"99B55E10-9A36-4074-912F-DE940E6365FB",
size:"113,20",
tabSeq:-2,
text:"i18n:sts.col.label.account.active",
typeid:4,
uuid:"669E0DD9-3CC4-4B4A-95F4-E2122E472163"
},
{
horizontalAlignment:0,
location:"64,5",
name:"btn_Disconnect",
onActionMethodID:"A1BD36E1-B991-48A8-B662-255A2CD51494",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"209,20",
text:"i18n:sts.btn.disconnect.from.user",
typeid:7,
uuid:"75913495-1D36-4266-BD2F-2F17B0BDFCBD",
visible:false
},
{
horizontalAlignment:4,
location:"5,65",
size:"132,20",
text:"i18n:sts.label.division",
transparent:true,
typeid:7,
uuid:"7B7AABE4-728D-4027-B5E6-C8E4BC565A88"
},
{
displaysTags:true,
horizontalAlignment:4,
labelFor:"last_login",
location:"5,35",
name:"last_login_label",
size:"102,20",
text:"i18n:sts.label.last.login",
transparent:true,
typeid:7,
uuid:"880D0B2D-2225-4916-B472-8DFA56CD3AF1"
},
{
horizontalAlignment:4,
location:"5,150",
size:"132,20",
text:"i18n:sts.label.password.colon",
transparent:true,
typeid:7,
uuid:"8E0B1338-3416-4AA9-B624-AC329197A42D"
},
{
dataProviderID:"assoc",
displayType:2,
editable:false,
location:"142,65",
onActionMethodID:"-1",
onDataChangeMethodID:"9D452621-B7E1-4F7A-9E60-883AEC27C7E3",
onFocusGainedMethodID:"C68F20D5-1616-4BCD-9F41-BDEB57231F73",
tabSeq:1,
typeid:4,
uuid:"94932773-AB8E-4AEA-B933-F530F23E8A03",
valuelistID:"7171223D-A518-458A-B051-215CF16CBCBE"
},
{
dataProviderID:"user_name",
displayType:2,
location:"142,91",
name:"user_name",
onActionMethodID:"-1",
onDataChangeMethodID:"D3234A60-6684-4BD8-98F7-70CAA325B738",
onFocusLostMethodID:"DE863A38-BA1D-428F-BFD5-60BC9DD30DA9",
size:"140,20",
tabSeq:2,
text:"User Name",
typeid:4,
uuid:"95B8F41A-FAE2-4E5B-AAD0-66CA59B27A57",
valuelistID:"542EE01E-3CED-4E90-A652-92EA099A6EDE"
},
{
height:237,
partType:5,
typeid:19,
uuid:"C8957F46-1AC6-40EF-BAB9-84B86D525ED5"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"last_login",
editable:false,
location:"117,35",
name:"last_login",
size:"140,20",
tabSeq:-2,
text:"Last Login",
transparent:true,
typeid:4,
uuid:"CB00ED87-3D74-4F8C-B134-FB51CE1B085B"
},
{
dataProviderID:"userPassword",
displayType:6,
location:"142,150",
name:"userPass",
onDataChangeMethodID:"9686EB82-2A0D-42CC-AB0E-1EC621C7E2AA",
size:"140,20",
tabSeq:4,
typeid:4,
uuid:"E3D8D4B7-C3EE-4789-83E3-21DD0741325C"
},
{
horizontalAlignment:4,
labelFor:"name_first",
location:"5,121",
name:"name_first_label",
size:"132,20",
text:"i18n:sts.label.description.colon",
transparent:true,
typeid:7,
uuid:"E9633899-3B5A-4484-8A95-6B7456FC277A"
},
{
dataProviderID:"name_first",
location:"142,121",
name:"name_first",
size:"140,20",
tabSeq:3,
text:"Name First",
typeid:4,
uuid:"EE993F01-E42F-4D30-ADE0-D052859D42FA"
},
{
dataProviderID:"passwordConfirm",
displayType:6,
location:"142,175",
name:"userPassConf",
onDataChangeMethodID:"-1",
size:"140,20",
tabSeq:5,
typeid:4,
uuid:"F682705A-5366-4A63-99C4-AACA656A8E92"
}
],
name:"logon_detail",
onDeleteRecordCmdMethodID:"23DF4B40-3BF9-4277-A9FB-EEDA7CBCD90C",
onHideMethodID:"9092BEE4-6A59-4864-9381-1F83F7F5D12F",
onRecordSelectionMethodID:"3EE95260-0591-4998-94B5-17D7815153C6",
onShowMethodID:"06E3910A-C5EC-4843-9923-EBED24550D19",
size:"380,237",
styleName:"sts_two",
transparent:true,
typeid:3,
uuid:"BB1B2F7E-C46C-4524-95B5-1F69B94CF939"