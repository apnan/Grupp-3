import React from 'react';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../firebase.js';
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';
/* import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; */
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const ChooseProfilePicturePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, 'images/');

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(
      storage,
      `images/${imageUpload.name + v4()}`
    ); /* v4 -randomized LETTERS */

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      /* uploadFiles - first argument is WHERE you want to upload, second one - WHAT */
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  /* ********************************************************************************************* */
  const [morePictures, setMorePictures] = useState(false);
  const moreImagesListRef = ref(storage, 'moreImages/');
  const [moreImageUpload, setMoreImageUpload] = useState(null);
  const [moreImageUrls, setMoreImageUrls] = useState([]);
  const [modalData, setModalData] = useState(null);

  const uploadMoreImages = () => {
    setMorePictures(true);
    listAll(moreImagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  };

  const uploadMoreImage = () => {
    if (moreImageUpload == null) return;
    const moreImageRef = ref(
      storage,
      `moreImages/${moreImageUpload.name + v4()}`
    ); /* v4 -randomized LETTERS */

    uploadBytes(moreImageRef, moreImageUpload).then((snapshot) => {
      /* uploadFiles - first argument is WHERE you want to upload, second one - WHAT */
      getDownloadURL(snapshot.ref).then((url) => {
        setMoreImageUrls((prev) => [...prev, url]);
      });
    });
  };

  /* ************************************************************************************************ */
  return (
    <div className="container">
      <h1 className="h1-text">Choose a profile picture:</h1>
      <div className="profilePictures">
        {imageUrls.map((url) => {
          console.log(url);
          return (
            <Fade bottom cascade className="fade-container" key={url}>
              <img
                onClick={() => {
                  handleOpen(true);
                  setModalData(url);
                }}
                src={url}
                alt="firebase"
                className="profilePicture"
              />
              <Modal
                isOpen={open}
                onRequestClose={handleClose}
                src={url}
                className="modal"
                ariaHideApp={false}
              >
                <Zoom>
                  <img
                    key={url}
                    src={modalData}
                    alt="firebase"
                    className="modalPicture"
                  />
                  <button onClick={handleClose} className="x">
                    X
                  </button>
                </Zoom>
              </Modal>
            </Fade>
          );
        })}
      </div>
      <div className="morePictures">
        {!morePictures ? (
          <button onClick={uploadMoreImages}>More profile pictures</button>
        ) : (
          <div>
            {moreImageUrls.map((url) => {
              return (
                <img
                  key={url} /* ?????????????????????  */
                  src={url}
                  alt="firebase"
                  className="profilePicture"
                />
              );
            })}
          </div>
        )}
      </div>
      <h3 className="h3-text">Or download your own:</h3>
      <div className="downloadingField">
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>Upload file</button>
      </div>
    </div>
  );
};

export default ChooseProfilePicturePage;
