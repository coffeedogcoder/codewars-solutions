//Create a function that takes in an array of numbers. Multiply each number together and alert the product.


function takeArrays(nums){
    let product = 1
    nums.forEach(num => product *= num)
    alert(product)
    }

takeArrays([10,2,3])

