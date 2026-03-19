import React, { useContext, useState } from "react";
import Context from "../../Context/CreateContext";

export default function Questions() {
  const { data } = useContext(Context);
  const [currQue, setCurrQue] = useState(0);
  const question = data[currQue];
  const [selectedOption, setSelectedOption] = useState(null);

  function handleNext() {
    setCurrQue((prev) => prev + 1);
    setSelectedOption(null);
  }
  return (
    <div>
      <p>
        Q.{question.id} {question.question}
      </p>
      {question.options.map((option, index) => (
        <label key={index} htmlFor="options">
          <input
            type="radio"
            name="option"
            onChange={() => setSelectedOption(index)}
            checked={selectedOption === index}
          />
          {option}
        </label>
      ))}
      <button onClick={handleNext} disabled={selectedOption === null}>
        Next
      </button>
    </div>
  );
}
