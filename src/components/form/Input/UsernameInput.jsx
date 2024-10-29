import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

import { MESSAGE_TYPES } from "../../../types/messageTypes";
import { useAppContext } from "../../../store/AppContext";
import { usernameRegex } from "../../../utils/regex";
import utils from "../../../utils";
import { clearMessageAction } from "../../../store/dispatchers";

const UsernameInput = ({
  field,
  value = null,
  useForm,
  strings = null,
  endComponent = null,
  inputStyle = {},
  defaultValue = "",
  showLabel = true,
  textAlign = "",
  direction = undefined,
  readOnly = false,
  containerClassName = "my-4",
  inputContainerClassName = "",
  inputClassName = "",
  prefix = "",
  innerRef = null,
  required = false,
  loading = undefined,
  onChange = null,
}) => {
  const {
    state: { layoutState, messageState, pageState },
    dispatch,
  } = useAppContext();
  const [label, setLabel] = useState(
    strings && field in strings ? strings[field] : ""
  );
  const [placeholder, setPlaceholder] = useState(
    strings && `${field}Placeholder` in strings
      ? strings[`${field}Placeholder`]
      : ""
  );
  const [hint, setHint] = useState(
    strings && `${field}Hint` in strings ? strings[`${field}Hint`] : null
  );
  const [form, setForm] = useState(useForm);
  const { validation } = utils.getLSLocale();

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
      setHint(
        pageState?.strings && `${field}Hint` in pageState.strings
          ? pageState.strings[`${field}Hint`]
          : null
      );
    }

    if (!useForm) {
      setForm(pageState?.useForm);
    }
  }, [pageState]);

  useEffect(() => {
    if (form && value) {
      form?.setValue(field, value);
    }

    if (!form && value) {
      document.querySelector(`#${field}`).value = value;
    }
  }, [form]);

  const handleChange = (e) => {
    if (
      !usernameRegex.test(e.target.value) &&
      (e.target.value !== "" || required)
    ) {
      utils.showFieldErrorMessage(
        dispatch,
        validation.validMessage.replace(":field", label),
        field
      );
    } else {
      clearMessageAction()(dispatch);
    }

    form?.setValue(field, utils.fa2enDigits(e.target.value));

    if (onChange) {
      onChange(form?.getValues(field));
    }
  };

  const renderControlledInput = (field) => {
    let style;
    if (textAlign === "left") {
      style = { ...inputStyle, textAlign, direction: direction ?? "ltr" };
    } else if (textAlign === "right") {
      style = { ...inputStyle, textAlign, direction: direction ?? "rtl" };
    } else {
      style = { ...inputStyle };
    }

    if (prefix !== "") {
      style = { ...style, paddingLeft: "4rem" };
    }

    return (
      <>
        <input
          id={field.name}
          {...field}
          placeholder={placeholder}
          disabled={loading ?? layoutState?.loading}
          className={`w-full ${inputClassName}`}
          style={{ ...style }}
          autoComplete="false"
          readOnly={readOnly}
          ref={innerRef}
          onChange={handleChange}
        />
        {prefix !== "" && <span>{prefix}</span>}
      </>
    );
  };

  const renderUncontrolledInput = (field) => {
    let style;
    if (textAlign === "left") {
      style = { ...inputStyle, textAlign, direction: direction ?? "ltr" };
    } else if (textAlign === "right") {
      style = { ...inputStyle, textAlign, direction: direction ?? "rtl" };
    } else {
      style = { ...inputStyle };
    }

    return (
      <input
        id={field}
        placeholder={placeholder}
        disabled={loading ?? (layoutState?.loading || readOnly)}
        className={`w-full ${inputClassName}`}
        style={{ ...style }}
        autoComplete="false"
        ref={innerRef}
        onChange={handleChange}
      />
    );
  };

  const renderItem = () => (
    <div className={containerClassName}>
      <div className="flex flex-row gap-1">
        {showLabel && (
          <label htmlFor={field} className="block text-xs text-subline mb-2">
            {label}
          </label>
        )}
        {required && <span className="text-warning -mt-2">*</span>}
      </div>
      <div
        className={`rounded-lg text-subline leading-12 border text-base px-2 flex flex-row gap-2 justify-between items-center ${inputContainerClassName} ${
          messageState?.messageField === field &&
          messageState?.messageType === MESSAGE_TYPES.ERROR
            ? "border-warning"
            : "border-border-line"
        }`}
      >
        {form && (
          <>
            <Controller
              render={({ field }) => renderControlledInput(field)}
              name={field}
              control={form?.control}
              defaultValue={defaultValue}
            />
            {endComponent && endComponent()}
          </>
        )}
        {!form && renderUncontrolledInput(field)}
      </div>
      {hint && <div className="text-deactive text-xs mt-2">{hint}</div>}
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

export default UsernameInput;
