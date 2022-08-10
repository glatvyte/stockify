import ReactDOM from "react-dom";
import "./StockChart.css";

const StockChart = ({ stockCandles, onModalClose }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active popup-container">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standart modal visible active"
      >
        <div className="header">Stock Candles</div>
        <div className="stock-container">
          <p>POP UP VEIKIA</p>
        </div>
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
