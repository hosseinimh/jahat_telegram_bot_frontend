import React, { useState, useEffect } from "react";

import { MESSAGE_TYPES } from "../../../types";
import { useAppContext } from "../../../store";

const AlertState = () => {
  const {
    state: { messageState },
  } = useAppContext();
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(0);

  useEffect(() => {
    if (
      messageState?.messageType === MESSAGE_TYPES.ERROR ||
      messageState?.messageType === MESSAGE_TYPES.SUCCESS
    ) {
      try {
        if (messageState?.message) {
          if (
            !messageState?.messageField ||
            (messageState?.messageField &&
              !document.querySelector(`#${messageState?.messageField}`))
          ) {
            setMessage(messageState?.message);
            setType(messageState?.messageType);
          }
        }
      } catch {}
    } else {
      setMessage(null);
    }
  }, [messageState]);

  useEffect(() => {
    if (message) {
      window.scrollTo(0, 0);
    }
  }, [message]);

  if (message) {
    return (
      <div
        className={`w-full m-3 p-3 border rounded ${
          type === MESSAGE_TYPES.ERROR
            ? "border-warning bg-warning-light text-warning"
            : "border-success bg-success-light text-success"
        }`}
      >
        {message}
      </div>
    );
  }

  return <></>;
};

export default AlertState;
