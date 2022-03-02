var add = function(number1, number2){
	return number1 + number2;
}
var subtract = function(number1, number2){
    return number1 - number2;
}
var multiply = function(number1,number2){
    return number1 * number2;
}
var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter a second Number: "));
var result = add(number1,number2);
alert(result)