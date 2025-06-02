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
const findWinner = (n: Candidate[]): Candidate => {
  let winner = n[0];
  for (let i = 1; i < n.length; i++) {
    if (n[i].votes > winner.votes) {
      winner = n[i];
    }
  }
  return winner;
};

//longest word
const findLongestWord = (n: string[]): string => {
  let longestWord: string = n[0];
  for (let i = 1; i < n.length; i++) {
    if (n[i].length > longestWord.length) {
      longestWord = n[i];
    }
  }
  return longestWord;
};

//count properties
//define object

const countProperties = (n: {}): number => {
  let count: number = 0;
  for (let key in n) {
    if (n.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
};

//filter by length
const filterByLength = (arr: string[], numbers: number): string[] => {
  let newarray: string[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i].length >= numbers) {
      newarray.push(arr[i]);
    }
  }
  return newarray;
};

//sum of even Numbers
const sumEvenNumber = (arr: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
};

//difference btn even odd sum
const differenceEvenOdd = (array: number[]): number => {
  let oddSum: number = 0;
  let evenSum: number = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 === 0 ? (evenSum += array[i]) : (oddSum += array[i]);
  }
  return evenSum - oddSum;
};

//count truthy
//define object type

const countTruthy = (object: Record<string, unknown>): number => {
  let count: number = 0;
  for (let key in object) {
    if (object[key]) {
      count += 1;
    }
  }
  return count;
};

//average of numbers
const average = (arry: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i < arry.length; i++) {
    sum += arry[i];
  }
  return sum / arry.length;
};

//linear search
const linearSearch = (array: number[], value: number): number => {
  let index: number = -1;
  for (let i:number = 0; i < array.length; i++) {
    if (value === array[i]) {
      index = i;
    }
  }
  return index;
};

//Reverse linear search
const reverseLinearSearch = (array: number[], value: number): number => {
  let index: number = -1;
  for (let i:number = array.length-1; i >0; i--) {
    if (value === array[i]) {
      index = i;
    }
  }
  return index;
};

//line search all indices

const linearSearchAllIndices = (array: number[], value: number): number[] => {
  let index: number[] = [];
  for (let i:number = 0; i < array.length; i++) {
    if (value === array[i]) {
      index.push(i);
    }
  }
  return index;
};

//count occoureences 
// Count occurrences
const countOccurrences = (array: string[]): { [key: string]: number } => {
  const countobject: { [key: string]: number } = {};

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (countobject[item]) {
      countobject[item] += 1;
    } else {
      countobject[item] = 1;
    }
  }
  return countobject;
};


// Remove duplicates
const removeDuplicates = (array: string[]): string[] => {
  const noDuplicate: string[] = [];
  for (let i = 0; i < array.length; i++) {
    if (!noDuplicate.includes(array[i])) {
      noDuplicate.push(array[i]);
    }
  }
  return noDuplicate;
};





