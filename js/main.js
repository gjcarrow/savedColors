// Assign variable to form inputs so I can reference their values later
// Make sure we've got a handle on the form with an if statemetnt
var	colorName = document.colorsInputForm["colorName"],
	colorHue = document.colorsInputForm["colorHue"],
	hexValue = document.colorsInputForm["hexValue"],
	mainForm = document.getElementById('colorsInputForm'),
	colorDivsWrapper = document.getElementById('colorDivsWrapper'),
	colorDivsArray = colorDivsWrapper.getElementsByTagName('div'),
	duplicateMessageDisplay = document.getElementById('duplicateMessageDisplay').getElementsByTagName('h2')[0],
	errorMessageDisplay = document.getElementsByClassName('errorMessage')[0].getElementsByTagName('p')[0];
// Add the submit listener to the form so we can intercept the default submission action and validate the fields before
// a server request is made.
mainForm.addEventListener('submit',function(evt) { formSubmitted(evt); },false);

function every_callback_function(item,index) {
	console.log(item.textContent.indexOf(colorName.value));
	return item.textContent.indexOf(colorName.value)<0 || item.textContent.indexOf(hexValue.value)<0;
}
//funciton to check the values entered by user:
function checkUserValues() {
	if (!colorName.value || !colorHue.value || !hexValue.value) {
		return false;
		}else{
			return true;
		}
	}
//Function to run when the form is submitted:
function formSubmitted (evt) {
	// Since the colorDivsArray is actually a node list, and not an actual array, we need to convert it to an array so that we have access to the methods
	var arrayedArray = Array.prototype.slice.call(colorDivsArray);
	//Check that the color entered isn't a duplicate
	var unique_entry = arrayedArray.every(every_callback_function);

	var validValues = checkUserValues();

	//If there is a problem with user value entered prevent submission
	if(!validValues){
		evt.preventDefault();
		alert("One or more of the form sections are blank!");
		errorMessageDisplay.style.display="inline";
		return false;
	}

	//If it is a duplicate, prevent form submission to back end, return false
	if(!unique_entry){
		evt.preventDefault();
		duplicateMessageDisplay.style.display = "block";
		colorName.value = "";
		colorHue.value = "";
		hexValue.value = "";
		colorName.focus();
		console.log("Found a repeat");
		return false;
	}
}

