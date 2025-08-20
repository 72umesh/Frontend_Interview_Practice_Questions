import { useState, useEffect } from "react";
import "./TemperatureConvertor.css";

function TemperatureConvertor() {
  const [temperature, setTemperature] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [result, setResult] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!(temperature && fromUnit && toUnit));
  }, [temperature, fromUnit, toUnit]);

  function handleTemperatureConversion() {
    const value = parseFloat(temperature);

    let tempInCelsius, convertedValue;

    // Converted from temperature to Celsius
    if (fromUnit === "Celsius") {
      tempInCelsius = value;
    } else if (fromUnit === "Fahrenheit") {
      tempInCelsius = (value - 32) * (5 / 9);
    } else if (fromUnit === "Kelvin") {
      tempInCelsius = value - 273.15;
    }

    // Converted from  Celsius to Expected value
    if (toUnit === "Celsius") {
      convertedValue = tempInCelsius;
    } else if (toUnit === "Fahrenheit") {
      convertedValue = tempInCelsius * (9 / 5) + 32;
    } else if (toUnit === "Kelvin") {
      convertedValue = tempInCelsius + 273.15;
    }
    setResult(`${value} ${fromUnit} is ${convertedValue.toFixed(2)} ${toUnit}`);
  }

  return (
    <div className="temperatureConvertor">
      <h1>Temperature Convertor</h1>
      <p>
        Enter a value and convert it between Celsius, Fahrenheit, and Kelvin.
      </p>

      <form className="tempForm">
        <div className="inputs">
          <input
            data-testid="temperature-input"
            type="number"
            id="temperatureUnit"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />

          <select
            id="fromUnit"
            data-testid="from-unit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            <option value="">From Unit</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Celsius">Celsius</option>
            <option value="Kelvin">Kelvin</option>
          </select>

          <select
            id="toUnit"
            data-testid="to-unit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            <option value="">To Unit</option>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Celsius">Celsius</option>
            <option value="Kelvin">Kelvin</option>
          </select>

          <button
            data-testid="convert-button"
            id="convert-btn"
            disabled={isButtonDisabled}
            onClick={(e) => {
              e.preventDefault();
              handleTemperatureConversion();
            }}
          >
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
