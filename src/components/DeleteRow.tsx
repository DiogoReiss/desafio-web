import React from "react";
import Button from "../components/Button";
import data from "../utils/data";
import { useParams } from "react-router-dom";
import { IDeleteRow, IRouteParams } from "../utils/types";

export default function DeleteRow({
  toDelete,
  setToDelete,
  cardID,
  cardSelected,
}: IDeleteRow) {
  let { tableTitle }: IRouteParams = useParams<IRouteParams>();

  const deleteCard = () => {
    return tableTitle === "Countries"
      ? data.countries.splice(Number(cardID), 1)
      : data.vehicles.splice(Number(cardID), 1);
  };

  return toDelete ? (
    <div className="absolute flex w-full justify-self-center m-auto -mr-3 justify-center items-center h-full bg-primary bg-opacity-60">
      <div className="flex flex-col bg-white w-3/5 h-2/5 rounded-md ">
        <section className="flex w-full h-full flex-col justify-evenly items-center font-primary font-extrabold text-secondary text-center">
          <h1 className="text-5xl">WARNING</h1>
          <p className="text-3xl">
            we cannot reverse any lost data, are you sure you want to continue?
          </p>
        </section>
        <section className="flex gap-5 justify-end mr-16 mb-4">
          <Button
            content="CONFIRM"
            onclick={() => {
              deleteCard();
              setToDelete(false);
              cardSelected(undefined);
            }}
            className="text-white"
          />
          <Button
            content="DISCARD"
            onclick={() => {
              setToDelete(false);
            }}
            className="bg-white text-secondary"
          />
        </section>
      </div>
    </div>
  ) : null;
}
