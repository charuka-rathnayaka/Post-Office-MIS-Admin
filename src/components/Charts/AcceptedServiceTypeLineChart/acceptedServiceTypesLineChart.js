import {React} from "react";
import { LineChart, CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line  } from 'recharts';
import { useSelector} from "react-redux";

function AcceptedServiceTypesLineChart(){
  const data = useSelector((state) => state.statisticsReducer.countData);
    return (
        <LineChart width={1050} height={400} data={data}
            margin={{ top: 5, right: 5, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis label={{ value: 'Number of Items', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
            <Tooltip />
            <Legend  />
            <Line type="monotone" dataKey="Registered Mail" stroke="#8884d8" />
            <Line type="monotone" dataKey="Normal Mail" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Money Order" stroke="#daa1e3" />
            <Line type="monotone" dataKey="Package Delievery" stroke="#dbd939" />
        </LineChart>
    )
}

export default AcceptedServiceTypesLineChart;