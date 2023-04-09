import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Main from "./components/Main/Main";
import img from "./assets/images/twitter.svg";

const App = () => {
	return (
		<>
			<main>
				<div className="p-5 shadow m-5 rounded mx-auto">
					<form action="#" className="form">
						<label htmlFor="title" className="w-50 d-block mx-auto ">
							<p className="text-primary fw-bold text-uppercase">Enter title</p>
							<input type="text"
							id="title"
							className="form-control p-3 w-100" />
						</label>
						<label htmlFor="title" className="w-50 d-block mx-auto ">
							<p className="text-primary fw-bold text-uppercase">Enter title</p>
							<input type="text"
							id="title"
							className="form-control p-3 w-100" />
						</label>
					</form>
				</div>
			</main>

			{/* <Header /> */}
			{/* <Intro /> */}
			{/* <Main /> */}
		</>
	);
};

export default App;
