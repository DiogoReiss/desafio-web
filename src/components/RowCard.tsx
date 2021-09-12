import React from "react";
import { IRowCard, modes } from "../utils/types";
import Data from "../utils/data";

export default function RowCard({
  props,
  tableTitle,
  imgSRC,
  id,
  cardSelected,
  setCardSelected,
  pageMode,
}: IRowCard) {
  const renderPropsCardListing = Object.entries(props).map(([k, i]) => {
    return (
      <p>
        {k}: {i}
      </p>
    );
  });

  const renderPropsCardEdit = Object.entries(props).map(([k, v]: any) => {
    return (
      <input
        placeholder={`${v}`}
        className="bg-primary w-9/12 text-white rounded-xl text-center font-primary font-bold"
        onChange={(e) => {
          tableTitle === "Countries"
            ? (Data.countries[id][k] = e.target.value)
            : (Data.vehicles[id][k] = e.target.value);
        }}
      />
    );
  });
  const currentCardSelected = () => {
    return cardSelected === id ? (
      <div className="cursor-pointer bg-secondary rounded-md border-b-8 border-4 border-secondary w-full">
        <div className="font-primary flex  flex-col justify-evenly items-center bg-white font-semibold text-2xl text-primary rounded-md w-full h-full">
          <img src={imgSRC} alt={`${tableTitle} Icon`} className="w-5/12" />
          {renderPropsCardEdit}
          <button
            className="bg-secondary w-3/6 text-center text-white text-2xl font-bold rounded-md"
            onClick={() => {
              setCardSelected(undefined);
            }}
          >
            SAVE
          </button>
        </div>
      </div>
    ) : (
      <div
        className="font-primary flex  flex-col justify-evenly items-center bg-white font-semibold text-2xl text-primary rounded-md w-full h-full cursor-pointer text-center"
        onClick={() => setCardSelected(id)}
        key={id}
      >
        <img src={imgSRC} alt={`${tableTitle} Icon`} className="w-2/5" />
        {renderPropsCardListing}
      </div>
    );
  };
  const isListingMode = pageMode === modes.listingMode;
  return isListingMode ? (
    <div
      className="font-primary flex  flex-col justify-evenly items-center bg-white font-semibold text-2xl text-primary rounded-md w-full h-full cursor-pointer text-center"
      key={id}
    >
      <img src={imgSRC} alt={`${tableTitle} Icon`} className="w-2/5" />
      {renderPropsCardListing}
    </div>
  ) : (
    currentCardSelected()
  );
}
