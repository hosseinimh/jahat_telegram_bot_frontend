import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { slideUp } from "es6-slide-up-down";

import { useAppContext } from "../../store";
import {
  setDropDownElementAction,
  setShownModalAction,
} from "../../store/dispatchers";
import { useMessage } from "../../hooks";
import { ENV } from "../../config";
import { LOCALES } from "../../types";
import utils from "../../utils";

const Layout = ({ children, className }) => {
  const {
    state: { layoutState, messageState },
    dispatch,
  } = useAppContext();
  const { general } = utils.getLSLocale();

  useMessage();

  useEffect(() => {
    const company = utils.getLSVariable("company");

    if (company?.length > 0) {
      window.document.title =
        company?.length > 0
          ? `${general._title} - ${company}`
          : (window.document.title = general._title);
    }
  }, []);

  useEffect(() => {
    if (messageState?.message && messageState?.messageField) {
      document.querySelector(`#${messageState?.messageField}`)?.focus();
    }
  }, [messageState?.message]);

  const onAppContainerClick = (e) => {
    onToggleDropDowns(e);
    onToggleModal(e);
  };

  const onToggleDropDowns = (e) => {
    let element = e.target;
    let clickedOnDropDown = false;

    while (element.parentNode) {
      if (element.classList.contains("dropdown-list")) {
        clickedOnDropDown = true;
        break;
      }

      element = element.parentNode;
    }

    if (!clickedOnDropDown && layoutState?.dropDownElement) {
      slideUp(layoutState.dropDownElement);
      document.querySelector("#account-drop-icon").classList.remove("arrow-up");
      setDropDownElementAction(null)(dispatch);
    }
  };

  const onToggleModal = (e) => {
    if (!layoutState?.shownModal) {
      return;
    }

    let element = e.target;
    let clickedOnModal = false;

    while (element.parentNode) {
      if (element.classList.contains("modal")) {
        clickedOnModal = true;
        break;
      }

      element = element.parentNode;
    }

    if (!clickedOnModal && layoutState?.shownModal) {
      setShownModalAction(null)(dispatch);
    }
  };

  return (
    <>
      <div
        className={`flex min-h-screen ${className}`}
        onClick={(e) => onAppContainerClick(e)}
      >
        {children}
      </div>
      <Toaster
        expand={true}
        dir={ENV.locale === LOCALES.FA_IR ? "rtl" : "ltr"}
      />
    </>
  );
};

export default Layout;
