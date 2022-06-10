//Object Constructors

const Player = function(username, age){
    this.username = username;
    this.age = age;

    this.sayHi = function(){
        console.log(`Hi I'm ${this.username}`)
        
    }
}

const player1 = new Player("Cam", 24);
player1.sayHi();



const Person = {
    init: function(name, age) {
        this.name = name,
        this.age = age

        return this
    },
    sayHi: function(){
        console.log(`Hello I'm ${this.nameS}`)
    }
}

const cam = Object.create(Person).init("Cam", 24);
cam.sayHi();