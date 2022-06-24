//Write your pseduo code first! 
//only on click
document.querySelector('#yell').addEventListener('click', run)
//get value out of input
function run() {
    console.log('eeeeloo m8')
    let fName = document.querySelector('#firstName').value
    fName = fName * 9/5 + 32
    document.querySelector('#placeToYell').innerText = fName
//convert the value

}