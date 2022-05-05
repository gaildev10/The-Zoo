class Animal {
    constructor (name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }

}
class Domesticated extends Animal{
    constructor (name, breed){
        super(name) 
        this.breed = breed
    }

}

class Wild extends Animal{
    constructor (name, habitat){
        super(name) 
        this.habitat = habitat
    }

}
let wolf = new Wild('Eskimo', 'North Dakota')
let giraffe = new Wild('Tower', 'Madagascar')

class Dog extends Domesticated {
    constructor (name, breed){
        super(name)
        super(breed)
    }
    speak(){
        console.log(`${this.name} says woof`)
    }
}
 let simba = new Domesticated('Simba', 'Sheperd')


 class Cat extends Domesticated {
     constructor(name, breed){
         super(name)
         super(breed)
     }
     speak(){
         console.log(`${this.name} says meow`)
     }
 }

 let chatte = new Domesticated ('Chatte', 'Persian')