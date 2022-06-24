// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 

class Parent{
    constructor(mom,dad){
        this._mom = Rita
        this._dad = Michael

    console.log('MIKEY!')

}

}
class Son extends Parent{
    constructor(son){
        this._son = Michael 
        
    }
}


class Daughter extends Parent{
    constructor(daughter){
        this._daughter = Lacresia
    }
}


class Contractor{
    constructor(name,role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
    }
}
class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
class Back extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }
}
let bob = new Contractor('Bob','Front-end')
let simba = new Front('Simba','Front-end','React')
let machi = new Back('The Machine','Back-end','Node')

let agency = [bob,simba,machi]

for(person of agency){
    person.sayHello()
}
