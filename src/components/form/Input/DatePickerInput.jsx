import React, { useState, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { MESSAGE_TYPES } from "../../../types";
import utils from "../../../utils";
import Svg, { SvgPath } from "../../svg";
import { useAppContext } from "../../../store";

const DatePickerInput = ({
  field,
  value = null,
  useForm,
  strings = null,
  showLabel = true,
  readOnly = false,
  inputContainerClassName,
  containerClassName = "my-4",
}) => {
  const {
    state: { layoutState, pageState, messageState },
  } = useAppContext();
  const [date, setDate] = useState();
  const [label, setLabel] = useState(
    strings && field in strings ? strings[field] : ""
  );
  const [placeholder, setPlaceholder] = useState(
    strings && `${field}Placeholder` in strings
      ? strings[`${field}Placeholder`]
      : ""
  );
  const [form, setForm] = useState(useForm);

  useEffect(() => {
    if (!strings) {
      setLabel(
        pageState?.strings && field in pageState.strings
          ? pageState?.strings[field]
          : ""
      );
      setPlaceholder(
        pageState?.strings && `${field}Placeholder` in pageState.strings
          ? pageState.strings[`${field}Placeholder`]
          : ""
      );
    }

    if (!useForm) {
      setForm(pageState?.useForm);
    }
  }, [pageState]);

  useEffect(() => {
    if (form && value) {
      form?.setValue(field, utils.localeDigits(value));
      setDate(value);
    }

    if (!form && value) {
      document.querySelector(`#${field}`).value = value;
      setDate(value);
    }
  }, [form]);

  useEffect(() => {
    if (form && date) {
      const parts = date.split("/");

      if (parts.length === 3 && parts[1].length === 1) {
        parts[1] = `0${parts[1]}`;
      }

      form?.setValue(field, utils.fa2enDigits(parts.join("/")));
    }
  }, [date]);

  useEffect(() => {
    if (form?.getValues(field)) {
      setDate(form?.getValues(field));
    }
  }, [form?.getValues(field)]);

  const renderItem = () => (
    <div className={containerClassName}>
      {showLabel && (
        <label htmlFor={field} className="block text-xs text-subline mb-2">
          {label}
        </label>
      )}
      <div
        className={`rounded-lg text-subline leading-12 border text-base px-2 ${inputContainerClassName} ${
          messageState?.messageField === field &&
          messageState?.messageType === MESSAGE_TYPES.ERROR
            ? "border-warning"
            : "border-border-line"
        }`}
      >
        {form && (
          <div className="flex flex-row gap-2 items-center">
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              placeholder={placeholder}
              calendarPosition="bottom-right"
              onChange={(e) => {
                setDate(e?.toString());
              }}
              id={field}
              value={form?.getValues(field)}
              disabled={layoutState?.loading || readOnly}
              containerClassName="border-0 flex-1"
              className="border-0"
              inputClass="border-0 w-full"
            />
            <Svg
              SvgPath={<SvgPath.SvgCalendar pathClassName={"fill-subline"} />}
              width="24"
              height="24"
              className="icon-complex"
              viewBox={"0 0 24 24"}
            />
          </div>
        )}
      </div>
      {messageState?.messageField === field &&
        messageState?.messageType === MESSAGE_TYPES.ERROR && (
          <div className="text-warning text-xs mt-2">
            {messageState?.message}
          </div>
        )}
    </div>
  );

  return renderItem();
};

export default DatePickerInput;
