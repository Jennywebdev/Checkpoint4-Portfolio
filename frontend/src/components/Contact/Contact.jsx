import { useState } from "react";
import "./contact.css";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send</button>
      </form>
      {showModal && (
        <div className="modal">
          <p>Thank you for your message, I'll get back to you!</p>
          <button type="button" onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Contact;
