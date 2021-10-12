import React, { useState } from "react";
import { validateEmail, login } from "./libs.js";
import "./i18n";
import { useTranslation } from "react-i18next";

import "./style.css";
import "./mobile.css";
import Footer from "./components/Footer";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [loading, setLoading] = useState(false);
  const minPasswordLen = 4;
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const checkEmail = () => {
    if (validateEmail(email)) {
      setEmailErr("");
    } else {
      setEmailErr("Email is invalid");
    }
  };

  const checkPassword = () => {
    if (password.length >= minPasswordLen) {
      setPasswordErr("");
    } else {
      setPasswordErr("Password is too short");
    }
  };

  const onEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    checkEmail();
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    checkPassword();
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    checkEmail();
    checkPassword();

    if (
      email !== "" &&
      password !== "" &&
      emailErr === "" &&
      passwordErr === ""
    ) {
      console.log("run mock sign in");
      setLoading(true);
      login(email, password, setLoading);
    } else {
      setLoading(false);
      return false;
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <div className="row">
            <img src="./logo.svg" alt="logo" className="img-fluid logo" />
          </div>
          <div className="row">
            <h2 className="card-title">{t("Sign In")}</h2>
          </div>
        </div>
        <div className="card-content">
          <form>
            <div className="form-group">
              <input
                className={
                  emailErr !== "" ? "form-control error" : "form-control"
                }
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => onEmailChange(e)}
                required
                aria-required="true"
                placeholder={t("Email or Phone")}
              />
              {emailErr === "" && email.length > 0 && (
                <div className="icon">
                  <i className="fa fa-check"></i>
                </div>
              )}
              {emailErr !== "" && (
                <div className="icon">
                  <i className="fa fa-times"></i>
                </div>
              )}
              {emailErr !== "" && (
                <span role="alert" className="error">
                  {emailErr}
                </span>
              )}
            </div>
            <div className="form-group">
              <input
                className={
                  passwordErr !== "" ? "form-control error" : "form-control"
                }
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => onPasswordChange(e)}
                required
                aria-required="true"
                placeholder={t("Enter Password")}
              />
              {passwordErr === "" && password.length > 0 && (
                <div className="icon">
                  <i className="fa fa-check"></i>
                </div>
              )}
              {passwordErr !== "" && (
                <div className="icon">
                  <i className="fa fa-times"></i>
                </div>
              )}
              {passwordErr !== "" && (
                <span role="alert" className="error">
                  {passwordErr}
                </span>
              )}
            </div>
            <div className="row">
              <div className="col-6 mt-2 align-items-center">
                <a href="./" className="" onClick={(e) => e.preventDefault()}>
                  {t("Forgot your password?")}
                </a>
              </div>
              <div className="col-6">
                <button
                  type="submit"
                  className="btn btn-primary pull-right"
                  onClick={(e) => onClickSubmit(e)}
                >
                  {loading === false ? t("Sign In") : t("Signing In")}
                </button>
              </div>
            </div>
          </form>
          <div className="row">
            <a href="./" className="" onClick={(e) => e.preventDefault()}>
              {t("Create an account")}
            </a>
          </div>
        </div>
      </div>
      <Footer changeLanguage={changeLanguage} />
    </div>
  );
}
