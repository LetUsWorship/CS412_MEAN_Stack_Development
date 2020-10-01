
//Write a function that accepts two input parameters: a string, and
//a decorator function where it executes the decorator function on
//the passed string and return the result.

const pass_decorator = (val,fxn) => fxn(val);

//pass string ‘supercalifragilisticexpialidocious’ and lambda fxn
//that returns an array of input string broken on char 'c'.

const decoratedvalue = pass_decorator(
    'supercalifragilisticexpialidocious',
    (val)=> val.split(/(?=c)/g)
)

console.log(decoratedvalue)

//pass the same string as above and replace all 'a' with 'A'.
//Return an object that contains the original string, the modified
//string, the total numberof A's in the modified string and the
//overall length of the modified string.

let replace_A = pass_decorator(
    'supercalifragilisticexpialidocious',
    val => {
    let obj = {
        originalString: val,
        modifiedString: val.replace(/a/g, 'A'),
        numberReplaced: (val.match(/a/g) || []).length,
        length: val.length
    };
    return obj;
    }
);

console.table(replace_A);

module.exports = {pass_decorator,decoratedvalue,replace_A};
