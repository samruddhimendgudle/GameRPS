console.log("A")
setTimeout(()=>{
    console.log("B")
},4000)
console.log("C")


const promise=fetch("https://jsonplaceholder.typicode.com/posts")
// promise.then((response)=>{
//     return response.json()      
// })

promise.then((data)=>data.json())
.then((actualdata)=>{
    console.log(actualdata)
}).catch((error)=>{
    console.log(error)
})