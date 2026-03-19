import React, { useState } from "react";
import Context from "./CreateContext";
import { questions } from "../Data/data";

export default function ContextComp({ children }) {
  const data = questions;
  const [score, setScore] = useState(0);
  return (
    <Context.Provider value={{ data, score, setScore }}>
      {children}
    </Context.Provider>
  );
}
