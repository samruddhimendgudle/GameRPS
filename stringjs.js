let city="solapur";
let username="sam"
let sen ="my name is " + username + " and i live in " + city;
//strings are immutable we cant change the value of string but we can reassign it
//string functionsa
let str="hello world";
console.log(str.length);
console.log(str.toUpperCase()); 
console.log(str.toLowerCase());
console.log(str.includes("world")); //true
console.log(str.indexOf("o")); //4
console.log(str.slice(0,-1));    //substring is similar to slice but it doesnt accept negative index
console.log(str.substring(0,5)); //hello //substring is similar to slice but it doesnt accept negative index
console.log(str.replace("world","javascript")); //hello javascript  
 console.log(str.trim()); //hello world  //removes whitespace from both ends of the string
 console.log(str.split(" ")); //["hello","world"] //splits the string into an array of substrings based on the separator
