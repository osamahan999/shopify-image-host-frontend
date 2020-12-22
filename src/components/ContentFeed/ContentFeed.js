import { React, useState } from "react";

import styles from "./ContentFeed.module.css";
import Image from "./Image/Image";

//axios request toget all user repositories

function ContentFeed(props) {

    const [removingImages, setRemovingImages] = useState(false);
    const [imageArray, setImageArray] = useState(new Array(1, 2, 3, 4, 5, 5, 5, 5, 5, 5));

    const getRepoImages = () => {

    }

    return (
        <div className={styles.container} >

            {/* { props.contentFeed == null ? <div></div> :
                

            } */}

            <div className={styles.ContentContainer}>
                <div className={styles.InputSection}>
                    <div onClick={() => setRemovingImages(true)} className={styles.ToggleRemove}>
                        Remove Images?
                    </div>
                    {removingImages && <div onClick={() => {
                        setRemovingImages(false);
                    }} className={styles.RemoveSubmit}>Remove Selected</div>}

                </div>


                <div className={styles.ImageContainer}>

                    {imageArray.map((image) => <Image canBeRemoved={removingImages} imageUrl={image} />)}

                </div>

            </div>

        </div>
    );
}

export default ContentFeed;
