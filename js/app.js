	var myObject = {
		name : "James",
		age	: 34,
		employed : false,
		job : "Software Developer",
		colorsInputForm : document.forms[0],
		formName : colorsInputForm.colorName,
		formHue : colorsInputForm.colorHue,
		formHexValue : colorsInputForm.hexValue,
		addEvent : (function(window,document){
	if(document.attachEvent){
		return function (obj,evt,fn){
			if((obj && !obj.length) || obj===window){
			obj.attachEvent("on"+ evt,function (){ return fn.call(obj);});
			}else if(obj && obj.length){
			// if obj is a collection of elements:
			var len = obj.length;
				for(var i=0;i<len;i++){
                    addEvent(obj[i],evt,fn,capture);

				}
			}
		}; 
	}
	else if (document.addEventListener){
		return function(obj,evt,fn,capture){
			if(!capture)capture=false;
			if((obj && !obj.length) || obj===window){
				alert("This alert is a good thing");  
				obj.addEventListener(evt,fn,capture);
            }else if(obj && obj.length){
// if obj is a list or array of elements
                    var len = obj.length;
                    for(var i=0;i<len;i++){
                    myObject.addEvent(obj[i],evt,fn,capture);
                    }
                                        }
                };
     }
 })(this,document)
}


myObject.addEvent(myObject.colorsInputForm,"submit",function(evt) {evt.preventDefault();formSubmitFunction(e);},false);
function formSubmitFunction (evt) {
	evt.preventDefault();
	console.log(evt.target);
	alert("we made it so far");
	// body...
}
// console.log(formName.value + ", " + formHue.value + ", " + hexValue.value);
// console.log(myObject.name);










 
 
     // Calling the function
	// var box= document.getElementById("outer");
	// var listItems = document.getElementsByTagName('li');

// Note: if the callback function for the event listener requires parameters, you need to enclose it in an anonymous function, like so:
// addEvent(listItems,"click",function(){fadeOut(box,5000)},false);

	// addEvent(listItems,"click",function(){fadeOut(box,5000)},false);

// Function to add an event to an element, including IE  Function #2 end


	
// return myObject;
//var colorsInputForm = document.forms[0];
//var formName = colorsInputForm.colorName;
//var formHue = colorsInputForm.colorHue;
//var formHexValue = colorsInputForm.hexValue;