// promise resolve reject 

// const promise  = new Promise((resolve,reject)=>{
//     var success = false 
//     setTimeout(()=>{
//         success = true  
//     },3000)
//     if(success){
//         resolve("Api fetched status:200 it's okay")
//     }else{
//         reject("api not fetched internal server error : 500 " )
//     }
//     }
// )

// promise
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//  console.warn("api having issue" + err )
// })

// var Api = ()=>{
//    return  fetch("https://jsonplaceholder.typicode.com/posts")
  
// }  
// Api()
// .then((res)=>{
//     console.log(res.json())
// })
// .catch((err)=>{
//     console.warn(err)
// })
async function getData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await  response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  getData()