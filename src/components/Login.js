import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="justify-content-center loginForm" onSubmit={handleSubmit}>
      <h2 className="loginHead mb-5">Let's catch some thoughts!</h2>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
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
          onChange={e => setPassword(e.target.value)}
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
      <button
        type="submit"
        className="btn btnLogin btn-lg btn-block btn-primary"
        disabled={!validateForm()}
      >
        Login
      </button>
    </form>
  );
}
