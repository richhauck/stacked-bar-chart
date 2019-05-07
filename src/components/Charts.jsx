import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
import BarChart from './BarChart';
import styled, {ThemeProvider} from 'styled-components';
import ChartDataFilter from '../utils/ChartDataFilter';

const chartTheme = {
  color: '#666',
  fontSize: '12px',
  padding: '1em',
  transition: 'all 0.5s cubic-bezier(0.39, 0.575, 0.565, 1)',
  criticalColor: '#e55242',
  highColor: '#e88542',
  mediumColor: '#8bdef2',
  lowColor: '#f7f79f'
}
const BarChartHolder = styled.div`
  display: flex;
  margin: 0 auto;
  width: 344px;
  height: 100%;
`

export class Charts extends Component {

  componentDidMount() {
    // Make request for data JSON
    this.props.getData();
  }
  render() {
    let viewMode = this.props.viewMode;
    let formattedBeforeData = ChartDataFilter.getFilteredData(viewMode, this.props.beforeData);
    let formattedAfterData = ChartDataFilter.getFilteredData(viewMode, this.props.afterData);

    return (
      <>
      { /* Check if data has loaded */
        this.props.isLoaded ? (
          <ThemeProvider theme={chartTheme}>
            <BarChartHolder>
              <BarChart chartData={formattedBeforeData} />
              <BarChart chartData={formattedAfterData} />
            </BarChartHolder>
          </ThemeProvider>
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
    isLoaded: state.isLoaded,
    viewMode: state.viewMode
  };
}
export default connect(
  mapStateToProps,
  { getData }
)(Charts);