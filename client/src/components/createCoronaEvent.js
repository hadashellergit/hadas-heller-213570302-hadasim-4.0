import React, { useState } from 'react';
import axios from 'axios';

const CreateCoronaEvent = () => {
  const [formData, setFormData] = useState({
    member_id:'',
    positive_test_date: '',
    recovery_date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //send http to posst corona data in table
      await axios.post('http://localhost:3001/api/corona/coronaEvent', formData); 
      alert('Event created successfully!');
    } catch (error) {
        setFormData({
            member_id:'',
            positive_test_date: '',
            recovery_date: '',
          });
      console.error('Error creating event:', error);
      console.log(error);
      alert(error.response.data.error || 'An error occurred');
    }
    //empty form fields
    setFormData({
      member_id:'',
      positive_test_date: '',
      recovery_date: '',
    });
 
  };

  return (
    <div className="app-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <form>
  <div className="form-group">
    <label htmlFor="member_id">ID:</label>
    <input
      type="text"
      className="input-field"
      id="member_id"
      name="member_id"
      value={formData.id}
      onChange={handleChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="positive_test_date">Positive Test Date:</label>
    <input
      type="date"
      className="input-field"
      id="positive_test_date"
      name="positive_test_date"
      value={formData.positive_test_date}
      onChange={handleChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="recovery_date">Recovery Date:</label>
    <input
      type="date"
      className="input-field"
      id="recovery_date"
      name="recovery_date"
      value={formData.recovery_date}
      onChange={handleChange}
    />
  </div>
</form>

        <button type="submit" className="submit-button">Create</button>
      </form>
    </div>
  );
};

export default CreateCoronaEvent;
