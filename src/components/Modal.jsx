import { locales } from '../locales';
import ModalStyles from './Modal.module.css';

function Modal({children}) {
  return (
    <div
      class={ModalStyles['modal']}
      role="dialog"
      aria-hidden="false">
        <div class={ModalStyles['modal-content']}>
          <div class={ModalStyles['modal-content-header']}>
            <h2>{locales.addTask}</h2>
            <button>
              <img src="/icons/icon-close.svg" alt={locales.closeIcon} />
            </button>
          </div>
          {children}
        </div>
    </div>
  )
}

export default Modal;