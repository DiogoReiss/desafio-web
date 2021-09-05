import React, { useState } from "react";
import { modes } from "../utils/types";
import Button from "../components/Button";
import addMore from "../assets/addMore.svg";

export default function NavButtons() {
  const [pageMode, setPageMode] = useState<modes>(modes.listingMode);

  return pageMode === modes.listingMode ? (
    <section className="flex justify-end gap-6 mr-20">
      <Button
        content="EDIT"
        onclick={() => setPageMode(modes.editMode)}
        className="text-white"
      />
    </section>
  ) : (
    <section className="flex justify-end gap-6 mr-20 ">
      <div className="text-secondary gap-4 flex text-center w-2/5 justify-center items-center text-4xl font-button font-black mt-3 cursor-pointer ">
        <img src={addMore} alt="add new row" className="w-2/12" />
        ADD ROW
      </div>
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
