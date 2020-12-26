import { React, useState } from "react";
import TopBar from "../../components/TopBar/Topbar";

import styles from "./HomePage.module.css";



function HomePage(props) {

    return (
        <div className={styles.container}>

            <div className={styles.contentContainer}>

                <div className={styles.content}>
                    <TopBar className={styles.TopBar} switchPage={props.switchPage} />

                    <div className={styles.HomeInfoContainer}>
                        <div className={styles.HomeInfo}>

                            <h1>Shopify Backend Engineer Intern Project</h1>
                            <a href="https://github.com/osamahan999/shopify-image-host-frontend/" >Frontend Github</a>
                            <a href="https://github.com/osamahan999/shopify-image-host-backend/">Backend Github </a>
                            <div className={styles.text}>
                                <h2>Features implemented:</h2>
                                <ul>
                                    <li>Can register and log in</li>
                                    <li>Upload images to your repository, stored on Google Cloud</li>
                                    <li>Delete images from your repository</li>
                                    <li>Add tags to images</li>
                                    <li>Search a repository's images by tag/s</li>
                                    <li>Invite others to join your repository with different permissions
                                     (can upload, can delete images, can delete/rename repo)</li>
                                </ul>

                                <h2>Please Note:</h2>
                                <ul>
                                    <p>I am confident in the security of my application, but I still would not like
                                    to risk taking your personal information. Please do not upload any sensitive images or sensitive information.
                                    All the images are public on google cloud so please do not upload any sensitive information. If you do, please reach out to me so
                                that I can remove it.  </p>

                                </ul>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default HomePage;
