import React, { useContext } from "react";
import Context from "../../Context/CreateContext";

export default function AnswerSheet() {
  const { data, usersAnswer } = useContext(Context);

  return (
    <div className="space-y-5">
      {data.map((ques, index) => (
        <div
          key={ques.id}
          className="p-4 rounded-xl border bg-gray-50 shadow-sm"
        >
          <p className="font-semibold text-gray-800">
            Q.{ques.id} {ques.question}
          </p>
          <p className="mt-2 text-sm text-gray-700">
            Your Answer:{" "}
            <span
              className={`font-medium ${
                ques.options[usersAnswer[index]] === ques.options[ques.answer]
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {ques.options[usersAnswer[index]]}
            </span>
          </p>
          {ques.options[usersAnswer[index]] !== ques.options[ques.answer] && (
            <p className="text-sm text-green-600 mt-1">
              Correct Answer: {ques.options[ques.answer]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
