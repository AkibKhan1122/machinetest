import React from "react";

const Contact = () => {
  return (
    <>
      <h2 className="contact_head">Contact Page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28017.34609112754!2d77.3690487398287!3d28.624718745418463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff135b3084b%3A0x19ccb4e95c69306d!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678859530032!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <form
        className="contactForm"
        action="https://formspree.io/f/xgebzrry"
        method="POST"
      >
        <input
          className="inputSize"
          type="text"
          placeholder="User Name"
          name="user name"
        />
        <input
          className="inputSize"
          type="email"
          placeholder="User Email"
          name="user email"
        />
        <textarea
          className="cstmTextArea"
          type="text"
          name="textarea"
          placeholder="Enter your massage"
        ></textarea>
        <input className="inputSize" type="submit" value="Send" />
      </form>
    </>
  );
};

export default Contact;
