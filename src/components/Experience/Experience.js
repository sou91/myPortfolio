import React,  {useState}from 'react';
import './Experience.scss'

function Experience(){
return(
<div className="expBody">
<div className="timeline">
  <div className="entry">
    <div className="title">
      <h3>Feb 2021 - Present</h3>
      <p>SSE, Xoriant</p>
    </div>
    <div className="body">
      <ul>
        <li>Incoming :)</li>
      </ul>
    </div>
  </div>
  <div className="entry">
    <div className="title">
      <h3>Oct 2017 - Feb 2021</h3>
      <p>Senior  Consultant, Deloitte USI</p>
    </div>
    <div className="body">
      <ul>
        <li>
            <span>State of Michigan Project for citizens to apply for Healthcare, Income & Employment, Education benefits</span>
            <div>(Salesforce Aura)</div>
        </li>
        <li>
            <span>Pricing recommendation tool for McDonalds stores.</span>
            <div>(React Js, Redux)</div>
        </li>
        <li>
            <span>Tracker Tool for Opportunites, Accounts, Contacts used by partners of Deloitte</span>
            <div>(Salesforce Aura/LWC)</div>
        </li>
        <li>
            <span>Firm initiative to build a tool for migrating assets between marketing cloud Orgs</span>
            <div>(VueJs, VueX, Node Js, Mongo Db)</div>
        </li>
      </ul>
    </div>
  </div>
  <div className="entry">
    <div className="title">
      <h3>Mar 2014 - Sept 2017</h3>
      <p>Software Engineer, Tech Mahindra</p>
    </div>
    <div className="body">
      <ul>
        <li>Mobile and Desktop web app for AT&T to build a UI for customers to check their Data/Text/Talk usage</li>
        <div>(Angular 1.x)</div>
      </ul>
    </div>
  </div>
</div>
</div>
    )
}
export default Experience;