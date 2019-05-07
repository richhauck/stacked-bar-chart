import React, { Component } from 'react';

/** 
 * Represents blocks in chart
*/
class BarChart extends Component{
  
  render(){
    let chartData = this.props.chartData;
    let label = chartData.label;
    let chartValues = chartData.barValues;
    let chartBarValues = Object.values(chartData.barValues);
    let sum = chartBarValues.reduce((partial_sum, a) => partial_sum + a,0);
    var entries = Object.entries(chartValues);

    return(
      <>
        <h3>{label}</h3>
            <div>
                {entries.map(function(key, value){
                    let percent = Math.round((key[1]/sum)*100);
                    let inlineStyle = {height: percent + '%'};
                    let myClass = (key[0]).toLowerCase();

                    return <div 
                      onMouseEnter={this.mouseEnterHandler}
                      onMouseLeave={this.mouseLeaveHandler}
                      className={myClass} style={inlineStyle} 
                      key={key} 
                      data-percent={percent} 
                      data-label={key[0]} 
                      data-amount={key[1]}
                      >{key[0]}{key[1]} {percent + '%'} </div>;
                  }, this)}
            </div>
            <div>{sum}</div>
      </>
    )
  }
}
export default BarChart;
