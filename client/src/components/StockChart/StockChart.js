import ReactDOM from "react-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "./StockChart.scss";

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
      <ResponsiveContainer width="90%" height={400}>
        <LineChart
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
      </ResponsiveContainer>
    );
  };

  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standart modal visible active"
      >
        <div className="header">
          {selectedCompany.name} ({selectedCompany.ticker})
          <button onClick={onModalClose} className="ui button">
            <i id="close-icon" className="close icon"></i>
          </button>
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
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default StockChart;
