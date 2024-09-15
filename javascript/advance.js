// Synchornous 
// console.log("hi i am 1 " )
// console.log("hi i am 2 " )
// console.log("hi i am 3 " )
// console.log("hi i am 4 " )
// Asynchornous 
// setTimeout set interveal 
// set timout -> itney dair k bad k chaloga 
// setinterval  -> har itnry dair me chaloga 
// console.log("hi i am  synchronous 1 ")
// console.log("hi i am  synchronous 2 ")
// setTimeout(()=>{
//     console.log("hi i'm asynchornous")
// }) 
// mili second  1s 1000 ms



// console.log("hi i am  synchronous 3 ")


//   const time =  setInterval(()=>{
//     let num = 10
//     console.log(`Tick Tick time i9s runing out ${num}`)
//     num-1
   
// }, 1000 )
// setTimeout(()=>{
//     clearInterval(time)
// },3000)
function timer(){
    var sec = 10;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if(sec < 5 && sec > 0 ){
            document.getElementById('safeTimerDisplay').className=
            "danger"
        }
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
timer()