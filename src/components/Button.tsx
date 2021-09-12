import React from "react";
import { IButton } from "../utils/types";

export default function Button({ content, onclick, className }: IButton) {
  return (
    <button
      className={`rounded-lg h-14 w-48 self-center bg-secondary font-extrabold text-center font-button text-3xl mt-5 ${className}`}
      onClick={() => {
        if (onclick) {
          return onclick();
        }
      }}
    >
      {content}
    </button>
  );
}
