import React, { useState } from "react";
import Context from "./CreateContext";
import { questions } from "../Data/data";

export default function ContextComp({ children }) {
  const data = questions;
  const [currQue, setCurrQue] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  return (
    <Context.Provider
      value={{
        data,
        currQue,
        setCurrQue,
        selectedOption,
        setSelectedOption,
        score,
        setScore,
        showResult,
        setShowResult,
      }}
    >
      {children}
    </Context.Provider>
  );
}
