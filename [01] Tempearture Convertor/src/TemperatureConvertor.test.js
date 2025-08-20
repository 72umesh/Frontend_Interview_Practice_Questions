import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TemperatureConvertor from "./TemperatureConvertor";
import "@testing-library/jest-dom";

describe("TemperatureConvertor", () => {
  it("Disables convert button if inputs are missing", () => {
    render(<TemperatureConvertor />);
    const convertBtn = screen.getByTestId("convert-button");
    expect(convertBtn).toBeDisabled();
  });

  it("Enables convert button when all fields are filled", () => {
    render(<TemperatureConvertor />);
    const input = screen.getByTestId("temperature-input");
    const fromUnit = screen.getByTestId("from-unit");
    const toUnit = screen.getByTestId("to-unit");
    const convertBtn = screen.getByTestId("convert-button");

    fireEvent.change(input, { target: { value: "100" } });
    fireEvent.change(fromUnit, { target: { value: "Celsius" } });
    fireEvent.change(toUnit, { target: { value: "Fahrenheit" } });

    expect(convertBtn).not.toBeDisabled();
  });

  it("Converts Celsius to Fahrenheit and displays result", () => {
    render(<TemperatureConvertor />);
    const input = screen.getByTestId("temperature-input");
    const fromUnit = screen.getByTestId("from-unit");
    const toUnit = screen.getByTestId("to-unit");
    const convertBtn = screen.getByTestId("convert-button");

    fireEvent.change(input, { target: { value: "100" } });
    fireEvent.change(fromUnit, { target: { value: "Celsius" } });
    fireEvent.change(toUnit, { target: { value: "Fahrenheit" } });

    fireEvent.click(convertBtn);

    const result = screen.getByText(/100 Celsius is 212.00 Fahrenheit/i);
    expect(result).toBeInTheDocument();
  });
  it("Converts Fahrenheit to Kelvin and displays result", () => {
    render(<TemperatureConvertor />);
    const input = screen.getByTestId("temperature-input");
    const fromUnit = screen.getByTestId("from-unit");
    const toUnit = screen.getByTestId("to-unit");
    const convertBtn = screen.getByTestId("convert-button");

    fireEvent.change(input, { target: { value: "32" } });
    fireEvent.change(fromUnit, { target: { value: "Fahrenheit" } });
    fireEvent.change(toUnit, { target: { value: "Kelvin" } });

    fireEvent.click(convertBtn);

    const result = screen.getByText(/32 Fahrenheit is 273.15 Kelvin/i);
    expect(result).toBeInTheDocument();
  });
  it("Converts  Kelvin to Celsius and displays result", () => {
    render(<TemperatureConvertor />);
    const input = screen.getByTestId("temperature-input");
    const fromUnit = screen.getByTestId("from-unit");
    const toUnit = screen.getByTestId("to-unit");
    const convertBtn = screen.getByTestId("convert-button");

    fireEvent.change(input, { target: { value: "273.15" } });
    fireEvent.change(fromUnit, { target: { value: "Kelvin" } });
    fireEvent.change(toUnit, { target: { value: "Celsius" } });

    fireEvent.click(convertBtn);

    const result = screen.getByText(/273.15 Kelvin is 0.00 Celsius/i);
    expect(result).toBeInTheDocument();
  });
});
