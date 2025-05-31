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
    age >= 18 ? response = "\"".concat(name, "\" is old enough to drive.") : response = "\"".concat(name, "\" is not old enough to drive yet");
    return response;
};
//largest number
var findlargest = function (a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
};
//BMI Calculator
var calculateBMI = function (weight, height) {
    var BMI = weight / (height * height);
    var category;
    if (BMI < 18.5) {
        category = "Underweight";
    }
    else if (BMI < 24.9) {
        category = "Normal weight";
    }
    else if (BMI < 29.9) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }
    return "Your BMI is ".concat(BMI.toFixed(2), " - ").concat(category);
};
//greetings based on time
var greetUser = function (name, hour) {
    if (hour > 5 && hour < 11) {
        return "Good morning, ".concat(name, "!");
    }
    else if (hour > 11 && hour < 17) {
        return "Good afternoon, ".concat(name, "!");
    }
    else if (hour > 17 && hour < 21) {
        return "Good evening, ".concat(name, "!");
    }
    else {
        return "Good night, ".concat(name, "!");
    }
};
console.log(greetUser("John", 11.5));
