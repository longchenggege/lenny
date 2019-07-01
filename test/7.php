<?php
header('Content-Type: text/html; charset=utf-8');

$accountid = 1;
$msgid = 2;
$mobilephone = 3;
$reportresultinfo = 4;
$repotstate = 5;
$reportime = 6;
$sendresultinfo = 7;

/*$accountid = isset($_POST['AccountID'])?$_POST['AccountID']:0;
$msgid = isset($_POST['MsgID'])?$_POST['MsgID']:0;
$mobilephone = isset($_POST['MobilePhone'])?$_POST['MobilePhone']:0;
$reportresultinfo = isset($_POST['ReportResultInfo'])?$_POST['ReportResultInfo']:0;
$repotstate = isset($_POST['ReportState'])?$_POST['ReportState']:0;
$reportime = isset($_POST['ReportTime'])?$_POST['ReportTime']:0;
$sendresultinfo = isset($_POST['SendResultInfo'])?$_POST['SendResultInfo']:0;*/

$c=mysql_connect("localhost","root","") or die('链接失败');
$co=mysql_select_db("bbb",$c);
mysql_query("set names 'utf-8'");

$sql = "INSERT INTO `sms` (`accountid`,`msgid`,`mobilephone`,`reportresultinfo`,`reportstate`,`reporttime`,`sendresultinfo`) VALUES ('$accountid','$msgid','$mobilephone','$reportresultinfo','$repotstate','$reportime','$sendresultinfo')";
if(mysql_query($sql)){
  echo 1; 
}else{
  echo 0;
}

?>