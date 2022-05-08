//Object Notes

const myObject = {
    name: "Object1",

    sayHi: function(){
        console.log(`Hi I'm ${this.name}`);
    }
}

// Different ways to call object attributes/functions.
myObject.sayHi();
myObject["sayHi"]();