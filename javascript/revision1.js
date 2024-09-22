// console.log("hello world")
// Create an object named car with properties make, model, and year. How would 
// you access and print the model of the car
// object 
const car = {
    make: "mehran",
    model : "vxr",
 
}
// destrucutre 
// const { year, model } = car
// chainig operation
//  let year =  car?.year
//  console.log(year)

// • Question: Given an array of numbers, write a for loop that prints each number in the array











// function givenNumber(arr){
//     for (let i = 0; i < arr.length; i++) {
//        const iarr = arr[i] 
//        console.log(iarr)
//     }
// }

// givenNumber(myArr)

// const myArr = [2,3,5,6,7,8,9,10]
// for( item of myArr  ){
//     console.log("change",item)
// }

// 3. Array Sum Function
// • Question: Write a function that takes an array of numbers as an argument and returns the 
// sum of all elements in the array.
// [1,2,3,4] = 1+2+3+4 = 10 

const sumArr = (arr)=>{
  const sum =  arr.reduce((prev,current )=>{
    return   prev + current 
 }, 0   )
 return sum
}
const ourLogic = sumArr([1,2,3,4])
console.log(ourLogic)


