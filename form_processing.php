<?php 
$colorName = $_POST['colorName'];
$colorHue = $_POST['colorHue'];
$hexValue = $_POST['hexValue'];
$file_name = 'data_file.txt';
$file_handle = file($file_name);
foreach ($file_handle as $key) {
	if (stripos($key, $colorName)) {
		echo "<h1>That Color is already Listed</h1>";
		break;
	}else{
		echo "This seems to be a unique color";
	}
}
 ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<meta charset="utf-8">	
	<title></title>
	<style>
		div{
			width: 125px;
			height: 125px;
			margin-left:10px;
			margin-top:10px;
			line-height: 125px;
			font-size: 140%;
			text-align: center;
			color: #fff;
			display: inline-block;
		}
		figure{
			display: inline-block;
		}
		figcaption{
			font-family:lato;
			color:#2A3239;
			font-size: 1em;
		}

	</style>
</head>
<body>
<h1>This is my attempt at greatness</h1>
 <?php 
// $display_div=<<<EOD
//<figure class='colorFig'>
//	<div style="background: {$hexValue}">{$hexValue}</div>
//</figure>
//EOD;
// echo $display_div;
 foreach ($file_handle as $key) {
 	echo gettype($key) . "<br>";
}

  ?>
  <h3>This is another attempt at greatenss</h3>
</body>
</html>

