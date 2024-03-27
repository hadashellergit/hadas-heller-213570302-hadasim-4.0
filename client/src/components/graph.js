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
                //fetch an object that contains the list of the past 30 days and how many members were sick
                const response = await axios.get('http://localhost:3001/api/corona/getCoronaChartData');
                //set data to be the fetched object
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log('bebkebke', chartData); 
    }, [data]);

    // constructing the chart data object
    const chartData = {
        labels: data.map(item => new Date(item.date)),       
        datasets: [
            {
                label: "First dataset",
                data: data.map(item => item.sick_members_count),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    };

    //line properties ect
    const options = {
        scales: {
            x: {
                type: 'time', 
                time: {
                    unit: 'day' 
                }
            },
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div>
            <h3>30 days sick member count</h3>
            <Line data={chartData} options={options} />           
        </div>
    );
};
 export default Graph