import React from 'react'
import data from "../../data/data"
import './chart.scss'
// React Chart API
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const Chart = () => {
  return (
    <div className='chart'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="gain" fill="#9878f1ee" />
          <Bar dataKey="loss" fill="#f08842" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart