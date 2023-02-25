import ModalProperties from '../interfaces/modal-properties';

export interface ModalAction {
  type: string;
  payload?: ModalProperties;
}

export function showModal(payload: ModalProperties): ModalAction {
  return {
    type: 'showModal',
    payload
  };
}

export function hideModal(): ModalAction {
  console.log('close modal');
  return {
    type: 'hideModal'
  };
}
