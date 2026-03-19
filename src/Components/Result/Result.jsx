import React, { useContext } from "react";
import Context from "../../Context/CreateContext";

export default function Result() {
  const { score, data } = useContext(Context);
  return (
    <div className="flex justify-center items-center mt-6">
      <p className="text-xl font-semibold text-gray-800 bg-indigo-100 px-6 py-3 rounded-xl shadow-md">
        Score : {score}/{data.length}
      </p>
    </div>
  );
}
