// In validationHelpFunctions.js
const axios = require('axios'); // Import Axios for making HTTP requests

const validateForm = async (formData, requiredFields) => {
  const errors = {};
  
  // Validation for required fields
  requiredFields.forEach(field => {
    if (!formData[field]) {
      errors[field] = 'this field is required';
    }
  });
  console.log(formData.id);

  // Validation for ID field (9 digits)
  if (formData.id && !/^\d{9}$/.test(formData.id)) {
    console.log("in validation");
    errors.id = 'ID must be a 9-digit number';
  }
  console.log(formData.phone);
  console.log(formData.mobile_phone);
  // Validation for phone and mobile_phone (Israeli phone numbers)
  const isIsraeliPhone = /^\d{10}$/;; // Israeli phone number format
  if (formData.phone && !isIsraeliPhone.test(formData.phone)) {
    errors.phone = 'Invalid Israeli phone number format';
  }
  if (formData.mobile_phone && !isIsraeliPhone.test(formData.mobile_phone)) {
    errors.mobile_phone = 'Invalid Israeli mobile phone number format';
  }

  // Validation for city and street using Google Maps API
  /*
  if (formData.city && formData.street) {
    try {
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(formData.street + ', ' + formData.city)}&key=YOUR_GOOGLE_MAPS_API_KEY`);
      const { status, results } = response.data;
      if (status === 'OK' && results.length > 0) {
        // City and street combination is valid
      } else {
        errors.city_street = 'invalid city and street combination';
      }
    } catch (error) {
      console.error('Error validating city and street:', error);
      errors.city_street = 'Error validating city and street';
    }
    
  }
*/
console.log(errors);
  return errors;
};

module.exports = {
  validateForm
};
