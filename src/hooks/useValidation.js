import React from "react";

function useValidation() {
  const [formValues, setFormValues] = React.useState({});
  const [formErrors, setFormErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState(false);

  const handleFormChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: e.target.validationMessage });
    setIsFormValid(e.target.closest("form").checkValidity());
  };

  const resetForm = React.useCallback(
    (newFormValues = {}, newFormErrors = {}, newIsFormValid = false) => {
      setFormValues(newFormValues);
      setFormErrors(newFormErrors);
      setIsFormValid(newIsFormValid);
    },
    [setFormValues, setFormErrors, setIsFormValid]
  );

  return {
    formValues,
    handleFormChange,
    formErrors,
    isFormValid,
    setIsFormValid,
    resetForm,
  };
}
export default useValidation;
