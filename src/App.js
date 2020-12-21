import React from "react";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

import styles from "./App.module.css";
import ContentFeed from "./components/ContentFeed/ContentFeed";

function App() {
  return (
    <div className={styles.App}>
      <LeftSideBar />
      <ContentFeed />
    </div>
  );
}

export default App;
