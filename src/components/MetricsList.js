import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './MetricsList.css';

const MetricsList = () => {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [interval, setInterval] = useState('hour');

  const fetchMetrics = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/stats/averages/?interval=${interval}`);
      setMetrics(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching metrics:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, [interval]);

  const handleIntervalChange = (newInterval) => {
    setInterval(newInterval);
  };

  const generateLines = () => {
    if (!metrics || metrics.length === 0) {
      return null;
    }

    const metricNames = [...new Set(metrics.flatMap((metric) => Object.keys(metric).filter((key) => key !== 'time_interval')))];

    return metricNames.map((name) => (
      <Line
        key={name}
        type="monotone"
        dataKey={name}
        stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
      />
    ));
  };

  return (
    <div className="metrics-list-container">
      <h2>Metrics Chart</h2>
      <div className="chart-buttons">
        <button onClick={() => handleIntervalChange('minute')}>Minute</button>
        <button onClick={() => handleIntervalChange('hour')}>Hour</button>
        <button onClick={() => handleIntervalChange('day')}>Day</button>
      </div>
      {loading ? (
        <p>Loading metrics...</p>
      ) : (
        <LineChart
          width={800}
          height={400}
          data={metrics}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time_interval" />
          <YAxis />
          <Tooltip />
          <Legend />
          {generateLines()}
        </LineChart>
      )}
    </div>
  );
};

export default MetricsList;
