dataSource:"db:/stsservoy/jobs",
encapsulation:0,
extendsID:"B437E60E-3696-4619-BACC-D42AE6A64D83",
items:[
{
anchors:11,
labelFor:"customer_number",
location:"77,0",
name:"customer_number_label",
size:"55,20",
text:"Customer",
transparent:true,
typeid:7,
uuid:"06EBC9B9-03C6-496D-A966-FD87F094AE2A"
},
{
labelFor:"job_number",
location:"0,0",
name:"job_number_label",
size:"78,20",
text:"Job Number",
transparent:true,
typeid:7,
uuid:"35EA5D57-9015-4FE4-B47B-C85022E86990"
},
{
dataProviderID:"job_number",
location:"0,20",
name:"job_number",
size:"78,20",
text:"Job Number",
typeid:4,
uuid:"B1AF6551-6408-4185-8B46-FEE206BBB87B"
},
{
anchors:11,
dataProviderID:"sts_job_to_customer.customer_number",
location:"77,20",
name:"customer_number",
size:"55,20",
text:"Customer Number",
typeid:4,
uuid:"CCBF52D5-5F8F-4376-9CA0-EE714357A1BD"
},
{
extendsID:"309DAEC2-F9E3-4DBF-8718-0884B5FE1FBF",
height:307,
typeid:19,
uuid:"E4890FF4-A10F-4BA1-A3F3-9A8E4F7301A3"
}
],
name:"jobs_lst",
navigatorID:"-1",
onRecordSelectionMethodID:"91A975E0-20A3-43A6-AC2F-C0F0FF970E1E",
scrollbars:32,
size:"137,350",
styleName:"sts_one",
typeid:3,
uuid:"628FBF67-6BF2-4701-A2E2-ED86DA4F447B",
view:3