import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import '../style/graphCount.css'

const UnVaccinatedMembers = () => {
    const [count, setCount] = useState(0); // Initialize count with 0
    const [memberCount, setMemberCount] = useState(0); // Initialize memberCount with 0

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/vaccinations/unVaccinatedMembersCounter');
                setCount(response.data); // Set count with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchMemberCount = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/member/getAllMembers');
                setMemberCount(response.data.length); // Set memberCount with fetched data length
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
        fetchMemberCount();
    }, []);

    const data = {
        labels: ['Unvaccinated', 'Vaccinated'],
        datasets: [
            {
                data: [count, memberCount],
                backgroundColor: [
                    'orange', // Color for unvaccinated
                    'blue', // Color for vaccinated
                ],
            },
        ],
    };

    const options = {
        legend: {
            display: false, // Hide legend
        },
    };

    return (
        <div className='chat-div'>
           
            <Pie data={data} options={options} width={400} height={400} />
            
        </div>
    );
};

export default UnVaccinatedMembers;
