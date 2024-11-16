document.querySelector(".child").addEventListener("click"  , (E)=> 
{
    E.stopPropagation()
    alert("child was clicked ")

}  )


document.querySelector(".childcontainer").addEventListener("click"  , (E)=> 
{
    E.stopPropagation()
    alert("childcontainer was clicked ")

}  )


document.querySelector(".container").addEventListener("click"  , (E)=> 
{
    E.stopPropagation()
    alert("container was clicked ")

}  )


function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
// let a = setInterval(() => {
//     document.querySelector(".childcontainer").style.background = getRandomColor();
// }, 1000);

let a = setTimeout(() => {
    document.querySelector(".childcontainer").style.background = getRandomColor()
}, 5000);
 