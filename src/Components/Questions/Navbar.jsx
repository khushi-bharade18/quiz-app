import React from "react";

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-white/60 backdrop-blur-lg border-b border-white/40 shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800">Quiz App</h1>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-800">{user?.name}</p>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
      </div>
    </div>
  );
}
