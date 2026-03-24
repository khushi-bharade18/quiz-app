import React, { useContext, useEffect } from "react";
import Context from "../Context/CreateContext";
import Questions from "../Components/Questions/Questions";
import Result from "../Components/Result/Result";
import { useNavigate } from "react-router";
import Navbar from "../Components/Questions/Navbar";

export default function Quiz() {
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

  const navigate = useNavigate();

  const totalTime = 10;
  const isLowTime = time <= totalTime * 0.3;

  useEffect(() => {
    if (showResult) return;
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [currQue, showResult]);

  function handleReset() {
    setShowResult(false);
    setScore(0);
    setCurrQue(0);
    setSelectedOption(null);
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-200 to-pink-200">
      <Navbar />

      <div className=" px-4 py-6 flex justify-center">
        <div className="relative w-full max-w-2xl bg-white/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl p-5 md:p-6 space-y-5 border border-white/40">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-300/20 via-purple-300/20 to-pink-300/20 blur-2xl -z-10"></div>

          {!showResult && (
            <div className="absolute top-3 right-3">
              <p
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold shadow transition-all duration-300 ${
                  isLowTime
                    ? "bg-red-100 text-red-600 animate-pulse scale-110"
                    : "bg-green-100 text-green-600"
                }`}
              >
                ⏳ <span className="font-bold">{time}s</span>
              </p>
            </div>
          )}

          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Quiz App
            </h1>
          </div>

          <div>{showResult ? <Result /> : <Questions />}</div>

          <div className="flex justify-center pt-2">
            <button
              onClick={handleReset}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold shadow hover:from-red-600 hover:to-pink-600 active:scale-95 transition-all duration-200"
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
