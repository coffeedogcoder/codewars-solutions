// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

let newArray = [2, 4, 6, 8] 

function doSomething(newArray){
    if (newArray[0] < newArray[newArray.length - 1]) {
        alert("hi")
    }else if (newArray[0] > newArray[newArray.length - 1]){ alert("bye")
    }else{ 
        alert("We close in an hour")
    } 

}