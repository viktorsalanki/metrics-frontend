# metrics-frontend

We need a Frontend + Backend application that allows you to post and visualize metrics. Each metric will have: Timestamp, name, and value. The metrics will be shown in a timeline and must show averages per minute/hour/day. The metrics will be persisted in the database.

# Metrics Frontend

This is the frontend application for the Metrics project. It provides a user interface for visualizing and interacting with metrics data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)

## Installation

Clone the repository:

```bash
git clone https://github.com/viktorsalanki/metrics-frontend.git
cd metrics-frontend
```

Install dependencies:

```bash
npm install
```

## Usage

Start the development server:

```bash
npm start
```
This will run the application in development mode. Open http://localhost:3000 in your browser to view it.

## Components

### MetricForm
The MetricForm component allows users to submit new metrics to the backend. It includes input fields for timestamp, name, and value.

### MetricsList
The MetricsList component displays a time series line chart of metrics data. It fetches and visualizes metrics averages over specific time intervals.
