import React from 'react';
import '../App.css';

type ModalProps = {
  onCloseButtonClick: () => void;
};

function Modal_test(props: ModalProps) {
  const { onCloseButtonClick } = props;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005; {/* HTML code for a multiplication sign */}
        </span>
        This is my new modal!
      </div>
    </div>
  );
}

export default Modal_test;
