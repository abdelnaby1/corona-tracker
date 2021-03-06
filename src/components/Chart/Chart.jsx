import React,{useState,useEffect} from 'react'
import {fetchDailyData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import './Chart.css'
const Chart = ({data,country}) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        // console.log(dailyData);
        fetchAPI();
        
    },[])
    console.log(data);
    const lineChart = (
        dailyData.length !== 0
            ? (
        <Line 
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data: dailyData.map(({confirmed})=>confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true
                },{
                    data: dailyData.map(({deaths})=>deaths),
                    label: 'Deahts',
                    borderColor:'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',

                },]
            }}
        />):
        null
    )
    const barChart = (
        data.confirmed 
            ? (
                <Bar
                    data={{
                        labels:['Infected','Recovered',"Deaths"],
                        datasets:[{
                            label:'People',
                            backgroundColor:['rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                        ],
                        data:[
                            data.confirmed.value,data.recovered.value,data.deaths.value
                        ]
                        }]
                    }} 
                    options={{
                        legend: {display: false},
                        title:{display: true,text:`Current state in ${country}`}
                    }}
                />
            ):
            null
    )
    return (
        <div className="contrainer">
            {country && country!=='global' ? barChart : lineChart}
        </div>
    )
}

export default Chart
