// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let faveHoly = "HALLOWEEN"

faveHoly = faveHoly.toUpperCase()

console.log(holidayBest)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let bigDawg = "sheila"

alert (bigDawg.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takeFiveNums(n1,n2,n3,n4,n5){
        difference = n1-n2-n3-n4-n5 - 100
        alert(Math.abs(difference))
}

takeFiveNums(27,83,42,56,29)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function take3Nums(num1,num2,num3){
    let min = Math.min(num1,num2,num3)
    let max = Math.max(num1,num2,num3)
    console.log(`${min} , ${max}`)
}
take3Nums(100,50,25)
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
    let result = Math.random()
    if (result < .5){
        return "heads"
    }else{
    return "tails"
    }
}
console.log(headsOrTails())
//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
