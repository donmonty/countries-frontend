import React from "react";
import { useFormikContext } from "formik";

import TextInput from "./TextInput";
//import ErrorMessage from "./ErrorMessage";

function FormField({ name, ...otherProps }) {
  const {
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();

  return (
    <>
      <TextInput
        onChange={(text) => setFieldValue(name, text)}
        value={values[name]}
        {...otherProps}
      />
      {/* <ErrorMessage error={errors[name]} visible={touched[name]} /> */}
    </>
  );
}

export default FormField;