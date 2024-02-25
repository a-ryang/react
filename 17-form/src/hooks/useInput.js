import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  const [enteredvalue, setEntereedValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valudIsInvalid = validationFn(enteredvalue);

  function handleInputChange(event) {
    setEntereedValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredvalue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valudIsInvalid,
  };
}
