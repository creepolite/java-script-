
// settled  means resolve or reject 
// resolve means promise has settled successfully 
// reject means promise has not settled successfully 




// async function getdata(){
    
//         return new Promise((resolve, reject) => {
//            setTimeout(() => {
//             resolve(455)
//            }, 3500);
//         }
//         )
// }
async function getdata(){

     let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json())
     .then(json => console.log(json))
     let data = await x.jason()
     console.log(a);
      return 455
     
}
async function main(){

    
    console.log('Loading modulues ');
    
    console.log('do something else ');
    
console.log('load data');

let data =  await getdata() 

console.log(data);

console.log('process data ');

console.log('task 2');

}

main()


 