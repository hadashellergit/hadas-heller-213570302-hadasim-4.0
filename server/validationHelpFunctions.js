//a generic validation function to any form
const validateForm = (formData, requiredFields) => {
  
  const errors = {};

  requiredFields.forEach(field => {
    if (!formData[field]) {
      errors[field] = 'this field is required';
    }
  });
  return errors;
};

module.exports = {
  validateForm
};
