import { React, useState } from "react";

import styles from "./RegisterPage.module.css";

const axios = require('axios');


function RegisterPage() {

    const [firstName, setFirstName] = useState(false);
    const [lastName, setLastName] = useState(false);
    const [email, setEmail] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);


    const handleSubmit = () => {
        if (firstName == false) console.log(firstName && lastName && email && username && password);

        if (firstName && lastName && email && username && password) {
            document.getElementById("register-form").reset();


            setErrorMessage("hi");


            axios.post("http://localhost:5000/user/userRegister", {
                first_name: firstName,
                last_name: lastName,
                email: email,
                username: username,
                password: password
            }).then((response) => {
                setErrorMessage(response);

                setFirstName(false);
                setLastName(false);
                setEmail(false);
                setUsername(false);
                setPassword(false);

            })
                .catch((error) => {
                    setErrorMessage(error);
                    setFirstName(false);
                    setLastName(false);
                    setEmail(false);
                    setUsername(false);
                    setPassword(false);
                });




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
                        Log In Page
                    </button>
                </div>



                <div className={styles.RegisterContainer}>

                    <form id="register-form" className={styles.RegisterForm} >

                        <div className={styles.error}>
                            {errorMessage && <div >{errorMessage}</div>}

                        </div>

                        <div className={styles.FormSection}>

                            <div>
                                <div>First Name *</div>
                                <input onChange={(e) => {
                                    setFirstName(e.target.value);
                                }} name="first_name"></input>
                            </div>

                            <div>
                                <div>Last Name *</div>
                                <input onChange={(e) => setLastName(e.target.value)} name="last_name"></input>
                            </div>
                            <div>
                                <div>Email *</div>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} name="email"></input>
                            </div>
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

export default RegisterPage;
