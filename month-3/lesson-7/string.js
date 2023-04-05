"use strict";

// ----------------------------------------------------1-misol
// let n = +prompt("enter the number");
// const array = [];
// for (let i = 1; i <= n; i++) {
// 	array.push(i);
// }
// console.log(array);

// ----------------------------------------------------2-misol

// let n = +prompt("enter the number");
// const array = [];
// for (let i = 1; i <= n; i++) {
// 	array.push(2 ** i);
// }
// console.log(array);

// ----------------------------------------------------3-misol

// let n = +prompt("enter the number");
// const a = [];
// let sum = 0;
// for (let i = 1; i <= n; i++) {
// 	a.push(i);
// 	sum += i;
// }
// console.log(a);
// console.log(sum);

// ----------------------------------------------------4-misol

// let n = +prompt("enter the number");
// const a = [];
// let odd = 0;
// let even = 0;
// for (let i = 0; i < n; i++) {
// 	a.push(i * 10);
// 	if (i % 2 == 1) {
// 		odd += a[i];
// 	}
// 	if (i % 2 == 0) {
// 		even += a[i];
// 	}
// }
// console.log(a);
// console.log(odd);
// console.log(even);

// ----------------------------------------------------5-misol

// let n = +prompt("enter the number");
// const a = [];
// let x;
// let sum = 0;
// for (let i = 0; i < n; i++) {
// 	 x = +prompt("enter the array's elements (n times)");
// 	a.push(x);
// 	sum += a[i];
// }
// console.log(a);
// console.log(sum);

// ----------------------------------------------------6-misol

// let n = +prompt("enter the number");
// const a = [];
// for (let i = n; i >= 0; i--) {
// 	a.push(i);
// }
// console.log(a);

// ----------------------------------------------------7-misol

// let ay = +prompt("Enter Kamol's age");
// let by = +prompt("Enter Anvar's age");
// let cy = +prompt("Enter Sardor's age");
// let dy = +prompt("Enter Nursulton's age");

// const a = [];
// a["ism"] = "Kamol";
// a["yosh"] = ay;
// const b = [];
// b["ism"] = "Anvar";
// b["yosh"] = by;
// const c = [];
// c["ism"] = "Sardor";
// c["yosh"] = cy;
// const d = [];
// d["ism"] = "Nursulton";
// d["yosh"] = dy;

// a["yosh"] > b["yosh"] ?  console.log(`${a["ism"]} ${b["ism"]}dan ${Number(a["yosh"]) - Number(b["yosh"])} yosh katta`) :console.log(`${b["ism"]} ${a["ism"]}dan ${Number(b["yosh"]) - Number(a["yosh"])} yosh katta`);
// a["yosh"] > c["yosh"] ?  console.log(`${a["ism"]} ${c["ism"]}dan ${Number(a["yosh"]) - Number(c["yosh"])} yosh katta`) :console.log(`${c["ism"]} ${a["ism"]}dan ${Number(c["yosh"]) - Number(a["yosh"])} yosh katta`);
// a["yosh"] > d["yosh"] ?  console.log(`${a["ism"]} ${d["ism"]}dan ${Number(a["yosh"]) - Number(d["yosh"])} yosh katta`) :console.log(`${d["ism"]} ${a["ism"]}dan ${Number(d["yosh"]) - Number(a["yosh"])} yosh katta`);
// b["yosh"] > c["yosh"] ?  console.log(`${b["ism"]} ${c["ism"]}dan ${Number(b["yosh"]) - Number(c["yosh"])} yosh katta`) :console.log(`${c["ism"]} ${b["ism"]}dan ${Number(c["yosh"]) - Number(b["yosh"])} yosh katta`);
// b["yosh"] > d["yosh"] ?  console.log(`${b["ism"]} ${d["ism"]}dan ${Number(b["yosh"]) - Number(d["yosh"])} yosh katta`) :console.log(`${d["ism"]} ${b["ism"]}dan ${Number(d["yosh"]) - Number(b["yosh"])} yosh katta`);
// c["yosh"] > d["yosh"] ?  console.log(`${c["ism"]} ${d["ism"]}dan ${Number(c["yosh"]) - Number(d["yosh"])} yosh katta`) :console.log(`${d["ism"]} ${c["ism"]}dan ${Number(d["yosh"]) - Number(c["yosh"])} yosh katta`);

// ----------------------------------------------------8-misol

// let n = +prompt("enter the number");
// let k = +prompt("enter the number (k)");
// let l = +prompt("enter the number (l)");
// const a = [];
// let sum = 0;
// for (let i = 0; i < n; i++) {
// 	a.push(i);
// 	if (k < i && i < l) {
// 		sum += i;
// 		   //	sum += a[i];              /*agar massiv elementlari yig'indisi deyilgan bo'lsa */
// 	}
// }
// console.log(a);
// console.log(sum);

// ----------------------------------------------------9-misol

// let n = +prompt("enter the number");
// const a = [];
// let max = 0;
// for (let i = 0; i < n; i++) {
// 	a.push(i);
// 	if (i % 2 == 0) {
// 		max < a[i];
// 		max = a[i];
// 	}
// }
// console.log(a);
// console.log(max);

// ----------------------------------------------------10-misol

// let n = +prompt("enter the number");
// const a = [];
// let min = 0;
// for (let i = 0; i < n; i++) {
// 	a.push(i);
// 	if (i % 2 == 0) {
// 		if (a[i] < min) {
// 			min = a[i];
// 		}
// 	}
// }
// console.log(a);
// console.log(min);

// ----------------------------------------------------11-misol

// let n = +prompt("enter the number");
// const a = [];
// let max = 0;
// for (let i = 0; i < n; i++) {
// 	a.push(i);
// 	if (i % 2 == 1) {
// 		if (a[i] > max) {
// 			max = a[i];
// 		}
// 	}
// }
// console.log(a);
// console.log(max);

// ----------------------------------------------------12-misol

// let n = +prompt("enter the number");
// const a = [];
// let sum = 0;
// let x;
// for (let i = 0; i < n; i++) {
// 	a.push(i);
// 	sum += a[i];
// }
// x = sum / n;

// console.log(a);
// // console.log(sum);
// console.log(x);

// ----------------------------------------------------13-misol

// let n = +prompt("enter the number");
// const a = [];
// for (let i = 0; i < n; i++) {
// 	a.push(i);
// 	if (i % 2 == 1) {
// 		console.log(i);
// 	}
// }
// console.log(a);

// ----------------------------------------------------14-misol

// ----------------------------------------------------15-misol

// let n = +prompt("enter the number");
// const a = [];
// for (let i = 0; i < n; i++) {
// 	a.push(i);
// 	if (i % 2 == 1) {
// 		console.log(a[i]);
// 	}
// }
// console.log(a);

// ----------------------------------------------------16-misol

// const a = [176381, "asasass", "cdsicfnu", 474, "cdsinvufajds2838"];
// const b = [];
// for (let i = 0; i <= a.length; i++) {
// 	if (typeof a[i] == "string") {
// 		b.push(a[i]);
// 	}
// }
// console.log(b);

// ----------------------------------------------------17-misol

// const a = [17, "aaa", "ssss", 474, "ddd"];
// const b = ["aaa", 18, 474, "sdsdsd", "ddd"];
// for (let i = 0; i <= a.length; i++) {
// 	for (let j = 0; j < b.length; j++) {
// 		if (a[i] == b[j]) {
// 			console.log(a[i]);
// 		}
// 	}
// }

// ----------------------------------------------------18-misol

// let n = +prompt("enter the number");
// const a = [n];
// for (let i = 0; i < n; i++) {
// 	a[i] = prompt("enter the number");
// }
// console.log(a);

// ----------------------------------------------------19-misol

// let n = +prompt("enter the number");
// const a = [n];
// let sum = 0;
// for (let i = 0; i < n; i++) {
// 	a[i] = +prompt("enter the number");
// 	sum += a[i];
// }
// console.log(a);
// console.log(sum);

// // ----------------------------------------------------20-misol
// let n = +prompt("enter the number");
// const a = [n];
// let sum = 0;
// let x;
// for (let i = 0; i < n; i++) {
// 	a[i] = +prompt("enter the element");
// }
// x = prompt("enter the odd or even");

// if (x === "odd") {
// 	for (let i = 0; i < n; i++) {
// 		if (a[i] % 2 == 1) {
// 			console.log(a[i]);
// 		}
// 	}
// }
// if (x === "even") {
// 	for (let i = 0; i < n; i++) {
// 		if (a[i] % 2 == 0) {
// 			console.log(a[i]);
// 		}
// 	}
// }

// ----------------------------------------------------21-misol

// let n = +prompt("enter the number");
// const a = [n];
// for (let i = 0; i < n; i++) {
// 	a[n] = +prompt("enter the element");
// 	// a.push(i);
// }
// console.log(a.length - 1);

// ----------------------------------------------------22-misol

// const a = [12, 34, 54, 12, 88, 54, 67, "aaa", "bbb", "aaa"];
// const b = [];
// for (let i = 0; i < a.length; i++) {
// 	// a[n] = +prompt("enter the element");
// 	if (!b.includes(a[i])) {
// 		b.push(a[i]);
// 	}
// }
// console.log(b);

// =======================================================================mashq

// let n = +prompt("enter the number");
// const a = [2, 5, 4, 6, 3, 8, 9, 14, 22, 662, 96];
// // let sum = 0;
// const b = [];

// for (let i = 0; i < a.length; i++) {
// 	console.log(`${i},${a[i]}`);
// 	b.push([i, a[i]]);
// }
// console.log(b);

// ========================================================================

// const a = [2, 5, 4, 6, 3, 8, 9, 14, 22, 662, 96];
// let max = 0;

// for (let i = 0; i < a.length; i++) {
// 	if (a[i] > max) {
// 		max = a[i];
// 	}
// }
// console.log(max);

// ========================================================================

// let m = Math.floor(Math.random() * 10)+1;
// console.log(m);

// for (let i = 0; i < 5; i++) {
// 	let n = +prompt("enter the number");
// 	if (n > m) {
// 		console.log("kichikroq son kiriting");
// 	} else if (n < m) {
// 		console.log("kattaroq son kiriting");
// 	} else {
// 		console.log("to'g'ri");
// 		break;
// 	}
// }
