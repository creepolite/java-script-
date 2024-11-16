// iife ek function banao aur usko immideately invoke karlo 

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    }
    )
}

// this below is iife 
(async function main() {
    // let a = await sleep()
    // let b = await sleep()
    // desturcturing
    // let [x, y, ...rest] = [1, 2, 3, 4, 5, 6]
    // console.log('x,y, rest');
      let obj = {
        a:1,
        b:2,
        c:3
    }
    
    let {a, b} = obj
    console.log('obj');
    

    let arr= [1,2,3]
    console.log(sum(arr[0]+arr[1]+arr[2]));
    
    console.log(sum(...arr));
     
}
)()




