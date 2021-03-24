import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutC(props){
    const chartVal = {
        datasets: [
            {
                fill: false,
                backgroundColor: ['rgb(234,127,15)', 'rgb(234,127,15,0.3)'],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1.5,
                
            }
        ]
    }
    function bindDataToState(value){
        let stateCpy=JSON.parse(JSON.stringify(chartVal));
        stateCpy.datasets[0].data=value.ability;
        return stateCpy;
    }
    return(
        < Doughnut
                                data={bindDataToState(props.data)}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    tooltips: false,
                                }}
                            />
    )
}

export default DoughnutC;