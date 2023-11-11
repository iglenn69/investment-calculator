import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid =
    userInput.duration > 0 &&
    userInput.expectedReturn > 0 &&
    userInput.annualInvestment > 0 &&
    userInput.initialInvestment > 0 &&
    userInput.duration < 100;

  /**
   * Updates the user input state with a new value for a specific input field.
   * 
   * @param {string} inputIdentifier - The identifier of the input field to update.
   * @param {number} newValue - The new value to set for the input field.
   */
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return { ...prev, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* Results go here */}
      {!inputIsValid && (
        <p className="error">
          Please enter valid values for all input fields.
        </p>
      )}
      { inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
