let lists = document.querySelectorAll(".list");
let rightBox = document.querySelector(".right");
let leftBox = document.querySelector(".left");
// console.log(lists)
// for of 
for(listItem of lists){
    console.log(listItem)
    listItem.addEventListener("dragstart", function(e){
        console.log(e)
        let selected = e.target;
    //    let {target} = e  

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        rightBox.addEventListener("drop", function(){
            rightBox.appendChild(selected)
         
            selected=null;
        })

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        leftBox.addEventListener("drop", function(){
            leftBox.appendChild(selected)
            selected=null;
        })

    })
}