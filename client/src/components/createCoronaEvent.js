import React, { useState } from 'react';
import axios from 'axios';
import '../style/corona.css'

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
      //send http to posst coronadata in table
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
    <div className="app-container2">
      <form className="form-container2" onSubmit={handleSubmit}>
        <form>
  <div className="form-group2">
    <label htmlFor="member_id">ID:</label>
    <input
      type="text"
      className="input-field2"
      id="member_id"
      name="member_id"
      value={formData.id}
      onChange={handleChange}
    />
  </div>
  <div className="form-group2">
    <label htmlFor="positive_test_date">Positive Test Date:</label>
    <input
      type="date"
      className="input-field2"
      id="positive_test_date"
      name="positive_test_date"
      value={formData.positive_test_date}
      onChange={handleChange}
    />
  </div>
  <div className="form-group2">
    <label htmlFor="recovery_date2">Recovery Date:</label>
    <input
      type="date"
      className="input-field2"
      id="recovery_date"
      name="recovery_date"
      value={formData.recovery_date}
      onChange={handleChange}
    />
  </div>
</form>

        <button type="submit" className="submit-button2">Create corona event</button>
      </form>
    </div>
  );
};

export default CreateCoronaEvent;
