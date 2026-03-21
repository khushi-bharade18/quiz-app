import React, { useContext } from "react";
import Context from "../../Context/CreateContext";

export default function AnswerSheet() {
  const { data, usersAnswer } = useContext(Context);

  return (
    <div className="space-y-4">
      {data.map((ques, index) => (
        <div
          key={ques.id}
          className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
        >
          <p className="text-sm md:text-base font-semibold text-gray-800 leading-snug">
            Q.{ques.id} {ques.question}
          </p>
          <div className="mt-3 space-y-1">
            <p className="text-sm text-gray-600">
              Your Answer:{" "}
              <span
                className={`font-semibold ${
                  usersAnswer[index] === null
                    ? "text-gray-300 italic"
                    : usersAnswer[index] === ques.answer
                      ? "text-green-600"
                      : "text-red-500"
                }`}
              >
                {usersAnswer[index] === null
                  ? "Not Attempted"
                  : ques.options[usersAnswer[index]]}
              </span>
            </p>
            {usersAnswer[index] !== ques.answer && (
              <p className="text-sm text-green-600 font-medium">
                Correct Answer: {ques.options[ques.answer]}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
