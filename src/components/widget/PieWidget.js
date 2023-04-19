import React from 'react';
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

export default function PieWidget() {
  const chartData = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  return (
      <div className="widget" style={{minHeight:"240px",minWidth:"350px"}} >
      <div className="">
        <span className="title">Top products</span>
        <span  style={{margin:'3px'}}>
        <Pie data={chartData} style={{maxHeight:"200px"}}/>
        </span>
      </div>
      <div className="right">
     <p> May - June 2021</p>
      </div>
    </div>
  )
}
