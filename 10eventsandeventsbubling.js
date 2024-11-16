let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    // alert("i was clicked")
    document.querySelector(".container").innerHTML = "yay you clicked enjoy your click"
})


document.addEventListener("contextmenu" ,()=> {
    alert("you right clicked")
})