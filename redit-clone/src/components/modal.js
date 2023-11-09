import React from "react";
import style from "./modal.css";

export default function Modal({ open, children }) {
  if (!open) return null;

  return (
    <>
      <div className="modal-open">{children}</div>
    </>
  );
}
