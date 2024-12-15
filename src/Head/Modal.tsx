import React from "react";
import "./Modal.css"; // 스타일 파일을 추가할 수 있습니다.

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

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
