import React, { useState } from "react";
import { IRowCard } from "../utils/types";

export default function RowCard({
  children,
  tableTitle,
  imgSRC,
  id,
}: IRowCard) {
  const [isSelected, setIsSelected] = useState(false);

  return !isSelected ? (
    <div
      className="font-primary flex  flex-col justify-evenly items-center bg-white font-semibold text-2xl text-primary rounded-md w-full h-full"
      onClick={() => setIsSelected(true)}
      key={id}
    >
      <img src={imgSRC} alt={`${tableTitle} Icon`} className="w-2/5" />
      {children}
    </div>
  ) : (
    <div
      className="cursor-pointer bg-secondary rounded-md border-b-8 border-4 border-secondary w-full"
      onClick={() => setIsSelected(false)}
    >
      <div className="font-primary flex  flex-col justify-evenly items-center bg-white font-semibold text-2xl text-primary rounded-md w-full h-full">
        <img src={imgSRC} alt={`${tableTitle} Icon`} className="w-2/5" />
        {children}
      </div>
    </div>
  );
}
