import { React, useState } from "react";

import styles from "./Image.module.css";

//axios request toget all user repositories

function Image(props) {
    const [toBeRemoved, setToBeRemoved] = useState(false);

    return (
        <div className={styles.ImageContainer} >
            <div>{props.imageTitle} {props.canBeRemoved && <input onClick={(e) => setToBeRemoved(!toBeRemoved)} type="checkbox"></input>}</div>
            <img src={props.imageUrl} className={styles.Image}></img>
            <div> {props.tags}</div>
        </div>
    );
}

export default Image;
