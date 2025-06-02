//milestone 2
//challenge 1: sum positive
var sumOfPositives = function (n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        n[i] > 0 ? (sum += n[i]) : sum;
    }
    return sum;
};
//find maximum value
var findmax = function (n) {
    var maxNumber = n[0];
    for (var i = 1; i < n.length; i++) {
        if (n[i] > maxNumber) {
            maxNumber = n[i];
        }
    }
    return maxNumber;
};
var findWinner = function (n) {
    var winner = n[0];
    for (var i = 1; i < n.length; i++) {
        if (n[i].votes > winner.votes) {
            winner = n[i];
        }
    }
    return winner;
};
//longest word
var findLongestWord = function (n) {
    var longestWord = n[0];
    for (var i = 1; i < n.length; i++) {
        if (n[i].length > longestWord.length) {
            longestWord = n[i];
        }
    }
    return longestWord;
};
//count properties
//define object
var countProperties = function (n) {
    var count = 0;
    for (var key in n) {
        if (n.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
};
//filter by length
var filterByLength = function (arr, numbers) {
    var newarray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= numbers) {
            newarray.push(arr[i]);
        }
    }
    return newarray;
};
//sum of even Numbers
var sumEvenNumber = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
};
//difference btn even odd sum
var differenceEvenOdd = function (array) {
    var oddSum = 0;
    var evenSum = 0;
    for (var i = 0; i < array.length; i++) {
        array[i] % 2 === 0 ? (evenSum += array[i]) : (oddSum += array[i]);
    }
    return evenSum - oddSum;
};
//count truthy
//define object type
var countTruthy = function (object) {
    var count = 0;
    for (var key in object) {
        if (object[key]) {
            count += 1;
        }
    }
    return count;
};
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
