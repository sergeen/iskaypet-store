import ModalStyles from './Modal.module.css';

function Modal() {
  return (
    <div
      class={ModalStyles['modal']}
      role="dialog"
      aria-hidden="true">
    </div>
  )
}

export default Modal;