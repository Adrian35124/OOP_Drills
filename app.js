class Person {
    constructor (name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    sayHello (){
        alert(`Hello! My name is ${this.name}, I am ${this.age} and I live in ${this.city}`)
    }

}
let p1 = new Person("Adrian", "Pelham", 21)
let p2 = new Person("Cris", "Homewood", 25)
let p3 = new Person("Jessica", "Hoover", 23)
let p4 = new Person("Melissa", "Pelham", 14)
let p5 = new Person("Jackie", "Pelham", 9)
p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();
// Inheritance
class Vehicle {
    constructor(manufacturer, numOfWheels) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
    }
    aboutVehicle() {
        console.log(`This is a ${this.manufacturer} and it has ${this.numOfWheels} number of tires.`)
    }
    
}
class Truck extends Vehicle {
    constructor (manufacturer, numOfWheels,truckBed,numOfDoors) {
        super(manufacturer, numOfWheels);

        this.truckBed = truckBed
        this.numOfDoors = numOfDoors;
}

}

class Sedan extends Vehicle {
    constructor(manufacturer, size, mpg) {
        super(manufacturer);

        this.size = size;
        this.mpg = mpg
    }
}

let newSedan = new Sedan("Toyata", 'Small', 30)

class Motorcycle extends Vehicle {
    constructor(manufacturer, numOfWheels, handleBars, hasDoors){
        super(manufacturer, numOfWheels)
        this.handleBars = handleBars;
        this.hasDoors = hasDoors;
    }
    aboutVehicle() {
        console.log(`this motorcycle is a ${this.manufacturer} and it has ${this.numOfWheels} wheels.`)
    }
}
let moto = new Motorcycle("Yamaha", 2, true, false)
moto.aboutVehicle();