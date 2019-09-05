import React from 'react';

const Nav = (props) => {
    return(
      <div>
        <nav className="navbar navbar-expand fixed-top d-flex justify-content-between">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#id-section-intro">J.L</a></li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#id-section-my-apps">APPS</a></li>
              <li className="nav-item">
                <a className="nav-link" href="#id-section-svg-bg">SVG BG</a></li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#id-section-cv">C.V</a></li>
              <li className="nav-item">
                <a className="nav-link" href="#id-section-contact">CONTACT</a></li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link lang" onClick={props.handleLang}>{props.lang}</span></li>
            </ul>
          </nav>
        </div>
    )
  }

export default Nav;