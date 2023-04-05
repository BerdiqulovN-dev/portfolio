//   Imtihon 3-oy

// 1-misol (FizzBuzz)

// let n = +prompt("Enter the number");

// a = n % 3;
// b = n % 5;

// if (a == 0 && b == 0) {
// 	alert("FizzBuzz");
// } else if (a == 0) {
// 	alert("Fizz");
// } else if (b == 0) {
// 	alert("Buzz");
// } else {
// 	alert("Bu son 3 ga ham 5 ga ham bo'linmaydi");
// }

// 2-misol

// function demo(a, b, c) {
// 	if (a < b && b < c) {
// 		console.log(`${a},${b},${c}`);
// 	} else if (a == b && a < c) {
// 		console.log(`${a},${b},${c} (ikkita son teng)`);
// 	} else if (a == c && a < b) {
// 		console.log(`${a},${c},${b} (ikkita son teng)`);
// 	} else if (b == c && b < a) {
// 		console.log(`${b},${c},${a} (ikkita son teng)`);
// 	} else if (a == b && a > c) {
// 		console.log(`${c},${b},${a} (ikkita son teng)`);
// 	} else if (a == c && a > b) {
// 		console.log(`${b},${c},${a} (ikkita son teng)`);
// 	} else if (b == c && b > a) {
// 		console.log(`${a},${c},${b} (ikkita son teng)`);
// 	} else if (a == b && b == c) {
// 		console.log(`${a},${b},${c} (sonlar teng)`);
// 	} else if (a < c && c < b) {
// 		console.log(`${a},${c},${b}`);
// 	} else if (b < c && c < a) {
// 		console.log(`${b},${c},${a}`);
// 	} else if (b < a && a < c) {
// 		console.log(`${b},${a},${c}`);
// 	} else if (c < a && a < b) {
// 		console.log(`${c},${a},${b}`);
// 	} else if (c < b && b < a) {
// 		console.log(`${c},${b},${a}`);
// 	}
// }
// demo(1, 2, 3);
// // demo(1, 3, 2);
// // demo(2, 1, 3);
// // demo(2, 3, 1);
// // demo(3, 2, 1);
// // demo(3, 1, 2);
// // demo(1, 1, 3);
// // demo(2, 2, 3);
// // demo(2, 3, 2);
// // demo(3, 3, 1);
// // demo(3, 1, 3);
// // demo(3, 3, 3);

// 3-misol

// let m = Math.floor(Math.random() * 10) + 1;
// console.log(m);

// for (let i = 0; i < 5; i++) {
// 	let n = +prompt("Enter the number");
// 	if (n > m) {
// 		console.log("Kichikroq kiriting");
// 	} else if (n < m) {
// 		console.log("Kattaroq kiriting");
// 	} else {
// 		console.log("Yutdingiz");
// 		break;
// 	}
// }

// 4-misol

// let info = {
// 	name: "Sodiq",
// 	age: 20,
// 	adddress: "Toshkent",
// 	surname: "Qosimov",
// };

// const demo = [];

// for (let item in info) {
// 	demo.push([item, info[item]]);
// }
// console.log(demo);

//  5-misol

// let data = [
// 	{
// 		kurs_nomi: "HTML",
// 		kurs_davomiyligi: 25,
// 		kurs_narxi: 300000,
// 	},
// 	{
// 		kurs_nomi: "CSS",
// 		kurs_davomiyligi: 55,
// 		kurs_narxi: 400000,
// 	},
// 	{
// 		kurs_nomi: "JS",
// 		kurs_davomiyligi: 70,
// 		kurs_narxi: 500000,
// 	},
// 	{
// 		kurs_nomi: "React",
// 		kurs_davomiyligi: 40,
// 		kurs_narxi: 500000,
// 	},
// ];
// let allTime = 0;
// let allmoney = 0;
// let kun = 0;
// let oy = 0;

// for (let item in data) {
// 	allTime += data[item].kurs_davomiyligi;
// 	allmoney += data[item].kurs_narxi;
// 	oy = Math.floor(allTime / 30);
// 	kun = allTime - Math.floor(allTime / 30) * 30;
// }

// console.log(`umumiy kurs davomiyligi ${oy} oy ${kun} kun , umumiy kurs narxi ${allmoney}so'm`,);

// 6-misol

let set = [3, 1, 5, -4, 67, -3, -6, 1, 9, -7, 3, 5, -6];

const demo = [];
for (let i = 0; i < set.length; i++) {
	if (!demo.includes(-set[i])) {
		demo.push(set[i] * -1);
	}
}
console.log(demo);

// 7-misol

// let array = [
// 	"button",
// 	"portobello",
// 	"shiitake",
// 	"oyster",
// 	"cremini",
// 	"enoki",
// 	"maitake",
// 	"morel",
// 	"truffle",
// 	"chanterelle",
// 	"porcini",
// 	"lobster",
// 	"black trumpet",
// 	"coral",
// ];

// const demo = [];

// for (let item in array) {
// 	demo.push([item, array[item]]);
// }
// console.log(demo);

// 8-misol

let info = [
	{
		id: 1,
		name: "John",
		age: 30,
		email: "john@gmail.com",
	},
	{
		id: 2,
		name: "Mary",
		age: 25,
		email: "mary@yahoo.com",
	},
	{
		id: 3,
		name: "David",
		age: 40,
		email: "david@hotmail.com",
	},
	{
		id: 4,
		name: "Sarah",
		age: 28,
		email: "sarah@gmail.com",
	},
	{
		id: 5,
		name: "Michael",
		age: 35,
		email: "michael@gmail.com",
	},
	{
		id: 6,
		name: "Julia",
		age: 32,
		email: "julia@yahoo.com",
	},
	{
		id: 7,
		name: "Adam",
		age: 23,
		email: "adam@hotmail.com",
	},
	{
		id: 8,
		name: "Emma",
		age: 27,
		email: "emma@gmail.com",
	},
	{
		id: 9,
		name: "Ryan Jonsan",
		age: 45,
		email: "ryan@yahoo.com",
	},
];

let b = 0;
let ism = "";


for (let item of info) {
	let demo = item.name;
	if (demo.length > ism.length) {
		ism = item.name;
		b = 2023 - item.age;
	}
}
console.log(`${ism} ${b} yilda tug'ilgan`);
