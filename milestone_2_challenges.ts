//milestone 2
//challenge 1: sum positive
const sumOfPositives =(n:number[]):number=>{
    let sum:number=0;
    for(let i:number=0; i<n.length; i++ ){
        n[i]>0 ?sum+=n[i]:sum;
    }
    return sum
}

console.log(sumOfPositives([2,-2,3]))