//Create a constructor with 4 properties and 3 methods


class PizzaMaker{
    pizza(cheeseType, crustType, sauceType,size){
    this.cheese =cheeseType
    this.crust = crustType
    this.sauce = sauceType
    this.size = size
    this.estimatedDeliveryTime = function(){
        console.log('Calculating....')
    }
    pizza.burnMouth=function (){
        console.log('AAAAAAAAA')
    }
    frizbee(){
        console.log('yeet')
    }
}
}
let pizza = new PizzaMaker('mozerella','thicc','red','large')