// console.log("i ama tutorial on loops ")

// let a= 1;
// console.log(a+1);
// console.log(a+2);

// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
    
// }

// let obj = {
//     name: "hardik",
//     role:"programmer"
// }

// for(const key in obj ){
//     console.log(key)
// }


// -----------------for arrays----------------------------

let x = [1,2,3,4,5,6]


x.forEach((value,index,arr)=>{
    console.log(value, index,arr)
})


let s= [1,2,3,4,5]

// let news = []

// for (let index = 0; index < s.length; index++) {
//     const element = s[index];

//     news.push(element**2)

// }

let news = s.map((e, index,s)=>
{
return e**2 
})

console.log(news)