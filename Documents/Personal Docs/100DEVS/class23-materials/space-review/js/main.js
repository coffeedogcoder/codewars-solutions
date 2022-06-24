//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [2,4,6,8]
for (i = 0, i < nums.length, i++)
    alert(i)
//Create a function that takes in an array of numbers

//Return a new array of numbers that is every original number squared
let newNums = nums => nums.map(num => num**2)



//Create a function that takes string
//Print the reverse of that string to the console

let unoReverse = str => console.log(str.split("").reverse().join(""))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = str => alert(str === str.split("").reverse().join(""))


function peopleWithAgeDrink(old) {
    if(old <= 14){
       return'drink toddy'
       }
    else if(old >= 15 && 17){
       return'drink coke'
       }
    else if(old >=18 && old <= 21){
       return'drink beer'
       }
    else{
      return 'drink whiskey'
    }
  };