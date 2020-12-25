import { React, useState } from "react";

import styles from "./Image.module.css";

//axios request toget all user repositories

function Image(props) {
    const [toBeRemoved, setToBeRemoved] = useState(false);

    const addToRemovingImages = () => {
        if (document.getElementById("removeCheckbox" + props.imageId).checked) {
            var temp = props.removeImagesArray;
            temp.push(props.imageId);

            props.setRemoveImagesArray(temp);


        } else {

            var temp = props.removeImagesArray;

            let i;
            for (i = 0; i < temp.length; i++) {
                if (temp[i] == props.imageId) break;
            }
            temp.splice(i, 1);

            props.setRemoveImagesArray(temp);

        }

    }


    return (
        <div className={styles.ImageContainer} >

            <div >
                {props.imageTitle}

                {props.canBeRemoved &&
                    <input id={"removeCheckbox" + props.imageId} onClick={() => addToRemovingImages()} type="checkbox"></input>
                }
            </div>
            <img src={props.imageUrl} className={styles.Image}></img>
            <div> {props.tags}</div>
        </div >
    );
}

export default Image;
