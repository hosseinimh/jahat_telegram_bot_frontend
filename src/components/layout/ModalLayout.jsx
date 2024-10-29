import React from "react";

const ModalLayout = ({ children }) => (
  <div
    className={`w-screen min-h-full bg-modal absolute top-0 left-0 z-50 hidden transition-all`}
  >
    {children}
  </div>
);

export default ModalLayout;
