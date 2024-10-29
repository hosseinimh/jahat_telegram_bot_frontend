import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";

import { MESSAGE_TYPES } from "../../../types";
import utils from "../../../utils";
import { useAppContext } from "../../../store";
import { SvgPath } from "../../svg";

const AsyncSelectInput = ({
  field,
  useForm,
  strings,
  containerClassName = "my-4",
  inputContainerClassName = "",
  showLabel = true,
  loadOptions,
  onInputChange,
  onChange,
  isMulti = true,
  defaultOptions = [],
  value = [],
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
  const [items, setItems] = useState([]);
  const { general } = utils.getLSLocale();

  useEffect(() => {
    document.querySelector(".css-g56vrd-indicatorContainer").innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" class="icon-complex"><path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16ZM19 19l-4.35-4.35" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>';
  }, []);

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

  const handleInputChange = (value) => {
    if (onInputChange) {
      onInputChange(value);
    }
  };

  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

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
          <AsyncSelect
            cacheOptions
            defaultOptions={defaultOptions}
            loadOptions={loadOptions}
            placeholder={placeholder}
            disabled={layoutState?.loading}
            unstyled={true}
            className="react-select-container"
            classNamePrefix="react-select"
            onInputChange={handleInputChange}
            onChange={handleChange}
            noOptionsMessage={() => general.noData}
            isMulti={isMulti}
            controlShouldRenderValue={false}
            value={value}
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

export default AsyncSelectInput;
