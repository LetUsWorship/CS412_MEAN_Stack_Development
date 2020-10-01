
//Write a function that takes as its input a formatted string
//and determine the operator(+,-,*,/,^) embedded in the string
//and returns a function to implement the input operator that
//returns the result.

const add = str => Number(str.charAt(0)) + Number(str.charAt(2));
const sub = str => str.charAt(0) - str.charAt(2);
const mult = str => str.charAt(0) * str.charAt(2);
const div = str => str.charAt(0) / str.charAt(2);
const exp = str => str.charAt(0) ** str.charAt(2);

let evaluate = str => {
    if(str.charAt(1) === '+'){
        return add;
    } else if(str.charAt(1) === '-'){
        return sub;
    } else if(str.charAt(1) === '*'){
        return mult;
    } else if(str.charAt(1) === '/'){
        return div;
    } else if(str.charAt(1) === '^'){
        return exp;
    }
}

//Print results using some samples
const expression = '8-3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)

const expr = '8^2';
let oprt = evaluate(expr);
console.log(`${expr} = ${oprt(expr)}`)

module.exports = {evaluate,add,sub,mult,div,exp}