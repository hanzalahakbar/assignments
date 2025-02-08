// var num =Number(prompt("even or odd")) ;

// if (num%2==0) {
//     console.log("even")
    
// } 
// else {
//     console.log("odd")
    
// }
// var num = parseInt(prompt("what is your number?"));

// if (num % 5 == 0 || num % 3 == 0) {
//  console.log("number is 5")  
// }

// //  if(num % 3 == 0){
// //     console.log("number is 3")

// // }

// else{
//     console.log("wrong number")
// }
// var num=parseInt(prompt("enter a number"));
// if (num > 0) {
//     if (num % 2== 0) {
//         console.log("even");
        
//     }
//     else  {
//         console.log("odd");
        
//     }
    
// }else{
//     console.log("number not positive");
// }
// Age Verification Question:
// Ek program likhein jo user ki age check karein:

// Agar user ki age 18 se choti hai, to "Underage" print karein.
// Agar 18 se barabar ya zyada hai, to check karein agar woh 60 se choti hai:
// Agar 60 se choti hai to "Adult" print karein.
// Agar 60 ya zyada hai to "Senior Citizen" print karein.
// var age = parseInt(prompt("enter your age"));
// if (age > 0 ) {
//     if (age<18) {
//         console.log("underage");
        
//     }
//     else if (age<=60) {
//         console.log("adult");
        
//     }
//     else{
//     console.log("senior citizen");
// }
// }
// Exam Result:
// Ek program likhein jo student ke marks analyze karein:

// Agar marks 40 se zyada hain:
// Check karein agar marks 75 se zyada hain, to "Distinction" print karein.
// Warna "Passed" print karein.
// Agar marks 40 ya usse kam hain, to "Failed" print karein.
// var marks=parseInt(prompt("enter your marks"));
// if (marks>=0&&marks<=101) {
//     if (marks>=75) {
//         console.log("distinction");
        
//     }
//     else if (marks<75&& marks>40) {
//         console.log("passed");
        
        
//     }
//     else{
//         console.log("failed");
//     }

    
// }
// var num=["12","18","130","160"];
// num.slice(0,2);
// console.log(num);


















// var table=+prompt("enter table number")
// for (var i = 1; i<=10; i++) {
//     console.log (table + "x" + i + "=" + table * i) ;
    
// }
// var cities=["karachi","islamabad","quetta"];
// var city=prompt("enter city name");
// var found=false;
// for(var i = 0;i<cities.length;i++){
//     if (city===cities[i]) {
//         console.log("found");
//         found=true;
//         break;

        
//     }

// }
// if (!found) {
//     console.log("not found");
    
// }



















// 1. Pyramid Pattern with Numbers
// Aapko ek program likhna hai jo input mein ek number n ley aur neeche walay pattern ko print karay:
// var num = +prompt("enter number") ; 
// for(var i =1 ; i<=num ; i++){
//     var row= "";
    


//     for(var j = 1 ; j<=i ; j++ ){
//         row += j + " ";
        

//     }
//     console.log(row);
    
    
// }
// var matrice = +prompt("enter matrice");
// for(var i =1 ; i <=matrice; i++){
    
//     for( var j = 1; j<=i;j++){
    

//     }
//     console.log(matrice * j);
    
// }
















// var array = [[1,2,3],["a","b","c"]];
// for(var i = 0 ; i<array.length ; i++){
//     for(var j = 0 ; j<array[i].length ; j++){
//         console.log(array[i][j]);
        

//     }

// }
// j<array[i] ka mtlb hai kay i ki value wo upper say uthay ga i=0 to index number 0 ko access kraiga phir jb i=1 hoga to index number 1 hoa phir j dosray ko access krega.



















// for(var i = 1; i<=5; i++){
//    var star=" ";
//     for(var j = 1; j<=i ; j++){
//         star= star + "*"

//     }
//     console.log(star);
    

// }

var number1=parseFloat(prompt("enter number one"));
var number2=parseFloat(prompt("enter number second"));
var operator=prompt("enter the operation you want to perform (+,-,/,*)");
if (operator==="+") {
    console.log(number1 + number2);
    
    
}
else if (operator==="-"){
    console.log(number1-number2);
    

}
else if (operator==="/"){
    console.log(number1/number2);
    

}
else if (operator==="*"){
    console.log(number1*number2);
    

}


else {
    console.log("invalid");
    
}