// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

//const bestWeekEver = "is this the best week ever?"
    //alert(bestWeekEver.endsWith("?"))
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

//let str = "jr. dev applicant"
//console.log( str.replaceAll("jr. dev", "software engineering"))


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rps (){
    let random = MAth.random()
    if (random < .33){
        return "rock"
    }else if(random < .66){
        return "paper"
    }else{
        return "scissors"
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(botChoice, playerChoice){
    let botChoice = rps()
    if(playerChoice === "rock" && botChoice === "scissors" || playerChoice === "scissors" && botChoice === "paper" || playerChouice === "paper" && botChoice === "rock" ){
        console.log("WINNNA")
    }else if (playerChoice === botChoice){
        console.log("tie")
    }else{
      console.log("loser")  
    }
}
}
checkWin("paper")

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
