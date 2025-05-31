//sum of two numbers
const sum = (a: number, b: number): number => a + b;

//convert minutes to seconds
const convert = (minutes: number): number => minutes * 60;

// perimeter of a rectangle
const perimeter = (length: number, width: number): number =>
  2 * (length + width);

//check Negative
const isNegative = (num: number): boolean => (num < 0 ? true : false);

//check if one can drive

const canDrive = (name: string, age: number): string => {
  let response: string;
  age >= 18
    ? (response = `"${name}" is old enough to drive.`)
    : (response = `"${name}" is not old enough to drive yet`);
  return response;
};

//largest number
const findlargest = (a: number, b: number, c: number): number => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
};

//BMI Calculator
const calculateBMI = (weight: number, height: number): string => {
  let BMI: number = weight / (height * height);
  let category: string;

  if (BMI < 18.5) {
    category = "Underweight";
  } else if (BMI < 24.9) {
    category = "Normal weight";
  } else if (BMI < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  return `Your BMI is ${BMI.toFixed(2)} - ${category}`;
};

//greetings based on time
const greetUser = (name: string, hour: number): string => {
  if (hour > 5 && hour < 11) {
    return `Good morning, ${name}!`;
  } else if (hour > 11 && hour < 17) {
    return `Good afternoon, ${name}!`;
  } else if (hour > 17 && hour < 21) {
    return `Good evening, ${name}!`;
  } else {
    return `Good night, ${name}!`;
  }
};

//fizzBuzz

const fizzBuzzCheck = (number: number): string => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return `${number}`;
  }
};

//perimeter 2
const perimeterOfShape = (shape: string, number: number): number =>
  shape === "s" ? number * 4 : parseFloat((6.28 * number).toFixed(2));

//sum of even numbers
const sumEvenNumbers = (n: number): number => {
  let sum: number = 0;
  for (let i: number = 0; i < n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};

//multiply by itself
const powerUp = (num: number, times: number): number => {
  let result: number = 1;
  for (let i: number = 0; i < times; i++) {
    result *= num;
  }
  return result;
};
//factorial calculator
const factorial = (n: number): number => {
  let factorial: number = 1;
  for (let i: number = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};

//multiple sum
const sumMultiples = (n: number, divisor: number): number => {
  let sum: number = 0;
  for (let i: number = 0; i < n; i++) {
    if (i % divisor === 0) {
      sum += i;
    }
  }
  return sum;
};

//sum of digits
const sumDigits =(num:number): number =>{
    let sum: number = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}