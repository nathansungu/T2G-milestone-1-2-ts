//sum of two numbers
var sum = function (a, b) { return a + b; };
//convert minutes to seconds
var convert = function (minutes) { return minutes * 60; };
// perimeter of a rectangle
var perimeter = function (length, width) { return 2 * (length + width); };
//check Negative
var isNegative = function (num) { return num < 0 ? true : false; };
//check if one can drive
var canDrive = function (name, age) {
    var response;
    age >= 18 ? response = "\"".concat(name, "\", is old enough to drive.") : response = "\"".concat(name, "\", is not old enough to drive yet");
    return response;
};
console.log(canDrive("marry", 2)); // Output: 15
