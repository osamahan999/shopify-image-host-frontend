import { React, useState } from "react";

import styles from "./UserRepositories.module.css";

//axios request toget all user repositories

function UserRepositories() {
    const [repositories, setRepositories] = useState([1, 2, 3, 4, 4, , 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]);

    return (
        <div className={styles.container} >
            {repositories && repositories.map((repository) => {

                return (
                    <button className={styles.Repo}>
                        Repo
                    </button>
                );
            })}

        </div>
    );
}

export default UserRepositories;
