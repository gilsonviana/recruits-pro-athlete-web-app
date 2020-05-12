// Dependencies
import React from "react";
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Card from "react-bootstrap/Card";

// Components
import EvaluationDetailsChartEmptyState from './EvaluationDetailsChartEmptyState'
import CustomizedAxisTick from './CustomizedAxisTick'
import CustomizedLabel from './CustomizedLabel'

const EvaluationDetailsChart = ({ metric }) => {
  console.log(metric)
  const data = [
    {
      name: metric.name, value: 12,
    },
    {
      name: metric.name, value: 22,
    }
  ];

  return (
    <Card className="evaluation-details-chart shadow-sm pt-3 px-3 mb-4 bg-white rounded">
      <Card.Title>Activity</Card.Title>
      <Card.Body>
        {
          !metric._id ? 
            <EvaluationDetailsChartEmptyState /> :
            <div>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20, right: 30, left: 20, bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" strokeWidth={2} dataKey="value" stroke="#00EC00" label={<CustomizedLabel />} />
              </LineChart>
            </div>
        }
      </Card.Body>
    </Card>
  );
};

EvaluationDetailsChart.propTypes = {
  metric: PropTypes.object
}

export default EvaluationDetailsChart;
