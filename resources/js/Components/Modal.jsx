import React from "react";
import { Form } from "@inertiajs/react";

export default function Modal({ show, method, onSuccess, action, children, onClose }) {

  if (!show) return null;

  return (
    <Form
      method={method}
      action={action}
      onSuccess={onSuccess}
      options={{ preserveScroll: true }}
      className={`modal twm-model-popup d-flex ${show ? "show" : ""}`}
    >

      {/* Modal dialog */}
      <div className="modal-dialog">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </Form>
  );
}
