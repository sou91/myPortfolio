import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Skills.scss';
const state = {
    datasets: [
        {
            fill: false,
            backgroundColor: ['rgb(234,127,15)', 'rgb(234,127,15,0.3)'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1.5,
            data: [80, 20]
        }
    ]
}

function Skills(props) {
    let chartObj = [];
    chartObj[0] = props.skillInfo.Fundamentals;
    chartObj[1] = props.skillInfo.Frameworks;
    chartObj[2] = props.skillInfo.dataBase;
    let tools = props.skillInfo.Tools.toString(', ');
    tools = tools.replace(/,/g, ', ')
    return (

        <div className='chart-wrapper'>
            <span class='sec-title'>Fundamentals:</span>
            <div className='category-chart'>
                {
                    chartObj[0].map((value) => {
                        return <div className='chart'>
                            < Doughnut
                                data={state}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    tooltips: false,
                                    animation: {
                                        tension: {
                                            duration: 3000,
                                            easing: 'linear',
                                            from: 1,
                                            to: 0,
                                            loop: true,
                                            debug: true
                                        }
                                    }
                                }}
                            />
                            <div className='skill-score'>{value.ability[0] / 10}</div>
                            <div className='skill-desc'>{value.technology}</div>
                        </div>


                    })
                }
            </div>
            <span class='sec-title'>Frameworks:</span>
            <div className='category-chart'>
                {
                    chartObj[1].map((value) => {
                        return <div className='chart'>
                            < Doughnut
                                data={state}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    tooltips: false
                                }}
                            />
                            <div class='skill-score'>{value.ability[0] / 10}</div>
                            <div className='skill-desc'>{value.technology}</div>
                        </div>



                    })
                }
            </div>
            <span class='sec-title'>Database:</span>
            <div className='category-chart'>
                {
                    chartObj[2].map((value) => {
                        return <div className='chart'>
                            < Doughnut
                                data={state}
                                options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    tooltips: false
                                }}
                            />
                            <div class='skill-score'>{value.ability[0] / 10}</div>
                            <div className='skill-desc'>{value.technology}</div>
                        </div>
                    })
                }
            </div>
            <div>
                <span class='sec-title'> Tools:</span>
                <div>{tools}</div>
            </div>
        </div>


    );
}
export default Skills;