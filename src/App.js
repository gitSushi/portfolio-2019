import React from 'react';


import Nav from './components/Nav';
import Intro from './components/Intro';
import MyApps from './components/MyApps';
import SvgBackground from './components/SvgBackground';
import Cv from './components/Cv';
import Contact from './components/Contact';

import introData from './data/introData.js';
import appsData from './data/appsData.js';
import svgBgData from './data/svgBgData.js';
import svgEnFr from './data/svgEnFr.js';
import cvData from './data/cvData.js';

class App extends React.Component{
  state = {lang:"en"}
  handleLang = () => {
    let {lang} = this.state
    if(lang === "en"){
      this.setState({lang:"fr"})
    }else{
      this.setState({lang:"en"})
    }
  }
  render(){
    let {lang} = this.state
    return(
      <div className="container-fluid">
        <Nav handleLang={this.handleLang} lang={lang}/>
        <Intro lang={lang} intro={introData}/>
        <MyApps lang={lang} app={lang === "en" ? appsData[1] : appsData[0]}/>
        <SvgBackground bg={svgBgData} lang={lang} enfr={lang === "en" ? svgEnFr[1] : svgEnFr[0]}/>
        <Cv cv={lang === "en" ? cvData[1] : cvData[0]} lang={lang}/>
        <Contact lang={lang}/>
      </div>
    )
  }
}

export default App;
