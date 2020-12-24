import { React, useEffect, useState } from "react";

import ContentFeed from "../../components/ContentFeed/ContentFeed";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";

import styles from "./LoggedInPage.module.css";

//axios request toget all user repositories

function LoggedInPage(props) {
    const [userUUID, setUserUUID] = useState(null);
    const [RepoInFocus, setRepoInFocus] = useState(null);

    useEffect(() => {
        setUserUUID(props.userUUID);
    }, [props.userUUID]);


    return (
        <div className={styles.container} >

            <LeftSideBar setContentFeed={(e) => setRepoInFocus(e)} userUUID={userUUID} switchPage={props.switchPage} />
            <ContentFeed contentFeed={RepoInFocus} userUUID={userUUID} />



        </div>
    );
}

export default LoggedInPage;
