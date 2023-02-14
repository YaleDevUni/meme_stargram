import React from 'react';
import './Modal.css';
import { connect, ConnectedProps } from 'react-redux';
import { hideModal } from '../store/actions';
import { RootState } from '../store/reducers';
// interface ModalProps {
//   onCloseButtonClick: () => void;
// }
const mapStateToProps = (state: RootState) => ({
  modal: state.modal.modal
});

const mapDispatchToProps = {
  dispatchHideModal: hideModal
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ModalProps = {} & ConnectedProps<typeof connector>;
function Modal(props: ModalProps) {
  const { dispatchHideModal, modal } = props;
  if (!modal) {
    return null;
  }
  const onCloseButtonClick = () => {
    dispatchHideModal();
  };
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005; {/* HTML code for a multiplication sign */}
        </span>
        <h1>{modal.user}</h1>
        <p>{modal.description}</p>
        <img src={modal.imglink} alt="test" width="300" height="300"></img>
        <p>{modal.datetime}</p>
        <p>{modal.tag}</p>
      </div>
    </div>
  );
}

export default connector(Modal);
