import React, { useState } from 'react';
import axios from 'axios';
import '../style/register.css';

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
    image_data: null 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sent http with the form data to post a member
      await axios.post('http://localhost:3001/api/member/createMember', formData); 
      alert('Member registered successfully!');
    } catch (error) {
      console.error('Error registering member:', error);
      alert('An error occurred while registering member. Please try again.');
    }
    //set form fields
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
  };

  return (
    <div>
    <div className="register-container">
      <h5>Register Member</h5>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" placeholder="ID" value={formData.id} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" name="street" placeholder="Street" value={formData.street} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="street_number">Street Number:</label>
          <input type="text" id="street_number" name="street_number" placeholder="Street Number" value={formData.street_number} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="birth_date">Birth Date:</label>
          <input type="date" id="birth_date" name="birth_date" placeholder="Birth Date" value={formData.birth_date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile_phone">Mobile Phone:</label>
          <input
            type="tel"
            id="mobile_phone"
            name="mobile_phone"
            value={formData.mobile_phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='but'>Register</button>
      </form>
    </div>
    </div>
  );
};

export default RegisterMemberForm;
