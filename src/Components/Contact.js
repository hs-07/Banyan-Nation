import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container" id="contact-us">
        <div className="contact-head">
          <h1>CONTACT US</h1>
        </div>
        <div className="contact-us">
          <form action="">
            <div className="user">
              <label htmlFor="">Your Name (Required)</label>
              <input type="text" />
            </div>

            <div className="user">
              <label htmlFor="">Your Email (Required)</label>
              <input type="email" />
            </div>

            <div className="user">
              <label htmlFor="">Subject</label>
              <input type="text" />
            </div>

            <div className="user">
              <label htmlFor="">Your Messege</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="user">
              <iframe
                title="reCAPTCHA"
                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LefmHIaAAAAABYuhssU1xijSRVdU1Gz3tbhboUW&amp;co=aHR0cHM6Ly9iYW55YW5uYXRpb24uY29tOjQ0Mw..&amp;hl=en&amp;v=VZKEDW9wslPbEc9RmzMqaOAP&amp;size=normal&amp;cb=n7ltcpj3p7rp"
                width="304"
                height="78"
                role="presentation"
                name="a-jc0sodn3wgeh"
                frameBorder="0"
                scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
              >
                #document
              </iframe>
            </div>
            <div className="user">
                <button className="form-btn">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
