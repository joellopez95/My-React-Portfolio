// pages/Contact.jsx
import { useState } from 'react';

import './Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          {/* ... (form inputs) ... */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
