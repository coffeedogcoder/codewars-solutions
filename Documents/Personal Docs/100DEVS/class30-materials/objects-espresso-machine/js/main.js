//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(coffeeBeans, grindSetting,volume, shotTime){
    this.beans = coffeeBeans 
    this.grind = grindSetting
    this.volume = volume
    this.time = shotTime
    }
    pullShot(){
        alert('espresso pulling')
    }
    steamMilk(){
        alert('MILK WHINE NOISE')
    }
    pourLatteArt(){
        alert('rosetta')
    }

}

let laMarzocca = new EspressoMachine('Andes Candy', 16, '17.5g', '28s')