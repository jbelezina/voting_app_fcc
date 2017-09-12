import React from 'react';
import {BarChart, Bar}  from 'recharts';

class TinyBarChart extends React.Component {
    
    
    
    render(){
      
      const data = [
      {name: 'Paganini', votes: 30},
      {name: 'Chopin', votes: 20},
      {name: 'Elvis', votes: 10},
      {name: 'Chaplin', votes: 50},
      ];
      
        return (
        <span>
          <BarChart width={100} height={40} data={data}>
            <Bar dataKey='votes' fill='#000000'/>
          </BarChart>
        </span>
        )
    }
}

export default TinyBarChart;