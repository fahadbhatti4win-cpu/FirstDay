import React from 'react'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'


const Reharts = () => {
  return (
    <div>
      <h1>Recharts</h1>
      <ResponsiveContainer width="750%" aspect={2}>
            <LineChart>
                  <XAxis/>
                  <YAxis/>
                  <Line/>
                  <Line/>
            </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Reharts
