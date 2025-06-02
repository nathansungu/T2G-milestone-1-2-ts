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
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
];
console.log(findWinner(candidates));
