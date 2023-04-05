//========================== ======================lesson 6 (switch()) homework

//=== 1-misol===

// let n = +prompt("enter the number:");
// switch (n) {
// 	case 1:
// 		console.log("Dushanba");
// 		break;
// 	case 2:
// 		console.log("Seshanba");
// 		break;
// 	case 3:
// 		console.log("Chorshanba");
// 		break;
// 	case 4:
// 		console.log("Payshanba");
// 		break;
// 	case 5:
// 		console.log("Juma");
// 		break;
// 	case 6:
// 		console.log("Shanba");
// 		break;
// 	case 7:
// 		console.log("Yakshanba");
// 		break;
// 	default:
// 		console.log("Bunday kun mavjud emas");
// }

//===2-misol===

// let k = +prompt("enter the number:");
// switch (k) {
// 	case 1:
// 		console.log("Yomon");
// 		break;
// 	case 2:
// 		console.log("Qoniqarsiz");
// 		break;
// 	case 3:
// 		console.log("Qoniqarli");
// 		break;
// 	case 4:
// 		console.log("Yaxshi");
// 		break;
// 	case 5:
// 		console.log("A'lo");
// 		break;
// 	default:
// 		console.log("Bunday baho mavjud emas");
// }

//===3-misol===

// let n = +prompt("enter the number:");
// switch (n) {
// 	case 1:
// 	case 2:
// 	case 12:
// 		console.log("Winter");
// 		break;
// 	case 3:
// 	case 4:
// 	case 5:
// 		console.log("Spring");
// 		break;
// 	case 6:
// 	case 7:
// 	case 8:
// 		console.log("Summer");
// 		break;
// 	case 9:
// 	case 10:
// 	case 11:
// 		console.log("Autumn");
// 		break;
// 	default:
// 		console.log("Bunday oy mavjud emas");
// }

//===4-misol===

// let n = +prompt("enter the number of month:");
// switch (n) {
// 	case 1:
// 	case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 		console.log("This month has 31 days");
// 		break;
// 	case 2:
// 		console.log("This month has 28 (or 29) days");
// 		break;
// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 		console.log("This month has 30 days");
// 		break;

// 	default:
// 		console.log("Bunday oy mavjud emas");
// }

//===5-misol===

// let a = +prompt("enter the first number:");
// let b = +prompt("enter the second number:");
// let MathOperator = prompt("Enter MathOperator:");

// switch (MathOperator) {
// 	case "+":
// 		console.log(`${a}+${b}=${a + b}`);
// 		break;
// 	case "-":
// 		console.log(`${a}-${b}=${a - b}`);
// 		break;
// 	case "*":
// 		console.log(`${a}*${b}=${a * b}`);
// 		break;
// 	case "/":
// 		console.log(`${a}:${b}=${a / b}`);
// 		break;
// 	default:
// 		console.error("Is not a MathOperator");
// }

//===6-misol===

// let a = +prompt("enter the grade");

// switch (a) {
// 	case 0:
// 	case 1:
// 	case 2:
// 		console.log("stipendiya berilmaydi");
// 		break;
// 	case 3:
// 		console.log("stipendiya qiymati: 517 ming so'm");
// 		break;
// 	case 4:
// 		console.log("stipendiya qiymati: 550 ming so'm");
// 		break;
// 	case 5:
// 		console.log("stipendiya qiymati: 620 ming so'm");
// 		break;
// 	default:
// 		console.error("bunday baho mavjud emas");
// }

//========================== ================================lesson 6 (for()) homework

//===1-misol===

// let k = +prompt("enter the number(k):");
// let n = +prompt("enter the number(n):");

// for(let i=0;i<n;i++){
//     console.log(k);
// }

//===2-misol===

// let a = +prompt("a sonni kiriting");
// let b = +prompt("a dan kichik bo'lgan b sonni kiriting");

// for (let i = b; i <= a; i++) {
// 	console.log(`${i}`);
// }

//===3-misol===

// let a = +prompt("a sonni kiriting");
// let b = +prompt("a dan kichik bo'lgan b sonni kiriting");

// for (let i = b + 1; i < a; i++) {
// 	console.log(`${a + b - i}`);
// }

// === 3-misol====boshqa usulda==

// let a = +prompt("a sonni kiriting");
// let b = +prompt("a dan kichik bo'lgan b sonni kiriting");

// for (let i = a - 1; i > b; --i) {
// 	console.log(i);
// }

//===4-misol===

// for (let i = 1; i <= 10; i++) {
// 	console.log(`${i}kg konfet ${i * 10000}so'm`);
// }

//===5-misol===

// for (let i = 100; i <= 1000; i += 100) {
// 	console.log(`${i*0.001}kg konfet ${i * 10}so'm`);
// }

//===6-misol===

// for (let i = 1200; i <= 2000; i += 200) {
// 	console.log(`${i}g konfet ${i * 10}so'm`);
// }

//===7-misol===

// let a = +prompt("a sonni kiriting");
// let b = +prompt("a dan kichik bo'lgan b sonni kiriting");
// var sum = 0;

// for (let j = b, i = b; i <= a; i++) {
// 	sum += i;
// }
// console.log(sum);

//===8-misol===

// let a = +prompt("a sonni kiriting");
// let b = +prompt("a dan kichik bo'lgan b sonni kiriting");
// var sum = 1;

// for (let j = b, i = b; i <= a; i++) {
// 	sum *= i;
// }
// console.log(sum);

//===9-misol===

// let a = +prompt("a sonni kiriting");
// let b = +prompt("a dan kichik bo'lgan b sonni kiriting");
// var sum = 0;

// for (let  i = b; i <= a; i++) {
// 	sum += i * i;
// }
// console.log(sum);

//===10-misol===

// let n = +prompt("n sonni kiriting");
// var sum = 0;

// for (let i = 1; i <= n; i++) {
// 	sum += 1 / i;
// }
// console.log(sum);

//===11-misol===12-misol===

// let n = +prompt("n sonni kiriting");

// for (let i = 0; i <= n; i++) {
// 	if (i % 2 == 0) {
// 		console.log(`${i}-juft son`);
// 	} else {
// 		console.log(`${i}-toq son`);
// 	}
// }

//===13-misol===>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<><><>><><>><><>>>><><>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let n = +prompt("n sonni kiriting");

// for (let i = 0; i <= n; i++) {
// for ( let   j = 0; j <= i; j++) {


// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<><><><>>><><><>><><>>>

//==14-misol===

// let n = +prompt("n sonni kiriting");

// for (let i = 0; i <= n; i++) {
// 	if (i % 2 == 0) {
// 		console.log(`${i}-juft sonning kvadrati ${i*i}`);
// 	} else {
// 		console.log(`${i}-toq sonnning kvadrati ${i*i}`);
// 	}
// }

//===15-misol===

// let n = +prompt("n sonni kiriting");

// for (let i = n; i > 0; --i) {
// 	console.log(i);
// }

//===16-misol===

// let n = +prompt("n sonni kiriting");

// for (let i = 0; i <= n; i++) {
// 	if (i % 5 == 0) {
// 		continue;
// 	}
// 	console.log(i);
// }

//===17-misol===

// let n = +prompt("n sonni kiriting");
// var a = 1;
// for (let i = 1; i <= n; i++) {
// 	a *= i;
// }
// console.log(a);

//===18-misol===

// let n = +prompt("n sonni kiriting");
// var a = 1;
// var s = 0;
// for (let i = 1; i <= n; i++) {
// 	a *= i;
// 	s += a;
// }
// console.log(s);

//===19-misol===

// let n = +prompt("n sonni kiriting");
// let x = +prompt("x sonni kiriting");
// var a = 1;
// var s = 1;
// for (let i = 1; i <= n; i++) {
// 	s *= i;
// 	a += x ** n / s;
// }
// console.log(a);

//===20-misol===

// let n = +prompt("n sonni kiriting");
// let x = +prompt("x sonni kiriting");

// for (let i = 1; i <= n; i++) {
// 	if (i % x == 0) {
// 		console.log(i);
// 	}
// }

//===24-misol===

// for (let i = 1; i <= 10; i++) {
// 	for (let j = 1; j <= 10; j++) {
// 		console.log(`${i}*${j}=${i * j}`);
// 	}
// 	console.log("");
// }

//===25-misol===

// let a = +prompt("a sonni kiriting");
// let b = +prompt("a dan kichik bo'lgan b sonni kiriting");

// for (let i = b; i <= a; i++) {
// 	console.log(`${i}`);
// }

//  25-misolga va 21-misolga tushunmadim<<<<<<=======================================

// ===================================lesson-6  funksiya======================================================================

// 1-misol

// let x = +prompt("Enter the number");

// function pow(x) {
// 	let answer = Math.pow(x, 3);
// 	console.log(answer);
// }
// pow(x);

// 2-misol

// let a = +prompt("enter first number");
// let b = +prompt("enter second number");

// function plus(a, b) {
// 	let yigindi = a + b;
// 	console.log(yigindi);
// }
// plus(a, b);

// 3-misol

// let a = +prompt("enter first number");
// let b = +prompt("enter second number");

// function minus(a, b) {
// 	let ayirma = a - b;
// 	console.log(ayirma);
// }
// minus(a, b);

// 4-misol

// let x = +prompt("Enter the number");

// function pow(x) {
// 	let answer1 = Math.pow(x, 2);
// 	let answer2 = Math.pow(x, 3);
// 	let answer3 = Math.pow(x, 4);

// 	console.log(answer1);
// 	console.log(answer2);
// 	console.log(answer3);
// }
// pow(x);

// 5-misol va 6-misol

// let n = +prompt("enter number");

// function jufttoq(n) {
// 	let a = n % 2;

// 	if (n == 0) {
// 		console.log("son 0 ga teng");
// 	} else if (a == 0) {
// 		console.log(`${n} juft son`);
// 	} else {
// 		console.log(`${n} toq son`);
// 	}
// }
// jufttoq(n);

// 7-misol

// let n = +prompt("enter number");

// function incdec(n) {
// 	let dec = --n;
// 	let inc = (n += 2);
// 	console.log(`decrement:${dec} increment:${inc}`);
// }
// incdec(n);

// 8-misol

// let n = Number(prompt("enter number"));

// function boluvchi(n) {
// 	for (let i = 1; i <= n; i++) {
// 		if (n % i == 0) console.log(i);
// 	}
// }
// boluvchi(n);

// 9-misol

// let a = +prompt("enter first number");
// let b = +prompt("enter second number");

// function amallar(a, b) {
// 	let summ = a + b;
// 	let sub = a - b;
// 	let divis = a / b;
// 	let mul = a * b;
// 	console.log(`\n summ:${summ}\n subtract:${sub}\n multiplicat:${mul}\n divis:${divis}`,);
// }
// amallar(a, b);

// 10-misol

// function karra() {
// 	for (let i = 1; i <= 10; i++) {
// 		for (let j = 1; j <= 10; j++) {
// 			console.log(`${i}*${j}=${i * j}`);
// 		}
// 		console.log("");
// 	}
// }
// karra();
