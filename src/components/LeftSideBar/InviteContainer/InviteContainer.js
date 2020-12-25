import { React, useState } from "react";

import styles from "./InviteContainer.module.css";
const axios = require('axios');


function InviteContainer(props) {
    const [username, setUsername] = useState(null);
    const [repoId, setRepoId] = useState(null);
    const [canUpload, setCanUpload] = useState(false);
    const [canDeleteImg, setCanDeleteImg] = useState(false);
    const [canRename, setCanRename] = useState(false);
    const [canDeleteRepo, setCanDeleteRepo] = useState(false);


    const sendInvite = () => {

        console.log(username + props.userUUID + repoId);

        if (!(username == null || props.userUUID == null || repoId == null)) {


            axios.post("https://shopifyimagerepobackend.wl.r.appspot.com/repoInvite/inviteUser", {
                userUUID: props.userUUID,
                repoId: repoId,
                username: username,
                canUpload: canUpload,
                canDeleteImg: canDeleteImg,
                canRenameRepo: canRename,
                canDeleteRepo: canDeleteRepo

            }).then((response) => {

                console.log(response.data);

                props.refreshNotifications();

            }).catch((error) => {

            });
        }
    }

    return (
        <div className={styles.InviteContainer}>

            <div>Username: <input onChange={(e) => setUsername(e.target.value)} type="text"></input></div>
            <div>Repo #: <input onChange={(e) => setRepoId(e.target.value)} type="text"></input></div>
            <div>Can upload<input onChange={(e) => setCanUpload(!canUpload)} type="checkbox"></input></div>
            <div>Can delete images<input onChange={(e) => setCanDeleteImg(!canDeleteImg)} type="checkbox"></input></div>
            <div>Can rename repo<input onChange={(e) => setCanRename(!canRename)} type="checkbox"></input></div>
            <div>Can delete repo<input onChange={(e) => setCanDeleteRepo(!canDeleteRepo)} type="checkbox"></input></div>
            <button onClick={() => sendInvite()}>Invite</button>


        </div >
    );
}

export default InviteContainer;
