import React from "react";
import { Route, Routes } from "react-router";
import Form from "./Pages/Form";
import Quiz from "./Pages/Parent";
import ProtectedRoute from "./Route/ProtectedRoute";
import NotFound from "./Components/NotFound";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
