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

//Each way is useful in its own right. You can use variables with straight brackets to access attributes
const attribute = "name";
console.log(myObject[attribute]);

//However you can't do this with dot notation, dot notation is looking for an attribute called "attribute" inside of the object.
console.log(myObject.attribute);