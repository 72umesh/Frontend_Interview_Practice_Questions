import { useState } from "react";
import "./src/PasswordGenerator.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);

  function handleLengthChange(e) {}
  function generatePassword() {
    {
      /*Add the logic to create Random Password Generator*/
    }
  }
  return (
    <div className="passwordGenerator">
      <h1>Password Generator</h1>
      <p>Create a secure and Strong Password, to keep your account Safe</p>

      <div className="passwordGenerator-container">
        {/*Add you logic to the inputs*/}
        <label htmlFor="passwordLength">
          Password Length
          <input type="number" value={length} id="passwordLength" />
        </label>

        <div className="checkboxes">
          <label>
            <input type="checkbox" />
            Include LowerCase
          </label>

          <label>
            <input type="checkbox" />
            Include UpperCase
          </label>

          <label>
            <input type="checkbox" />
            Include Numbers
          </label>

          <label>
            <input type="checkbox" />
            Include Symbols
          </label>
        </div>

        <button className="generate-btn" onClick={generatePassword}>
          Generate
        </button>

        <div className="result">
          <input type="text" value={password} />
        </div>
      </div>
    </div>
  );
}
export default PasswordGenerator;
