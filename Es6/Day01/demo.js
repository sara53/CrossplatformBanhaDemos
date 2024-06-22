/**
 * Agenda
 * --------------------------
 *  == Let -- Var -- Const
 *  == Spread Operator
 *  == Destructuring
 *  == Default Values
 *  == Rest Params
 *  == Arrow Functions
 *  == String API
 *  == Array API
 *  -- map
 *  -- filter
 *  -- every
 *  -- some
 *  -- find
 *  -- findIndex
 *  -- reduce (search)
 */

/**
 * Var
 * --------------------
 * == reassign
 * == redeclare
 * == Can be Hoisting
 * == added to window object
 * == function scope
 *
 * -------------------------------------
 * let
 * == reassign
 * == can't be redelcate
 * == can't be hoisted
 * == can't be added to window object
 * == block scope
 * -------------------------------------
 * const
 * == Can't be  reassign
 * == can't be redelcate
 * == can't be hoisted
 * == can't be added to window object
 * == block scope
 */

// let arr = ["ali"];

// arr = 2;
// arr.push(7);
// console.log(arr);

// const PI = 3.14;

// console.log(fname);
// let fname = "mona";
// console.log(fname);
// console.log(window.fname); // undefined

// function print() {
// 	let test = "anyValue";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(test); //
// 		console.log("i is : ", i);
// 	}
// 	console.log(test);
// 	// console.log(" i outside loop is : ", i);
// }

// print();
/** ========== Spread Operator ============= */

// let arr = [10, 2, 3, 5, 80];

// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// let arr1 = ["ali", "ahmed", "Hoda"];
// let arr2 = [1, 2, 3, ...arr1, true, 123];

// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// let person1 = { fname: "ali", lname: "ahmed" };

// let person2 = { ...person1 };

// person2.color = "red";
// console.log(person1);
// console.log(person2);
/** ========== Destructuring============= */

// let arr = ["hoda", "ahmed", true, 123];

// function useArr(param) {
// 	return [
// 		param,
// 		function () {
// 			return "Ali";
// 		},
// 		30,
// 	];
// }

// let [x, y] = useArr("ali");

// // console.log(x);
// console.log(y);

// let result = y();

// console.log(result);
// let x = arr[0];
// let y = arr[1];
// let z = arr[2];

// let [, , z] = arr;

// console.log(z);

// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	color: "red",
// };

// // let { fname: fname, color: color } = person;
// let { fname, color } = person;

// console.log(fname);
// console.log(color);
/** ========== Default Values & rest params============= */

// default values in es6
// function add(x = 0, y = 0) {
// 	console.log(x + y);
// }

// add(2, 7);
// rest Params
// function add(x, y, ...rest) {
// 	console.log(rest);
// 	// console.log("x : ", x);
// 	// console.log("y : ", y);
// }

// add(2, 5, "mona", "ahmed", 123);
/** ---------
 *  functions
 *     -- user defined function
 *          -- function statement(declaration)
 *          -- function expression
 *          -- Call back function??
 *          -- anonymous function
 *          -- IIFE
 *
 *
 *
 * ------- */

// add(5, 6);
// function add(x, y) {
// 	console.log(x + y);
// }
// add2(2, 4);

// var add2 = function (x, y) {
// 	console.log(x + y);
// };

// arrow function
// let sum = (x = 0, y = 0) => x + y;
// let sum = (x) => {
// 	console.log("welcome");
// 	return x + x;
// };
// let sayHello = () => {
// 	console.log("welcome");
// };

// sum();
// let result = sum(2, 8);
// console.log(result);

// 1- this ==> window
// var fname = "mona";
// var lname = "Mostafa";
// let person = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	test: function () {
// 		// this --> person
// 		console.log(this.fname);
// 	},
// 	display: () => {
// 		window.setTimeout(() => {
// 			console.log(this.fname + " " + this.lname);
// 		}, 2000);
// 	},
// };

// person.test();
// person.display();
/**------------
 *  == includes
 *  == trim
 *  -- StartWith
 *  -- endWith
 *  -- trimStart
 *  -- trimEnd
 *
 *
 * ---------------------------------- */
// let str = "      hello from iti     ";
// console.log(`First ${str.trim()} Front Track`);
// console.log(str.includes("from"));
// console.log(`Welcome ${str} Front Track ${str}`);
/**--------------
 * Array API
 * ---------------------
 * == find
 * == findIndex
 * == some
 * == every
 * == map
 * == foreach
 * == (reduce)
 *
 * ---------------- */

// let arr = [10, 20, 30, 40, 50]; // 30

// let result = arr.findIndex((item, index) => item > 25);

// console.log(result);

// function findElement(x, y, z) {
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log("z : ", z);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] >= 25) return arr[i]
// 	}

// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("==================");
// }

// let itiTracks = ["SPD", "OS", "SFront", "SMearn"];

// let result = itiTracks.some(function (item, index) {
// 	return item.startsWith("S"); // or
// });

// console.log(result);
// let result = itiTracks.map((item, index) => `${index + 1} Welcome ${item}`);

// console.log(result);

let products = [
	{
		id: 1,
		name: "Book",
		price: 200,
		cat: "school",
	},
	{
		id: 2,
		name: "Pen",
		price: 100,
		cat: "school",
	},
	{
		id: 3,
		name: "Mouse",
		price: 100,
		cat: "elec",
	},
	{
		id: 4,
		name: "Juice",
		price: 100,
		cat: "food",
	},
];

products.forEach((item, index) => console.log(`${item.name} : ${index}`));
// let result = products.filter(function (item, index) {
// 	return false;
// });

// console.log(result);
