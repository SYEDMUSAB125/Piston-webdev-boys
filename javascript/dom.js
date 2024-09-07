// documnet object model 
// 4 pillars dom 
// select Element tag name class id queryselector
// change html 
// chnage css 
// handle event 
// console.log("javascript runing perfectly  ")
// doc.className = "para"
// doc.classList = "aquib abid para"

// doc.innerHTML = "me tw vbadal gya ho"
// doc.textContent = " me tw phir se baedal lgya"
// doc.innerHTML = "<p>thiws is dom class very interssting </p>"
// var doc = document.querySelector("div")
// console.log(doc)
// doc.addEventListener("dblclick",()=>{
// doc.className = "div"
// })
// var anchorBtn =  document.querySelector("a")
// anchorBtn.addEventListener("click",()=>{
//    doc.innerHTML = "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloribus nam impedit optio dolores totam. Doloribus unde soluta illo ducimus. Vitae modi quos harum quaerat numquam officia possimus alias deserunt delectus voluptatum eos voluptas placeat iste inventore, libero ut nihil nulla aperiam! Dignissimos temporibus itaque incidunt, provident consequuntur deserunt tenetur minima! Placeat voluptas, reiciendis quisquam ea omnis vitae, consequatur, consectetur sunt voluptates deleniti amet. Nobis, fugiat et officiis voluptate adipisci ut cupiditate omnis. Odio fugit sint impedit, possimus molestias corporis. Placeat voluptates voluptatibus animi quo possimus consequatur voluptate quisquam impedit earum, dignissimos aliquid blanditiis, nihil, voluptatem aut magni ullam dolorem velit quis error enim vero? Temporibus voluptates culpa velit! Dolore natus ab dignissimos nesciunt sit impedit cum iste alias obcaecati temporibus aut nulla quia veritatis at, fugit, ex ea, unde harum perspiciatis! Dolorum at repellat dicta quo nostrum modi. Quidem quaerat ea commodi voluptatum quia porro quos, provident nostrum sunt."
//    anchorBtn.className="hidden"
// } )

var doc =  document.querySelector("div")
var btn = document.getElementById("btn")
let count = 0 
btn.addEventListener("click",()=>{
   // template literal 
   // doc.innerText = "buy items "+count
   doc.innerText = `Buy Items ${count} `
   count++

})