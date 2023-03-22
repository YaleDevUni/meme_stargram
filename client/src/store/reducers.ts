import { combineReducers } from '@reduxjs/toolkit';
import ModalProperties from '../interfaces/modal-properties';
import { ModalAction } from './actions';

type ModalState = {
  modalProps: ModalProperties | undefined;
};

const initialState: ModalState = {
  modalProps: undefined
};

function modalReducer(state = initialState, action: ModalAction): ModalState {
  switch (action.type) {
    case 'showModal':
      return {
        ...state,
        modalProps: action.payload
      };
    case 'hideModal':
      return {
        modalProps: undefined
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ modal: modalReducer });
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
