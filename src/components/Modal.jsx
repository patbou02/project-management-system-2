import { forwardRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
  return createPortal(<dialog>{children}</dialog>, document.querySelector('#modal-root'));
});

export default Modal;