import React, { useState } from 'react';
import './Form.css'; // Import your CSS file for styling

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    if (!formData.message) {
      validationErrors.message = 'Message is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can proceed with submission or other actions
      console.log('Form is valid:', formData);
    }
  };

  return (
    <div>
      <form className="form-handle" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <input
          type="text"
          placeholder="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        {errors.message && <div className="error">{errors.message}</div>}
        <div class="ellipse"></div>
        <button type="submit" class="send-button">SEND</button>
        {/* <input type="submit" className="button" /> */}
      </form>
    </div>
  );
};

export default Form;
