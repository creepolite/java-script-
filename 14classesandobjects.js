//   let obj = {
//      a : 1 
//     b : "hardik"
//   }

//   console.log(obj);


//    let animal = {
//     eats: true

//    }

//    let rabbit = {
//     jumps: true

// }

// rabbit.__proto__ = animal //sets rabit.[[Prototype]] = animal 



class animal {
    constructor(name){
        this.name= name 
          console.log('object is created');
          
    }

    eats(){
        console.log('kahra hu bahi me ');

        
    }

    jumps(){
        console.log('im jumping');
        
    }
}

class lion extends animal {
    constructor(name){
         super(name)        
        console.log('object is created ');
        
    }

    eats(){
        super.eats()
        console.log('khana kha rha hu rora');
        
    }
}

let b = new lion("sheera")
 console.log('b');
 

let a = new animal("bunny")
console.log(a);
