import React, { useContext } from "react";
import Questions from "./Questions/Questions";
import Context from "../Context/CreateContext";
import Result from "./Result/Result";

export default function Parent() {
  const { showResult, setScore, setShowResult, setCurrQue, setSelectedOption } =
    useContext(Context);

  function handleReset() {
    setShowResult(false);
    setScore(0);
    setCurrQue(0);
    setSelectedOption(null);
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-white to-purple-200 p-4">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-6 md:p-8 space-y-6 border border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            Quiz App
          </h1>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium shadow hover:bg-red-600 active:scale-95 transition-all duration-200"
          >
            Restart
          </button>
        </div>
        <div className="pt-2">{showResult ? <Result /> : <Questions />}</div>
      </div>
    </div>
  );
}
