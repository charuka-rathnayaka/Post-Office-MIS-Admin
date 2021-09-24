import React from "react";
import { AreaChart, linearGradient,XAxis, YAxis,CartesianGrid,Tooltip,Area  } from 'recharts';
import { useSelector} from "react-redux";

function PerformanceChart(){
  const data = useSelector((state) => state.dashboardReducer.revenueData); 
    return(
        <AreaChart width={1100} height={450} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorNormalMail" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRegisterMail" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorMoneyOrder" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#daa1e3" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#daa1e3" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPackage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2ec720" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#2ec720" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="Normal Mail" stroke="#8884d8" fillOpacity={1} fill="url(#colorNormalMail)" />
            <Area type="monotone" dataKey="Registered Mail" stroke="#82ca9d" fillOpacity={1} fill="url(#colorRegisterMail)" />
            <Area type="monotone" dataKey="Money Order" stroke="#daa1e3" fillOpacity={1} fill="url(#colorMoneyOrder)" />
            <Area type="monotone" dataKey="Package Delievery" stroke="#daa1e3" fillOpacity={1} fill="url(#colorPackage)" />
            </AreaChart>
    )
}
export default PerformanceChart;