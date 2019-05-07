import React, { Component } from 'react';
import styled from 'styled-components';

const Chart = styled.div`
    color: ${props => props.theme.color};
    font-size: ${props => props.theme.fontSize};
    width: 100px;
    margin: 10px 36px;
    text-align: center;

    h3{
        text-transform: uppercase;
        font-weight: normal;
    }
`
const BoxHolder = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   max-height: 500px;
   margin-bottom: 1em;

   .critical{background-color: ${props => props.theme.criticalColor};}
   .high{background-color: ${props => props.theme.highColor};}
   .medium{background-color: ${props => props.theme.mediumColor};}
   .low{background-color: ${props => props.theme.lowColor};}

   & > div{
     cursor: pointer;
   }
`
/** 
 * Represents blocks in chart
*/
class BarChart extends Component{
  state = {
    message: '',
    isToolTipShowing: false,
    xPos: 0,
    yPos: 0
  };
  /** 
   * Assemble message from data attributes and shows tooltip
   * @param e   Event {Object}
  */
  mouseEnterHandler = (e) =>{
    
    let dataset = e.target.dataset;                 // get data attributes
    let rect = e.target.getBoundingClientRect();    // get bounding box for positioning

    // assemble message
    let msg = '#' + dataset.label + ' ' + dataset.amount + ' (' + dataset.percent + '%)';

    // get positioning
    let targX = rect.x;
    let targY = rect.y;

    this.setState({
      isToolTipShowing: true,
      message: msg,
      xPos: targX,
      yPos: targY
  });
  }
  /** 
   * Clears message and hides tooltip
   * @param e   Event {Object}
  */
  mouseLeaveHandler = (e) =>{
    this.setState({
      isToolTipShowing: false
    });
  }
  
  render(){
    let chartData = this.props.chartData;
    let label = chartData.label;
    let chartValues = chartData.barValues;
    let chartBarValues = Object.values(chartData.barValues);
    let sum = chartBarValues.reduce((partial_sum, a) => partial_sum + a,0);
    var entries = Object.entries(chartValues);

    return(
      <>
      <Chart>
        <h3>{label}</h3>
            <BoxHolder>
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
                      ></div>;
                  }, this)}
            </BoxHolder>
            <div>{sum}</div>
      </Chart>
      </>
    )
  }
}
export default BarChart;