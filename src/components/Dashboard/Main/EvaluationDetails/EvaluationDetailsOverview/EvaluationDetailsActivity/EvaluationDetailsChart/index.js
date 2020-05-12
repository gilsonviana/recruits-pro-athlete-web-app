// Dependencies
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from "react-bootstrap/Card";
import moment from 'moment'

// Components
import EvaluationDetailsChartEmptyState from './EvaluationDetailsChartEmptyState'
import CustomizedAxisTick from './CustomizedAxisTick'
import CustomizedLabel from './CustomizedLabel'

const EvaluationDetailsChart = ({ metricName, evaluations }) => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const populateChartData = () => {
      const evaluatorId = evaluations[0].evaluatorId._id || ''
      
      let metrics = []

      evaluations.filter(evaluation => evaluation.evaluatorId._id === evaluatorId).map(evaluation => {
        const evaluationDate = moment(evaluation.createdAt).format('MMM D Y')

        evaluation.form.metrics.map(metric => {
          if (metric.name === metricName) {
            metrics = [
              ...metrics,
              {
                value: metric.value,
                name: evaluationDate
              }
            ]
          }
        })
      })
      
      setChartData(metrics)  
    }
    populateChartData()
    
  }, [metricName])

  return (
    <Card className="evaluation-details-chart shadow-sm pt-3 px-3 mb-4 bg-white rounded">
      <div className="d-flex">
        <Card.Title>Activity: </Card.Title>
        <p className="ml-1 font-weight-bold">{metricName}</p>
      </div>
      <Card.Body>
        {
          !metricName ? 
            <EvaluationDetailsChartEmptyState /> :
            <ResponsiveContainer height={250} width="100%">
              <LineChart
                width={500}
                height={300}
                data={chartData}
                margin={{
                  top: 20, right: 30, left: 20, bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" strokeWidth={2} dataKey="value" stroke="#00EC00" label={<CustomizedLabel />} />
              </LineChart>
            </ResponsiveContainer>
        }
      </Card.Body>
    </Card>
  );
};

EvaluationDetailsChart.propTypes = {
  metric: PropTypes.object
}

export default EvaluationDetailsChart;
