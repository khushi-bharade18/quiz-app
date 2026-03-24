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

  const { setUserData, userData } = useContext(Context);

  const navigate = useNavigate();

  function submitForm(data) {
    setUserData(data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/quiz");
  }
  console.log(userData);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-purple-200 to-pink-200">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="bg-white p-6 rounded-2xl shadow-lg w-80 border border-purple-200"
      >
        <h2 className="text-xl font-semibold mb-4 text-center text-purple-700">
          User Form
        </h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            className={`w-full p-2 border  rounded-lg focus:outline-none focus:ring-2 ${errors.name ? "border-red-200 focus:ring-red-400" : "border-purple-200 focus:ring-purple-400"}`}
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
            placeholder="Enter Email"
            className={`w-full p-2 border  rounded-lg focus:outline-none focus:ring-2 ${errors.email ? "border-red-200 focus:ring-red-400" : "border-purple-200 focus:ring-purple-400"}`}
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
          Submit
        </button>
      </form>
    </div>
  );
}
