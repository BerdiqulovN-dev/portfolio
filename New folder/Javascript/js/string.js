// let n = 0;
// while (n < 30) {
// 	console.log("Hello World" + n);
// 	n++;
// }

// ====================================================2-dars 1-misol----------------

// let k=+prompt("enter the first number");
// let n=+prompt("enter the second number");

// for(let i=1; i<n+1; i++){
//     console.log(`${i}) ${k}`);
// }

// ====================================================2-misol========================

// let a=+prompt("a sonni kiriting");
// let b=+prompt("a dan kichik bo'lgan b sonni kiriting");

// for(let i=a; i<=b; i++){
//     console.log(`${i}`);
// }

// ====================================================3-misol========================

// let a = +prompt("a sonni kiriting");
// let b = +prompt("a dan kichik bo'lgan b sonni kiriting");

// for (let i = a + 1; i < b; i++) {
// 	console.log(`${b + a - i}`);
// }

// ====================================================4-misol========================

// for (let i = 1; i <= 10; i++) {
// 	console.log(`${i}kg konfet ${i * 10000}so'm`);
// }

// =================================qo'shimcha======================

// let a = +prompt(" sonni kiriting");
// let n = 0,
// 	m = 0;
// for (let i = 1; i <= a; i++) {
// 	if (i % 2 == 0) {
// 		n++;
// 	} else {
// 		m++;
// 	}
// }
// console.log(`juft sonlar:${n} ta`);
// console.log(`toq sonlar:${m} ta`);

// let a = +prompt(" sonni kiriting");
// let b = +prompt(" darajani kiriting");

//  x=a**b;
// =========================================kalkulyator
// wrapper0.innerText="0"
// wrapper1.innerText="1"
// wrapper2.innerText="2"
// wrapper3.innerText="3"
// wrapper4.innerText="4"
// wrapper5.innerText="5"
// wrapper6.innerText="6"
// wrapper7.innerText="7"
// wrapper8.innerText="8"
// wrapper9.innerText="9"

// console.log(`${a} ning ${b}-darajasi ${x} ga teng`);

// =====================================================================Array
// let str = "javascript kuchli dasturlash tili";

// console.log(str.split(" "));

// let str = ["javascript", ["lesson:first","lesson:second"], "kuchli", "dasturlash", "tili"]

// console.log(str[1][1]);

// let a = {
// 	product: "Coca-cola",
// 	amount: 5,
// 	price: 11000,
// };
// let sum = a.price * a.amount;
// console.log(`${a.amount} ta ${a.product} narxi ${sum} so'm bo'ladi`);

// let a = {
// 	product: "Coca-cola",
// 	amount: 5,
// 	price: 11000,
// };
// // let sum = a.price * a.amount;
// // console.log(`${a.amount} ta ${a.product} narxi ${sum} so'm bo'ladi`);
// b = [];
// for (let keys in a) {
// 	b.push([keys, a[keys]]);
// }
// console.log(b);

// let a = [
// 	{ name: "John", age: 21, budget: 23000 },
// 	{ name: "Steve", age: 32, budget: 40000 },
// 	{ name: "Martin", age: 16, budget: 2700 },
// ];
// let sum = 0;
// for (let keys in a) {
// 	sum += a[keys].budget;
// }
// console.log(sum);

// function fun(obj,x){

// }

console.log("salom");

setTimeout(() => {
	console.log("time") ;

    

}, 0);

setTimeout(() => {
	console.log("vaqt");
}, 0);

console.log("Hello world!");
