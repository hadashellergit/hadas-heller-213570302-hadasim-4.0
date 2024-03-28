import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns'; // Import date-fns adapter for Chart.js
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import '../style/graphCount.css';


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

    const chartData = {
        labels: data.map(item => new Date(item.date)),       
        datasets: [
            {
                data: data.map(item => item.sick_members_count),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    };

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
        <div className="graph-container">
            <h3 className="graph-title">30 days sick member count</h3>
            <div className="graph-section">
                <Line data={chartData} options={options} className="graph-canvas" />  
            </div>         
        </div>
    );
};

export default Graph;
