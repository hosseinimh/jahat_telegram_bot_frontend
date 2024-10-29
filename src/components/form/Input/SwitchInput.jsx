import React, { useState, useEffect, useRef } from "react";
import { Controller } from "react-hook-form";
import Switch from "react-switch";

import { MESSAGE_TYPES } from "../../../types";
import utils from "../../../utils";
import { useAppContext } from "../../../store";

const SwitchInput = ({
  field,
  useForm,
  strings = null,
  showLabel = true,
  containerClassName = "my-4",
  inputContainerClassName = "",
  required = false,
  onChange = null,
}) => {
  const {
    state: { layoutState, pageState, messageState },
  } = useAppContext();
  const [label, setLabel] = useState(
    strings && field in strings ? strings[field] : ""
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
    }

    if (!useForm) {
      setForm(pageState?.useForm);
    }
  }, [pageState]);

  const renderControlledInput = (field) => {
    return (
      <>
        <div className="w-full flex flex-row justify-start items-center px-2">
          <span className={`${field.value ? "text-subline" : "text-deactive"}`}>
            {field.value && general.on}
            {!field.value && general.off}
          </span>
        </div>
        <Switch
          id={field.name}
          {...field}
          disabled={layoutState?.loading}
          checked={field.value ?? false}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#d6eefe"
          offColor="#e6e6e6"
          onHandleColor="#0097fb"
          offHandleColor="#bfbfbf"
          height={16}
          width={34}
          onChange={(value) => {
            form.setValue(field.name, value);

            if (onChange) {
              onChange(value);
            }
          }}
        />
      </>
    );
  };

  const renderUncontrolledInput = (field) => {
    return (
      <>
        <div className="w-full flex flex-row justify-start items-center px-2">
          <span className={`${field.value ? "text-subline" : "text-deactive"}`}>
            {field.value && general.on}
            {!field.value && general.off}
          </span>
        </div>
        <Switch
          id={field}
          disabled={layoutState?.loading}
          checked={field.value ?? false}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#d6eefe"
          offColor="#e6e6e6"
          onHandleColor="#0097fb"
          offHandleColor="#bfbfbf"
          height={16}
          width={34}
          onChange={(value) => {
            form.setValue(field.name, value);

            if (onChange) {
              onChange(value);
            }
          }}
        />
      </>
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
        className={`rounded-lg text-subline leading-12 text-base px-2 py-2 h-12 flex flex-row gap-2 bg-bg justify-between items-center ${inputContainerClassName} ${
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

export default SwitchInput;
