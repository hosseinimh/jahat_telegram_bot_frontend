import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

import { MESSAGE_TYPES } from "../../../types";
import { useAppContext } from "../../../store";

const Select = ({
  field,
  options = [],
  defaultValue,
  useForm,
  strings = null,
  showLabel = true,
  containerClassName = "my-4",
  inputContainerClassName = "",
  inputClassName = "",
  onChange = null,
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

  useEffect(() => {
    form?.setValue(field, "");
  }, [options]);

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
    if (form?.getValues(field) === "" || form?.getValues(field) === undefined) {
      document.querySelector(`#${field}`).classList.add("text-deactive");
      document.querySelector(`#${field}`).classList.remove("text-subline");
    } else {
      document.querySelector(`#${field}`).classList.remove("text-deactive");
      document.querySelector(`#${field}`).classList.add("text-subline");
    }
  }, [form?.getValues(field)]);

  useEffect(() => {
    if (defaultValue) {
      document.querySelector(`#${field}`).value = defaultValue;
      onChangeValue({ target: document.querySelector(`#${field}`) });
    }

    if (form?.getValues(field) === "" || form?.getValues(field) === undefined) {
      document.querySelector(`#${field}`).classList.add("text-deactive");
      document.querySelector(`#${field}`).classList.remove("text-subline");
    } else {
      document.querySelector(`#${field}`).classList.remove("text-deactive");
      document.querySelector(`#${field}`).classList.add("text-subline");
    }
  }, [form, defaultValue]);

  const onChangeValue = (e) => {
    form?.setValue(field, e.target.value);
    e.target.classList.remove("text-deactive");
    e.target.classList.add("text-subline");

    if (onChange) {
      onChange(e);
    }
  };

  const renderControlledInput = (field) => (
    <select
      id={field.name}
      {...field}
      disabled={layoutState?.loading}
      className={`w-full ${inputClassName}`}
      defaultValue=""
      onChange={(e) => onChangeValue(e)}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );

  const renderUncontrolledInput = (field) => (
    <select
      id={field}
      disabled={layoutState?.loading}
      className={`w-full ${inputClassName}`}
      defaultValue=""
      onChange={(e) => onChangeValue(e)}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );

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
          <Controller
            render={({ field }) => renderControlledInput(field)}
            name={field}
            control={form?.control}
          />
        )}
        {!form && renderUncontrolledInput(field)}
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

export default Select;
