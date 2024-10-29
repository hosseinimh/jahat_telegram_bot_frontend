import React, { useState, useEffect } from "react";

import { useAppContext } from "../../../store";

const FileInput = ({
  field,
  accept = "*",
  onChangeFile,
  useForm,
  inputStyle = {},
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

  const renderItem = () => (
    <input
      type="file"
      {...form?.register(`${field}`)}
      id={field}
      disabled={layoutState?.loading}
      accept={accept}
      onChange={(e) => onChangeFile(e)}
      style={{ ...inputStyle }}
      data-show-message={false}
    />
  );

  return renderItem();
};

export default FileInput;
