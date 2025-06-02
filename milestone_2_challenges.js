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
console.log(findmax([2, 5, 2, 9, 1]));
