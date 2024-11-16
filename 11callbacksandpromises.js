console.log("hardik is a hacker")

console.log("that guy is a hecker")



setTimeout(() => {
    console.log("i am a set time out 1 ")
}, 2000);


setTimeout(() => {
    console.log("i am a set time out 2 ")
}, 2000);

console.log("the end")


const callback = (arg) => {
    console.log(arg)
}


const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src

    sc.onload = callback("hardik")
    document.append(sc)
}


loadScript("https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage", callback)



// -------------------PROMISES-------------------

console.log('this is promises');

let prom1 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("no the number was'nt supporting you")

    }
    else {


        setTimeout(() => {
            console.log('yes i am done ');
            resolve("hardik 1")
        }, 3000
        ); }})


let prom2 = new Promise((resolve, reject) => {

    let a = Math.random();
    if (a < 0.5) {
        reject("no the number was'nt supporting you 2")

    }
    else {


        setTimeout(() => {
            console.log('yes i am done 2');
            resolve("hardik 2")
        }, 1000
        ); }})



//  let p3 = Promise.all([prom1 , prom2])        
// p3.then((a) => {
//     console.log('a');
// }).catch((e) => {
//     console.log(err);})
 let p3 = Promise.allSettled([prom1 , prom2])        
p3.then((a) => {
    console.log('a');
}).catch((e) => {
    console.log(err);})






































