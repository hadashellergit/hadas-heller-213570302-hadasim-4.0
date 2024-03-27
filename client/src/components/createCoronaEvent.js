import React, { useState } from 'react';
import axios from 'axios';
//import './styles.css'; // Import the CSS file
import '../style/tableStyle.css';
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
      await axios.post('http://localhost:3001/api/corona/coronaEvent', formData); // Change the URL as per your backend endpoint
      // Reset form after successful submission
      setFormData({
        member_id:'',
        positive_test_date: '',
        recovery_date: '',
      });
      alert('Event created successfully!');
    } catch (error) {
        setFormData({
            member_id:'',
            positive_test_date: '',
            recovery_date: '',
          });
      console.error('Error creating event:', error);
      alert('An error occurred creating event. Please try again.',error);

      
    }
 
  };

  return (
    <div className="app-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" className="input-field" name="member_id" placeholder="ID" value={formData.id} onChange={handleChange} />
        <input type="date" className="input-field" name="positive_test_date" placeholder="Positive Test Date" value={formData.positive_test_date} onChange={handleChange} />
        <input type="date" className="input-field" name="recovery_date" placeholder="Recovery Date" value={formData.recovery_date} onChange={handleChange} />
        <button type="submit" className="submit-button">Create</button>
      </form>
    </div>
  );
};

export default CreateCoronaEvent;
