import { useState } from "react";
import ReactDOM from "react-dom";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "./StockChart.css";

const StockChart = ({ stockCandles, onModalClose, onChangeDates, dates }) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active popup-container">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standart modal visible active"
      >
        <div className="header">Stock Candles</div>
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
