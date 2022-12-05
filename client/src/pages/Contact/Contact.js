import React from "react";
import BoeingLogo from "../../assets/BoeingLogo.png";
import "./contact.scss";
import AuthButton from "../../components/UI/AuthButton";
const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <aside className="contact__aside">
          <div className="aside__image">
            <img src={BoeingLogo} alt={"BOING"} />
          </div>
          <h2>Contact Us</h2>
          <p></p>
          <ul className="contact__details">
            <li>
              <i className="uil uil-phone-times"></i>
              <h5>031-1234-5678</h5>
            </li>

            <li>
              <i className="uil uil-envelop"></i>
              <h5>Support@Boing.com</h5>
            </li>

            <li>
              <i className="uil uil-location-point"></i>
              <h5>KAU-WEB-BOING</h5>
            </li>
          </ul>
        </aside>

        <form
          action="https://formspree.io/f/xnqrynro"
          method="POST"
          className="contact__form"
        >
          <div className="form__name">
            <input
              type="text"
              name="First Name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="Last Name"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="Email Address"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="Message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <AuthButton size={{ width: 300, height: 60 }}>
            Send Message
          </AuthButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
