import React from 'react';

const MetricItem = ({ metric }) => {
  const { timestamp, name, value } = metric;

  return (
    <li>
      <strong>{name}</strong>: {value} at {timestamp}
    </li>
  );
};

export default MetricItem;
