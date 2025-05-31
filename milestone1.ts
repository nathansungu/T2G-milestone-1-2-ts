//sum of two numbers
const sum = (a: number, b:number):number=> a+b;

//convert minutes to seconds
 const convert =(minutes: number):number=> minutes * 60;
 
// perimeter of a rectangle
const perimeter = (length:number, width:number):number => 2 * (length + width);

//check Negative
 const isNegative =(num: number):boolean => num < 0?true:false;

//check if one can drive

const canDrive = (name:string, age:number):string => {
    let response: string;
    age>=18 ? response =`"${name}" is old enough to drive.` : response =`"${name}" is not old enough to drive yet`
    return response;
}

//largest number
const findlargest = (a:number, b:number, c:number):number =>{
    
    if(a>b && a>c){
        return a;
    } else if(b>a && b>c){
        return b;
    }else {
        return c;
    }
}