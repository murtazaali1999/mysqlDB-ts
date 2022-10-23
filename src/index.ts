//Basic Types
let id: number = 5;
let company: string = "Google";
let flag: boolean = false;

let random: any = false; //can be changed because type is any, e.g: boolean to string
random = "False";

//Arrays
let arr: Array<number> = [1, 2, 3];
let strArray: Array<string> = ["one", "two", "three"];
let randomArray: Array<any> = [1, "2", 3, "4"];

//tuple
let person: [string, number, any] = ["1", 3, 3];
//tuple array
let people: [number, string][];

people = [
  [1, "John"],
  [2, "Clair"],
  [3, "Ken"],
];

//union, variable can hold integer or boolean
let union: number | boolean;
union = 1;
union = false;

//enum
enum flow { //default values of enum is 0,1,2...
  one,
  two,
  three,
  four,
  five,
}

console.log(flow.one, flow.five);

//Objects
let human: {
  //setting types for objects
  name: string;
  age: number;
  height: number;
} = {
  name: "Ali",
  age: 45,
  height: 5,
};

//Functions
const myFunction = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(myFunction(5, 6));

//Interfaces
interface User {
  name?: string; //? tells that its optional
  age?: number;
  readonly email?: string; //readonly means that it cannot be modified
}

const user: User = {
  name: "Ali",
  age: 45,
  email: "ali@gmail.com",
};

//Classes
class House {
  id: number; //public by default
  name: string; //makes the attribute accessible only in inherited classes
  private address: string; //makes the attribute accessible only in class

  constructor(id: number, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
}

class Marla5 extends House {
  price: number; //public by default

  constructor(id: number, name: string, address: string, price: number) {
    super(id, name, address);
    this.price = price;
  }
}

const house = new House(1, "House-1", "Address-1");

const miniH = new Marla5(1, "Marla5", "Address-Mini-Marla5", 500);
