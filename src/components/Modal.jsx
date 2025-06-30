import ModalStyles from './Modal.module.css';

function Modal({children}) {
  return (
    <div
      class={ModalStyles['modal']}
      role="dialog"
      aria-hidden="false">
        {children}
    </div>
  )
}

export default Modal;