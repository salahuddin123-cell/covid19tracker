import React,{useState,useEffect} from 'react'
import { fetchDailyData } from '../api'
import { Line,Bar} from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);
const Chart = ({country,data}) => {
    const [dailyData,setDailyData]=useState([]);
    useEffect(() => {
    const fetchAPi=async()=>{
        const data=await fetchDailyData()
        
        setDailyData(data)
    }
    fetchAPi();
    },[])
    const lineChart=(
        dailyData[0] ? (
            <Line
              data={{
                labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                datasets: [{
                  data: dailyData.map((data) => data.confirmed),
                  label: 'Infected',
                  borderColor: '#3333ff',
                  fill: true,
                }, {
                  data: dailyData.map((data) => data.deaths),
                  label: 'Deaths',
                  borderColor: 'red',
                  backgroundColor: 'rgba(255, 0, 0, 0.5)',
                  fill: true,
                },  
                ],
              }}
            />
          ) : null
    )
    const barChart = (
        data.confirmed ? (
          <Bar
            data={{
              labels: ['Infected', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  data: [data.confirmed.value, data.deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        ) : null
      );
  return (
    <div className='container chart'>
        {country===''?lineChart:barChart}
    </div>
  )
}

export default Chart