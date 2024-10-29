import { useEffect, useState } from "react";
import { toast } from "sonner";

import { MESSAGE_TYPES } from "../types";
import { useAppContext } from "../store";
import { clearMessageAction } from "../store/dispatchers";

const useMessage = () => {
  const {
    state: { messageState },
    dispatch,
  } = useAppContext();
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(MESSAGE_TYPES.NONE);
  const duration = 3000;

  useEffect(() => {
    if (
      messageState?.messageType === MESSAGE_TYPES.ERROR ||
      messageState?.messageType === MESSAGE_TYPES.SUCCESS
    ) {
      try {
        if (messageState?.message) {
          const field = document.querySelector(
            `#${messageState?.messageField}`
          );

          if (
            !messageState?.messageField ||
            !field ||
            field?.getAttribute("data-show-message") === "false"
          ) {
            setMessage(messageState.message);
            setType(messageState.messageType);
          }
        }
      } catch {}
    } else {
      setMessage(null);
      setType(MESSAGE_TYPES.NONE);
    }
  }, [messageState]);

  useEffect(() => {
    if (
      message &&
      (type === MESSAGE_TYPES.ERROR || type === MESSAGE_TYPES.SUCCESS)
    ) {
      const options = {
        duration,
        classNames: {
          toast: `toast-${type}`,
          title: `toast-text-${type} font-medium`,
        },
      };

      window.scrollTo(0, 0);
      messageState?.messageType === MESSAGE_TYPES.ERROR
        ? toast.error(message, options)
        : toast.success(message, options);
      clearMessageAction()(dispatch);
    }
  }, [message, type]);
};

export default useMessage;
