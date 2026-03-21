import React, { useContext, useState } from "react";
import Context from "../../Context/CreateContext";
import AnswerSheet from "./AnswerSheet";

export default function Result() {
  const { score, data } = useContext(Context);
  const [showAnswers, setShowAnswers] = useState(false);
  const totalScore = score / data.length;
  return (
    <div className="flex flex-col items-center justify-center mt-6 gap-4">
      <div className="flex gap-4">
      <p className="text-xl font-semibold text-gray-800 bg-indigo-100 px-6 py-3 rounded-xl shadow-md">
        Score : {score}/{data.length}
      </p>
      <p
        className={`text-lg font-semibold px-4 py-3 rounded-lg shadow-sm inline-block  ${
          score === data.length
            ? "bg-green-100 text-green-700"
            : score >= data.length * 0.7
              ? "bg-indigo-100 text-indigo-700"
              : score >= data.length * 0.4
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-600"
        }`}
      >
        {score === data.length
          ? "Excellent 🎉"
          : score >= data.length * 0.7
            ? "Great 👍"
            : score >= data.length * 0.4
              ? "Good 🙂"
              : "Need Improvement ⚠️"}
      </p>
      </div>
      {!showAnswers && (
        <button
          onClick={() => setShowAnswers(true)}
          className="px-5 py-2 rounded-lg bg-indigo-500 text-white font-medium shadow hover:bg-indigo-600 active:scale-95 transition-all duration-200"
        >
          Show Answer Sheet
        </button>
      )}
      {showAnswers && (
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-5 mt-4">
          <AnswerSheet />
        </div>
      )}
    </div>
  );
}
