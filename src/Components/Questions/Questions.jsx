import React, { useContext, useEffect, useRef, useState } from "react";
import Context from "../../Context/CreateContext";

export default function Questions() {
  const {
    data,
    currQue,
    setCurrQue,
    selectedOption,
    setSelectedOption,
    setScore,
    setShowResult,
    usersAnswer,
    setUsersAnswer,
    time,
    setTime,
  } = useContext(Context);

  const question = data[currQue];

  function handleNext() {
    setUsersAnswer((prev) => [...prev, selectedOption]);
    setTime(10);
    if (currQue < data.length - 1) {
      setCurrQue((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
    if (selectedOption === question.answer) {
      setScore((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (time === 0) {
      handleNext();
    }
  }, [time]);

  return (
    <div
      className="flex items-center justify-center p-2"
      tabIndex={0}
      autoFocus
      onKeyDown={(e) => {
        if (e.key === "Enter" && selectedOption !== null) {
          handleNext();
        }
      }}
    >
      <div className="w-full max-w-xl bg-white/60 backdrop-blur-2xl rounded-2xl p-4 md:p-5 space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-white/30 transition-all duration-300">
        <div className="flex justify-between items-start gap-3">
          <p className="text-base md:text-lg font-semibold text-gray-800 leading-snug">
            Q.{question.id} {question.question}
          </p>

          <span className="text-xs font-medium text-indigo-600 bg-indigo-100 px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap">
            {currQue + 1}/{data.length}
          </span>
        </div>

        <div className="space-y-2">
          {question.options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center gap-2.5 p-2.5 border rounded-lg cursor-pointer transition-all duration-200
          ${
            selectedOption === index
              ? "bg-indigo-100 border-indigo-400 shadow-sm"
              : "bg-white/80 hover:bg-indigo-50 hover:border-indigo-300"
          }`}
            >
              <input
                type="radio"
                name="option"
                onChange={() => setSelectedOption(index)}
                checked={selectedOption === index}
                className="accent-indigo-500 scale-105 outline-none"
              />
              <span className="text-sm text-gray-700 font-medium">
                {option}
              </span>
            </label>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={selectedOption === null}
          className={`w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-all duration-200
      ${
        selectedOption === null
          ? "bg-indigo-300 cursor-not-allowed"
          : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 active:scale-95 shadow-md hover:shadow-lg"
      }`}
        >
          {currQue === data.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
