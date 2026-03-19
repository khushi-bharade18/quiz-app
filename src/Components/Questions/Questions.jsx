import React, { useContext, useState } from "react";
import Context from "../../Context/CreateContext";

export default function Questions() {
  const {
    data,
    currQue,
    setCurrQue,
    selectedOption,
    setSelectedOption,
    score,
    setScore,
  } = useContext(Context);

  const question = data[currQue];

  function handleNext() {
    if (selectedOption === question.answer) {
      setScore((prev) => prev + 1);
    }

    if (currQue < data.length ) {
      setCurrQue((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setScore(true);
    }
  }
  return (
    <div className=" flex items-center justify-center p-4 rounded-2xl">
      <div className="w-full max-w-xl bg-white rounded-2xl p-6 space-y-6">
        <p className="text-lg font-semibold text-gray-800 flex justify-between items-center">
          <span>
            Q.{question.id} {question.question}
          </span>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {currQue + 1}/{data.length}
          </span>
        </p>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all duration-200${selectedOption === index ? "bg-indigo-100 border-indigo-400" : "bg-white hover:bg-gray-50"}`}
            >
              <input
                type="radio"
                name="option"
                onChange={() => setSelectedOption(index)}
                checked={selectedOption === index}
                className="accent-indigo-500"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={selectedOption === null}
          className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-200
        ${
          selectedOption === null
            ? "bg-indigo-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700 active:scale-99"
        }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
