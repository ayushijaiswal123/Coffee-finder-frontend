// src/Modal.js
import React from "react";
import "./modal.css"; // Create a CSS file for your modal styles

const Modal = ({ showModal, onClose }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        hiii
      </div>
    </div>
  );
};

export default Modal;