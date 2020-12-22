import { React, useState } from "react";

import styles from "./TopBar.module.css";



function TopBar(props) {

    return (


        <div className={styles.TopBar}>
            <button onClick={() => props.switchPage("home")} className={styles.Buttons}>
                Back to Home Page
           </button>


            <button onClick={() => props.switchPage("login")} className={styles.Buttons}>
                Log In Page
             </button>

            <button onClick={() => props.switchPage("register")} className={styles.Buttons}>
                Register Page
             </button>
        </div>

    );
}

export default TopBar;
