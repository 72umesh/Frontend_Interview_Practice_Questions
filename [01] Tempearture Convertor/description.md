## Temperature Convertor

Build a **temperature convertor** using React that allows users to convert values between **Celsius**, **Fahrenheit**, and **Kelvin**.

### Things to do

#### 1. An input field to enter a numeric temperature.

#### 2. Two Dropdowns to Choose From: 
- The "From" unit (Celsius, Fahrenheit, Kelvin).
- The "To" unit (Celsius, Fahrenheit, Kelvin).

#### 3. A Convert button that triggers the conversion when clicked.

### Important Notes
#### The Convert button should remain disabled if:
- The temperature field is empty
- Either unit (From or To) is not selected

#### When button is clicked, the conversion should:
- Get the input value and selected units (fromUnit and toUnit).
- Convert the value to Celsius as an intermediate step
- Convert from Celsius to the target unit
- Display the result as: `{input}` `{fromUnit}` is `{convertedValue}` `{toUnit}`. ex. 45 Celsius is 113.00 Fahrenheit

#### Display the final converted value rounded to 2 decimal places.

### Testing Instructions

Please use the following `data-testid` attributes in your React component:

- `temperature-input` → for the temperature `<input />`
- `from-unit` → for the "From Unit" `<select />`
- `to-unit` → for the "To Unit" `<select />`
- `convert-button` → for the "Convert" `<button />`