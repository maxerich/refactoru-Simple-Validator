var number = prompt("Enter phone number with dashes. Will not be used for spam!");

if (number.charAt(3)==="-" && number.charAt(7)==="-") {
	alert("Number Valid.");
}
else {
	alert("boom");
}



var bDay = prompt("Enter birthday.");

if (bDay.charAt(2)==="/" && bDay.charAt(5)==="/") {
	alert("Happy Birthday!");
}
else {
	alert("boom");
}


var postalCode = prompt("Enter postal code.");

if (postalCode.length===5 || ( postalCode.charAt(5)==="-" && postalCode.length === 10) ){
	alert("Congrats!");
}
else {
	alert("boom");
}



var state = prompt("Enter state.");
// state.toUpperCase();
if (state.length === 2 && state.toUpperCase() === state) {
	alert("Nice!");
}
else {
	alert("boom");
}



var married = prompt("Are you married?")

if (married === "yes") {
	alert("well done");
}
else if (married === "no") {
	alert("good call");
}
else {
	alert("try again");
}