import { useState, useEffect } from "react";
import "./src/TemperatureConvertor.css";

function TemperatureConvertor() {
  useEffect(() => {
    // Disabled the Button If Temperature or Fromunit or toUnit is Empty
  }, []);

  function convertTemperature() {
    // Conversion logic
  }

  return (
    <div className="temperatureConvertor">
      <h1>Temperature Convertor</h1>
      <p>
        Enter a value and convert it between Celsius, Fahrenheit, and Kelvin.
      </p>

      <form className="tempForm">
        <div className="inputs">
          {/* Add values and onChange Logic*/}
          <input
            data-testid="temperature-input"
            type="number"
            id="temperatureUnit"
            value={temperature}
          />

          <select id="fromUnit" data-testid="from-unit" value={fromUnit}>
            {/* Options */}
          </select>

          <select id="toUnit" data-testid="to-unit" value={toUnit}>
            {/* Options */}
          </select>

          {/* Make it Disabled , Only Enabled if all values are true */}
          <button data-testid="convert-button" id="convert-btn">
            Convert
          </button>
        </div>

        <div>
          <p id="result">{result}</p>
        </div>
      </form>
    </div>
  );
}
export default TemperatureConvertor;
