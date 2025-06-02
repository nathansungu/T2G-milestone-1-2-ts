//milestone 2
//challenge 1: sum positive
var sumOfPositives = function (n) {
    var sum = 0;
    for (var i = 0; i < n.length; i++) {
        n[i] > 0 ? sum += n[i] : sum;
    }
    return sum;
};
console.log(sumOfPositives([2, -2, 3]));
