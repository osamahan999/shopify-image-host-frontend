import { React, useEffect, useState } from "react";

import styles from "./UserRepositories.module.css";

const axios = require('axios');

function UserRepositories(props) {
    const [repositories, setRepositories] = useState(null);

    useEffect(() => {
        refresh();

    }, [props.userUUID]);

    useEffect(() => {
        if (props.refreshFeed) refresh();
    }, [props.refreshFeed]);

    const refresh = () => {
        if (props.userUUID != null && props.userUUID.length != 0) {
            axios.get("http://localhost:5000/repo/getRepos", {
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

    return (
        <div className={styles.container}>


            {repositories != null && repositories.map((repository) => {

                return (
                    <button onClick={() => props.setContentFeed(repository.repo_id)} className={styles.Repo}>
                        <div>Repo Name : {repository.name}</div>
                        <div>Repo Id: {repository.repo_id}</div>
                    </button>
                );
            })}

        </div>
    );
}

export default UserRepositories;
