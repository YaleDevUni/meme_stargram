import React, { useEffect } from 'react';
import '../styling/modal.css';
import { connect, ConnectedProps } from 'react-redux';
import { hideModal } from '../store/actions';
import { RootState } from '../store/reducers';

type ModalProps = {} & ConnectedProps<typeof connector>;

const mapStateToProps = (state: RootState) => ({
  modalProps: state.modal.modalProps
});

const mapDispatchToProps = {
  dispatchShowModal: hideModal
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const Modal = (props: ModalProps) => {
  const { dispatchShowModal, modalProps } = props;

  useEffect(() => {
    const escPressed = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        dispatchShowModal();
      }
    };
    window.addEventListener('keydown', escPressed);
    return () => {
      window.removeEventListener('keydown', escPressed);
    };
  }, []);

  return modalProps ? (
    <div className="modal-overlay">
      <div className="modal">
        <h1>{modalProps.user}</h1>
        <p>{modalProps.description}</p>
        <img src={modalProps.imglink} alt="test" width="300" height="300"></img>
        <p>{modalProps.datetime}</p>
        <p>{modalProps.tag}</p>
        <span className="modal-close" onClick={dispatchShowModal}>
          &#10005; {/* HTML code for a multiplication sign */}
        </span>
      </div>
    </div>
  ) : null;
};

export default connector(Modal);
