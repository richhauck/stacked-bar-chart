export default class ChartDataFilter {

    /**
     * Creates a deep clone of chartData and returns version with filtered data set to zero 
     * @param {String} viewMode 
     * @param {Object} chartData 
     */
    static getFilteredData(viewMode, chartData) {
      let clone = JSON.parse(JSON.stringify(chartData));
      
      switch(viewMode){
        case 'critical':
          clone.barValues.High = 0;
          clone.barValues.Medium = 0;
          clone.barValues.Low = 0;
        break;
        case 'critical-high':
          clone.barValues.Medium = 0;
          clone.barValues.Low = 0;
        break;
          case 'critical-high-medium':
          clone.barValues.Low = 0;
        break;
        case 'low':
          clone.barValues.Critical = 0;
          clone.barValues.High = 0;
          clone.barValues.Medium = 0;
          break;
        default:
      }
      return clone;
    }
  }