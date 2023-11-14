import React, { useState } from 'react';
import axios from 'axios';
import './MetricForm.css';

const MetricForm = () => {
  const [formData, setFormData] = useState({
    timestamp: '',
    name: '',
    value: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/api/v1/metrics/', formData);
      setFormData({
        timestamp: '',
        name: '',
        value: '',
      });
    } catch (error) {
      console.error('Error adding new metric:', error);
    }
  };

  return (
    <div className="metric-form-container">
      <h2>Add New Metric</h2>
      <form onSubmit={handleSubmit} className="metric-form">
      <label>
          Timestamp:
          <input
            type="text"
            name="timestamp"
            value={formData.timestamp}
            onChange={handleChange}
            className='metric-form-input'
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='metric-form-input'
          />
        </label>
        <br />
        <label>
          Value:
          <input
            type="text"
            name="value"
            value={formData.value}
            onChange={handleChange}
            className='metric-form-input'
          />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default MetricForm;
