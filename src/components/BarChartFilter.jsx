import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import classNames from 'classnames';
import { setViewMode } from "../actions/index";

const Bar = styled.div`
    position: absolute;
    width: calc(100% - 20px);
    bottom: 0;
    left:0;
    background-color: #666;
    padding: 10px;
    font-size: 11px;
    text-align: center;

    button{
      padding: 5px 10px;
      border: none;
      margin: 0.5px;
      cursor: pointer;
      transition: ${props => props.theme.transition};
      background-color: #fff;
      &:hover, &.active{
        color: #fff;
        background-color: #999;
      }
    }
`
/** 
 * Tooltip for displaying bar chart values.
*/
class BarChartFilter extends Component{
  
  componentDidMount() {
    // set view mode to all by default
    this.props.setViewMode('all');
  }
  /**
   * clickHandler - passes name of overlay
   *
   * @param  {string} targetMode    mode to display
   * @param  {object} e             event
   */
  clickHandler = (targetMode, e) => {
    this.props.setViewMode(targetMode);
  }
  render(){

    let viewMode = this.props.viewMode;

    let viewAllClasses = classNames('btn', {'active': viewMode ==='all'});
    let criticalClasses = classNames('btn', {'active': viewMode ==='critical'});
    let criticalHighClasses = classNames('btn', {'active': viewMode ==='critical-high'});
    let criticalHighMediumClasses = classNames('btn', {'active': viewMode ==='critical-high-medium'});
    let lowClasses = classNames('btn', {'active': viewMode ==='low'});

    return(
      <Bar> 
          <button className={viewAllClasses} onClick={this.clickHandler.bind(this, 'all')}><div className="critical icon"/> <div className="high icon"/> <div className="medium icon"/><div className="low icon"/><span>View All</span></button>
          <button className={criticalClasses} onClick={this.clickHandler.bind(this, 'critical')}><div className="critical icon"/> <span>Critical Only</span></button>
          <button className={criticalHighClasses} onClick={this.clickHandler.bind(this, 'critical-high')}><div className="critical icon"/> <div className="high icon"/> <span>Critical/High</span></button>
          <button className={criticalHighMediumClasses} onClick={this.clickHandler.bind(this, 'critical-high-medium')}><div className="critical icon"/> <div className="high icon"/> <div className="medium icon"/><span>Critical/High/Medium</span></button>
          <button className={lowClasses} onClick={this.clickHandler.bind(this, 'low')}><div className="low icon"/><span>Low Only</span></button>
      </Bar>
    )
  }
}
function mapStateToProps(state) {
  return {
    viewMode: state.viewMode
  };
}
export default connect(
  mapStateToProps,
  { setViewMode }
)(BarChartFilter);
