let str = "hello";

let reversed = str.split("").reverse().join("");

console.log(reversed);
// How it works

// split("") → converts string to array

// "hello" → ["h","e","l","l","o"]

// reverse() → reverses the array

// ["o","l","l","e","h"]

// join("") → converts array back to string

// "olleh"

// Output:

// olleh

//2nd way
 let str2="";
 for(let i=str.length-1;i>=0;i--){
     str2+=str[i]
    
}
console.log(str2);

//  let str2; if you cant assign any value then it will be undefined and when you try to concatenate it with string it will give you undefinedhello but if you assign empty string then it will give you correct output
//  for(let i=str.length-1;i>=0;i--){
//      str2+=str[i]
    
// }
// console.log(str2);

//3rd way
let str3= "hello";
let rev = "";

for (let ch of str3) {
    rev = ch + rev;
}

console.log(rev);