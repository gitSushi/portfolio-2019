import React from 'react';

const Intro = (props) => {
    return(
      <div id="id-section-intro">
        <section className="container-fluid section-intro">
            <img id="sushi" className="img-fluid" src="http://4.bp.blogspot.com/-hyF7fFuLgSA/Tc9ETGdj3qI/AAAAAAAAAQs/YX3ygnQ0RE0/s1600/tuna-sushi.jpg" alt="tuna sushi"/>
          {props.lang === "en" ? 
            <div>
              <h2><span>Jo.Li</span> a.k.a <span>LOSSUSHI</span> {props.intro[1].introHeader}</h2>
              <p>{props.intro[1].introPara[0]}</p>
              <p>{props.intro[1].introPara[1]}</p>
              <p>{props.intro[1].introPara[2]}</p>
            </div>
            : 
            <div>
              <h2>{props.intro[0].introHeader} <span>Jo.Li</span> a.k.a <span>LOSSUSHI</span></h2>
              <p>{props.intro[0].introPara}</p>
            </div>
          }
          </section>
        </div>
    )
  }

export default Intro;