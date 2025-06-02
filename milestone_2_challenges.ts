//milestone 2
//challenge 1: sum positive
const sumOfPositives = (n: number[]): number => {
  let sum: number = 0;
  for (let i: number = 0; i < n.length; i++) {
    n[i] > 0 ? (sum += n[i]) : sum;
  }
  return sum;
};

//find maximum value
const findmax = (n: number[]): number => {
  let maxNumber: number = n[0];
  for (let i = 1; i < n.length; i++) {
    if (n[i] > maxNumber) {
      maxNumber = n[i];
    }
  }
  return maxNumber;
};

//ellection winner
type Candidate = {
  name: string;
  votes: number;
};
const findWinner = (n:Candidate[]):Candidate => {
  
  let winner = n[0];
  for (let i = 1; i < n.length; i++) {
    if (n[i].votes > winner.votes) {
      winner = n[i];
    }
  }
  return winner;
};
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];

console.log(findWinner(candidates))
