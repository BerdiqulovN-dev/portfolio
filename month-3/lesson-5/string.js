// ---------------------------------------------------musbat,manfiy---------------------------

// let number=prompt("enter the number");
// if(number>0){
//     alert(`${number}-musbat son`)
// }
// else if(number<0){
//     alert(`${number}-manfiy son`)
// }
// else{
//     alert(`number is 0 `)
// }

// --------------------------------------------------toq,juft-----------------------------------

// let n=prompt("enter the number");
// a=n%2;
// if(a==0){
//     console.log(`${n}-juft son`);
// }
// else{
//     console.log(`${n}-toq son`);
// }

// ---------------------------------------------------find sim card company------------------------

// wrapper.innerText="aaaaaaaaaaaaaaa";

// let code=+prompt("kodni kiriting:");
// if(code===90||code===91||code===92||code===96){
// // console.log("raqamingiz beeline");
// wrapper.innerText="aaaaaaaaaaaaaaa";
// }
// else if(code===93||code===94){
//     console.log("raqamingiz ucell");
// }
// else if(code===99){
//     console.log("raqamingiz uzmobile");
// }
// else if(code===97||code===88||code===77){
//     console.log("raqamingiz mobi uz");
// }
// else if(code===33){
//     console.log("raqamingiz humans");
// }
// else{
//     console.log("bunday kodli kompaniya topilmadi");
// }

//  10>44 ? console.log("aaa") : console.log("bbb");===================================================

// ========fizbaz=======
// let n=prompt("enter a number");
// a=n%3;
// b=n%5;
// if(b==0&&a==0){
// console.log("fizbaz");
// }
// else if(b==0){
//     console.log("baz");
// }
// else if( a==0){
//     console.log("fiz");
// }
// else{
//     console.log("Xato");
// }

// ----------------------------------------------------19misol------------

// let n = prompt("enter a number");
// let text = "";
// if (n % 2 == 0) {
// 	text+="juft";
// }
// if (n % 2 == 1||n % 2 == -1) {
// 	text+="toq";
// }
// if (n > 0) {
// 	text+="musbat";
// 	console.log(text);
// }
// if (n < 0) {
// 	text+="manfiy";
// 	console.log(text);
// }

// ----------------------------------------------------topshiriq----------

// let number = +prompt("enter a number");
// if (number <= 999 && number >= 100) {
// 	let a = Math.floor(number / 100);
// 	let b = Math.floor(number / 10) - Math.floor(number / 100) * 10;
// 	let c = number % 10;
// 	if (a > b && b > c) {
// 		console.log(`${c},${b},${a}`);
// 	} else if (a > c && c > b) {
// 		console.log(`${b},${c},${a}`);
// 	} else if (b > a && a > c) {
// 		console.log(`${c},${a},${b}`);
// 	} else if (b > c && c > a) {
// 		console.log(`${a},${c},${b}`);
// 	} else if (c > a && a > b) {
// 		console.log(`${b},${a},${c}`);
// 	} else if (c > b && b > a) {
// 		console.log(`${a},${b},${c}`);
// 	} else if (c == a && a > b) {
// 		console.log(`${b},${a}=${c}`);
// 	} else if (c == b && b > a) {
// 		console.log(`${a},${b}=${c}`);
// 	} else if (a == b && b > c) {
// 		console.log(`${c},${a}=${b}`);
// 	} else if (a == b && c > b) {
// 		console.log(`${a}=${b},${c}`);
// 	} else if (a > b && c == b) {
// 		console.log(`${c}=${b},${a}`);
// 	} else if (c == a && c == b) {
// 		console.log(`${b}=${a}=${c}`);
// 	} else {
// 		console.error("error");
// 	}
// } else {
// 	console.error("son uch xonali emas");
// }

// ==================================================Homework lesson 5=========

// ===============================1-misol================================

// let a = +prompt("Enter the number");
// if (a > 0) {
// 	console.log(`${a} - positive number, true`);
// } else if (a == 0) {
// 	console.log(`number zero`);
// } else {
// 	console.log(`${a}-negative number, false`);
// }

// ===============================2-3-misol================================

// let n = +prompt("enter the number");
// a = n % 2;
// if (a == 0) {
// 	console.log(`${n}-juft son`);
// } else {
// 	console.log(`${n}-toq son`);
// }

// ===============================4-misol================================<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let a = +prompt("enter the first number");
// let b = +prompt("enter the second number");
// if (a > 0 && b > 0) {
// 	console.log(`true`);
// } else {
// 	console.log(`false`);
// }

// ===============================5-misol================================

// let a = +prompt("enter the first number");
// let b = +prompt("enter the second number");
// let c = +prompt("enter the second number");
// if (a > b && b > c) {
// 	console.log(`true`);
// } else {
// 	console.log(`false`);
// }

// ===============================6-misol================================

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");
// let c = +prompt("enter the second number(c)");
// if (a < b && b < c) {
// 	console.log(`${a},${b},${c},`);
// } else {
// 	console.log(`false`);
// }

// yoki;
// console.log(`${a},${b},${c}`);

// ===============================7-misol================================

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");
// if (a % 2 == 0) {
// 	console.log(`${a}-juft son`);
// } else {
// 	console.log(`${a}-toq son`);
// }
// if (b % 2 == 0) {
// 	console.log(`${b}-juft son`);
// } else {
// 	console.log(`${b}-toq son`);
// }

// ===============================8-misol================================

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");
// let c = +prompt("enter the third number(c)");
// let d = +prompt("enter the fourth number(d)");

// if (a > 0 && b > 0 && c > 0 && d > 0) {
// 	console.log(`true`);
// } else {
// 	console.log(`false`);
// }

// ===============================9-misol================================

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");
// let c = +prompt("enter the third number(c)");

// if (a > 0 || b > 0) {
// 	console.log(`true`);
// } else if (c > 0 && b > 0) {
// 	console.log(`true`);
// } else if (a > 0 && c > 0) {
// 	console.log(`true`);
// } else {
// 	console.log(`false`);
// }

// ===============================10-misol================================

// let n = +prompt("enter the  number");

// if (n == 1) {
// 	console.log(`Dushanba`);
// } else if (n == 2) {
// 	console.log(`Seshanba`);
// } else if (n == 3) {
// 	console.log(`Chorshanba`);
// } else if (n == 4) {
// 	console.log(`Payshanba`);
// } else if (n == 5) {
// 	console.log(`Juma`);
// } else if (n == 6) {
// 	console.log(`Shanba`);
// } else if (n == 7) {
// 	console.log(`Yakshanba`);
// } else {
// 	console.log(`false`);
// }

// ===============================11-misol================================

// let code = +prompt("kodni kiriting:");
// if (code === 90 || code === 91 || code === 92 || code === 96) {
// 	console.log("raqamingiz beeline");
// } else if (code === 93 || code === 94) {
// 	console.log("raqamingiz ucell");
// } else if (code === 99) {
// 	console.log("raqamingiz uzmobile");
// } else if (code === 97 || code === 88 || code === 77) {
// 	console.log("raqamingiz mobi uz");
// } else if (code === 33) {
// 	console.log("raqamingiz humans");
// } else {
// 	console.log("bunday kodli kompaniya topilmadi");
// }

// ===============================12-misol================================

// let n = +prompt("raqamni kiriting:");
// if (n > 0) {
// 	n++;
// 	console.log(n);
// } else {
// 	n--;
// 	console.log(n);
// }

// ===============================13-misol================================

// let n = +prompt("raqamni kiriting:");
// if (n > 0) {
// 	n+=3;
// 	console.log(n);
// } else {
// 	n-=2;
// 	console.log(n);
// }

// ===============================14-misol================================

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");
// if (a>b) {
// 	console.log(`${a} - katta ${b} dan`);
// }else if(a==b){
//     console.log(`${a} = ${b}`);
// }
//  else {
// 	console.log(`${b} - katta ${a} dan`);
// }

// ===============================15-misol================================

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");
// let c = +prompt("enter the third number(c)");

// if (a > b && a > c) {
// 	console.log(`max number ${a}`);
// }
// if (c > a && c > b) {
// 	console.log(`max number ${c}`);
// }
// if (b > a && b > c) {
// 	console.log(`max number ${b}`);
// }
// if (a == b && a == c) {
// 	console.log(`sonlar teng`);
// }

// ===============================16-misol================================<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");
// let c = +prompt("enter the third number(c)");

// if (a > b && b > c) {
// 	console.log(`min number ${c}`);
// }
// if (c > a && a > b) {
// 	console.log(`min number ${b}`);
// }
// if (b > c && c > a) {
// 	console.log(`min number ${a}`);
// }
// if (a == b && a == c) {
// 	console.log(`sonlar teng`);
// }

// ===============================18-misol================================

// let a = +prompt("enter the grade");

// if (a==0||a == 1||a == 2) {
//     console.log("stipendiya berilmaydi");
// } else if (a==3) {
//     console.log("stipendiya qiymati: 517 ming");
// } else if (a==4) {
//     console.log("stipendiya qiymati: 550 ming");
// }
// else if (a==5) {
//     console.log("stipendiya qiymati: 620 ming");
// }
// else{
//     console.log("bunday baho mavjud emas");
// }

// ===============================19-misol================================

// let n = +prompt("enter a number");
// let text = "";
// if (n % 2 == 0) {
// 	text+="juft";
// }
// if (n % 2 == 1||n % 2 == -1) {
// 	text+="toq";
// }
// if (n > 0) {
// 	text+="musbat";
// 	console.log(text);
// }
// if (n < 0) {
// 	text+="manfiy";
// 	console.log(text);
// }

// ===============================20-misol================================

// let n = +prompt("tug'ilgan yilingizni kiriting");

// a=2023-n;
// console.log(`shu yli ${a} ga kirasiz`);

// ===============================21-misol================================

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");
// let c = +prompt("enter the third number(c)");

// if (a <= b && a<= c) {
// 	console.log("true");}
//     else {
//         console.log("false");
//     }

// ===============================22-misol================================

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");

// if (a % 2 == 0 && b % 2 == 1) {
// 	console.log("true");
// } else if (a % 2 == 1 && b % 2 == 0) {
// 	console.log("true");
// } else {
// 	console.log("false");
// }

// ===============================23-misol================================

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");
// let c = +prompt("enter the third number(c)");

// if (a > 0 && b > 0 && c > 0) {
// 	console.log("true");
// } else {
// 	console.log("false");
// }

// ===============================24-misol================================

// let a = +prompt("enter the first number(a)");
// let b = +prompt("enter the second number(b)");
// let c = +prompt("enter the third number(c)");

// if (a > 0 && b < 0 && c < 0) {
// 	console.log("true");
// } else if (a < 0 && b > 0 && c < 0) {
// 	console.log("true");
// } else if (a < 0 && b < 0 && c > 0) {
// 	console.log("true");
// } else {
// 	console.log("false");
// }

// ===============================25-misol================================

// let number = prompt("enter a number");
// if (number <= 999 && number >= 100) {
// 	// let a,b,c;
// 	let a = Math.floor(number / 100);
// 	let b = Math.floor(number / 10) - Math.floor(number / 100) * 10;
// 	let c = number % 10;
// 	if (a !== b && b !== c && a !== c) {
// 		console.log("true");
// 	} else {
// 		console.log("false");
// 	}
// } else {
// 	console.log("raqam uch xonali emas");
// }

// ===============================26-misol================================

// let number = +prompt("enter a number");
// if (number <= 999 && number >= 100) {
// 	let a = Math.floor(number / 100);
// 	let b = Math.floor(number / 10) - Math.floor(number / 100) * 10;
// 	let c = number % 10;
// 	if (a > b && b > c) {
// 		console.log(`${c},${b},${a}`);
// 	} else if (a > c && c > b) {
// 		console.log(`${b},${c},${a}`);
// 	} else if (b > a && a > c) {
// 		console.log(`${c},${a},${b}`);
// 	} else if (b > c && c > a) {
// 		console.log(`${a},${c},${b}`);
// 	} else if (c > a && a > b) {
// 		console.log(`${b},${a},${c}`);
// 	} else if (c > b && b > a) {
// 		console.log(`${a},${b},${c}`);
// 	} else if (c == a && a > b) {
// 		console.log(`${b},${a}=${c}`);
// 	} else if (c == b && b > a) {
// 		console.log(`${a},${b}=${c}`);
// 	} else if (a == b && b > c) {
// 		console.log(`${c},${a}=${b}`);
// 	} else if (a == b && c > b) {
// 		console.log(`${a}=${b},${c}`);
// 	} else if (a > b && c == b) {
// 		console.log(`${c}=${b},${a}`);
// 	} else if (c == a && c == b) {
// 		console.log(`${b}=${a}=${c}`);
// 	} else {
// 		console.error("error");
// 	}
// } else {
// 	console.error("son uch xonali emas");
// }


// ===============================27-misol================================

// let a = prompt("enter the money");

// if (a=="hp") {
//     console.log("kompyuter narxi :500$");
// } else if (a=="acer") {
//     console.log("kompyuter narxi :490$");
// } else if (a=="lenovo") {
//     console.log("kompyuter narxi :480$");
// }
// else if (a=="apple") {
//     console.log("kompyuter narxi :600$");
// }
// else{
//     console.log("bunday kompyuter mavjud emas");
// }

