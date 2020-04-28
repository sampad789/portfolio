import React, { Component } from "react";

import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <section className="contact" id="contact ">
          <h2>Get in Touch </h2>
          <div classname="content">
            <p>
              I am very open to any suugestions or any remarks whatsoever or if
              you just wanna say hi ! please feel free to talk to me you can
              contact me through my email below or find me in the social medias
              .It's always nice to have feedbacks and make new connections .
            </p>
            <div className="mail">
              <a href="mailto:sampad789@gmail.com"> Contact Sam</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
