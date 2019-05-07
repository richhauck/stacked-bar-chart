import React, { Component } from 'react';
import styled from 'styled-components';

const Tip = styled.div`
    position: absolute;
    transition: opacity 0.3s ease-in, top 0.3s ease-in;
    pointer-events: none;
`
const TipContent = styled.div`
    z-index: 100;
    position: relative;
    background-color: #666;
    color: #fff;
    height: 25px;
    width: 130px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 10px;
    text-align: center;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow-down {
        position: absolute;
        width: 0; 
        height: 0; 
        bottom: -10px;
        border-left: 13px solid transparent;
        border-right: 13px solid transparent;
        border-top: 10px solid #666;
    }
`
/** 
 * Tooltip for displaying bar chart values.
*/
class ToolTip extends Component{
  render(){

    // determine opacity and positioning as inline styling
    let myOpacity = this.props.isShowing ? 100 : 0;

    // adjust values to center
    let xPos = this.props.x - 25;
    let yPos = this.props.y - 35;
    
    let inlineStyle = {
        'opacity': myOpacity,
        'left': xPos,
        'top': yPos
    };

    return(
      <Tip style={inlineStyle}>
        <TipContent>
        <div>{this.props.message}</div>
        <div className="arrow-down"></div>
        </TipContent>
      </Tip>
    )
  }
}
export default ToolTip;