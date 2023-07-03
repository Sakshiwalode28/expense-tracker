import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';


const Chart = (props) => {
  const dataPointValues = props.dataPoints? props.dataPoints.map(dataPoint => dataPoint.value) : "Loading...."
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      { props.dataPoints ? props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      
      ))
    :
    "Loading..."
    }
    </div>
  );
};

export default Chart;