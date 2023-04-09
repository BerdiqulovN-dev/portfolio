import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Main from "./components/Main/Main";
export let img= "./assets/Intro-img.png";
// console.log(img);
const App = () => {
	return (
		<>
			<Header />
			<Intro />
			<Main />
		</>
	);
};

export default App;
