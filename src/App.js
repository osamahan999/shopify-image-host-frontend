import React from "react";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

import styles from "./App.module.css";
import LoggedInPage from "./pages/LoggedInPage/LoggedInPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LogInPage from "./pages/LogInPage/LogInPage";

function App() {
  return (
    <div className={styles.App}>
      <LogInPage />
    </div>
  );
}

export default App;
