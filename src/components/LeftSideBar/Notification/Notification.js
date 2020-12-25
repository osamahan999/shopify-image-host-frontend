import { React } from "react";

import styles from "./Notification.module.css";
const axios = require('axios');


function Notification(props) {

    const acceptInvite = () => {
        if (props.repoId != null && props.inviteId != null) {

            axios.post("https://shopifyimagerepobackend.wl.r.appspot.com/repoInvite/acceptInvite", {
                userUUID: props.userUUID,
                repoId: props.repoId,
                inviteId: props.inviteId
            }).then((response) => {

                console.log(response.data);

                props.refreshNotifications();
                props.refreshFeed();

            }).catch((error) => {
                alert(error);
            });
        }
    }

    return (
        <div className={styles.Notification}>
            <div>Repo #: {props.repoId}</div>
            <div>Invite #: {props.inviteId}</div>
            <button className={styles.acceptInvite} onClick={() => acceptInvite()}>Accept</button>
        </div >
    );
}

export default Notification;
