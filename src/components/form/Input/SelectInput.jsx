import React, { useState, useEffect } from "react";
import Select from "react-select";

import { MESSAGE_TYPES } from "../../../types";
import utils from "../../../utils";
import { useAppContext } from "../../../store";

const SelectInput = ({
  field,
  useForm,
  strings,
  containerClassName = "my-4",
  inputContainerClassName = "",
  showLabel = true,
  options = {},
  isMulti = true,
}) => {
  const {
    state: { layoutState, pageState, messageState },
  } = useAppContext();
  const [label, setLabel] = useState(
    strings && field in strings ? strings[field] : ""
  );
  const [placeholder, setPlaceholder] = useState(
    strings && `${field}Placeholder` in strings
      ? strings[`${field}Placeholder`]
      : ""
  );
  const [form, setForm] = useState(useForm);
  const { general } = utils.getLSLocale();

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

  const renderItem = () => {
    return (
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
          <Select
            options={options}
            isMulti={isMulti}
            placeholder={placeholder}
            disabled={layoutState?.loading}
            unstyled={true}
            className="react-select-container"
            classNamePrefix="react-select"
            onChange={(selectedOption) => {
              form.setValue(
                field,
                selectedOption?.map((option) => option.value)
              );
            }}
            noOptionsMessage={() => general.noData}
          />
        </div>
        {messageState?.messageField === field &&
          messageState?.messageType === MESSAGE_TYPES.ERROR && (
            <div className="text-warning text-xs mt-2">
              {messageState?.message}
            </div>
          )}
      </div>
    );
  };

  return renderItem();
};

export default SelectInput;
