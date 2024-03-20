import React, { useState } from "react";

import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import { auth } from "./../firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notice, setNotice] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const signupWithUsernameAndPassword = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        console.log("email", email);
        console.log("pas", password);
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch {
        setNotice("Sorry, something went wrong. Please try again.");
      }
    } else {
      setNotice("Passwords don't match. Please try again.");
    }
  };

  return (
    <div className="container">
      <Header />
      <div className="landing">
        <div className="landing__content">
          <h1>Register</h1>
          <form>
            {"" !== notice && (
              <div className="alert alert-warning" role="alert">
                {notice}
              </div>
            )}
            <div>
              <label htmlFor="email">username</label>
              <input
                type="email"
                name="email"
                placeholder="Please add your email"
                value={email}
                onChange={(event) => handleEmailChange(event)}
              />
            </div>

            <div>
              <label htmlFor="password">password</label>
              <input
                type="password"
                placeholder="Please add your password"
                value={password}
                onChange={(event) => handlePasswordChange(event)}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword">confirmPassword</label>
              <input
                type="password"
                placeholder="Confirm yourpassword"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            <button
              className="primary-button"
              type="submit"
              onClick={(e) => signupWithUsernameAndPassword(e)}
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
