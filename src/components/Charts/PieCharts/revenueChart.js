import React from "react"
import { PieChart,Pie ,Cell } from 'recharts';
import { useSelector} from "react-redux";

function RevenueChart(){
 
  const data = useSelector((state) => state.statisticsReducer.revenuePieData); 
      let renderLabel = function(entry) {
        return entry.name;
    } 
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return(
        <PieChart width={500} height={350}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={130} fill="#8884d8" label={renderLabel} >
            {data?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>

            
        </PieChart>
    )
}

export default RevenueChart;

