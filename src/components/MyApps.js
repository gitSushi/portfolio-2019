import React from 'react';

import screenshotQuoteGenerator from '../images/Screenshot_2019-08-29 Quote Generator(1).png';
import screenshotHangman from '../images/Screenshot_2019-08-29 Hangman Game(1).png';

const MyApps = (props) => {
    const {app} = props
    return(
      <div id="id-section-my-apps">
        <section className="container section-my-apps">
          <h2 className="text-center">APPS</h2>
          <div className="svg-underline"></div>
          <article className="row text-center">
            <aside className="col-md-6">
              <div className="card m3">
                <div className="card-header">
                  <div className="app-title">{app[0].appHeader}</div>
                  <div className="app-title shield"></div>
                </div>
                <div className="card-body">
                  <a 
                  href="https://gitsushi.github.io/quote-generator/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title={app[0].appTitle}
                  >
                    <div className="app-card">
                      <div className="app-card-front">
                        <img className="card-img" src={screenshotQuoteGenerator} alt="quote generator snapshot"/>
                      </div>
                      <div className="app-card-back d-flex justify-content-center align-items-center">
                        <p>{app[0].appDescription}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
            <aside className="col-md-6">
              <div className="card m3">
                <div className="card-header">
                  <div className="app-title">{app[1].appHeader}</div>
                  <div className="app-title shield"></div>
                </div>
                <div className="card-body">
                  <a
                  href="https://gitsushi.github.io/hangman-game/"
                  rel="noopener noreferrer"
                  target="_blank"
                  title={app[1].appTitle}
                  >
                    <div className="app-card">
                      <div className="app-card-front">
                        <img className="card-img" src={screenshotHangman} alt="hangman game snapshot"/>
                      </div>
                      <div className="app-card-back d-flex justify-content-center align-items-center">
                        <p>{app[1].appDescription}</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </article>
        </section>
      </div>
    )
  }

export default MyApps;