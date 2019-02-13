import React from 'react';

// import { Container } from './styles';

const Modal = ({ children }) => (
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-content">{children}</div>
  </div>
);

export default Modal;
