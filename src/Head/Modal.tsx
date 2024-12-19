import React from "react";
import "./Modal.css";
import Join from "./Join";

type ModalProps = {
  isOpen: number;
  onClose: () => void;
  children: React.ReactNode;
  openLogin: () => void;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  openLogin,
}) => {
  if (!isOpen) return null;
  if (isOpen === 2)
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <Join onClose={onClose} openLogin={openLogin} />
        </div>
      </div>
    );
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
