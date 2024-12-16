import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './CustomDialog.css';

const Dialog = forwardRef(({ isModal, children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  // Exposes open() and close() functions to control the ref from outside
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (!isOpen) return null;

  return (
    <div className={`dialog-container ${isModal ? 'modal' : ''}`}>
      <div className="dialog-content">
        <button className="dialog-close" onClick={() => setIsOpen(false)}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
});

export default Dialog;
