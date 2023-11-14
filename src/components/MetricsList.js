import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MetricItem from './MetricItem';
import './MetricsList.css';

const MetricsList = () => {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMetrics = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/metrics/');
      setMetrics(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching metrics:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    fetchMetrics();
  };

  return (
    <div className="metrics-list-container">
      <h2>Metrics List</h2>
      <button onClick={handleRefresh} className="refresh-button">
        Refresh Metrics
      </button>
      {loading ? (
        <p>Loading metrics...</p>
      ) : (
        <ul className="metrics-list">
          {metrics.map((metric) => (
            <MetricItem key={metric.id} metric={metric} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MetricsList;
