// given 5 boxes assign a random color and a random background color to each boxes using dom concepts 

// console.log("hello world")


// let boxes = document.getElementsByClassName("box")

let boxes = document.querySelector(".container").children
// console.log(boxes)

function getRandomColor() {
    let first = Math.ceil(0 + Math.random() * 255)
    let second = Math.ceil(0 + Math.random() * 255)
    let third = Math.ceil(0 + Math.random() * 255)

    return `rgb(${first} , ${second} ,${third})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()

});