import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import BarChart from './BarChart';
export class Charts extends Component {

  componentDidMount() {
    // Make request for data JSON
    this.props.getData();
  }
  render() {
    return (
      <>
      <h1>Charts</h1>

      { /* Check if data has loaded */
        this.props.isLoaded ? (
        <>
          <BarChart chartData={this.props.beforeData} />
          <BarChart chartData={this.props.afterData} />
        </>
      ) : (
        <p>Loading...</p>
      )}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    beforeData: state.beforeData,
    afterData: state.afterData,
    isLoaded: state.isLoaded
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(Charts);