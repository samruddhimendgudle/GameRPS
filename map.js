//map-to performsome common operation on each element of the array and return a new array with the result of the operation performed on each element
// let cities=["Delhi","Mumbai","Chennai","Kolkata"];
// cities.map((e1=>{
//     //console.log(city.toUpperCase());
//     return e1.toUpperCase();
// }))
//console.log(cities); //original array is not changed    


let cities=["Delhi","Mumbai","Chennai","Kolkata"];
const modified=cities.map((e1=>{
    //console.log(city.toUpperCase());
    return e1.toUpperCase();
}))
console.log(modified); 