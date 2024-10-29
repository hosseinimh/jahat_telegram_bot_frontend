import React, { useEffect, useState } from "react";

import { ModalLayout } from "..";
import { MODAL_RESULT } from "../../types";
import { useAppContext } from "../../store";
import { setShownModalAction } from "../../store/dispatchers";

const Modal = ({
  children,
  id,
  onClose = null,
  modalResult = MODAL_RESULT.NONE,
}) => {
  const {
    state: { layoutState },
    dispatch,
  } = useAppContext();
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    if (layoutState?.shownModal?.modal === id) {
      showModal();
    } else if (!layoutState?.shownModal?.modal) {
      hideModal();
    }
  }, [layoutState?.shownModal?.modal]);

  useEffect(() => {
    if (
      layoutState?.shownModal?.modal === id &&
      [MODAL_RESULT.OK, MODAL_RESULT.CANCEL, MODAL_RESULT.CLOSE].includes(
        modalResult
      )
    ) {
      hideModal();
    }
  }, [result]);

  const showModal = () => {
    const element = document.querySelector(`#${id}`);
    setShownModalAction(id, layoutState?.shownModal?.props)(dispatch);
    element.firstChild.firstChild.style.opacity = 1;

    setTimeout(() => {
      element.parentElement.classList.add("block");
      element.parentElement.classList.remove("hidden");
    }, 150);

    setTimeout(() => {
      if (element.id !== "filter-modal") {
        element.firstChild.firstChild.style.transform = "scale(1)";
        element.firstChild.firstChild.style.filter = "blur(0px)";
      }
    }, 200);
  };

  const hideModal = () => {
    const element = document.querySelector(`#${id}`);
    element.firstChild.firstChild.style.opacity = 0;

    if (element.id !== "filter-modal") {
      element.firstChild.firstChild.style.transform = "scale(0.75)";
      element.firstChild.firstChild.style.filter = "blur(1px)";
    }

    setTimeout(() => {
      element.parentElement.classList.remove("block");
      element.parentElement.classList.add("hidden");

      if (layoutState?.shownModal) {
        setShownModalAction(null)(dispatch);
      }

      if (typeof onClose === "function") {
        onClose();
      }
    }, 100);
  };

  return (
    <ModalLayout>
      <div id={id} className="h-screen">
        {children}
      </div>
    </ModalLayout>
  );
};

export default Modal;
