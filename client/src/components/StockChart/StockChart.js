import ReactDOM from "react-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "./StockChart.css";

const StockChart = ({
  stockCandles,
  onModalClose,
  onChangeDates,
  dates,
  selectedCompany,
}) => {
  console.log(dates);

  const transformData = (data) => {
    return data.c.map((item, index) => ({
      close: Number(item).toFixed(2),
      open: Number(data.o[index]).toFixed(2),
      timestamp: new Date(data.t[index] * 1000).toLocaleDateString(),
    }));
  };

  const renderLineChart = () => {
    return (
      <LineChart
        width={800}
        height={400}
        data={transformData(stockCandles)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis type="number" allowDecimals={true} allowDataOverflow={true} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="open" stroke="blue" dot={false} />
        <Line type="monotone" dataKey="close" stroke="gray" dot={false} />
      </LineChart>
    );
  };

  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active popup-container">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standart modal visible active"
      >
        <div className="header">
          {selectedCompany.name} ({selectedCompany.ticker})
        </div>
        <div className="stock-container">
          <SemanticDatepicker
            onChange={onChangeDates}
            value={dates}
            type="range"
            datePickerOnly={true}
            showToday={false}
            clearable={false}
          />
        </div>
        {renderLineChart()}
        <div className="actions">
          <button onClick={onModalClose} className="ui button negative">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default StockChart;
