import { React, useState } from "react";

import styles from "./Image.module.css";

//axios request toget all user repositories

function Image(props) {
    const [toBeRemoved, setToBeRemoved] = useState(false);

    return (
        <div className={styles.ImageContainer} >
            <div>title {props.canBeRemoved && <input onClick={(e) => setToBeRemoved(!toBeRemoved)} type="checkbox"></input>}</div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" className={styles.Image}></img>
            <div> 5 tags</div>
        </div>
    );
}

export default Image;
