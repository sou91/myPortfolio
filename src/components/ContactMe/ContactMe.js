import React,  {useState}from 'react';
import axios from 'axios'
import './ContactMe.scss';
import email from '../../assets/email.svg';
import lnkdn from '../../assets/lnkdn.svg';
import git from '../../assets/git.svg';


function ContactMe(){
    let msgObj={
        messageSent:false,
        message:''
    }
    const [messageStat,setMessage]=useState(msgObj);
    let handleChange = (e)=> {
        setMessage({...messageStat, message:e.target.value});
    }
    let sendEmail = (event) => {
        event.preventDefault();
        var message = messageStat.message;
        if (message !== '') {
            axios({
                method: "post",
                url: "/mail",
                data: {
                    userEmail: 'sourabh.sontakke91@gmail.com',
                    userMessage: "Message : " + message
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }

            }).then((response) => {
                if (response.data.msg === 'success') {
                    setMessage({...messageStat, messageSent:true});
                } else if (response.data.msg === 'fail') {
                    setMessage({...messageStat, messageSent:false});
                    alert("Message failed to send.");
                }
            })
        }
    }
    return(
        <div className='contact-me'>
            <div className='contact-msg'>Send me a message:</div>
            <textarea onChange={handleChange} value={messageStat.message}/>
            <button  class='send-btn' onClick={sendEmail}>Send</button>
            <div class='contact-sec'>
            <a href="mailto: sourabh.sontakke91@gmail.com" title="Email Address">
                <img src={email} />
            </a>
            <a href="https://www.linkedin.com/in/sourabh-sontakke-911a53145/" target="_blank" title="Linkedin Profile">
                <img src={lnkdn} />
            </a>   
            <a href="https://github.com/sou91" target="_blank" title="Github Profile"> 
                <img src={git} />
            </a>
            </div>
        </div>
    )
}
export default ContactMe;