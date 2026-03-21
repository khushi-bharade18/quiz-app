import React, { useContext, useEffect } from "react";
import Questions from "./Questions/Questions";
import Context from "../Context/CreateContext";
import Result from "./Result/Result";

export default function Parent() {
  const {
    showResult,
    setScore,
    setShowResult,
    currQue,
    setCurrQue,
    setSelectedOption,
    time,
    setTime,
  } = useContext(Context);

  const totalTime = 10;
  const isLowTime = time <= totalTime * 0.3;

  useEffect(() => {
    if (showResult) return;
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [currQue, showResult]);

  function handleReset() {
    setShowResult(false);
    setScore(0);
    setCurrQue(0);
    setSelectedOption(null);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-200 to-pink-200 p-4">
      <div className="relative w-full max-w-2xl bg-white/60 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] rounded-3xl md:p-10 space-y-8 border border-white/40 transition-all duration-300 ">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-300/20 via-purple-300/20 to-pink-300/20 blur-2xl -z-10"></div>
       {!showResult && <div className="absolute top-4 right-4">
          <p
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold shadow transition-all duration-300${isLowTime ? "bg-red-100 text-red-600 animate-pulse scale-120" : "bg-green-100 text-green-600 scale-100"}`}
          >
            ⏳ <span className="font-bold">{time}s</span>
          </p>
        </div>}
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
            Quiz App
          </h1>
        </div>
        <div className="transition-all duration-500 ease-in-out animate-fadeIn">
          {showResult ? <Result /> : <Questions />}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleReset}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg hover:from-red-600 hover:to-pink-600 active:scale-95 transition-all duration-200 hover:shadow-xl"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}
