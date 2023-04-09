import React from "react";
import "./index.scss";

const Main = () => {
	return (
		<section className="main">
			<div className="container">
				<div className="main__inner">
					<div className="main--top">
						<h2 className="main--top-title">Recent posts</h2>
						<a href="#" className="main--top-link">
							View all
						</a>
					</div>
					<div className="main---cards">
						<div className="main---cards--card">
							<h3 className="main---cards--card-title">
								Making a design system from scratch
							</h3>
							<span className="main---cards--card-elements">
								<p className="main---cards--card-elements-date">12 Feb 2020</p>
								<p className="main---cards--card-elements-name">Design, Pattern</p>
							</span>
							<p className="main---cards--card-text">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
								Exercitation veniam consequat sunt nostrud amet.
							</p>
						</div>
						<div className="main---cards--card">
							<h3 className="main---cards--card-title">
								Creating pixel perfect icons in Figma
							</h3>
							<span className="main---cards--card-elements">
								<p className="main---cards--card-elements-date">12 Feb 2020</p>
								<p className="main---cards--card-elements-name">Figma, Icon Design</p>
							</span>
							<p className="main---cards--card-text">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
								Exercitation veniam consequat sunt nostrud amet.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;
