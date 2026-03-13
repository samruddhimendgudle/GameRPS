let cities=["pune","Mumbai","Banglore","Chennai","Hyderabad","Kolkata","Lucknow","Indore","Bhopal","Jaipur"];  
let[a,b]=cities
// console.log(a);
// console.log(b);

let[c,d,...other]=cities
console.log(c);
console.log(d);
console.log(other);

let person={
    name:"John",
    age:30,
    city:"New York",
    
}
let{name,age}=person
console.log(name);
console.log(age);

let cities1=["pune","Mumbai","nashik"];
let cities2=["Banglore","Chennai","Hyderabad"];

//ways to concat arrays
let allCities=cities1+cities2
let allCities1=[...cities1,...cities2] //spread operator
let allCities2=cities1.concat(cities2)
console.log(allCities);