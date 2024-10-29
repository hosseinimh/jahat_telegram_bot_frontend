import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

import utils from "../../../utils";
import { useAppContext } from "../../../store";

const SelectPage = ({
  field,
  options = [],
  defaultValue,
  useForm,
  inputClassName = "bg-transparent",
  onChange = null,
}) => {
  const {
    state: { layoutState, pageState },
  } = useAppContext();
  const [form, setForm] = useState(useForm);

  useEffect(() => {
    if (!useForm) {
      setForm(pageState?.useForm);
    }
  }, [pageState]);

  useEffect(() => {
    if (form && defaultValue) {
      form?.setValue(field, defaultValue);
    }

    if (!form && defaultValue) {
      document.querySelector(`#${field}`).value = defaultValue;
    }

    if (form?.getValues(field) === "") {
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
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {utils.localeDigits(option.text)}
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
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {utils.localeDigits(option.text)}
        </option>
      ))}
    </select>
  );

  const renderItem = () => {
    if (form) {
      return (
        <Controller
          render={({ field }) => renderControlledInput(field)}
          name={field}
          control={form?.control}
        />
      );
    }

    return renderUncontrolledInput(field);
  };

  return (
    <div className="border border-border-line rounded p-1">{renderItem()}</div>
  );
};

export default SelectPage;
