import React from "react"
import { PieChart,Pie ,Cell } from 'recharts';

function RevenueChart(){

    
    const data = [
        { name: 'Normal Mail', value: 400 },
        { name: 'Registered Mail', value: 300 },
        { name: 'Money Order', value: 300 },
        { name: 'Package delievery', value: 200 },
      ];
    
    
      let renderLabel = function(entry) {
        return entry.name;
    }
    const renderCustomizedLabel = ({
        x, y, name
      }) => {
        return (
          <text x={x+10} y={y} fill="black" textAnchor="end" dominantBaseline="central">
            {name}
          </text>
        );
      };
    
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label/>

    return(
        <PieChart width={500} height={300}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={130} fill="#8884d8" label={renderLabel}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>

            
        </PieChart>
    )
}

export default RevenueChart;

/*{testMeasurments.map(s=>
                <Pie 
                dataKey="value"
                isAnimationActive={false} 
                data={s.data} 
                cx="50%"
                cy="50%"
                outerRadius={130} 
                fill="#fff"
                label
                />
            )}*/