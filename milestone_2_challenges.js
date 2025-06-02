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
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
