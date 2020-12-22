import React, { useContext, useState } from "react";

import styles from "./LogInPage.module.css";
import TopBar from "../../components/TopBar/Topbar";

const axios = require('axios');


function LogInPage(props) {

    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);


    /**
     * On submit of form, sends data through POST to my API
     */
    const handleSubmit = () => {

        if (username && password) {

            axios.post("http://localhost:5000/user/userLogin", {
                username: username,
                password: password

            }).then((response) => {
                setErrorMessage("logged");
                if (document.getElementById("login-form") != null) document.getElementById("login-form").reset();

                props.logIn(response.data.userUUID);
                props.switchPage("logged")


            }).catch((error) => {
                setErrorMessage("Invalid input!");
                if (document.getElementById("login-form") != null) document.getElementById("login-form").reset();


            });


            setUsername(false);
            setPassword(false);


        } else setErrorMessage("Please fill the entire form");
    }

    return (
        <div className={styles.container} >

            <div className={styles.ContentContainer}>
                <TopBar switchPage={props.switchPage} />



                <div className={styles.LoginContainer}>

                    <form id="login-form" className={styles.LoginForm} >

                        <div className={styles.error}>
                            {errorMessage && <div >{errorMessage}</div>}

                        </div>


                        <div className={styles.FormSection}>
                            <div>
                                <div>Username *</div>
                                <input onChange={(e) => setUsername(e.target.value)} name="username"></input>
                            </div>

                            <div>
                                <div>Password *</div>
                                <input onChange={(e) => setPassword(e.target.value)} name="password"></input>
                            </div>
                        </div>


                        <div className={styles.submitContainer}>
                            <button type="button" className={styles.submitButton} onClick={() => handleSubmit()} >Submit</button>

                        </div>
                    </form>


                </div>





            </div>


        </div >
    );
}

export default LogInPage;
