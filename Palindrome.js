const checkPalindrome = (string)=>{
    const len = string.length;

    for(let i=0; i<len/2; i++){
        if(string[i] !== string[len - 1 -i]){
            return 'It is not a Plaindrome'
        }
    }
    return 'It is a Palindrome'
}

const prompt = require("prompt-sync")();
var string= prompt("Enter You String ");

console.log(checkPalindrome(string));