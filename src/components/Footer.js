import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// import * as lightIcon from "../icons/light-icon.svg";
// import * as darkIcon from "../icons/dark-icon.svg";

export default function Footer({ changeLanguage }) {
  const [theme, setTheme] = useState("day");
  const { t } = useTranslation();

  const toggleTheme = () => {
    const body = document.querySelector("body");

    if (theme === "day") {
      body.classList.add("night");
      body.classList.remove("day");
      setTheme("night");
    } else {
      body.classList.add("day");
      body.classList.remove("night");
      setTheme("day");
    }
  };

  return (
    <footer>
      <div className="row">
        <div className="col-4">
          <button
            className="theme-toggle"
            onClick={() => {
              toggleTheme();
            }}
          >
            <img src={"./" + theme + ".svg"} alt={theme} />
          </button>
          <div className="dropdown" tabIndex="0">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="buttonDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t("Select language")}
            </button>
            <ul className="dropdown-menu" aria-labelledby="buttonDropdown">
              <li>
                <a
                  className="dropdown-item"
                  href="./"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage("en");
                  }}
                >
                  English
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="./"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage("fr");
                  }}
                >
                  French
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="./"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage("de");
                  }}
                >
                  German
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-8">
          <ul className="footer-links">
            <li>
              <a href="#help" onClick={(e) => e.preventDefault()}>
                Help
              </a>
            </li>
            <li>
              <a href="#privacy" onClick={(e) => e.preventDefault()}>
                Privacy
              </a>
            </li>
            <li>
              <a href="#terms" onClick={(e) => e.preventDefault()}>
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
