// Dependencies
import React, { useMemo } from "react";
// @https://github.com/tannerlinsley/react-charts
import { Chart } from "react-charts";
import Card from "react-bootstrap/Card";

// Components
import EvaluationDetailsChartEmptyState from './EvaluationDetailsChartEmptyState'

const EvaluationDetailsChart = () => {
  const data = useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          { x: 1, y: 10 },
          { x: 2, y: 13 },
          { x: 3, y: 15 }
        ]
      }
    ],
    []
  )
  
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <Card className="evaluation-details-chart shadow-sm pt-3 px-3 mb-4 bg-white rounded">
      <Card.Title>Activity</Card.Title>
      <Card.Body>
        <EvaluationDetailsChartEmptyState />
        {/* <div
          style={{
            width: '100%',
            height: '15rem'
          }}
        >
          <Chart data={data} axes={axes} />
        </div> */}
      </Card.Body>
    </Card>
  );
};

export default EvaluationDetailsChart;
