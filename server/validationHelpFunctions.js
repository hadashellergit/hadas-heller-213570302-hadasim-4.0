//a generic validation function to any form
const validateForm = (formData, requiredFields) => {
  
  const errors = {};

  requiredFields.forEach(field => {
    if (!formData[field]) {
      errors[field] = 'This field is required';
    }
  });

  // You can add additional validations here...

  return errors;
};

module.exports = {
  validateForm
};
