dataSource:"db:/stsservoy/customers",
encapsulation:0,
extendsID:"-1",
items:[
{
location:"276,477",
name:"cancelButton",
onActionMethodID:"601D6CBF-6388-4BAA-977C-B2F99A0803E4",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"Cancel",
typeid:7,
uuid:"2BE62140-275D-49A3-B5C5-10FF7275F84E",
visible:false
},
{
location:"150,477",
name:"editButton",
onActionMethodID:"294916D7-4D48-4FBF-AC0B-5FD36F6396BF",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"Edit",
typeid:7,
uuid:"31AAEDB6-3C2F-4598-BA4B-3A05EE1454DC"
},
{
location:"66,449",
name:"delButton",
onActionMethodID:"802350B1-D095-4D37-BC3A-4E412FDAFEB1",
onDoubleClickMethodID:"-1",
onRenderMethodID:"4E55E3A9-A2A1-4E0F-9334-3CCBA4C0849A",
onRightClickMethodID:"-1",
size:"254,20",
text:"Delete",
typeid:7,
uuid:"339FE5AE-7C6A-4E18-9851-0CF115FD2845"
},
{
location:"25,477",
name:"saveButton",
onActionMethodID:"A1A1A785-417C-4E54-8753-674C58E45BA9",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
text:"SAVE",
typeid:7,
uuid:"7ADDC6A0-99E7-443F-BA91-20AA078E4BF8",
visible:false
},
{
items:[
{
containsFormID:"54F91E55-F0E6-4523-9747-4113D51BF3AE",
location:"0,58",
name:"Customer",
relationName:"sts_customer_container",
text:"Customer",
typeid:15,
uuid:"11BADAB5-CA04-42E9-88CA-EE8949BBD084"
},
{
containsFormID:"34C436F3-F50C-4094-B2E6-E79C008D7264",
location:"248,54",
name:"customer_addresses",
relationName:"sts_cust_to_address",
text:"Addresses",
typeid:15,
uuid:"8F5B3453-754E-473A-8951-B9EFC1BA348B"
},
{
containsFormID:"09ED1A58-743D-40D0-90E6-5C82E76BEC57",
location:"158,57",
name:"Financial",
relationName:"sts_customer_container",
text:"Accounting",
typeid:15,
uuid:"9D3ABF33-17F0-45B8-A803-D7FAAD3922E6"
},
{
containsFormID:"9BB8EB73-4C67-4825-BC86-4970E2AAC729",
location:"80,58",
name:"Barcode",
relationName:"sts_customer_container",
text:"Barcode",
typeid:15,
uuid:"B8CD76DC-AFB4-443B-8368-8788536B356D"
}
],
location:"0,28",
name:"tabs",
printable:false,
size:"602,416",
typeid:16,
uuid:"825B3BC0-A018-4686-AC06-CA32A69A5E2C"
},
{
height:507,
partType:5,
typeid:19,
uuid:"9E729FC3-BD7A-420F-9D7D-E02E5D24964B"
},
{
location:"5,5",
size:"99,20",
text:"CUSTOMER: ",
transparent:true,
typeid:7,
uuid:"A0EE472C-44D3-4BF1-8513-86C4DF52FCCC"
},
{
dataProviderID:"name",
location:"109,5",
size:"294,20",
text:"type",
transparent:true,
typeid:7,
uuid:"CE2D0310-BC47-40AE-94A2-0AC468B2D257"
}
],
name:"customer_specs",
navigatorID:"-1",
onLoadMethodID:"-1",
onShowMethodID:"1FC02317-CBF4-4ED9-A5EF-EF22CD4EB0E3",
scrollbars:36,
size:"604,479",
styleName:"sts_one",
typeid:3,
uuid:"EE9D7F11-257C-4193-ADC9-803B65C4698D"