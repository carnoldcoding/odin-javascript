const Person = function(name, age){
    this.name = name,
    this.age = age
}

Person.prototype.sayHi = function(){
    console.log(`Hello, I'm ${this.name}`);
}

const cam = new Person("cam", 24);
cam.sayHi();