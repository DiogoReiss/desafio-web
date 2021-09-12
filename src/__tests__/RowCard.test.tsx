import React from "react";
import { render, screen } from "@testing-library/react";
import RowCard from "../components/RowCard";
import { modes } from "../utils/types";

test("should render a div with an image with table title icon on alt", () => {
  let tableTitle,
    imgSRC = "title";
  let id,
    cardSelected = 0;
  let setCardSelected = jest.fn();
  let pageMode = modes.listingMode;
  let props = {};
  render(
    <RowCard
      tableTitle={tableTitle}
      imgSRC={imgSRC}
      id={id}
      cardSelected={cardSelected}
      setCardSelected={setCardSelected}
      pageMode={pageMode}
      props={props}
    />
  );
  const imgAlt = screen.getByAltText(`${tableTitle} Icon`);
  expect(imgAlt).toBeInTheDocument();
});
