// Scope
// Globel Scope

// let a = 10
//  const a = 10
   
// const add = ()=>{

     

//     if(true){
        
       
       
    
//     }
//     console.log(a);

//      if(true){
        
     
       
    
//     }

     
//     console.log(a);

// }


// add()

// console.log(name);


// let name = "React"

// const data = ()=>{
//     let name = "Node"
//     console.log(name);
    
// }
// data()
// console.log(name);


// var a - undefind

// console.log(a);

// var a = 10

 
// let b - TDZ (time zone - declare - excultion) - referance error - can't access before the init 
// console.log(b);

// let b = "React"

// const c = "Node"



// function add (){

//     console.log(a);
    

// }


// closure

// const add = ()=>{

//     let a = 0
   
//      const inneradd = ()=>{

//         a++

//         console.log(a);
        

//      }

//      return inneradd
    
// }

// add()()


// function add(){

//     let balance = 1000


//     function inner (){

//         balance++

//         return balance
        
        
        

//     }

//   return  inner
// }

// balance +=10000

// console.log(balance);

// // a += 10

// // console.log(a);


// const addone = add()

// console.log(addone());

// console.log(addone());
// console.log(addone());
// console.log(addone());






const dataNumber = (cb)=>{


    cb()
    

}


dataNumber(()=>{
    console.log(20);
    
})


// const add = (cfn,b,c)=>{

//     console.log(cfn,b,c);
    
// }


// add(12,23,45)