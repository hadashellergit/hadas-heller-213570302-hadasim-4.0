import React, { useState } from 'react';
import axios from 'axios';

const RegisterMemberForm = () => {
  const [formData, setFormData] = useState({
    id:'',
    first_name: '',
    last_name: '',
    city: '',
    street: '',
    street_number: '',
    birth_date: '',
    phone: '',
    mobile_phone: '',
    image_data: null // Assuming image will be handled separately
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(formData);
      await axios.post('http://localhost:3001/api/member/createMember', formData); // Change the URL as per your backend endpoint
      // Reset form after successful submission
      setFormData({
        id:'',
        first_name: '',
        last_name: '',
        city: '',
        street: '',
        street_number: '',
        birth_date: '',
        phone: '',
        mobile_phone: '',
        image_data: null
      });
      alert('Member registered successfully!');
    } catch (error) {
      console.error('Error registering member:', error);
      alert('An error occurred while registering member. Please try again.',error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="id" placeholder="id" value={formData.id} onChange={handleChange} />
      <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} />
      <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} />
      <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
      <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange} />
      <input type="text" name="street_number" placeholder="Street Number" value={formData.street_number} onChange={handleChange} />
      <input type="date" name="birth_date" placeholder="Birth Date" value={formData.birth_date} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input type="text" name="mobile_phone" placeholder="Mobile Phone" value={formData.mobile_phone} onChange={handleChange} />
      {/* Handling image upload is a bit more complex, so it's not included in this basic example */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterMemberForm;
