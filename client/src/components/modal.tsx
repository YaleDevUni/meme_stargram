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
  dispatchCloseModal: hideModal
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const Modal = (props: ModalProps) => {
  const { dispatchCloseModal, modalProps } = props;

  useEffect(() => {
    const escPressed = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        dispatchCloseModal();
      }
    };
    window.addEventListener('keydown', escPressed);
    return () => {
      window.removeEventListener('keydown', escPressed);
    };
  }, []);

  return modalProps ? (
    <>
      <div className="modal-overlay" onClick={dispatchCloseModal} />
      <div className="modal">
        <div className="modal-left">
          <img className="modal-image" src={modalProps.imglink} />
        </div>
        <div className="modal-right">
          {/* TODO: make close button as a component to be used in different places */}
          <span className="modal-close" onClick={dispatchCloseModal}>
            &#10005;
          </span>
          <div className="modal-profile">{modalProps.user}</div>
          <div className="modal-date">{modalProps.datetime}</div>
          <div className="modal-tags">{modalProps.tag}</div>
          <div className="modal-description">{modalProps.description}</div>
        </div>
      </div>
    </>
  ) : null;
};

export default connector(Modal);
