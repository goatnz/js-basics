// // // for loop 

// // for (let i = 0;  i <= 5; i++) {
// //      if (i % 2 !== 0 ) console.log(i) ;
    
// // }

// // // while 

// // let i = o ; 
// // while (i <= 5){
// //     if (i % 2 !== 0 ) console.log(i) ;
// //     i++  
// // }


// // // do-while
//  NB : allways evaluate once if the
//  condition is above the whle condition

// let i = 9  ; 
// do {
//     if (i % 2 !== 0 ) console.log(i)
//     i++ ; 
    
// } while (i <= 5);

// const person = {
//     name : 'Hone' ,
//     age :30 
// }; 

// for (let key in person)
// console.log(key, person[key]);

const colours = ['red','green' , 'blue'] ; 

// for (let index in colours)
// console.log(index  , colours[inde]); 


for (let colour of colours) {
    console.log(colour); 
    
}