customProperties:"methods:{\
onShowMethodID:{\
arguments:null,\
parameters:null\
}\
}",
dataSource:"db:/stsservoy/jobs",
encapsulation:0,
extendsID:"B437E60E-3696-4619-BACC-D42AE6A64D83",
initialSort:"st2_jobs_to_customers.customer_number asc, job_number asc",
items:[
{
anchors:11,
labelFor:"customer_number",
location:"78,0",
name:"customer_number_label",
size:"55,20",
text:"i18n:table.customers.customer_number",
toolTipText:"i18n:table.customers.customer_number",
transparent:true,
typeid:7,
uuid:"06EBC9B9-03C6-496D-A966-FD87F094AE2A"
},
{
labelFor:"job_number",
location:"0,0",
name:"job_number_label",
size:"78,20",
text:"i18n:table.jobs.job_number",
toolTipText:"i18n:table.jobs.job_number",
transparent:true,
typeid:7,
uuid:"35EA5D57-9015-4FE4-B47B-C85022E86990"
},
{
anchors:11,
dataProviderID:"sts_job_to_customer.name",
editable:false,
location:"133,20",
name:"name",
size:"68,20",
typeid:4,
uuid:"53A903D4-F277-47AE-949D-6ED22B945C2C"
},
{
dataProviderID:"job_number",
editable:false,
location:"0,20",
name:"job_number",
size:"78,20",
typeid:4,
uuid:"B1AF6551-6408-4185-8B46-FEE206BBB87B"
},
{
anchors:11,
labelFor:"name",
location:"133,0",
name:"name_label",
size:"68,20",
text:"i18n:table.customers.name",
toolTipText:"i18n:table.customers.name",
transparent:true,
typeid:7,
uuid:"BF98CF5F-8AAA-40F2-A607-FA0ACC153178"
},
{
anchors:11,
dataProviderID:"sts_job_to_customer.customer_number",
editable:false,
location:"78,20",
name:"customer_number",
size:"55,20",
typeid:4,
uuid:"CCBF52D5-5F8F-4376-9CA0-EE714357A1BD"
},
{
extendsID:"309DAEC2-F9E3-4DBF-8718-0884B5FE1FBF",
height:95,
typeid:19,
uuid:"E4890FF4-A10F-4BA1-A3F3-9A8E4F7301A3"
}
],
name:"jobs_lst",
navigatorID:"-1",
onRecordSelectionMethodID:"0D273E9E-ECB7-4362-9492-21A6DACDA13D",
onShowMethodID:"593A9BD1-BB9E-4DAD-A223-4C4CD45106A1",
scrollbars:32,
size:"201,307",
styleName:"sts_one",
typeid:3,
uuid:"628FBF67-6BF2-4701-A2E2-ED86DA4F447B",
view:3