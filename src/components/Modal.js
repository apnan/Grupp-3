import React from 'react';
import Zoom from 'react-reveal/Zoom';

export default function Modal(props) {
  return (
    <Zoom>
      <div className="modal" ariaHideApp={false}>
        <img
          key={props.modalData}
          src={props.modalData}
          alt="firebase"
          className="modalPicture"
        />
        <button onClick={props.handleClose} className="x">
          X
        </button>
      </div>
    </Zoom>
  );
}
