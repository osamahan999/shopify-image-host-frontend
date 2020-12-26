import { Modal } from "@material-ui/core";
import { React, useEffect, useState } from "react";

import styles from "./UserRepositories.module.css";

const axios = require('axios');

function UserRepositories(props) {
    const [repositories, setRepositories] = useState(null);

    const [RenameModalOpen, setRenameModalOpen] = useState(false);
    const [RenameInputText, setRenameInputText] = useState(null);
    const [RepoToRename, setRepoToRename] = useState(-1);
    const [CurrentRepoName, setCurrentRepoName] = useState(null);

    useEffect(() => {
        refresh();

    }, [props.userUUID]);

    useEffect(() => {
        refresh();
    }, [props.refreshFeed]);

    const refresh = () => {
        if (props.userUUID != null && props.userUUID.length != 0) {
            axios.get("https://shopifyimagerepobackend.wl.r.appspot.com/repo/getRepos", {
                params: {
                    userUUID: props.userUUID
                }

            }).then((response) => {
                setRepositories(null);
                setRepositories(response.data);
            }).catch((error) => {
                alert("err!");
            });
        }

    }

    const renameRepo = () => {
        if (RepoToRename != -1 && CurrentRepoName != null && RenameInputText != null && RenameInputText != '') {
            axios.post("https://shopifyimagerepobackend.wl.r.appspot.com/repo/renameRepo", {
                userUUID: props.userUUID,
                repoId: RepoToRename,
                newRepoName: RenameInputText
            }).then((response) => {
                console.log(response);
                refresh();
                setRenameModalOpen(false);
            })
        }
    }

    return (
        <div className={styles.container}>


            {repositories != null && repositories.map((repository) => {

                return (
                    <button onClick={() => props.setContentFeed(repository.repo_id)} className={styles.Repo} >
                        <div>
                            <div>Repo Name : {repository.name}</div>
                            <div>Repo Id: {repository.repo_id}</div>
                        </div>
                        <button className={styles.renameButton} onClick={() => {
                            setRenameInputText(null);
                            setRepoToRename(repository.repo_id);
                            setCurrentRepoName(repository.name);
                            setRenameModalOpen(true);
                        }}>

                            rename
                        </button>


                    </button>
                );
            })}

            <Modal className={styles.Modal} open={RenameModalOpen} onClose={() => {
                setRenameModalOpen(false);
                setRenameInputText(null);
                setRepoToRename(-1);
            }} >

                <div className={styles.ModalContent}>
                    <div>Rename  '{CurrentRepoName}' with id '{RepoToRename}'  to: </div>
                    <div>
                        <input onChange={(e) => setRenameInputText(e.target.value)} className={styles.renameTextBox} type="text"></input>
                        <button onClick={() => renameRepo()} >Rename Repo!</button>
                    </div>
                </div>
            </Modal>

        </div >


    );
}

export default UserRepositories;
