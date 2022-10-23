"use strict";
//Basic Types
let id = 5;
let company = "Google";
let flag = false;
let random = false; //can be changed because type is any, e.g: boolean to string
random = "False";
//Arrays
let arr = [1, 2, 3];
let strArray = ["one", "two", "three"];
let randomArray = [1, "2", 3, "4"];
//tuple
let person = ["1", 3, 3];
//tuple array
let people;
people = [
    [1, "John"],
    [2, "Clair"],
    [3, "Ken"],
];
//union, variable can hold integer or boolean
let union;
union = 1;
union = false;
//enum
var flow;
(function (flow) {
    flow[flow["one"] = 0] = "one";
    flow[flow["two"] = 1] = "two";
    flow[flow["three"] = 2] = "three";
    flow[flow["four"] = 3] = "four";
    flow[flow["five"] = 4] = "five";
})(flow || (flow = {}));
console.log(flow.one, flow.five);
//Objects
let human = {
    name: "Ali",
    age: 45,
    height: 5,
};
//Functions
const myFunction = (num1, num2) => {
    return num1 + num2;
};
console.log(myFunction(5, 6));
const user = {
    name: "Ali",
    age: 45,
    email: "ali@gmail.com",
};
//Classes
class House {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
const house = new House(1, "House-1", "Address-1");
