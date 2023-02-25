import 'styling/modal.css';
import { useEffect, ReactElement, ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { hideModal } from 'store/actions';
import { RootState } from 'store/reducers';
import { renderButtons } from './modal_buttons';

const Modal = (props: ModalProps): ReactElement | null => {
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

  // This function and the comment block in modal is hard coded now.
  // Should this be updated dynamically render after comment function implemented.
  function createMockList(): ReactNode {
    let comments: string[] = [];
    for (let i = 1; i < 11; i++) {
      comments.push(`Comments ${i}`);
    }
    return comments.map((comment, index) => <li key={index}>{comment}</li>);
  }

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
          {/* <div className="modal-comment">{modalProps.comments}</div> */}
          <div className="modal-comment">
            <ul>{createMockList()}</ul>
          </div>
          {/* TODO: decide how to show the timestamp od the posting,
          For example, like Instagram, show the time passed after posting created */}
          {/* <div className="modal-date">{modalProps.datetime}</div> */}

          {/* This tag and description should also be implemented after backend work done */}
          {/* <div className="modal-tags">{modalProps.tag}</div> */}
          {/* <div className="modal-description">{modalProps.description}</div> */}

          <div>{renderButtons()}</div>
        </div>
      </div>
    </>
  ) : null;
};

// TODO: below code (connecting stuffs) can be written in better way with cool convention,
// need more research.
type ModalProps = {} & ConnectedProps<typeof connector>;

const mapStateToProps = (state: RootState) => ({
  modalProps: state.modal.modalProps
});

const mapDispatchToProps = {
  dispatchCloseModal: hideModal
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Modal);
