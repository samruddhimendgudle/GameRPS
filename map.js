//map-to performsome common operation on each element of the array and return a new array with the result of the operation performed on each element
// let cities=["Delhi","Mumbai","Chennai","Kolkata"];
// cities.map((e1=>{
//     //console.log(city.toUpperCase());
//     return e1.toUpperCase();
// }))
//console.log(cities); //original array is not changed    


// let cities=["Delhi","Mumbai","Chennai","Kolkata"];
// const modified=cities.map((e1=>{
//     //console.log(city.toUpperCase());
//     return e1.toUpperCase();
// }))
// console.log(modified); 

// let marks=[32,33,31,35,30];
// const modified=marks.map((e1)=>{
//     return e1+5
// })
// console.log(modified);
// let marks=[1,5,6,9,11];
// const modified=marks.map((e1)=>{
//     return e1*e1
// })
// console.log(marks)
// console.log(modified);

let nums=[1,2,3,4,5,6,7,8,9,10];
const n1=nums.filter((e1)=>{
    return e1%2==0
})
console.log(n1);