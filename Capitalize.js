// function capitalize(str1){
//     return str1[0].toUpperCase()+str1.substring(1,str1.length);
// }

// let str1 = "hello";
// console.log(capitalize(str1));



function capitalize(str1){
    let words = str1.split(" ");
    for(let i=0;i<words.length;i++){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1,words[i].length);
    }
  str1=words.join(" ");
  return str1;
}

let str1 = "hello world";
console.log(capitalize(str1));