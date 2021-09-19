import React from "react";
import { AreaChart, linearGradient,XAxis, YAxis,CartesianGrid,Tooltip,Area  } from 'recharts';

function PerformanceChart(){
    const data = [
        {
          "date": "Sep 1",
          "Mail": 4000,
          "Package": 2400,
          "Money Order": 2400
        },
        {
          "date": "Sep 2",
          "Mail": 3000,
          "Package": 1398,
          "Money Order": 2210
        },
        {
          "date": "Sep 3",
          "Mail": 2000,
          "Package": 9800,
          "Money Order": 2290
        },
        {
          "date": "Sep 4",
          "Mail": 2780,
          "Package": 3908,
          "Money Order": 2000
        },
        {
          "date": "Sep 5",
          "Mail": 1890,
          "Package": 4800,
          "Money Order": 2181
        },
        {
          "date": "Sep 6",
          "Mail": 2390,
          "Package": 3800,
          "Money Order": 2500
        },
        {
          "date": "Sep 7",
          "Mail": 3490,
          "Package": 4300,
          "Money Order": 2100
        },
        {
          "date": "Sep 8",
          "Mail": 1890,
          "Package": 4800,
          "Money Order": 2181
        },
        {
          "date": "Sep 9",
          "Mail": 2390,
          "Package": 3800,
          "Money Order": 6000
        },
        {
          "date": "Sep 10",
          "Mail": 1890,
          "Package": 4800,
          "Money Order": 2181
        },
        {
          "date": "Sep 11",
          "Mail": 2390,
          "Package": 3800,
          "Money Order": 4500
        },
        {
          "date": "Sep 12",
          "Mail": 1890,
          "Package": 4800,
          "Money Order": 5781
        },
        {
          "date": "Sep 13",
          "Mail": 2390,
          "Package": 3800,
          "Money Order": 2500
        },

      ]
    return(
        <AreaChart width={1100} height={450} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorMail" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPackage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorMoneyOrder" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#daa1e3" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#daa1e3" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Mail" stroke="#8884d8" fillOpacity={1} fill="url(#colorMail)" />
            <Area type="monotone" dataKey="Package" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPackage)" />
            <Area type="monotone" dataKey="Money Order" stroke="#daa1e3" fillOpacity={1} fill="url(#colorMoneyOrder)" />
            </AreaChart>
    )
}
export default PerformanceChart;