import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Register from "./Register";
import uuidv4 from "uuid/v4";
import axios from "axios";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newUser, setNewUser] = useState(null);

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	const history = useHistory();
	function login() {
		/// connect to backend
		axios
			.get("https://2xi4uzqzba.execute-api.eu-west-2.amazonaws.com/dev/Users")
			// handle success
			.then((response) => {
				const users = response.data.users;
				console.log(users);

				for (let i = 0; i < users.length; i++) {
					let user = users[i];
					if (user.email === email && user.password === password) {
						history.push("/home");
					}
				}
			})
			// handle error
			.catch((error) => {
				console.error(error);
			});
	}

	return !newUser ? (
		<form onSubmit={handleSubmit} classname="ml-3 mr-3">
			<p className="headers text-sm-center text-lg-left ">
				Let's catch some thoughts!
			</p>
			<div className="form-group ">
				<label htmlFor="email">Email address</label>
				<input
					type="email"
					className="form-control"
					id="email"
					aria-describedby="email"
					placeholder="Enter email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<small id="emailHelp" className="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control"
					id="password"
					placeholder="Choose your password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					autoComplete="false"
				/>
			</div>
			<div className="form-group form-check">
				<input
					type="checkbox"
					className="form-check-input"
					id="rememberMeCheckbox"
				/>
				<label className="form-check-label" htmlFor="rememberMeCheckbox">
					Remember me
				</label>
			</div>
			<div className="form-row justify-content-sm-center justify-content-lg-start">
				<button
					type="submit"
					className="btn btnLogin btn-lg btn-block btn-shape "
					disabled={!validateForm()}
					onClick={login}
				>
					Login
				</button>
			</div>
			<div className="form-row form-inline mt-3 justify-content-sm-center justify-content-lg-start">
				Not yet registered?{" "}
				<button
					type="button"
					className="btn btn-md btn-simple p-0 m-1"
					onClick={(e) => setNewUser(true)}
				>
					Sign Up
				</button>
			</div>
		</form>
	) : (
		<Register />
	);
}
