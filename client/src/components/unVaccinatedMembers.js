import React, { useState, useEffect } from 'react';
import axios from 'axios';



const UnVaccinatedMembers = () => {
    const [count, setCount] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response=await axios.get('http://localhost:3001/api/vaccinations/unVaccinatedMembersCounter')
                console.log(response.data)
                setCount(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>unVaccinated </h2>
            <div>{count}</div>
          
        </div>
    );
};

export default UnVaccinatedMembers;