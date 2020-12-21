import { React, useState } from "react";

import styles from "./LogInPage.module.css";

const axios = require('axios');


function LogInPage() {

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
                console.log(response.data.userUUID);
                setErrorMessage("logged");
                document.getElementById("login-form").reset();

            }).catch((error) => {
                setErrorMessage("Invalid input!");
                document.getElementById("login-form").reset();


            });


            setUsername(false);
            setPassword(false);


        } else setErrorMessage("Please fill the entire form");
    }

    return (
        <div className={styles.container} >

            <div className={styles.ContentContainer}>
                <div className={styles.TopBar}>
                    <button className={styles.Buttons}>
                        Back to Home Page
                    </button>


                    <button className={styles.Buttons}>
                        Register Page
                    </button>
                </div>



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
