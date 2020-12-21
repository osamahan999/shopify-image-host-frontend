import { React, useState } from "react";

import ContentFeed from "../../components/ContentFeed/ContentFeed";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";

import styles from "./LoggedInPage.module.css";

//axios request toget all user repositories

function LoggedInPage() {

    return (
        <div className={styles.container} >

            <LeftSideBar />
            <ContentFeed />



        </div>
    );
}

export default LoggedInPage;
