// 1 question 
// function Sum(num1,num2){
//     var result = num1 + num2
//     return result
// }
// var add =  Sum(3,4)
// console.log(add)
// es6
// arrow function 
// var Sum = (num1,num2)=>{
//     var result = num1 + num2
//     return result 
// }
// var Sum = (num1,num2)=> result  = num1 + num2
// var add =Sum(3,4)  
// console.log(add)
// problem 2
// var  checkNumber = (num)=>{
//     if(num % 2 === 0 ){ 
//     return true
//     }
//     else{
//         return false
//     }
// }


// var result = checkNumber(6)
// console.log(result)
// es6
// var let const 
// var asghar = 1 reinitlize true 
// var asghar = 2
// let aquib = 1 reinitilaize false
// let aquib =2 


// const MAxofThreeNumber = (a,b,c)=>{
//     if(a>b && a>c){
//         console.log("a is greater Number")
//     }else if(b>a && b>c){
//         console.log("a is greater Number")
//     }else{
//         console.log("c is greater Number")
//     }
// }
// MAxofThreeNumber(7,8,9)


// const MAxofThreeNumber = (a,b,c)=>{
//   let max = a
//   if(b>max){
//     max=b
//   }else if(c>max) {
//     max = c 
//   }else{
//     max = a
//   }
//   return max

// }
// let result = MAxofThreeNumber(10,8,7)
// console.log(result)


// const MAxofThreeNumber = (a,b,c)=>{
//     let result = Math.max(a,b,c)
//     return result

// }
// let result = MAxofThreeNumber(7,8,9)
// console.log(result)
// const reverseArray = (arr)=>{
//     var revarr = []
//     for(let i =arr.length-1 ; i >= 0 ; i-- ){
//      revarr.push(arr[i])
//     }
//  return revarr
// } 
// const result = reverseArray([5,6,7,8,9])
// console.log(result)

// logic bulding class 
// factorial 1 ya 0 = 1 
// iterative 
// const factorial = (n)=>{
//     let result=1 ;
//  if(n === 1 || n===0 ){
//     return 1

//  } 
//  for(let i =2 ; i <= n ; i++  ){
//     result = result*i 
//  }
//  return result
// }

// const result  =  factorial(5)
// console.log(result)


// Recursion  
// const factorial = (n)=>{
//  if( n < 0 ) return "this number of factorial is not exist"
//  if(n === 1 || n === 0 ){
//     return 1
//  }
//  return n * factorial(n-1) 

// }
// const result =factorial(5)
// console.log(result)



// object 
// const obj = {
//     key : value 
// }
// object method 
const  student1 =  {
    Name : "Musab",
    id : 4567,
    registeredNumber: "02324638242",
    greeting : ()=>{
        console.log("asssalam o alaikum, apney ghabrana nahi ahi")
    },
    courses : ["pst","isl","sindhi","biology"]

}
// console.log(typeof(student1), student1 )
// console.log( student1.id )
// destructure
const {Name,id,greeting , courses } = student1 
greeting()
console.log(Name, id ,courses)