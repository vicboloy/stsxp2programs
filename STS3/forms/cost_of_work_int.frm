dataSource:"db:/stsservoy/cowcodes",
extendsID:"347AFD5C-2B9F-44BF-972D-2C1417ED3623",
items:[
{
extendsID:"43E4EE37-5309-41D1-BE3B-960FC530E863",
tabSeq:-2,
text:"i18n:sts.btn.add",
typeid:7,
uuid:"2ACE9DC8-9D28-49E5-BA48-C749583D71D1",
visible:false
},
{
extendsID:"DF2BDEB7-D8A1-4FAE-B61C-DA75269303EE",
tabSeq:-2,
text:"i18n:sts.btn.add",
typeid:7,
uuid:"2F4C1977-5156-4D56-A0DD-1F7BAD1C8442"
},
{
extendsID:"5B837E51-7891-4B7F-99C6-5D1A7F48B816",
tabSeq:-2,
text:"i18n:sts.btn.save",
typeid:7,
uuid:"622667A7-09F9-464A-81C0-0E287B414340"
},
{
horizontalAlignment:4,
location:"256,109",
size:"80,20",
text:"i18n:sts.label.category.uom.dollars",
transparent:true,
typeid:7,
uuid:"660BDFA4-3A11-4D48-85A8-6E6005AD0A71"
},
{
dataProviderID:"cow_code",
displayType:10,
format:"|U[10]",
location:"346,19",
onDataChangeMethodID:"58754A69-D713-4AA4-827C-281BB12A3884",
placeholderText:"i18n:sts.txt.required.entry",
size:"148,20",
tabSeq:1,
typeid:4,
uuid:"6EF0012C-6800-4587-B769-3FD3BE388F9D",
valuelistID:"0D1B491C-1470-410B-A552-357F7EC773A7"
},
{
dataProviderID:"cow_description",
format:"|#(40)",
location:"346,49",
size:"198,20",
tabSeq:2,
typeid:4,
uuid:"74ED92ED-EE74-40B3-8AEE-D86BBA83C1B6"
},
{
horizontalAlignment:4,
location:"199,19",
size:"137,20",
text:"i18n:sts.label.category.code",
transparent:true,
typeid:7,
uuid:"85BD050C-6163-472D-B531-8F0D4D9F72BA"
},
{
dataProviderID:"uom_code",
displayType:2,
editable:false,
format:"|#(15)",
location:"346,79",
size:"91,20",
tabSeq:3,
typeid:4,
uuid:"87A273B5-7A8B-421F-B68B-FFE1554EB4D6",
valuelistID:"0D5F1C3A-6AF5-42C8-9E59-158AC0E0F18A"
},
{
extendsID:"0FFBB695-D6F3-479A-8E51-24945AE31550",
tabSeq:-2,
text:"i18n:sts.btn.delete",
typeid:7,
uuid:"9F770ADA-0979-4DEB-B08C-E31F6528B3EB",
visible:false
},
{
extendsID:"76588FDB-3793-4C37-9D41-610B540A9DAB",
items:[
{
containsFormID:"452DA204-A8CB-4AAB-A164-0C5A6C6F7A44",
location:"5,60",
relationName:"sts_cowcodes",
text:"cost_of_work_shortlist",
typeid:15,
uuid:"67186D15-375D-409D-A58B-9891501997FE"
}
],
tabSeq:-2,
typeid:16,
uuid:"A75743F9-970B-45AD-8A25-D27477C57637"
},
{
extendsID:"D5DC0A5D-DB9E-4B9A-82C7-8C17F0C7D009",
items:[
{
containsFormID:"1F22433C-90A8-45EB-8141-35F4174CCDA0",
location:"158,174",
relationName:"sts_cowcodes",
text:"cost_of_work_longlist",
typeid:15,
uuid:"14D8D5BF-61A0-4918-AE70-6F6C2A3A424C"
}
],
tabSeq:5,
typeid:16,
uuid:"ADB97987-9D3C-4B19-901B-B86DF85F7974"
},
{
extendsID:"693FAE74-C9FB-4E2B-9B87-5719ACCCE461",
tabSeq:-2,
text:"i18n:sts.btn.edit",
typeid:7,
uuid:"BC39469C-CA19-4204-8544-6573C9661B13",
visible:false
},
{
horizontalAlignment:4,
location:"167,49",
size:"169,20",
text:"i18n:sts.label.category.code.description",
transparent:true,
typeid:7,
uuid:"C51D6043-6FA4-4B72-9A03-B569285789A8"
},
{
horizontalAlignment:4,
location:"235,79",
size:"101,20",
text:"i18n:sts.label.category.uom",
transparent:true,
typeid:7,
uuid:"C80FA6A5-6C57-4954-8251-1A7E7CF9D2D9"
},
{
extendsID:"29523F91-944D-4228-AEC7-A215578C1305",
height:478,
typeid:19,
uuid:"DCBBDDC0-DAD3-4BAB-8FF3-CD73DC5665BE"
},
{
dataProviderID:"uom_dollar",
format:"#.00",
location:"346,109",
size:"72,20",
tabSeq:4,
typeid:4,
uuid:"DE90F588-F120-456A-96AB-2D0664D7193C"
},
{
extendsID:"7B1FDBF1-5F85-4AEA-A0A0-FD63AC17DD3A",
tabSeq:-2,
text:"i18n:sts.btn.cancel",
typeid:7,
uuid:"F900E236-ABFA-4013-828A-3992AFFE15D7"
}
],
name:"cost_of_work_int",
onShowMethodID:"5B811C1C-FC56-43B5-84FB-ACA37A214F7E",
scrollbars:4,
size:"653,478",
styleName:"sts_one",
transparent:false,
typeid:3,
uuid:"B7D0937E-A7E4-49B3-BB8E-35855F420FD6"