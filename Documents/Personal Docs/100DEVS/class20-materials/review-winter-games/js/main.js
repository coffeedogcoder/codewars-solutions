//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function dylan(rappers){
    let newRappers = []
    rappers.forEach(n => {
        if(n % 2 === 0)
          newRappers.push(n) 
    })

    return newRappers
}

console.log(dylan([1,2,3,4,5,6]))