"use strict";

let str = "hello world";

function removeDuplicateChars(input) {
    let result = "";
   
    for (let i = 0; i < input.length; i++) {
        
        if (result.indexOf(input[i]) === -1) {
            result += input[i];
        }
    }
    return result;
}

console.log(removeDuplicateChars("banana"))
console.log(removeDuplicateChars("hello world")); 
let result = removeDuplicateChars(str);
console.log(result); 
