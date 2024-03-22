import React, { useState } from "react";

import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("pas", password);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch(error) {
      console.log("error", error);
      setNotice("You entered a wrong username or password.");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
    <div className="container">
      <Header />
      <div className="landing">
        <div className="landing__content">
          <h1>Login</h1>
          <form>
            {"" !== notice && (
              <div className="alert alert-warning" role="alert">
                {notice}
              </div>
            )}
            <div className="landing__content-input">
              <label htmlFor="email">username</label>
              <input
                type="email"
                name="email"
                placeholder="Please add your email"
                value={email}
                onChange={(event) => handleEmailChange(event)}
                autoComplete="on"
                required
              />
            </div>

            <div className="landing__content-input">
              <label htmlFor="password">password</label>
              <input
                type="password"
                placeholder="Please add your password"
                value={password}
                onChange={(event) => handlePasswordChange(event)}
                autoComplete="on"
                required
              />
            </div>

            <button
              onClick={(e) => loginWithUsernameAndPassword(e)}
              className="primary-button"
              type="submit"
            >
              Sign In
            </button>
            <div>
              <Link className="button-secondary" to="/register">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
