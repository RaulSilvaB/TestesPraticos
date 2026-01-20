import React, { useState, useEffect } from "react";
import styles from "./Theme.module.css";

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    document.body.className = theme === "light" ? styles.dark : styles.light;
  }, [theme]);

  function handleToggle() {
    setToggle(!toggle);
    setTheme(theme == "light" ? "dark" : "light");
  }

  return (
    <div>
      <button onClick={handleToggle}>
        Alternar Tema <br />
        <small>{toggle ? "Light" : "Dark"}</small>
      </button>
    </div>
  );
}

export default ThemeToggle;
