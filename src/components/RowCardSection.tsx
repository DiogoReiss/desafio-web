import React from "react";
import { useParams } from "react-router-dom";
import { IRouteParams, IRowCardSection } from "../utils/types";
import Data from "../utils/data";
import vehicles from "../assets/vehicles.svg";
import countries from "../assets/countries.svg";
import RowCard from "./RowCard";

export default function RowCardSection({
  cardSelected,
  setCardSelected,
  pageMode,
}: IRowCardSection) {
  let { tableTitle }: IRouteParams = useParams<IRouteParams>();
  const TableRow = (): React.ReactChild | React.ReactChild[] | any => {
    return tableTitle === "Countries"
      ? Data.countries.map(
          ({
            name,
            acronym,
            mortalityRate,
            id,
          }): React.ReactChild | React.ReactChild[] => {
            return (
              <RowCard
                tableTitle={tableTitle}
                imgSRC={countries}
                id={id}
                cardSelected={cardSelected}
                setCardSelected={setCardSelected}
                pageMode={pageMode}
                props={{
                  name,
                  acronym,
                  mortalityRate,
                }}
              />
            );
          }
        )
      : Data.vehicles.map(
          ({
            name,
            doors,
            minHP,
            maxHP,
            id,
          }): React.ReactChild | React.ReactChild[] => {
            return (
              <RowCard
                tableTitle={tableTitle}
                imgSRC={vehicles}
                id={id}
                cardSelected={cardSelected}
                setCardSelected={setCardSelected}
                pageMode={pageMode}
                props={{
                  name,
                  doors,
                  minHP,
                  maxHP,
                }}
              />
            );
          }
        );
  };
  return (
    <section className="grid grid-flow-row grid-cols-4 gap-x-6 gap-y-8 mx-auto w-8/12 h-5/6">
      <TableRow />
    </section>
  );
}
