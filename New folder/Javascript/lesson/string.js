// let box = document.querySelector(".box");
// let card = document.querySelector(".card");

// box.style.cssText =
// 	"width: 300px;height:500px;border:2px solid blue; display: flex; align-items: center;justify-content: center;";
// card.style.cssText = "width: 280px;height:480px;border:2px solid blue; ";

// console.log(box.style);

// const elForm = document.querySelector(".form-a");
// const elInput = document.querySelector(".input-a");
// const elList = document.querySelector(".list-a");

// let a = [];

// elForm.addEventListener("submit", function (event) {
// 	event.preventDefault();
// 	const inputValue = elInput.value;
// 	if (inputValue === "") {

// 	} else {
// 		a.push(inputValue);
// 		elInput.value = "";
// 		render(a);
// 	}
// });

// function render(array) {
// 	elList.innerHTML = "";

// 	for (let item of array) {
// 		let newLi = document.createElement("li");
// 		newLi.textContent = item;
// 		elList.append(newLi);
// 	}
// }

// const a=[15,4456456,"cdmakold klc ",12]
// const b=[]

// console.log(a.includes(12));;
// console.log(a);

// let pes = document.getElementsByTagName('p');
// let pe  = document.querySelectorAll('p')
// console.log(pes);
// console.log(pe);

// console.log(pes[0].style.cssText(""));

let elInput = document.querySelector(".input");
let button = document.querySelector(".btn");
let form = document.querySelector(".form");
// let form = document.querySelector(".form");
// let form = document.querySelector(".form");
// let form = document.querySelector(".form");
// let form = document.querySelector(".form");
// let form = document.querySelector(".form");
// let form = document.querySelector(".form");







form.addEventListener("submit",(evt)=>{
    evt.preventDefault();

let a = +input.value % 3;
let b = input % 5;


if (a == 0 && b == 0) {

console.log("fizbuz");
}
else if(a==0){
console.log("fiz");

}
else if(b==0){
    console.log("buz");
    
    }
})

