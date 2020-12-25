import { React, useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";

import styles from "./LeftSideBar.module.css";
import UserRepositories from "./UserRepositories/UserRepositories";
import Notification from "./Notification/Notification";
import InviteContainer from "./InviteContainer/InviteContainer";

const axios = require('axios');


function LeftSideBar(props) {
    //open close tags for all the modals
    const [AddModalOpen, setAddModalOpen] = useState(false); //add delete modal
    const [DeleteModalOpen, setDeleteModalOpen] = useState(false); //add delete modal
    const [NotificationsModalOpen, setNotificationsModalOpen] = useState(false);

    //info of the user and repo they're on
    const [userUUID, setUserUUID] = useState(null);
    const [repoID, setRepoID] = useState(null);

    //info when creating new repo
    const [publicRepo, setPublicRepo] = useState(true);
    const [repoName, setRepoName] = useState(null);

    //used to display errors in the modals
    const [errorMessage, setErrorMessage] = useState(false);

    //Used to update when changes happen
    const [refreshFeed, setRefreshFeed] = useState(false);

    //Used for holding all the notifications for the user
    const [NotificationsArray, setNotificationsArray] = useState([]); //empty arr initially


    useEffect(() => {
        setUserUUID(props.userUUID);
    }, [props.userUUID])


    useEffect(() => {
        getAllNotifs();

    }, [userUUID]);

    const deleteRepo = () => {
        if (repoID != null && userUUID != null) {
            var inputRepoID = repoID;
            setRepoID(null);
            if (document.getElementById("delete-repo") != null) document.getElementById("delete-repo").reset();


            axios.post("https://shopifyimagerepobackend.wl.r.appspot.com/repo/deleteRepo", {
                userUUID: userUUID,
                repoID: inputRepoID
            }).then((response) => {

                setRefreshFeed(!refreshFeed);
                setDeleteModalOpen(false);
                props.setContentFeed(null);

            }).catch((error) => {
                setErrorMessage(error.response.data);


            });
        }
    }


    const createRepo = () => {
        if (repoName != null && userUUID != null) {
            var inputRepoName = repoName;

            setRepoName(null);
            if (document.getElementById("create-repo") != null) document.getElementById("create-repo").reset();


            axios.post("https://shopifyimagerepobackend.wl.r.appspot.com/repo/newRepo", {
                userUUID: userUUID,
                repoName: inputRepoName,
                publicRepo: publicRepo
            }).then((response) => {
                setRefreshFeed(!refreshFeed);
                setAddModalOpen(false);
                setPublicRepo(true);


            }).catch((error) => {
                setErrorMessage(error.toString());


            });
        }
    }

    const getAllNotifs = () => {
        if (userUUID != null) {
            axios.get("https://shopifyimagerepobackend.wl.r.appspot.com/repoInvite/getInvites", {
                params: {
                    userUUID: userUUID
                }
            }).then((response) => {
                setNotificationsArray(response.data);
            }).catch((error) => {
                alert(error);
            })
        }
    }



    return (
        <div className={styles.LeftSideBarContainer}>

            <div className={styles.AddDeleteImages}>
                <button onClick={() => setAddModalOpen(true)} className={styles.ImageButton}>
                    New Repo
                </button>
                <div >
                    <Modal className={styles.Modal} open={AddModalOpen} onClose={() => {
                        setAddModalOpen(false);
                        setErrorMessage(false);
                    }} >
                        <form id="create-repo" className={styles.ModalContent}>
                            {errorMessage && <div>{errorMessage}</div>}

                            <div className={styles.inputSection}>
                                <div ><div>Repo Name*:</div><input onChange={(e) => setRepoName(e.target.value)}></input></div>
                                <div ><div>Private *</div><input onClick={(e) => {
                                    setPublicRepo(!publicRepo);
                                    console.log(publicRepo);
                                }} type="checkbox"></input></div>
                                <button type="button" onClick={() => createRepo()} className={styles.SubmissionButton}>Create Repo</button>

                            </div>



                        </form>
                    </Modal>

                </div>



                <button onClick={() => setDeleteModalOpen(true)} className={styles.ImageButton}>
                    Delete Repo
                </button>

                <div >
                    <Modal className={styles.Modal} open={DeleteModalOpen} onClose={() => {
                        setDeleteModalOpen(false);
                        setErrorMessage(false);
                    }} >

                        <form id="delete-repo" className={styles.ModalContent}>
                            <div>{errorMessage && <div>{errorMessage}</div>}</div>

                            <div className={styles.inputSection}>
                                <div ><div>Repo ID*:</div><input onChange={(e) => setRepoID(e.target.value)}></input></div>
                                <button type="button" onClick={() => deleteRepo()} className={styles.SubmissionButton}>Delete Repo</button>

                            </div>

                        </form>

                    </Modal>

                </div>
            </div>


            <div className={styles.RepoContainer}>
                <UserRepositories setContentFeed={props.setContentFeed} refreshFeed={refreshFeed} userUUID={props.userUUID} />
            </div>

            <div className={styles.BottomLeftContainer}>
                <button onClick={() => props.switchPage("home")} className={styles.BottomLeftButton}>
                    Log Out
                </button>


                <button onClick={() => {
                    setNotificationsModalOpen(true);
                    getAllNotifs();
                }} className={styles.BottomLeftButton}>
                    Invites and Notifications
                </button>

                <div >
                    <Modal className={styles.Modal} open={NotificationsModalOpen} onClose={() => {
                        setNotificationsModalOpen(false);

                    }} >

                        <div className={styles.NotificationsModalContainer}>
                            <div className={styles.NotificationsContainer}>
                                <div>Notifications would appear below</div>
                                {NotificationsArray.map((notification) =>
                                    <Notification
                                        inviteId={notification.invite_id}
                                        repoId={notification.repo_id}
                                        userUUID={userUUID}
                                        refreshNotifications={() => getAllNotifs()}
                                        refreshFeed={() => setRefreshFeed(true)}
                                    />)}

                            </div>
                            <InviteContainer userUUID={userUUID} />

                        </div>

                    </Modal>

                </div>

            </div>

        </div >
    );
}

export default LeftSideBar;
