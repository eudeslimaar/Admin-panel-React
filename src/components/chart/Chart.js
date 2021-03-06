import React from 'react'
import './chart.scss'
// React Chart API
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Chart = () => {
  const data = [
    {
      name: 'Page A',
      total: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      total: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      total: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      total: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      total: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      total: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      total: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="chart">

    <ResponsiveContainer width="100%" aspect={2/1}>
    <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
 
</AreaChart>
    </ResponsiveContainer>
          </div>
  );
}


export default Chart