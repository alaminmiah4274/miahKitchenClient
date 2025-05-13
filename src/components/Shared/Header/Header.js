import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/image/logo/logo.png";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleUserLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => console.error(error));
	};

	const navMenu = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/menu">Menu</Link>
			</li>
			<li>
				<Link to="/blog">Blog</Link>
			</li>
			{user?.uid ? (
				<>
					<li>
						<Link to="/reviews">My Reviews</Link>
					</li>
					<li>
						<Link to="/ordered">Ordered Foods</Link>
					</li>
				</>
			) : (
				""
			)}
		</>
	);

	return (
		<div className="navbar bg-white h-28">
			<div className="navbar-start">
				{/* for small device */}
				<div className="dropdown">
					<label
						tabIndex={0}
						className="btn btn-ghost md:hidden lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-5 p-2 bg-primary w-[300px]"
					>
						{navMenu}
					</ul>
				</div>
				<div className="w-1/3">
					<Link to="/">
						<img src={logo} alt="" width={150} />
					</Link>
				</div>
			</div>
			<div className="navbar-center hidden md:flex lg:flex">
				<ul className="menu menu-horizontal px-1 text-lg">{navMenu}</ul>
			</div>
			<div className="navbar-end">
				{user?.uid ? (
					<button
						onClick={handleUserLogOut}
						className="btn btn-primary text-xs md:text-sm"
					>
						Log Out
					</button>
				) : (
					<Link
						to="/login"
						className="btn btn-primary text-xs md:text-sm"
					>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
