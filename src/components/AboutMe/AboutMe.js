import React from 'react';
import './AboutMe.scss'
import DoughnutC from '../DoughNut/Doughnut'
import ReactHtmlParser from 'react-html-parser'; 
import git from '../../assets/git.svg';
import globe from '../../assets/globe.svg';

function Experience(props){
    return(
        
            <div className='about-wrapper'>
            <div className='sec-title'>Education:</div>
            <div className='category-chart'>
                {
                    props.educationInfo.map((value) => {
                        return <div className='chart'>
                            <DoughnutC data={value}/>
                                <div className='skill-score'>{value.ability[0]}</div>
                                <div className='skill-desc'>{ReactHtmlParser (value.std)}</div>
                                <div className='skill-desc2'>{value.location}</div>
                            </div>


                    })
                }
            </div>
            <div className='sec-title'>Personal Projects:</div>
            <div className='project-wrapper'>
                {props.projectInfo.map((el)=>{
                    return(
                        <div className='project-box'>
                        <div>
                            <div class='title'>{el.title}</div>
                            <div class='tags'>
                                {el.technology.map((el1)=><div class="tag" title={el1}>{el1}</div>)}
                            </div>
                            <div class='desc'>{el.desc}</div> 
                        </div>
                        <div class='card-foot'>
                            <div>
                                <a href={el.gitURL} target="_blank" title="Github Repo"> 
                                    <img src={git} />
                                </a> 
                                <a href={el.webURL} target="_blank" title="Open Website"> 
                                    <img src={globe} />
                                </a>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
            <div className='sec-title'>Achievements:</div>
            <ul>
            <li>Intra Hackathon Event at Tech Mahindra Ltd. (The app we created helps users to get the best product
                and navigate them inside a mall) held 1st in Pune Level.</li>
            <li>1st Position in Hackathon at Deloitte Mumbai for creating a chatbot to fill employee timesheet</li>
            </ul>
            {/*<div className='sec-title'>Certifications:</div>
            <ul>
                <li>
                    <span>State of Michigan Project for citizens to apply for Healthcare, Income & Employment, Education benefits</span>
                </li>
            </ul>*/}
            <div className='sec-title'>Hobbies:</div>
            <div className='pad-left'>In my free time i love to swim, go out on treks, am also a big foodie , I like playing video games, watching all kinds of movies,series and chasing new experiences.</div>
                
        </div>
        
    )
}
export default Experience;