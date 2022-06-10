const Person = function(name, age){
    this.name = name,
    this.age = age
}

Person.prototype.sayHi = function(){
    console.log(`Hello, I'm ${this.name}`);
}

Person.prototype.sayAge = function(){
    console.log(`I am ${this.age} years old`);
}

const cam = new Person("cam", 24);
cam.sayHi();
cam.sayAge();

console.log("===");

//Inheritance, using the Object.create method of inheriting prototypes
//Functions should always be added to objects using prototypes, this saves space and also allows for
//inheritance.

const Student = function(name, age, major){
    this.name = name,
    this.age = age,
    this.major = major
}
/*
    We could set Student.prototype=Person.prototype, which would inherit all of the methods from the Person class.
    However this would mean that if we change the Person class' methods we would also be changing the Student class.
    The Object.create method allows a copy to be made and inherited, giving Student.prototype their own identical methods
    to be altered.
*/
Student.prototype = Object.create(Person.prototype);

Student.prototype.sayAge = function(){
    console.log(`Hello, I am ${this.age} years old`);
}

const tuck = new Student("Tucker", 22, "Design");
tuck.sayHi();
tuck.sayAge();