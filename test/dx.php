<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>


<?php


$myfile = fopen("shuju.txt", "a") or die("Unable to open file!");

$txt = "Bill Gates\ ";
fwrite($myfile, $txt);

$txt = "Steve Jobs\n ";
fwrite($myfile, $txt);

fclose($myfile);
?>


</body>
</html>