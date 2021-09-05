import React, { useState } from "react";
import { IAddRow } from "../utils/types";
import Button from "./Button";

export default function AddRow({ title, imgSRC, data }: IAddRow) {
  const [isActivated, setIsActivated] = useState(true);
  return isActivated ? (
    <div className="absolute flex w-full justify-self-center m-auto -mr-3 justify-center items-center h-full bg-primary bg-opacity-60">
      <div className="flex flex-col bg-white w-3/5 h-3/4 rounded-md ">
        <section className="flex w-full h-full flex-direction-row justify-evenly">
          <img src={imgSRC} alt={`${title} Icon`} className="w-1/4" />
          <section className="flex flex-col justify-center gap-1 w-2/6 font-extrabold text-4xl text-secondary font-primary ">
            <p>Name</p>
            <input
              type="text"
              className="border-4 rounded-lg border-secondary"
            />
            <p>Number of doors</p>
            <input
              type="text"
              className="border-4 rounded-lg border-secondary"
            />
            <p>Min horsepower</p>
            <input
              type="text"
              className="border-4 rounded-lg border-secondary"
            />
            <p>Max horsepower</p>
            <input
              type="text"
              className="border-4 rounded-lg border-secondary"
            />
          </section>
        </section>
        <section className="flex gap-5 justify-end mr-16 mb-4">
          <Button
            content="CONFIRM"
            onclick={() => {
              setIsActivated(false);
            }}
            className="text-white"
          />
          <Button
            content="DISCARD"
            onclick={() => {
              setIsActivated(false);
            }}
            className="bg-white text-secondary"
          />
        </section>
      </div>
    </div>
  ) : null;
}
