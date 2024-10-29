import React from "react";

import { Modal } from "..";
import Svg, { SvgPath } from "../svg";
import { useAppContext } from "../../store";
import { setShownModalAction } from "../../store/dispatchers";
import { MODAL_RESULT } from "../../types";

const PromptModal = ({
  id = "prompt-modal",
  children,
  strings,
  renderFooter = null,
  onCancel,
  containerClassName = "",
  loading = undefined,
  onClose = null,
}) => {
  const { dispatch } = useAppContext();

  const cancelModal = () => {
    if (onCancel) {
      onCancel();
    }

    setShownModalAction(null)(dispatch);
  };

  return (
    <Modal id={id} onClose={onClose}>
      <div className="flex flex-col justify-center items-center h-full">
        <div
          className={`bg-white w-1/3 modal transition-all opacity-0 flex flex-col justify-between rounded ${containerClassName}`}
        >
          <div className="flex flex-row justify-between items-center px-4 py-3 border-b border-border-line">
            <span className="text-subline">{strings._title}</span>
            <div
              className="link-container cursor-pointer"
              onClick={() => {
                !loading && cancelModal();
              }}
            >
              <Svg
                SvgPath={<SvgPath.SvgClose pathClassName={"fill-subline"} />}
                width="24"
                height="24"
              />
            </div>
          </div>
          <div className="flex-1">{children}</div>
          {renderFooter && (
            <div className="p-4 border-t border-border-line">
              {renderFooter()}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default PromptModal;
