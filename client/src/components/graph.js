import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns'; // Import date-fns adapter for Chart.js
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'


const Graph = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/corona/getCoronaChartData');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log('Data:', data); // Log the fetched data
        console.log('Chart Data:', chartData); // Log the constructed chart data
    }, [data]);

    // Constructing the chart data object
    const chartData = {
        labels: data.map(item => new Date(item.date)),       
        datasets: [
            {
                label: "First dataset",
                data: data.map(item => item.sick_members_count),
                //data:[1,2,5,4,6,5,3,2,4,5,6,7,8,9,8,7,6,5,4,3,2,3,4,5,6,1,7,6,5,4],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    };

    const options = {
        scales: {
            x: {
                type: 'time', // Use 'time' type for dates
                time: {
                    unit: 'day' // Set the time unit to 'day'
                }
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <h2>Sick Patients Count - Last 30 Days</h2>
            <Line data={chartData} options={options} />
            
        </div>
    );
};
 export default Graph