import React from 'react';
import './App.css';
import MetricsList from './components/MetricsList';
import MetricForm from './components/MetricForm';

function App() {
  return (
    <div>
      <h1>Metrics App</h1>

      {/* MetricForm component for adding new metrics */}
      <MetricForm />

      {/* MetricsList component to display a list of metrics */}
      <MetricsList />

    </div>
  );
}

export default App;
