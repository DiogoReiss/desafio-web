import React from "react";
import { ITableCard } from "../utils/types";

export default function TableCard({
  title,
  imgSRC,
  setTable,
  tableSelectedTitle,
}: ITableCard) {
  return title !== tableSelectedTitle ? (
    <div
      className="flex items-center cursor-pointer justify-evenly text-5xl flex-col bg-white rounded-md w-3/12 h-4/5"
      onClick={() => {
        setTable({ title, wasChosen: true });
      }}
      id={title}
    >
      <img src={imgSRC} alt={`${title} Logo`} />
      <p className="font-primary font-bold text-secondary">{title}</p>
    </div>
  ) : (
    <div
      className="flex items-center cursor-pointer justify-evenly border-2 border-secondary text-5xl bg-secondary rounded-md w-3/12 h-4/5"
      onClick={() => {
        setTable({ title: "", wasChosen: false });
      }}
      id={title}
    >
      <div className="w-full h-full flex flex-col items-center justify-evenly mb-5 rounded-lg bg-white">
        <img src={imgSRC} alt={`${title} Logo`} />
        <p className="font-primary font-bold text-secondary">{title}</p>
      </div>
    </div>
  );
}
