import React from 'react';

class SvgBackground extends React.Component{
    constructor(props){
      super(props)
      this.state = {stateIdx: 0}
    }
    // bound functions
    onClickThumbnail = (event) => {
      let clicked = event.target.id
      this.setState({stateIdx: clicked})
    }
    render(){
      let {bg, enfr} = this.props
      let {stateIdx} = this.state
      
      return(
        <div id="id-section-svg-bg">
          <section className="container-fluid text-center section-svg-bg">
            <div className="row justify-content-sm-center">
              <div className="col-sm-5">
                <div className="svg-title">
                  <h2>SVG BACKGROUNDS</h2>
                  <p>{enfr.subtitle}</p>
                </div>
              </div>
            </div>
            <div className="container carousel-container">
              <div className="row">
                <div className="col-md-6">
                  {/*<div className="svg-snap-container">
                    <div className="svg-snap"></div>
                  </div>*/}
                  <div className="card">
                    <div className="card-header" style={{fontSize:"20px"}}>{bg[stateIdx].name}</div>
                    <div className="card-body">
                      <div className="svg-snap-container m-auto">
                        {<div className="svg-snap" style={{background:(bg[stateIdx].cssBg)}}></div>}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <div className="night">
                      <code id="demo1">background: {bg[stateIdx].cssBg};</code>
                    </div>
                    <div>
                      <button
                        id="copyMe"
                        className="copy-me"
                        title={enfr.clipboardTitle}
                        ><i className="far fa-copy fa-2x"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thumbnail-carousel">
                <div className="mandatory-scroll-snapping" dir="ltr">
                  {bg.map((item,index,arr) => 
                               index % 3 === 0 &&
                                <div className="thumbnail-container" key={index}>
                                  <div 
                                  className="svg-bg-thumbnail"
                                  style={{background:(bg[index].cssBg)}}
                                  onClick={(this.onClickThumbnail.bind(this))} 
                                  id={(index)}/>
                                  {index + 1 < arr.length &&
                                  <div 
                                  className="svg-bg-thumbnail"
                                  style={{background:(bg[index+1].cssBg)}}
                                  onClick={(this.onClickThumbnail.bind(this))} 
                                  id={(index+1)}/>}
                                  {index + 2 < arr.length &&
                                  <div 
                                  className="svg-bg-thumbnail"
                                  style={{background:(bg[index+2].cssBg)}}
                                  onClick={(this.onClickThumbnail.bind(this))} 
                                  id={(index+2)}/>}
                                </div>
                               )}
                </div>
              </div>
              <p className="p-svg">
                {enfr.cdpnLink[0]}
                <a
                  href="https://codepen.io/collection/ngxrOW/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title={enfr.cdpnTitle}
                  >collection</a>
                {enfr.cdpnLink[1]}
              </p>
            </div>
          </section>
        </div>
      )
    }
  }

export default SvgBackground;