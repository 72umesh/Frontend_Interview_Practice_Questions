### Random Password Generator

Build a random password generator using React that allows users to create secure passwords based on their selected criteria.

#### Things to do
- Choose the desired password length (between 1 and 20).
- Select the character types to include:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Symbols
- Generate a random password based on the selected options.
- Display the generated password.

### Features to Done

1. Password Length 
- Minimum password length: 1
- Maximum password length: 20
- Default length should
```js
  const [length, setLength] = useState(4);
```
- If length exceeds 20, limit it to 20 and show:"Max length is 20".

2. Character Type Selection
Let users choose which character types to include via checkboxes:
- Lowercase letters (default: checked)
- Uppercase letters (default: unchecked)
- Numbers (default: unchecked)
- Symbols (default: unchecked)

3. Input Validation
- If no character types are selected, show "Select at least one option".

```js  
expect(await screen.findByTestId("error-message")).toHaveTextContent(
      /Select at least one option/i
    );
```
- Prevent generating a password if length is 0 or no character types are selected, show "Length cannot be Empty or 0"


### Testing Instructions

Please use the following `data-testid` attributes in your React component:

- `length-input` → for the input length `<input type="number" />`
- `lowercase-checkbox` → for the "LowerCase-Checkbox" `<input type="checkbox" />`
- `uppercase-checkbox` → for the "Uppercase-Checkbox" `<input type="checkbox" />`
- `number-checkbox` → for the "Number-Checkbox" `<input type="checkbox" />`
- `symbols-checkbox` → for the "Symbol-Checkbox" `<input type="checkbox" />`
- `generate-button` → for the "Convert" `<button />`
- `result` → for the generated password result`
- `error-message` → for the Error Message