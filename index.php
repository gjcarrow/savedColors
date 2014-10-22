<?php 
$file_name = "color_data.txt";
$new_hex = "#ffffff";
if (isset($_POST['formSubmitButton'])) {
	$color_name = $_POST['colorName'];
	$hue_name = $_POST['colorHue'];
	$hex_value = $_POST['hexValue'];

$handler = file_get_contents($file_name);
$new_data = $color_name . ", " . $hue_name . ", " . $hex_value . "\n";
file_put_contents($file_name, $new_data, FILE_APPEND | LOCK_EX);
}
 ?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
	<meta charset="utf-8">	
	<title>Colors</title>
	<link rel="stylesheet" href="css/styles.css">	
	<style>
		div.userDefinedDiv{
			width: 175px;
			height: 125px;
			margin-left:10px;
			text-align: center;
			color: #fff;
			display: inline-block;
			border:1px solid <?php echo $new_hex; ?>;
		}
	</style>
</head>
<body>
<h1>Colors and their Hex Values</h1>
<span id="duplicateMessageDisplay"><h2>That Color should already be listed. Please enter a different color</h2></span>
	<form name="colorsInputForm" id="colorsInputForm" action="index.php" method="POST" >
		<ul>
			<li>
				<span class="errorMessage"><p>Please Be Sure All Fields Are Filled Out</p></span>
			</li>
			<li>
				<label for="colorName">Color Name: </label>
				<input type="text" name="colorName" id="colorName">
			</li>
			<li>
				<label for="colorHue">Color Hue: </label>
				<input type="text" name="colorHue" id="colorHue">
			</li>
			<li>
				<label for="hexValue">Hex Value: </label>
				<input type="text" name="hexValue" id="hexValue">
			</li>
			<li>
				<input type="submit" name="formSubmitButton" id="formSubmitButton" value="Submit">
				<!-- <button id="formSubmitButton">Submit</button> -->
			</li>
		</ul>
	</form>
	<!-- Wrapper for the divs that will be created from user input values -->
	<div id="colorDivsWrapper">
		<?php 

		$fileHandler=file($file_name);
foreach ($fileHandler as $singleFile) {
	$y = explode(", ", $singleFile);
$madeDiv=<<<END
<div class="userDefinedDiv" style="background:$y[2];">
$y[1] : $y[0]
<hr>
$y[2]
</div>
END;

echo $madeDiv;
}

		 ?>
	</div>
<?php 
	#$colors_file = 'data_file.txt';
	#$file_contents = file($colors_file);

#	foreach ($file_contents as $value) {
#	}
#		if (strpos($value, "Yellow")) {
#			echo "I found yellow in {$value}";
#		}
?>
	<script src="js/main.js"></script>
	</body>
</html>
