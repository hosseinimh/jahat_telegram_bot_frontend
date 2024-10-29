import { useEffect } from "react";

import utils from "../utils";
import { useAppContext } from "../store";
import {
  changePageAction,
  clearMessageAction,
  setPagePropsAction,
} from "../store/dispatchers";

const usePage = (page, useForm = null, props = {}) => {
  const {
    state: { pageState },
    dispatch,
  } = useAppContext();
  const locale = utils.getLSLocale();
  const strings = page && page in locale ? locale[page] : null;

  useEffect(() => {
    if (props != {}) {
      setPagePropsAction(props)(dispatch);
    }

    clearMessageAction()(dispatch);
  }, []);

  useEffect(() => {
    changePageAction(page, strings, useForm)(dispatch);
  }, [useForm]);

  useEffect(() => {
    utils.onValidationError(pageState?.useForm, dispatch);
  }, [pageState?.useForm?.formState?.errors]);
};

export default usePage;
