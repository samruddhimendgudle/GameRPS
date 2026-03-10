// let nums=[1,2,3,4,5,6,7,8,9,10];
// const n1=nums.filter((e1)=>{
//     return e1%2==0
// })
// console.log(n1);

let nums=[22,21,56,76,43,1,9];
const n1=nums.filter((e1)=>{
    return e1%2!=0
})
console.log(n1);

const stu=[{name:"John",marks:35},{name:"Alice",marks:50},{name:"Bob",marks:40}];
const stu1=stu.filter((e1)=>{
    return e1.marks>=40
})
console.log(stu1)

const words=["cat","god","swarali","samruddhi","neha","maske"]
const w1=words.filter((e1)=>{
    
        return e1.length<5
    
})
console.log(w1)