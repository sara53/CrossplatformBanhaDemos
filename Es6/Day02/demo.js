/**
 * Agenda
 * ----------------------------
 * == Objects Features
 * == Object.keys
 * == Object.values
 * == Object.entries
 * == Object.assign
 * ------------------------------
 * -- Asynchronous Execution in memory
[
	* -- call back function
 	* -- function execution in memory
]
 * -- Promises (then -- catch)(Async -- await)
 * -- Fetch
 */
/**============================================== */
// let fname = "ali";
// let lname = "ahmed";

// let myKey = "test";

// let person = {
// 	fname,
// 	lname,
// 	[myKey]: "red",
// 	display() {
// 		console.log("Display");
// 	},
// };

// console.log(person);
// person.display();

/** ========================================== */

// let result = Object.keys(person);
// let result = Object.values(person);
// let result = Object.entries(person);
// console.log(result);

/** ========================================== */

// let person1 = {
// 	fname: "ali", // props
// 	lname: "Ahmed",
// 	color: "red",
// };

// let person2 = {
// 	color: "green",
// 	test: "test Value",
// };

// let result = Object.assign({}, person1, person2);

// console.log("Person 1 : ", person1);
// console.log("Person 2 : ", person2);
// console.log("result 1", result);

/** ========================================== */

// function showDetails(options = {}) {
// 	let defaultValues = {
// 		fname: "default fname",
// 		lname: "lname",
// 		age: 1,
// 		address: "alex",
// 	};

// 	Object.assign(defaultValues, options);
// 	console.log(
// 		`fname : ${defaultValues.fname}
// 		 lname:${defaultValues.lname}
// 		  address:${defaultValues.address}
// 		  age:${defaultValues.age}`
// 	);
// }

// showDetails();
// showDetails({ fname: "ahmed", lname: "ali", age: 20, address: "cairo" });
// showDetails({ age: 20, address: "cairo" });
/** ========================================== */

// function first() {
// 	console.log("first");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 3000);
// }
// first();

// var productsId;

// setTimeout(() => {
// 	productsId = [100, 200, 300];
// 	setTimeout(() => {
// 		var product = {
// 			id: productsId[0],
// 			name: "Book",
// 			price: 300,
// 		};

// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 2000);
// }, 3000);

// function greet(myFun, insNam) {
// 	console.log("Welcome From ITI");
// 	myFun(insNam);
// }

// greet(function (ins) {
// 	console.log("Hello Dot net your ins is :", ins);
// }, "Mona ali");

// console.log("==============");
// greet(function (ins) {
// 	console.log("mearn your in ", ins);
// }, "ahmed mohamed");

// function greet(myFun1, myFun2) {
// 	myFun1(function () {
// 		console.log("inner");
// 	});
// 	myFun2();
// }

// greet(
// 	function (x) {
// 		x();
// 		console.log("x");
// 	},
// 	function () {
// 		console.log("y");
// 	}
// );

// Promise(function (x, y) {
// 	x();
// 	y();
// 	console.log("Welcome");
// });

function getAllProducts() {
	return new Promise(function (x, y) {
		var productsIds;
		setTimeout(() => {
			productsIds = [100, 200, 300];
			productsIds ? x(productsIds) : y("Error on getting products List");
		}, 3000);
	});
}

function getProductData(productId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			var product = {
				id: productId,
				name: "Book",
				price: 300,
			};
			product ? resolve(product) : reject("Error on getting product Details");
		}, 2000);
	});
}

function getPrice(product) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let price = product.price;
			price ? resolve(price) : reject("Error on getting price");
		}, 500);
	});
}

// async function execute() {
// 	try {
// 		let products = await getAllProducts();
// 		let product = await getProductData(products[0]);
// 		let price = await getPrice(product);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// execute();

// getAllProducts()
// 	.then((productsList) => {
// 		console.log(productsList);
// 		return getProductData(productsList[0]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

/**
 * ==Pending
 * == fulfilled
 * == rejected
 *
 */

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => console.log(error));

// async function execute() {
// 	let response = await fetch("https://jsonplaceholder.typicode.com/users");
// 	let users = await response.json();
// 	console.log(users);
// }

// execute();
