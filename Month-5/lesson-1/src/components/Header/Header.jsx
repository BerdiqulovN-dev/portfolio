import React from "react";
import "./index.scss";

const Header = () => {
	let admin = false;
	return (
		<>
			{admin ? (
				<header className="header">
					<div className="container">
						<div className="header__inner">
							<p className="text">Admin</p>
						</div>
					</div>
				</header>
			) : (
				<header className="header">
					<div className="container">
						<div className="header__inner">
							<img src="" alt="" className="img" />
							<ul className="header---list">
								<li className="header---list--item">
									<a href="#" className="header---list--item-link">Works</a>
								</li>
								<li className="header---list--item">
									<a href="#" className="header---list--item-link">Block</a>
								</li>
								<li className="header---list--item">
									<a href="#" className="header---list--item-link">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</header>
			)}
		</>
	);
};

export default Header;
