import React from 'react';
import myFace from './assets/myFace.png';
import eastFace from './assets/east.png';
import southFace from './assets/south.png';
import westFace from './assets/west.png';
import northFace from './assets/north.png';

import arrow from './assets/arrow.svg';
import Skills from './components/Skills/Skills';
import ContactMe from './components/ContactMe/ContactMe';
import Experience from './components/Experience/Experience';
import AboutMe from './components/AboutMe/AboutMe';
import ControlCenter from './components/ControlCenter/ControlCenter';

import {
  MobileView,
  isMobile
} from "react-device-detect"


import './App.scss';
import Axios from 'axios'
Axios.interceptors.request.use(function (config) {
    // spinning start to show
    // UPDATE: Add this code to show global loading indicator
    document.body.classList.add('loading-indicator');
    return config
  }, function (error) {
    return Promise.reject(error);
  });
Axios.interceptors.response.use(function (response) {
// spinning hide
// UPDATE: Add this code to hide global loading indicator
document.body.classList.remove('loading-indicator');
return response;
}, function (error) {
return Promise.reject(error);
});

const info = {
  Name: 'Sourabh Sontakke',
  Role: 'UI Engineer',
  Skills: {
    'Fundamentals': [
      {
        technology: 'HTML',
        ability: [80, 20]
      },
      {
        technology: 'CSS',
        ability: [80, 20]
      },
      {
        technology: 'Javascript',
        ability: [85, 15]
      }
    ],
    'Frameworks': [
      {
        technology: 'React Js',
        desc: 'React Js,React Native, Redux',
        ability: [80, 20]
      },
      {
        technology: 'Vue Js',
        desc: 'VueJs, VueX',
        ability: [75, 25]
      },
      {
        technology: 'Salesforce Aura/LWC',
        ability: [70, 30]
      },
      {
        technology: 'Angular Js (1.x)',
        ability: [70, 30]
      },
      {
        technology: 'Node Js',
        ability: [70, 30]
      },
    ],
    'dataBase': [
      {
        technology: 'Mongo Db',
        ability: [60, 40]
      },
      {
        technology: 'Firebase',
        ability: [60, 40]
      }
    ],
    'Tools': ['Git', 'DialogFlow', 'ChartJs', 'Figma', 'Jira', 'Azure DevOps', 'Gitlab']
  },
  Education:[{ability:[82,18],std:'X<sup>th</sup> Std',location:'Lok Puram; Thane'},
            {ability:[87,13],std:'XII<sup>th</sup> Std',location:'DAV; Airoli'},
            {ability:[62,38],std:'Engineering',location:'TCET; Mumbai Uni'}
  ],
  Projects:[
    {title:'CRUD Application',
    technology:['React JS','Firebase'],
    desc:'A React CRUD application, connected with firebase to practice the basics of hooks and state management.',
    gitURL:'https://github.com/sou91/crudMovie',
    webURL:'https://focused-cori-c31cef.netlify.app/',
    status:'Complete'
    },
    {title:'Portfolio',
    technology:['React JS','Firebase','Node Js','Firebase'],
    desc:'This is the application you are currently viewing. It is a show case of my experience as a Front End developer.',
    gitURL:'https://github.com/sou91/myPortfolio',
    webURL:'',
    status:'Complete'
    }
  ]
}
class App extends React.Component {
  state = {
    isFirstState: true,
    sectionClicked: '',
    animateControl: '',
    mobileDisp:'',
    sectionHovered: 'default',
    showSection: false,
    sectionClickCount: 0
  }
  constructor(props) {
    super();
    this.myRef = React.createRef();
  }
  controlClicked = (sectionClicked) => {
    if(isMobile){
      this.setSecHovered(sectionClicked)
    }
    this.setState({
      animateControl: !isMobile?'openAnimation 0.75s both ease-in':'',
      mobileDisp: isMobile?'none':'block',
      sectionClicked: sectionClicked,
      sectionClickCount: this.state.sectionClickCount + 1
    });
  }
  setSecHovered = (section) => {
    this.setState({ sectionHovered: section });
  }
  componentDidMount(){
    this.myRef.current.classList.add('fade-face');
  }
  render() {
    let sectionToShow = null;
    let imagetoShow = <img src={myFace} className='face-img' />;
    if (this.state.sectionClickCount === 1) {
      if(!isMobile){
        setTimeout(function () {
          this.setState({
            showSection: true
          })
        }.bind(this), 1000);
      }else{
        this.setState({
          showSection: true,
          sectionClickCount: this.state.sectionClickCount + 1
        })
      }
      
    }
    if (this.state.sectionClicked === 'Skills' && this.state.showSection) {
      sectionToShow = <Skills skillInfo={info.Skills} />
    }else if(this.state.sectionClicked==='Contact Me' && this.state.showSection){
      sectionToShow = <ContactMe/>
    }else if(this.state.sectionClicked==='Experience'  && this.state.showSection){
      sectionToShow=<Experience/>
    }else if(this.state.sectionClicked==='About Me'  && this.state.showSection){
      sectionToShow=<AboutMe educationInfo={info.Education} projectInfo={info.Projects}/>
    }
    switch (this.state.sectionHovered) {
      case 'Skills':
        imagetoShow = <img src={westFace} className='face-img' />;
        break;
      case 'Experience':
        imagetoShow = <img src={northFace} className='face-img' />;
        break;
      case 'Contact Me':
        imagetoShow = <img src={eastFace} className='face-img' />;
        break;
      case 'About Me':
        imagetoShow = <img src={southFace} className='face-img' />;
        break;
      default:
        imagetoShow = <img src={myFace} className='face-img' ref={this.myRef}/>;;
    }
    return (
      <div className="App">
        <div className="App-header">
         
          <div className={this.state.sectionClicked != '' ? 'section-wrapper' : ''}/ >
          {<ControlCenter sectionClicked={this.state.sectionClicked} controlClicked={this.controlClicked} setSecHovered={this.setSecHovered} imagetoShow={imagetoShow} animateControl={this.state.animateControl} isMobile={this.state.mobileDisp}/>}
          {this.state.sectionClicked == ''
            ? <div className='intro'>
              <span>{info.Name}</span>
              <br />
              {info.Role}
            </div>
            : <div className='section-wrap'>
                <div className='section-title'>
                  <img src={arrow} />
                  <span>{this.state.sectionClicked}</span>
                </div>
              <MobileView>
                <ControlCenter mobileCenter={true} sectionClicked={this.state.sectionClicked} controlClicked={this.controlClicked} setSecHovered={this.setSecHovered} imagetoShow={imagetoShow} animateControl={this.state.animateControl}/>
              </MobileView>
              {sectionToShow}
            </div>
          }

          
        </div>
      </div>
    )
  }
}

export default App;
