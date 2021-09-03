import React from "react";
import { IButton } from "../utils/types";

export default function Button({ content, onclick }: IButton) {
  return (
    <button
      className="transition duration-500 hover:-translate-y-1 hover:scale-110 ease-in-out rounded-lg h-20 w-56 self-center bg-secondary font-button font-extrabold text-center text-4xl text-white mt-5"
      onClick={() => onclick}
    >
      {content}
    </button>
  );
}
