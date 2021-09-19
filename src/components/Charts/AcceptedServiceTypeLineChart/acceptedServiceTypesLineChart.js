import {React} from "react";
import { LineChart, CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line  } from 'recharts';

function AcceptedServiceTypesLineChart(){
    const data = [
        {
          "Date": "Sep 1",
          "Normal Post": 4000,
          "Registered Post": 2400,
          "Money Order": 2400,
          "Package delievery":1000
        },
        {
            "Date": "Sep 2",
          "Normal Post": 3000,
          "Registered Post": 1398,
          "Money Order": 2210,
          "Package delievery":2000
        },
        {
            "Date": "Sep 3",
          "Normal Post": 2000,
          "Registered Post": 7800,
          "Money Order": 2290,
          "Package delievery":3000
        },
        {
             "Date": "Sep 4",
          "Normal Post": 2780,
          "Registered Post": 3908,
          "Money Order": 2000,
          "Package delievery":4500
        },
        {
            "Date": "Sep 5",
          "Normal Post": 1890,
          "Registered Post": 4800,
          "Money Order": 2181,
          "Package delievery":1000
        },
        {
            "Date": "Sep 6",
          "Normal Post": 2390,
          "Registered Post": 3800,
          "Money Order": 2500,
          "Package delievery":3600
        },
        {
            "Date": "Sep 7",
          "Normal Post": 3490,
          "Registered Post": 4300,
          "Money Order": 2100,
          "Package delievery":6500
        },
        {
            "Date": "Sep 8",
          "Normal Post": 2000,
          "Registered Post": 6800,
          "Money Order": 2290,
          "Package delievery":3000
        },
        {
             "Date": "Sep 9",
          "Normal Post": 2780,
          "Registered Post": 3908,
          "Money Order": 2000,
          "Package delievery":4500
        },
        {
            "Date": "Sep 10",
          "Normal Post": 1890,
          "Registered Post": 4800,
          "Money Order": 2181,
          "Package delievery":1000
        },
        {
            "Date": "Sep 11",
          "Normal Post": 2390,
          "Registered Post": 3800,
          "Money Order": 2500,
          "Package delievery":7600
        },
        {
            "Date": "Sep 12",
          "Normal Post": 3490,
          "Registered Post": 4300,
          "Money Order": 2100,
          "Package delievery":1500
        }
      ]
      
    return (
        <LineChart width={1100} height={400} data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Legend  />
            <Line type="monotone" dataKey="Registered Post" stroke="#8884d8" />
            <Line type="monotone" dataKey="Normal Post" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Money Order" stroke="#daa1e3" />
            <Line type="monotone" dataKey="Package delievery" stroke="#dbd939" />
        </LineChart>
    )
}

export default AcceptedServiceTypesLineChart;