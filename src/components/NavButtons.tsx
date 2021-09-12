import React from "react";
import { INavButtons, modes } from "../utils/types";
import Button from "../components/Button";
import addMore from "../assets/addMore.svg";
import deleteRow from "../assets/deleteRow.svg";

export default function NavButtons({
  pageMode,
  setPageMode,
  cardSelected,
  setToAdd,
  setToDelete,
}: INavButtons) {
  const isListingMode = pageMode === modes.listingMode;
  const cardNotSelected = cardSelected === undefined;

  const rowMode = () => {
    return cardNotSelected ? (
      <div
        className="text-secondary gap-4 flex text-center w-2/5 justify-center items-center text-4xl font-button font-black mt-3 cursor-pointer "
        onClick={() => setToAdd(true)}
      >
        <img src={addMore} alt="add new row" className="w-2/12" />
        ADD ROW
      </div>
    ) : (
      <div
        className="text-secondary gap-4 flex text-center w-3/5 justify-center items-center text-4xl font-button font-black mt-3 cursor-pointer "
        onClick={() => setToDelete(true)}
      >
        <img src={deleteRow} alt="add new row" className="w-2/12" />
        DELETE ROW
      </div>
    );
  };
  return isListingMode ? (
    <section className="flex justify-end gap-6 mr-20">
      <Button
        content="EDIT"
        onclick={() => setPageMode(modes.editMode)}
        className="text-white"
      />
    </section>
  ) : (
    <section className="flex justify-end gap-6 mr-20 ">
      {rowMode()}
      <Button
        content="CONFIRM"
        onclick={() => setPageMode(modes.listingMode)}
        className="text-white"
      />
      <Button
        content="DISCARD"
        onclick={() => setPageMode(modes.listingMode)}
        className="bg-white text-secondary"
      />
    </section>
  );
}
