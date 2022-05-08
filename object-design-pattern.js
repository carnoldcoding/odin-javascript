//Object Constructors

const Player = function(username, age){
    this.username = username;
    this.age = age;

    this.sayHi = function(){
        console.log(`Hi I'm ${this.username}`)
    }
}

const player1 = new Player("Cameron", 24);
console.log(`
    ==Player Info==
    Name: ${player1.username}
    Age: ${player1.age}
`)
player1.sayHi();