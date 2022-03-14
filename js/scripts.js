// Business Logic

var add = function(number1, number2){
	return number1 + number2;
}
var subtract = function(number1, number2){
    return number1 - number2;
}
var multiply = function(number1,number2){
    return number1 * number2;
}
var divide = function(number1, number2){
    return number1 / number2
}

// User Interface Logic
$(document).ready(function(){
    // Form Add

    $('form#add').submit(function(event){
        var number1 = parseInt($("#add1").val());
        var number2 = parseInt($("#add2").val());
        var result = add(number1,number2);
        $('#add-output').text(result);
        event.preventDefault();
    });

    // Form Subtract
    $('form#subtract').submit(function(event){
        var number1 = parseInt($("#sub1").val());
        var number2 = parseInt($("#sub2").val());
        var result = subtract(number1,number2);
        $('#sub-output').text(result);
        event.preventDefault();
    })
});