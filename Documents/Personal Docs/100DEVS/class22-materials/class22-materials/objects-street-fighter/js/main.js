//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter (fighterColor, fighterHeight,fighterWeight, fighterSpecialMove){
    this.color = fighterColor
    this.height = fighterHeight
    this.weight = fighterWeight
    this.specialMove = fighterSpecialMove
    this.punch = function (){
        alert('POW')
    }
    this.kick = function (){
        alert('BOW')
    }
    this.uppercut = function (){
        alert('BLADOW')
    }
}

let ryu = new StreetFighter ("blue", '6ft', "200lb", "HADOKEN")

function getGrade (s1, s2, s3) {
    let average = (s1 + s2 + s3 / 3) 
    if(average <= 90 && average >= 100){
      return "A"
    }else if(average <= 80 && average >= 90){
      return "B"
    }else if(average <= 70 && average >= 80){
      return "C"
    }else if(average <= 60 && average >= 70){
      return "D"
    }else{ 
      return "F"
    }
  }
  
  getGrade(95,90,93)