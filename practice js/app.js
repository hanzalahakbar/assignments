// class car {
//     constructor(color,model){
//         this.color=color;
//         this.model=model;

//     }
//     startEngine(){
//         console.log("starting engine");
        
//     }
// }
// class mercedes extends car {
//     constructor(engine,roof,color,model){
//         super(color,model);
//         this.engine=engine;
//         this.roof=roof;

//     }
// }

// let mer=new mercedes("v8","open","blue","2025")
// let c= new car("green","1998");
// console.log(mer);







// find the largest and smallest number in an array

// const array=[2,4,67,65,15]
// let largest=array[0];
// for (let index = 0; index < array.length; index++) {
   
   
//     if (array[index]>largest) {
//         largest=array[index];
    
    
    
// }
    
// }
// console.log("largest number:", largest);
// const array=[2,4,67,65,15]
// console.log(Math.min(array));
const obj={
    name:"hanzalah"
}
const json=JSON.stringify(obj);
const value=localStorage.setItem("myData",json);
const finalValue=localStorage.getItem("myData")
const str=JSON.parse(finalValue)
console.log(str);







