import React from 'react';
import {Chart as ChartJS,LinearScale,Title,CategoryScale,BarElement,PointElement,LineElement,Legend,Tooltip,LineController,BarController,} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Graphline.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    BarController ,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Chart = () => {
const labels = ['W14', 'W15', 'W16', 'W17', 'W18', 'W19', 'W20', 'W21', 'W22', 'W23', 'W24', 'W25','W26', 'W27','W28','W29','W30','W31','W32','W33','W34','W35','W36','W37','W37'];

    return(
        <div>
            <h4 className='box'>Takeaway: Majority of Suscribers are gained in spike(viral) events that mostly occured in Apr-Jun'22</h4>
            <div style={{width:"1000px"}}>
            <Line
              data = {
                {
                    labels,
                    datasets: [
                      {
                        type: 'line',
                        label: 'sum of Net suscriber gained',
                        data: [168,441,361,2227,2456,5325,5441,4180,1669,498,100,401,3016,2021,401,654,957,768,862,1111,847,844,494,877,875],
                        borderColor: 'rgb(0,204,0)',
                        backgroundColor: 'rgb(0,204,0)',
                        PointElement: 'data',
                      
                      },
                      {
                        type: 'bar',
                        label: 'Sum of report suscribers',
                        backgroundColor: "rgb(153,255,153)",
                        data:[188,661,461,2427,2556,5375,5461,4280,1689,468,300,401,3116,2021,501,654,957,768,862,1111,1047,844,794,877,1075],
                        borderColor: 'white',
                        
                      },
                      {
                        type: 'bar',
                        label: 'Sum of report_suscribers',
                        
                        backgroundColor: 'rgb(255, 153,204)',
                        
                        data:[-188,-661,-461,-200,-200,-300,-546,-428,-168,-468,-300,-401,-311,-202,-501,-654,-957,-768,-862,-111,-104,-844,-794,-877,-75],
                        
                      },
                    ],
                  }
              }

              options = { {
                responsive: true,
                plugins: {
                  legend: {
                    position: "bottom",
                    align: "center"
                  },
                  title: {
                    display: true,
                    
                  },
                },
                scales:{
                    x:{
                        grid:{
                            display: false,
                        }
                    },

                    y:{
                        grid:{
                            display: false,
                        }
                    }
                }

              }}
            />
            </div>
        </div>
    )
}
export default Chart;