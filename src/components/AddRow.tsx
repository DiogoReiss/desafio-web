import React, { useState } from "react";
import { IAddRow, IRouteParams } from "../utils/types";
import { useParams } from "react-router-dom";
import Button from "./Button";
import Vehicles from "../assets/vehicles.svg";
import Countries from "../assets/countries.svg";

export default function AddRow({
  title,
  data,
  toAdd,
  setToAdd,
  cardSelected,
}: IAddRow) {
  let { tableTitle }: IRouteParams = useParams<IRouteParams>();
  const [vehicleCard, setVehicleCard] = useState({
    name: "",
    doors: 0,
    minHP: 0,
    maxHP: 0,
  });
  const [countriesCard, setCountriesCard] = useState({
    name: "",
    acronym: "",
    mortalityRate: 0,
  });

  const addModal = () => {
    return tableTitle === "Vehicles" ? (
      <section className="flex w-full h-full flex-direction-row justify-evenly">
        <img src={Vehicles} alt={`${title} Icon`} className="w-1/4" />
        <section className="flex flex-col justify-center gap-1 w-2/6 font-extrabold text-4xl text-secondary font-primary ">
          <p>Name</p>
          <input
            type="text"
            className="border-4 rounded-lg border-secondary"
            onChange={(e) =>
              setVehicleCard({
                ...vehicleCard,
                name: e.target.value,
              })
            }
          />
          <p>Number of doors</p>
          <input
            type="number"
            onChange={(e) =>
              setVehicleCard({
                ...vehicleCard,
                doors: Number(e.target.value),
              })
            }
            className="border-4 rounded-lg border-secondary"
          />
          <p>Min horsepower</p>
          <input
            type="number"
            className="border-4 rounded-lg border-secondary"
            onChange={(e) =>
              setVehicleCard({
                ...vehicleCard,
                minHP: Number(e.target.value),
              })
            }
          />
          <p>Max horsepower</p>
          <input
            type="number"
            className="border-4 rounded-lg border-secondary"
            onChange={(e) =>
              setVehicleCard({
                ...vehicleCard,
                maxHP: Number(e.target.value),
              })
            }
          />
        </section>
      </section>
    ) : (
      <section className="flex w-full h-full flex-direction-row justify-evenly">
        <img src={Countries} alt={`${title} Icon`} className="w-1/4" />
        <section className="flex flex-col justify-center gap-1 w-2/6 font-extrabold text-4xl text-secondary font-primary ">
          <p>Name</p>
          <input
            type="text"
            className="border-4 rounded-lg border-secondary"
            onChange={(e) =>
              setCountriesCard({
                ...countriesCard,
                name: e.target.value,
              })
            }
          />
          <p>Acronym (ISO 3166)</p>
          <input
            type="text"
            className="border-4 rounded-lg border-secondary"
            onChange={(e) =>
              setCountriesCard({
                ...countriesCard,
                acronym: e.target.value,
              })
            }
          />
          <p>Mortality Rate</p>
          <input
            type="text"
            className="border-4 rounded-lg border-secondary"
            placeholder="DEATHS/YEAR/1000 IN HABITANTS"
            onChange={(e) =>
              setCountriesCard({
                ...countriesCard,
                mortalityRate: Number(e.target.value),
              })
            }
          />
        </section>
      </section>
    );
  };

  const addToTable = () => {
    const id = data.countries.length + 1;
    return tableTitle === "Countries"
      ? data.countries.push({ id, ...countriesCard })
      : data.vehicles.push({ id, ...vehicleCard });
  };

  return toAdd ? (
    <div className="absolute flex w-full justify-self-center m-auto -mr-3 justify-center items-center h-full bg-primary bg-opacity-60">
      <div className="flex flex-col bg-white w-3/5 h-3/4 rounded-md ">
        {addModal()}
        <section className="flex gap-5 justify-end mr-16 mb-4">
          <Button
            content="CONFIRM"
            onclick={() => {
              setToAdd(false);
              addToTable();
              cardSelected(undefined);
            }}
            className="text-white"
          />
          <Button
            content="DISCARD"
            onclick={() => {
              setToAdd(false);
            }}
            className="bg-white text-secondary"
          />
        </section>
      </div>
    </div>
  ) : null;
}
