import React from 'react';
import {BarChart, Bar, XAxis, CartesianGrid, Tooltip}  from 'recharts';
import './css/LargeBarChart.css';

class LargeBarChart extends React.Component {
    
    render(){
      
      let data = null;
      
      if (this.props.answers) {
        data = this.props.answers.map((answer)=>{
        return {name: answer.answer, votes: answer.votes}
      })
      }
      
      
/*      
      [
      {name: 'Paganini', votes: 30},
      {name: 'Chopin', votes: 20},
      {name: 'Elvis', votes: 10},
      {name: 'Chaplin', votes: 50},
    ]; */
      
        return (
        <div className="aligned">
          <BarChart width={600} height={300} data={data} margin={{top:5, right:0, bottom:5, left:0}}>
            <XAxis dataKey="name"/>
            <CartesianGrid  />
            <Tooltip/>
            <Bar dataKey="votes" fill="#8884d8" />
          </BarChart>
        </div>
        )
    }
}

export default LargeBarChart;