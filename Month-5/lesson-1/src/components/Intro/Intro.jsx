import React from "react";
import "./index.scss";
import  {img}  from "../../App";
// console.log(img);
const Intro = () => {
	return (
		<section className="Intro">
			<div className="container">
				<div className="Intro__inner">
					<div className="Intro__left">
						<h1 className="Intro__left-title">
							Hi, I am John, Creative Technologist
						</h1>
						<p className="Intro__left-text">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
						<button className="Intro__left-btn">Download Resume</button>
					</div>
					<div className="Intro__right">
                        <img src={img} alt="" className="Intro__right-img" />
                    </div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
