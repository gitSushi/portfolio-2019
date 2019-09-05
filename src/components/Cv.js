import React from 'react';

import {TweenMax} from "gsap/TweenMax";

class Cv extends React.Component {
    constructor(props){
      super(props)
      
      this.state = {
        stateId: 0
      }
    }
    
    up(){
      TweenMax.staggerFromTo(".cv-li-data", 1, {y: -300}, {y:0})
    }  
    down(){
      TweenMax.staggerFromTo(".cv-li-data", 1, {y: 300}, {y:0})
    }
    
    handlePrev = () => {
      let {stateId} = this.state
      this.setState({
        stateId: stateId - 1
      },this.up)
    }  
    handleNext = () => {
      let {stateId} = this.state
      this.setState({
        stateId: stateId + 1
      },this.down)
    } 
  
    handleYear = (idx) => {
      let {stateId} = this.state
      
      if(idx < stateId){
        this.setState({
          stateId: idx
        },this.up)
      }else if(idx > stateId){
        this.setState({
          stateId: idx
        },this.down)
      }
    }
    
    render(){
      const {cv} = this.props
      let {stateId} = this.state
      return(
        <div id="id-section-cv">
          <section className="container section-cv">
            <h2 className="text-center">C.V.</h2>
            <div className="cv-grid">
              <div className="cv-frame">
                <div className="cv-container">
                  <ul className="cv-ul">
                    <li>
                      <div className="cv-li-data">
                        {stateId === 0 ?
                          <div> 
                            <h3>{cv[stateId].year}</h3>
                            <p>{cv[stateId].xpIntro}</p>
                            <p>{cv[stateId].xp[0]}</p>
                            <ul className="cv-ul-youth">
                            {cv[stateId].list.map((item, index) =>
                              <li 
                              key={index}
                              className="cv-li-youth">{item}</li>
                              )}
                            </ul>
                            <p>{cv[stateId].xp[1]}</p>
                          </div>
                          :
                          <div> 
                            <h3>{cv[stateId].year}</h3>
                            <p>{cv[stateId].xpIntro}</p>
                            <p>{cv[stateId].xp}</p> 
                          </div>
                        }
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="cv-arrow cv-arrow-up">
                <svg onClick={this.handlePrev.bind(this)} width="50" height="50" style={{visibility: `${stateId === 0 ? "hidden" : "visible"}`}}>
                  <g transform="rotate(135 25 25)">
                    <path d="M7.5,7.5 h10 v25 h25 v10 h-35z"/>
                  </g>
                </svg>
              </div>
              <div className="cv-years">
                <div className="cv-timeline-container">
                  <div className="cv-timeline"></div>
                  <ul>
                    {cv.map((item, index) => 
                      <li 
                        onClick={this.handleYear.bind(this, index)}
                        id={index}
                        key={index}
                        className={stateId === index ? "active-year" : " "}
                        >{item.year}</li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="cv-arrow cv-arrow-down">
                <svg onClick={this.handleNext.bind(this)} width="50" height="50" style={{visibility: `${stateId === cv.length - 1 ? "hidden" : "visible"}`}}>
                  <g transform="rotate(315 25 25)">
                    <path d="M7.5,7.5 h10 v25 h25 v10 h-35z"/>
                  </g>
                </svg>
              </div>
            </div>
          </section>
        </div>
      )
    }
  }

export default Cv;