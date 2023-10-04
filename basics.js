//variable declarations
//variable name and variable value

var fruit = "apple"
let guviname = "vijay"

//re assigning of names

fruit = "orange"
guviname = "kalil"

//constant name cannot be changed
const studentName = "Mafaaz"

console.log("Fruit name :" ,fruit)//calling the variable name
console.log("Mentor Name :" ,guviname)
console.log("Student Name : ",studentName)
console.log("----------------------------------------------------------------------------------------")

//datatypes
  
//string => character ""
//integer => 1234345
//boolean => true or false
//array => ["string", number,  bool] - collections of data 

//Conditions
console.log("Conditions---------")
// five rupees - chocolates

console.log(5 === "5")//want to check type
console.log(5 == "5")//boolean true condition
// === " check its type of value"
// == " check the value alone  "

var money = 10
if(money >= 5){
    console.log("Big chocolates")
}if(money >=2){
    console.log("Small chocolates")
}else{
    console.log("No chocolates")
}
console.log("----------------------------------------------------------------------------------------")

//looping
console.log("looping------------")
//for loop

//starting   //running  //increment 
for(let i=0; i<=5; i++){
    console.log("i am called :" ,i);
}

console.log("----------------------------------------------------------------------------------------")

//array
console.log("Array------------")
let array = ["kasheef","mafaaz","kalil","kareem"];

    array.push("Nasiha") //To add a value in LAST of array list
    console.log(array);

    array.pop("Nasiha") //To out a value in LAST of array list
    console.log(array);

    array.unshift("rajesh") //To add a FIRST value
    console.log(array);

    array.shift("rajesh") //To remove first value
    console.log(array);

    console.log(array.length) //To find a length
    //index start from 0
    console.log(array[2]) //To get the 2 index value of array

    //we need to select a one by one index of array using for loop
    for(let i=0; i<=array.length; i=i+1){
        console.log(array[i])
    }