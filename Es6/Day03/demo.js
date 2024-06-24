/***
 * == Agenda
 * ----------------
 *  == Symbol Datatype
 *  == For in -- for -- of
 *  == Generator & Iterator
 *  == OOP in Es6
 *  == Modules
 *  == Proxy (self study)
 */

/**
 * Primitive Datatype
 * --------------------------
 *  == Symbol
 */

// var fname = Symbol("fname");

// var age = Symbol("fname");

// console.log(fname);
// console.log(age);
// console.log(fname == age);
//console.log(age);

// var Symbol.Iterator = Symbol("display");
// var person = {
// 	age: 25,
// 	Symbol(): function () {
// 		console.log("1");
// 	},
// };

// console.log(person);
// console.log(person[Symbol.Iterator]);

// iterable
// for (let i of person) {
// 	console.log(i);
// }

// for (let key in person) {
// 	console.log(key); // key
// 	// console.log(person.i);
// }
// // value
// for (let value of arr) {
// 	console.log(value);
// }
// // for in
// for (let i in arr) {
// 	console.log(arr[i]);
// }

// let person = {
// 	fname: "ali",

// 	lname: "ahmed",
// };

// person[Symbol.iterator] = getEvenNum;
// for (let i of person) {
// 	console.log(i);
// }
// function getEvenNum() {
// 	let count = 0;
// 	return {
// 		next: function () {
// 			count += 2;
// 			if (count > 10) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return { value: count, done: false };
// 			}
// 		},
// 	};
// }

// let arr = ["mona", "ali", "ahmed"];

// arr[Symbol.iterator] = getEvenNum;

// var iter = getEvenNum();

// for (let i of arr) {
// 	console.log(i);
// }
// let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/**
 * function --> {}
 * {}--> next --> function
 *
 *  function --> {
 *
 * 		value,
 * 		done
 * }
 *
 */
/** iterator
		== generator
 */

// let arr = ["mona", "ali", "ahmed"];
// arr[Symbol.iterator] = function () {
// 	let count = 0;
// 	return {
// 		next: () => {
// 			if (this.length == count) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return { value: this[count++], done: false };
// 			}
// 		},
// 	};
// };
// for (let i of arr) {
// 	console.log(i);
// }
// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	age: 20,
// };

// person[Symbol.iterator] = function* getEven() {
// 	for (let i in this) {
// 		yield { [i]: this[i] };
// 	}
// };

// // generator function

// for (let i of person) {
// 	console.log(i);
// }

// let iter = getEven();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
/**====================================== */

// import square, * as all from "./main.js";

// // import x, { add, square } from "./main.js";

// function sayHello() {
// 	console.log("Welcome");
// }

// console.log(all.test);
// let result = all.add(5, 9);
// let output = all.default();
// console.log(result);
// console.log(output);

// let pro1Container = document.getElementById("product1");
// let pro2Container = document.getElementById("product2");
// let product1 = {
// 	id: 1,
// 	name: "Book",
// 	price: 200,
// };
// let product2 = {
// 	id: 1,
// 	name: "Pen",
// };

// pro1Container.firstElementChild.innerHTML = product1.name;
// pro1Container.lastElementChild.innerHTML = product1.price;
// pro2Container.firstElementChild.innerHTML = product2.name;
// pro2Container.lastElementChild.innerHTML = product2.price;

// class Product {
// 	constructor(id = "", name = "", price = "") {
// 		this.id = id;
// 		this.name = name;
// 		this.price = price;
// 	}

// 	discount(value = 0.1) {
// 		this.price = this.price * value;
// 		return this.price;
// 	}

// 	display() {
// 		console.log(`Name : ${this.name} : ${this.price}`);
// 	}
// }

// let product1 = new Product(1, "Book", 300);
// let product2 = new Product(2, "Pen", 400);
// let p3 = new Product();

// product1.name = "new ProductNME";

// console.log(product1.discount(0.5));
// product1.display();

// product2.display();

/** =================== */

// class Person {
// 	#fname; // private
// 	constructor(fname, lname) {
// 		this.#fname = fname;
// 		this.lname = lname;
// 	}
// 	display() {
// 		console.log(`${this.fname} ${this.lname}`);
// 	}

// 	get getPet() {
// 		return this.#fname;
// 	}

// 	set setFname(value) {
// 		this.#fname = value;
// 	}
// }

// let p1 = new Person("mona", "ali");

// p1.setFname = "new fname";

// p1.setFname("ajj");

// console.log(p1.getPet);
// p1.setFname("new fname");
// console.log(p1);
// subClass child Class
// superClass -- ParentClass
// class User extends Person {
// 	constructor(fname, lname, age, password) {
// 		super(fname, lname);
// 		this.age = age;
// 		this.password = password;
// 	}

// 	display() {
// 		console.log("Welcome");
// 	}
// 	generatePass() {
// 		this.password = this.password.toUpperCase() + "$se#";
// 		return this.password;
// 	}
// }

// let u1 = new User("Ali", "ahmed", 20, "aliAhmed");

// var product = {
// 	name: "book",
// };
/** ====================== */

// class Person {
// 	constructor(fname, lname) {
// 		if (this.constructor === Person) {
// 			throw "Can not take object from abstract class";
// 		}

// 		this.fname = fname;
// 		this.lname = lname;
// 	}

// 	display() {
// 		throw "Method is not implemented";
// 	}
// }

// class User extends Person {
// 	constructor(fname, lname, age) {
// 		super(fname, lname);
// 	}

// 	display() {
// 		//
// 		console.log("welcome");
// 	}
// }

// let u = new User("ali", "ahmed", 20);

// console.log(u.display());
