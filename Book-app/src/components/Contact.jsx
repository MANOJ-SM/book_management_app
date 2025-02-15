import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have any questions or feedback? We'd love to hear from you!
      </p>
      <p>
        You can reach us by email at: <a href="mailto:info@bookapp.com">
          info@bookapp.com
        </a>
      </p>
      <p>
        Or, you can fill out the form below:
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;