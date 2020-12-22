import { React, useState } from "react";
import TopBar from "../../components/TopBar/Topbar";

import styles from "./HomePage.module.css";



function HomePage(props) {

    return (
        <div className={styles.container}>
            <div className={styles.centerContainer}>
                <TopBar switchPage={props.switchPage} />

            </div>
        </div>
    );
}

export default HomePage;
