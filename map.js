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


// const items=[{price:10,quantity:2},{price:20,quantity:3},{price:15,quantity:4}];
// const total=items.map((e1)=>{
//     return e1.price*e1.quantity
// })
// console.log(total);

// const items=[{price:10,quantity:2},{price:5,quantity:5},{price:8,quantity:3}];
// const total=items.map((e1)=>{
//     return e1.price*e1.quantity
// })
// console.log(total);


const stu=[{name:"John",marks:35},{name:"Alice",marks:50},{name:"Bob",marks:40}];
const stu1=stu.filter((e1)=>{
    return e1.marks>=40
})
console.log(stu1)

//how work
let home=["hello","world","javascript"]
const newa=home.map((e1)=>{
    return e1[0].toUpperCase()+e1.substring(1,e1.length);
})
console.log(newa)