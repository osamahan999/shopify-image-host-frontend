import { React, useState } from "react";
import Modal from "@material-ui/core/Modal";

import styles from "./LeftSideBar.module.css";
import UserRepositories from "./UserRepositories/UserRepositories";


function LeftSideBar() {
    const [AddModalOpen, setAddModalOpen] = useState(false); //add delete modal
    const [DeleteModalOpen, setDeleteModalOpen] = useState(false); //add delete modal


    return (
        <div className={styles.LeftSideBarContainer}>

            <div className={styles.AddDeleteImages}>
                <button onClick={() => setAddModalOpen(true)} className={styles.ImageButton}>
                    Add
                </button>
                <div >
                    <Modal className={styles.AddDeleteModal} open={AddModalOpen} onClose={() => setAddModalOpen(false)} >
                        <div className={styles.ModalContent}>add</div>
                    </Modal>

                </div>



                <button onClick={() => setDeleteModalOpen(true)} className={styles.ImageButton}>
                    Delete
                </button>

                <div >
                    <Modal className={styles.AddDeleteModal} open={DeleteModalOpen} onClose={() => setDeleteModalOpen(false)} >
                        <div className={styles.ModalContent}>delete</div>
                    </Modal>

                </div>
            </div>


            <div className={styles.RepoContainer}>
                <UserRepositories />
            </div>

            <div className={styles.LogoutContainer}>
                <button className={styles.Logout}>
                    Log Out
                </button>

            </div>

        </div>
    );
}

export default LeftSideBar;
