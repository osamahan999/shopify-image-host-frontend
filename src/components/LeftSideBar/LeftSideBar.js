import { React, useEffect, useState } from "react";
import Modal from "@material-ui/core/Modal";

import styles from "./LeftSideBar.module.css";
import UserRepositories from "./UserRepositories/UserRepositories";

const axios = require('axios');


function LeftSideBar(props) {
    const [AddModalOpen, setAddModalOpen] = useState(false); //add delete modal
    const [DeleteModalOpen, setDeleteModalOpen] = useState(false); //add delete modal

    const [userUUID, setUserUUID] = useState(null);

    const [publicRepo, setPublicRepo] = useState(true);
    const [repoName, setRepoName] = useState(null);


    const [refreshFeed, setRefreshFeed] = useState(false);


    useEffect(() => {
        setUserUUID(props.userUUID);
    }, [props.userUUID])


    const createRepo = () => {
        if (repoName != null && userUUID != null) {
            var inputRepoName = repoName;
            var inputPublicRepo = publicRepo;

            setRepoName(null);
            setPublicRepo(true);
            document.getElementById("create-repo").reset();


            axios.post("http://localhost:5000/repo/newRepo", {
                userUUID: props.userUUID,
                repoName: inputRepoName,
                publicRepo: inputPublicRepo
            }).then((response) => {
                setRefreshFeed(!refreshFeed);
                setAddModalOpen(false);

            }).catch((error) => {
                alert(error.toString());


            });
        }
    }


    return (
        <div className={styles.LeftSideBarContainer}>

            <div className={styles.AddDeleteImages}>
                <button onClick={() => setAddModalOpen(true)} className={styles.ImageButton}>
                    New Repo
                </button>
                <div >
                    <Modal className={styles.AddDeleteModal} open={AddModalOpen} onClose={() => setAddModalOpen(false)} >
                        <form id="create-repo" className={styles.ModalContent}>
                            <div className={styles.inputSection}>
                                <div ><div>Repo Name*:</div><input onChange={(e) => setRepoName(e.target.value)}></input></div>
                                <div ><div>Private *</div><input onClick={(e) => {
                                    setPublicRepo(!publicRepo);
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
                    <Modal className={styles.AddDeleteModal} open={DeleteModalOpen} onClose={() => setDeleteModalOpen(false)} >
                        <div className={styles.ModalContent}>delete</div>
                    </Modal>

                </div>
            </div>


            <div className={styles.RepoContainer}>
                <UserRepositories refreshFeed={refreshFeed} userUUID={props.userUUID} />
            </div>

            <div className={styles.LogoutContainer}>
                <button onClick={() => props.switchPage("home")} className={styles.Logout}>
                    Log Out
                </button>

            </div>

        </div >
    );
}

export default LeftSideBar;
