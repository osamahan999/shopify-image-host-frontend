import React from "react";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

import styles from "./App.module.css";
import LoggedInPage from "./pages/LoggedInPage/LoggedInPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className={styles.App}>
      <RegisterPage />
    </div>
  );
}

export default App;
