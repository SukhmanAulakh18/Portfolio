import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send to an API)
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' }); // Reset form
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-describedby="nameError"
          />
          {errors.name && <span id="nameError" className="error">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby="emailError"
          />
          {errors.email && <span id="emailError" className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            aria-describedby="messageError"
          />
          {errors.message && <span id="messageError" className="error">{errors.message}</span>}
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Email: ausukhma@sheridancollege.ca</p>
        <p>Phone: 647-897-9026</p>
        <p>Location: Oakville, ON, L6K 2C6</p>
        {/* Google Maps integration placeholder */}
      </div>
    </section>
  );
};

export default Contact;