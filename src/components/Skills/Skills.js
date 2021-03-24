import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import DoughnutC from '../DoughNut/Doughnut'
import './Skills.scss';


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
                            <DoughnutC data={value}/>
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
                            <DoughnutC data={value}/>
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
                            <DoughnutC data={value}/>
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