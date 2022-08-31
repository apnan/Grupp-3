import React from 'react';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../firebase.js';
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from './Modal.js';
import Fade from 'react-reveal/Fade';

const ChooseProfilePicturePage = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, 'images/');

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

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
    );

    uploadBytes(moreImageRef, moreImageUpload).then((snapshot) => {
      /* uploadFiles - first argument is WHERE you want to upload, second one - WHAT */
      getDownloadURL(snapshot.ref).then((url) => {
        setMoreImageUrls((prev) => [...prev, url]);
      });
    });
  };

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
                  toggleModal();
                  setModalData(url);
                }}
                src={url}
                alt="firebase"
                className="profilePicture"
              />
            </Fade>
          );
        })}
        {open && <Modal modalData={modalData} handleClose={toggleModal} />}
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
