import React from 'react';

const Contact = (props) => {
    return(
      <div id="id-section-contact">
        <section className="container-fluid section-contact">
          <article className="row justify-content-center text-center">
            <div className="article-contact">
              <h3 className="h3-contact">{props.lang === "en" ? "Disponible dès maintenant" : "Available for hire"}</h3>
              <ul className="ul-contact">
                <li className="">
                  <i className="fas fa-phone" aria-hidden="true" />
                  <span className="pl-3">xx xx xx xx xx</span>
                </li>
                <li className="">
                  <i className="fas fa-envelope" aria-hidden="true" />
                  <span className="pl-3">xxx@xxx.xx</span>
                </li>
              </ul>
              <ul className="ul-icon d-flex justify-content-between">
                <li className="d-flex justify-content-center align-items-center">
                  <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/lossushi"
                  title="twitter"
                >
                    <i className="fab fa-twitter fa-2x" aria-hidden="true" />
                  </a>
                </li>
                <li className="d-flex justify-content-center align-items-center">
                  <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/gitSushi"
                  title="github"
                >
                    <i className="fab fa-github fa-2x" aria-hidden="true" />
                  </a>
                </li>
                <li className="d-flex justify-content-center align-items-center">
                  <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://codepen.io/gitsushi"
                  title="codepen"
                >
                    <i className="fab fa-codepen fa-2x" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    )
  }

export default Contact;