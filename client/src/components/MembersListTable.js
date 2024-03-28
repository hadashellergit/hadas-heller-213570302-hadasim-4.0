import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/table.css';

const MemberListTable = () => {

  //the member list
  const [members, setMembers] = useState([]);
  const [file, setFile] = useState();
  
  //a bool variable to show post vaccination div
  const [showModal, setShowModal] = useState(false);

  //variables to post in vaccination table
  const [vaccination_date, setVaccinationDate] = useState('');
  const [vaccination_type, setVaccinationType] = useState('');
  const [member_id, setId] = useState('');

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/member/getAllMembers');
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching members:', error);
        alert('An error occurred while fetching members');
      }
    };

    fetchMembers();
  }, []);

  const uploadImage = async (memberId) => {
    try {
      //if file is empty 
      if (!file) {
        return alert('Please select an image to upload.');
      }

      const formData = new FormData();
      formData.append('image', file);
      formData.append('memberId', memberId);
      //send the img file to server
      const response = await axios.post('http://localhost:3001/api/member/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert(response.data.message);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('An error occurred while uploading the image');
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  //when clicked the relevent id will be stored and the post vaccination div will apeaer
  const handlePostVaccination = (memberId) => {
    setId(memberId);
    setShowModal(true);
  };

  const handleCreateVaccination = async (e) => {
    setShowModal(false);
    e.preventDefault();
    try {
      const vaccinData =  { member_id,vaccination_date, vaccination_type} ;
      await axios.post('http://localhost:3001/api/vaccinations/createVaccination', vaccinData); 
      alert('vacc post successfully!');
    } catch (error) {
      console.error('Error posting vacc:', error);
      alert('An error occurred while posting vacc. Please try again.',error);
    }
    setVaccinationDate('');
    setVaccinationType('');
  };

  return (
    <div className="member-list-container">
      
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setShowModal(false)}>X</span>
            <h5>Post Vaccination</h5>
            <label>
              Corona Vaccination Date:
              <input type="date" value={vaccination_date} onChange={(e) => setVaccinationDate(e.target.value)} />
            </label>
            <label>
              Vaccination Type:
              <input type="text" value={vaccination_type} onChange={(e) => setVaccinationType(e.target.value)} />
            </label>
            <button onClick={handleCreateVaccination}>Create</button>
          </div>
        </div>
      )}
      <h5 className="member-list-header">Member List</h5>
      <table className="member-table">
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Phone</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td><div className='pofile-img'>{member.image_data && <img src={`data:image/jpeg;base64,${member.image_data.toString('base64')}`} />}</div></td>
              <td>{member.first_name}</td>
              <td>{member.last_name}</td>
              <td>{member.mobile_phone}</td>
              <td>
                <input type="file" name="image" onChange={handleFileChange} />
              </td>
              <td>
                <button onClick={() => uploadImage(member.id)}>Upload Image</button>
              </td>
              <td>
                <button onClick={() => handlePostVaccination(member.id)}>Post Vaccination</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default MemberListTable;
