import { React, useEffect, useState } from "react";

import styles from "./ContentFeed.module.css";
import Image from "./Image/Image";

const axios = require('axios');


function ContentFeed(props) {

    const [removingImages, setRemovingImages] = useState(false); //if we are removing
    const [imageArray, setImageArray] = useState([]); //holds images for the repo we're in from server

    const [removeImagesArray, setRemoveImagesArray] = useState([]);

    const [updateFeed, setUpdateFeed] = useState(false); //used to trigger useEffect

    const [submitImages, setSubmitImages] = useState(false); //on submit of images turns true
    const [uploadedImages, setUploadedImages] = useState(null); //holds the images from the file upload from user
    const [tagInput, setTagInput] = useState(""); //holds the tags as the input changes


    const [tagFilter, setTagFilter] = useState(''); //stores content of tag filter




    useEffect(() => {
        if (submitImages) {
            setSubmitImages(false);
            if (uploadedImages != null) {



                let formData = new FormData();

                let tags = tagInput;

                for (let i = 0; i < uploadedImages.length; i++) {
                    formData.append("files", uploadedImages[i]);
                }

                formData.append("tags", tags);
                formData.append("userUUID", props.userUUID);
                formData.append("repoID", props.contentFeed);

                document.getElementById("file-upload").reset()

                setUploadedImages(null);

                axios({
                    method: "POST",
                    url: "http://localhost:5000/image/uploadImages",
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }).then((response) => {
                    setUpdateFeed(true);


                }).catch((error) => console.log(error));


            } else alert("No files selected!");



        }


    }, [submitImages]);


    useEffect(() => {
        updateImageArray();
        setRemoveImagesArray([]);

    }, [props.contentFeed]); //on load, update img arr, only runs once


    useEffect(() => {
        if (updateFeed) updateImageArray();
        setUpdateFeed(false);
    }, [updateFeed]);

    const updateImageArray = () => {
        if (props.contentFeed != null) {
            axios.get("http://localhost:5000/repo/getRepoImages", {
                params: {
                    repoID: props.contentFeed,
                    userUUID: props.userUUID
                }

            }).then((response) => {
                setImageArray(response.data);

            }).catch((error) => {
                console.log(error);
            });
        }
    }

    //same as updateImageArray except with tags
    const filterFeed = () => {
        let tags = tagFilter;

        axios.get("http://localhost:5000/repo/getRepoImagesFiltered", {
            params: {
                repoID: props.contentFeed,
                userUUID: props.userUUID,
                tags: tags
            }

        }).then((response) => {

            setImageArray(response.data);
        }).catch((error) => {
            console.log(error);
        });

    }


    const removeImages = () => {
        if (!(removeImagesArray.length == 0)) {
            axios.post("http://localhost:5000/image/deleteImageFromRepo", {
                userUUID: props.userUUID,
                repoId: props.contentFeed,
                imagesToRemove: removeImagesArray

            }).then((response) => {

                console.log(response);
                updateImageArray();
                setRemoveImagesArray([]);

            }).catch((error) => {
                setRemoveImagesArray([]);

                console.log(error);
            });

        } else {
            alert("No images ");
        }

    }


    return (
        <div className={styles.container} >

            { props.contentFeed == null ?
                <div>
                </div>
                :
                <div className={styles.ContentContainer}>
                    <div className={styles.InputSection}>
                        <div className={styles.RepoOptions}>
                            <div><h1>Repo #  {props.contentFeed} </h1> <button onClick={() => setUpdateFeed(true)}>Refresh Feed!</button></div>

                            <div>
                                <div>Search for tags seperated by commas!</div>
                                <div>
                                    <input onChange={(e) => setTagFilter(e.target.value)} type="text"></input>
                                    <button onClick={() => filterFeed()}>Filter</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.fileUploadContainer}>
                            <div className={styles.tagContainer}>

                                <div> Add tags seperated by commas </div>

                                <input className={styles.tagInput} onChange={(e) => setTagInput(e.target.value)} type="text"></input>
                            </div>
                            <div className={styles.filesButtonContainer}>
                                <div>Upload Some Photos!</div>
                                <form id="file-upload"><input id="file" onChange={(e) => {
                                    setUploadedImages(e.target.files);
                                }} className={styles.filesButton} type="file" multiple ></input></form>
                                <div className={styles.uploadFiles} onClick={() => setSubmitImages(true)}>Upload!</div>
                            </div>

                        </div>
                        <div onClick={() => setRemovingImages(!removingImages)} className={styles.ToggleRemove}>Remove Images?</div>
                        <div>
                            {removingImages && <div onClick={() => {
                                setRemovingImages(false);

                                removeImages();

                                setRemoveImagesArray([]);
                            }} className={styles.RemoveSubmit}>Remove Selected</div>}
                        </div>

                    </div>


                    <div className={styles.ImageContainer}>


                        {imageArray.map((image) => <Image
                            canBeRemoved={removingImages} //send current value, push new image onto it, and send it back
                            removeImagesArray={removeImagesArray}
                            setRemoveImagesArray={(e) => setRemoveImagesArray(e)}

                            userUUID={props.userUUID}
                            repoId={props.contentFeed}
                            imageUrl={image.url}
                            imageTitle={image.title}
                            tags={image.tags}
                            imageId={image.image_id}
                        />)}

                    </div>

                </div>

            }



        </div>
    );
}

export default ContentFeed;
