import { React, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import styles from "./App.module.css";
import LoggedInPage from "./pages/LoggedInPage/LoggedInPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import HomePage from "./pages/HomePage/HomePage";

function App(props) {
  const [page, setPage] = useState('home');
  const [userUUID, setUserUUID] = useState(null);

  return (
    <div className={styles.App}>
      {page == 'home' && <HomePage switchPage={(e) => setPage(e)} />}
      {page == 'login' && <LogInPage logIn={(e) => setUserUUID(e)} switchPage={(e) => setPage(e)} />}
      {page == 'register' && <RegisterPage switchPage={(e) => setPage(e)} />}
      {page == 'logged' && <LoggedInPage userUUID={userUUID} switchPage={(e) => setPage(e)} />}
    </div>
  );
}




export default App;
