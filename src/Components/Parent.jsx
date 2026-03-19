import React, { useContext } from "react";
import Questions from "./Questions/Questions";

export default function Parent() {
  return (
    <div>
        <h1>Quiz App</h1>
      <Questions />
    </div>
  );
}
