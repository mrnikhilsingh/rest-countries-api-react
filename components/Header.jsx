import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const [isDark, setIsDark] = useContext(ThemeContext);

  return (
    <header className={isDark ? "darkMode" : ""}>
      <div className="header-content">
        <h2>
          <Link href="/">Where in the world?</Link>
        </h2>
        <p
          className="dark-mode-toggle"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("darkMode", !isDark);
          }}
        >
          <i className={isDark ? "ri-sun-fill" : "ri-moon-fill"} />{" "}
          <span className="text-dark">
            {isDark ? "Light Mode" : "Dark Mode"}
          </span>
        </p>
      </div>
    </header>
  );
};

export default Header;
