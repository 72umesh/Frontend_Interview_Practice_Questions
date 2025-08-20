import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PasswordGenerator from "./PasswordGenerator";
import "@testing-library/jest-dom";

describe("PasswordGenerator", () => {
  it("Renders all input elements and buttons", () => {
    render(<PasswordGenerator />);
    expect(screen.getByTestId("length-input")).toBeInTheDocument();
    expect(screen.getByTestId("lowercase-checkbox")).toBeInTheDocument();
    expect(screen.getByTestId("uppercase-checkbox")).toBeInTheDocument();
    expect(screen.getByTestId("number-checkbox")).toBeInTheDocument();
    expect(screen.getByTestId("symbols-checkbox")).toBeInTheDocument();
    expect(screen.getByTestId("generate-button")).toBeInTheDocument();
  });

  it("Limits password length to max 20", async () => {
    render(<PasswordGenerator />);
    const input = screen.getByTestId("length-input");
    fireEvent.change(input, { target: { value: 25 } });

    expect(input.value).toBe("20");

    expect(await screen.findByTestId("error-message")).toHaveTextContent(
      /Max length is 20/i
    );

    fireEvent.click(screen.getByTestId("generate-button"));
    const result = screen.getByTestId("result");
    expect(result.value).not.toBe("");
  });

  it("Generates a password of the selected length", () => {
    render(<PasswordGenerator />);
    fireEvent.change(screen.getByTestId("length-input"), {
      target: { value: 10 },
    });
    fireEvent.click(screen.getByTestId("generate-button"));

    const result = screen.getByTestId("result");
    expect(result).toBeInTheDocument();
    expect(result.value.length).toBe(10);
  });

  it("Shows Error if no checkbox is selected", async () => {
    render(<PasswordGenerator />);

    const lowercase = screen.getByTestId("lowercase-checkbox");
    fireEvent.click(lowercase);

    await waitFor(() => {
      expect(lowercase.checked).toBe(false);
    });

    fireEvent.click(screen.getByTestId("generate-button"));

    expect(await screen.findByTestId("error-message")).toHaveTextContent(
      /Select at least one option/i
    );
  });

  it("Shows error when length is zero", async () => {
    render(<PasswordGenerator />);
    fireEvent.change(screen.getByTestId("length-input"), {
      target: { value: 0 },
    });
    fireEvent.click(screen.getByTestId("generate-button"));
    expect(
      await screen.findByText(/Length cannot be Empty or 0/i)
    ).toBeInTheDocument();
  });
});
