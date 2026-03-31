import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Context from "../Context/CreateContext";
import { useNavigate } from "react-router";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setUserData } = useContext(Context);

  const navigate = useNavigate();

  function submitForm(data) {
    setUserData(data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/quiz");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-200 to-pink-200">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="bg-white p-6 rounded-2xl shadow-lg w-80 border border-purple-200"
      >
        <h2 className="text-xl font-semibold mb-2 text-center text-purple-700">
          Quick Quiz Registration
        </h2>

        <p className="text-sm text-gray-600 mb-4 text-center">
          Fill in your details to start the quiz.
        </p>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4 text-xs text-gray-700 space-y-1">
          <p>• A short quiz will begin after submission.</p>
          <p>• Each question has a time limit of 10 seconds.</p>
          <p>• Choose your answer before time runs out.</p>
          <p>• Your score will be shown at the end.</p>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-200 focus:ring-red-400"
                : "border-purple-200 focus:ring-purple-400"
            }`}
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Please enter valid syntax",
              },
              minLength: {
                value: 2,
                message: "Please enter valid syntax",
              },
              maxLength: {
                value: 32,
                message: "Please enter valid syntax",
              },
            })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your email"
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-200 focus:ring-red-400"
                : "border-purple-200 focus:ring-purple-400"
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
}
