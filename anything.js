// Callbacks.
// in JS functions are first class objects,


// var x = {}

// $('.btn').click(()=>{
// 	console.log("user clicked")
// })

// $('.btn').click(function(){
// 	console.log("user clicked")
// })




// var userClick = function{
// 	console.log("user clicked")
// }

// $('.btn').click(userClick);

// // all the same things above

// $.getJSON(weatherUrl,function(weatherData){
// 	console.log(weatherData);
// })

// // somewhere in jquery this is...
// var $ = {};
// $.click = function(somefunctionToRunLater){
// 	somefunctionToRunLater();
// }



// function a(num){
// 	var functionToReturn = function(num2){
// 		console.log(num+num2)
// 	}
// 	return functionToReturn
// }

// a(2)(3)

// function print(thingToPrint){
// 	console.log(thingToPrint);
// }

// function b(number){
// 	let localNum = number * number;
// 	print(localNum);
// }
// b(2)

// function c(theString){
// 	let localString = `${theString} was passed to function c`;
// 	print(localString);
// }
// c("woah, too early for this rob!!!")