
//Write a function that takes a string as its input and returns
//a new string that contains all of the letters in the original
//string, but in reverse alphabetical order. Ignore punctuation
//and numbers.

const reverse_alph = str => [...str].sort().reverse().join('');

//Print results using sample input.

console.log(`Alphabetical order is: ${reverse_alph("supercalifragilisticexpialidocious")}`);

module.exports = {reverse_alph};